import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca2 from "./Itaca2";

const Itaca1 = () => {
  const options = (story) => [
    <Option storylet={Itaca2}>Atravesar control fronterizo</Option>,
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
