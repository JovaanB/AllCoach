import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import NotFound from "./pages/404";
import Macros from "./pages/Macros";

const AppRoute = () => {
  const { keycloak, initialized } = useKeycloak();
  if (!initialized) {
    return <p>Chargement...</p>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/macros" component={Macros} />
        <Route default component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
