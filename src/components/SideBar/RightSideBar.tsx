import { Card, Col, Flex, Row, Space, Tag, Typography } from "antd";
import {
  UserOutlined,
  CheckCircleTwoTone,
  CommentOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { ReactElement, useContext } from "react";
import { DataContext } from "../../store/providers";
import { EventDescriptor, MetaData } from "../../types/datasources";
import { getDateInFormat, tagColorMap } from "./utils";

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
        <Text>{getDateInFormat(timestamp)}</Text>
      </Col>
    </Row>
  </Card>
);

const TableSummary = ({
  rowCount,
  size,
  description,
  verified,
  categories,
  owners,
  comments,
}: TableSummaryProps) => {
  return (
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
            <Text style={{ color: "#6A6F85" }}>Size</Text>
            <Text>{size}</Text>
          </Flex>
        </Col>
      </Row>

      <Row>
        <Flex justify="space-between" style={{ minWidth: "50%" }}>
          <Space>
            <Text style={{ color: "#6A6F85" }}>Owners</Text>
            {owners.map((owner, index) => (
              <Tag
                style={{ borderRadius: "10px", backgroundColor: "white" }}
                key={`tag-${owner}-${index}`}
              >
                <UserOutlined twoToneColor="#eb2f96" />
                <Text>{owner}</Text>
              </Tag>
            ))}
          </Space>
        </Flex>
      </Row>

      <Row>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Description</Text>
          <Text>{description}</Text>
        </Flex>
      </Row>

      <Row>
        <Flex vertical>
          <Text style={{ color: "#6A6F85" }}>Tags</Text>
          <Space>
            {categories.map((category, idx) => (
              <Tag color={tagColorMap[idx]} key={`tag-${category}-${idx}`}>
                {category}
              </Tag>
            ))}
          </Space>
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

      <Row>
        <Text style={{ color: "#6A6F85" }}>Comments</Text>
        <Flex vertical style={{ height: 150, overflowY: "scroll" }}>
          <Space direction="vertical">
            {comments.map(({ description, author, timestamp }, index) => (
              <Card key={`tag-${author}-${index}`}>
                <Card.Meta
                  avatar={<CommentOutlined style={{ fontSize: "26px" }} />}
                  title={description}
                  description={
                    <Text
                      style={{ color: "#545454" }}
                    >{`${author} ${getDateInFormat(timestamp)}`}</Text>
                  }
                />
              </Card>
            ))}
          </Space>
        </Flex>
      </Row>
    </Space>
  );
};

const RightSider = () => {
  const { datasources, selectedTable } = useContext(DataContext);

  if (datasources?.[selectedTable]) {
    const currentDataSource = datasources[selectedTable];
    const { comments } = currentDataSource.meta;
    return (
      <Sider style={rightSliderStyle} width="450px">
        <Card style={{ borderRadius: "0" }} title="Datasource Overview">
          <InfoCard {...comments[0]} cardTitle="Information" cardType="info" />
          <TableSummary {...currentDataSource.meta} />
        </Card>
      </Sider>
    );
  }

  return <></>;
};

export default RightSider;
