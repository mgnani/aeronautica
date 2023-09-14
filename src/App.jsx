import Novedades from "./components/novedad/novedades";
import Video from "./components/video/video";
import PrincipalContent from "./components/principalContent/principalContent";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./App.css";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
const App = () => {
  const [open, setOpen] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("sugerencia");
  };

  useEffect(() => {
    var url = window.location.href;
    if (url.includes("true")) {
      console.log(localStorage.getItem('userData'))
      handleOpen()
      setCorrecto(true)
    }
    if (url.includes("false")) {
      console.log(localStorage.getItem('userData'))
      handleOpen()
      setCorrecto(false)
    }
  }, []);

  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
        {correcto ?
            <Box className="boxModal modal-sugerencia">
              <h1 onClick={handleClose} className="iconoCerrar">
                <ImCross />
              </h1>
              <p className="tituloActividad">Usuario Afiliado</p>
              <img src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711433.jpg" className="check-img" alt="Check" />
              <p>Muchas gracias</p>
            </Box>
            :
            <Box className="boxModal modal-sugerencia">
              <h1 onClick={handleClose} className="iconoCerrar">
                <ImCross />
              </h1>
              <p className="tituloActividad">Error en el proceso de pago</p>
              <img src="https://t4.ftcdn.net/jpg/06/35/28/57/240_F_635285754_00gZYzdCt6BzgUCNpNZqvmxzxFefchc9.jpg" className="check-img" alt="Check" />
              <p>Usted canceló el proceso de pago</p>
            </Box>}
        </>
      </Modal>
      <PrincipalContent />
      <div className="contenido">
        {/* ------------------------------------------------------- */}
        <div className="aboutUs">
          <h2 id="novedades">Novedades</h2>
          <div className="cardList">
            <Novedades />
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        <div className="whoAreUs">
          <h2 style={{ color: "#ffff" }}>Quienes somos</h2>
          <div className="conceptTexts">
            <QuienesSomos />
          </div>
        </div>
        
        {/* ------------------------------------------------------- */}
        <div className="ourJob">
          <h2>Nuestro trabajo</h2>
          <Video />
        </div>
      </div>
    </>
  );
};

export default App;
