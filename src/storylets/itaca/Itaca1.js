import React from "react";
import { Emphasis, NewLine, Option, Storylet } from "components/engine";
import Itaca2 from "./Itaca2";
import Itaca3 from "./Itaca3";

const Itaca1 = () => {
  const options = (story) => [
    <Option
      difficulty={200}
      disabled
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={Itaca1}
      variant="money"
    >
      Comprar el pase al otro lado
    </Option>,
    <Option storylet={Itaca2}>Observar control fronterizo</Option>,
    <Option storylet={Itaca3}>Buscar un lugar en el campamento</Option>,
  ];

  return (
    <Storylet options={options}>
      La travesía por el desierto llega a su fin de un modo abrupto y casi por
      sorpresa. Lo conseguisteis, estáis aquí, pero nadie lo celebra. No
      todavía.
      <NewLine />
      Tres vallas dan forma física a la línea imaginaria que separa los dos
      países. Tres vallas que no dejan indiferente a nadie. Tres vallas que
      imponen y encogen el estómago hasta hacerle a uno vomitar y uno vomita
      aunque no sea más que bilis porque ya no queda otra cosa que expulsar. Uno
      vomita porque sabe que en esas tres vallas se han perdido innumerables
      vidas.
      <NewLine />
      <Emphasis>
        Cada vez que se traza una frontera alguien se queda fuera.
      </Emphasis>
      <NewLine />
      Sólo hay dos formas de cruzar al otro lado. Pagando un salvoconducto en el
      control fronterizo, si tienes dinero. O arriesgándote e intentar el salto.
      <NewLine />
      Una suerte de asentamiento improvisado y caótico, con varios cientos de
      tiendas, se ha levantado de vuestro lado de la frontera para todos
      aquellos que no pueden pagar el soborno y están tratando de decidirse
      entre arriesgarlo todo; o rendirse y emprender el camino de vuelta.
    </Storylet>
  );
};

export default {
  key: "Itaca1",
  storylet: <Itaca1 />,
  title: "Ítaca",
};
