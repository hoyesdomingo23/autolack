import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import imagenDesktop from "../images/BANNER-PINTUCO-principal-desktop.png";
import imagenMobile from "../images/BANNER-PINTUCO-principal-mobile.jpg";
import imagenUnoHome from "../images/banner-uno-prueba-autolack.jpg";
import imagenDosHome from "../images/banner-dos-prueba-autolack.jpg";
import imagenTresHome from "../images/banner-tres-prueba-autolack.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Home.css";

const Home = () => {
  const [key, setKey] = useState(0); // Clave para forzar la recreación del mapa

  useEffect(() => {
    // Forzar la recreación del mapa cuando el componente se monta
    setKey((prevKey) => prevKey + 1);
  }, []);

  const banners = [
    { desktop: imagenDesktop, mobile: imagenMobile, alt: "Banner Principal" },
    { desktop: imagenDesktop, mobile: imagenMobile, alt: "Banner Secundario" },
    { desktop: imagenDesktop, mobile: imagenMobile, alt: "Banner Tercero" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === 0 ? banners.length - 1 : currentIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === banners.length - 1 ? 0 : currentIndex + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 13000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 6.146908,
    lng: -75.621508,
  };

  return (
    <>
      <Header />
      <section className="slider-autolack-home">
        <button
          className="slider-button slider-button-left"
          onClick={goToPrevious}
        >
          {"<"}
        </button>
        <div className={`slider-image ${isAnimating ? "fade-out" : "fade-in"}`}>
          <picture>
            <source
              srcSet={banners[currentIndex].desktop}
              media="(min-width: 768px)"
            />
            <img
              src={banners[currentIndex].mobile}
              alt={banners[currentIndex].alt}
            />
          </picture>
        </div>
        <button
          className="slider-button slider-button-right"
          onClick={goToNext}
        >
          {">"}
        </button>
      </section>
      <section className="contenedor-titulo-h1-tecnologia-texto">
        <h1>Autolack</h1>
        {/* <button>
          <a href="#">¿QUIÉNES SOMOS?</a>
        </button> */}
        <span>
          GRICOAT de Colombia S.A.S., Grupo productor de
          <b> resinas industriales y recubrimientos</b>, respaldado en la
          experiencia y el conocimiento técnico, para innovar, diseñar y
          desarrollar con tecnología propia,{" "}
          <b>sistemas de protección y acabado; </b>
          garantizando la calidad, el desempeño y la funcionalidad de su
          portafolio de productos.
        </span>
      </section>
      <section className="contenedor-imagenes-presentacion-home">
        <img src={imagenUnoHome} alt="Banner Uno"></img>
        <img src={imagenDosHome} alt="Banner Dos"></img>
        <img src={imagenTresHome} alt="Banner Tres"></img>
      </section>
      <section className="map-section">
        <h2>¿Donde estamos ubicados?</h2>
        <LoadScript googleMapsApiKey="AIzaSyAOFYDSJK__a0Wd4h52g7LO2ik84SBsDwE">
          <GoogleMap
            key={key} // La clave cambia, forzando la recreación del mapa
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </section>
      <Footer />
    </>
  );
};

export default Home;
