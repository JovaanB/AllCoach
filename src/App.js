import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Macros from "./pages/Macros";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Macros
              </Link>
            </li>
          </div>
        </nav>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <p>Acceuil</p>
          </Route>
          <Route path="/about">
            <p>Clients</p>
          </Route>
          <Route path="/dashboard">
            <Macros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
