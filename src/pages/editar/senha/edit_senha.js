import './edit_senha.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

function EditarSenha(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Editar Senha
                </h1>
                <div>
                    <input
                        class='large-input'
                        type='text'
                        placeholder='Insira sua senha'
                    />
                    <input
                        class='large-input'
                        type='text'
                        placeholder='Nova Senha'
                    />
                    <input
                        class='large-input'
                        type='email'
                        placeholder='Repita a senha'
                    />
                    <input
                        class='button'
                        id='confirmar'
                        value='CONFIRMAR'
                        type='submit'
                    />
                </div>
            </div>
        </div>
    );
}

export default EditarSenha;