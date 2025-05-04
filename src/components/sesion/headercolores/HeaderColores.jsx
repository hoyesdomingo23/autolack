import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderColores.css";

const HeaderColores = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();

  const handleInicioColores = () => {
    navigate("/InicioColores");
  };
  const handleInicioSesion = () => {
    navigate("/comparacion");
  };
  const handleAutoloack = () => {
    navigate("/");
  };
  return (
    <>
      <header className="estilos-para-header">
        <nav className="estilos-para-nav">
          {/* Menú para desktop */}
          <ul className="estilos-para-lista estilos-para-desktop">
            <li className="estilos-para-item" onClick={handleAutoloack}>
              AUTOLACK
            </li>
            <li className="estilos-para-item" onClick={handleInicioColores}>
              INICIO
            </li>
            <li
              className="estilos-para-item estilos-para-dropdown"
              onClick={handleInicioSesion}
            >
              COMPARAR
            </li>{" "}
            <li className="estilos-para-item" onClick={handleInicioSesion}>
              ¿QUIÉNES SOMOS?
            </li>
          </ul>

          {/* Menú para mobile */}
          <div className="estilos-para-mobile">
            <button className="estilos-para-menu-button" onClick={openMenu}>
              {
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M4.02344 4.5C3.60922 4.5 3.27344 4.83579 3.27344 5.25C3.27344 5.66421 3.60922 6 4.02344 6L15.0234 6C15.4377 6 15.7734 5.66421 15.7734 5.25C15.7734 4.83579 15.4377 4.5 15.0234 4.5H4.02344Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M4.02344 9C3.60922 9 3.27344 9.33579 3.27344 9.75C3.27344 10.1642 3.60922 10.5 4.02344 10.5L20.0234 10.5C20.4377 10.5 20.7734 10.1642 20.7734 9.75C20.7734 9.33579 20.4377 9 20.0234 9L4.02344 9Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M4.02344 18C3.60922 18 3.27344 18.3358 3.27344 18.75C3.27344 19.1642 3.60922 19.5 4.02344 19.5L20.0234 19.5C20.4377 19.5 20.7734 19.1642 20.7734 18.75C20.7734 18.3358 20.4377 18 20.0234 18L4.02344 18Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M3.27344 14.25C3.27344 13.8358 3.60922 13.5 4.02344 13.5L15.0234 13.5C15.4377 13.5 15.7734 13.8358 15.7734 14.25C15.7734 14.6642 15.4377 15 15.0234 15L4.02344 15C3.60922 15 3.27344 14.6642 3.27344 14.25Z"
                    fill="#ffffff"
                  />
                </svg>
              }
            </button>
            <div className={`estilos-para-popup ${isOpen ? "open" : "closed"}`}>
              <button className="estilos-para-close-button" onClick={closeMenu}>
                X
              </button>
              <ul className="estilos-para-lista-popup">
                <li>
                  <a href="https://p3plzcpnl506301.prod.phx3.secureserver.net:2096/">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(0 0 0)"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                        fill="#000000"
                      />
                      <path
                        d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                        fill="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li onClick={handleAutoloack}>AUTOLACK</li>
                <li onClick={handleInicioColores}>INICIO</li>
                <li onClick={handleInicioSesion}>COMPARAR</li>
                <li onClick={handleInicioSesion}>¿QUIÉNES SOMOS?</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderColores;
