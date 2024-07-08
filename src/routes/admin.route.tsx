import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import CreateAdminPage from "../pages/admin/CreateAdminPage";
import CreateFacultyPage from "../pages/admin/CreateFacultyPage";
import CreateStudentPage from "../pages/admin/CreateStudentPage";

export interface IAdminOptionChildItem {
  name: string;
  path: string;
  element: JSX.Element;
}

export interface IAdminOption {
  name: string;
  path?: string;
  element?: JSX.Element;
  children?: IAdminOptionChildItem[];
}

export const adminOption: IAdminOption[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboardPage />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudentPage />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFacultyPage />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdminPage />,
      },
    ],
  },
];
