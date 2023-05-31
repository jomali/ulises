import React from "react";
import { NewLine, Option, Storylet, Strong, useStory } from "components/engine";
import Itaca8 from "./Itaca8";

const Itaca7a = () => {
  const options = (story) => [
    <Option storylet={Itaca8}>Seguir sus indicaciones</Option>,
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
      Apenas eres capaz de articular la frase, pero el guardia cambia el paso y
      os hace apartaros a un lado. Te asegura de que puede ayudarte a salir del lío en el
      que te has metido.
      <NewLine />
      Le das todo el dinero que te queda.
      <NewLine />
      Él asiente con la cabeza. Muy bien.
      <NewLine />
      Con un gesto, señala hacia el final del pasillo. La última puerta, a la derecha.
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
