import React from 'react';
import Home from './pages/Home';
import AddCat from './pages/AddCat';
import Adopt from './pages/Adopt';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




// trying to import this for bootstrap grid
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/addcat' component={AddCat} />
        <Route exact path='/adopt' component={Adopt} />
      </Switch>
    </Router>
  );
}

export default App;
