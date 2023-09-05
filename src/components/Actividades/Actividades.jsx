import "./Actividades.css"

// eslint-disable-next-line react/prop-types
const Actividades = ({ titulo, fecha }) => {
  return (
    <>
    <div className="listadoActividades">
      <p className="fechaActividad">{fecha}</p>
      <p className="tituloActividad">{titulo}</p>
    </div>
    </>
  );
};

export default Actividades;
