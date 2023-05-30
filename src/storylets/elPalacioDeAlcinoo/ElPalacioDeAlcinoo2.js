import React from "react";
import { NewLine, Option, Storylet, Strong } from "components/engine";
import DescensoAlHades1 from "storylets/descensoAlHades/DescensoAlHades1";

const ElPalacioDeAlcinoo2 = () => {
  const options = () => [<Option storylet={DescensoAlHades1}>Al norte</Option>];

  return (
    <Storylet options={options}>
      Abrís unas latas de comida envasada. Os repartís un poco de pan duro.
      <NewLine />
      Os ponéis en camino.
      <NewLine />
      <Strong>Has perdido 10 talentos.</Strong>
    </Storylet>
  );
};

export default {
  key: "ElPalacioDeAlcinoo2",
  storylet: <ElPalacioDeAlcinoo2 />,
  title: "El palacio de Alcínoo",
};
