export const generateColumns = (fields: string[]) =>
  fields.map((field) => ({
    key: field,
    title: field,
    dataIndex: field,
  }));
