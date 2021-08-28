import './edit_senha.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';
import { useHistory } from 'react-router-dom';

function EditarSenha(request, response) {

    const history = useHistory;

    function onConfirm() {
        history.push('/home/id_session');
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
                    Editar Senha
                </h1>
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='password'
                        placeholder='Insira sua senha'
                    />
                    <input
                        class='col-md-11'
                        type='password'
                        placeholder='Nova Senha'
                    />
                    <input
                        class='col-md-11'
                        type='password'
                        placeholder='Repita a senha'
                    />
                    <button
                        class='col-md-6'
                        value='CONFIRMAR'
                        onClick={() => onConfirm()}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditarSenha;