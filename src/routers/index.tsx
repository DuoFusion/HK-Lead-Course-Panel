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
import LanguagesContainer from "../Pages/languages";
import AddEditLanguages from "../Pages/languages/AddEditLanguages";
import SkillLevelContainer from "../Pages/SkillLevel";
import AddEditSkillLevel from "../Pages/SkillLevel/AddEditSkillLevel";
import WhatYouLearnContainer from "../Pages/WhatYouLearn";
import AddEditWhatYouLearn from "../Pages/WhatYouLearn/AddEditSkillLevel";

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

          { path: ROUTES.LANGUAGE.LANGUAGE, element: <LanguagesContainer /> },
          { path: ROUTES.LANGUAGE.ADD_EDIT_LANGUAGE, element: <AddEditLanguages /> },

          { path: ROUTES.SKILL_LEVEL.SKILL_LEVEL, element: <SkillLevelContainer /> },
          { path: ROUTES.SKILL_LEVEL.ADD_EDIT_SKILL_LEVEL, element: <AddEditSkillLevel /> },

          { path: ROUTES.WHAT_YOU_LEARN.WHAT_YOU_LEARN, element: <WhatYouLearnContainer /> },
          { path: ROUTES.WHAT_YOU_LEARN.ADD_EDIT_WHAT_YOU_LEARN, element: <AddEditWhatYouLearn /> },
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
