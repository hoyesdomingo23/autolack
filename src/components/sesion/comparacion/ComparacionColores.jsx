import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ComparacionColores.css";
import HeaderColores from "../headercolores/HeaderColores";

const ComparacionColores = () => {
  const [AL, setAL] = useState("");
  const [AA, setAA] = useState("");
  const [AB, setAB] = useState("");
  const [resultado, setResultado] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const currentTime = new Date().getTime();

    if (!auth || !auth.loggedIn || auth.expiration < currentTime) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  const handleInputChange = (value, setter) => {
    const num = Number(value);
    if (num > 180) {
      setter(180);
    } else if (num < -180) {
      setter(-180);
    } else if (value === "0" || value === "-") {
      setter("");
    } else {
      setter(value);
    }
  };

  const calcularColor = () => {
    let x = 200 + (Number(AA) || 0);
    let y = 200 - (Number(AB) || 0);

    const dx = x - 200;
    const dy = y - 200;
    const distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia > 190) {
      const ratio = 190 / distancia;
      x = 200 + dx * ratio;
      y = 200 + dy * ratio;
    }

    let hex = "";
    let nombreColor = "Desconocido";

    if (x >= 200 && x <= 300 && y <= 200) {
      hex = "#FF0000";
      nombreColor = "Rojo";
    } else if (x > 300 && y <= 200) {
      hex = "#FFFF00";
      nombreColor = "Amarillo";
    } else if (x > 300 && y > 200) {
      hex = "#00FF00";
      nombreColor = "Verde";
    } else if (x >= 200 && x <= 300 && y > 200) {
      hex = "#0000FF";
      nombreColor = "Azul";
    } else if (x < 200 && y > 200) {
      hex = "#FF00FF";
      nombreColor = "Magenta";
    } else if (x < 200 && y <= 200) {
      hex = "#FF4500";
      nombreColor = "Naranja";
    }

    // Convertir a RGB desde hexadecimal
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);

    // Guardar resultado
    setResultado({ hex, rgb: `rgb(${red}, ${green}, ${blue})`, nombreColor });
  };

  const calcularPosicion = () => {
    const x = 200 + (Number(AA) || 0); // Ajusta a escala de 400x400
    const y = 200 - (Number(AB) || 0);
    return { x, y };
  };

  const posicion = calcularPosicion();

  return (
    <>
      <HeaderColores />
      <div className="Contenedor-h1-colores">
        <h2>Lectura de color</h2>
      </div>
      {showPopup && (
        <div className="popupColores">
          <div className="contenedor-texto-boton-popup">
            <p>
              Por favor accede primero a tu cuenta antes de iniciar a comparar.
            </p>
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
      {!showPopup && (
        <div className="contenedor-cielab">
          {/* Inputs para los valores */}
          <div className="inputs-circulocromatico">
            <input
              type="number"
              placeholder="AL (Luminosidad)"
              value={AL}
              onChange={(e) => setAL(e.target.value)}
            />
            <input
              type="number"
              placeholder="Valor AA"
              value={AA}
              onChange={(e) => handleInputChange(e.target.value, setAA)}
            />
            <input
              type="number"
              placeholder="Valor AB"
              value={AB}
              onChange={(e) => handleInputChange(e.target.value, setAB)}
            />
          </div>
          <div className="contenedor-botones-comprar-confirmar-colores">
            <button onClick={calcularColor} className="boton-confirmar-colores">
              <span>CONFIRMAR</span>
            </button>
            <button onClick={calcularColor} className="boton-confirmar-colores">
              <span>COMPARAR</span>
            </button>
          </div>
          <section className="contenedor-respuesta-mas-circulo">
            <div className="circulo-cielab">
              <svg width="400" height="400" viewBox="0 0 400 400">
                <defs>
                  <linearGradient
                    id="redToYellow"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="0%" style={{ stopColor: "red" }} />
                    <stop offset="100%" style={{ stopColor: "yellow" }} />
                  </linearGradient>
                  <linearGradient
                    id="yellowToGreen"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="0%" style={{ stopColor: "yellow" }} />
                    <stop offset="100%" style={{ stopColor: "green" }} />
                  </linearGradient>
                  <linearGradient
                    id="greenToBlue"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="0%" style={{ stopColor: "green" }} />
                    <stop offset="100%" style={{ stopColor: "blue" }} />
                  </linearGradient>
                  <linearGradient
                    id="blueToMagenta"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="0%" style={{ stopColor: "blue" }} />
                    <stop offset="100%" style={{ stopColor: "magenta" }} />
                  </linearGradient>
                </defs>
                {/* Triángulos que dividen el círculo */}
                <path
                  d="M200,200 L200,10 A190,190 0 0,1 390,200 Z"
                  fill="url(#redToYellow)"
                />
                <path
                  d="M200,200 L390,200 A190,190 0 0,1 200,390 Z"
                  fill="url(#yellowToGreen)"
                />
                <path
                  d="M200,200 L200,390 A190,190 0 0,1 10,200 Z"
                  fill="url(#greenToBlue)"
                />
                <path
                  d="M200,200 L10,200 A190,190 0 0,1 200,10 Z"
                  fill="url(#blueToMagenta)"
                />
                {/* Ejes cartesianos: Líneas ajustadas */}
                <line x1="200" y1="10" x2="200" y2="390" stroke="gray" />
                <line x1="10" y1="200" x2="390" y2="200" stroke="gray" />
                <line x1="65" y1="65" x2="340" y2="330" stroke="gray"></line>
                <line x1="70" y1="330" x2="330" y2="70" stroke="gray"></line>
                {/* Punto calculado según AA y AB */}
                <circle cx={posicion.x} cy={posicion.y} r="5" fill="white" />
              </svg>
            </div>
            {resultado && (
              <div className="resultado-colores">
                <p>
                  <b>Hexadecimal:</b> {resultado.hex}
                </p>
                <p>
                  <b> RGB:</b> {resultado.rgb}
                </p>
                <p>
                  <b>Nombre del color: </b>
                  {resultado.nombreColor}
                </p>
                {/* Muestra visual del color */}
                <div
                  style={{
                    width: "150px",
                    height: "50px",
                    backgroundColor: resultado.hex,
                    border: "1px solid black",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                ></div>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default ComparacionColores;
