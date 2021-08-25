import './edit_veiculo.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'

function EditarVeiculo(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Editar Veiculo
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
                        <Link id='excluir-link' to="/">Excluir</Link>
                    </l>
                    <input
                        id='confirmar'
                        value='CONFIRMAR'
                        type='submit'
                    />
                </div>
            </div>
        </div>
    );
}

export default EditarVeiculo;