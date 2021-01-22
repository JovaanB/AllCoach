import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ component: Component, roles, ...rest }) {
  const { keycloak, initialized } = useKeycloak();

  const isAuthorized = (roles) => {
    if (keycloak && roles) {
      return roles.some((r) => {
        const hasura = keycloak.tokenParsed["x-hasura-allowed-roles"].includes(
          r
        );
        return hasura;
      });
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized(roles) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}
