import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function Home(request, response) {
    return (
        <div>
            <div class='row'>
                <img src={logo}
                    class='col-sm-3'
                    id="logo-direita"
                    alt="logo"
                />

                <nav id='navbar' class='col-sm-3 navbar-nav navbar-expand-lg navbar-light'>
                    <a class='navbar-text' href='/list/contestacao/:id_session'>Minhas Contestações</a>
                    <a class='navbar-text' href='/associarveiculo/:id_session'>Adicionar Veículo</a>
                    <a class='navbar-text' href='/editar/senha/:id_session'>Alterar senha</a>
                    <a class='navbar-text' href='/editar/{tipo_usuario}/:id_session'>Editar meus dados</a>
                </nav>

                <div class='conteiner' id='cadastro'>
                    <ul class="list-group">

                        <li class="list-group-item list-group-item-warning">Minhas Ocorrências</li>

                        <a href="#" class="list-group-item list-group-item-action">Test3</a>
                        <a href="#" class="list-group-item list-group-item-action">Test3</a>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Home;