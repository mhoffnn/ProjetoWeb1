import './cad_estacionamento.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../contexts/data';

import Helper from '../../../helpers/general';

function CadastrarEstacionamento(request, response) {
    const [desc, setDesc] = useState();
    const [id, setId] = useState();
    const [data, setData] = useContext(DataContext);

    function onConfirm() {
        let parkingLots = data.parkingLots;
                
        parkingLots.push({
            id,
            description: desc
        })

        setData({...data, parkingLots });

        alert('Registro adicionado com sucesso!');
    }

    useEffect(() => {
        setId(Helper.getNextId(data.parkingLots));
    })

    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Estacionamento
                </h1>
                <div>
                    <input
                        class='id'
                        type='text'
                        placeholder={id}
                    />
                    <l class='atencao'>
                        Atenção! O ID não pode ser alterado
                    </l>
                    <textarea rows="5" cols="33"
                        class='desc'
                        type='text'
                        placeholder='Descrição'
                        onChange={e => setDesc(e.target.value)}
                    />
                    <l>
                        <Link to="/">Já cadastrado</Link>
                    </l>
                    <button
                        id='confirmar-cadastro'
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