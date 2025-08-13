import { ROUTES } from "../constants";
import { MenuItem } from "../types";

// ********** Sidebar Data **********

export const menuList: MenuItem[] = [
  { id: 1, title: "dashboard", url: ROUTES.DASHBOARD, icon: "home", type: "link" },
  { id: 2, title: "category", url: ROUTES.CATEGORY.CATEGORY, icon: "user", type: "link" },
  // { id: 3, title: "Setting", url: ROUTES.SETTING, icon: "knowledgebase", type: "link" },
  // { id: 4, title: "Product", url: ROUTES.PRODUCT, icon: "ecommerce", type: "link" },
  // { id: 5, title: "Inquiry", url: ROUTES.INQUIRY, icon: "faq", type: "link" },
  // { id: 6, title: "Order", url: ROUTES.ORDER, icon: "editors", type: "link" },
];
