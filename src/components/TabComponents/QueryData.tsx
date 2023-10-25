import { Table } from "antd";
import { useContext } from "react";
import { DataContext } from "../../store/providers";
import { generateColumns } from "./utils";

const QueryData = () => {
  const { datasources, selectedTable } = useContext(DataContext);
  const currentDataSource = datasources?.[selectedTable];
  let data, fields;

  if (currentDataSource && currentDataSource?.data) {
    data = currentDataSource.data;
    fields = generateColumns(Object.keys(data[0]) ?? []);
  }

  return (
    <Table
      dataSource={data ?? []}
      columns={fields}
      pagination={{ pageSize: 4 }}
      scroll={{ x: 400 }}
      size="small"
      rowKey={(rec) => rec[Object.keys(rec)[0]]}
      style={{
        whiteSpace: "nowrap",
      }}
    />
  );
};

export default QueryData;
