import React from "react";

const Card = (props) => {

  return (
    <div>
      <h2>Información Ingresada:</h2>
      <p>Tu Nombre: {props.name}</p>
      <p>Jugador Favorito: {props.player}</p>
    </div>
  );
};

export default Card;