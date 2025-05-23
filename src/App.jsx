// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Landings principales
import Home from "./components/home/Home";
import Quienessomos from "./components/quienessomos/Quienessomos";
import Lineas from "./components/lineas/Lineas";
import Producto from "./components/lineas/Producto";
import FichasTecnicas from "./components/fichastecnicas/FichasTecnicas";
import ProductoPoliuretano from "./components/lineas/poliuretano/ProductoPoliuretano";

// Landings productos
import Poliuretano from "./components/lineas/poliuretano/Poliuretano";
import Industria from "./components/lineas/industria/Industria";
import ProductoIndustria from "./components/lineas/industria/ProductoIndustria";
import Madera from "./components/lineas/madera/Madera";
import ProductoMadera from "./components/lineas/madera/ProductoMadera";
import Auxiliares from "./components/lineas/auxiliares/Auxiliares";
import ProductoAuxiliares from "./components/lineas/auxiliares/ProductoAuxiliares";
import Poliester from "./components/lineas/poliester/Poliester";
import ProductoPoliester from "./components/lineas/poliester/ProductoPoliester";
import Monocomponentes from "./components/lineas/monocomponentes/Monocomponentes";
import ProductoMonocomponentes from "./components/lineas/monocomponentes/ProductoMonocomponentes";

// Landings informacion y colores
import Contactos from "./components/contacto/Contactos";
import LandingNuevo from "./components/Nuevo/LandingNuevo";
import Iniciosesion from "./components/sesion/Iniciosesion";
import Colores from "./components/sesion/colores/Colores";
import ComparacionColores from "./components/sesion/comparacion/ComparacionColores";
import ComparacionesC from "./components/sesion/comparacionesc/ComparacionesC";
import LecturaColores from "./components/sesion/lecturacolores/LecturaColores";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Header */}
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Quienessomos />} />
          <Route path="/lineas" element={<Lineas />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route path="/nuevo" element={<LandingNuevo />} />
          <Route path="/fichas-tecnicas" element={<FichasTecnicas />} />
          <Route path="/inicio-sesion" element={<Iniciosesion />} />
          <Route path="/colores" element={<Colores />} />
          <Route path="/InicioColores" element={<ComparacionColores />} />
          <Route path="/comparacion" element={<ComparacionesC />} />
          <Route path="/lectura-color" element={<LecturaColores />} />

          {/* Lineas/Categorias */}
          <Route path="/Poliuretano" element={<Poliuretano />} />
          <Route path="/Industria" element={<Industria />} />
          <Route path="/Madera" element={<Madera />} />
          <Route path="/Auxiliares" element={<Auxiliares />} />
          <Route path="/Poliester" element={<Poliester />} />
          <Route path="/Monocomponentes" element={<Monocomponentes />} />
          {/* Landings Productos */}
          <Route path="/productos/:nombre" element={<Producto />} />
          <Route
            path="/productosPoliester/:nombre"
            element={<ProductoPoliester />}
          />
          <Route
            path="/ProductoPoliuretano/:nombre"
            element={<ProductoPoliuretano />}
          />
          <Route
            path="/ProductoIndustria/:nombre"
            element={<ProductoIndustria />}
          />
          <Route path="/ProductoMadera/:nombre" element={<ProductoMadera />} />
          <Route
            path="/ProductoAuxiliares/:nombre"
            element={<ProductoAuxiliares />}
          />
          <Route
            path="/ProductoMonocomponentes/:nombre"
            element={<ProductoMonocomponentes />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
