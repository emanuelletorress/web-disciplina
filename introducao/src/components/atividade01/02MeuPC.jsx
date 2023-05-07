const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h1>Placa-mãe: {nome}</h1>
            <h2>Preço: {preco}</h2>
        </div>
    )
}

const Memoria = ({nome, preco}) => {
    return (
        <div>
            <h1>Memória: {nome}</h1>
            <h2>Preço: {preco}</h2>
        </div>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div>
            <h1>Placa de Vídeo: {nome}</h1>
            <h2>Preço: {preco}</h2>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}