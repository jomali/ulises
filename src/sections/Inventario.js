import React from "react";
import { useStory } from "components";
import ToggableContainer from "components/ToggableContainer";

const Inventario = () => {
  const story = useStory();
  return (
    <ToggableContainer
      delayed
      maxWidth="lg"
      visible={story.state["currentSection"] === 1}
    >
      Pantalla de inventario.
    </ToggableContainer>
  );
};

export default Inventario;
