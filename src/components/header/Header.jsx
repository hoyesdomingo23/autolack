import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleSomos = () => {
    navigate("/nosotros");
  };
  const handleLineas = () => {
    navigate("/lineas");
  };
  const handleFichasTecnicas = () => {
    navigate("/fichas-tecnicas");
  };

  const handleContacto = () => {
    navigate("/contacto");
  };
  const handleNuevo = () => {
    navigate("/nuevo");
  };
  const handleSesion = () => {
    navigate("/inicio-sesion");
  };
  return (
    <>
      <header className="estilos-para-header">
        <nav className="estilos-para-nav">
          {/* Menú para desktop */}
          <ul className="estilos-para-lista estilos-para-desktop">
            <li className="estilos-para-item" onClick={handleHome}>
              INICIO
            </li>
            <li className="estilos-para-item" onClick={handleSomos}>
              ¿QUIÉNES SOMOS?
            </li>
            <li
              className="estilos-para-item estilos-para-dropdown"
              onClick={handleLineas}
            >
              LINEAS
            </li>
            <li
              className="estilos-para-item estilos-para-dropdown"
              onClick={handleNuevo}
            >
              NUEVO
            </li>
            <li
              className="estilos-para-item estilos-para-dropdown"
              onClick={handleFichasTecnicas}
            >
              FICHAS TÉCNICAS
            </li>
            {/* <li className="estilos-para-item">MISIÓN Y VISIÓN</li> */}
            <li className="estilos-para-item" onClick={handleContacto}>
              CONTACTO
            </li>
            <li
              className="estilos-para-item"
              id="estilos-unicamente-icono-empleados"
              onClick={handleSesion}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                  fill="#ffffff"
                />
                <path
                  d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                  fill="#ffffff"
                />
              </svg>
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
                <li onClick={handleHome}>INICIO</li>
                <li onClick={handleSomos}>¿QUIÉNES SOMOS?</li>
                <li onClick={handleLineas}>LINEAS</li>
                <li onClick={handleNuevo}>NUEVO</li>
                <li onClick={handleFichasTecnicas}>FICHAS TÉCNICAS</li>
                {/* <li>MISIÓN Y VISIÓN</li> */}
                <li onClick={handleContacto}>CONTACTO</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="whatsapp-boton">
        <a href="https://api.whatsapp.com/message/QHMKJUJPPTZHP1?autoload=1&app_absent=0">
          {
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                d="M19.074 4.89389C17.2091 3.02894 14.6689 2 12.0644 2C6.59814 2 2.12869 6.4373 2.12869 11.9035C2.12869 13.672 2.57885 15.3441 3.44702 16.8875L2.03223 22L7.33769 20.6495C8.78464 21.4212 10.4245 21.8714 12.0965 21.8714C17.5306 21.8392 21.9679 17.4019 21.9679 11.9035C21.9679 9.26688 20.939 6.791 19.074 4.89389ZM12.0322 20.1672C10.5853 20.1672 9.07403 19.7492 7.82001 18.9775L7.49846 18.7846L4.37949 19.5884L5.24766 16.5659L5.05473 16.2444C4.25088 14.926 3.80072 13.3826 3.80072 11.8392C3.80072 7.30547 7.46631 3.63987 12.0322 3.63987C14.2187 3.63987 16.2766 4.50804 17.82 6.05145C19.3634 7.59486 20.2316 9.68489 20.2316 11.9035C20.2959 16.5016 16.566 20.1672 12.0322 20.1672ZM16.566 13.9936C16.3088 13.865 15.119 13.254 14.8297 13.2219C14.6046 13.1254 14.4116 13.0932 14.283 13.3505C14.1544 13.6077 13.6399 14.1222 13.5113 14.3151C13.3827 14.4437 13.2541 14.508 12.9647 14.3473C12.7075 14.2187 11.9358 13.9936 10.9711 13.0932C10.2316 12.4502 9.71711 11.6463 9.62065 11.3569C9.49203 11.0997 9.5885 11.0032 9.74927 10.8424C9.87788 10.7138 10.0065 10.5852 10.103 10.3923C10.2316 10.2637 10.2316 10.135 10.3602 9.97428C10.4888 9.84566 10.3924 9.65274 10.328 9.52412C10.2316 9.3955 9.78142 8.17364 9.55634 7.65917C9.36342 7.1447 9.13834 7.24116 9.00972 7.24116C8.8811 7.24116 8.68817 7.24116 8.55956 7.24116C8.43094 7.24116 8.1094 7.27331 7.91647 7.5627C7.69139 7.81994 7.0483 8.43087 7.0483 9.65273C7.0483 10.8746 7.91647 12 8.07724 12.2251C8.20586 12.3537 9.84573 14.8939 12.2895 15.9871C12.8682 16.2444 13.3184 16.4051 13.7043 16.5338C14.283 16.7267 14.8297 16.6624 15.2477 16.6302C15.73 16.5981 16.6946 16.0514 16.9197 15.4405C17.1126 14.8939 17.1126 14.3473 17.0483 14.2508C16.984 14.1865 16.7911 14.09 16.566 13.9936Z"
                fill="#ffff"
              />
            </svg>
          }
        </a>
      </section>
    </>
  );
};

export default Header;
