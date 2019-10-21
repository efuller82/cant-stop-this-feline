import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// trying to import this for bootstrap grid
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact pather='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
