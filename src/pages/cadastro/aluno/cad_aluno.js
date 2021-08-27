import './cad_aluno.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { useState, useContext } from 'react';

import { Link } from 'react-router-dom'

import { DataContext } from '../../../contexts/data';


function CadastrarAluno(request, response) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [ra, setRa] = useState('');
    const [grad, setGrad] = useState(''); 
    const [data, setData] = useContext(DataContext);

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
    }

    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Aluno
                </h1>
                <div>
                    <input
                        class='cad_name'
                        type='text'
                        placeholder='Nome'
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='e-mail'
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type='text'
                        placeholder='telefone'
                        onkeypress="$(this).mask('(00) 0000-00009')"
                        onChange={e => setPhone(e.target.value)}
                    />

                    <input
                        type='text'
                        placeholder='RA'
                        pattern="a[0-9]{7}"
                        onChange={e => setRa(e.target.value)}
                    />

                    <input
                        type='text'
                        placeholder='Curso'
                        onChange={e => setGrad(e.target.value)}
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