import { useState } from "react";
import Card from "./card";

const Cards = () => {
  // eslint-disable-next-line no-unused-vars
  const [novedades, setNovedades] = useState([
    {
      id: 1,
      titulo: "Firma de los estatutos y posterior firma del libro de honor",
      texto:
        "En presencia de los socios fundadores, de la Comisión Directiva conformada por el Presidente, Eduardo Oroná, la Secretaria Karen Morales y el Tesorero Ramón Ramírez, autoridades de la ETA y de la escribana se llevó a cabo la lectura, firma de los estatutos y posterior firma del libro de honor.",
      fecha: "9 de octubre de 2020",
      urlImagen: [
        "https://photos.app.goo.gl/TMV1pf7TCMYeit6X8",
        "https://photos.app.goo.gl/ZgTXVqAwzjQn8bj59",
      ],
    },
    {
      id: 2,
      titulo: "Visita al Comandante en Jefe",
      texto: "Visita al Comandante en Jefe FAU",
      fecha: "29 de octubre de 2020",
      urlImagen: ["https://photos.app.goo.gl/FkizncjrzSBVfYfM7"],
    },
    {
      id: 3,
      titulo: "Primer aniversario",
      texto:
        "El Director de la ETA Cnel (Av) Heriberto Gancio entrega al Presidente E. Oroná una placa en conmemoración por el 1er aniversario.",
      fecha: " --  ",
      urlImagen: [
        "https://photos.app.goo.gl/D2gmTZAXafZuhnTTA",
        "https://photos.app.goo.gl/oQ6ns2EkPMRY8P8XA",
        "https://photos.app.goo.gl/XGihwVtFzGzXWnA97",
      ],
    },
    {
      id: 4,
      titulo: "Construyendo Juntos: La Transformación de Nuestro Complejo",
      texto:
        "Desde el primer trazo hasta la última piedra, esta galería captura la esencia y dedicación de nuestros socios y comitiva en la creación de lo que será el corazón de nuestra asociación. A través de estas imágenes, revivimos cada momento de esfuerzo y colaboración, reflejando la pasión y compromiso de la comunidad de Ex Alumnos ETAUy. Cada avance, cada mejora, nos acerca más a nuestra visión: un espacio común donde el legado aeronáutico y la camaradería perduren.",
      fecha: " --  ",
      urlImagen: [
        "https://photos.app.goo.gl/Kf81cJQW3EbGbq947",
        "https://photos.app.goo.gl/Rj9VkLVQ2LCNDgDd9",
        "https://photos.app.goo.gl/mN8mNMHyXrBz768TA",
        "https://photos.app.goo.gl/1j2NAUvEBX2tDxED7",
        "https://photos.app.goo.gl/crEr2XeTGT4JMi4i9",
        "https://photos.app.goo.gl/bu1SsNTBPLhsG7NS9",
        "https://photos.app.goo.gl/depg47HEmo1tpUEX6",
      ],
    },
  ]);

  return (
    <>
      {novedades.slice(0, 3).map((novedad) => {
        return (
          <Card
            key={novedad.id}
            titulo={novedad.titulo}
            texto={novedad.texto}
            fecha={novedad.fecha}
          />
        );
      })}
    </>
  );
};

export default Cards;
