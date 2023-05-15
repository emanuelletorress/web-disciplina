import { useState, useRef } from "react"

const Questao02 = () => {

    const turn = useRef(true)
    const handleClick = () => { turn.current ? turn.current = false : turn.current = true }

    return (
        <>
            <button onClick={handleClick}>
                Pikachu
            </button>
            {turn.current ?
                (
                    <>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`}
                            style={{ width: "200px" }}
                            alt="pokemon"
                        />
                    </>
                )
                :
                (
                    <>
                      <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`}
                            style={{ width: "200px" }}
                            alt="pokemon"
                        />  
                    </>
                )
            }
        </>
    )
    
    // função de renderização condicional
    /*
    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`}
                style={{ width: "200px" }}
                alt="pokemon"
            />
            <button onClick={handleClick}>
                Pikachu
            </button>
        </>
    )
    */
}

export default Questao02