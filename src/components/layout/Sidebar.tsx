import { Layout, Menu, MenuProps } from "antd";

import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminOption } from "../../routes/admin.route";
import { facultyOption } from "../../routes/faculty.route";
import { studentOption } from "../../routes/student.route";
import { useAppSelector } from "../../redux/hooks";
import { userInfo } from "../../redux/feature/auth/authSlice";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const { Sider } = Layout;
const Sidebar = () => {
  const userData = useAppSelector(userInfo);
  const role = userData?.role;

  let sideBarItems: MenuProps["items"];

  switch (role) {
    case userRole.ADMIN:
      sideBarItems = sidebarItemGenerator(adminOption, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sidebarItemGenerator(facultyOption, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItems = sidebarItemGenerator(studentOption, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="demo-logo-vertical"
      >
        <h1 style={{ textWrap: "nowrap" }}>PH Univercity</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
