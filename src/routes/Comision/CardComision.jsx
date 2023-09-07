/* eslint-disable react/prop-types */
import "./CardComision.css";

const CardComision = (props) => {
  return (
    <div className="card">
      <div className="fotoRetrato">foto</div>
      <div className="detalles">
        <div>
          <div className="titular">
            <p className="tituloTitular">{props.titulo_1}</p>
            <p className="nombreTitular">{props.nombreTitular}</p>
            <p className="tanda">{props.tanda}</p>
          </div>
          <div className="suplente">
            <p className="tituloSuplente">{props.titulo_2}</p>
            <p className="nombreSuplente">{props.nombreSuplente}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComision;
