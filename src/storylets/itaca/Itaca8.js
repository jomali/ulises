import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca9 from "./Itaca9";

const Itaca8 = () => {
  const options = (story) => [
    <Option
      difficulty={200}
      disabled
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={Itaca8}
      variant="money"
    >
      Comprar documentación
    </Option>,
    <Option storylet={Itaca9}>Cerrar los ojos</Option>,
  ];

  return (
    <Storylet options={options}>
      Quítate la ropa.
      <NewLine />
      Te encuentras en una habitación con cuatro hombres vestidos con uniforme
      de soldado. El que da la orden se arremanga la camisa y se coloca un
      guante negro de látex. Lloras de miedo y de rabia y de impotencia. Y
      obedeces.
    </Storylet>
  );
};

export default {
  key: "Itaca8",
  storylet: <Itaca8 />,
  title: "Ítaca",
};
