import '../../styles/global-styles.css';

import logo from '../../utf-logo.png';

function MinhasContestacoes(request, response) {

    return (
        <div>
            <div class='row'>
                <img src={logo}
                    class='col-sm-3'
                    id="logo-direita"
                    alt="logo"
                />

                <nav id='navbar' class='col-sm-3 navbar-nav navbar-expand-lg navbar-light'>
                    <a class='navbar-brand' href='/home/id_servidor'>Home</a>
                    <a class='navbar-text' href='/associarveiculo/2'>Adicionar Veículo</a>
                    <a class='navbar-text' href='/editar/senha/2'>Alterar senha</a>
                    <a class='navbar-text' href='/editar/aluno/2'>Editar meus dados</a>
                </nav>
            </div>


            <div class='container' id='cadastro'>
                <h2>Contestações:</h2>
                <table class='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Titulo</th>
                            <th>Aprovado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td scope='row'>Falta de sinalização</td>
                            <td>NÃO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MinhasContestacoes;