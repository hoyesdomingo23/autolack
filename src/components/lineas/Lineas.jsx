import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProductosLineas from "./ProductosLineas";
import { useNavigate } from "react-router-dom";
import "./Lineas.css";
import bannerProductos from "../images/banner-bonito-pintuco-2.jpg";
import bannerProductosM from "../images/banner-bonito-pintuco-m.jpg";
import imagenAuxiliar from "../images/Linea-Auxiliar.jpg";
import imagenIndustrial from "../images/Linea-Industria.jpg";
import imagenMadera from "../images/Linea-Madera.jpg";
import imagenMonocomponente from "../images/Linea-Monocomponente.jpg";
import imagenPoliester from "../images/Linea-Poliester.jpg";
import imagenPoliuretano from "../images/Linea-Poliuretano.jpg";

const Lineas = () => {
  const navigateProductos = useNavigate();
  const handleAuxiliares = () => {
    navigateProductos("/auxiliares");
  };
  const handleIndustria = () => {
    navigateProductos("/industria");
  };
  const handleMadera = () => {
    navigateProductos("/madera");
  };
  const handlePoliester = () => {
    navigateProductos("/poliester");
  };
  const handePoliuretano = () => {
    navigateProductos("/poliuretano");
  };
  const handleMonocomponentes = () => {
    navigateProductos("/Monocomponentes");
  };
  const [productos, setProductos] = useState(ProductosLineas);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    const filtrados = ProductosLineas.filter((producto) =>
      producto.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductos(filtrados.length > 0 ? filtrados : []);
  };

  const manejarOrden = (tipoOrden) => {
    if (tipoOrden === "az") {
      setProductos([...productos].sort((a, b) => a.text.localeCompare(b.text)));
    } else if (tipoOrden === "za") {
      setProductos([...productos].sort((a, b) => b.text.localeCompare(a.text)));
    } else {
      setProductos(ProductosLineas);
    }
    setMostrarOpciones(false);
  };

  return (
    <>
      <Header />
      <picture className="contenedor-imagen-productos">
        <source srcSet={bannerProductos} media="(min-width: 768px)" />
        <img src={bannerProductosM} alt="Banner Productos" />
      </picture>
      <div className="contenedor-h2-productos">
        <h2>Descubre todos nuestros productos!</h2>
      </div>

      {/* Nueva sección con imágenes */}
      <div className="backgroundAccesos">
        <div className="container-complet-sale-landing-page-first">
          {/* Cada imagen dentro de un div */}
          <div
            className="container-image-text-sale-landing"
            onClick={handePoliuretano}
          >
            <img src={imagenPoliuretano} alt="Poliuretano" />
          </div>
          <div
            className="container-image-text-sale-landing"
            onClick={handlePoliester}
          >
            <img src={imagenPoliester} alt="Poliester" />
          </div>
          <div
            className="container-image-text-sale-landing"
            onClick={handleIndustria}
          >
            <img src={imagenIndustrial} alt="Industria" />
          </div>
          <div
            className="container-image-text-sale-landing"
            onClick={handleMadera}
          >
            <img src={imagenMadera} alt="Madera" />
          </div>
          <div
            className="container-image-text-sale-landing"
            onClick={handleAuxiliares}
          >
            <img src={imagenAuxiliar} alt="Auxiliares" />
          </div>
          <div
            className="container-image-text-sale-landing"
            onClick={handleMonocomponentes}
          >
            <img src={imagenMonocomponente} alt="Monocomponentes" />
          </div>
        </div>
      </div>

      <div className="filtros">
        <div className="menu-filtro">
          <button
            className="boton-filtro"
            onClick={() => setMostrarOpciones(!mostrarOpciones)}
          >
            Filtrar
          </button>
          {mostrarOpciones && (
            <div className="opciones-filtro">
              <div onClick={() => manejarOrden("az")}>Filtrar de A a Z</div>
              <div onClick={() => manejarOrden("za")}>Filtrar de Z a A</div>
              <div onClick={() => manejarOrden("default")}>
                Dejar por defecto
              </div>
            </div>
          )}
        </div>
        <input
          type="text"
          className="busqueda-input"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={manejarBusqueda}
        />
      </div>

      <main className="contenedor-lineas">
        <div className="grid">
          {productos.length > 0 ? (
            productos.map((producto, index) => (
              <Link
                to={`/productos/${encodeURIComponent(producto.text)}`}
                key={index}
                className="producto"
              >
                <div className="contenedor-imagenes-background-card">
                  <img src={producto.image} alt={`Producto ${index + 1}`} />
                </div>
                <span>{producto.text}</span>
              </Link>
            ))
          ) : (
            <p className="mensaje-no-encontrado">Búsqueda no encontrada</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Lineas;
