import React from "react";
import { NewLine, Option, Storylet } from "components/engine";
import ElPacto1a from "./ElPacto1a";
import ElPacto1b from "./ElPacto1b";

const ElPacto1 = () => {
  const options = (story) => [
    <Option storylet={ElPacto1a}>—Eran diez talentos</Option>,
    <Option
      difficulty={50}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={ElPacto1b}
      variant="money"
    >
      Dar el dinero
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Los cincuenta duros.
      <NewLine />
      La furgoneta está aparcada en las afueras del pueblo, junto a un edificio
      que bien pudo ser algún tipo de almacén en el pasado aunque ahora se
      levanta como un bloque de ladrillos cascarillados y ventanas rotas. Pasan
      varios minutos de las dos de la madrugada. La noche no tiene luna y la
      oscuridad es espesa. Viscosa. No se oye nada más que los susurros
      intranquilos de tus compañeros y las instrucciones cortantes pero en voz
      queda de vuestros guías.
      <NewLine />
      Cincuenta duros, repite, tendiéndote una mano.
    </Storylet>
  );
};

export default {
  key: "ElPacto1",
  title: "El Pacto",
  storylet: <ElPacto1 />,
};
