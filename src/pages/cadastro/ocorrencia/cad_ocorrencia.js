import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { useHistory, useParams } from 'react-router-dom'

function CadastrarOcorrencia(request, response) {
    const history = useHistory();

    function onConfirm() {
        history.push('/ADM/id_servidor');
    }

    let { id_estacionamento } = useParams();

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
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/visitante'>Visitante</a>
                    <a class='navbar-text' href='/cadastrar/estacionamento'>Estacionamento</a>
                    <a class='navbar-text' href='/lista/itenscadastrados'>Itens Cadastrados</a>
                </nav>
            </div>

            <div class="container" id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Ocorrência
                </h1>
                <div class='row'>
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Placa do Veículo'
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder={id_estacionamento}
                        disabled
                    />
                    <input
                        class='col-md-5'
                        type='datetime'
                        placeholder='Data e Hora'
                    />
                    <input
                        class='col-md-5'
                        type='file'
                        placeholder='Inserir foto'
                    />
                    <input
                        class='col-md-11'
                        type='textarea'
                        placeholder='Observação'
                    />
                    <button
                        class='col-md-6'
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

export default CadastrarOcorrencia;