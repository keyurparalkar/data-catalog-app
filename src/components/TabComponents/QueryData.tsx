import { Table } from "antd";
import { useContext } from "react";
import { DataContext } from "../../store/providers";
import { generateColumns } from "./utils";

const QueryData = () => {
  const { datasource } = useContext(DataContext);
  const { data } = datasource;
  const fields = generateColumns(Object.keys(data[0]) ?? []);

  return (
    <Table
      dataSource={data ?? []}
      columns={fields}
      pagination={{ pageSize: 4 }}
      scroll={{ x: 400 }}
      size="small"
    />
  );
};

export default QueryData;
