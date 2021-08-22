
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import CadastroEstacionamento from './pages/cadastro/estacionamento';
import EditarEstacionamento from './pages/editar/estacionamento';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/editar_estacionamento/:id_estacionamento" component={EditarEstacionamento} />
        <Route path="/cadastro_estacionamento" component={CadastroEstacionamento} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
