import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { AnimatePresence, motion } from "framer-motion";
import { Interweave } from "interweave";
import AppBar from "../AppBar";
import Container from "../Container";
import Option from "../Option";
import useDebounce from "../useDebounce";
import useStory from "./useStory";

const Main = styled("main")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const StoryContext = React.createContext({});

export const StoryProvider = () => {
  const theme = useTheme();
  const story = useStory("ulises.json");

  const scrollableRef: any = React.useRef();

  const temp = useDebounce(story.last, theme.transitions.duration.shorter + 1);

  React.useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [temp]);

  return (
    <StoryContext.Provider value={{}}>
      <Main>
        <AppBar
          title={`Dinero: ${story.state.money}₺`}
          TitleProps={{ timeout: theme.transitions.duration.standard }}
        />
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <AnimatePresence mode="wait">
              {story.contents.map((element, index) => (
                <motion.div
                  key={`content-${element.key}-${index}`}
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      ease: [0.4, 0, 1, 1], // MUI easeIn
                      duration: theme.transitions.duration.shorter * 0.001,
                    },
                  }}
                  transition={{
                    ease: [0.0, 0, 0.2, 1], // MUI easeOut
                    duration: theme.transitions.duration.standard * 0.001,
                  }}
                >
                  {story.last !== 0 && story.last === index && (
                    <Divider
                      ref={scrollableRef}
                      sx={{ marginBottom: 3, scrollMarginTop: 64 }}
                      flexItem
                      variant="middle"
                    />
                  )}
                  <Typography sx={{ marginBottom: 3 }}>
                    <Interweave content={element.value} />
                  </Typography>
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>

          <Stack direction="column" spacing={1} sx={{ marginTop: 8 }}>
            <AnimatePresence mode="wait">
              {story.choices.map((element) => (
                <motion.div
                  style={{ display: "flex" }}
                  key={element.key}
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      ease: [0.4, 0, 1, 1], // MUI easeIn
                      duration: theme.transitions.duration.shorter * 0.001,
                    },
                  }}
                  transition={{
                    ease: [0.0, 0, 0.2, 1], // MUI easeOut
                    duration: theme.transitions.duration.standard * 0.001,
                  }}
                >
                  <Option
                    difficulty={element.difficulty}
                    disabled={element.disabled}
                    onClick={element.callback}
                    variant={element.variant}
                  >
                    {element.label}
                  </Option>
                </motion.div>
              ))}
            </AnimatePresence>
          </Stack>
        </Container>
      </Main>
    </StoryContext.Provider>
  );
};
