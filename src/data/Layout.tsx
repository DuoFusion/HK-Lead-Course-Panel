import { ROUTES } from "../constants";
import { MenuItem } from "../types";

// ********** Sidebar Data **********

export const menuList: MenuItem[] = [
  { id: 1, title: "dashboard", url: ROUTES.DASHBOARD, icon: "home", type: "link" },
  { id: 2, title: "category", url: ROUTES.CATEGORY.CATEGORY, icon: "user", type: "link" },
  { id: 3, title: "Workshop", url: ROUTES.WORKSHOP.WORKSHOP, icon: "knowledgebase", type: "link" },
  { id: 4, title: "Courses", url: ROUTES.COURSES.COURSES, icon: "ecommerce", type: "link" },
  { id: 5, title: "Language", url: ROUTES.LANGUAGE.LANGUAGE, icon: "faq", type: "link" },
  { id: 6, title: "Skill Level", url: ROUTES.SKILL_LEVEL.SKILL_LEVEL, icon: "faq", type: "link" },
  { id: 7, title: "What You Learn", url: ROUTES.WHAT_YOU_LEARN.WHAT_YOU_LEARN, icon: "editors", type: "link" },
];
