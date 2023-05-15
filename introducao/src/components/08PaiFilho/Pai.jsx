import Filho from "./Filho"

const Pai = () => {
    
    function mensagemDoFilho(mensagem) {
        //alert("Recebi: " + mensagem)
        alert(`Meu filho disse: ${mensagem}`)
    }
    
    return (
        <Filho falarComPai={mensagemDoFilho} />
    )
}

export default Pai