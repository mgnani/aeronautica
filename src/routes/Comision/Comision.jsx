import { useState } from "react";
import CardComision from "./CardComision";
import "./Comision.css";
import karen from '../../assets/images/karen.jpg'
import eduardo from '../../assets/images/eduardo.jpg'
import ramon from '../../assets/images/ramon.jpg'
const Comision = () => {
  // eslint-disable-next-line no-unused-vars
  const [perfiles, setPerfiles] = useState([
    {
      id: 1,
      titulo_1: "Presidente",
      nombreTitular: "Eduardo Otoná",
      tanda: "Tanda: 66 - 67",
      urlImagen: eduardo,
      titulo_2: "Suplente",
      nombreSuplente: "Enrique Portela",
    },
    {
      id: 2,
      titulo_1: "Secretaria",
      nombreTitular: "Karen Morales",
      tanda: "Tanda: 08 - 10",
      urlImagen: karen,
      titulo_2: "Suplente",
      nombreSuplente: "Heber Rodriguez",
    },
    {
      id: 3,
      titulo_1: "Tesorero",
      nombreTitular: "Ramón Ramirez",
      tanda: "Tanda: 82 - 83",
      urlImagen: ramon,
      titulo_2: "Suplente",
      nombreSuplente: "Daniel Barrios",
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [perfilesComision, setPerfilesComision] = useState([
    {
      id: 1,
      nombreTitular: "Fernando González",
      urlImagen: "https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg",
      titulo_2: "Suplente",
      nombreSuplente: "Fernando Cabrera",
    },
    {
      id: 2,
      nombreTitular: "José López",
      urlImagen: "https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg",
      titulo_2: "Suplente",
      nombreSuplente: "Alejandro Correa",
    },
    {
      id: 3,
      nombreTitular: "Guillermo Arroqui",
      urlImagen: "https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg",
      titulo_2: "Suplente",
      nombreSuplente: "Aldo Martorano",
    },
  ]);

  return (
    <>
      <div className="caratula">
        <h1 className="tituloCaratula">Comisión</h1>
        <img
          className="imagenCaratula"
          src="https://lh3.googleusercontent.com/pw/AIL4fc9woedg5TlTurjkEH15golxYWM4LcMPyfjyDxeM5BcTbO0Nhx3e6RB3vlaYlouBX4UQ0nxNHP9vs9Vbmaa73cb7_K9KJ6H-VfS8-GYgCLN8tiHpiIv5YJW26HbN3Y60NdmHNfYHQ16SW4oPBBaU9J46=w886-h498-s-no"
          alt=""
        />
      </div>
      <div className="contorno">
        <section>
          <p className="parrafo">
            La dirección y administración de la Asociación estará a cargo de una
            Comisión Directiva compuesta de tres (3) miembros titulares mayores
            de edad, quienes durarán dos (2) años en sus cargos y podrán ser
            reelectos hasta por un período más. Los mismos se mantendrán en el
            desempeño de sus funciones, al vencimiento del mandato, hasta la
            toma de posesión de los nuevos miembros electos.
          </p>
          <p className="parrafo">
            La elección de miembros de la Comisión Directiva se efectuará según
            el procedimiento establecido en el artículo 22 del estatuto aprobado
            por el MEC, conjuntamente con igual número de suplentes
            preferenciales. La Comisión electa designará de su seno los cargos
            respectivos, con excepción del Presidente que lo será quien encabece
            la lista electiva más votada.
          </p>
        </section>
        <section>
          <h2>Comisión directiva periodo 2022 - 2024 </h2>
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
        </section>
        <section>
          <h2>Comisión fiscal</h2>
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
        </section>
      </div>
    </>
  );
};

export default Comision;
