/* eslint-disable react/prop-types */
import { BsFillCalendarDateFill } from "react-icons/bs";
import "./card.css";

const Card = (props) => {
  return (
    <div className="structure">
      <div className="image"></div>
      <div className="texts">
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
      </div>
      <div className="date">
        <BsFillCalendarDateFill
          style={{ marginRight: "10px", color: "#0a2273" }}
        />
        <p>{props.fecha}</p>
      </div>
    </div>
  );
};

export default Card;
