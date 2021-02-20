import { Route, Switch } from 'react-router-dom';
import './App.css';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
      </Switch>
    </div>
  );
}

export default App;
