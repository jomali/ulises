import React from "react";
import { NewLine, Option, Storylet, Strong, useStory } from "components/engine";
import Itaca8 from "./Itaca8";

const Itaca7a = () => {
  const options = (story) => [
    <Option storylet={Itaca8}>Seguirlo en silencio</Option>,
  ];

  const story = useStory();
  const [lostMoney] = React.useState(story.data.money);

  React.useEffect(
    () => story.update({ id: "money", value: 0 }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Storylet options={options}>
      Tengo dinero. Puedo pagar.
      <NewLine />
      Apenas eres capaz de articular la frase, pero el guardia detiene el paso y
      te mira a los ojos. Te asegura de que puede ayudarte a salir del lío en el
      que te has metido.
      <NewLine />
      Le das todo el dinero que te queda.
      <NewLine />
      Él asiente con la cabeza.
      <NewLine />
      Muy bien. Por aquí.
      <NewLine />
      <Strong>Has perdido {lostMoney} talentos.</Strong>
    </Storylet>
  );
};

export default {
  key: "Itaca7a",
  storylet: <Itaca7a />,
  title: "Ítaca",
};
