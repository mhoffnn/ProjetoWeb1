import './cad_visitante.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function CadastrarVisitante(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Cadastrar Visitante
                </h1>
                <form>
                    <input
                        class='cad_name'
                        type='text'
                        placeholder='Nome'
                    />
                    <input
                        class='cad_email'
                        type='email'
                        placeholder='E-mail'
                    />
                    <input
                        type='tel'
                        placeholder='Telefone'
                    />
                    <input
                        type='text'
                        placeholder='CPF'
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

export default CadastrarVisitante;