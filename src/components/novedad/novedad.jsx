/* eslint-disable react/prop-types */
import { BsFillCalendarDateFill } from "react-icons/bs";
import "./novedad.css";

const Novedad = ({ urlImagen, titulo, texto, fecha }) => {

  return (
    <div className="structure">
      <div  className="image" >
        <img src={urlImagen} alt="imagen representativa al evento" className="imagenEstilo"/>
      </div>
      <div className="texts">
        <h3>{titulo}</h3>
        <p className="texto">{texto}</p>
      </div>
      <div className="date">
        <BsFillCalendarDateFill
          style={{ marginRight: "10px", color: "#0a2273" }}
        />
        <p>{fecha}</p>
      </div>
    </div>
  );
};

export default Novedad;
