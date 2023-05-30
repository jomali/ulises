import React from "react";
import { NewLine, Option, Storylet, Strong } from "components/engine";
import ElPacto4 from "./ElPacto4";

const ElPacto3c = () => {
  const options = (story) => [<Option storylet={ElPacto4}>Continuar</Option>];

  return (
    <Storylet options={options}>
      Luchando por contener la rabia pagas lo que se te exige.
      <NewLine />
      <Strong>Has perdido 50 talentos.</Strong>
    </Storylet>
  );
};

export default {
  key: "ElPacto3c",
  title: "El Pacto",
  storylet: <ElPacto3c />,
};
