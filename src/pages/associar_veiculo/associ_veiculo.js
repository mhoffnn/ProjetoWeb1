import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

import { Link } from 'react-router-dom'

function AssociarVeiculo(request, response) {
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
                    Seu Veículo
                </h1>
                <div class='row'>
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Placa do Veículo'
                    />
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Repita a placa'
                    />
                    <l class='col-md-4'>
                        <Link id='link-login' to="/associarveiculo/:id_session">Associar outro veículo</Link>
                    </l>
                    <button
                        class='col-md-4'
                        value='CONFIRMAR'
                        type='submit'
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div >
    );
}

export default AssociarVeiculo;