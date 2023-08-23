import "./footer.css";
import imagen from "../../assets/logo.png";

import { MdOutlinePhoneIphone } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="part_1">
        <div className="column-1">
          <img src={imagen} alt="logo de la institución" className="imagen" />
        </div>
        <div className="column-2">
          <div className="dataList">
            <MdOutlinePhoneIphone className="icono" /> +598 93 993 916
          </div>
          <div className="dataList">
            <GiPositionMarker className="icono" /> Camino Perez
          </div>
          <div className="dataList">
            <AiOutlineMail className="icono" /> contacto@aexalumnoseta.com.uy
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
    </div>
  );
};

export default Footer;
