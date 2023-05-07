function Hero({ name }) {
    return (
        <div>
            <h1>Hero: {name}</h1>
            <img
                src="https://i.imgur.com/wG8zbTt.gif"
                alt="PonPonPon Kyary"
            />
        </div>
    )
}

function Enemy({ name }) {
    return (
        <div>
            <h1>Enemy: {name}</h1>
            <img
                src="https://i.imgur.com/pVhVcik.gif"
                alt="Candy Candy Kyary"
            />
        </div>
    )
}

/*
function Arena({ arena, children }) {
    return (
        <div>
            <h1>Arena: {arena}</h1>
            <Hero name="Ponponpon Kyary" />
            <Hero name="Candy Candy Kyary" />
        </div>
    )
}
*/

function ArenaComChildren({ arena, children }) {
    return (
        <div>
            <h1>Arena: {arena}</h1>
            <Hero name="Ponponpon Kyary" />
            <Hero name="Candy Candy Kyary" />
        </div>
    )
}

function World(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export {Hero, Enemy, ArenaComChildren, World}