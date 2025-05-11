import React, { useState, useEffect, useRef } from "react";
import HeaderColores from "../headercolores/HeaderColores";
import Chart from "chart.js/auto";
import "./LecturaColor.css";

const LecturaColores = () => {
  const [L1, setL1] = useState("");
  const [A1, setA1] = useState("");
  const [B1, setB1] = useState("");
  const [L2, setL2] = useState("");
  const [A2, setA2] = useState("");
  const [B2, setB2] = useState("");
  const canvasRef = useRef(null);
  const LChartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || isNaN(parseFloat(L1)) || isNaN(parseFloat(L2)))
      return;
    renderLChart();
  }, [L1, L2]);

  const renderLChart = () => {
    if (!canvasRef.current || isNaN(parseFloat(L1)) || isNaN(parseFloat(L2)))
      return;

    const ctx = canvasRef.current.getContext("2d");

    if (LChartRef.current) {
      LChartRef.current.destroy();
    }

    LChartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Muestra 1", "Muestra 2"],
        datasets: [
          {
            label: "Luminosidad",
            data: [parseFloat(L1) || 0, parseFloat(L2) || 0],
            backgroundColor: ["blue", "white"],
            borderColor: ["white", "darkgrey"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: { y: { min: 0, max: 100 } },
        plugins: { legend: { display: false } },
      },
    });
  };

  return (
    <>
      <HeaderColores />
      <main className="main-content">
        <h2>Comparación de Muestras</h2>

        <div className="glossary">
          <p>
            <strong>L</strong> = Luminosidad (-Menos blanco +Más blanco)
          </p>
          <p>
            <strong>A</strong> = A- Verde / A+ Rojo
          </p>
          <p>
            <strong>B</strong> = B- Azul / B+ Amarillo
          </p>
        </div>

        <div className="inputs">
          <div className="input-group">
            <label>ΔL M1:</label>
            <input
              type="number"
              value={L1}
              onChange={(e) => {
                const value =
                  e.target.value.trim() === ""
                    ? ""
                    : parseFloat(e.target.value);
                setL1(isNaN(value) ? "" : value);
              }}
              placeholder="Luminosidad M1"
            />
          </div>
          <div className="input-group">
            <label>ΔA M1:</label>
            <input
              type="number"
              value={A1}
              onChange={(e) => {
                const value =
                  e.target.value.trim() === ""
                    ? ""
                    : parseFloat(e.target.value);
                setA1(isNaN(value) ? "" : value);
              }}
              placeholder="A M1"
            />
          </div>
          <div className="input-group">
            <label>ΔB M1:</label>
            <input
              type="number"
              value={B1}
              onChange={(e) => {
                const value =
                  e.target.value.trim() === ""
                    ? ""
                    : parseFloat(e.target.value);
                setB1(isNaN(value) ? "" : value);
              }}
              placeholder="B M1"
            />
          </div>
          <div className="input-group">
            <label>ΔL M2:</label>
            <input
              type="number"
              value={L2}
              onChange={(e) => {
                const value =
                  e.target.value.trim() === ""
                    ? ""
                    : parseFloat(e.target.value);
                setL2(isNaN(value) ? "" : value);
              }}
              placeholder="Luminosidad M2"
            />
          </div>
          <div className="input-group">
            <label>ΔA M2:</label>
            <input
              type="number"
              value={A2}
              onChange={(e) => {
                const value =
                  e.target.value.trim() === ""
                    ? ""
                    : parseFloat(e.target.value);
                setA2(isNaN(value) ? "" : value);
              }}
              placeholder="A M2"
            />
          </div>
          <div className="input-group">
            <label>ΔB M2:</label>
            <input
              type="number"
              value={B2}
              onChange={(e) => {
                const value =
                  e.target.value.trim() === ""
                    ? ""
                    : parseFloat(e.target.value);
                setB2(isNaN(value) ? "" : value);
              }}
              placeholder="B M2"
            />
          </div>
        </div>

        <div className="chartsContainer">
          <div>
            <h3>Luminosidad</h3>
            <canvas ref={canvasRef} width="300" height="300"></canvas>
          </div>
        </div>

        <button onClick={renderLChart}>Actualizar Gráfica</button>
      </main>
    </>
  );
};

export default LecturaColores;
