import { Table } from "antd";
import { useContext } from "react";
import { DataContext } from "../../store/providers";

const columns = [
  {
    title: "Column Name",
    dataIndex: "colName",
    key: "colName",
  },
];

const Columns = () => {
  const { datasource } = useContext(DataContext);

  const data = Object.keys(datasource.data[0]).map((field) => ({
    colName: field,
  }));

  return (
    <Table
      dataSource={data ?? []}
      columns={columns}
      pagination={{ pageSize: 20, hideOnSinglePage: true }}
      scroll={{ y: 200 }}
      size="small"
    />
  );
};

export default Columns;
