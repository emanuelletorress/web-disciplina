
// V0 - a single parameter
/*
const MyProps = (props) => {

    const renderizarMeuNome = () => {
        return (
            <span> Emanuelle </span> // <span> to avoid linebreak
        )
    }

    return (
        <div>
            <h1>Meu nome é {renderizarMeuNome()}</h1>
            <h1>Meu nome, com props, é {props.nome}</h1>
        </div>
    )
}
*/

// V1 - multiple parameters
/*
const MyProps = (props) => {

    return (
        <div>
            <h1>Meu nome é {props.nome}</h1>
            <h1>Meu idade é {props.idade}</h1>
            <h1>Meu curso é {props.curso}</h1>
        </div>
    )
}
*/

// V2 - Deconstructing props
/*
const MyProps = (props) => {
    const {nome, idade, curso} = props
    return (
        <div>
            <h1>Meu nome é {nome}</h1>
            <h1>Meu idade é {idade}</h1>
            <h1>Meu curso é {curso}</h1>
        </div>
    )
}
*/

// V3 - Deconstructing props directly in the parameter field
const MyProps = ({nome, idade, curso}) => {
    return (
        <div>
            <h1>Meu nome é {nome}</h1>
            <h1>Meu idade é {idade}</h1>
            <h1>Meu curso é {curso}</h1>
        </div>
    )
}

export default MyProps