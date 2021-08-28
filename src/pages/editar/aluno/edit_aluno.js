import './edit_aluno.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useHistory } from 'react-router-dom'

function EditarEstacionamento(request, response) {
    const history = useHistory();

    function onConfirm() {
        history.push('/cadastrar/senha/id_aluno');

    }

    return (
        <div>
            <div class='row'>
                <img src={logo}
                    class='col-sm-3'
                    id="logo-direita"
                    alt="logo"
                />

            </div>

            <div class="container" id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Aluno
                </h1>
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Nome'
                    />
                    <input
                        class='col-md-5'
                        type='email'
                        placeholder='e-mail'
                    />

                    <input
                        type='text'
                        class='col-md-5'
                        placeholder='telefone'
                        onkeypress="$(this).mask('(00) 0000-00009')"
                    />

                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='RA'
                        pattern="a[0-9]{7}"
                    />

                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Curso'
                    />
                    <l class='col-md-3'>
                        <Link id='link-excluir' to="/">Excluir</Link>
                    </l>
                    <button
                        class='col-md-4'
                        value='CONFIRMAR'
                        type='submit'
                        onClick={() => onConfirm()}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditarEstacionamento;