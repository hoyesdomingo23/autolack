import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import chroma from "chroma-js";
import Chart from "chart.js/auto";
import aups from "./datoscomparacion/Aups";
import crps from "./datoscomparacion/Crps";
import grps from "./datoscomparacion/Grps";
import "./ComparacionesC.css";
import HeaderColores from "../headercolores/HeaderColores";
import * as XLSX from "xlsx";

const ComparacionesC = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [colorComparacion, setColorComparacion] = useState(null);
  useEffect(() => {
    const cargarValores = () => {
      const data = JSON.parse(localStorage.getItem("colorComparacion"));
      if (data) {
        setColorComparacion(buscarColorMasCercano(data));
      }
    };

    cargarValores();

    window.addEventListener("storage", cargarValores);
    return () => {
      window.removeEventListener("storage", cargarValores);
    };
  }, []);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("colorComparacion"));
    if (data) {
      setColorComparacion(buscarColorMasCercano(data));
    }
  }, []);

  useEffect(() => {
    if (colorComparacion && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      if (window.myChart) {
        window.myChart.destroy(); // Destruir gráfico previo antes de crear uno nuevo
      }

      window.myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Muestra", "AUTOLACK"],
          datasets: [
            {
              label: "ΔL Valores",
              data: [
                colorComparacion?.L,
                colorComparacion?.colorMasCercanoAups?.L,
                colorComparacion?.colorMasCercanoGrps?.L,
                colorComparacion?.colorMasCercanoCrps?.L,
              ],
              backgroundColor: [
                chroma("black").hex(),
                chroma("blue").hex(),
                chroma("yellow").hex(),
                chroma("green").hex(),
              ],
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 100,
            },
          },
        },
      });
    }
  }, [colorComparacion]);
  const exportToExcel = () => {
    if (!colorComparacion) return;

    // Datos de la tabla
    const data = [
      ["Empresa", "ΔL", "ΔA", "ΔB", "ΔC", "ΔH", "ΔE*ab", "Nombre del color"],
      [
        "Muestra",
        colorComparacion?.L,
        colorComparacion?.A,
        colorComparacion?.B,
        colorComparacion?.C.toFixed(2),
        "—",
        "—",
        "—",
      ],
      [
        "AUTOLACK",
        colorComparacion?.colorMasCercanoAups?.L,
        colorComparacion?.colorMasCercanoAups?.A,
        colorComparacion?.colorMasCercanoAups?.B,
        colorComparacion?.colorMasCercanoAups?.deltaC.toFixed(2),
        colorComparacion?.colorMasCercanoAups?.deltaH.toFixed(2),
        colorComparacion?.colorMasCercanoAups?.deltaE.toFixed(2),
        colorComparacion?.colorMasCercanoAups?.Name,
      ],
      [
        "CR",
        colorComparacion?.colorMasCercanoCrps?.L,
        colorComparacion?.colorMasCercanoCrps?.A,
        colorComparacion?.colorMasCercanoCrps?.B,
        colorComparacion?.colorMasCercanoCrps?.deltaC.toFixed(2),
        colorComparacion?.colorMasCercanoCrps?.deltaH.toFixed(2),
        colorComparacion?.colorMasCercanoCrps?.deltaE.toFixed(2),
        colorComparacion?.colorMasCercanoCrps?.Name,
      ],
      [
        "GR",
        colorComparacion?.colorMasCercanoGrps?.L,
        colorComparacion?.colorMasCercanoGrps?.A,
        colorComparacion?.colorMasCercanoGrps?.B,
        colorComparacion?.colorMasCercanoGrps?.deltaC.toFixed(2),
        colorComparacion?.colorMasCercanoGrps?.deltaH.toFixed(2),
        colorComparacion?.colorMasCercanoGrps?.deltaE.toFixed(2),
        colorComparacion?.colorMasCercanoGrps?.Name,
      ],
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);

    // **Aplicar estilos**
    const range = XLSX.utils.decode_range(ws["!ref"]); // Rango de celdas

    for (let row = range.s.r; row <= range.e.r; row++) {
      for (let col = range.s.c; col <= range.e.c; col++) {
        const cellRef = XLSX.utils.encode_cell({ r: row, c: col });

        if (!ws[cellRef]) ws[cellRef] = {};
        ws[cellRef].s = {
          alignment: { horizontal: "center", vertical: "center" },
        };

        if (row === 0) {
          ws[cellRef].s.fill = { fgColor: { rgb: "FFFF00" } };
        }
      }
    }

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Comparacion de Colores");

    XLSX.writeFile(wb, "TablaComparacionColores.xlsx");
  };
  const buscarColorMasCercano = (data) => {
    const buscarEnBaseDatos = (baseDatos) => {
      let colorCercano = null;
      let minDeltaE = Infinity;

      baseDatos.forEach((color) => {
        const deltaL = color.L - data.L;
        const deltaA = color.A - data.A;
        const deltaB = color.B - data.B;
        const c1 = Math.sqrt(Math.pow(data.A, 2) + Math.pow(data.B, 2));
        const c2 = Math.sqrt(Math.pow(color.A, 2) + Math.pow(color.B, 2));
        const deltaC = c2 - c1;
        const deltaE = Math.sqrt(
          Math.pow(deltaL, 2) + Math.pow(deltaA, 2) + Math.pow(deltaB, 2)
        );
        const deltaH = Math.sqrt(
          Math.pow(deltaE, 2) - Math.pow(deltaL, 2) - Math.pow(deltaC, 2)
        );

        if (deltaE < minDeltaE) {
          minDeltaE = deltaE;
          colorCercano = { ...color, deltaC, deltaH, deltaE };
        }
      });

      return colorCercano;
    };

    return {
      L: data.L,
      A: data.A,
      B: data.B,
      C: Math.sqrt(Math.pow(data.A, 2) + Math.pow(data.B, 2)),
      colorMasCercanoAups: buscarEnBaseDatos(aups),
      // colorMasCercanoCrps: buscarEnBaseDatos(crps),
      // colorMasCercanoGrps: buscarEnBaseDatos(grps),
    };
  };

  return (
    <>
      <HeaderColores />
      <div className="comparaciones-container">
        {/* Botones de navegación */}

        <h2>Tabla Comparativa de Colores</h2>

        {/* Tabla comparativa */}
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>ΔL</th>
              <th>ΔA</th>
              <th>ΔB</th>
              <th>ΔC</th>
              <th>ΔH</th>
              <th>ΔE*ab</th>
              <th>Nombre del color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Muestra</td>
              <td>{colorComparacion?.L}</td>
              <td>{colorComparacion?.A}</td>
              <td>{colorComparacion?.B}</td>
              <td>{colorComparacion?.C.toFixed(2)}</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>AUTOLACK</td>
              <td>{colorComparacion?.colorMasCercanoAups?.L}</td>
              <td>{colorComparacion?.colorMasCercanoAups?.A}</td>
              <td>{colorComparacion?.colorMasCercanoAups?.B}</td>
              <td>
                {colorComparacion?.colorMasCercanoAups?.deltaC.toFixed(2)}
              </td>
              <td>
                {colorComparacion?.colorMasCercanoAups?.deltaH.toFixed(2)}
              </td>
              <td>
                {colorComparacion?.colorMasCercanoAups?.deltaE.toFixed(2)}
              </td>
              <td>{colorComparacion?.colorMasCercanoAups?.Name}</td>
            </tr>
            {/* <tr>
              <td>CR</td>
              <td>{colorComparacion?.colorMasCercanoCrps?.L}</td>
              <td>{colorComparacion?.colorMasCercanoCrps?.A}</td>
              <td>{colorComparacion?.colorMasCercanoCrps?.B}</td>
              <td>
                {colorComparacion?.colorMasCercanoCrps?.deltaC.toFixed(2)}
              </td>
              <td>
                {colorComparacion?.colorMasCercanoCrps?.deltaH.toFixed(2)}
              </td>
              <td>
                {colorComparacion?.colorMasCercanoCrps?.deltaE.toFixed(2)}
              </td>
              <td>{colorComparacion?.colorMasCercanoCrps?.Name}</td>
            </tr>
            <tr>
              <td>GR</td>
              <td>{colorComparacion?.colorMasCercanoGrps?.L}</td>
              <td>{colorComparacion?.colorMasCercanoGrps?.A}</td>
              <td>{colorComparacion?.colorMasCercanoGrps?.B}</td>
              <td>
                {colorComparacion?.colorMasCercanoGrps?.deltaC.toFixed(2)}
              </td>
              <td>
                {colorComparacion?.colorMasCercanoGrps?.deltaH.toFixed(2)}
              </td>
              <td>
                {colorComparacion?.colorMasCercanoGrps?.deltaE.toFixed(2)}
              </td>
              <td>{colorComparacion?.colorMasCercanoGrps?.Name}</td>
            </tr> */}
          </tbody>
        </table>
        <div className="btn-container">
          <button
            className="boton-descargar-excel"
            onClick={() => navigate("/InicioColores")}
          >
            Inicio
          </button>
          <button
            className="boton-descargar-excel"
            onClick={() => navigate("/lectura-color")}
          >
            Lectura Color
          </button>
          <button className="boton-descargar-excel" onClick={exportToExcel}>
            <svg
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              height="40"
              width="40"
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
            <span class="button__text">Descargar excel</span>
          </button>
        </div>
        {/* Gráfica de ΔL */}
        <section className="contenedor-rueda-grafica">
          <div className="grafica-luminosidad">
            <h3>Luminosidad</h3>
            <canvas ref={canvasRef}></canvas>
          </div>
          <div className="imagen-rueda">
            <h3>Cromatocidad</h3>
            <div className="contenedor-imagen">
              <img src="/Rueda.png" alt="Rueda de colores" />
              {/* Punto de muestra (blanco) */}
              <div
                className="punto-color punto-muestra"
                style={{
                  backgroundColor: "white",
                  left: `${colorComparacion?.A * 2}px`,
                  top: `${colorComparacion?.B * 2}px`,
                }}
              ></div>

              {/* Punto de Autolack (azul) */}
              <div
                className="punto-color punto-autolack"
                style={{
                  backgroundColor: "blue",
                  left: `${colorComparacion?.colorMasCercanoAups?.A * 2}px`,
                  top: `${colorComparacion?.colorMasCercanoAups?.B * 2}px`,
                }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComparacionesC;
