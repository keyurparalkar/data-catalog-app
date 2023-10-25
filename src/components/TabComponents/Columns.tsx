import { Space, Table, TableColumnsType, Typography } from "antd";
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
  let data: string | readonly unknown[] | undefined = [];
  let fields:
    | { title: string; dataIndex: string; key: string }[]
    | TableColumnsType<any>
    | undefined = [];

  if (currentDataSource) {
    data = currentDataSource.meta.fields.map((field, index) => ({
      colName: field,
      key: `colName-${field}-${index}`,
    }));
    fields = data.length > 0 ? columns : [];
  }

  return (
    <Space direction="vertical">
      <Typography.Text style={{ marginLeft: 5 }}>
        Columns: {currentDataSource.meta.fields?.length ?? 0}
      </Typography.Text>
      <Table
        dataSource={data}
        columns={fields}
        pagination={{ pageSize: 20, hideOnSinglePage: true }}
        scroll={{ y: 200 }}
        size="small"
      />
    </Space>
  );
};

export default Columns;
