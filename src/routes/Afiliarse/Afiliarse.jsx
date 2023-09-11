import { useState, useEffect } from "react";
import "./Afiliarse.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTest } from "../../config/httprouter";
import { postAfiliado } from "../../config/httprouter";
const Afiliarse = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dni, setDni] = useState(null);
  const [locate, setLocate] = useState("");
  const [phone, setPhone] = useState(null);
  const [ingrETA, setIng] = useState("");
  const [egrETA, setEg] = useState("");
  const [especialidad, setEsp] = useState("");
  const [numCobr, setNumCob] = useState(null);
  useEffect(() => {
    getTest()
      .then(response => {
       console.log('Datos de la API:', response.data);
      })
      .catch(error => {
         console.error('Error al obtener los datos:', error);
      });
  }, []);
  const afiliar = ()=>{
    if(email === ""){
      console.log("email vacio")
      return 
    } else if(name === ""){
      console.log("name vacio")
      return 
    } else if(dni === "" || !isNaN(dni)){
      console.log("dni vacio")
      return 
    } else if(locate === ""){
      console.log("locate vacio")
      return 
    } else if(phone === "" || !isNaN(phone)){
      console.log("phone vacio")
      return 
    } else if(ingrETA === ""){
      console.log("ingrETA vacio")
      return 
    } else if(egrETA === ""){
      console.log("egrETA vacio")
      return 
    } else if(especialidad === ""){
      console.log("especialidad vacio")
      return 
    }else if(numCobr === "" || !isNaN(numCobr)){
      console.log("numCobr vacio")
      return 
    }else{
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
      }
      postAfiliado(content)
      .then(response => {
       console.log('Datos de la API:', response.data);
      })
      .catch(error => {
         console.error('Error al obtener los datos:', error);
      });
    }
  }
  return (
    <div className="container mt-5">
    <div className="row justify-content-center form-cont">
        <div className="col-md-8">
            <div className="form-container">
                <h2 className="mb-4">Formulario de Afiliación</h2>
                <form action="/afiliados" method="POST">
                    <div className="form-group">
                        <label for="correo" className="required">Correo electrónico</label>
                        <input type="email" value={email} className="form-control" name="correo" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="nombreCompleto" className="required">Nombre Completo</label>
                        <input type="text" className="form-control" name="nombreCompleto" required value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="documento" className="required">N° DOCUMENTO (Cédula/Pasaporte)</label>
                        <input type="number" className="form-control" name="documento" required value={dni} onChange={(e) => {setDni(e.target.value); console.log(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label for="direccion" className="required">Dirección</label>
                        <textarea className="form-control" name="direccion" rows="3" maxLength="300" required value={locate} onChange={(e) => setLocate(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label for="telefono" className="required">Número de teléfono</label>
                        <input type="number" className="form-control" name="telefono" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="anioIngreso" className="required">Año de ingreso a la ETA</label>
                        <input type="date" className="form-control" name="anioIngreso" required value={ingrETA} onChange={(e) => setIng(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="anioEgreso" className="required">Año de egreso de la ETA</label>
                        <input type="date" className="form-control" name="anioEgreso" required value={egrETA} onChange={(e) => setEg(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="especialidad" className="required">Especialidad</label>
                        <input type="text" className="form-control" name="especialidad" required value={especialidad} onChange={(e) => setEsp(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="especialidad" >Número de cobro</label>
                        <input type="number" className="form-control" name="especialidad" value={numCobr} onChange={(e) => setNumCob(e.target.value)}/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="aceptamiento" required />
                        <label className="form-check-label required" for="aceptamiento">
                            He leído y estoy de acuerdo con el Capítulo III de los estatutos de la Asociación de Ex Alumnos.
                        </label>
                    </div>
                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-primary" onClick={()=>{afiliar()}}>Pagar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Afiliarse;