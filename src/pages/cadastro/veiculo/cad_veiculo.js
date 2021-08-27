import './cad_veiculo.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../contexts/data';
import Helper from '../../../helpers/general';

function CadastrarVeiculo(request, response) {
    const [id, setId] = useState();
    const [type, setType] = useState();
    const [model, setModel] = useState();
    const [factory, setFactory] = useState();
    const [color, setColor] = useState();
    const [plate, setPlate] = useState();
    const [data, setData] = useContext(DataContext);

    function onConfirm() {
        let cars = data.cars;
        cars.push({
            id,
            type,
            model,
            factory,
            color,
            plate
        });

        setData({ ...data, cars })
    };

    useEffect(() => {
        setId(Helper.getNextId(data.cars));
    });

    return (
        <div>
            <img src={logo} className="logo-direita" alt="logo" />
            <div id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Veiculo
                </h1>
                <div>
                    <input
                        type='text'
                        placeholder='Tipo'
                        onChange={e => setType(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Modelo'
                        onChange={e => setModel(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Fabricante'
                        onChange={e => setFactory(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Cor'
                        onChange={e => setColor(e.target.value)}
                    />
                    <input
                        id='large-input'
                        type='text'
                        placeholder='Placa'
                        onChange={e => setPlate(e.target.value)}
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

export default CadastrarVeiculo;