/* eslint-disable react/prop-types */
import "./QuienSomos.css"

const QuienSomos = (props) => {
  return (
    <div className="parrafo">
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
    </div>
  );
};

export default QuienSomos;
