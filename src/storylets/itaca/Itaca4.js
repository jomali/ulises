import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca5 from "./Itaca5";

const Itaca4 = () => {
  const options = (story) => [
    <Option storylet={Itaca5}>Saltar la valla</Option>,
  ];

  return (
    <Storylet options={options}>
      Despiertas sobresaltado por una cacofonía de gritos.
      <NewLine />
      Hay hombres y mujeres corriendo a tu alrededor. Intentas incorporarte y
      sacudirte el sueño de los ojos mientras observas a una muchedumbre que se
      ha arremolinado a los pies de la primera de las vallas. Y aunque los estás
      viendo con tus propios ojos, aún tardas unos minutos en comprender lo que
      ocurre.
      <NewLine />
      Están saltando. Decenas de ellos. Están saltando.
      <NewLine />
      Si vas a intentarlo tiene que ser ahora.
    </Storylet>
  );
};

export default {
  key: "Itaca4",
  storylet: <Itaca4 />,
  title: "Ítaca",
};
