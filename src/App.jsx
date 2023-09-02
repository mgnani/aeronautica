import "./App.css";
import Navbar from "./components/navbar/navbar";
import Cards from "./components/card/cards";
import QuienesSomos from "./JSON/QuienesSomos";
import Footer from "./components/footer/footer";
import Video from "./components/video/video";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="principalContent">
        <div className="textContent">
          <h1 className="titleMain">AEAETADU</h1>
          <p>
            Somos la Asociación de Ex Alumnos de la Escuela Técnica de
            Aeronáutica del Uruguay, una comunidad vibrante y apasionada por la
            aeronáutica que nace del deseo compartido de mantener vivo el
            sentido de pertenencia entre los egresados de la ETA. Desde nuestros
            primeros pasos en 2019, hasta nuestra formalización en octubre de
            2020, hemos buscado potenciar la cultura aeronáutica y ser un punto
            de referencia tanto en Uruguay como en el exterior.
          </p>
          <div className="boton"> Ver más</div>
        </div>
      </div>
      <div className="contenido">
        {/* ------------------------------------------------------- */}
        <div className="aboutUs">
          <h2 id="novedades">Novedades</h2>
          <div className="cardList">
            <Cards />
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        <div className="whoAreUs">
          <h2>Quienes somos</h2>
          <div className="conceptTexts">
            <QuienesSomos />
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        <div className="ourJob">
          <h2>Nuestro trabajo</h2>
          <Video />
        </div>

        {/* ------------------------------------------------------- */}
        <div className="footers"></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
