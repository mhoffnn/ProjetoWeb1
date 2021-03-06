import './cad_estacionamento.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useHistory } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../contexts/data';

import Helper from '../../../helpers/general';

function CadastrarEstacionamento(request, response) {
    const [desc, setDesc] = useState();
    const [id, setId] = useState();
    const [data, setData] = useContext(DataContext);
    const history = useHistory();

    function onConfirm() {
        let parkingLots = data.parkingLots;

        parkingLots.push({
            id,
            description: desc
        })

        setData({ ...data, parkingLots });

        alert('Registro adicionado com sucesso!');
        history.push('/ADM/1');
    }

    useEffect(() => {
        setId(Helper.getNextId(data.parkingLots));
    })

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
                    <a class='navbar-brand' href='/buscarusuario'>Buscar Usuario</a>
                    <span class='navbar-brand'>Cadastrar: </span>
                    <a class='navbar-text' href='/cadastrar/aluno'>Aluno</a>
                    <a class='navbar-text' href='/cadastrar/veiculo'>Veiculo</a>
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/visitante'>Visitante</a>
                </nav>
            </div>

            <div class="container" id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Estacionamento
                </h1>
                <div class='row'>
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder={id}
                    />
                    <l class='col-md-4' id='atencao' >
                        Aten????o! O ID n??o pode ser alterado
                    </l>
                    <textarea
                        class='col-md-11'
                        type='text'
                        placeholder='Descri????o'
                        onChange={e => setDesc(e.target.value)}
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

export default CadastrarEstacionamento;