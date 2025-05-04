import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import chroma from "chroma-js";
import Chart from "chart.js/auto";
import "./ComparacionColores.css";
import HeaderColores from "../headercolores/HeaderColores";

const ComparacionColores = () => {
  const navigate = useNavigate();
  const [L, setL] = useState("");
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("#ffffff");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [puntoPos, setPuntoPos] = useState({ x: 50, y: 50 });

  const handleComparacion = () => {
    if (L === "" || A === "" || B === "") {
      alert("Por favor ingresa valores en todos los campos antes de comparar.");
      return;
    }

    localStorage.setItem(
      "colorComparacion",
      JSON.stringify({
        L,
        A,
        B,
      })
    );

    // ✅ Recargar ComparacionesC.jsx para forzar actualización
    navigate("/comparacion", { replace: true });
  };

  useEffect(() => {
    verificarLogin();
    inicializarGrafica();
  }, []);

  useEffect(() => {
    actualizarPosicionPunto();
  }, [A, B]);

  const verificarLogin = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (!authData || !authData.loggedIn || Date.now() > authData.expiration) {
      navigate("/");
    }
  };

  const validarValores = (value, min, max) => {
    if (value === "") return "";
    return Math.min(Math.max(parseFloat(value), min), max);
  };

  const handleUpdate = () => {
    if (L === "" || A === "" || B === "") {
      alert("Por favor ingresa valores numéricos en todos los campos.");
      return;
    }

    const lValue = parseFloat(L);
    const aValue = parseFloat(A);
    const bValue = parseFloat(B);

    const hex = chroma.lab(lValue, aValue, bValue).hex();
    setColorHex(hex);

    const colorNames = [
      { hex: "#ff0000", name: "Rojo" },
      { hex: "#00ff00", name: "Verde" },
      { hex: "#0000ff", name: "Azul" },
      { hex: "#ffff00", name: "Amarillo" },
      { hex: "#ff00ff", name: "Magenta" },
      { hex: "#00ffff", name: "Cian" },
      { hex: "#000000", name: "Negro" },
      { hex: "#ffffff", name: "Blanco" },
      { hex: "#808080", name: "Gris" },
      { hex: "#ffc0cb", name: "Rosa" },
    ];

    let closestColor = "Color desconocido";
    let minDeltaE = Infinity;
    colorNames.forEach((color) => {
      const colorLabRef = chroma(color.hex).lab();
      const deltaE = chroma.deltaE([lValue, aValue, bValue], colorLabRef);
      if (deltaE < minDeltaE) {
        minDeltaE = deltaE;
        closestColor = color.name;
      }
    });

    setColorName(closestColor);

    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = [lValue];
      chartInstance.current.update();
    }
  };

  const inicializarGrafica = () => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Si ya existe una instancia de la gráfica, destruirla antes de crear una nueva
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Crear nueva instancia de la gráfica
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Luminosidad"],
          datasets: [
            {
              label: "Valor L",
              data: [0], // Se mantiene estático hasta que el usuario presiona "Mostrar"
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderColor: "rgba(255, 206, 86, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    }
  };

  const actualizarPosicionPunto = () => {
    if (A === "" || B === "") return;

    const xPos = ((parseFloat(A) + 128) / 255) * 100;
    const yPos = ((parseFloat(B) + 128) / 255) * 100;
    setPuntoPos({ x: xPos, y: yPos });
  };

  return (
    <>
      <HeaderColores />
      <div className="main-content">
        <h2>Lectura Color</h2>

        <div className="inputs-comparar-colores">
          <div className="wave-group">
            <input
              type="number"
              value={L}
              onChange={(e) => setL(validarValores(e.target.value, 0, 100))}
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                V
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                L
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                O
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                R
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                ㅤ
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 7 }}>
                /
              </span>
              <span className="label-char" style={{ "--index": 8 }}>
                L
              </span>
            </label>
          </div>
          <div className="wave-group">
            <input
              type="number"
              value={A}
              onChange={(e) => setA(validarValores(e.target.value, -128, 127))}
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                V
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                L
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                O
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                R
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                ㅤ
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 7 }}>
                /
              </span>
              <span className="label-char" style={{ "--index": 8 }}>
                A
              </span>
            </label>
          </div>
          <div className="wave-group">
            <input
              type="number"
              value={B}
              onChange={(e) => setB(validarValores(e.target.value, -128, 127))}
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                V
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                L
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                O
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                R
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                ㅤ
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 7 }}>
                /
              </span>
              <span className="label-char" style={{ "--index": 8 }}>
                B
              </span>
            </label>
          </div>
        </div>
        <section className="contenedor-botones-ver-comparar">
          <button onClick={handleUpdate} className="boton-mostrar">
            {" "}
            <p> Mostrar</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
          <button onClick={handleComparacion} className="boton-comparar">
            <p>Comparar</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </section>

        {/* Sección de visualización con gráfica y rueda */}
        <div className="contenedor-colores">
          <div className="grafica-luminosidad">
            <h3>Luminosidad</h3>
            <canvas ref={chartRef} width="300" height="300"></canvas>
          </div>

          <div className="imagen-rueda">
            <h3>Cromatocidad</h3>
            <img
              src="/Rueda.png"
              alt="Rueda de colores"
              className="rueda-color"
            />
            <div
              className="punto-blanco"
              style={{
                left: `${puntoPos.x}%`,
                top: `${puntoPos.y}%`,
                backgroundColor: colorHex,
              }}
            ></div>
          </div>
        </div>

        <div className="contenedor-colot-obtenido">
          <h2>Color obtenido: </h2>
          {/* {colorName} */}
          <div
            className="muestra-color"
            style={{
              width: "160px",
              height: "50px",
              backgroundColor: colorHex,
              border: "1px solid black",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ComparacionColores;
