import React from "react";
import MainMenu from "./MainMenu";

const Layout = (props) => {
  return (
    <>
      <MainMenu />
      <div className="pt-2 container-fluid">{props.children}</div>
    </>
  );
};

export default Layout;
