import React from "react";
import { Emphasis, NewLine, Option, Storylet } from "components/engine";
import ElPacto1c from "./ElPacto1c";

const ElPacto1a = () => {
  const options = (story) => [
    <Option
      difficulty={50}
      onClick={(value) =>
        story.update({ id: "money", value: story.data.money - value })
      }
      storylet={ElPacto1c}
      variant={"money"}
    >
      Dar el dinero
    </Option>,
  ];

  return (
    <Storylet options={options}>
      Habíamos quedado… el trato eran diez talentos.
      <NewLine />
      Bueno, el trato <Emphasis>ahora</Emphasis> son cincuenta talentos, te
      contesta. Si quieres subir, pagas. Si no te das la vuelta y te vuelves por
      donde has venido.
      <NewLine />
      Miras a tu espalda, en dirección al pueblo que duerme a un centenar de
      metros. Y más allá. Hacia las gentes, los lugares, los recuerdos que han
      quedado sepultados tras la caída de la noche oscura.
      <NewLine />
      Sabes perfectamente que ahora mismo no puedes regresar allí, por mucho que
      lo desearas.
    </Storylet>
  );
};

export default {
  key: "ElPacto1a",
  title: "El Pacto",
  storylet: <ElPacto1a />,
};
