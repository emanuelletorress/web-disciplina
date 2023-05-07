import logo from './logo.svg';
import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import * as Site from './components/04MultiploComponente';
import { Supermercado, Legume, Fruta, Bebida } from './components/05Children';

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

export default App;
