import React from "react";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import { Story } from "inkjs";
import AppBar from "../AppBar";
import Container from "../Container";

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
    return story?.canContinue ? (
      <Button onClick={handleContinue}>Continuar</Button>
    ) : (
      <>
        {story?.currentChoices.map((element, index) => (
          <Button
            key={`option-${index}`}
            onClick={() => {
              story.ChooseChoiceIndex(index);
              handleContinue();
            }}
          >
            {element.text}
          </Button>
        ))}
      </>
    );
  };

  return (
    <StoryContext.Provider value={{}}>
      <Main>
        <AppBar
          title="Ulises"
          TitleProps={{ timeout: theme.transitions.duration.standard }}
        />
        <Container maxWidth="sm">
          {contents.map((element, index) => (
            <p key={`content-${index}`}>{element}</p>
          ))}
          {printOptions()}
        </Container>
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
