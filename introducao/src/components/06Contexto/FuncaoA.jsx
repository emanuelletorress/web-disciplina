import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto"

// MODO LEGADO
const FuncaoA = () => {

    const cor = "mistyrose"

    return (
        <CorContexto.Provider value={{ cor: cor, nome: "Emanuelle", cor2: "powderblue" }}>
            <div>
                <h1 style={{ backgroundColor: cor }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>
    )
}

export default FuncaoA