import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";

import App from "./App.jsx";
import Historia from "./routes/Historia/Historia.jsx";
import Comision from "./routes/Comision/Comision";
import Afiliarse from "./routes/Afiliarse/Afiliarse.jsx";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/comision" element={<Comision />} />
      <Route path="/afiliarse" element={<Afiliarse />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
