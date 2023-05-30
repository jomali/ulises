import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca3 from "./Itaca3";

const Itaca2 = () => {
  const options = (story) => [
    <Option
      difficulty={200}
      disabled
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={Itaca3}
      variant="money"
    >
      Comprar el pase al otro lado
    </Option>,
    <Option storylet={Itaca3}>Buscar un lugar en el campamento</Option>,
  ];

  return (
    <Storylet options={options}>
      Tres aberturas atraviesan las tres vallas. Y entre ellas se levanta el
      control fronterizo.
      <NewLine />
      Guardias con uniforme militar y armados con rifles automáticos.
      <NewLine />
      Furgones blindados.
      <NewLine />
      Torres de observación.
      <NewLine />
      Alambrada de espino y barreras cortando el paso al tráfico.
    </Storylet>
  );
};

export default {
  key: "Itaca2",
  storylet: <Itaca2 />,
  title: "Ítaca",
};
