import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Désolé, cette page n'existe pas..."
      extra={
        <Link to="/">
          <Button type="primary">Retour</Button>
        </Link>
      }
    />
  );
};

export default NotFound;
