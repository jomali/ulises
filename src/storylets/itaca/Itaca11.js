import React from "react";
import { NewLine, Storylet } from "components/engine";

const Itaca11 = () => {
  const options = (story) => [];

  return (
    <Storylet options={options}>
      ¿Qué otra cosa puedes hacer?
      <NewLine />
      Echas a andar.
    </Storylet>
  );
};

export default {
  key: "Itaca11",
  storylet: <Itaca11 />,
  title: "Ítaca",
};
