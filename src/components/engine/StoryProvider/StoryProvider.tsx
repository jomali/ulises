import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "../AppBar";
import Container from "../Container";

export const StoryContext = React.createContext({});

export const StoryProvider = () => {
  const theme = useTheme();

  return (
    <StoryContext.Provider value={{}}>
      <Main>
        <AppBar
          title="Ulises"
          TitleProps={{ timeout: theme.transitions.duration.standard }}
        />
        <Container maxWidth="sm">Contents...</Container>
      </Main>
    </StoryContext.Provider>
  );
};

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "openMenu",
})(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));
