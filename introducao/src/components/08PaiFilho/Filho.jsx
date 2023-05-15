const Filho = ({ falarComPai }) => {
    
    const acaoBotao = () => {
        falarComPai("Oi Pai!")
    }

    return (
        <div>
            <h1>Enviar mensagem...</h1>
            <button onClick={ acaoBotao }>
                Enviar mensagem pro Pai
            </button>
        </div>
    )
}

export default Filho