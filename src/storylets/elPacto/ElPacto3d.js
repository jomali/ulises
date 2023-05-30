import React from "react";
import { NewLine, Option, Storylet, Strong } from "components/engine";
import ElPacto4 from "./ElPacto4";

const ElPacto3d = () => {
  const options = (story) => [
    <Option storylet={ElPacto4}>Secarte las lágrimas</Option>,
  ];

  return (
    <Storylet options={options}>
      Con el sabor de la sangre en la boca y lágrimas en los ojos, le ofreces
      diez talentos.
      <NewLine />
      Esto… esto es todo lo que tengo.
      <NewLine />
      El hombre te lanza de nuevo al suelo de una patada, ante la mirada
      aterrorizada de los demás. Nadie se atreve a mover un músculo mientras te
      arranca la camisa, destrozándola. Te arranca después los pantalones y
      vacía los contenidos de los bolsillos en el suelo. Y coge todo el dinero
      que encuentra dentro de tu cartera.
      <NewLine />
      Tienes suerte, en cualquier caso. Consigues conservar a salvo los últimos
      billetes escondidos bajo la suela interior de los zapatos.
      <NewLine />
      <Strong>Has perdido 100 talentos.</Strong>
    </Storylet>
  );
};

export default {
  key: "ElPacto3d",
  title: "El Pacto",
  storylet: <ElPacto3d />,
};
