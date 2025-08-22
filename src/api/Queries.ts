import { KEYS, URL_KEYS } from "../constants";
import { AboutApiResponse, BannerApiResponse, CategoryApiResponse, CoursesApiResponse, FaqApiResponse, LanguagesApiResponse, LeadFormApiResponse, MentorsApiResponse, Params, SkillLevelApiResponse, TestomonialsApiResponse, WhatYouLearnApiResponse, WorkshopApiResponse } from "../types";
import Get from "./Get";
import { useApiGet } from "./hooks";

const Queries = {
  // ************ Category ***********
  useGetCategory: (params: Params) => useApiGet<CategoryApiResponse>([KEYS.CATEGORY.ALL, params], () => Get(URL_KEYS.CATEGORY.ALL, params)),
  // useGetCategory: (params: Params, id?: string) => useApiGet<CategoryApiResponse>([KEYS.CATEGORY.ALL, id, params], () => Get(id ? `${URL_KEYS.CATEGORY.ALL}/${id}` : URL_KEYS.CATEGORY.ALL, params)),

  // ************ Workshop ***********
  useGetWorkshop: (params: Params) => useApiGet<WorkshopApiResponse>([KEYS.WORKSHOP.ALL, params], () => Get(URL_KEYS.WORKSHOP.ALL, params)),

  // ************ Courses ***********
  useGetCourses: (params: Params) => useApiGet<CoursesApiResponse>([KEYS.COURSES.ALL, params], () => Get(URL_KEYS.COURSES.ALL, params)),

  // ************ Languages ***********
  useGetLanguages: (params: Params) => useApiGet<LanguagesApiResponse>([KEYS.LANGUAGE.ALL, params], () => Get(URL_KEYS.LANGUAGE.ALL, params)),

  // ************ Skill Level ***********
  useGetSkillLevel: (params: Params) => useApiGet<SkillLevelApiResponse>([KEYS.SKILL_LEVEL.ALL, params], () => Get(URL_KEYS.SKILL_LEVEL.ALL, params)),

  // ************ What You Learn ***********
  useGetWhatYouLearn: (params: Params) => useApiGet<WhatYouLearnApiResponse>([KEYS.WHAT_YOU_LEARN.ALL, params], () => Get(URL_KEYS.WHAT_YOU_LEARN.ALL, params)),

  // ************ Banner ***********
  useGetBanner: (params: Params) => useApiGet<BannerApiResponse>([KEYS.BANNER.ALL, params], () => Get(URL_KEYS.BANNER.ALL, params)),

  // ************ Mentors ***********
  useGetMentors: (params: Params) => useApiGet<MentorsApiResponse>([KEYS.MENTORS.ALL, params], () => Get(URL_KEYS.MENTORS.ALL, params)),

  // ************ About ***********
  useGetAbout: () => useApiGet<AboutApiResponse>([KEYS.ABOUT.ALL], () => Get(URL_KEYS.ABOUT.ALL)),

  // ************ Testomonials ***********
  useGetTestomonials: (params: Params) => useApiGet<TestomonialsApiResponse>([KEYS.TESTOMONIALS.ALL, params], () => Get(URL_KEYS.TESTOMONIALS.ALL, params)),

  // ************ Faq ***********
  useGetFaq: (params: Params) => useApiGet<FaqApiResponse>([KEYS.FAQ.ALL, params], () => Get(URL_KEYS.FAQ.ALL, params)),

  // ************ Lead Form ***********
  useGetLeadForm: (params: Params) => useApiGet<LeadFormApiResponse>([KEYS.LEAD_FORM.ALL, params], () => Get(URL_KEYS.LEAD_FORM.ALL, params)),
};

export default Queries;
