import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';
import estacionamento from '../../../estacionamento-utfpr.png';

import { Link } from 'react-router-dom'

function HomeAdm(request, response) {
    return (
        <div>
            <div class='row'>
                <img src={logo}
                    class='col-sm-3'
                    id="logo-direita"
                    alt="logo"
                />

                <nav id='navbar' class='col-sm-3 navbar-nav navbar-expand-lg navbar-light'>
                    <span class='navbar-brand'>Cadastrar: </span>
                    <a class='navbar-text' href='/cadastrar/aluno'>Aluno</a>
                    <a class='navbar-text' href='/cadastrar/veiculo'>Veiculo</a>
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/visitante'>Visitante</a>
                    <a class='navbar-text' href='/cadastrar/estacionamento'>Estacionamento</a>
                </nav>
            </div>

            <div class='row' id='image-map'>
                <h1 id='titulo'>Registrar Ocorrência</h1>
                <img src={estacionamento} id="map-image" width='906px' max-width='100%' height='auto' alt="a" usemap="#map" />
                <map name="map">
                    <area shape="rect" coords="340, 404, 883, 709" href='/ADM/c3' />
                    <area shape="rect" coords="339, 98, 883, 403" href='/ADM/b2' />
                    <area shape="rect" coords="31, 100, 337, 706" href='/ADM/a1' />
                </map>
            </div>
        </div>
    );
}

export default HomeAdm;