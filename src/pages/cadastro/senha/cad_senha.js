import './cad_senha.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

function CadastrarSenha(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Nova Senha
                </h1>
                <div>
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
                    <button
                        id='confirmar-cadastro'
                        value='CONFIRMAR'
                        type='submit'
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CadastrarSenha;