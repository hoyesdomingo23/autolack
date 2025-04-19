import React from "react";
import "./Contactos.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bannerContactenos from "../images/imagenPrueba-contacto.jpg";
import imagenOficcina from "../images/Meyn-NL.jpg";
import imagenPrimerVendedor from "../images/Santiago.jpg";
import imagenTercerVendedor from "../images/JohnMarioTorresAlmanza.jpg";
import imagenSegundoVendedor from "../images/HugoVargasBeltran.jpg";

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
          <p>
            <b>HORARIO:</b>Lunes a jueves de 6 am a 4 pm y Viernes de 7AM a 3PM
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />

      <div className="h2-contacto-oficina-principal">
        <h2>Contactos de vendedores</h2>
      </div>
      <section className="contenedor-vendedores-regiones">
        <div className="card">
          <img src={imagenPrimerVendedor} className="image" />

          <div className="card-info">
            <span>SANTIAGO GAVIRIA</span>
            <p>VENDEDOR ZONA EJE CAFETERO</p>
            <p>
              <b>contacto: </b>3146298834- 3114060547
            </p>
          </div>
          <a href="#" className="button">
            WHATSAPP
          </a>
        </div>
        <div className="card">
          <img src={imagenTercerVendedor} className="image" />

          <div className="card-info">
            <span>JOHN MARIO TORRES</span>
            <p>VENDEDOR ZONA CARIBE</p>
            <p>
              <b>contacto: </b>3113225677
            </p>
          </div>
          <a href="#" className="button">
            WHATSAPP
          </a>
        </div>
        <div className="card">
          <img src={imagenPrimerVendedor} className="image" />

          <div className="card-info">
            <span>PINTURAS CA</span>
            <p>DISTRIBUIDOR BOGOTÁ</p>
            <p>
              <b>contacto: </b>3122305536
            </p>
          </div>
          <a href="#" className="button">
            WHATSAPP
          </a>
        </div>
      </section>
      <section className="contenedor-vendedores-regiones">
        <div className="card">
          <img src={imagenPrimerVendedor} className="image" />

          <div className="card-info">
            <span>PINESCOL</span>
            <p>DISTRIBUIDOR BUCARAMANGA</p>
            <p>
              <b>contacto: </b>3044190939
            </p>
          </div>
          <a href="#" className="button">
            WHATSAPP
          </a>
        </div>
        <div className="card">
          <img src={imagenSegundoVendedor} className="image" />

          <div className="card-info">
            <span>Hugo Vargas Beltran</span>
            <p>DISTRIBUIDOR MEDELLÍN</p>
            <p>
              <b>contacto: </b>3103738958
            </p>
          </div>
          <a href="#" className="button">
            WHATSAPP
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactos;
