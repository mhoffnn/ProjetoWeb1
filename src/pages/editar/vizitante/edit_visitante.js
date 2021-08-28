import './edit_visitante.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useParams } from 'react-router-dom'

function EditarVisitante(request, response) {
    let { id_visitante } = useParams();
    id_visitante = 3;

    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Editar Visitante
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
                        <Link class='excluir-link' to="/">Excluir</Link>
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

export default EditarVisitante;