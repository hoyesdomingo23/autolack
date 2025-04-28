import React, { useState } from "react";
import "./FichasTecnicas.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import imageFichasTecnicasDesktop from "../images/Fichas-tecnicas-1920x920.jpg";
import imageFichasTecnicasMobile from "../images/Fichas-tecnicas-1000x500.jpg";

const FichasTecnicas = () => {
  const [openAutomotriz, setOpenAutomotriz] = useState({}); // Estado para las opciones de automotriz
  const [openIndustria, setOpenIndustria] = useState({}); // Estado para las opciones de industria

  // Archivos de ejemplo para cada espacio
  const automotriz = {
    Barnices: [
      {
        name: "Barniz HS",
        pdf: "/fichastecnicas/Barnices/FTBARNIZHS.pdf",
      },
      {
        name: "BARNIZ PLUS 2K",
        pdf: "/fichastecnicas/Barnices/FTBARNIZPLUS2K.pdf",
      },
      {
        name: "BARNIZ EXPRESS",
        pdf: "/fichastecnicas/Barnices/FTBARNIZEXPRESS.pdf",
      },
    ],
    Catalizadores: [
      {
        name: "DILUYENTE PUR ATL",
        pdf: "/fichastecnicas/Auxiliares/FT ENDURECEDOR POLIURETANO.pdf",
      },
      {
        name: "CATALIZADOR AUTOIMPRIMANTE",
        pdf: "/fichastecnicas/Auxiliares/FT CATALIZADOR AUTOIMPRIMANTE.pdf",
      },
      {
        name: "CATALIZADOR HS",
        pdf: "/fichastecnicas/Auxiliares/FT CATALIZADOR HS.pdf",
      },
      {
        name: "CATALIZADOR 410",
        pdf: "/fichastecnicas/Auxiliares/FT CATALIZADOR PUR 410.pdf",
      },
      {
        name: "CATALIZADOR 411",
        pdf: "/fichastecnicas/Auxiliares/FT CATALIZADOR PUR 411.pdf",
      },
      {
        name: "CATALIZADOR 412 ",
        pdf: "/fichastecnicas/Auxiliares/FT CATALIZADOR PUR 412.pdf",
      },
    ],
    Auxiliares: [
      {
        name: "DILUYENTE PUR ATL",
        pdf: "/fichastecnicas/Auxiliares/FT DILUYENTE PUR ATL.pdf",
      },
      {
        name: "DESENGRASANTE B.S",
        pdf: "/fichastecnicas/Auxiliares/FT DESENGRASANTE B.S.pdf",
      },
      {
        name: "REMOVEDOR DE OXIDO",
        pdf: "/fichastecnicas/Auxiliares/FT REMOVEDOR DE OXIDO.pdf",
      },
      {
        name: "SLN EPOXICA",
        pdf: "/fichastecnicas/Auxiliares/FT SLN EPOXICA.pdf",
      },
      {
        name: "SOLUCIÓN POLIURETANICA",
        pdf: "/fichastecnicas/Auxiliares/FT SOLUCIÓN POLIURETANICA.pdf",
      },
    ],
    "Entonadores PS": [
      {
        name: "Entonador PS",
        pdf: "/fichastecnicas/Entonadoresps/FT ENTONADORES PS.pdf",
      },
    ],
    "Entonadores y esmaltes PUR": [
      {
        name: "Entonador y esmaltes pur",
        pdf: "/fichastecnicas/Entonadoresyesmaltespur/FT ENTONADORES Y ESMALTES PUR.pdf",
      },
      {
        name: "Esmaltes metalizados",
        pdf: "/fichastecnicas/Entonadoresyesmaltespur/FT ESMALTES METALIZADOS PUR.pdf",
      },
    ],
    Fondos: [
      {
        name: "Bumper express negro",
        pdf: "/fichastecnicas/Fondos/FT BUMPER EXPRESS NEGRO.pdf",
      },
      {
        name: "Fondos monocomponentes",
        pdf: "/fichastecnicas/Fondos/FT FONDO MONOCOMPONENTE.pdf",
      },
      {
        name: "Fondos 2K",
        pdf: "/fichastecnicas/Fondos/FT FONDOS 2K.pdf",
      },
    ],
    Masilla: [
      {
        name: "Masilla",
        pdf: "/fichastecnicas/Masilla/FT MASILLA.pdf",
      },
    ],
    "Mates y semimates": [
      {
        name: "Esmalte mates y semimates",
        pdf: "/fichastecnicas/Matesysemimates/FT ESMALTES MATES Y SEMIMATES.pdf",
      },
      {
        name: "Pasta mateante",
        pdf: "/fichastecnicas/Matesysemimates/FT PASTA MATEANTE.pdf",
      },
    ],
    Poliuretano: [
      {
        name: "Poliuretano DTM",
        pdf: "/fichastecnicas/DTM/FT POLIURETANOS DTM.pdf",
      },
    ],
  };

  const industria = {
    "Anticorrosivos EP": [
      {
        name: "EPOXICO ANTICORROSIVOS",
        pdf: "/fichastecnicas/AnticorrosivosEpoxicos/FT EPOXICO ANTICORROSIVOS .pdf",
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
    "Esmaltes EP": [
      {
        name: "Esmalte EP ",
        pdf: "/fichastecnicas/Esmaltesepoxicos/FT EPOXICO.pdf",
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
      <picture className="contenedor-imagen-productos">
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
