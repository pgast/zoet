import React from "react";
import Nav from "./Nav";

export default function Ordena() {
  return (
  <div id="ordena">
    <div className="nav">
      <Nav current="Ordena"/>
    </div>
    <main>
      <div className="form">
        <div className="form-text">
          <div className="form-header">
            <h3>Ordena por DM</h3>
            <hr />
            <h3>o háblanos por aquí</h3>
          </div>
        </div>
        <form>
          <div>
            <label for="fname">Nombre</label>
            <input type="text" id="fname" />
          </div>
          <div>
            <label for="fnumber">Whatsapp</label>
            <input type="number" id="fnumber" />
          </div>
          <div>
            <label for="frazon">Como podemos ayudarte?</label>
            <select id="frazon">
              <option value="Pedido">Pedido</option>
              <option value="Catering">Catering/Evento</option>
              <option value="Distribucion">Distribucion</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <label>Algo que quieras agregar?</label>
          <textarea name="message" rows="3" />
        </form>
        <div className="boton-enviar">ENVIAR</div>
      </div>
    </main>
    <div id="empty" />
  </div>
  )
}