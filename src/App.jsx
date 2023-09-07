import Novedades from "./components/novedad/novedades";
import Video from "./components/video/video";
import PrincipalContent from "./components/principalContent/principalContent";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";

import "./App.css";

const App = () => {
  return (
    <>
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
