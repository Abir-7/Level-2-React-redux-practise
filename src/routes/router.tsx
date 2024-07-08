import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import { routeGenerator } from "../utils/routeGenerator";
import { adminOption } from "./admin.route";
import { facultyOption } from "./faculty.route";
import { studentOption } from "./student.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminOption),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyOption),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentOption),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <LoginPage />,
  },
]);
