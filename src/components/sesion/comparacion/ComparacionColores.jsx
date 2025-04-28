import React, { useState } from "react";
import "./ComparacionColores.css";
import HeaderColores from "../headercolores/HeaderColores";

const ComparacionColores = () => {
  const [AL, setAL] = useState(""); // Luminosidad
  const [AA, setAA] = useState(""); // Valor numérico A
  const [AB, setAB] = useState(""); // Valor numérico B
  const [resultado, setResultado] = useState(null); // Resultado del color calculado

  // Función para limitar valores de AA y AB a 180
  const handleInputChange = (value, setter) => {
    const num = Number(value);
    if (num > 180) {
      setter(180); // Ajusta al límite máximo
    } else if (num < -180) {
      setter(-180); // Ajusta al límite mínimo
    } else if (value === "0" || value === "-") {
      setter(""); // Vacía el campo si es inválido
    } else {
      setter(value); // Asigna el valor
    }
  };

  // Función para calcular el color y mantener el punto dentro del círculo
  const calcularColor = () => {
    let x = 200 + (Number(AA) || 0); // Ajusta a escala de 400x400
    let y = 200 - (Number(AB) || 0);

    // Mantener el punto dentro del círculo
    const dx = x - 200; // Distancia en X desde el centro
    const dy = y - 200; // Distancia en Y desde el centro
    const distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia > 190) {
      // Ajustar el punto al borde del círculo si está fuera
      const ratio = 190 / distancia;
      x = 200 + dx * ratio;
      y = 200 + dy * ratio;
    }

    // Relacionar la posición con el color según el espacio del círculo cromático
    let hex = "";
    let nombreColor = "Desconocido";

    if (x >= 200 && x <= 300 && y <= 200) {
      hex = "#FF0000"; // Rojo
      nombreColor = "Rojo";
    } else if (x > 300 && y <= 200) {
      hex = "#FFFF00"; // Amarillo
      nombreColor = "Amarillo";
    } else if (x > 300 && y > 200) {
      hex = "#00FF00"; // Verde
      nombreColor = "Verde";
    } else if (x >= 200 && x <= 300 && y > 200) {
      hex = "#0000FF"; // Azul
      nombreColor = "Azul";
    } else if (x < 200 && y > 200) {
      hex = "#FF00FF"; // Magenta
      nombreColor = "Magenta";
    } else if (x < 200 && y <= 200) {
      hex = "#FF4500"; // Naranja
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
          <button onClick={calcularColor}>CONFIRMAR</button>
        </div>

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
            <line x1="30" y1="30" x2="370" y2="370" stroke="gray" />
            <line x1="30" y1="370" x2="370" y2="30" stroke="gray" />
            {/* Punto calculado según AA y AB */}
            <circle cx={posicion.x} cy={posicion.y} r="5" fill="black" />
          </svg>
        </div>

        {/* Resultado del color */}
        {resultado && (
          <div className="resultado">
            <p>Hexadecimal: {resultado.hex}</p>
            <p>RGB: {resultado.rgb}</p>
            <p>Nombre del color: {resultado.nombreColor}</p>
            {/* Muestra visual del color */}
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: resultado.hex,
                border: "1px solid black",
                marginTop: "10px",
              }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
};

export default ComparacionColores;
