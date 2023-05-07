import ColorTheme from "./MyColorContext"

// MODO LEGADO
/*
const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({ bkgB }) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: bkgB }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}
*/

import { useContext } from "react"
const FunctionContextB = () => {

    const { bkgB } = useContext(ColorTheme)

    return (
        <div>
            <h1 style={{ backgroundColor: bkgB }}>
                Contexto B
            </h1>
        </div>
    )
}

export default FunctionContextB