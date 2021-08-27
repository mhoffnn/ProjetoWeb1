import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

import { Link, useHistory, useParams } from 'react-router-dom'
import { useContext, useState } from 'react';

import { DataContext } from '../../contexts/data';

function Login(request, response) {
    let { id_user } = useParams();

    let [user] = useContext(DataContext);
    const history = useHistory();

    function onConfirm() {
        if (id_user == 1) {
            history.push('/editar/servidor/id_servidor');
        } else if (id_user == 2) {
            history.push('/editar/aluno/id_aluno');
        } else if (id_user == 3) {
            history.push('/editar/visitante/id_visitante');
        }
    }
    
    if (id_user == 1) {
        user = {
            name: "Servidor",
            placa: "ser123",
        }
    } else if (id_user == 2) {
        user = {
            name: "Aluno",
            placa: "alu321",
        }
    } else if (id_user == 3) {
        user = {
            name: "Visitante",
            placa: "vis000",
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
                    <a class='navbar-brand' href='/lista/itenscadastrados'>Itens Cadastrados</a>
                    <span class='navbar-brand'>Cadastrar: </span>
                    <a class='navbar-text' href='/cadastrar/aluno'>Aluno</a>
                    <a class='navbar-text' href='/cadastrar/veiculo'>Veiculo</a>
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/visitante'>Visitante</a>
                    <a class='navbar-text' href='/cadastrar/estacionamento'>Estacionamento</a>
                </nav>
            </div>

            <div class='container' id='cadastro'>
                <h2>Usuário:</h2>
                <table class='table'>
                    <ul class="list-group">
                        <h5 class="list-group-item ">Nome: {user.name}</h5>
                        <h5 class="list-group-item">Placa: {user.placa}</h5>
                    </ul>
                </table>
                <button
                    class='col-md-4'
                    value='CONFIRMAR'
                    onClick={() => onConfirm()}
                >
                    EDITAR
                </button>
            </div>
        </div>
    );
}

export default Login;