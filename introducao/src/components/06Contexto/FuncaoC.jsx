import FuncaoD from "./FuncaoD"
import CorContexto from "./MeuContexto"
import { useContext } from "react"

const FuncaoC = () => {

    const objeto = useContext(CorContexto)
    const {cor, nome, cor2} = objeto

    return (
        <div>
            <h1 style={{ backgroundColor: cor2 }}> Função C </h1>
            <FuncaoD />
        </div>
    )
}

export default FuncaoC