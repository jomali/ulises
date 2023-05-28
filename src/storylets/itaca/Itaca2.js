import React from "react";
import { NewLine, Option, Storylet } from "components/engine";

const Itaca2 = () => {
  const options = (story) => [
    <Option
      difficulty={200}
      disabled
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={Itaca2}
      variant="money"
    >
      Comprar documentación
    </Option>,
    <Option storylet={Itaca2}>Cruzar a la fuerza</Option>,
  ];

  return (
    <Storylet options={options}>
      No podéis pasar sin la documentación en regla.
      <NewLine />
      Una pequeña muchedumbre se ha formado. Nadie tiene dinero para comprar los
      papeles. Piensan asaltar las vallas y cruzar por la fuerza.
    </Storylet>
  );
};

export default {
  key: "Itaca2",
  storylet: <Itaca2 />,
  title: "Ítaca",
};
