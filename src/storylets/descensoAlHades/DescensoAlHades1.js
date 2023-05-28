import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import LaUltimaCena1 from "storylets/laUltimaCena/LaUltimaCena1";

const DescensoAlHades1 = () => {
  const options = () => [<Option storylet={LaUltimaCena1}>Continuar</Option>];

  return (
    <Storylet options={options}>
      Apenas nos dirigimos las miradas durante el resto del día. El calor es
      insoportable. La sed y el hambre mucho peor. No teníamos agua. Tampoco
      comida. No todo el mundo era capaz de resistirlo. Tres cuerpos se
      desploman inconscientes en la arena.
      <NewLine />
      Los demás seguimos caminando.
    </Storylet>
  );
};

export default {
  key: "DescensoAlHades1",
  storylet: <DescensoAlHades1 />,
  title: "Descenso al Hades",
};
