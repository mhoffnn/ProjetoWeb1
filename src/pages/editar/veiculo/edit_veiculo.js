import './edit_veiculo.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useHistory } from 'react-router-dom'

function EditarVeiculo(request, response) {
    const history = useHistory();

    function onConfirm() {
        history.push('/ADM/1');

    };

    return (
        <div>
            <div class='row'>
                <img src={logo}
                    class='col-sm-3'
                    id="logo-direita"
                    alt="logo"
                />

                <nav id='navbar' class='col-sm-3 navbar-nav navbar-expand-lg navbar-light'>
                    <a class='navbar-brand' href='/ADM/id_servidor'>Home</a>
                    <a class='navbar-brand' href='/lista/itenscadastrados'>Itens Cadastrados</a>
                </nav>
            </div>

            <div class="container" id='cadastro'>
                <h1 id='titulo'>
                    Editar Veiculo
                </h1>
                <div class='row'>
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Tipo'
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Modelo'
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Fabricante'
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Cor'
                    />
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Placa'
                    />
                    <l class='col-md-3'>
                        <Link id='link-excluir' to="/">Excluir</Link>
                    </l>
                    <button
                        class='col-md-5'
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

export default EditarVeiculo;