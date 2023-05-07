import ComponenteFilho from "./ComponenteFilho";
import PokeNum from "./PokeContext";
import React from "react";

const ComponenteAvo = () => {

    //const num = 1
    const [contador, setCont] = React.useState(1)
    const handleClick = () => { setCont(contador + 1) }

    return (
        <PokeNum.Provider value={contador}>
            <div>
                <button type="button" onClick={handleClick}>Next evolution</button>
                <h1> Componente Avo </h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
                    style={{ width: "400px" }}
                    alt="pokemon"
                />
                <ComponenteFilho />
            </div>
        </PokeNum.Provider>
    )
}

export default ComponenteAvo