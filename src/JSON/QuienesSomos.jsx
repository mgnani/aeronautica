/* eslint-disable no-unused-vars */
import { useState } from "react";
import QuienSomos from "./quienesSomos/QuienSomos";

const QuienesSomos = () => {
  const [persons, setPersons] = useState([
    {
      id: "1",
      titulo: "MISIÓN",
      texto:
        "La Asociación de Ex Alumnos de la Escuela Técnica de Aeronáutica del Uruguay es una asociación civil sin fines de lucro entre cuyos objetivos principales está el de mantener el sentido de pertenencia entre todos los egresados de la Escuela Técnica de Aeronáutica, potenciar su cultura e impulsar todo tipo de actividades sociales, deportivas,culturales, recreativas y también dar un marco a la formación continua de los técnicos egresados.",
    },
    {
      id: "2",
      titulo: "VISIÓN",
      texto:
        "Lograr alcanzar la mayor cantidad de asociados, realizar actividades que nos conviertan en una referencia desde el punto de vista aeronáutico dentro y fuera del país, uniendo lazos con diferentes actores de la aeronáutica. Generar un espacio común que sea la sede de los socios, en la cual se puedan desarrollar un gran campo de actividades que cubran las principales necesidades de los asociados.",
    },
    {
      id: "3",
      titulo: "VALORES",
      texto:
        "La AEAETADU a través de sus asociados fomenta los siguientes valores: Compromiso frente a las responsabilidades que conlleva representar a los que de una u otra manera fueron formados en la Escuela Técnica de Aeronáutica, cercanía, honestidad, sentido de pertenencia, empatía, camaradería y espíritu de cuerpo. ",
    },
    {
      id: "4",
      titulo: "POLÍTICA DE LA ASOCIACIÓN",
      texto:
        "Verificar el cumplimiento de los estatutos y reglamentos internos de la asociación con el fin de crecer diariamente. Trabajar para cumplir con los objetivos planteados a corto y largo plazo velando por los intereses de la asociación y sus asociados.",
    },
  ]);

  return (
    <>
      {persons.map((person) => {
        return (
          <QuienSomos
            key={person.id}
            titulo={person.titulo}
            texto={person.texto}
          />
        );
      })}
    </>
  );
};
export default QuienesSomos;
