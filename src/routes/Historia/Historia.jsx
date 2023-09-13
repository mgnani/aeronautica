import ImagenesHistoria from "../../JSON/imagenesHistoria";
import "./Historia.css";

const Historia = () => {
  return (
    <>
      <div className="caratula">
        <h1 className="tituloCaratula">Historia</h1>
        <img
          className="imagenCaratula"
          src="https://lh3.googleusercontent.com/pw/AIL4fc9woedg5TlTurjkEH15golxYWM4LcMPyfjyDxeM5BcTbO0Nhx3e6RB3vlaYlouBX4UQ0nxNHP9vs9Vbmaa73cb7_K9KJ6H-VfS8-GYgCLN8tiHpiIv5YJW26HbN3Y60NdmHNfYHQ16SW4oPBBaU9J46=w886-h498-s-no"
          alt=""
        />
      </div>
      <div className="workSpace">
        <section>
          <p className="parrafoHistoria">
            Desde hace muchos años, fue intención de los egresados tener algo
            que conserve ese sentido de pertenencia, por eso se había formado la
            OrgETA, una organización integrada de ex alumnos que buscaba
            mantener vivo la camaradería y el espíritu de cuerpo.
          </p>
          <p className="parrafoHistoria">
            A fines de año de 2019 se juntaron estos ex alumnos y decidieron
            plasmar formalmente esa idea que hace años venía rondando por sus
            cabeza, aunando las voluntades de todas las tandas egresadas, se
            comenzó el proceso para la formalización de lo que hoy es la
            Asociación de Ex Alumnos de la Escuela Técnica de Aeronáutica del
            Uruguay.
          </p>
          <p className="parrafoHistoria">
            El 9 de octubre de 2020,con fecha de 10 de octubre, en presencia de
            los socios fundadores, de la Comisión Directiva conformada por el
            Presidente, Eduardo Oroná, la Secretaria Karen Morales y el Tesorero
            Ramón Ramírez, autoridades de la ETA y de la escribana se llevó a
            cabo la lectura, firma de los estatutos y posterior firma del libro
            de honor.
          </p>
        </section>
        <section>
          <h2>Actividades</h2>
          <ImagenesHistoria />
        </section>
      </div>
    </>
  );
};

export default Historia;
