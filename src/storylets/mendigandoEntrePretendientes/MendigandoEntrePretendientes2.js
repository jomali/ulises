import React from "react";
import { Emphasis, NewLine, Option, Storylet } from "components/engine";
import ElPalacioDeAlcinoo1 from "storylets/elPalacioDeAlcinoo/ElPalacioDeAlcinoo1";

const MendigandoEntrePretendientes2 = () => {
  const options = () => [
    <Option disabled storylet={ElPalacioDeAlcinoo1}>
      Examinar los cadáveres
    </Option>,
    <Option storylet={ElPalacioDeAlcinoo1}>Seguir andando</Option>,
  ];

  return (
    <Storylet options={options}>
      Una de las personas que encabezan la marcha da la voz. Han visto algo.
      <NewLine />
      Al ir acercándonos al lugar, el silencio que nos lleva acompañando durante
      el todo el viaje va cobrando mayor peso si cabe. Hasta hacerse atronador.
      Semienterrados en la arena descubrimos los cadáveres de dos personas.
      <NewLine />
      Una misma sombra cruza por la cara de quiénes me acompañan. Y sé que mi
      propia cara lo está reflejando también. Un único pensamiento silencioso y
      compartido.
      <NewLine />
      <Emphasis>
        Este puede ser el destino que nos aguarda a todos nosotros.
      </Emphasis>
    </Storylet>
  );
};

export default {
  key: "MendigandoEntrePretendientes2",
  storylet: <MendigandoEntrePretendientes2 />,
  title: "Mendigando entre pretendientes",
};
