import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"

// MODO LEGADO
/*
const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({ bkgC }) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: bkgC }}>
                                Contexto C
                            </h1>
                            <FunctionContextD />
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}
*/

import { useContext } from "react"
const FunctionContextC = () => {

    const { bkgC } = useContext(ColorTheme)

    return (
        <div>
            <h1 style={{ backgroundColor: bkgC }}>
                Contexto C
            </h1>
            <FunctionContextD />
        </div>
    )
}

export default FunctionContextC