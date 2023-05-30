import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca7a from "./Itaca7a";
import Itaca8 from "./Itaca8";

const Itaca7 = () => {
  const options = (story) => [
    <Option
      difficulty={200}
      disabled
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={Itaca7}
      variant="money"
    >
      Comprar documentación
    </Option>,
    <Option difficulty={story.data.money} storylet={Itaca7a} variant="money">
      Sobornar al guardia
    </Option>,
    <Option storylet={Itaca8}>Seguirlo en silencio</Option>,
  ];

  return (
    <Storylet options={options}>
      Tú, acompáñame.
      <NewLine />
      Un guarda te saca de la celda y te conduce a solas por un estrecho
      pasillo. Aterrorizado piensas en el dinero que te queda, escondido bajo la
      suela del zapato. Quizá… quizá sea suficiente para salir de aquí.
      <NewLine />
      Quizá.
    </Storylet>
  );
};

export default {
  key: "Itaca7",
  storylet: <Itaca7 />,
  title: "Ítaca",
};
