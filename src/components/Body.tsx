import { Layout } from "antd";
import { useContext, useEffect } from "react";
import { LOAD_META_DATA } from "../store/actions";
import { DataContext, DataDispatchContext } from "../store/providers";
import Container from "./Container";
import LeftSider from "./SideBar/LeftSideBar";
import RightSider from "./SideBar/RightSideBar";

const Body = () => {
  const { datasource } = useContext(DataContext);
  const dispatch = useContext(DataDispatchContext);

  useEffect(() => {
    (async () => {
      const filePath = `./assets/data/${
        datasource?.name ?? "customers"
      }/metadata.json`;
      try {
        const resp = await fetch(filePath);
        const metaData = await resp.json();
        dispatch({ type: LOAD_META_DATA, payload: metaData });
      } catch (err) {
        console.log({ err });
      }
    })();
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
