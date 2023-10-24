import { Layout } from "antd";
import { useContext, useEffect } from "react";
import { LOAD_META_DATA } from "../store/actions";
import { DataContext, DataDispatchContext } from "../store/providers";
import Container from "./Container";
import LeftSider from "./SideBar/LeftSideBar";
import RightSider from "./SideBar/RightSideBar";
import { fetchMetaData } from "./utils";

const Body = () => {
  const { datasources, selectedTable } = useContext(DataContext);
  const dispatch = useContext(DataDispatchContext);

  const fetchAndStoreMetaData = async (assetName: string) => {
    const metaData = await fetchMetaData(assetName);
    dispatch({ type: LOAD_META_DATA, payload: { metaData, selectedTable } });
  };

  useEffect(() => {
    // bail out if selectedTable is already in Datasources
    if (datasources && selectedTable in datasources) return;

    fetchAndStoreMetaData(selectedTable);

    // eslint-disable-next-line
  }, [selectedTable]);

  return (
    <Layout hasSider>
      <LeftSider />
      <Container />
      <RightSider />
    </Layout>
  );
};

export default Body;
