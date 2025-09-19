import { ROUTES } from "../constants";
import { MenuItem } from "../types";

// ********** Sidebar Data **********

export const menuList: MenuItem[] = [
  {
    title: "General",
    Items: [
      { id: 1, title: "dashboard", url: ROUTES.DASHBOARD, icon: "home", type: "link" },
      {
        id: 3,
        title: "Workshop",
        icon: "knowledgebase",
        type: "sub",
        menu: [
          { title: "category", url: ROUTES.CATEGORY.CATEGORY, type: "link" },
          { title: "Workshop", url: ROUTES.WORKSHOP.WORKSHOP, type: "link" },
          { title: "Workshop Register", url: ROUTES.WORKSHOP_REGISTER.WORKSHOP_REGISTER, type: "link" },
        ],
      },
      {
        id: 5,
        title: "Courses",
        icon: "ecommerce",
        type: "sub",
        menu: [
          { title: "Courses", url: ROUTES.COURSES.COURSES, type: "link" },
          { title: "Courses Register", url: ROUTES.COURSES_REGISTER.COURSES_REGISTER, type: "link" },
          { title: "Language", url: ROUTES.LANGUAGE.LANGUAGE, type: "link" },
          { title: "Skill Level", url: ROUTES.SKILL_LEVEL.SKILL_LEVEL, type: "link" },
          { title: "What You Learn", url: ROUTES.WHAT_YOU_LEARN.WHAT_YOU_LEARN, type: "link" },
        ],
      },
      { id: 10, title: "Banner", url: ROUTES.BANNER.BANNER, icon: "editors", type: "link" },
      { id: 11, title: "Mentors", url: ROUTES.MENTORS.MENTORS, icon: "editors", type: "link" },
      { id: 12, title: "Document", url: ROUTES.DOCUMENT, icon: "editors", type: "link" },
      { id: 13, title: "Testimonials", url: ROUTES.TESTOMONIALS.TESTOMONIALS, icon: "editors", type: "link" },
      { id: 14, title: "FAQ", url: ROUTES.FAQ.FAQ, icon: "editors", type: "link" },
      {
        id: 16,
        title: "Lead Form",
        icon: "editors",
        type: "sub",
        menu: [
          { title: "Lead Form", url: ROUTES.LEAD_FORM, type: "link" },
          { title: "Interest", url: ROUTES.INTEREST.INTEREST, type: "link" },
        ],
      },
      { id: 17, title: "Coupon Code", url: ROUTES.COUPON_CODE.COUPON_CODE, icon: "editors", type: "link" },
      { id: 18, title: "Web Setting", url: ROUTES.WEB_SETTING, icon: "knowledgebase", type: "link" },
    ],
  },
  {
    title: "A",
    Items: [
      { id: 19, title: "news letter", url: ROUTES.NEWS_LETTER.NEWS_LETTER, icon: "editors", type: "link" },
      { id: 20, title: "Blog", url: ROUTES.BLOG.BLOG, icon: "editors", type: "link" },
      { id: 21, title: "Announcement", url: ROUTES.ANNOUNCEMENT.ANNOUNCEMENT, icon: "editors", type: "link" },
    ],
  },
];
