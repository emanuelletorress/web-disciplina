const Calculadora = () => {

    const somar = (x, y) => {
        return x + y
    }

    // single-instruction functions can be written as following
    const subtrair = (x, y) => x - y

    const multiplicar = (x, y) => {
        return x * y
    }

    // using let in order to modify this function later
    let dividir = (x, y) => x / y

    const chamarDividir = (func) => {
        return func(30, 5)
    }

    return (
        <div>
            <h1>O result da soma é: {somar(1, 2)}</h1>
            <h1>O result da sub é: {subtrair(1, 2)}</h1>
            <h1>O result da mult é: {multiplicar(1, 2)}</h1>
            <h1>O result da div é: {chamarDividir(dividir)}</h1>
            <h1>O result da div com função anonima é: {
                chamarDividir(
                    (x, y) => x / y
                )
            }
            {/*Since jsx code is top-down, we rewrite the function 'dividir' so that the new
            version is the one that the rest of the code is going to point to*/}
                {
                // changing the value of 'dividir' function
                dividir = (x, y) => x**y
            }
            </h1>
            <h1>O result da potência é: {dividir(2, 3)}</h1>
        </div>
    )
}

export default Calculadora