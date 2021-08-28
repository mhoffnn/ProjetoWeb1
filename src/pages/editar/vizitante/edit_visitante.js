import './edit_visitante.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useHistory } from 'react-router-dom'

function EditarVisitante(request, response) {

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
                        <Link id='link-excluir' to="/">Excluir</Link>
                    </l>
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

export default EditarVisitante;