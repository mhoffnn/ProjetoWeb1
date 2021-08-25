import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

import { Link } from 'react-router-dom'

function Login(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Seu Veículo
                </h1>
                <div>
                    <input
                        id='large-input'
                        type='text'
                        placeholder='Placa do Veículo'
                    />
                    <input
                        id='large-input'
                        type='text'
                        placeholder='Repita a placa'
                    />
                    <l id='call-me'>
                        <Link to="/associarveiculo/:id_session">Associar outro veículo</Link>
                    </l>
                    <input
                        class='button'
                        id='unique'
                        value='CONFIRMAR'
                        type='submit'
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;