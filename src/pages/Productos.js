import React, { useState } from "react";
import Nav from "./Nav";

export default function Productos() {
  const [current, setCurrent] = useState({title: "NUESTROS FAVORITOS"});
  const [slideIndex, setSlideIndex] = useState(0);
  const [carouselImgs, setCarouselImgs] = useState([
    {active: true},
    {active: false},
    {active: false},
    {active: false},
    {active: false},
    {active: false}
  ]);

  const productos = [
    [
      {texto: "Brownies", imagen: "brownies", color: "#fbe289"}, 
      {texto: "Rollo de Pistache", imagen: "pistaccio", color: "#9bd6cd"}
    ], 
    [
      {texto: "Rollo de Zanahoria", imagen: "zanahoria", color: "#f28080"}, 
      {texto: "Lemon Cheesecake", imagen: "lemonCheesecake", color: "#fbe289"}
    ], 
    [
      {texto: "Pastel Triple Chocolate", imagen: "tripleChocolate", color: "#9bd6cd"}, 
      {texto: "Rollo de Mango", imagen: "mango", color: "#f28080"}
    ]
  ];

  const mobileImgs = ["brownies", "pistaccio", "zanahoria", "lemonCheesecake", "tripleChocolate", "mango"];

  const plusSlides = (n) => {
    let newSlideIndex = slideIndex + n;
    showSlides(newSlideIndex);
  }

  const showSlides = (n) => {
    let index = n; 
    if (n > carouselImgs.length-1) { index = 0 };
    if (n < 0) { index = 5 };
    let newCarouselImgs = carouselImgs.filter(el => el.active === false);
    newCarouselImgs.push({active: false});
    newCarouselImgs[index].active = true;
    setSlideIndex(index);
    setCarouselImgs(newCarouselImgs);
  };

  const showCurrent = (text="NUESTROS FAVORITOS", color) => { 
    setCurrent({ title: text, color });
  };

  return (
    <div id="productos">
      <div className="nav" onMouseEnter={() => showCurrent()}>
        <Nav />
      </div>
      <main onMouseEnter={() => showCurrent()}>
        <div className="productos-text">
          <h1 style={{ color: current.color }}>{current.title}</h1>
          {current.title === "NUESTROS FAVORITOS" ? 
          <h3>Tenemos mucha mas variedad, preguntanos!</h3> : null
          }
        </div>
      </main>
      <section>
        {/* <!-- FULL SCREEN PHOTO MOSAIC --> */}
        <div className="full-size-photos">
          {productos.map((el,index) => 
            <div key={index} className="photo-row">
              <div 
                className={`photo ${el[0].imagen}`}
                onMouseEnter={() => showCurrent(el[0].texto, el[0].color)}
              >
              </div>
              <div 
                className={`photo ${el[1].imagen}`}
                onMouseEnter={() => showCurrent(el[1].texto, el[1].color)}
              >
              </div>
            </div>
          )}
        </div>
        {/* <!--        PHOTO CAROUSEL        --> */}
        <div className={`carousel ${mobileImgs[slideIndex]}`}>
          {carouselImgs.map((el, index) => 
            <div 
              key={index}
              className="mySlides fade" 
              style={el.active ? {display: 'block'} : {display: 'none'}}
            />
          )}
          <div className="carousel-controls">
            <div className="toggle-img-controls">
              <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
              <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <div className="dots">
              {carouselImgs.map((el, index) => 
                <span 
                  key={index}
                  onClick={() => showSlides(index)}
                  className={el.active ? "dot active" : "dot"} 
                >
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      <div id="productos_info">
        <h1>PRODUCTOS</h1>
        <p>POSTRES SALADOS, REPOSTERIA Y MAS</p>
      </div>
    </div>
  )
}