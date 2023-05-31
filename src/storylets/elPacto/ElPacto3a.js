import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import ElPacto3c from "./ElPacto3c";
import ElPacto3d from "./ElPacto3d";

const ElPacto3a = () => {
  const options = (story) => [
    <Option
      difficulty={10}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - 100 })
      }
      storylet={ElPacto3d}
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
      Ceder a la extorsión
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Ya te di antes todo lo q− un puñetazo salvaje interrumpe tu mentira y te
      hace caer al suelo.
      <NewLine />
      No tenemos todo el día. El dinero.
    </Storylet>
  );
};

export default {
  key: "ElPacto3a",
  title: "El Pacto",
  storylet: <ElPacto3a />,
};
