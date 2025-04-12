import React from "react";
import { useParams } from "react-router-dom";
import datosProductoAuxiliares from "./datosProductoAuxiliares"; // Importa los datos correctamente
import "./ProductoAuxiliares.css"; // Archivo de estilos
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const ProductoAuxiliares = () => {
  // Llama a los Hooks en el nivel superior
  const { nombre } = useParams();

  // Busca el producto seleccionado
  const productoSeleccionado = datosProductoAuxiliares.find(
    (producto) => producto.text === decodeURIComponent(nombre)
  );

  // Manejo de error si el producto no existe
  if (!productoSeleccionado) {
    return (
      <>
        <Header />
        <div className="producto-detalle">
          <p>Producto no encontrado.</p>
        </div>
        <Footer />
      </>
    );
  }

  // Renderiza el producto seleccionado
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
          <h4>{"Material:" + " " + productoSeleccionado.type}</h4>
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

export default ProductoAuxiliares;
