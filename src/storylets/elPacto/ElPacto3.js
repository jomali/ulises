import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import MendigandoEntrePretendientes1 from "storylets/mendigandoEntrePretendientes/MendigandoEntrePretendientes1";

const ElPacto3 = () => {
  const options = (story) => [
    <Option storylet={MendigandoEntrePretendientes1}>
      —Te di todo lo que tenía
    </Option>,
    <Option
      difficulty={10}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={MendigandoEntrePretendientes1}
      variant="money"
    >
      —Esto es todo cuanto me queda
    </Option>,
    <Option
      difficulty={50}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={MendigandoEntrePretendientes1}
      variant="money"
    >
      Dar el dinero
    </Option>,
  ];

  return (
    <Storylet options={options}>
      ¿Por qué hemos parado? ¿Dónde estamos?
      <NewLine />
      Uno de vuestros guías se os acerca y os indica que se ha acabado la
      gasolina. Si queréis continuar tenemos que ir a comprar más, dice.
      <NewLine />
      Y con ese pretexto os demanda más dinero a todos. Posiblemente se trate de
      una farsa. Pero estáis en medio de ninguna parte.
      <NewLine />
      El sol abrasador sobre vuestras cabezas.
      <NewLine />
      Tus compañeros ceden a la extorsión y pagan.
      <NewLine />
      Tú, te señala. Es el mismo que os recibió en el pueblo. Los cincuenta
      talentos.
    </Storylet>
  );
};

export default {
  key: "ElPacto3",
  title: "El Pacto",
  storylet: <ElPacto3 />,
};
