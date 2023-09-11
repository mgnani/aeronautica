import { useState, useEffect } from "react";
import "./Afiliarse.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTest } from "../../config/httprouter";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { postAfiliado, postPaypal } from "../../config/httprouter";
import { ImCross } from "react-icons/im";

const Afiliarse = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dni, setDni] = useState(null);
  const [locate, setLocate] = useState("");
  const [phone, setPhone] = useState(null);
  const [ingrETA, setIng] = useState("");
  const [egrETA, setEg] = useState("");
  const [especialidad, setEsp] = useState("");
  const [numCobr, setNumCob] = useState();
  const [paypalLink, sePaypalLink] = useState("");
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("sugerencia");
  };
  useEffect(() => {
    postPaypal()
      .then(response => {
        console.log('Datos de la API:', response.data.data.links);
        sePaypalLink(response.data.data.links[1].href)
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });


    var url = window.location.href;
    if (url.includes("false")) {
      localStorage.clear();
      setCorrecto(false)
      handleOpen()
      console.log("url falso")
      setTimeout(function () {
        window.location.href = '/afiliarse'; 
      }, 3000);
    }
    if (url.includes("true")) {
      console.log(localStorage.getItem('userData'))
      if (localStorage.getItem('userData')) {
        const contentString = localStorage.getItem('userData');
        const content = JSON.parse(contentString ?? "");
        console.log(content);
        handleOpen()
        setCorrecto(true)
        postAfiliado(content)
          .then(response => {
            console.log('Datos de la API:', response.data.data.links);
            handleOpen()

            
            setTimeout(function () {
              window.location.href = '/afiliarse';
            }, 3000);
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
            localStorage.removeItem('userData');
          });
      }
    }
    

  }, []);
  const afiliar = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    if (email === "") {
      console.log("email vacío");
      return;
    } else if (name === "") {
      console.log("name vacío");
      return;
    } else if (dni === "" || isNaN(dni)) {
      console.log("dni vacío o no es un número");
      return;
    } else if (locate === "") {
      console.log("locate vacío");
      return;
    } else if (phone === "" || isNaN(phone)) {
      console.log("phone vacío o no es un número");
      return;
    } else if (ingrETA === "") {
      console.log("ingrETA vacío");
      return;
    } else if (egrETA === "") {
      console.log("egrETA vacío");
      return;
    } else if (especialidad === "") {
      console.log("especialidad vacío");
      return;
    } else {
      const content = {
        email: email,
        name: name,
        dni: dni,
        locate: locate,
        phone: phone,
        ingrETA: ingrETA,
        egrETA: egrETA,
        especialidad: especialidad,
        numCobr: numCobr,
      };
      const contentString = JSON.stringify(content);
      localStorage.setItem('userData', contentString);
      window.location.href = paypalLink;

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
      <div className="row justify-content-center form-cont">
        <div className="col-md-8">
          <div className="form-container">
            <h2 className="mb-4">Formulario de Afiliación</h2>
            <form onSubmit={afiliar}>
              <div className="form-group">
                <label htmlFor="correo" className="required">Correo electrónico</label>
                <input type="email" value={email} className="form-control" name="correo" required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="nombreCompleto" className="required">Nombre Completo</label>
                <input type="text" className="form-control" name="nombreCompleto" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="documento" className="required">N° DOCUMENTO (Cédula/Pasaporte)</label>
                <input type="number" className="form-control" name="documento" required value={dni} onChange={(e) => { setDni(e.target.value); console.log(e.target.value) }} />
              </div>
              <div className="form-group">
                <label htmlFor="direccion" className="required">Dirección</label>
                <textarea className="form-control" name="direccion" rows="3" maxLength="300" required value={locate} onChange={(e) => setLocate(e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="telefono" className="required">Número de teléfono</label>
                <input type="number" className="form-control" name="telefono" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="anioIngreso" className="required">Año de ingreso a la ETA</label>
                <input type="date" className="form-control" name="anioIngreso" required value={ingrETA} onChange={(e) => setIng(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="anioEgreso" className="required">Año de egreso de la ETA</label>
                <input type="date" className="form-control" name="anioEgreso" required value={egrETA} onChange={(e) => setEg(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="especialidad" className="required">Especialidad</label>
                <input type="text" className="form-control" name="especialidad" required value={especialidad} onChange={(e) => setEsp(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="especialidad" >Número de cobro</label>
                <input type="number" className="form-control" name="especialidad" value={numCobr} onChange={(e) => setNumCob(e.target.value)} />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="aceptamiento" required />
                <label className="form-check-label required" htmlFor="aceptamiento">
                  He leído y estoy de acuerdo con el Capítulo III de los estatutos de la Asociación de Ex Alumnos.
                </label>
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-primary">Pagar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Afiliarse;