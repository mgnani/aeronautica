import "./App.css";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card/card";
import QuienesSomos from "./JSON/QuienesSomos";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="principalContent">
        <div className="textContent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, modi
          quam voluptas nihil earum amet non! Quis distinctio suscipit ipsam
          eum, ipsa eligendi doloribus illum ipsum reiciendis blanditiis porro
          commodi? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aut, modi quam voluptas nihil earum amet non! Quis distinctio suscipit
          ipsam eum, ipsa eligendi doloribus illum ipsum reiciendis blanditiis
          porro commodi? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Aut, modi quam voluptas nihil earum amet non! Quis distinctio
          suscipit ipsam eum, ipsa eligendi doloribus illum ipsum reiciendis
          blanditiis porro commodi?
        </div>
      </div>
      <div className="contenido">
        <div className="aboutUs">
          <h2>Novedades</h2>
          <div className="cardList">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="whoAreUs">
          <h2>Quienes somos</h2>
          <div className="conceptTexts">
            <QuienesSomos />
          </div>
        </div>
        <div className="ourJob">
          <h2>Nuestro trabajo</h2>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/xNRJwmlRBNU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="footers"></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
