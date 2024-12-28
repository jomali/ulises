import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Div100vh from "react-div-100vh";
import Story from "./components/Story";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#90456b",
      },
      secondary: {
        main: "#5c2c44",
      },
      background: {
        paper: "#ece5dd",
        default: "#ece5dd",
      },
      text: {
        primary: "rgba(63, 49, 43, 0.87)",
        secondary: "rgba(63, 49, 43, 0.6)",
        disabled: "rgba(63, 49, 43, 0.38)",
      },
      mode: "light",
    },
  });

  return (
    <Div100vh>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story storyFile="ulises.json" />
      </ThemeProvider>
    </Div100vh>
  );
};

export default App;
