import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca1 from "storylets/itaca/Itaca1";

const LaUltimaCena1 = () => {
  const options = () => [<Option storylet={Itaca1}>Continuar</Option>];

  return (
    <Storylet options={options}>
      Dos dromedarios yacían muertos. Nunca en mi vida había sido tan cierto
      aquello de que la necesidad agudiza el ingenio; gracias a ellos nuestra
      esperanza encontraba una tregua ante tanto desasosiego. Uno de los
      integrantes del grupo tenía una navaja con la que rajamos el estómago de
      ambos animales para conseguir agua. También aprovechamos sus cuerpos y
      pelaje para entrar en calor en medio de la fría noche desértica. Alrededor
      de ellos fuimos ocupando los diversos huecos que quedaban y así
      conseguimos conciliar el sueño.
    </Storylet>
  );
};

export default {
  key: "LaUltimaCena1",
  storylet: <LaUltimaCena1 />,
  title: "Las última cena",
};
