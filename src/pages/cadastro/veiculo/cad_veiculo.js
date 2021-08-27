import './cad_veiculo.css';
import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { Link, useHistory } from 'react-router-dom'
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
    const history = useHistory();

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

        setData({ ...data, cars });

        alert('Registro adicionado com sucesso!');        
        history.push('/ADM/1');
    };

    useEffect(() => {
        setId(Helper.getNextId(data.cars));
    });

    return (
        <div>
            <div class='row'>
                <img src={logo}
                    class='col-sm-3'
                    id="logo-direita"
                    alt="logo"
                />

                <nav id='navbar' class='col-sm-3 navbar-nav navbar-expand-lg navbar-light'>
                    <span class='navbar-brand'>Cadastrar: </span>
                    <a class='navbar-text' href='/cadastrar/aluno'>Aluno</a>
                    <a class='navbar-text' href='/cadastrar/veiculo'>Veiculo</a>
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/visitante'>Visitante</a>
                    <a class='navbar-text' href='/cadastrar/estacionamento'>Estacionamento</a>
                </nav>
            </div>

            <div class="container" id='cadastro'>
                <h1 id='titulo'>
                    Cadastrar Veiculo
                </h1>
                <div class='row'>
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Tipo'
                        onChange={e => setType(e.target.value)}
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Modelo'
                        onChange={e => setModel(e.target.value)}
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Fabricante'
                        onChange={e => setFactory(e.target.value)}
                    />
                    <input
                        class='col-md-5'
                        type='text'
                        placeholder='Cor'
                        onChange={e => setColor(e.target.value)}
                    />
                    <input
                        class='col-md-11'
                        type='text'
                        placeholder='Placa'
                        onChange={e => setPlate(e.target.value)}
                    />
                    <l class='col-md-3'>
                        <Link id='link' to="/">Já cadastrado</Link>
                    </l>
                    <button
                        class='col-md-4'
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