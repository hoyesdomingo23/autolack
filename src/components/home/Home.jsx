import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import imagenDesktop from "../images/BANNER-PINTUCO-principal-desktop.png";
import imagenMobile from "../images/BANNER-PINTUCO-principal-mobile.jpg";
import imagenUnoHome from "../images/Lanzamientos-miniatura.jpg";
import imagenDosHome from "../images/Cartacolores.jpg";
import imagenTresHome from "../images/banner-tres-prueba-autolack.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [key, setKey] = useState(0); // Clave para forzar la recreación del mapa

  const navigateHome = useNavigate();

  const handleNuevoHome = () => {
    navigateHome("/nuevo");
  };

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
        <div className="contenedor-video-desktop">
          <iframe
            src="https://www.youtube.com/embed/yxlHuEKSnro?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&loop=1&playlist=yxlHuEKSnro"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
        <div className="contenedor-video-mobile">
          <iframe
            src="https://www.youtube.com/embed/Ay3aCOh01zY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&loop=1&playlist=Ay3aCOh01zY"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ width: "100%", height: "70vh" }}
          />
        </div>

        <button
          className="slider-button slider-button-right"
          onClick={goToNext}
        >
          {">"}
        </button>
      </section>
      <section className="contenedor-titulo-h1-tecnologia-texto">
        <h1>Bienvenidos a Industrias Autolack SAS</h1>
        {/* <button>
          <a href="#">¿QUIÉNES SOMOS?</a>
        </button> */}
        <span>
          En <b>Industrias Autolack sas</b> desde nuestra creación en 2013, nos
          hemos consolidado como una empresa <b>confiable y destacada</b> en el
          ámbito del repintado automotriz e industrial. Nos caracterizamos por
          ofrecer soluciones de pintura de{" "}
          <b>altísima calidad a precios accesibles</b>, asegurando que cada
          cliente obtenga resultados excepcionales sin comprometer su
          presupuesto. En Industrias Autolack sas, contamos con un equipo con
          amplia <b>experiencia y compromiso</b>, garantizando que cada proyecto
          refleje <b>precisión, durabilidad y estética impecable.</b>
          Nuestra pasión por la excelencia y el servicio al cliente nos impulsa
          a seguir creciendo y desarrollando productos que respalden la{" "}
          <b>elegancia y funcionalidad</b> de los acabados automotrices e
          industriales. Confíe en nosotros, y descubra cómo transformamos
          cualquier vehículo o proyecto industrial con{" "}
          <b>calidad y dedicación.</b>
        </span>
      </section>
      <section className="truck-testla">
        <div className="truck">
          <div className="truck__body">
            <div className="truck__body truck__body--top">
              <div className="truck__window">
                <div className="truck__window-glass"></div>
              </div>
            </div>
            <div className="truck__body truck__body--mid">
              <div className="truck__mid-body"></div>
            </div>
            <div className="truck__body truck__body--bottom">
              <div className="truck__underpanel"></div>
              <div className="truck__rear-bumper"></div>
              <div className="truck__side-skirt"></div>
            </div>
          </div>
          <div className="truck__wheel truck__wheel--front">
            <div className="truck__wheel-arch"></div>
            <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
            <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
            <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
            <div className="truck-wheel">
              <div className="truck-wheel__rim">
                <div
                  style={{ "--index": 0 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 1 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 2 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 3 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 4 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 5 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 6 }}
                  className="truck-wheel__spoke"
                ></div>
              </div>
            </div>
          </div>
          <div className="truck__wheel truck__wheel--rear">
            <div className="truck__wheel-arch"></div>
            <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
            <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
            <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
            <div className="truck-wheel">
              <div className="truck-wheel__rim">
                <div
                  style={{ "--index": 0 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 1 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 2 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 3 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 4 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 5 }}
                  className="truck-wheel__spoke"
                ></div>
                <div
                  style={{ "--index": 6 }}
                  className="truck-wheel__spoke"
                ></div>
              </div>
            </div>
          </div>
          <div className="truck__headlight"></div>
          <div className="truck__taillight"></div>
          <div className="truck__indicator"></div>
          <div className="truck__foglight"></div>
        </div>
      </section>

      <section className="contenedor-imagenes-presentacion-home">
        <img
          src={imagenUnoHome}
          alt="Banner Uno"
          onClick={handleNuevoHome}
        ></img>
        <a></a>
        <img
          src={imagenDosHome}
          alt="Banner Dos"
          onClick={() => {
            window.location.href =
              "https://online.flippingbook.com/view/750686242/";
          }}
          style={{ cursor: "pointer" }}
        />

        <img src={imagenTresHome} alt="Banner Tres"></img>
      </section>
      <section className="map-section">
        <h2>¿Donde estamos ubicados?</h2>
        <LoadScript googleMapsApiKey="AIzaSyDqx20-I08sVsFpomEbZJ03TTUPjFH6sOg">
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
