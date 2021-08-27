import '../../../styles/global-styles.css';

import logo from '../../../utf-logo.png';

import { useContext } from 'react';
import { DataContext } from '../../../contexts/data';

function ItensCadastrados(request, response) {
    const [data] = useContext(DataContext);

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
                    <span class='navbar-brand'>Cadastrar: </span>
                    <a class='navbar-text' href='/cadastrar/aluno'>Aluno</a>
                    <a class='navbar-text' href='/cadastrar/veiculo'>Veiculo</a>
                    <a class='navbar-text' href='/cadastrar/servidor'>Servidor</a>
                    <a class='navbar-text' href='/cadastrar/visitante'>Visitante</a>
                    <a class='navbar-text' href='/cadastrar/estacionamento'>Estacionamento</a>
                </nav>
            </div>

            <div class='container' id='cadastro'>
                <h2>Estacionamentos cadastrados:</h2>
                <table class='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Cod.</th>
                            <th scope='col'>Descrição</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.parkingLots.map(pl => {
                                return (
                                    <tr>
                                        <th scope='row'>{pl.id}</th>
                                        <td>{pl.description}</td>                                        <td>
                                            <a id='link-login' href='/editar/estacionamento/id_estacionamento'>Editar</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>


            <div class='container' id='cadastro'>
                <h2>Veículos cadastrados:</h2>
                <table class='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Cod.</th>
                            <th scope='col'>Tipo</th>
                            <th scope='col'>Modelo</th>
                            <th scope='col'>Fabricante</th>
                            <th scope='col'>Cor</th>
                            <th scope='col'>Placa</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.cars.map(c => {
                                return (
                                    <tr >
                                        <th scope='row'>{c.id}</th>
                                        <td>{c.type}</td>
                                        <td>{c.model}</td>
                                        <td>{c.factory}</td>
                                        <td>{c.color}</td>
                                        <td>{c.plate}</td>
                                        <td>
                                            <a id='link-login' href='/editar/veiculo/id_veiculo'>Editar</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItensCadastrados;