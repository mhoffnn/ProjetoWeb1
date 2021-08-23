
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

import CadastrarServidor from './pages/cadastro/servidor/cad_servidor';
import EditarServidor from './pages/editar/servidor/edit_servidor';
import CadastrarAluno from './pages/cadastro/aluno/cad_aluno.js';
import EditarAluno from './pages/editar/aluno/edit_aluno.js';
import CadastrarEstacionamento from './pages/cadastro/estacionamento/cad_estacionamento.js';
import EditarEstacionamento from './pages/editar/estacionamento/edit_estacionamento.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/editar_servidor/:id_servidor" component={EditarServidor} />
        <Route path="/cadastrar_servidor" component={CadastrarServidor} />
        <Route path="/editar_aluno/:id_aluno" component={EditarAluno} />
        <Route path="/cadastrar_aluno" component={CadastrarAluno} />
        <Route path="/editar_estacionamento/:id_estacionamento" component={EditarEstacionamento} />
        <Route path="/cadastrar_estacionamento" component={CadastrarEstacionamento} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
