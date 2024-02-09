import React from "react";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { Story } from "inkjs";
import AppBar from "../AppBar";
import Container from "../Container";
import Option from "../Option";

const Main = styled("main")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const StoryContext = React.createContext({});

export const StoryProvider = () => {
  const theme = useTheme();

  const [story, setStory] = React.useState<InstanceType<typeof Story>>();
  const [contents, setContents] = React.useState<(string | null)[]>([]);

  React.useEffect(() => {
    const fetchStory = async () => {
      const storyData = await fetch("ulises.json");
      const result = await storyData.text();
      setStory(new Story(result));
    };

    fetchStory();
  }, []);

  const handleContinue = () => {
    if (story?.canContinue) {
      const updatedContents: (string | null)[] = [...contents];
      updatedContents.push(story.Continue());
      setContents(updatedContents);
    }
  };

  const printOptions = () => {
    return (
      <Stack direction="column" spacing={1}>
        {story?.canContinue ? (
          <Option onClick={handleContinue}>...</Option>
        ) : (
          <>
            {story?.currentChoices.map((element, index) => {
              const isMoneyOption = element.tags?.length;
              return (
                <Option
                  difficulty={
                    isMoneyOption
                      ? parseInt(element.tags?.[0] ?? "0")
                      : undefined
                  }
                  variant={isMoneyOption ? "money" : undefined}
                  key={`option-${index}`}
                  onClick={() => {
                    story.ChooseChoiceIndex(index);
                    handleContinue();
                  }}
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

  return (
    <StoryContext.Provider value={{}}>
      <Main>
        <AppBar
          title={`Dinero: ${story?.variablesState["money"]}₺`}
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
            {contents.map((element, index) => (
              <p key={`content-${index}`}>{element}</p>
            ))}
          </Box>
          {printOptions()}
        </Container>
      </Main>
    </StoryContext.Provider>
  );
};
