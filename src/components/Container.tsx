import { useContext } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Layout,
  Row,
  Tabs,
  TabsProps,
} from "antd";
import CodeMirror from "@uiw/react-codemirror";
import { sql, SQLConfig, StandardSQL } from "@codemirror/lang-sql";
import papaparse from "papaparse";

import Columns from "./TabComponents/Columns";
import QueryData from "./TabComponents/QueryData";
import { DataContext, DataDispatchContext } from "../store/providers";
import CheckableTags from "./CheckableTags";
import { RUN_QUERY, SELECT_QUERY } from "../store/actions";
import Readme from "./TabComponents/Readme";
import { getDataByColumns, Response } from "./utils";

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
  {
    key: "3",
    label: "Readme",
    children: <Readme />,
  },
];

const Container = () => {
  const { datasources, selectedTable } = useContext(DataContext);
  const dispatch = useContext(DataDispatchContext);

  if (datasources?.[selectedTable]) {
    const { name, meta: storeMeta } = datasources[selectedTable];
    const { predefinedQueries, query, queryColumnMap } = storeMeta;
    const onQueryChange = (query: string) => {
      dispatch({ type: SELECT_QUERY, payload: query });
    };

    const resetToDefaultQuery = () => {
      onQueryChange(predefinedQueries[0]);
    };

    const onParsingComplete = (results: papaparse.ParseResult<unknown>) => {
      let { data, meta } = results;
      const queryColumns = queryColumnMap[query];
      if (queryColumns[0] !== "*") {
        // get data only for the specififed columns;
        data = getDataByColumns(data as Response, queryColumns);
      }

      // Check if this is needed: meta
      dispatch({
        type: RUN_QUERY,
        payload: {
          data: data,
          meta: {
            fields: meta.fields,
          },
        },
      });
    };

    const runQuery = () => {
      const filePath = `./assets/data/${name}/${name}.csv`;

      if (storeMeta) {
        papaparse.parse(filePath, {
          download: true,
          header: true,
          delimiter: ",",
          complete: onParsingComplete,
          error: (err: unknown) => console.error(err),
        });
      }
    };

    return (
      <Layout.Content style={contentStyle}>
        <Card title="Query">
          <Row>
            <Col span={16}>
              <CodeMirror
                height="100px"
                value={query}
                style={{ outline: "1px solid #cacaca" }}
                extensions={[sql(config)]}
              />
            </Col>
            <Col span={1} />
            <Col span={7}>
              <Flex vertical justify={"space-between"} gap="middle">
                <Button type="primary" onClick={runQuery}>
                  Run Query
                </Button>
                <Button onClick={resetToDefaultQuery}>Reset</Button>
              </Flex>
            </Col>
          </Row>
          <Divider />
          <Row>
            <CheckableTags
              predefinedQueries={predefinedQueries}
              currentQuery={query}
              onQueryChange={onQueryChange}
            />
          </Row>
          <Divider />
          <Tabs items={tabItems} />
        </Card>
      </Layout.Content>
    );
  }

  return <></>;
};

export default Container;
