import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import DescensoAlHades1 from "storylets/descensoAlHades/DescensoAlHades1";

const LasSirenas1 = () => {
  const options = () => [
    <Option storylet={DescensoAlHades1}>Continuar</Option>,
  ];

  return (
    <Storylet options={options}>
      Una humareda de polvo en el horizonte. Con la cabeza embotada por el
      cansancio y el calor tardo algo de tiempo en comprender. Una furgoneta se
      acerca a nosotros. ¡Estamos salvados!
      <NewLine />
      No tardamos en descubrir el error. El vehículo se detiene a unos diez
      metros de donde nos encontramos y salen tres tuaregs de aspecto hosco,
      portando fusiles de asalto. Nos exigen la comida y el agua que nos queda.
      Uno de mis compañeros se opone. Le disparan en el estómago sin inmutarse
      antes de huir.
    </Storylet>
  );
};

export default {
  key: "LasSirenas1",
  storylet: <LasSirenas1 />,
  title: "Las Sirenas",
};
