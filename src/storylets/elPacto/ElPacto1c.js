import React from "react";
import { NewLine, Option, Storylet, Strong } from "components/engine";
import ElPacto2 from "./ElPacto2";

const ElPacto1c = () => {
  const options = () => [
    <Option storylet={ElPacto2}>Os ponéis en marcha</Option>,
  ];

  return (
    <Storylet options={options}>
      Le das el dinero que te pide y subes a la furgoneta.
      <NewLine />
      <Strong>Has perdido 50 talentos.</Strong>
    </Storylet>
  );
};

export default {
  key: "ElPacto1c",
  title: "El Pacto",
  storylet: <ElPacto1c />,
};
