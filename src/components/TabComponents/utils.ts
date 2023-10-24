export const generateColumns = (fields: string[]) =>
  fields.map((field) => ({
    key: field,
    title: field,
    dataIndex: field,
  }));

export const replaceNewLineChar = (text: string) =>
  text.replaceAll("\\n", "\n");
