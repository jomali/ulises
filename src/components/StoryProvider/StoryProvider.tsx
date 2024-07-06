import React from "react";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { AnimatePresence, motion } from "framer-motion";
import { Interweave } from "interweave";
import AppBar from "../AppBar";
import Container from "../Container";
import Option from "../Option";
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

  const printOptions = () => {
    return (
      <Stack direction="column" spacing={1} sx={{ marginTop: 8 }}>
        {story.canContinue ? (
          <Option onClick={() => story.continue()}>...</Option>
        ) : (
          <>
            {story.choices.map((element, index) => {
              const moneyCost = parseInt(element.tags?.[0] ?? "0");
              return (
                <Option
                  disabled={moneyCost > story.state.money}
                  difficulty={moneyCost > 0 ? moneyCost : undefined}
                  variant={moneyCost > 0 ? "money" : undefined}
                  key={`option-${index}`}
                  onClick={() => story.continue({ choice: index })}
                >
                  {element.text}
                </Option>
              );
            })}
          </>
        )}
      </Stack>
    );
  };

  React.useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [story.contents]);

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
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  ref={scrollableRef}
                >
                  <Typography sx={{ marginBottom: 3 }}>
                    <Interweave content={element.value} />
                  </Typography>
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>
          {printOptions()}
        </Container>
      </Main>
    </StoryContext.Provider>
  );
};
