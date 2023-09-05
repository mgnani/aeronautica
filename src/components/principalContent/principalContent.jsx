import { Link } from "react-router-dom";
import "./principalContent.css";

const PrincipalContent = () => {
  return (
    <>
      <div className="principalContent">
        <div className="textContent">
          <h1 className="titleMain">AEAETADU</h1>
          <p className="textIntroduction">
            Somos la Asociación de Ex Alumnos de la Escuela Técnica de
            Aeronáutica del Uruguay, una comunidad vibrante y apasionada por la
            aeronáutica que nace del deseo compartido de mantener vivo el
            sentido de pertenencia entre los egresados de la ETA. Desde nuestros
            primeros pasos en 2019, hasta nuestra formalización en octubre de
            2020, hemos buscado potenciar la cultura aeronáutica y ser un punto
            de referencia tanto en Uruguay como en el exterior.
          </p>
          <Link to="/historia">
            <div className="boton"> Ver más</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrincipalContent;
