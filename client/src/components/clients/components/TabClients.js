import React from "react";
import { Table, Space, Button } from "antd";
import clientsData from "../../../data/clients.json";
const { Column } = Table;

const TabClients = () => {
  return (
    <Table dataSource={clientsData} rowKey="id">
      <Column title="Prénom" dataIndex="firstname" key="firstname" />
      <Column title="Nom" dataIndex="lastname" key="lastname" />
      <Column title="Anniversaire" dataIndex="birthday" key="birthday" />
      <Column title="Poids" dataIndex="weight" key="weight" />
      <Column title="Taille (cm)" dataIndex="height" key="height" />

      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Button type="link">Contacter {record.firstname}</Button>
            <Button type="link" danger>
              Supprimer
            </Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default TabClients;
