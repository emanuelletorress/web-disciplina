// V0
/*
const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {children}
        </div>
    )
}
*/

// V1 - modifying each child
/*
import { Children } from "react"
const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (child) => {
                        return (
                            <div style={{ backgroundColor:"powderblue" }}>
                                {child}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
*/

import { Children, cloneElement } from "react"
const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    child => 
                        cloneElement(child,{supermercado: nome})
                )
            }
        </div>
    )
}

const Legume = ({ nome, supermercado }) => 
    <div>
        <h2>Legume {nome} do supermercado {supermercado}</h2>
    </div>

const Fruta = ({ nome }) => 
    <div>
        <h2>Fruta {nome}</h2>
    </div>

const Bebida = ({ nome }) => 
    <div>
        <h2>Bebida {nome}</h2>
    </div>

export {Supermercado, Legume, Fruta, Bebida}
