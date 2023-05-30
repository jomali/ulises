import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca4 from "./Itaca4";

const Itaca3 = () => {
  const options = (story) => [
    <Option storylet={Itaca4}>Cerrar los ojos</Option>,
  ];

  return (
    <Storylet options={options}>
      El campamento está conformado por precarias tiendas construidas con
      cartones y plásticos. La gente anda y duerme entre montones de
      desperdicios. Restos de comida. Letrinas improvisadas. Llanto enérgico de
      los niños pequeños. Llanto apagado de los adultos.
      <NewLine />
      Absolutamente agotado buscas tu propio trozo de suelo entre la basura.
      <NewLine />
      Siempre bajo la presencia desafiante de las vallas coronadas por las
      concertinas.
    </Storylet>
  );
};

export default {
  key: "Itaca3",
  storylet: <Itaca3 />,
  title: "Ítaca",
};
