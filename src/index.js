
import ReactDOM from 'react-dom'; //lembrar de navegar até a pasta nome-do-projeto para rodar npm run start no terminal
import Corpo from './Corpo';
import FundoMobile from './FundoMobile';
import Navbar from './Navbar';


function App(){ // Função responsável por trazer todos os elementos da página

    return (
        <div>

            <Navbar />
            <Corpo />
            <FundoMobile />
            
        </div>
    )

}

ReactDOM.render( <App /> , document.querySelector(".root"));