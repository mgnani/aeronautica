/* eslint-disable no-unused-vars */
import { useState } from "react";
import Actividades from "../components/Actividades/Actividades";

const ImagenesHistoria = () => {
  const [actividades, setActividades] = useState([
    {
      id: "01122019",
      fecha: "01.12.2019",
      titulo: "Comenzando el camino.",
      texto: "En 2019, exalumnos de la Escuela Técnica de Aeronáutica del Uruguay se unieron para concretar una idea pendiente: la fundación de la Asociación de Ex Alumnos.",
      urlImagen: [
        "https://photos.app.goo.gl/eYt7HzBR161jKxXv6",
        "https://photos.app.goo.gl/ZSWuuiVmDpZ5sgkB7",
      ],
    },
    {
      id: "09102020",
      fecha: "09.10.2020",
      titulo: "Firma de los estatutos y posterior firma del libro de honor.",
      texto: "El 9 de octubre de 2020,con fecha de 10 de octubre, en presencia de los socios fundadores, de la Comisión Directiva conformada por el Presidente, Eduardo Oroná, la Secretaria Karen Morales y el Tesorero Ramón Ramírez, autoridades de la ETA y de la escribana se llevó a cabo la lectura, firma de los estatutos y posterior firma del libro de honor.",
      urlImagen: [
        "https://photos.app.goo.gl/TMV1pf7TCMYeit6X8",
        "https://photos.app.goo.gl/ZgTXVqAwzjQn8bj59",
      ],
    },
    {
      id: "29102020",
      fecha: "29.10.2020",
      titulo: "Visita al Comandante en Jefe.",
      texto: "Visita al Comandante en Jefe",
      urlImagen: ["https://photos.app.goo.gl/FkizncjrzSBVfYfM7"],
    },
    {
      id: "13082021",
      fecha: "13.08.2021",
      titulo: "Propuesta de Comodato para el Terreno 'El Nogal' ante la FAU.",
      texto:
        "Se presenta formalmente ante la FAU el interés para la obtención de un comodato del terreno ubicado en Cno Pérez “El Nogal.",
      urlImagen: [
        "https://photos.app.goo.gl/PxcLatbQR4wj3Ko36",
        "https://photos.app.goo.gl/B35KELfhMidq9CgJ6",
        "https://photos.app.goo.gl/cy2xpQDNVvpqDiB67",
      ],
    },
    {
      id: "27082021",
      fecha: "27.08.2021",
      titulo: "Personería Jurídica 486/2020 Aprobada por MEC.",
      texto: "Según resolución MEC se aprueba la personería jurídica 486/2020.",
      urlImagen: ["https://photos.app.goo.gl/ocrqqTa23oD5k3F66"],
    },
    {
      id: "10102021",
      fecha: "10.10.2021",
      titulo: "Primer aniversario.",
      texto:
        "El Director de la ETA Cnel (Av) Heriberto Gancio entrega al Presidente E. Oroná una placa en conmemoración por el 1er aniversario.",
      urlImagen: [
        "https://photos.app.goo.gl/tSs3rtoc4SkbhVtk6",
        "https://photos.app.goo.gl/71rFietAk3MMNKU58",
      ],
    },
    {
      id: "25102021",
      fecha: "25.10.2021",
      titulo: "Debut Histórico: Exalumnos de la ETA en Acto Oficial.",
      texto:
        "Por primera vez, exalumnos de la ETA desfilan en un acto oficial.",
      urlImagen: [
        "https://photos.app.goo.gl/pMzJo4ELpiynGXDLA",
        "https://photos.app.goo.gl/icrPhh96jfCSj8rP6",
        "https://photos.app.goo.gl/YqPwYjVDWmqmuVrn9",
      ],
    },
    {
      id: "04112021",
      fecha: "04.11.2021",
      titulo: "Almuerzo de Camaraderia.",
      texto: "Primer Almuerzo de Camaraderia.",
      urlImagen: [
        "https://photos.app.goo.gl/hKfuU7QRwqWppCkh6",
        "https://photos.app.goo.gl/KqMrk1NXuJVnNoA69",
      ],
    },
    {
      id: "22112021",
      fecha: "22.11.2021",
      titulo: "75 Años de la ETA: Entrega de Placa Conmemorativa.",
      texto:
        "Se entrega a la ETA una placa en honor a sus 75 años de fundación.",
      urlImagen: [
        "https://photos.app.goo.gl/ETNqAmpChftVmPNVA",
        "https://photos.app.goo.gl/rfcTjWg9L72X2Jix8",
        "https://photos.app.goo.gl/6UVjwskogrLDnDNNA",
      ],
    },
    {
      id: "08122021",
      fecha: "08.12.2021",
      titulo:
        "Marcos Cardozo: Elegido 'Mejor Compañero' por la Asociación de Ex Alumnos de la ETA.",
      texto:
        "Se otorga al alumno A.T2° Marcos Cardozo el premio de la Asociación de Ex Alumnos de la ETA del Uruguay por ser elegido como el mejor compañero por sus pares.",
      urlImagen: [
        "https://photos.app.goo.gl/Ck5Po9NYzTojxdjv6",
        "https://photos.app.goo.gl/4h17GRyPxTeRLvGW7",
        "https://photos.app.goo.gl/3BeRKyQcQ5X2y2sN7",
      ],
    },
    {
      id: "19022022",
      fecha: "19.02.2022",
      titulo: "Asamblea sobre Proyecto 'El Nogal'.",
      texto:
        "Asamblea Extraordinaria para establecer las directrices del proyecto 'El Nogal'.",
      urlImagen: ["https://photos.app.goo.gl/Ph7NCAXVqL8wfaLK9"],
    },
    {
      id: "08032022",
      fecha: "08.03.2022",
      titulo: "Inauguración de Cuenta en BROU para Cuotas Sociales.",
      texto: "Se inaugura la cuenta en BROU para el pago de cuotas sociales.",
      urlImagen: [
        "https://photos.app.goo.gl/k6HDYXxFtKZHC6ZP8",
        "https://photos.app.goo.gl/X5NeAtCDJGrT9znZ7",
      ],
    },
    {
      id: "21032022",
      fecha: "21.03.2022",
      titulo: "Proyecto 'El Nogal': Presentación en CGFA.",
      texto: "Presentación del proyecto 'El Nogal' ante el CGFA.",
      urlImagen: ["https://photos.app.goo.gl/XG86NJ57dbhJZuSk97"],
    },
    {
      id: "02042022",
      fecha: "02.04.2022",
      titulo: "Asamblea Ordinaria.",
      texto: "Asamblea Ordinaria.",
      urlImagen: ["https://photos.app.goo.gl/atqqwV2cbpXFiWzt8"],
    },
    {
      id: "07052022",
      fecha: "07.05.2022",
      titulo: "Primeras elecciones .",
      texto:
        "Comisión Directiva Presidente Eduardo Oroná - Enrique Portela Secretario Karen Morales - Heber Rodríguez Tesorero Ramón Ramírez - Daniel Barrios. Comisión Fiscal Fernando González - Fernando Cabrera José López - Aldo Marorano Guillermo Arroqui - Daniel Barrios. Comisión Electoral Presidente Carlos Sánchez Secretario Darío Damasco. Vocal José Mario Saravia.",
      urlImagen: ["https://photos.app.goo.gl/atqqwV2cbpXFiWzt8"],
    },
    {
      id: "12082022",
      fecha: "12.08.2022",
      titulo: "Construyendo Juntos: La Transformación de Nuestro Complejo.",
      texto:
        "Desde el primer trazo hasta la última piedra, esta galería captura la esencia y dedicación de nuestros socios y comitiva en la creación de lo que será el corazón de nuestra asociación. A través de estas imágenes, revivimos cada momento de esfuerzo y colaboración, reflejando la pasión y compromiso de la comunidad de Ex Alumnos ETAUy. Cada avance, cada mejora, nos acerca más a nuestra visión: un espacio común donde el legado aeronáutico y la camaradería perduren.",
      urlImagen: [
        "https://photos.app.goo.gl/Kf81cJQW3EbGbq947",
        "https://photos.app.goo.gl/Rj9VkLVQ2LCNDgDd9",
        "https://photos.app.goo.gl/mN8mNMHyXrBz768TA",
        "https://photos.app.goo.gl/1j2NAUvEBX2tDxED7",
      ],
    },
  ]);

  return (
    <>
      {actividades.map((actividad) => {
        return (
          <Actividades
            key={actividad.id}
            titulo={actividad.titulo}
            fecha={actividad.fecha}
            texto={actividad.texto}
            urlImagen={actividad.urlImagen}
          />
        );
      })}
    </>
  );

};

export default ImagenesHistoria