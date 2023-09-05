/* eslint-disable react/prop-types */
import "./CardComision.css";

const CardComision = (props) => {
  return (
    <div className="card">
      <div className="fotoRetrato">foto</div>
      <div className="detalles">
        <div>
          <div className="titular">
            <p>{props.titulo_1}</p>
            <p>{props.nombreTitular}</p>
            <p>{props.tanda}</p>
          </div>
          <div className="suplente">
            <p>{props.titulo_2}</p>
            <p>{props.nombreSuplente}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComision;
