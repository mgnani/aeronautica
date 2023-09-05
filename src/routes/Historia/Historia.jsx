import ImagenesHistoria from "../../JSON/imagenesHistoria";
import "./Historia.css";

const Historia = () => {
  return (
    <>
    <h1>Historia</h1>
      <div className="workArea">
        
        <p>
          Desde hace muchos años, fue intención de los egresados tener algo que
          conserve ese sentido de pertenencia, por eso se había formado la
          OrgETA, una organización integrada de ex alumnos que buscaba mantener
          vivo la camaradería y el espíritu de cuerpo.
        </p>
        <p>
          A fines de año de 2019 se juntaron estos ex alumnos y decidieron
          plasmar formalmente esa idea que hace años venía rondando por sus
          cabeza, aunando las voluntades de todas las tandas egresadas, se
          comenzó el proceso para la formalización de lo que hoy es la
          Asociación de Ex Alumnos de la Escuela Técnica de Aeronáutica del
          Uruguay.
        </p>
        <p>
          El 9 de octubre de 2020,con fecha de 10 de octubre, en presencia de
          los socios fundadores, de la Comisión Directiva conformada por el
          Presidente, Eduardo Oroná, la Secretaria Karen Morales y el Tesorero
          Ramón Ramírez, autoridades de la ETA y de la escribana se llevó a cabo
          la lectura, firma de los estatutos y posterior firma del libro de
          honor.
        </p>
      </div>
      <div className="workArea2">
        <h2>Actividades</h2>
        <ImagenesHistoria/>
      </div>
    </>
  );
};

export default Historia;
