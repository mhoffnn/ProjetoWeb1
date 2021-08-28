import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { useHistory, useParams } from 'react-router-dom'
import { useContext } from 'react';

import { DataContext } from '../../../contexts/data';

function ContestarOcorrencia(request, response) {
    let { id_user } = useParams();
    let { id_ocorrencia } = useParams();

    let [ocorrencia] = useContext(DataContext);

    const history = useHistory();

    function onConfirm() {
        if (id_user === 1) {
            history.push('/home/1');
        } else if (id_user === 2) {
            history.push('/home/2');
        } else if (id_user === 3) {
            history.push('/home/3');
        }
    }

    if (id_ocorrencia === 1) {
        ocorrencia = {
            description: "Carro com a luz acesa",
            data: "24/04/2021 18:45"
        }
    } else if (id_ocorrencia === 2) {
        ocorrencia = {
            description: "Moto estacionada em vaga de carro",
            data: "30/03/2021 20:13"
        }
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
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/visitante'>Visitante</a>
                    <a class='navbar-text' href='/cadastrar/estacionamento'>Estacionamento</a>
                    <a class='navbar-text' href='/lista/itenscadastrados'>Itens Cadastrados</a>
                </nav>
            </div>


            <div class='container' id='cadastro'>
                <h2>Ocorrência:</h2>
                <table class='table'>
                    <ul class="list-group">
                        <h5 class="list-group-item ">Descrição: {ocorrencia.description}</h5>
                        <h5 class="list-group-item ">Data: {ocorrencia.data}</h5>
                    </ul>
                </table>
            </div>

            <div class="container" id='cadastro'>
                <h1 id='titulo'>
                    Contestar Ocorrência
                </h1>
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Titulo'
                    />
                    <textarea
                        class='col-md-11'
                        type='textarea'
                        placeholder='Descrição da Contestação'
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

export default ContestarOcorrencia;