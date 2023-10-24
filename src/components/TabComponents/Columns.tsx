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
  const { datasource } = useContext(DataContext);
  let data;

  if (datasource) {
    data = datasource.meta.fields.map((field) => ({
      colName: field,
    }));
  }

  return (
    <Space direction="vertical">
      <Typography.Text style={{ marginLeft: 5 }}>
        Columns: {datasource.meta.fields?.length ?? 0}
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
