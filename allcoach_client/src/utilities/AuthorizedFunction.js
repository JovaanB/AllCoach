import { useKeycloak } from "@react-keycloak/web";

export default function AuthorizedFunction(roles) {
  const { keycloak, initialized } = useKeycloak();

  const isAuthorized = () => {
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

  return isAuthorized();
}
