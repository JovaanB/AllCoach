import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const MainHeader = () => {
  const { keycloak, initialized } = useKeycloak();
  if (!initialized) return <p>Chargement...</p>;

  keycloak.loadUserInfo().then((e) => console.log(e));

  return (
    <Header style={{ padding: 10 }}>
      <div style={{ float: "right" }}>
        {keycloak ? (
          <LogoutOutlined
            style={{
              color: "white",
              fontSize: "30px",
              margin: "10px",
              display: "inherit",
            }}
            onClick={() => keycloak.logout()}
          />
        ) : (
          <LoginOutlined
            style={{
              color: "white",
              fontSize: "30px",
              margin: "10px",
              display: "inherit",
            }}
            onClick={() => keycloak.login()}
          />
        )}
      </div>
      <Title style={{ color: "white" }} level={3}>
        AllCoach
      </Title>
    </Header>
  );
};

export default MainHeader;
