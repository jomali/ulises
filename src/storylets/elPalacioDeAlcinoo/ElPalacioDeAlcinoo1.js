import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import LasSirenas1 from "storylets/lasSirenas/LasSirenas1";

const ElPalacioDeAlcinoo1 = () => {
  const options = () => [
    <Option storylet={LasSirenas1}>Seguir al norte</Option>,
  ];

  return (
    <Storylet options={options}>
      Pasamos la noche resguardados en unas tiendas abandonadas. Refugio de
      algún grupo nómada de pastores. Tumbados en el suelo, pegados unos a otros
      en el espacio reducido. Sin poder siquiera estirar las piernas. Duermo
      profundamente.
      <NewLine />
      Los rayos del sol nos despiertan temprano en la mañana. Juntamos la poca
      comida y el agua que llevamos encima y desayunamos algo antes de ponernos
      en marcha de nuevo.
    </Storylet>
  );
};

export default {
  key: "ElPalacioDeAlcinoo1",
  storylet: <ElPalacioDeAlcinoo1 />,
  title: "El palacio de Alcínoo",
};
