import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function CadastrarVisitante(request, response) {
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
                    <l class='col-md-3'>
                        <Link id='link' to="/">Já cadastrado</Link>
                    </l>
                    <button
                        class='col-md-4'
                        value='CONFIRMAR'
                        type='submit'
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CadastrarVisitante;