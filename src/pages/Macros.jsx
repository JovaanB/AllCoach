import React from "react";
import Layout from "../components/layouts/Layout";
import MacrosForm from "../components/macros/components/MacrosForm";
import { Row, Col } from "antd";

const Macros = () => {
  return (
    <Layout>
      <Row>
        <Col span={24} lg={12} className="mx-auto">
          <MacrosForm />
        </Col>
      </Row>
    </Layout>
  );
};

export default Macros;
