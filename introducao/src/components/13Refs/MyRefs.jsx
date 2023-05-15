import { useState, useRef } from "react"

const MyRefs = () => {

    let x = 0 // é inicializada quando o componente é novamente renderizado
    const [stateX, setStateX] = useState(0)
    const refX = useRef(0)

    return (
        <>
            { console.log("RENDER") }
            <h1>X: {x}</h1>
            <h1>StateX: {stateX}</h1>
            <h1>RefX: {refX.current}</h1>
            <button onClick={
                () => {
                    x += 1
                    console.log("x:" + x)
                }
            }>
                x + 1
            </button>
            <button onClick={
                () => {
                    setStateX((prev) => prev + 1)
                    console.log("stateX: " + stateX)
                }
            }>
                stateX + 1
            </button>
            <button onClick={
                () => {
                    refX.current = refX.current + 1
                    console.log("refX: " + refX.current)
                }
            }>
                refX + 1
            </button>
        </>
    )
}

export default MyRefs