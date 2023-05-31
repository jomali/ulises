import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import MendigandoEntrePretendientes1 from "storylets/mendigandoEntrePretendientes/MendigandoEntrePretendientes1";

const ElPacto4 = () => {
  const options = (story) => [
    <Option storylet={MendigandoEntrePretendientes1}>
      Así que echáis a andar
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Y, sin más, se suben a los dos vehículos y parten, abandonándoos allí.
      <NewLine />
      No piensan a regresar.
      <NewLine />
      Alguien asegura que conoce el camino, que estáis a apenas unos días de la
      frontera. Que podéis llegar andando.
      <NewLine />
      Todavía dudáis durante algunos minutos, indecisos, pero nadie es capaz de
      proponer una idea mejor.
    </Storylet>
  );
};

export default {
  key: "ElPacto4",
  title: "El Pacto",
  storylet: <ElPacto4 />,
};
