import React from "react";
import MainMenu from "./components/MainMenu";
import MainHeader from "./components/Header";
import { Layout } from "antd";

const { Footer, Content } = Layout;

const MainLayout = (props) => {
  return (
    <div className="App">
      <Layout>
        <MainHeader />
        <Layout>
          <MainMenu />
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <div
                style={{
                  background: "#fff",
                  padding: 24,
                  minHeight: "90vh",
                  overflow: "scroll",
                }}
              >
                {props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Jovan Bienvenu 2020-2021
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
