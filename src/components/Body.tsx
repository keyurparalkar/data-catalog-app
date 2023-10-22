import { Layout } from "antd";
import Container from "./Container";
import LeftSider from "./SideBar/LeftSideBar";
import RightSider from "./SideBar/RightSideBar";

const Body = () => {
  return (
    <Layout hasSider>
      <LeftSider />
      <Container />
      <RightSider />
    </Layout>
  );
};

export default Body;
