import { Layout } from "antd";
import { useContext, useEffect } from "react";
import { LOAD_META_DATA } from "../store/actions";
import { DataContext, DataDispatchContext } from "../store/providers";
import Container from "./Container";
import LeftSider from "./SideBar/LeftSideBar";
import RightSider from "./SideBar/RightSideBar";
import { fetchMetaData } from "./utils";

const Body = () => {
  const { datasource } = useContext(DataContext);
  const dispatch = useContext(DataDispatchContext);

  const fetchAndStoreMetaData = async (assetName: string) => {
    const metaData = await fetchMetaData(assetName);
    dispatch({ type: LOAD_META_DATA, payload: metaData });
  };

  useEffect(() => {
    fetchAndStoreMetaData(datasource?.name);
    // eslint-disable-next-line
  }, [datasource?.name]);

  return (
    <Layout hasSider>
      <LeftSider />
      <Container />
      <RightSider />
    </Layout>
  );
};

export default Body;
