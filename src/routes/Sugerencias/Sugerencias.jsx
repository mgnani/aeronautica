import React, { useState, useEffect } from "react";
import "./Sugerencias.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTest } from "../../config/httprouter";
import { postSugerencia, getSugerencia , postPaypal} from "../../config/httprouter";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Sugerencias = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dni, setDni] = useState(0);
  const [sugerencia, setSug] = useState("");
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Nuevo estado para el mensaje de éxito

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("sugerencia");
  };

  useEffect(() => {
    if (localStorage.getItem("sugerencia")) {
      handleOpen();
      console.log("sugerencia");
    }
  }, []);

  function esEmailValido(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
  }

  const enviar = (e) => {
     e.preventDefault(); 
    if (email === "") {
      console.log("email vacío");
      return;
    }  else if (sugerencia === "") {
      console.log("sugerencia vacía");
      return;
    } else {
      const content = {
        email: email,
        sugerencia: sugerencia,
      };
      postSugerencia(content)
        .then((response) => {
          console.log('Datos de la API:', response.data);
          localStorage.setItem("sugerencia", "true");
          setSuccessMessage("Sugerencia enviada con éxito"); 
          handleOpen()
          setEmail("");
          setName("");
          setDni(null);
          setSug("");
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
          handleOpen();
        });
    }
  };

  return (
    <div className="container mt-5">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box className="boxModal modal-sugerencia">
            <h1 onClick={handleClose} className="iconoCerrar">
              <ImCross />
            </h1>
            <p className="tituloActividad">Sugerencia enviada</p>
            <img src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711433.jpg" className="check-img" alt="Check" />
            <p>Muchas gracias por su colaboración</p>
          </Box>
        </>
      </Modal>
      <div className="row justify-content-center form-cont">
        <div className="col-md-8">
          <div className="form-container">
            <h2 className="mb-4">Formulario de sugerencias</h2>
            <span className="comentario">* Estos datos no serán públicos y tienen como objetivo crear una mejor experiencia de usuario</span>
            <form onSubmit={enviar}>
              <div className="form-group">
                <label htmlFor="correo" className="required">Correo electrónico</label>
                <input type="email" value={email} className="form-control" name="correo" required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="direccion" className="required">Sugerencia</label>
                <textarea className="form-control" name="direccion" rows="3" maxLength="300" required value={sugerencia} onChange={(e) => setSug(e.target.value)}></textarea>
              </div>
              <div className="form-group mt-4">
              <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sugerencias;
