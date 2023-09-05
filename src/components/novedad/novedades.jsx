import { useState } from "react";
import Novedad from "./novedad";

const Cards = () => {
  // eslint-disable-next-line no-unused-vars
  const [novedades, setNovedades] = useState([
    {
      id: 1,
      titulo: "Firma de los estatutos y posterior firma del libro de honor",
      texto:
        "En presencia de los socios fundadores, de la Comisión Directiva conformada por el Presidente, Eduardo Oroná, la Secretaria Karen Morales y el Tesorero Ramón Ramírez, autoridades de la ETA y de la escribana se llevó a cabo la lectura, firma de los estatutos y posterior firma del libro de honor.",
      fecha: "9 de octubre de 2020",
      urlImagen:
        "https://butwhytho.net/wp-content/uploads/2023/07/Hanamichi-Sakuragi-But-Why-Tho-2.jpg",
    },
    {
      id: 2,
      titulo: "Visita al Comandante en Jefe",
      texto: "Visita al Comandante en Jefe FAU",
      fecha: "29 de octubre de 2020",
      urlImagen: "https://photos.app.goo.gl/FkizncjrzSBVfYfM7",
    },
    {
      id: 3,
      titulo: "Primer aniversario",
      texto:
        "El Director de la ETA Cnel (Av) Heriberto Gancio entrega al Presidente E. Oroná una placa en conmemoración por el 1er aniversario.",
      fecha: " --  ",
      urlImagen: "https://photos.app.goo.gl/D2gmTZAXafZuhnTTA",
    },
  ]);

  return (
    <>
      {novedades.map((novedad) => {
        return (
          <Novedad
            key={novedad.id}
            titulo={novedad.titulo}
            texto={novedad.texto}
            fecha={novedad.fecha}
            urlImagen={novedad.urlImagen}
          />
        );
      })}
    </>
  );
};

export default Cards;
