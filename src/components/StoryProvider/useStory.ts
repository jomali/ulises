import React from "react";
import { Story } from "inkjs";

// eslint-disable-next-line no-unused-vars
type Continue = (options?: { choice: number; step?: "all" | "one" }) => void;

type StoryContent = { key: string; value: string | null };

export default (storyFile: string) => {
  const [story, setStory] = React.useState<InstanceType<typeof Story>>();
  const [contents, setContents] = React.useState<StoryContent[]>([]);

  React.useEffect(() => {
    const fetchStory = async () => {
      const storyData = await fetch(storyFile);
      const result = await storyData.text();
      const inkStory = new Story(result);
      const contents = getNextStorylet(inkStory);
      setContents([...contents.data]);
      setStory(inkStory);
    };

    fetchStory();
  }, [storyFile]);

  const getNextParagraph: (
    // eslint-disable-next-line no-unused-vars
    storyObject: InstanceType<typeof Story>,
    // eslint-disable-next-line no-unused-vars
    newScreen?: boolean
  ) => {
    data: StoryContent[];
    newScreen: boolean;
  } = (storyObject, newScreen = false) => {
    const result: {
      data: StoryContent[];
      newScreen: boolean;
    } = {
      data: [],
      newScreen: newScreen,
    };
    if (storyObject) {
      const nextParagraph = storyObject.Continue();
      if (nextParagraph === "@cleanScreen\n") {
        return getNextParagraph(storyObject, true);
      } else {
        result.data.push({
          key: Date.now().toString(),
          value: nextParagraph,
        });
      }
    }
    return result;
  };

  const getNextStorylet: (
    // eslint-disable-next-line no-unused-vars
    storyObject: InstanceType<typeof Story>,
    // eslint-disable-next-line no-unused-vars
    newScreen?: boolean
  ) => {
    data: StoryContent[];
    newScreen: boolean;
  } = (storyObject, newScreen = false) => {
    const result: { data: StoryContent[]; newScreen: boolean } = {
      data: [],
      newScreen: newScreen,
    };
    while (storyObject?.canContinue) {
      const nextParagraph = storyObject.Continue();
      if (nextParagraph === "@cleanScreen\n") {
        result.newScreen = true;
        continue;
      } else {
        result.data.push({
          key: Date.now().toString(),
          value: nextParagraph,
        });
      }
    }
    return result;
  };

  const handleContinue: Continue = (options) => {
    if (options?.choice || options?.choice === 0) {
      story?.ChooseChoiceIndex(options.choice);
    }
    if (story?.canContinue) {
      setContents((currentContents) => {
        const newContent =
          options?.step !== "one"
            ? getNextStorylet(story)
            : getNextParagraph(story);
        const previousContents = newContent.newScreen
          ? []
          : [...currentContents];
        return [...previousContents, ...newContent.data];
      });
    }
  };

  return {
    canContinue: story?.canContinue || false,
    choices: story?.currentChoices || [],
    contents,
    continue: handleContinue,
    state: {
      money: story?.variablesState["money"] || 0,
    },
  };
};
