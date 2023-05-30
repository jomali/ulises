import React from "react";
import { Option, Storylet } from "components/engine";
import Itaca7 from "./Itaca7";

const Itaca6a = () => {
  const options = (story) => [
    <Option storylet={Itaca7}>Cerrar los ojos</Option>,
  ];

  return (
    <Storylet options={options}>
      Los alaridos de alguien, en alguna parte, amortiguados por las paredes.
    </Storylet>
  );
};

export default {
  key: "Itaca6a",
  storylet: <Itaca6a />,
  title: "Ítaca",
};
