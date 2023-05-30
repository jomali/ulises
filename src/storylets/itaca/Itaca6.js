import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca6a from "./Itaca6a";

const Itaca6 = () => {
  const options = (story) => [
    <Option storylet={Itaca6a}>Cerrar los ojos</Option>,
  ];

  return (
    <Storylet options={options}>
      Una celda oscura.
      <NewLine />
      Hedor a orina y a sudor.
      <NewLine />
      Otros cuerpos compartiendo de nuevo el espacio reducido.
    </Storylet>
  );
};

export default {
  key: "Itaca6",
  storylet: <Itaca6 />,
  title: "Ítaca",
};
