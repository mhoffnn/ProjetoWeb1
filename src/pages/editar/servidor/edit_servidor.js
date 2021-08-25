import './edit_servidor.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useParams } from 'react-router-dom'

function EditarServidor(request, response) {
    let { id_servidor } = useParams();

    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Editar Servidor
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
                        <Link id='excluir-link' to="/">Excluir</Link>
                    </l>
                    <input
                        id='confirmar'
                        value='CONFIRMAR'
                        type='submit'
                    />
                </form>
            </div>
        </div>
    );
}

export default EditarServidor;