import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import MendigandoEntrePretendientes2 from "./MendigandoEntrePretendientes2";

const MendigandoEntrePretendientes1 = () => {
  const options = () => [
    <Option storylet={MendigandoEntrePretendientes2}>
      Seguir andando. Al norte
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Caminamos lentamente pero a ritmo constante sobre el terreno irregular,
      siguiendo dirección norte. Ignoramos dónde nos encontramos, pero sabemos
      que la frontera queda en algún lugar hacia el norte. Así que esa es la
      dirección que decidimos seguir. Al norte.
      <NewLine />
      Piedras y polvo hasta donde alcanza la vista.
      <NewLine />
      Siempre hacia el norte.
      <NewLine />
      Un calor que agrieta los labios y seca la garganta.
    </Storylet>
  );
};

export default {
  key: "MendigandoEntrePretendientes1",
  storylet: <MendigandoEntrePretendientes1 />,
  title: "Mendigando entre pretendientes",
};
