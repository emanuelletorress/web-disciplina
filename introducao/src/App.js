import logo from './logo.svg';
import './App.css';
import FunctionContextA from './components/atividade02/FunctionContextA';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import * as Site from './components/04MultiploComponente';
//import { Supermercado, Legume, Fruta, Bebida } from './components/05Children';
//import FuncaoA from './components/06Contexto/FuncaoA';
//import FuncaoB from './components/06Contexto/FuncaoB';
//import SaveData from './components/07Storage/FunctionLocalStorage';
import Pai from './components/08PaiFilho/Pai';

/*
function App() {
    return (
        <div>
            <FuncaoA />
        </div>
    )
}
*/

// Children
/*
function App() {
    return (
        <div>
            <Supermercado nome="Oasis">
                <Legume nome="Batata" />
                <Fruta nome="Romã" />
                <Bebida nome="Água" />
            </Supermercado>
        </div>
    )
}
*/

// ATIVIDADE 00
/*
import MeusDados from './components/atividade00/01MeusDados';
import MeusDados from './components/atividade00/02MeusDados';
import Temperatura from './components/atividade00/03Temperatura';

function App() {
    return (
        <div>
            <MeusDados
                nome="Emanuelle"
                curso="CC"
                universidade="UFC"
            />
            <hr />
            <Temperatura
                c="30"
                f="40"
                k="50"
            />
        </div>
    )
}
*/

// ATIVIDADE 01
/*
import Pai from './components/atividade01/01Pai';
import * as PC from './components/atividade01/02MeuPC';
import * as Battle from './components/atividade01/03Batalha';
function App() {
    return (
        <div>
            <Pai />
            <hr />
            <PC.PlacaDeVideo nome="GTX" preco="R$380,00" />
            <PC.Memoria nome="HyperX" preco="R$259,90" />
            <PC.PlacaMae nome="Asus Prime" preco="R$579,99" />
            <hr />
            <Battle.World>
                <Battle.ArenaComChildren arena="Loonaverse" />
            </Battle.World>
        </div>
    )
}
*/

// ATIVIDADE 02
/*
import ComponenteAvo from './components/atividade02/02Pokemon/ComponenteAvo';
function App() {
    return (
        <div>
            <FunctionContextA />
            <hr />
            <ComponenteAvo />
        </div>
    )
}
*/

function App() {
    return (
        <div>
            <Pai/>
        </div>
    )
}

export default App;
