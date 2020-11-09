import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Layout from "../components/layouts/Layout";

const Home = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <Layout>
      <div>
        <h1>Accueil</h1>

        <strong>Tout le monde peut accèder à cette page</strong>

        {initialized ? (
          keycloak.authenticated && (
            <pre>{JSON.stringify(keycloak, undefined, 2)}</pre>
          )
        ) : (
          <h2>Chargement de keycloak...</h2>
        )}
      </div>
    </Layout>
  );
};

export default Home;
