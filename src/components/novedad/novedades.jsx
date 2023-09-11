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
        "https://lh3.googleusercontent.com/pw/AIL4fc9CRXCXD-s0A3PhwZYttbrXR3P3sWaZesmUGuQgBqxSssUsX5PP-e4UNjfKRhS6cJk2iIut4CeDDh9WzONcdeNy34FiSYUHyTu4uYDLoSUXKVNxngcZKCAOyRLasI52_zpSuIfqDAJI5B8HH5-K4TB6=w649-h564-s-no",
    },
    {
      id: 2,
      titulo: "Visita al Comandante en Jefe",
      texto: "Visita al Comandante en Jefe FAU",
      fecha: "29 de octubre de 2020",
      urlImagen: "https://lh3.googleusercontent.com/pw/AIL4fc8o4H_pDr2lOEgtuOHb2r70Eaq0spZHGAcyqD4N2up2lcD0gjvBeUiFr9ce3e-UwF2LeDuGjTV5xwTtG3E-pAVsX21bwgyRBNqYOI9Ia969Q0UKQzPA3rLHR3cBieQXNkuBQ8oq7dhAzcW9laV1zbyD=w716-h537-s-no?authuser=0",//https://photos.app.goo.gl/FkizncjrzSBVfYfM7
    },
    {
      id: 3,
      titulo: "Primer aniversario",
      texto:
        "El Director de la ETA Cnel (Av) Heriberto Gancio entrega al Presidente E. Oroná una placa en conmemoración por el 1er aniversario.",
      fecha: " --  ",
      urlImagen: "https://lh3.googleusercontent.com/pw/AIL4fc_U7faG9EVeJmO7iF0xqadKjOyg3leXeI2fbydyWxxnnTSIg5bb9DjXQwljk4loxI3S1FvKaEvFqAVmuQh7hx-RR5p9xVoLOXeQWt57tjGJwC4ZbTP3P7xqbXE_uy9Ygxs5db-MItrrZz_tZFH2SxEQ=w1299-h585-s-no",//https://photos.app.goo.gl/D2gmTZAXafZuhnTTA
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
