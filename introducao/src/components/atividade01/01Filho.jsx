const Filho = ({altura, peso}) => {
    const imc = (a, p) => p / (a ** 2)
    const msg = (indice) => {
        if (indice < 18) {
            return <h3>Abaixo do peso</h3> 
        } else if (indice > 25) {
            return <h3>Acima do peso</h3>
        } else {
            return <h3>Peso ideal</h3>
        }
    }

    return (
        <div>
            <h2>Seu imc é: {imc(altura, peso)}</h2>
            <h2>{msg(imc(altura, peso))}</h2>
        </div>
    )
}

export default Filho