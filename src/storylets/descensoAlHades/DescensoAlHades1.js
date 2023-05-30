import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca1 from "storylets/itaca/Itaca1";

const DescensoAlHades1 = () => {
  const options = () => [<Option storylet={Itaca1}>Al norte</Option>];

  return (
    <Storylet options={options}>
      Camináis en fila india bajo el sol inclemente. Semidesnudos. Hostigados a
      cada paso por la sed y el hambre.
      <NewLine />
      No todo el mundo es capaz de resistirlo. Tres cuerpos se desploman
      inconscientes en la arena.
      <NewLine />
      Los demás seguís caminando.
    </Storylet>
  );
};

export default {
  key: "DescensoAlHades1",
  storylet: <DescensoAlHades1 />,
  title: "Descenso al Hades",
};
