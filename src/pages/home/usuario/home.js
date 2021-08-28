import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

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
                    <a class='navbar-text' href='/lista/minhascontestacoes/2'>Minhas Contestações</a>
                    <a class='navbar-text' href='/associarveiculo/2'>Adicionar Veículo</a>
                    <a class='navbar-text' href='/editar/senha/2'>Alterar senha</a>
                    <a class='navbar-text' href='/editar/aluno/2'>Editar meus dados</a>
                </nav>

                <div class='conteiner' id='cadastro'>
                    <ul class="list-group">

                        <li class="list-group-item list-group-item-warning">Minhas Ocorrências</li>

                        <a href="/contestarocorrencia/1/2" class="list-group-item list-group-item-action">Carro com a luz acesa</a>
                        <a href="/contestarocorrencia/2/2" class="list-group-item list-group-item-action">Moto estacionada em vaga de carro</a>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Home;