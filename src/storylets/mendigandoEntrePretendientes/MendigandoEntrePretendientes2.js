import React from "react";
import { Emphasis, NewLine, Option, Storylet } from "components/engine";
import ElPalacioDeAlcinoo1 from "storylets/elPalacioDeAlcinoo/ElPalacioDeAlcinoo1";

const MendigandoEntrePretendientes2 = () => {
  const options = () => [
    // <Option disabled storylet={ElPalacioDeAlcinoo1}>
    //   Examinar los cadáveres
    // </Option>,
    <Option storylet={ElPalacioDeAlcinoo1}>Seguir andando</Option>,
  ];

  return (
    <Storylet options={options}>
      Una de las personas que encabezan la marcha da la voz. Han visto algo.
      <NewLine />
      Al ir acercándoos al lugar, el silencio que os lleva acompañando durante
      el todo el viaje va ganando peso. Hasta hacerse atronador.
      <NewLine />
      Semienterrados en la arena descubrís los cadáveres de dos personas.
      <NewLine />
      Una misma sombra cruza vuestras caras. Un mismo pensamiento común,
      compartido.
      <NewLine />
      <Emphasis>
        Este puede ser el destino que nos aguarde a todos nosotros.
      </Emphasis>
    </Storylet>
  );
};

export default {
  key: "MendigandoEntrePretendientes2",
  storylet: <MendigandoEntrePretendientes2 />,
  title: "Mendigando entre pretendientes",
};
