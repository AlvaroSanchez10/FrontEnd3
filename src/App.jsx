import { useState } from "react";
import Card from './Card'

const App = () => {

    const [name, setName] = useState("");
    const [player, setPlayer] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangePlayer = (e) => setPlayer(e.target.value);

    const validateName = () => {return name.trim().length >= 3};
    const validatePlayer = () => {return player.trim().length >= 6};

    const handleOnChange = (e) => {
        e.preventDefault()
        const validatedName = validateName();
        const validatedPlayer = validatePlayer();

        if(validatedName && validatedPlayer) {
            setShow(true)
        } else {
            setShow(false)
            setError("Por favor chequea que la informacion sea correcta")
        }
    }

    return (
        <div>
            <h1>Elige un Jugador:</h1>
            <div>
                <form onSubmit={handleOnChange}>
                    <div>
                        <input type="text" onChange={onChangeName} value={name} placeholder="Ingresa tu nombre"/>
                    </div>
                    <div>
                        <input type="text" onChange={onChangePlayer} value={player} placeholder="Ingresa tu jugador favorito"/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                {error ? <div>{error}</div> : null}
                {show ? <Card name={name} player={player}/> : null}
            </div>
        </div>
    )
}

export default App;