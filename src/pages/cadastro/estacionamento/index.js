import './style.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function CadastroEstacionamento(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' class="col-sm" id='cad'>
                <h1 class='titulo'>
                    Estacionamento
                </h1>
                <input
                    class='id'
                    type='text'
                    placeholder='ID'
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
                    <Link to="/">Já cadastrado</Link>
                </l>
                <button>
                    CONFIRMAR
                </button>
            </div>
        </div>
    );
}

export default CadastroEstacionamento;