import React from "react"
// V0
/*
function MeusDados() {
    return (
        <div>
            <h1>Meu nome é Emanuelle Torres</h1>
            <h1>Minha idade é 24</h1>
            <h1>Meu curso é CC</h1>
        </div>
    )
}
*/

// V1 - return without parenthesis
/*
function MeusDados() {
    return <div>
            <h1>Meu nome é Emanuelle Torres</h1>
            <h1>Minha idade é 24</h1>
            <h1>Meu curso é CC</h1>
        </div>
}
*/

// V2 - arrow function
/*
const MeusDados = () => {
    return (
        <div>
            <h1>Meu nome é Emanuelle Torres</h1>
            <h1>Minha idade é 24</h1>
            <h1>Meu curso é CC</h1>
        </div>
    )
}
*/

// V3 - class
class MeusDados extends React.Component {
    render() { // classes need to implement the render method
        return (
            <div>
                <h1>Meu nome é Emanuelle Torres</h1>
                <h1>Minha idade é 24</h1>
                <h1>Meu curso é CC</h1>
            </div>
        )
    }
}

export default MeusDados