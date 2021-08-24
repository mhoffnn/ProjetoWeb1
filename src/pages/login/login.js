import './login.css';
import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

import { Link } from 'react-router-dom'

function Login(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Entrar
                </h1>
                <div>
                    <input
                        id='unique'
                        type='text'
                        placeholder='Nome'
                    />
                    <input
                        id='unique'
                        type='password'
                        placeholder='Senha'
                    />
                    <input
                        class='button'
                        id='unique'
                        value='CONFIRMAR'
                        type='submit'
                    />
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