import './cad_servidor.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function CadastrarServidor(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Cadastrar Servidor
                </h1>
                <form>
                    <input
                        type='text'
                        placeholder='Nome'
                    />
                    <input
                        type='email'
                        placeholder='e-mail'
                    />
                    <input
                        type='text'
                        placeholder='Telefone'
                    />
                    <input
                        type='text'
                        placeholder='Nº Matricula'
                    />
                    <input
                        type='text'
                        placeholder='Cargo'
                    />
                    <input
                        id='small-input'
                        type='text'
                        placeholder='Ramal'
                    />
                    <input
                        id='small-input'
                        type='text'
                        placeholder='Sala'
                    />
                    <l>
                        <Link to="/">Já cadastrado</Link>
                    </l>
                    <input
                        class='button'
                        id='confirmar-cadastro'
                        value='CONFIRMAR'
                        type='submit'
                    />
                </form>
            </div>
        </div>
    );
}

export default CadastrarServidor;