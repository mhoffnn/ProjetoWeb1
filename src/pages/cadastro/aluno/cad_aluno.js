import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { useState, useContext } from 'react';

import { Link, useHistory } from 'react-router-dom'

import { DataContext } from '../../../contexts/data';

function CadastrarAluno(request, response) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [ra, setRa] = useState('');
    const [grad, setGrad] = useState('');
    const [data, setData] = useContext(DataContext);
    const history = useHistory();

    function handleSubmit() {
        let students = data.students;
        students.push({
            name,
            email,
            phone,
            ra,
            grad
        })

        setData({ ...data, students });
        history.push('/cadastrar/senha/id_aluno');
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
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Nome'
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        class='col-md-5'
                        type='email'
                        placeholder='e-mail'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type='text'
                        class='col-md-5'
                        placeholder='telefone'
                        onkeypress="$(this).mask('(00) 0000-00009')"
                        onChange={e => setPhone(e.target.value)}
                    />

                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='RA'
                        pattern="a[0-9]{7}"
                        onChange={e => setRa(e.target.value)}
                    />

                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Curso'
                        onChange={e => setGrad(e.target.value)}
                    />

                    <button
                        class='col-md-5'
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