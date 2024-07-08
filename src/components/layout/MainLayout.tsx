import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header
          style={{
            padding: 0,
            color: "white",
            textAlign: "center",
            background: "#001529",
          }}
        >
          Header
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
