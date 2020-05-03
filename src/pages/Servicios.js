import React, { useState } from "react";
import Nav from "./Nav";

export default function Servicios() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [current, setCurrent] = useState(null);
  const [prevImg, setPrevImg] = useState("servicios-img");
  const [currentImg, setCurrentImg] = useState("servicios-img");
  const [carouselImgs, setCarouselImgs] = useState([
    {active: true},
    {active: false},
    {active: false}
  ]);
  
  const serviciosInfo = [
    {
      titulo: "Pedidos", 
      info: "Ordena a domicilio", 
      color: "#9bd6cd", 
      class: "eventos-text",
      img: "pedidos-img"
    }, 
    {
      titulo: "Catering", 
      info: "Repostería personalizada para eventos", 
      color: "#fbe289", 
      class: "catering-text",
      img: "catering-img"
    }, 
    {
      titulo: "Distribucion", 
      info: "Distribuimos a negocios locales, pruébanos!", 
      color: "#f28080", 
      class: "distribucion-text",
      img: "distribucion-img"
    }
  ];

  const plusSlides = (n) => {
    let newSlideIndex = slideIndex + n;
    showSlides(newSlideIndex);
  }

  const showSlides = (n) => {
    let index = n; 
    if (n > carouselImgs.length-1) { index = 0 };
    if (n < 0) { index = 2 };
    let newCarouselImgs = carouselImgs.filter(el => el.active === false);
    newCarouselImgs.push({active: false});
    newCarouselImgs[index].active = true;
    setSlideIndex(index);
    setCarouselImgs(newCarouselImgs);
  };

  const backgroundColor = () => {
    switch(current) {
      case "Pedidos":
        return serviciosInfo[0].color;
      case "Catering":
        return serviciosInfo[1].color;
      case "Distribucion":
        return serviciosInfo[2].color;
    }
  }

  const textClassToggle = (type) => {
    if(current === null) {
      return serviciosInfo[type].class;
    }
    if(current === serviciosInfo[type].titulo) {
      return "white-text";
    } else {
      return "faded-text";
    }
  }

  const toggleServices = (service) => {
    setCurrent(service);
    imgClassToggle(service);
  }

  const imgClassToggle = (type) => {
    let imgClass;
    switch(type) {
      case "Pedidos":
        imgClass = "pedidos-img";
        break;
      case "Catering":
        imgClass = "catering-img";
        break;
      case "Distribucion":
        imgClass = "distribucion-img";
        break;
    }
    setCurrentImg(imgClass);
  }

  return (
    <div id="servicios">
      <div className="nav" style={{ backgroundColor: backgroundColor() }}>
        <Nav current={current} />
      </div>
      <main style={{ backgroundColor: backgroundColor() }}>
        <div className="servicios-text">
          {serviciosInfo.map((el, index) =>
            <div 
              key={index}
              className={textClassToggle(index)}
              onClick={() => toggleServices(el.titulo)}
              onMouseEnter={() => imgClassToggle(el.titulo)}
              onMouseLeave={() => setCurrentImg(prevImg)}
            >
              <div className="circle_text_row">
                <div id="circle" />
                <h1>{el.titulo.toUpperCase()}</h1>
              </div>
              <h3>
                {current === el.titulo ? el.info : null}
              </h3>
            </div>
          )}
        </div>
      </main>
      <section>
      {/* <!-- FULL SCREEN PHOTO FOR SERVICES --> */}
      <div className={`servicios-photo ${currentImg}`} />
      {/* <!--        PHOTO CAROUSEL        --> */}
      <div className={`carousel ${serviciosInfo[slideIndex].img}`}>
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
              />
            )}
          </div>
        </div>
      </div>
      </section>
      <div id="servicios_info" style={{ background: serviciosInfo[slideIndex].color }}>
        <h1>{serviciosInfo[slideIndex].titulo.toUpperCase()}</h1>
        <p>{serviciosInfo[slideIndex].info}</p>
      </div>
    </div>
  )
}