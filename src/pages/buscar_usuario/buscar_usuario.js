import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

import { Link } from 'react-router-dom'

function BuscarUsuario(request, response) {
    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div class='cadastro' id='cad'>
                <h1 id='titulo'>
                    Buscar usuário
                </h1>
                <div>
                    <input
                        id='large-input'
                        type='text'
                        placeholder='Placa do Veículo'
                    />
                    <input
                        class='button'
                        id='unique'
                        value='CONFIRMAR'
                        type='submit'
                    />
                </div>
            </div>
        </div>
    );
}

export default BuscarUsuario;