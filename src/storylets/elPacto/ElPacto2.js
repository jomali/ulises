import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import ElPacto3 from "./ElPacto3";

const ElPacto2 = () => {
  const options = () => [<Option storylet={ElPacto3}>—¿Dónde estamos?</Option>];

  return (
    <Storylet options={options}>
      Durante horas viajáis hacinados en la parte de atrás de la furgoneta,
      atravesando carreteras mal asfaltadas y caminos de tierra apenas
      transitados. En total sois once personas, y otros tantos que os acompañan
      en un segundo vehículo. Hombres y mujeres de mirada recelosa y silencios
      prolongados.
      <NewLine />
      Finalmente las furgonetas se detienen y tenéis ocasión de bajaros y
      estirar las piernas.
      <NewLine />
      El paisaje que os rodea es una desolación de piedra, arena y polvo. El
      único accidente que llama la atención es un árbol raquítico, a lo lejos.
    </Storylet>
  );
};

export default {
  key: "ElPacto2",
  title: "El Pacto",
  storylet: <ElPacto2 />,
};
