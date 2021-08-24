
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DataProvider } from './contexts/data';

import CadastrarAluno from './pages/cadastro/aluno/cad_aluno.js';
import CadastrarVeiculo from './pages/cadastro/veiculo/cad_veiculo';
import CadastrarServidor from './pages/cadastro/servidor/cad_servidor';
import CadastrarVisitante from './pages/cadastro/vizitante/cad_visitante';
import CadastrarEstacionamento from './pages/cadastro/estacionamento/cad_estacionamento.js';

import EditarAluno from './pages/editar/aluno/edit_aluno.js';
import EditarVeiculo from './pages/editar/veiculo/edit_veiculo';
import EditarServidor from './pages/editar/servidor/edit_servidor';
import EditarVisitante from './pages/editar/vizitante/edit_visitante';
import EditarEstacionamento from './pages/editar/estacionamento/edit_estacionamento.js';

import Home from './pages/home';

function App() {
  return (

    <DataProvider>
      <Router>
        <Switch>
          <Route path="/cadastrar_aluno" component={CadastrarAluno} />
          <Route path="/cadastrar/veiculo" component={CadastrarVeiculo} />
          <Route path="/cadastrar_servidor" component={CadastrarServidor} />
          <Route path="/cadastrar_visitante" component={CadastrarVisitante} />
          <Route path="/cadastrar_estacionamento" component={CadastrarEstacionamento} />

          <Route path="/editar_aluno/:id_aluno" component={EditarAluno} />
          <Route path="/editar/veiculo/:id_veiculo" component={EditarVeiculo} />
          <Route path="/editar_servidor/:id_servidor" component={EditarServidor} />
          <Route path="/editar_visitante/:id_visitante" component={EditarVisitante} />
          <Route path="/editar_estacionamento/:id_estacionamento" component={EditarEstacionamento} />

          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
