
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

import CadastrarAluno from './pages/cadastro/aluno/cad_aluno';
import CadastrarVisitante from './pages/cadastro/vizitante/cad_visitante';
import CadastrarEstacionamento from './pages/cadastro/estacionamento/cad_estacionamento';

import EditarAluno from './pages/editar/aluno/edit_aluno';
import EditarVisitante from './pages/editar/vizitante/edit_visitante';
import EditarEstacionamento from './pages/editar/estacionamento/edit_estacionamento';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/editar_aluno/:id_aluno" component={EditarAluno} />
        <Route path="/editar_visitante/:id_visitante" component={EditarVisitante} />
        <Route path="/editar_estacionamento/:id_estacionamento" component={EditarEstacionamento} />

        <Route path="/cadastrar_aluno" component={CadastrarAluno} />
        <Route path="/cadastrar_visitante" component={CadastrarVisitante} />
        <Route path="/cadastrar_estacionamento" component={CadastrarEstacionamento} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
