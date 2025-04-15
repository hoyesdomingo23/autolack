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
              <b>Somos una empresa colombiana </b> nacida en el 2013, dedicada a
              la fabricación y comercialización de soluciones integrales de alta
              calidad para la repintura automotriz y la industria. Desde nuestra
              base en <b> Medellín</b>, nos comprometemos a satisfacer las
              necesidades de nuestros clientes a nivel nacional, ofreciendo
              productos innovadores, un servicio técnico especializado y una
              asesoría personalizada. Buscamos contribuir al crecimiento y
              profesionalización del sector automotriz <b> colombiano</b>,
              fomentando prácticas sostenibles y construyendo relaciones de
              confianza a largo plazo con nuestros aliados.
            </span>
          </div>
        </div>

        {/* Visión */}
        <div className="fila-seccion" id="column-imagen-izquierda">
          <div className="texto-izquierda">
            <h3>Visión</h3>
            <span>
              Para el año 2030, <b> Industrias Autolack S.A.S</b> será una de
              las grandes referentes a nivel nacional en el sector de la
              repintura automotriz y la industria. Seremos reconocidos por
              nuestra calidad superior y precio competitivo en el mercado.
              También, seremos reconocidos por nuestro compromiso con la
              excelencia en el servicio al cliente. Aspiramos a expandir nuestra
              presencia y fortalecer nuestro catálogo, al tiempo, mejorar
              nuestras alianzas estratégicas en todo el territorio{" "}
              <b>colombiano </b>, siendo la primera opción para talleres y
              profesionales del sector, contribuyendo así al desarrollo y la
              imagen del sector automotriz y la industria en <b> Colombia</b>.
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
