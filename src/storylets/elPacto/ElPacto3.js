import React from "react";
import { Emphasis, NewLine, Option, Storylet } from "components/engine";
import ElPacto3a from "./ElPacto3a";
import ElPacto3b from "./ElPacto3b";
import ElPacto3c from "./ElPacto3c";

const ElPacto3 = () => {
  const options = (story) => [
    <Option storylet={ElPacto3a}>—Ya te di todo lo que tenía</Option>,
    <Option
      difficulty={10}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={ElPacto3b}
      variant="money"
    >
      —Sólo me queda esto
    </Option>,
    <Option
      difficulty={50}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={ElPacto3c}
      variant="money"
    >
      Dar el dinero
    </Option>,
  ];

  return (
    <Storylet options={options}>
      ¿Por qué hemos parado? ¿Dónde estamos?
      <NewLine />
      Uno de vuestros guías se os acerca y os dice que se está acabando la
      gasolina. Si queréis continuar tenéis que pagar para que vayamos a por
      más.
      <NewLine />
      Posiblemente se trate de una farsa. Pero estáis en medio de ninguna parte.
      <NewLine />
      El sol abrasador sobre vuestras cabezas.
      <NewLine />
      Asustados, tus compañeros ceden a la extorsión y pagan.
      <NewLine />
      Tú, te señala. Y te das cuenta de que se trata del mismo tipo con el que
      hablaste en el pueblo. <Emphasis>Cincuenta</Emphasis> duros.
    </Storylet>
  );
};

export default {
  key: "ElPacto3",
  title: "El Pacto",
  storylet: <ElPacto3 />,
};
