import './login.css';
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
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Entrar
                </h1>
                <button onClick={() => alert(data.test + data.user.name + data.user.passwd + data.user.doc)}>testButton</button>
                <div>
                    <input
                        id='unique'
                        type='text'
                        placeholder='Nome'
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        id='unique'
                        type='password'
                        placeholder='Senha'
                        onChange={e => setPasswd(e.target.value)}
                    />
                    <button
                        id='unique'
                        value='CONFIRMAR'
                        type='submit'
                        onClick={() => handleConfirm()}
                    >
                        CONFIRMAR
                    </button>
                    <l id='call-me'>
                        <Link to="/cadastrar/senha">Esqueci minha senha</Link>
                        <Link to="/cadastrar/visitante">Realizar cadastro</Link>
                    </l>
                </div>
            </div>
        </div>
    );
}

export default Login;