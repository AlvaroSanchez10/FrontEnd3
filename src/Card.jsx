import "./App.css";

const Card = ({ name, player }) => {
  console.log(name, player);

  return (
    <div className="card-container">
      <h2>Tu jugador favorito es:</h2>
      <div className="card-content">
        <p>
          <strong>Nombre:</strong> {name}
        </p>
        <p>
          <strong>Jugador favorito:</strong> {player}
        </p>
      </div>
    </div>
  );
};

export default Card;