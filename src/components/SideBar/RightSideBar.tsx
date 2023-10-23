import { Card, Col, Flex, Row, Space, Tag, Typography } from "antd";
import { UserOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import dayjs from "dayjs";
import Sider from "antd/es/layout/Sider";
import { ReactElement, useContext } from "react";
import { DataContext } from "../../store/providers";
import { EventDescriptor, MetaData } from "../../types/datasources";

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

const verifyCardStyles: React.CSSProperties = {
  backgroundColor: "#f0ffe9",
  borderRadius: "10px",
  height: 150,
  border: "1px solid #9EDE81",
};

type InforCardProps = EventDescriptor & {
  cardTitle: string;
  cardType: "info" | "verify";
  titleIcon?: ReactElement;
};
type TableSummaryProps = MetaData;

const InfoCard = ({
  description,
  author,
  timestamp,
  cardTitle,
  titleIcon,
  cardType = "info",
}: InforCardProps) => (
  <Card
    size="small"
    style={cardType === "info" ? infoCardStyles : verifyCardStyles}
  >
    <Row>
      <Space>
        <>
          {titleIcon}
          <Text>{cardTitle}</Text>
        </>
      </Space>
    </Row>
    <br />
    <Row>
      <Text strong>{description}</Text>
    </Row>
    <br />

    <Row>
      <Col span={12}>
        <Space>
          <UserOutlined />
          <Text>{author}</Text>
        </Space>
      </Col>
      <Col span={12} style={{ textAlign: "end" }}>
        <Text>{dayjs(timestamp).format("MMM DD, YYYY")}</Text>
      </Col>
    </Row>
  </Card>
);

const TableSummary = ({
  rowCount,
  size,
  columnCount,
  description,
  verified,
}: TableSummaryProps) => (
  <Space direction="vertical" size="middle" style={{ padding: 5 }}>
    <Row>
      <Col span={8}>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Rows</Text>
          <Text>{rowCount}</Text>
        </Flex>
      </Col>
      <Col span={8}>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Columns</Text>
          <Text>{columnCount}</Text>
        </Flex>
      </Col>
      <Col span={8}>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Size</Text>
          <Text>{size}</Text>
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
      <Flex vertical>
        <Text style={{ color: "#6A6F85" }}>Description</Text>
        <Text>{description}</Text>
      </Flex>
    </Row>

    {verified && (
      <InfoCard
        {...verified}
        cardTitle="Verified"
        cardType="verify"
        titleIcon={<CheckCircleTwoTone twoToneColor="#4eb91d" />}
      />
    )}
  </Space>
);

const RightSider = () => {
  const { datasource } = useContext(DataContext);

  if (datasource) {
    const { comments } = datasource.meta;
    return (
      <Sider style={rightSliderStyle} width="500px">
        <Card style={{ borderRadius: "0" }} title="Datasource Overview">
          <InfoCard {...comments[0]} cardTitle="Information" cardType="info" />
          <TableSummary {...datasource.meta} />
        </Card>
      </Sider>
    );
  }

  // TODO: Change this later
  return <></>;
};

export default RightSider;
