import React from "react";
import Option from "components/engine/Option/Option";
import Storylet from "components/engine/Storylet";
import Recibidor from "../storylets/laCasa/Recibidor";

const Llaves = () => {
  return (
    <Storylet
      options={(story) => [
        <Option onClick={() => story.move(Recibidor)}>
          Bajar al recibidor
        </Option>,
      ]}
    >
      !!------------------------------------------------------------------------------
      Llaves: switch (n) 1: ! ##Examine (A) print "Además de las llaves de su
      coche y del piso en Madrid ahora tiene también las llaves heredadas de su
      padre. Una Sally en miniatura, de *Pesadilla Antes de Navidad*, sirve de
      adorno del llavero."; new_line; return true; 2: ! ##Examine (B -
      Continuación al mensaje A, la primera vez que se mira) print "Acaricia
      suavemente el muñequito con el pulgar. Carmen se lo había regalado medio
      en broma después de que Silvia empezase a llamarla así tras ver la
      película juntas un sábado por la noche. Sally... sonríe. Alta, delgaducha,
      de pelo largo caoba; el parecido con ella le seguía resultando
      tremendamente gracioso."; new_line; return true;
      !!------------------------------------------------------------------------------
      Bolso: switch (n) 1: ! ##Examine print "Es [un Bolso] bandolera negro.
      Cómodo, sencillo, barato."; return true; 2: ! ##Examine (B - Continuación,
      cuando contiene objetos) print " Dentro tiene [lista de objetos en
      bolso]."; return true;
      !!------------------------------------------------------------------------------
      Abrigo: switch (n) 1: ! ##Examine print "[Un Abrigo] largo de color gris.
      Sencillo, como la mayor parte de sus cosas."; new_line; return true; 2: !
      ##Iron print "Sacude un poco [el Abrigo] con la mano."; new_line; return
      true;
    </Storylet>
  );
};

export default {
  key: "llaves",
  storylet: <Llaves />,
  title: "Llaves",
};
