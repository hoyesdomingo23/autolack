import React, { useState } from "react";
import "./LandingNuevo.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ImagenNuevosPrimero from "../images/Lanzamientos800x1000.png";

const LandingNuevo = () => {
  const [index, setIndex] = useState(0); // Estado para manejar el índice de los productos
  const products = [
    { id: "23432252", title: "Producto uno", image: ImagenNuevosPrimero },
    { id: "23432253", title: "Producto dos", image: ImagenNuevosPrimero },
    { id: "23432254", title: "Producto tres", image: ImagenNuevosPrimero },
    { id: "23432255", title: "Producto cuatro", image: ImagenNuevosPrimero },
    { id: "23432256", title: "Producto cinco", image: ImagenNuevosPrimero },
  ];

  // Funciones para navegar
  const nextSlide = () => {
    if (index < products.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="h2-nuevos-productos">
        <h2>Nuestros nuevos productos</h2>
      </div>
      <div className="landing-nuevo-container">
        <button className="carousel-button left-button" onClick={prevSlide}>
          &#8249; {/* Símbolo para botón izquierdo */}
        </button>
        <div className="cards-container">
          {products.slice(index, index + 3).map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-content">
                <div className="product-header">
                  <div className="product-details">
                    <span className="product-title">{product.title}</span>
                    <p className="product-id">ID: {product.id}</p>
                  </div>
                </div>
                <button className="product-button">Ver más</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button right-button" onClick={nextSlide}>
          &#8250; {/* Símbolo para botón derecho */}
        </button>
      </div>
      <div className="h2-nuevos-productos">
        <h2>Descubre nuestros nuevos colores!</h2>
      </div>
      <section className="contenedor-colores-temporada">
        <div className="cards-nuevos">
          <div className="paleta">
            <div className="circle">
              <div className="component">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-palette"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"></path>
                </svg>
              </div>
            </div>
            <div className="cores cor1">
              <div className="div1">
                <span className="func">Click me!</span>
              </div>
              <div className="div2">
                <div className="component">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-palette"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"></path>
                  </svg>
                </div>
              </div>
              <div className="nome">0E3746</div>
            </div>
            <div className="cores cor2">
              <div className="div3"></div>
              <div className="div4">
                <div className="component">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-palette"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"></path>
                  </svg>
                </div>
              </div>
              <div className="nome">EAE8DC</div>
            </div>
            <div className="cores cor3">
              <div className="div5"></div>
              <div className="div6">
                <div className="component">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-palette"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"></path>
                  </svg>
                </div>
              </div>
              <div className="nome">F4F2EC</div>
            </div>
            <div className="cores cor4">
              <div className="div7"></div>
              <div className="div8">
                <div className="component">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-palette"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"></path>
                  </svg>
                </div>
              </div>
              <div className="nome">BE2623</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingNuevo;
