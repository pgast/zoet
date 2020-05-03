import React from "react";
import Nav from "./Nav";
import { Link } from "gatsby";
import rolloRosa from "../../assets/vectors/rosa.svg";
import rolloAmarillo from "../../assets/vectors/amarillo.svg";

export default () => (
  <div id="landing">
    <div className="nav">
      <Nav/>
    </div>
    <main>
      <div className="vector-background">
        <object id="rosa" type="image/svg+xml" data={rolloRosa} />
        <object id="amarillo" type="image/svg+xml" data={rolloAmarillo} />
      </div>
      <div className="intro-text">
        <h1>ENTREGANDO LA MEJOR REPOSTERÍA CASERA</h1>
        <p>¿ANTOJO?</p>
        <Link style={{ textDecoration: "none" }} to="/Ordena">
          <div className="boton-ordena">
            ORDENA YA
          </div>
        </Link>
      </div>
      <div className="mobile-main">
      <h1>ENTREGANDO LA MEJOR REPOSTERÍA CASERA</h1>
        <Link style={{ textDecoration: "none" }} to="/Ordena">
          <div className="boton-ordena boton-ordena-mobile">
            ORDENA YA
          </div>
        </Link>
      </div>
    </main>
    <section></section>
    <Link id="landing_productos" to="/Productos" style={{ textDecoration: "none" }}>
      <div id="mobile-productos-img"/>
      <h1>PRODUCTOS</h1>
    </Link>
    <Link id="landing_servicios" to="/Servicios" style={{ textDecoration: "none" }}>
      <div id="mobile-servicios-img" />
      <h1>SERVICIOS</h1>
    </Link>
  </div>
)