import React from "react";
import { NewLine, Option, Storylet, Strong } from "components/engine";
import ElPacto4 from "./ElPacto4";

const ElPacto3b = () => {
  const options = (story) => [
    <Option storylet={ElPacto4}>Respirar hondo</Option>,
  ];

  return (
    <Storylet options={options}>
      Sólo… esto es todo lo que tengo, mientes, ofreciéndole diez talentos.
      <NewLine />
      El hombre te mira fijamente a los ojos durante unos segundos. Pero al cabo
      coge el dinero de tu mano y se vuelve con sus compañeros.
      <NewLine />
      <Strong>Has perdido 10 talentos.</Strong>
    </Storylet>
  );
};

export default {
  key: "ElPacto3b",
  title: "El Pacto",
  storylet: <ElPacto3b />,
};
