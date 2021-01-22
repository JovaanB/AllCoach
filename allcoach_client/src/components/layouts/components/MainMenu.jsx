import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthorizedFunction from "../../../utilities/AuthorizedFunction";

import { Menu, Layout } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FundViewOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const MainMenu = withRouter((props) => {
  const { location } = props;

  return (
    <Sider breakpoint="lg" collapsedWidth="0" theme="dark">
      <Menu mode="inline" selectedKeys={[location.pathname]} theme="dark">
        <Menu.Item key="/">
          <Link to="/">
            <HomeOutlined />
            <span> Accueil</span>
          </Link>
        </Menu.Item>
        {AuthorizedFunction(["admin"]) && (
          <>
            <Menu.Item key="/clients">
              <Link to="/clients">
                <UserOutlined className="mx-auto" />
                <span> Suivi clients</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/macros">
              <Link to="/macros">
                <FundViewOutlined className="mx-auto" />
                <span> Calculateur macros</span>
              </Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Sider>
  );
});

export default MainMenu;
