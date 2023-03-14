import { useState } from "react";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [player, setPlayer] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangePlayer = (e) => setPlayer(e.target.value);

  const validateName = () => name.trim().length >= 3;
  const validatePlayer = () => player.trim().length >= 6;

  const handleOnChange = (e) => {
    e.preventDefault();
    const validatedName = validateName();
    const validatedPlayer = validatePlayer();

    if (validatedName && validatedPlayer) {
      setShow(true);
    } else {
      setShow(false);
      setError("Por favor chequea que la informacion sea correcta");
    }
  };

  return (
    <div className="container">
      <h1>Elige un Jugador:</h1>
      <div className="form-container">
        <form onSubmit={handleOnChange}>
          <div className="form-group">
            <input
              type="text"
              onChange={onChangeName}
              value={name}
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={onChangePlayer}
              value={player}
              placeholder="Ingresa tu jugador favorito"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {error ? <div className="error">{error}</div> : null}
        {show ? <Card name={name} player={player} /> : null}
      </div>
    </div>
  );
};

export default App;