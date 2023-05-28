import React from "react";
import { NewLine, Option, Storylet, Strong } from "components/engine";
import ElPacto2 from "./ElPacto2";

const ElPacto1b = () => {
  const options = () => [
    <Option storylet={ElPacto2}>Subir a la furgoneta</Option>,
  ];

  return (
    <Storylet options={options}>
      Este no era el trato, pero poco importa. No es que puedas darte la vuelta
      y volver por donde has venido. Aunque desearas hacerlo. Simplemente no
      puedes.
      <NewLine />
      Y ellos lo saben perfectamente.
      <NewLine />
      Al menos la oscuridad te permite no ver su sonrisa cuando le entregas el
      dinero.
      <NewLine />
      <Strong>Has perdido 50 talentos.</Strong>
    </Storylet>
  );
};

export default {
  key: "ElPacto1b",
  title: "El Pacto",
  storylet: <ElPacto1b />,
};
