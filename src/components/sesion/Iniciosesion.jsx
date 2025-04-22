import React from "react";
import { useNavigate } from "react-router-dom";
import "./InicioSesion.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Iniciosesion = () => {
  const navigateColores = useNavigate();
  const handleColores = () => {
    navigateColores("/colores");
  };
  return (
    <>
      <Header />
      <div className="contenedor-ir-iniciosesion">
        <h2>¿A donde te gustaria ir?</h2>
      </div>
      <section className="contenedor-botones-redireccion">
        <div>
          <a href="https://p3plzcpnl506301.prod.phx3.secureserver.net:2096/">
            <button className="boton-redirigente-sesion">
              <span className="boton-sombra"></span>
              <span className="boton-fondo"></span>
              <div className="boton-contenido">
                <span>Iniciar sesión en WebMail</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="icono">
                  <path
                    clip-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </a>
        </div>
        <div>
          <button className="boton-redirigente-sesion" onClick={handleColores}>
            <span className="boton-sombra"></span>
            <span className="boton-fondo"></span>
            <div className="boton-contenido">
              <span>Ir al apartado de colores</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="icono">
                <path
                  clip-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>{" "}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Iniciosesion;
