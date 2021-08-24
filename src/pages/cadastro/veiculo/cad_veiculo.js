import './cad_veiculo.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function CadastrarVeiculo(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Cadastrar Veiculo
                </h1>
                <div>
                    <input
                        type='text'
                        placeholder='Tipo'
                    />
                    <input
                        type='text'
                        placeholder='Modelo'
                    />
                    <input
                        type='text'
                        placeholder='Fabricante'
                    />
                    <input
                        type='text'
                        placeholder='Cor'
                    />
                    <input
                        id='large-input'
                        type='text'
                        placeholder='Placa'
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
                </div>
            </div>
        </div>
    );
}

export default CadastrarVeiculo;