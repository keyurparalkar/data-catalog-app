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
