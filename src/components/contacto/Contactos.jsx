import React from "react";
import "./Contactos.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bannerContactenos from "../images/imagenPrueba-contacto.jpg";
import imagenOficcina from "../images/Meyn-NL.jpg";

const Contactos = () => {
  return (
    <>
      <Header />
      <section className="contenedor-imagen-texto-ayudar">
        <img src={bannerContactenos}></img>
        <div className="contenedor-texto-sobre-imagen">
          <div className="subcontenedor-texto-sobre-imagen">
            <h2>
              <b>Hola</b>, ¿En que podemos ayudarte?
            </h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              corporis. Minus laudantium alias magni, deleniti minima sint ex
              repellendus est, quasi nesciunt delectus fugit atque dolorem ea,
              amet blanditiis? Iusto.
            </span>
          </div>
        </div>
      </section>
      <div className="h2-contacto-oficina-principal">
        <h2>Contacte con la oficina principal</h2>
      </div>

      <section className="contenedor-oficina-principal-contactenos">
        <img src={imagenOficcina} alt="nuestra sede principal"></img>
        <div className="contenedor-textos-contactenos">
          <h3>SABANETA (ANTIOQUIA)</h3>
          <p>
            <b> NUESTRA DIRECCIÓN</b>
          </p>
          <span>Calle 77A sur No. 45-93 Sabaneta, Antioquia</span>{" "}
          <p>
            <b> CORREO:</b> info@autolack.com.co
          </p>
          <p>
            <b> TELEFONO:</b> (604) 4446457
          </p>
          <p>
            <b>COMPRAS:</b> compras@autolack.com.co
          </p>
          <a href="/persona-autolack-vendedores.pdf" download>
            <button className="buttonDownload">Mas contactos</button>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactos;
