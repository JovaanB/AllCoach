import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { initializeKeycloak, keycloak } from "./libs/keycloak";
import "bootstrap/dist/css/bootstrap.css";

const run = async () => {
  await initializeKeycloak();
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8080/v1/graphql",
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    }),
    cache: new InMemoryCache(),
  });

  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

run();
