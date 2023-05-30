import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca11 from "./Itaca11";

const Itaca10 = () => {
  const options = (story) => [
    <Option storylet={Itaca11}>Emprender el camino de vuelta</Option>,
  ];

  return (
    <Storylet options={options}>
      Os suben en un furgón blindado.
      <NewLine />
      Apenas alcanzas a distinguir el paisaje tras las ventanillas por culpa de
      la inflamación de la cara, pero sí alcanzas a ver la sombra de las tres
      horribles vallas. Y los restos desperdigados del campamento, ahora
      destruido y abandonado.
      <NewLine />
      Conducen sólo unos pocos kilómetros más antes de detener el vehículo. Os
      sacan del furgón sin siquiera dirigiros la palabra. Arrancan y se marchan,
      dejándoos allí, en el desierto.
    </Storylet>
  );
};

export default {
  key: "Itaca10",
  storylet: <Itaca10 />,
  title: "Ítaca",
};
