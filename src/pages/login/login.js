import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';

import { DataContext } from '../../contexts/data';

function Login(request, response) {
    const [ name, setName ] = useState('');
    const [ passwd, setPasswd ] = useState('');
    const [ data, setData ] = useContext(DataContext);

    function handleConfirm () {
        setData({
            ...data,
            user: {
                ...data.user,
                name,
                passwd
            }
        })
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
                    Entrar
                </h1>
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Nome'
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        class='col-md-11'
                        type='password'
                        placeholder='Senha'
                        onChange={e => setPasswd(e.target.value)}
                    />
                    <button
                        class='col-md-11'
                        value='CONFIRMAR'
                        type='submit'
                        onClick={() => handleConfirm()}
                    >
                        CONFIRMAR
                    </button>
                    <l class='row'>
                        <Link id='link-login' class='col-md-5' to="/cadastrar/senha">Esqueci minha senha</Link>
                        <Link id='link-login' class='col-md-5' to="/cadastrar/visitante">Realizar cadastro</Link>
                    </l>

                </div>
            </div>
        </div>
    );
}

export default Login;