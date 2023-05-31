import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Div100vh from "react-div-100vh";
import { StoryProvider } from "components/engine";
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

  const [startScreen, setStartScreen] = React.useState(true);

  return (
    <Div100vh>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {startScreen ? (
          <Stack
            direction="column"
            spacing={4}
            sx={{
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Typography variant="h2">Ulises</Typography>
            <Button
              disableElevation
              onClick={() => setStartScreen(false)}
              variant="contained"
            >
              Empezar
            </Button>
          </Stack>
        ) : (
          <StoryProvider
            initialState={{
              money: 250,
              stamina: 100,
            }}
            menu={(story) => []}
            onRestart={() => setStartScreen(true)}
            renderTitle={(storyData) => `Dinero: ${storyData.money}₺`}
          />
        )}
      </ThemeProvider>
    </Div100vh>
  );
};

export default App;
