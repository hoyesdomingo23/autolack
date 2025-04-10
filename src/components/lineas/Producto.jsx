import React from "react";
import { useParams } from "react-router-dom";
import ProductosLineas from "./ProductosLineas";
import "./Lineas.css"; // Archivo de estilos
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Producto = () => {
  const { nombre } = useParams(); // Obtiene el parámetro dinámico de la URL
  const productoSeleccionado = ProductosLineas.find(
    (producto) => producto.text === decodeURIComponent(nombre)
  );

  if (!productoSeleccionado) {
    return <div>Producto no encontrado.</div>; // Muestra un mensaje si el producto no existe
  }

  return (
    <>
      <Header />
      <div className="producto-detalle">
        <img
          src={productoSeleccionado.image}
          alt={productoSeleccionado.text}
          className="producto-detalle-imagen"
        />
        <div className="producto-detalle-info">
          <h1>{productoSeleccionado.text}</h1>
          <p>{productoSeleccionado.description}</p>
          <a
            href={productoSeleccionado.pdf}
            download
            className="boton-descarga"
          >
            Descargar Ficha Técnica
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Producto;
