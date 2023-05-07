import Filho from "./01Filho";

const Pai = () => {
    return (
        <div>
            <h1>Seu IMC é: </h1>
            <Filho altura={1.70} peso={45} />
        </div>
    )
}

export default Pai