import React from "react";
import { Story } from "inkjs";

const CLEAN_SCREEN_TAG = "@cleanScreen\n";

type Choice = {
  callback: VoidFunction;
  difficulty?: number;
  disabled?: boolean;
  label: string;
  variant?: "default" | "money";
  key: string;
};

// eslint-disable-next-line no-unused-vars
type Continue = (options?: { choice: number; step?: "all" | "one" }) => void;

type StoryContent = {
  divider?: boolean;
  key: string;
  new: boolean;
  value?: string | null;
};

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

  const handleContinue: Continue = (options) => {
    if (story?.canContinue) {
      const newContent =
        options?.step !== "one"
          ? getNextStorylet(story)
          : getNextParagraph(story);
      const previousContents = newContent.newScreen
        ? []
        : [
            ...contents.map((element) => ({
              ...element,
              new: false,
            })),
            {
              divider: true,
              key: Date.now().toString(),
              new: false,
            },
          ];

      setContents(() => [...previousContents, ...newContent.data]);
    }
  };

  const choices = React.useMemo(() => {
    let result: Choice[] = [];
    if (story?.canContinue) {
      result = [
        {
          callback: () => handleContinue(),
          key: `choice-0-${Date.now().toString()}`,
          label: "…",
        },
      ];
    } else {
      result =
        story?.currentChoices.map((element, index) => {
          const moneyCost = parseInt(element.tags?.[0] ?? "0");
          return {
            callback: () => {
              story.ChooseChoiceIndex(index);
              handleContinue();
            },
            difficulty: moneyCost > 0 ? moneyCost : undefined,
            disabled: moneyCost > story?.variablesState["money"],
            key: `choice-${index}-${Date.now().toString()}`,
            label: element.text,
            variant: moneyCost > 0 ? "money" : "default",
          };
        }) ?? [];
    }
    return result;
  }, [story?.canContinue, story?.currentChoices, story?.variablesState]);

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
      if (nextParagraph === CLEAN_SCREEN_TAG) {
        return getNextParagraph(storyObject, true);
      } else {
        result.data.push({
          key: Date.now().toString(),
          new: true,
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
      if (nextParagraph === CLEAN_SCREEN_TAG) {
        result.newScreen = true;
        continue;
      } else {
        result.data.push({
          key: Date.now().toString(),
          new: true,
          value: nextParagraph,
        });
      }
    }
    return result;
  };

  const handleRestart = React.useCallback(() => {
    if (story) {
      story.ResetState();
      const contents = getNextStorylet(story);
      setContents([...contents.data]);
    }
  }, [story]);

  return {
    canContinue: story?.canContinue || false,
    choices,
    contents,
    continue: handleContinue,
    restart: handleRestart,
    state: {
      money: story?.variablesState["money"] || 0,
    },
  };
};
