/* eslint-disable react/prop-types */
import "./QuienSomos.css";

const QuienSomos = (props) => {
  return (
    <div className="card">
      <div className="arriba">
        <div className="izquierda"></div>
        <div className="derecha">
          <p className="titulo">{props.titulo}</p>
        </div>
      </div>
      <div className="abajo">
        <p className="textoContenido">{props.texto}</p>
      </div>
    </div>
  );
};

export default QuienSomos;
