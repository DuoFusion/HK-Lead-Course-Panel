import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { ROUTES } from "../constants";
import LoginContainer from "../auth/Login";
import DashboardContainer from "../Pages/dashboard";
import Layout from "../layout";
import ChangePasswordContainer from "../auth/ChangePassword";
import CategoryContainer from "../Pages/category";
import AddEditCategory from "../Pages/category/AddEditCategory";
import Error from "../Pages/error";
import WorkshopContainer from "../Pages/workshop";
import AddEditWorkshop from "../Pages/workshop/AddEditWorkshop";
import CoursesContainer from "../Pages/courses";
import AddEditCourses from "../Pages/courses/AddEditCourses";

export const Router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: ROUTES.DASHBOARD, element: <DashboardContainer /> },
          { path: ROUTES.CHANGE_PASSWORD, element: <ChangePasswordContainer /> },

          { path: ROUTES.CATEGORY.CATEGORY, element: <CategoryContainer /> },
          { path: ROUTES.CATEGORY.ADD_EDIT_CATEGORY, element: <AddEditCategory /> },

          { path: ROUTES.WORKSHOP.WORKSHOP, element: <WorkshopContainer /> },
          { path: ROUTES.WORKSHOP.ADD_EDIT_WORKSHOP, element: <AddEditWorkshop /> },

          { path: ROUTES.COURSES.COURSES, element: <CoursesContainer /> },
          { path: ROUTES.COURSES.ADD_EDIT_COURSES, element: <AddEditCourses /> },
        ],
      },
    ],
  },
  {
    element: <PublicRoutes />,
    children: [
      { path: ROUTES.HOME, element: <Navigate to={ROUTES.LOGIN} replace /> },
      { path: ROUTES.LOGIN, element: <LoginContainer /> },
    ],
  },
  { path: "*", element: <Error /> },
]);
