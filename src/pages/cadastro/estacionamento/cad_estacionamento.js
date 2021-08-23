import './cad_estacionamento.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function CadastrarEstacionamento(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Cadastrar Estacionamento
                </h1>
                <form>
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

export default CadastrarEstacionamento;