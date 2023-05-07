import { useContext } from "react"
import PokeNum from "./PokeContext"

const ComponenteNeto = () => {

    const poke = useContext(PokeNum)

    return (
        <div>
            <h1> Componente Neto </h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke + 2}.png`}
                style={{ width: "400px" }}
                alt="pokemon"
            />
        </div>
    )
}

export default ComponenteNeto