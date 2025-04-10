import React, { useState } from "react";
import "./FichasTecnicas.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import imageFichasTecnicasDesktop from "../images/banner-bonito-pintuco-2.jpg";
import imageFichasTecnicasMobile from "../images/banner-bonito-pintuco-m.jpg";

const FichasTecnicas = () => {
  const [openAutomotriz, setOpenAutomotriz] = useState({}); // Estado para las opciones de automotriz
  const [openIndustria, setOpenIndustria] = useState({}); // Estado para las opciones de industria

  // Archivos de ejemplo para cada espacio
  const automotriz = {
    Barnices: [
      {
        name: "Barniz HS",
        pdf: "/fichastecnicas/Barnices/FT BARNIZ HS.pdf",
      },
      {
        name: "BARNIZ PLUS 2K",
        pdf: "/fichastecnicas/Barnices/FT BARNIZ PLUS 2K.pdf",
      },
      {
        name: "BARNIZ EXPRESS",
        pdf: "/fichastecnicas/Barnices/FT BARNIZ EXPRESS.pdf",
      },
    ],
    Catalizadores: [
      {
        name: "CATALIZADOR AUTOIMPRIMANTE",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
      {
        name: "CATALIZADOR HS",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
      {
        name: "CATALIZADOR 410",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
      {
        name: "CATALIZADOR 411",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
      {
        name: "CATALIZADOR 412 ",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
    ],
    Diluyentes: [
      {
        name: "DILUYENTE PUR ATL",
        pdf: "/fichastecnicas/Diluyentesycomplementarios/FT DILUYENTE PUR ATL.pdf",
      },
      {
        name: "DESENGRASANTE B.S",
        pdf: "/fichastecnicas/Diluyentesycomplementarios/FT DESENGRASANTE B.S.pdf",
      },
      {
        name: "REMOVEDOR DE OXIDO",
        pdf: "/fichastecnicas/Diluyentesycomplementarios/FT REMOVEDOR DE OXIDO.pdf",
      },
      {
        name: "SLN EPOXICA",
        pdf: "/fichastecnicas/Diluyentesycomplementarios/FT SLN EPOXICA.pdf",
      },
      {
        name: "SOLUCIÓN POLIURETANICA",
        pdf: "/fichastecnicas/Diluyentesycomplementarios/FT SOLUCIÓN POLIURETANICA.pdf",
      },
    ],
    EntonadoresPS: [
      {
        name: "Entonador PS",
        pdf: "/fichastecnicas/Entonadoresps/FT ENTONADORES PS.pdf",
      },
    ],
    EntonadoresPUR: [
      {
        name: "Entonador PUR 1",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
      {
        name: "Entonador PUR 1",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
    ],
    Fondos: [
      {
        name: "Fondo 1",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
      {
        name: "Fondo 1",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
    ],
    Masilla: [
      {
        name: "Masilla 1",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
    ],
    Mates: [
      {
        name: "Mate 1",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
    ],
  };

  const industria = {
    AnticorrosivosEP: [
      {
        name: "EPOXICO ANTICORROSIVOS",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT EPOXICO ANTICORROSIVOS.pdf",
      },
      {
        name: "WASH PRIMER",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT WASH PRIMER.pdf",
      },
      {
        name: "AUTOIMPRIMANTE GRIS",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
    ],
    EsmaltesEP: [
      {
        name: "Esmalte EP 1",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT AUTOIMPRIMANTE GRIS.pdf",
      },
    ],
  };

  // Funciones para manejar la apertura y cierre de los espacios desplegables
  const toggleAutomotriz = (key) =>
    setOpenAutomotriz((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleIndustria = (key) =>
    setOpenIndustria((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <Header />
      <picture className="contenedor-imagenes-principales-fichas-tecnicas">
        <source
          srcSet={imageFichasTecnicasDesktop}
          media="(min-width: 768px)"
        ></source>
        <img src={imageFichasTecnicasMobile} alt="Fichas Técnicas Banner" />
      </picture>
      <div className="fichas-tecnicas-titulo-h2">
        <h2>FICHAS TECNICAS</h2>
      </div>
      <main className="contenedor-fichas-tecnicas">
        <div className="columnas">
          {/* FICHAS TECNICAS AUTOMOTRIZ */}
          <div className="columna">
            <h3>FICHAS TECNICAS AUTOMOTRIZ</h3>
            {Object.keys(automotriz).map((key) => (
              <div key={key} className="espacio">
                <button onClick={() => toggleAutomotriz(key)}>{key}</button>
                {openAutomotriz[key] && (
                  <ul>
                    {automotriz[key].map((item, index) => (
                      <li key={index}>
                        <a href={item.pdf} download>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* FICHAS TECNICAS INDUSTRIA */}
          <div className="columna">
            <h3>FICHAS TECNICAS INDUSTRIA</h3>
            {Object.keys(industria).map((key) => (
              <div key={key} className="espacio">
                <button onClick={() => toggleIndustria(key)}>{key}</button>
                {openIndustria[key] && (
                  <ul>
                    {industria[key].map((item, index) => (
                      <li key={index}>
                        <a href={item.pdf} download>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FichasTecnicas;
