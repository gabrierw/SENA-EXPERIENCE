import React from "react";
import "../Estilos/Estilos-testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../Img/imagen${props.imagen}.png`)}
        alt="foto de gabriel"
      />
      <div className="contendor-texto-testimonio">
        <p className="nombre-testimonio ">
          {props.nombre} in {props.pais}
        </p>
        <p className="cargo-testimonio">
          Analyst and developer of information systems at {props.empresa}
        </p>
        <p className="texto-testimonio">{props.testimonio} </p>
      </div>
    </div>
  );
}

export default Testimonio;
