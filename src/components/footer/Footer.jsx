import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-general-toda-la-pagina">
        <h2>Datos de contacto</h2>
        <section className="contenedor-toda-la-informacion-footer">
          <div className="datos-planta-footer">
            <h3>PLANTA</h3>
            <li>PBX: (604) 4446457</li>
            <li>INFORMACIÓN: info@autolack.com.co</li>
            <li>DIRECCIÓN: Calle 77A sur No. 45-93 Sabaneta, Antioquia</li>
            <li>COMPRAS: compras@autolack.com.co</li>
          </div>
          <div className="datos-planta-footer">
            <h3>VENTAS</h3>
            <li>Medellín: Pinturas Autoindustriales</li>
            <li>Teléfono: (604) 2328680</li>
            <li>Dirección: Carrera 51 No. 39-40</li>
          </div>
          <div className="datos-planta-footer">
            <h3>VENTAS</h3>
            <li>Bucaramanga: Pinescol SAS</li>
            <li>Teléfono: (607) 6300030</li>
            <li>Dirección: Carrera 19 No. 22-64</li>
          </div>
          <div className="datos-planta-footer">
            <h3>VENTAS</h3>
            <li>Bogotá: Carlos Gonzalez</li>
            <li>Celular: 312 230 5536</li>
            <li>Astrid Martínez</li>
            <li>Celular: 310 468 2151</li>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
