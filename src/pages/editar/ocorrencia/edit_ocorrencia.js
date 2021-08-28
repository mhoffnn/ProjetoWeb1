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
        if (id_user === "1") {
            history.push('/home/1');
        } else if (id_user === "2") {
            history.push('/home/2');
        } else if (id_user === "3") {
            history.push('/home/3');
        }
    }

    if (id_ocorrencia === "1") {
        ocorrencia = {
            description: "Carro com a luz acesa",
            data: "24/04/2021 18:45",
            img: "https://http2.mlstatic.com/farol-hb-20-com-angel-eyes-ledstrip-e-mascara-negra-D_NQ_NP_334711-MLB20621176139_032016-F.jpg"

        }
    } else if (id_ocorrencia === "2") {
        ocorrencia = {
            description: "Moto estacionada em vaga de carro",
            data: "30/03/2021 20:13",
            img: "https://www.carlosbritto.com/wp-content/uploads/2015/09/eafcb1c943058502c08ba5f623fc48bd-1.jpg"
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
                    <a class='navbar-brand' href='/home/id_servidor'>Home</a>
                    <a class='navbar-text' href='/lista/minhascontestacoes/2'>Minhas Contestações</a>
                    <a class='navbar-text' href='/associarveiculo/2'>Adicionar Veículo</a>
                    <a class='navbar-text' href='/editar/senha/2'>Alterar senha</a>
                    <a class='navbar-text' href='/editar/aluno/2'>Editar meus dados</a>
                </nav>
            </div>


            <div class='container' id='cadastro'>
                <h2>Ocorrência:</h2>
                <table class='table'>
                    <ul class="list-group">
                        <h5 class="list-group-item ">Descrição: {ocorrencia.description}</h5>
                        <h5 class="list-group-item ">Data: {ocorrencia.data}</h5>
                        <img src={ocorrencia.img}
                            class='col-sm-3'
                            id="logo-direita"
                        />
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