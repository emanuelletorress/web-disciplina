/*
import { useEffect, useState } from "react"

function Questao01X() {

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]

    return (
        <>
            <h1>Questao01X</h1>
            <Questao01Y alunos={alunos} />
        </>
    )
}

const Questao01Y = ({ alunos }) => {

    const [medias, setMedias] = useState([])
    
    useEffect(
        () => {
            setMedias(medias => alunos.map(media => (alunos.ap1 + alunos.ap2)/2 ))
        }
        ,
        [medias]
    )

    return (
        <>
            <h1>Questao01Y</h1>
        </>
    )
}

export default Questao01X
*/
