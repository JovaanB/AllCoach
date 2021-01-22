import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloak } from "./libs/keycloak";
import AppRouter from "./routes";
import "./styles/App.css";

const App = () => {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <AppRouter />
    </ReactKeycloakProvider>
  );
};

export default App;
