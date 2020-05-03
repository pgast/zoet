import React, { useState } from "react";
import { Link } from "gatsby";
import insta from "../../assets/vectors/insta.svg";
import logoVerde from "../../assets/vectors/logo.svg";
import logoAmarillo from "../../assets/vectors/logoblanco.svg";
import logoRojo from "../../assets/vectors/logoblancorojo.svg";
import logoBlanco from "../../assets/vectors/logoblancoverde.svg";

export default function Nav({ current }) {
  const [close, setClose] = useState(true);

  const logoToggle = (type) => {
    switch(type) {
      case "Pedidos":
        return logoBlanco;
      case "Catering":
        return logoAmarillo;
      case "Distribucion":
        return logoRojo;
      case "Ordena":
        return logoBlanco;
      default:
        return logoVerde;
    }
  }

  const linkClassToggle = (type) => {
    let classes = { navlink: "navLink-black", insta: "insta" };

    switch(type) {
      case "Pedidos":
        classes.navLink = "navLink-black";
        classes.insta = "insta insta-black";
        break;
      case "Catering":
        classes.navLink = "navLink-black";
        classes.insta = "insta insta-black";
        break;
      case "Ordena":
        classes.navLink = "navLink-black";
        classes.insta = "insta insta-black";
        break;
      case "Distribucion":
        classes.navLink = "navLink-white";
        classes.insta = "insta insta-white";
        break;
      default: 
        classes.navLink = "navLink";
        classes.insta = "insta insta-def";
    }
    return classes
  }
    
  return (
    <div>
      <div>
        <Link to="/Landing">
          <img src={logoToggle(current)} />
        </Link>
      </div>
      <div className="links">
        <Link 
          to="/Productos"
          className={linkClassToggle(current).navLink}
        >
          PRODUCTOS
        </Link>
        <Link 
          to="/Servicios"
          className={linkClassToggle(current).navLink}
        >
          SERVICIOS
        </Link>
        <Link 
          to="/Ordena"
          className={linkClassToggle(current).navLink}
        >
          ORDENA
        </Link>
        <a href="https://www.instagram.com/zoet.reposteria/">
          <img className={linkClassToggle(current).insta} src={insta} />
        </a>
      </div>
      <div className="container" onClick={() => setClose(!close)}>
        <div className={close ? "bar1 change" : "bar1"}></div>
        <div className={close ? "bar2 change" : "bar2"}></div>
        <div className={close ? "bar3 change" : "bar3"}></div>
      </div>
      {/* MOBILE MENU */}
      {!close &&
      <div className="mobile-menu">
        <div className="mobile-menu-header" onClick={() => setClose(!close)}>
          <div className={"change1 bar1"}></div>
          <div className={"change3 bar3"}></div>
        </div>
        <div className="mobile-menu-links">
          <Link to="/Productos">PRODUCTOS</Link>
          <Link to="/Servicios">SERVICIOS</Link>
          <Link to="/Ordena">ORDENA</Link>
          <a href="https://www.instagram.com/zoet.reposteria/">
            <img className={linkClassToggle(current).insta} src={insta} />
          </a>
        </div>
      </div>
      }
    </div>
  )
}

