import ComponenteNeto from "./ComponenteNeto";
import { useContext } from "react";
import PokeNum from "./PokeContext";

const ComponenteFilho = () => {

    const poke = useContext(PokeNum)

    return (
        <div>
            <h1> Componente Filho </h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke + 1}.png`}
                style={{ width: "400px" }}
                alt="pokemon"
            />
            <ComponenteNeto />
        </div>
    )
}

export default ComponenteFilho