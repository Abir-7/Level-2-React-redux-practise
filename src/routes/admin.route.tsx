import AcademicDepartment from "../pages/admin/academemicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academemicManagement/AcademicFaculty";
import AcademicSemesterPage from "../pages/admin/academemicManagement/AcademicSemesterPage";
import CreateAcademicDepartment from "../pages/admin/academemicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academemicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academemicManagement/CreateAcademicSemester";
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
    name: "Academic Management",
    children: [
      {
        name: "Create Academic Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemesterPage></AcademicSemesterPage>,
      },
      {
        name: "Create Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
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
