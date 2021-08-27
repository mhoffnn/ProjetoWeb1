
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataProvider } from './contexts/data';

import CadastrarSenha from './pages/cadastro/senha/cad_senha';
import CadastrarAluno from './pages/cadastro/aluno/cad_aluno.js';
import CadastrarVeiculo from './pages/cadastro/veiculo/cad_veiculo';
import CadastrarServidor from './pages/cadastro/servidor/cad_servidor';
import CadastrarVisitante from './pages/cadastro/vizitante/cad_visitante';
import CadastrarEstacionamento from './pages/cadastro/estacionamento/cad_estacionamento.js';

import EditarSenha from './pages/editar/senha/edit_senha';
import EditarAluno from './pages/editar/aluno/edit_aluno.js';
import EditarVeiculo from './pages/editar/veiculo/edit_veiculo';
import EditarServidor from './pages/editar/servidor/edit_servidor';
import EditarVisitante from './pages/editar/vizitante/edit_visitante';
import EditarEstacionamento from './pages/editar/estacionamento/edit_estacionamento.js';

import ItensCadastrados from './pages/listas/itens_cadastrados/itens_cadastrados';
import AssociarVeiculo from './pages/associar_veiculo/associ_veiculo';
import BuscarUsuario from './pages/buscar_usuario/buscar_usuario';
import Login from './pages/login/login.js';
import HomeAdm from './pages/home/adm/home_adm';
import Home from './pages/home/usuario/home';

function App() {
  return (

    <DataProvider>
      <Router>
        <Switch>
          <Route path="/cadastrar/aluno" component={CadastrarAluno} />
          <Route path="/cadastrar/veiculo" component={CadastrarVeiculo} />
          <Route path="/cadastrar/servidor" component={CadastrarServidor} />
          <Route path="/cadastrar/visitante" component={CadastrarVisitante} />
          <Route path="/cadastrar/estacionamento" component={CadastrarEstacionamento} />

          <Route path="/editar/aluno/:id_aluno" component={EditarAluno} />
          <Route path="/editar/veiculo/:id_veiculo" component={EditarVeiculo} />
          <Route path="/editar/servidor/:id_servidor" component={EditarServidor} />
          <Route path="/editar/visitante/:id_visitante" component={EditarVisitante} />
          <Route path="/editar/estacionamento/:id_estacionamento" component={EditarEstacionamento} />

          <Route path="/cadastrar/senha/:id_session" component={CadastrarSenha} />
          <Route path="/editar/senha/:id_session" component={EditarSenha} />

          <Route path="/lista/itenscadastrados" component={ItensCadastrados} />
          <Route path="/buscarusuario" component={BuscarUsuario} />
          <Route path="/associarveiculo/:id_session" component={AssociarVeiculo} />
          <Route path="/login" component={Login} />
          <Route path="/ADM/:id_session" component={HomeAdm} />
          <Route path="/:id_session" component={Home} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
