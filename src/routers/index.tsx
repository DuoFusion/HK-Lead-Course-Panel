import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { ROUTES } from "../constants";
import LoginContainer from "../auth/Login";
import DashboardContainer from "../Pages/dashboard";
import Layout from "../layout";
import ChangePasswordContainer from "../auth/ChangePassword";
import CategoryContainer from "../Pages/category";
import AddEditCategory from "../Pages/category/AddEditCategory";

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
        ],
      },
    ],
  },
  {
    element: <PublicRoutes />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginContainer /> },
      // { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordContainer /> },
      // { path: ROUTES.VERIFY_OTP, element: <VerifyOtpContainer /> },
      // { path: ROUTES.Reset_PASSWORD, element: <ResetPasswordContainer /> },
    ],
  },
  {
    path: "*",
    // element: <Error />,
  },
]);
