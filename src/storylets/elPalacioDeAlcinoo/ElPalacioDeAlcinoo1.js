import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import DescensoAlHades1 from "storylets/descensoAlHades/DescensoAlHades1";
import ElPalacioDeAlcinoo2 from "./ElPalacioDeAlcinoo2";

const ElPalacioDeAlcinoo1 = () => {
  const options = (story) => [
    <Option
      difficulty={10}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={ElPalacioDeAlcinoo2}
      variant="money"
    >
      Pagar por el desayuno
    </Option>,
    <Option storylet={DescensoAlHades1}>Ponerse en camino</Option>,
  ];

  return (
    <Storylet options={options}>
      Pasáis la noche resguardados en unas casas de barro. Refugio de algún
      grupo de pastores nómadas. Tumbados en el suelo, pegados unos a otros en
      el espacio reducido. Sin poder siquiera estirar las piernas. Duermes
      profundamente.
      <NewLine />
      Los rayos del sol te despiertan temprano en la mañana. Alguien saca algo
      de comida y agua de una mochila y se ofrece a compartirla con los demás.
      Siempre y cuando le paguéis por ello.
    </Storylet>
  );
};

export default {
  key: "ElPalacioDeAlcinoo1",
  storylet: <ElPalacioDeAlcinoo1 />,
  title: "El palacio de Alcínoo",
};
