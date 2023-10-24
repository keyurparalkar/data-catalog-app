import { Space, Table, Typography } from "antd";
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
  const { datasources, selectedTable } = useContext(DataContext);
  const currentDataSource = datasources[selectedTable];
  let data;

  if (currentDataSource) {
    data = currentDataSource.meta.fields.map((field) => ({
      colName: field,
    }));
  }

  return (
    <Space direction="vertical">
      <Typography.Text style={{ marginLeft: 5 }}>
        Columns: {currentDataSource.meta.fields?.length ?? 0}
      </Typography.Text>
      <Table
        dataSource={data ?? []}
        columns={columns}
        pagination={{ pageSize: 20, hideOnSinglePage: true }}
        scroll={{ y: 200 }}
        size="small"
      />
    </Space>
  );
};

export default Columns;
