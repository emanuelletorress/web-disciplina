const Temperatura = ({c, f, k}) => {

    const celciusParaFarenheit = (c) => {
        return ((9 * c) / 5) + 32
    }

    const farenheitParaCelcius = (f) => {
        return ((f - 32) * 5) / 9
    }

    const kelvin = (k) => {
        const c = k - 273
        const f = ((k - 273) * 1.8) + 32
        const obj = JSON.stringify({ celcius: c, farenheit: f })
        return {obj}
    }

    return (
        <div>
            <h1>{c} graus Celcius para Farenheit: {celciusParaFarenheit(c)}</h1>
            <h1>{f} graus Farenheit para Celcius: {farenheitParaCelcius(f)}</h1>
            <h1>{k} graus Kelvin para Celcius e Farenheit: {kelvin(k).obj}</h1>
        </div>
    )
}

export default Temperatura