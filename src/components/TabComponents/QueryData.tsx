import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    colName: "Country",
    dataType: "VARCHAR",
    desp: "Name of the country",
  },
  {
    key: "2",
    colName: "Population",
    dataType: "NUMBER",
    desp: "Population of the country",
  },
];

const columns = [
  {
    title: "Column Name",
    dataIndex: "colName",
    key: "colName",
  },
  {
    title: "Data Type",
    dataIndex: "dataType",
    key: "dataType",
  },
  {
    title: "Description",
    dataIndex: "desp",
    key: "desp",
  },
];

const QueryData = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default QueryData;
