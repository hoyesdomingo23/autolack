import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Quienessomos.css";
import bannerDesktopNosotros from "../images/quienessomosAutolarck-desktop.jpg";
import bannerMobileNosotros from "../images/quienessomosAutolarck-mobile.png";
import politicasCalidadNosotros from "../images/calidad-nosotros-autolarck.jpg";
import misionNosotros from "../images/mision-nosotros-autolarck.jpeg";
import visionNosotros from "../images/vision-nosotros-autolarck.jpg";

const Quienessomos = () => {
  return (
    <>
      <Header />
      <section className="banner-principal-quienesomos">
        <picture>
          <source
            srcSet={bannerDesktopNosotros}
            media="(min-width: 768px)"
          ></source>
          <img src={bannerMobileNosotros} alt="Banner Quienes Somos"></img>
        </picture>
      </section>

      <section className="contenedor-principal-quienes">
        {/* Políticas */}
        <div className="fila-seccion" id="column-imagen-izquierda">
          <div className="texto-izquierda">
            <h3>Políticas de Calidad</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </span>
            <br />
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </span>
          </div>
          <div className="imagen-derecha">
            <img
              src={politicasCalidadNosotros}
              alt="Políticas de Calidad"
            ></img>
          </div>
        </div>

        {/* Misión */}
        <div className="fila-seccion" id="column-imagen-derecha">
          <div className="imagen-izquierda">
            <img src={misionNosotros} alt="Misión"></img>
          </div>
          <div className="texto-derecha">
            <h3>Misión</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </span>
            <br />
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </span>
          </div>
        </div>

        {/* Visión */}
        <div className="fila-seccion" id="column-imagen-izquierda">
          <div className="texto-izquierda">
            <h3>Visión</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </span>
            <br />
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </span>
          </div>
          <div className="imagen-derecha">
            <img src={visionNosotros} alt="Visión"></img>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Quienessomos;
