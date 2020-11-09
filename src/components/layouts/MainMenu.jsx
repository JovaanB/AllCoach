import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import AuthorizedFunction from "../../utilities/AuthorizedFunction";

import { Menu, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FundViewOutlined,
} from "@ant-design/icons";

const MainMenu = withRouter((props) => {
  const { keycloak, initialized } = useKeycloak();
  const { location } = props;

  if (!initialized) return <p>Chargement...</p>;

  return (
    <Menu mode="horizontal" selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">
          <HomeOutlined className="mx-auto" />
        </Link>
      </Menu.Item>
      <Menu.Item key="/clients">
        <Link to="/clients">
          <UserOutlined className="mx-auto" />
        </Link>
      </Menu.Item>
      {AuthorizedFunction(["RealmAdmin"]) && (
        <Menu.Item key="/macros">
          <Link to="/macros">
            <FundViewOutlined className="mx-auto" />
          </Link>
        </Menu.Item>
      )}
      <Menu.Item style={{ float: "right" }}>
        {keycloak && keycloak.authenticated ? (
          <Button onClick={() => keycloak.logout()}>
            Déconnexion ({keycloak.tokenParsed.preferred_username}){" "}
          </Button>
        ) : (
          <Button onClick={() => keycloak.login()}>Connexion</Button>
        )}
      </Menu.Item>
    </Menu>
  );
});

export default MainMenu;
