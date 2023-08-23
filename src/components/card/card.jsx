import { BsFillCalendarDateFill } from "react-icons/bs";
import "./card.css";

const Card = () => {
  return (
    <div className="structure">
      <div className="image"></div>
      <div className="texts">
        <h3>titulo</h3>
        <p>textos</p>
      </div>
      <div className="date">
        <BsFillCalendarDateFill
          style={{ marginRight: "10px", color: "#0a2273" }}
        />
        <p>fecha</p>
      </div>
    </div>
  );
};

export default Card;
