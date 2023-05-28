import React from "react";
import Snackbar from "./Snackbar";

const ACTION_OPEN = "ACTION_OPEN";
const ACTION_CLOSE = "ACTION_CLOSE";

export const NotificationContext = React.createContext();

export const NotificationProvider = (props) => {
  const { autoHideDuration, children } = props;

  const initialState = React.useMemo(
    () => ({
      message: "",
      open: false,
      variant: "success",
    }),
    []
  );
  const [state, dispatch] = React.useReducer((state, action) => {
    const { message, variant, ...otherAttributes } = action.payload;

    switch (action.type) {
      case ACTION_CLOSE:
        return {
          ...state,
          open: false,
        };
      case ACTION_OPEN:
        return {
          ...state,
          ...otherAttributes,
          message: message || initialState.message,
          open: true,
          variant: variant || initialState.variant,
        };
      default:
        return state;
    }
  }, initialState);

  const handleClose = () => {
    dispatch({
      payload: {},
      type: ACTION_CLOSE,
    });
  };

  const handleOpen = (message, options = {}) => {
    if (!state.open) {
      dispatch({
        payload: { ...options, message: message },
        type: ACTION_OPEN,
      });
    }
  };

  return (
    <>
      <NotificationContext.Provider value={{ open: handleOpen }}>
        {children}
      </NotificationContext.Provider>
      <Snackbar
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        open={state.open}
        severity={state.variant}
      >
        {state.message}
      </Snackbar>
    </>
  );
};
