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
import RestartConfirmationDialog from "../RestartConfirmationDialog";
import useDebounce from "../useDebounce";
import useStory from "./useStory";

const Main = styled("main")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

const Story: React.FC<IStory> = (props) => {
  const { storyFile } = props;

  const [restartDialogOpen, setRestartDialogOpen] = React.useState(false);

  const theme = useTheme();
  const story = useStory(storyFile);

  const scrollableRef: React.RefObject<HTMLElement | undefined> =
    React.useRef();

  const contentLength = useDebounce(
    story.contents.length,
    theme.transitions.duration.shorter + 1
  );

  React.useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [contentLength]);

  return (
    <Main>
      <AppBar
        title={`Dinero: ${story.state.money}₺`}
        TitleProps={{ timeout: theme.transitions.duration.standard }}
        onMenuClick={() => setRestartDialogOpen(true)}
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
                key={`content-${index}-${element.key}`}
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
                {element.divider ? (
                  <Divider
                    ref={scrollableRef as React.RefObject<HTMLHRElement>}
                    sx={{ marginBottom: 3, scrollMarginTop: 64 }}
                    flexItem
                    variant="middle"
                  />
                ) : (
                  <Typography
                    sx={{
                      color: (theme) =>
                        element.new ? "inherit" : theme.palette.text.disabled,
                      marginBottom: 3,
                    }}
                  >
                    <Interweave content={element.value} />
                  </Typography>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        <Stack direction="column" spacing={1} sx={{ marginTop: 8 }}>
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
        </Stack>
      </Container>

      <RestartConfirmationDialog
        onAccept={() => story.restart()}
        onClose={() => setRestartDialogOpen(false)}
        open={restartDialogOpen}
      />
    </Main>
  );
};

export interface IStory {
  storyFile: string;
}

export default Story;
