import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import datosProductoMadera from "./datosProductoMadera"; // Importa los datos correctamente
import "./ProductoMadera.css";
import bannerProductos from "../../images/Madera1920x920.jpg";
import bannerProductosM from "../../images/Madera1000x500.jpg";

const Madera = () => {
  const [productos, setProductos] = useState(datosProductoMadera);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  // Función para manejar el filtro por búsqueda
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    const filtrados = datosProductoMadera.filter((producto) =>
      producto.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductos(filtrados.length > 0 ? filtrados : []);
  };

  // Función para manejar el orden de los productos
  const manejarOrden = (tipoOrden) => {
    if (tipoOrden === "az") {
      setProductos([...productos].sort((a, b) => a.text.localeCompare(b.text)));
    } else if (tipoOrden === "za") {
      setProductos([...productos].sort((a, b) => b.text.localeCompare(a.text)));
    } else {
      setProductos(datosProductoMadera);
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
        <h2>¡Descubre nuestros productos para madera!</h2>
      </div>

      {/* Controles de filtro */}
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
                to={`/ProductoMadera/${encodeURIComponent(producto.text)}`}
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

export default Madera;
