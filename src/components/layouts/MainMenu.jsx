import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

import { Menu } from "antd";
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
      <Menu.Item key="/macros">
        <Link to="/macros">
          <FundViewOutlined className="mx-auto" />
        </Link>
      </Menu.Item>
      <Menu.Item style={{ float: "right" }}>
        {keycloak && keycloak.authenticated ? (
          <a href="#" onClick={() => keycloak.logout()}>
            Déconnexion ({keycloak.tokenParsed.preferred_username}){" "}
          </a>
        ) : (
          <a href="#" onClick={() => keycloak.login()}>
            Connexion
          </a>
        )}
      </Menu.Item>
    </Menu>
  );
});

export default MainMenu;
