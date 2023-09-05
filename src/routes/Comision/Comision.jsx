import { useState } from "react";
import CardComision from "./CardComision";
import "./Comision.css";

const Comision = () => {
  // eslint-disable-next-line no-unused-vars
  const [perfiles, setPerfiles] = useState([
    {
      id: 1,
      titulo_1: "Presidente",
      nombreTitular: "Eduardo Otoná",
      tanda: "Tanda: 66 - 67",
      urlImagen: "",
      titulo_2: "Suplente",
      nombreSuplente: "Enrique Portela",
    },
    {
      id: 2,
      titulo_1: "Secretaria",
      nombreTitular: "Karen Morales",
      tanda: "Tanda: 08 - 10",
      urlImagen: "",
      titulo_2: "Suplente",
      nombreSuplente: "Heber Rodriguez",
    },
    {
      id: 3,
      titulo_1: "Tesorero",
      nombreTitular: "Ramón Ramirez",
      tanda: "Tanda: 82 - 83",
      urlImagen: "",
      titulo_2: "Suplente",
      nombreSuplente: "Daniel Barrios",
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [perfilesComision, setPerfilesComision] = useState([
    {
      id: 1,
      nombreTitular: "Fernando González",
      urlImagen: "",
      titulo_2: "Suplente",
      nombreSuplente: "Fernando Cabrera",
    },
    {
      id: 2,
      nombreTitular: "José López",
      urlImagen: "",
      titulo_2: "Suplente",
      nombreSuplente: "Alejandro Correa",
    },
    {
      id: 3,
      nombreTitular: "Guillermo Arroqui",
      urlImagen: "",
      titulo_2: "Suplente",
      nombreSuplente: "Aldo Martorano",
    },
  ]);

  return (
    <>
      <div className="contorno">
        <h1>Comisión directiva</h1>
        <p className="parrafo">
          La dirección y administración de la Asociación estará a cargo de una
          Comisión Directiva compuesta de tres (3) miembros titulares mayores de
          edad, quienes durarán dos (2) años en sus cargos y podrán ser
          reelectos hasta por un período más. Los mismos se mantendrán en el
          desempeño de sus funciones, al vencimiento del mandato, hasta la toma
          de posesión de los nuevos miembros electos. <br />
          La elección de miembros de la Comisión Directiva se efectuará según el
          procedimiento establecido en el artículo 22 del estatuto aprobado por
          el MEC, conjuntamente con igual número de suplentes preferenciales. La
          Comisión electa designará de su seno los cargos respectivos, con
          excepción del Presidente que lo será quien encabece la lista electiva
          más votada.
        </p>
        <h1>Comisión directiva periodo 2022 - 2024 </h1>
        <div className="perfilList">
          {perfiles.map((perfil) => {
            return (
              <CardComision
                key={perfil.id}
                titulo_1={perfil.titulo_1}
                nombreTitular={perfil.nombreTitular}
                tanda={perfil.tanda}
                urlImagen={perfil.urlImagen}
                titulo_2={perfil.titulo_2}
                nombreSuplente={perfil.nombreSuplente}
              />
            );
          })}
        </div>
        <h1>Comisión fiscal</h1>
        <div className="perfilList">
          {perfilesComision.map((perfilComision) => {
            return (
              <CardComision
                key={perfilComision.id}
                nombreTitular={perfilComision.nombreTitular}
                urlImagen={perfilComision.urlImagen}
                titulo_2={perfilComision.titulo_2}
                nombreSuplente={perfilComision.nombreSuplente}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comision;
