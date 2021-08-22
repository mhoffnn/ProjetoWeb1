import './edit_estacionamento.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useParams } from 'react-router-dom'

function EditarEstacionamento(request, response) {
    let { id_estacionamento } = useParams();

    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Editar Estacionamento
                </h1>
                <form>
                    <input
                        class='id'
                        type='text'
                        placeholder={id_estacionamento}
                        disabled
                    />
                    <l class='atencao'>
                        Atenção! O ID não pode ser alterado
                    </l>
                    <textarea rows="5" cols="33"
                        class='desc'
                        type='text'
                        placeholder='Descrição'
                    />
                    <l>
                        <Link class='excluir-link' to="/">Excluir</Link>
                    </l>
                    <input
                        class='button'
                        id='confirmar'
                        value='CONFIRMAR'
                        type='submit'
                    />
                </form>
            </div>
        </div>
    );
}

export default EditarEstacionamento;