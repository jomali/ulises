import React from "react";
import { NewLine, Option, Storylet } from "components/engine";

const Itaca1 = () => {
  const options = (story) => [
    <Option storylet={Itaca1}>Continuar</Option>,
    <Option
      difficulty={200}
      disabled
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={Itaca1}
      variant="money"
    >
      Comprar documentación
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Desde lo alto de un pequeño promontorio lo vemos por fin. El puesto
      fronterizo. ¡Hemos llegado!
      <NewLine />
      Hay una extensa fila de vehículos aguardando pacientemente su turno para
      pasar el control fronterizo y cruzar al otro lado. En el control, guardias
      armados con rifles automáticos montando guardia y revisando documentos.
      Varios furgones blindados. Una gruesa barrera cortando el paso.
    </Storylet>
  );
};

export default {
  key: "Itaca1",
  storylet: <Itaca1 />,
  title: "Ítaca",
};
