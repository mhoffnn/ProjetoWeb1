import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useHistory } from 'react-router-dom'

function CadastrarVisitante(request, response) {

    const history = useHistory();

    function onConfirm() {
        history.push('/cadastrar/senha/id_vizitante');
    }

    return (
        <div>
            <div class='row'>
                <img src={logo}
                    class='col-sm-3'
                    id="logo-direita"
                    alt="logo"
                />

                <nav id='navbar' class='col-sm-3 navbar-nav navbar-expand-lg navbar-light'>
                    <a class='navbar-brand' href='/ADM/id_servidor'>Home</a>
                    <a class='navbar-brand' href='/buscarusuario'>Buscar Usuario</a>
                    <span class='navbar-brand'>Cadastrar: </span>
                    <a class='navbar-text' href='/cadastrar/aluno'>Aluno</a>
                    <a class='navbar-text' href='/cadastrar/veiculo'>Veiculo</a>
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/estacionamento'>Estacionamento</a>
                </nav>
            </div>

            <div class="container" id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Visitante
                </h1>
                <div class='row'>
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Nome'
                    />
                    <input
                        class='col-md-5'
                        type='email'
                        placeholder='E-mail'
                    />
                    <input
                        class='col-md-5'
                        type='tel'
                        placeholder='Telefone'
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='CPF'
                    />

                    <button
                        class='col-md-5'
                        value='CONFIRMAR'
                        onClick={() => onConfirm()}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CadastrarVisitante;