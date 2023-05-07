import ColorTheme from "./MyColorContext"

// MODO LEGADO
/*
const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({ bkgD }) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: bkgD }}>
                                Contexto D
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
const FunctionContextD = () => {

    const { bkgD } = useContext(ColorTheme)

    return (
        <div>
            <h1 style={{ backgroundColor: bkgD }}>
                Contexto D
            </h1>
        </div>
    )
}

export default FunctionContextD