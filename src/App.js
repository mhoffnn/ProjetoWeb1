
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

import CadastrarAluno from './pages/cadastro/aluno/cad_aluno.js';
import EditarAluno from './pages/editar/aluno/edit_aluno.js';
import CadastrarEstacionamento from './pages/cadastro/estacionamento/cad_estacionamento.js';
import EditarEstacionamento from './pages/editar/estacionamento/edit_estacionamento.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/editar_aluno/:id_aluno" component={EditarAluno} />
        <Route path="/cadastrar_aluno" component={CadastrarAluno} />
        <Route path="/editar_estacionamento/:id_estacionamento" component={EditarEstacionamento} />
        <Route path="/cadastrar_estacionamento" component={CadastrarrEstacionamento} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
