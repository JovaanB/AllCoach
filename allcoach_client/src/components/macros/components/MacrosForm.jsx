import React, { useState } from "react";
import { Card, Form, InputNumber, Button, Select, Statistic } from "antd";
const { Option } = Select;

const MacrosForm = () => {
  const [sexe, setSexe] = useState("man");
  const [age, setAge] = useState(14);
  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(1.0);
  const [macros, setMacros] = useState(0);

  const onSubmitForm = () => {
    if (sexe === "man") {
      setMacros(
        (13.7516 * weight + 500.33 * height - 6.755 * age + 66.473).toFixed(2)
      );
    } else {
      setMacros(
        (9.5634 * weight + 184.96 * height - 4.6756 * age + 655.0955).toFixed(2)
      );
    }
  };

  return (
    <Card title="Calculatrice de macros">
      <Form onFinish={onSubmitForm}>
        <Form.Item label="Âge">
          <InputNumber
            min={10}
            max={110}
            defaultValue={25}
            onChange={(e) => setAge(e)}
          />
        </Form.Item>
        <Form.Item label="Taille">
          <InputNumber
            min={1.4}
            max={2.5}
            step={0.01}
            defaultValue={1.4}
            onChange={(e) => setHeight(e)}
          />
        </Form.Item>
        <Form.Item label="Poids">
          <InputNumber
            min={10}
            max={250}
            defaultValue={70}
            onChange={(e) => setWeight(e)}
          />
        </Form.Item>
        <Form.Item label="Sexe">
          <Select className="w-50" value={sexe} onChange={(e) => setSexe(e)}>
            <Option value="man">Homme</Option>
            <Option value="woman">Femme</Option>
          </Select>
        </Form.Item>
        <Button shape="round" htmlType="submit" type="primary">
          Calculer
        </Button>
      </Form>
      <Statistic
        title="Macros"
        value={macros}
        loading={macros === 0}
        suffix="Cal."
      />
    </Card>
  );
};

export default MacrosForm;
