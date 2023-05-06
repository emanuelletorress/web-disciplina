import React from 'react'
import { Component } from 'react'

// V0 - div constitutes a single instruction
/*
function HelloWorld() {
    return <div>
        <h1>Seraphim</h1>
    </div>
}
*/

// V1
/*
function HelloWorld() {
    return (
        <div>
            <h1>Seraphim</h1>
            <h1>Ophanim</h1>
        </div>
    );
}
*/

// V2 - arrow function
//    - this function has 4 instructions
//    - variables must be wrapped around {} inside jsx code
/*
const HelloWorld = () => {
    let lucky = 8
    return (
        <div>
            <h1>Seraphim {lucky}</h1>
        </div>
    )
}
*/

// V3 - single-instruction functions can be written like this
/*
const HelloWorld = () => 
    <div>
        <h1>Seraphim</h1>
    </div>
*/

// V4 - Class
class HelloWorld extends Component { // if Component was not imported, use React.Component instead
    render() { // classes need to implement the render method
        return (
            <div>
                <h1>Seraphim</h1>
            </div>
        )
    }
}

export default HelloWorld