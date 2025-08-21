import { KEYS, URL_KEYS } from "../constants";
import { CategoryApiResponse, CoursesApiResponse, LanguagesApiResponse, Params, SkillLevelApiResponse, WhatYouLearnApiResponse, WorkshopApiResponse } from "../types";
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
};

export default Queries;
