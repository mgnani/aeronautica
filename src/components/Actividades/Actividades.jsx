import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Carousel } from "../Carousel/Carousel";
/* import { slides } from "../Carousel/carouselData.json"; */
import "./Actividades.css";

// eslint-disable-next-line react/prop-types
const Actividades = ({ titulo, fecha, texto, urlImagen }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="listadoActividades" onClick={handleOpen}>
        <p className="fechaActividad">{fecha}</p>
        <p className="tituloActividad">{titulo}</p>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <Box className="boxModal">
              <h1 onClick={handleClose} className="iconoCerrar">
                <ImCross />
              </h1>
              <p className="fechaActividad">{fecha}</p>
              <p className="tituloActividad">{titulo}</p>
              <p>{texto}</p>

              <Carousel data={urlImagen} />
            </Box>
          </>
        </Modal>
      </div>
    </>
  );
};

export default Actividades;
