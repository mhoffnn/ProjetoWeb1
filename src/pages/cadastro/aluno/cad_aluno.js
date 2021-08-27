import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { useState, useContext } from 'react';

import { Link } from 'react-router-dom'

import { DataContext } from '../../../contexts/data';

function CadastrarAluno(request, response) {
    const [name, setName] = useState(null);
    const [data, setData] = useContext(DataContext);

    function handleName(name) {
        setName(name);
    };

    function handleSubmit() {
        let user = {
            name
        };

        setData({ ...data, user });
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
                    Cadastrar Aluno
                </h1>
                <button onClick={() => alert(data.user.name)}>asdf</button>
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Nome'
                        onChange={e => handleName(e.target.value)}
                    />
                    <input
                        class='col-md-5'
                        type='email'
                        placeholder='e-mail'
                    />

                    <input
                        type='text'
                        class='col-md-5'
                        placeholder='telefone'
                        onkeypress="$(this).mask('(00) 0000-00009')"
                    />

                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='RA'
                        pattern="a[0-9]{7}"
                    />

                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Curso'
                    />
                    <l class='col-sm-3'>
                        <Link id='link' to="/">Já cadastrado</Link>
                    </l>
                    <button
                        class='col-md-4'
                        value='CONFIRMAR'
                        type='submit'
                        onClick={() => handleSubmit()}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CadastrarAluno;