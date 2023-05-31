import React from "react";
import { NewLine, Option, Storylet, Strong, useStory } from "components/engine";
import Itaca10 from "./Itaca10";

const Itaca9 = () => {
  const options = (story) => [
    <Option storylet={Itaca10}>Cerrar los ojos</Option>,
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
      De nuevo en la celda.
      <NewLine />
      Uno de tus compañeros te abraza y llora contigo en silencio.
      {lostMoney > 0 && (
        <>
          <NewLine />
          <Strong>Has perdido {lostMoney} talentos.</Strong>
        </>
      )}
    </Storylet>
  );
};

export default {
  key: "Itaca9",
  storylet: <Itaca9 />,
  title: "Ítaca",
};
