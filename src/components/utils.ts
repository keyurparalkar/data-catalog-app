export const fetchMetaData = async (assetName: string) => {
  const filePath = `./assets/data/${assetName ?? "customers"}/metadata.json`;
  try {
    const resp = await fetch(filePath);
    const metaData = await resp.json();
    return metaData;
  } catch (err) {
    console.log({ err });
  }
};

type ResponseItem = Record<string, unknown>;
export type Response = Array<ResponseItem>;

export const getDataByColumns = (data: Response, queryColumns: string[]) => {
  return data.map((item) => {
    const obj: ResponseItem = {};

    queryColumns.forEach((key) => {
      if (key in item) {
        obj[key] = item[key];
      }
    });
    return obj;
  });
};
