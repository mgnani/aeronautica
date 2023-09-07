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
        <div className="socialMedias">
          <FaFacebookSquare className="socialMediaIcon" />
          <GrInstagram className="socialMediaIcon" />
        </div>
      </div>
      <div className="part_3">version 1.0</div>
    </footer>
  );
};

export default Footer;
