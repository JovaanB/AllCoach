import Keycloak from "keycloak-js";

export const keycloak = Keycloak({
  realm: "all-coach",
  url: "https://keycloak-test.cloud.wisersoftware.com/auth/",
  clientId: "client-web",
});

export const initializeKeycloak = async () => {
  return await keycloak.init({
    onLoad: "login-required",
  });
};
