import { Card, Col, Flex, Row, Space, Table, Tag, Typography } from "antd";
import { UserOutlined, CheckCircleTwoTone } from "@ant-design/icons";

import Sider from "antd/es/layout/Sider";

const { Text } = Typography;

const rightSliderStyle: React.CSSProperties = {
  backgroundColor: "white",
  overflowY: "scroll",
  maxHeight: "90vh",
};

const infoCardStyles: React.CSSProperties = {
  backgroundColor: "#f5faff",
  border: "1px solid #9cbffa",
};

const InfoCard = () => (
  <Card size="small" style={infoCardStyles}>
    <Row>
      <Text>Information</Text>
    </Row>
    <br />
    <Row>
      <Text strong>This table powers customer data</Text>
    </Row>
    <br />

    <Row>
      <Col span={12}>
        <Space>
          <UserOutlined />
          <Text>User name</Text>
        </Space>
      </Col>
      <Col span={12}>
        <Text style={{ textAlign: "end" }}>{new Date().toLocaleString()}</Text>
      </Col>
    </Row>
  </Card>
);

const TableSummary = () => (
  <Space direction="vertical" size="middle" style={{ padding: 5 }}>
    <Row>
      <Col span={8}>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Row</Text>
          <Text>2,123,131</Text>
        </Flex>
      </Col>
      <Col span={8}>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Columns</Text>
          <Text>15</Text>
        </Flex>
      </Col>
      <Col span={8}>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Size</Text>
          <Text>52 MB</Text>
        </Flex>
      </Col>
    </Row>

    <Row>
      <Flex justify="space-between" style={{ minWidth: "50%" }}>
        <Text style={{ color: "#6A6F85" }}>Owner</Text>
        <Tag style={{ borderRadius: "10px", backgroundColor: "white" }}>
          <UserOutlined twoToneColor="#eb2f96" />
          <Text>Rose</Text>
        </Tag>
        <Tag style={{ borderRadius: "10px", backgroundColor: "white" }}>
          <UserOutlined twoToneColor="#eb2f96" />
          <Text>Mark</Text>
        </Tag>
      </Flex>
    </Row>

    <Row>
      <Text style={{ color: "#6A6F85" }}>Description</Text>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        dolore blanditiis nisi mollitia et repellendus consectetur fugit. Quae
        laboriosam numquam quis unde totam non architecto, minus hic, quasi
        eaque nisi.
      </Text>
    </Row>

    <Row
      style={{
        backgroundColor: "#f0ffe9",
        padding: 10,
        borderRadius: "10px",
        border: "1px solid #9EDE81",
      }}
    >
      <Space>
        <CheckCircleTwoTone twoToneColor="#4eb91d" />
        <Text style={{ color: "#6A6F85" }}>Verified</Text>
      </Space>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        dolore blanditiis nisi mollitia et repellendus consectetur fugit. Quae
        laboriosam numquam quis unde totam non architecto, minus hic, quasi
        eaque nisi.
      </Text>
    </Row>
  </Space>
);

const RightSider = () => {
  return (
    <Sider style={rightSliderStyle} width="500px">
      <Card style={{ borderRadius: "0" }} title="Datasource Overview">
        <InfoCard />
        <TableSummary />
      </Card>
    </Sider>
  );
};

export default RightSider;
