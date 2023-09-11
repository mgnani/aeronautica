import "./footer.css";
import imagen from "../../assets/logo.png";

import { MdOutlinePhoneIphone } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="part_1">
        <div className="left-cont-footer">
          <div className="column-1">
            <img src={imagen} alt="logo de la institución" className="imagen" />
          </div>
          <div className="column-2">
            <div className="dataList">
              <MdOutlinePhoneIphone className="icono" />
              <p>+598 93 993 916</p>
            </div>
            <div className="dataList">
              <GiPositionMarker className="icono" />
              <p>Camino Perez</p>
            </div>
            <div className="dataList">
              <AiOutlineMail className="icono" />
              <p>contacto@aexalumnoseta.com.uy</p>
            </div>
          </div>
        </div>
        <div className="part_2">
          <div className="column-2 sugerencias-footer-list">
            <b>Paginas relacionadas</b>
            <ul >
              <li><a href="https://eta.fau.mil.uy/">Escuela Técnica de Aeronáutica</a></li>
              <li><a href="https://www.fau.mil.uy/es/">Fuerza aérea uruguaya</a></li>
              <li><a href="https://dinacia.gub.uy/">Dinacia</a></li>
              <li><a href="https://www.gub.uy/ministerio-defensa-nacional/">Ministerio de defensa</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="part_2">
        <div className="socialMedias">
          <div className="btn-footer-cont">
          </div>
          <div className="redes-cont">
            <a href=" https://m.facebook.com/AEAETADU" target="_blank">
              <FaFacebookSquare className="socialMediaIcon" />
            </a>
            <a href="https://instagram.com/aexalumnosetauy?igshid=MzRlODBiNWFlZA==" target="_blank">
              <GrInstagram className="socialMediaIcon" />
            </a>
          </div>
          <div className="btn-footer-cont">
            <a href="/sugerencia">
            Enviar sugerencia
            </a>
          </div>
        </div>

      </div>
      <div className="part_3">version 1.0</div>
    </footer>
  );
};

export default Footer;
