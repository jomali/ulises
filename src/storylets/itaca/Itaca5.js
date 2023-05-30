import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca6 from "./Itaca6";

const Itaca5 = () => {
  const options = (story) => [
    <Option storylet={Itaca6}>Cerrar los ojos</Option>,
  ];

  return (
    <Storylet options={options}>
      Corres y trepas y gritas junto a los demás. Completamente embotado por la
      adrenalina y por el terror. El estallido de disparos cerca. Focos de luz
      cegadora. Tú corres y trepas y gritas.
      <NewLine />
      Y de pronto notas un golpe terrible en las rodillas y caes rodando en el
      suelo. Alguien se abalanza sobre ti y te inmovilizan por la fuerza.
      <NewLine />
      No te resistes. No intentas zafarte. Ya no gritas.
      <NewLine />
      No tienes más fuerzas.
    </Storylet>
  );
};

export default {
  key: "Itaca5",
  storylet: <Itaca5 />,
  title: "Ítaca",
};
