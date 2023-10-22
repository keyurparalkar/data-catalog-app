import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Layout,
  Row,
  Space,
  Tabs,
  TabsProps,
  Tag,
} from "antd";
import CodeMirror from "@uiw/react-codemirror";
import { sql, SQLConfig, StandardSQL } from "@codemirror/lang-sql";
import Columns from "./TabComponents/Columns";
import QueryData from "./TabComponents/QueryData";

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#F3F4FD",
  padding: 10,
};

const config: SQLConfig = {
  dialect: StandardSQL,
  upperCaseKeywords: true,
};

const tabItems: TabsProps["items"] = [
  {
    key: "1",
    label: "Columns",
    children: <Columns />,
  },
  {
    key: "2",
    label: "Data",
    children: <QueryData />,
  },
];

const Container = () => {
  return (
    <Layout.Content style={contentStyle}>
      <Card title="Query">
        <Row>
          <Col span={16}>
            <CodeMirror
              height="100px"
              style={{ outline: "1px solid #cacaca" }}
              extensions={[sql(config)]}
            />
          </Col>
          <Col span={1} />
          <Col span={7}>
            <Flex vertical justify={"space-between"} gap="middle">
              <Button type="primary">Run Query</Button>
              <Button>Reset</Button>
            </Flex>
          </Col>
        </Row>
        <Divider />
        <Row>
          {/* Replace below tags with checked tags with map function */}
          <Col span={7}>
            <Tag.CheckableTag checked>
              SELECT * FROM Customers;
            </Tag.CheckableTag>
          </Col>
          <Col span={7}>
            <Tag.CheckableTag checked={false}>
              SELECT name, year FROM Customers;
            </Tag.CheckableTag>
          </Col>
        </Row>
        <Divider />
        <Tabs items={tabItems} />
      </Card>
    </Layout.Content>
  );
};

export default Container;
