import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function BuscarUsuario(request, response) {
    const [placa, setPlaca] = useState('');
    const history = useHistory();

    function onConfirm() {


        if (placa === "ser123") {
            history.push('/usuario/1')
        } else if (placa === "alu321") {
            history.push('/usuario/2')
        } else if (placa === "vis000") {
            history.push('/usuario/3')
        } else {
            alert('Usuario não encontrado!')
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
                    Buscar usuário
                </h1>
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Placa do Veículo'
                        onChange={e => setPlaca(e.target.value)}
                    />
                    <button
                        class='col-md-6'
                        onClick={() => onConfirm()}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BuscarUsuario;