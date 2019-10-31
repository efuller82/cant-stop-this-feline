import React from "react";
import Home from "./pages/Home";
import AddCat from "./pages/AddCat";
import Adopt from "./pages/Adopt";
import Rumble from "./pages/Rumble";
import "bootstrap/dist/css/bootstrap.min.css"; //npm install react-bootstrap bootstrap
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// trying to import this for bootstrap grid
// import 'bootstrap/dist/css/bootstrap.min.css';

//add animals route

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addcat" component={AddCat} />
        <Route exact path="/adopt" component={Adopt} />
        <Route exact path="/rumble" component={Rumble} />
      </Switch>
    </Router>
  );
}


export default App;
