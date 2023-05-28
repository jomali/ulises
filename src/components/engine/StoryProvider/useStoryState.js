import React from "react";
import { useTheme } from "@mui/material/styles";
import useDebounce from "components/engine/useDebounce/useDebounce";

const ACTION = {
  recoverBranchTriggered: "recoverBranchTriggered",
  restartCompleted: "restartCompleted",
  restartTriggered: "restartTriggered",
  setTheme: "setTheme",
  transitionCompleted: "transitionCompleted",
  transitionTriggered: "transitionTriggered",
  update: "update",
};

export default (initialStorylet = {}, initialState = {}) => {
  const theme = useTheme();

  const initialStoryState = {
    other: {
      ...initialState,
    },
    restart: false,
    storylets: {
      branched: null,
      current: { key: initialStorylet.key, title: initialStorylet.title },
      next: null,
      visited: new Set(),
    },
    theme: null,
  };

  const [storyState, dispatch] = React.useReducer((previousState, action) => {
    let visitedStorylets;

    switch (action.type) {
      case ACTION.recoverBranchTriggered:
        visitedStorylets = previousState.storylets.visited;
        visitedStorylets.add(previousState.storylets.current.key);
        return Boolean(previousState.storylets.branched)
          ? {
              ...previousState,
              storylets: {
                ...previousState.storylets,
                branched: null,
                current: null,
                next: previousState.storylets.branched,
                visited: visitedStorylets,
              },
            }
          : previousState;

      case ACTION.restartCompleted:
        return initialStoryState;

      case ACTION.restartTriggered:
        return {
          ...previousState,
          restart: true,
          storylets: {
            ...previousState.storylets,
            current: null,
          },
        };

      case ACTION.setTheme:
        return {
          ...previousState,
          theme: action.payload,
        };

      case ACTION.transitionCompleted:
        return {
          ...previousState,
          storylets: {
            ...previousState.storylets,
            current: previousState.storylets.next,
            next: null,
          },
        };

      case ACTION.transitionTriggered:
        const { options = {}, ...storylet } = action.payload;
        visitedStorylets = previousState.storylets.visited;
        visitedStorylets.add(previousState.storylets.current.key);
        return {
          ...previousState,
          storylets: {
            ...previousState.storylets,
            branched: options.branched
              ? previousState.storylets.current
              : previousState.storylets.branched,
            current: null,
            next: Boolean(storylet.key)
              ? storylet
              : previousState.storylets.current,
            visited: visitedStorylets,
          },
        };

      case ACTION.update:
        return {
          ...previousState,
          other: {
            ...previousState.other,
            [action.payload?.id]: action.payload?.value,
          },
        };

      default:
        return previousState;
    }
  }, initialStoryState);

  const nextStorylet = useDebounce(
    storyState.storylets.next,
    theme.transitions.duration.standard
  );

  React.useEffect(() => {
    if (Boolean(nextStorylet?.key)) {
      dispatch({ type: ACTION.transitionCompleted });
    }
  }, [nextStorylet?.key]);

  const restart = useDebounce(
    storyState.restart,
    theme.transitions.duration.standard
  );

  React.useEffect(() => {
    if (restart) {
      dispatch({ type: ACTION.restartCompleted });
    }
  }, [restart]);

  return {
    currentStorylet: storyState.storylets.current || {},
    data: storyState.other,
    isBranched: Boolean(storyState.storylets.branched),
    hasVisited: (storylet) => storyState.storylets.visited.has(storylet.key),
    onMove: (storylet, options) =>
      dispatch({
        type: ACTION.transitionTriggered,
        payload: Boolean(storylet)
          ? { key: storylet.key, options: options, title: storylet.title }
          : {},
      }),
    onRecover: () => dispatch({ type: ACTION.recoverBranchTriggered }),
    onRestart: () => dispatch({ type: ACTION.restartTriggered }),
    onSetTheme: (theme) => dispatch({ type: ACTION.setTheme, payload: theme }),
    onUpdate: (newValue = {}) =>
      dispatch({ type: ACTION.update, payload: newValue }),
    theme: storyState.theme,
  };
};
