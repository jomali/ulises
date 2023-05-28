import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import Itaca4 from "./Itaca4";

const Itaca3 = () => {
  const options = (story) => [
    <Option storylet={Itaca4}>Volver a casa</Option>,
    <Option
      difficulty={50}
      disabled
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={Itaca3}
      variant="money"
    >
      Sobornar al policía
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Te sumas al grupo y saltáis la valla. Sois cientos de personas. La
      resistencia de la valla cede, y se desploma al otro lado de la frontera.
      <NewLine />
      Echas a correr entre el caos. Hay hombres y mujeres que corren a tu lado,
      sin destino fijo. Policías armados corriendo tras vosotros, tratando de
      cortaros el paso.
      <NewLine />
      Corriendo estás a punto de chocar con un equipo de televisión que parece
      estar cubriendo el asalto a la valla. La periodista es una mujer blanca y
      alta, pulcramente vestida, te mira con una expresión de odio en el rostro.
      Decides ignorarla y seguir corriendo pero al pasar a su lado, la mujer te
      zancadillea y caes. Y acto seguido un policía se abalanza sobre ti. ¿A
      dónde te crees que vas, sucio moro?
    </Storylet>
  );
};

export default {
  key: "Itaca3",
  storylet: <Itaca3 />,
  title: "Ítaca",
};
