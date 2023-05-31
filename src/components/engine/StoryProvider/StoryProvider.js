import React from "react";
import Fade from "@mui/material/Fade";
import { ThemeProvider } from "@mui/material/styles";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "components/engine/Container";
import Menu from "components/engine/Menu";
import { DRAWER_WIDTH } from "components/engine/Menu";
import { NotificationProvider } from "components/engine/NotificationProvider";
import StatusBar from "components/engine/StatusBar";
import storylets from "storylets";
import RestartConfirmationDialog from "./RestartConfirmationDialog";
import useStoryState from "./useStoryState";

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "openMenu",
})(({ theme, openMenu }) => ({
  display: "flex",
  height: "100%",
  // marginRight: 0,
  // transition: theme.transitions.create("margin", {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  // ...(openMenu && {
  //   transition: theme.transitions.create("margin", {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginRight: DRAWER_WIDTH,
  // }),
}));

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const { children, initialState, menu, onRestart, renderTitle } = props;

  const theme = useTheme();
  const storyState = useStoryState(storylets.initial, initialState);

  const [openMenu, setOpenMenu] = React.useState(false);

  const [openRestartConfirmation, setOpenRestartConfirmation] =
    React.useState(false);

  const story = {
    currentStorylet: storyState.currentStorylet,
    data: storyState.data,
    hasVisited: storyState.hasVisited,
    move: (storylet, options) => {
      setOpenMenu(false);
      setOpenRestartConfirmation(false);
      storyState.onMove(storylet, options);
    },
    recoverMainBranch: storyState.onRecover,
    restart: (force) => {
      setOpenMenu(false);
      if (force) {
        storyState.onRestart();
        onRestart();
      } else {
        setOpenRestartConfirmation(true);
      }
    },
    setTheme: storyState.onSetTheme,
    theme: storyState.theme,
    update: storyState.onUpdate,
  };

  const permanentMenu = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <StoryContext.Provider value={story}>
      <ThemeProvider theme={storyState.theme || theme}>
        <NotificationProvider autoHideDuration={2000}>
          <Main openMenu={permanentMenu && false}>
            <StatusBar
              onMenuClick={() => story.restart()}
              title={
                renderTitle(storyState.data) || storyState.currentStorylet.title
              }
              TitleProps={{
                timeout:
                  renderTitle(storyState.data) &&
                  theme.transitions.duration.standard,
              }}
            />
            {storylets.values.map((element, index) => (
              <Fade
                key={element.key}
                in={
                  !Boolean(storyState.data["currentSection"]) &&
                  element.key === storyState.currentStorylet.key
                }
                mountOnEnter
                unmountOnExit
              >
                <Container maxWidth="sm">{element.storylet}</Container>
              </Fade>
            ))}

            {typeof children === "function" ? children(story) : children}

            {/* <Menu
              onClose={() => setOpenMenu(false)}
              open={openMenu}
              permanentMenu={permanentMenu}
              values={menu(storyState)}
            /> */}

            <RestartConfirmationDialog
              onAccept={() => {
                setOpenRestartConfirmation(false);
                storyState.onRestart();
                onRestart();
              }}
              onClose={() => setOpenRestartConfirmation(false)}
              open={openRestartConfirmation}
            />
          </Main>
        </NotificationProvider>
      </ThemeProvider>
    </StoryContext.Provider>
  );
};
