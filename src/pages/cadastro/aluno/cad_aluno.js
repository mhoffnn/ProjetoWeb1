import './cad_aluno.css';
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
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Aluno
                </h1>
                <button onClick={() => alert(data.user.name)}>asdf</button>
                <div>
                    <input
                        class='cad_name'
                        type='text'
                        placeholder='Nome'
                        onChange={e => handleName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='e-mail'
                    />

                    <input
                        type='text'
                        placeholder='telefone'
                        onkeypress="$(this).mask('(00) 0000-00009')"
                    />

                    <input
                        type='text'
                        placeholder='RA'
                        pattern="a[0-9]{7}"
                    />

                    <input
                        type='text'
                        placeholder='Curso'
                    />
                    <l>
                        <Link to="/">Já cadastrado</Link>
                    </l>
                    <button
                        id='confirmar-cadastro'
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