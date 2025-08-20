import { KEYS, URL_KEYS } from "../constants";
import { CategoryFormValues, ChangePasswordPayload, CoursesFormValues, LoginPayload, LoginResponse, UploadResponse, WorkshopFormValues } from "../types";
import Delete from "./Delete";
import { useApiDelete, useApiPost } from "./hooks";
import Post from "./Post";

const Mutations = {
  // ************ Auth ***********
  useLogin: () => useApiPost<LoginPayload, LoginResponse>([KEYS.LOGIN], (input) => Post(URL_KEYS.AUTH.LOGIN, input, false)),
  useChangePassword: () => useApiPost<ChangePasswordPayload, void>([KEYS.ChANGE_PASSWORD], (input) => Post(URL_KEYS.AUTH.CHANGE_PASSWORD, input)),

  // ************ Category ***********
  useCategory: () => useApiPost<CategoryFormValues, void>([KEYS.CATEGORY.ADD], (input) => Post(URL_KEYS.CATEGORY.ADD, input)),
  useEditCategory: () => useApiPost<{ categoryId: string } & CategoryFormValues, void>([KEYS.CATEGORY.EDIT, KEYS.CATEGORY.ALL], (input) => Post(URL_KEYS.CATEGORY.EDIT, input)),
  useDeleteCategory: () => useApiDelete<string, void>([KEYS.CATEGORY.DELETE, KEYS.CATEGORY.ALL], (id) => Delete(`${URL_KEYS.CATEGORY.DELETE}/${id}`)),

  // ************ Workshop ***********
  useWorkshop: () => useApiPost<WorkshopFormValues, void>([KEYS.WORKSHOP.ADD], (input) => Post(URL_KEYS.WORKSHOP.ADD, input)),
  useEditWorkshop: () => useApiPost<{ workshopId: string } & WorkshopFormValues, void>([KEYS.WORKSHOP.EDIT, KEYS.WORKSHOP.ALL], (input) => Post(URL_KEYS.WORKSHOP.EDIT, input)),
  useDeleteWorkshop: () => useApiDelete<string, void>([KEYS.WORKSHOP.DELETE, KEYS.WORKSHOP.ALL], (id) => Delete(`${URL_KEYS.WORKSHOP.DELETE}/${id}`)),
  useHandleActive: () => useApiPost<{ workshopId: string; isBlocked?: boolean; features?: boolean }, void>([KEYS.WORKSHOP.EDIT, KEYS.WORKSHOP.ALL], (input) => Post(URL_KEYS.WORKSHOP.EDIT, input)),

  // ************ Upload ***********
  useUpload: () => useApiPost<FormData, UploadResponse>([KEYS.UPLOAD.ADD], (input) => Post(URL_KEYS.UPLOAD.ADD, input)),
  // useDeleteUpload: () => useApiDelete<{ imageUrl: string }, void>([KEYS.UPLOAD.DELETE_UPLOAD, KEYS.UPLOAD.ALL_UPLOAD], (id) => Delete(`${URL_KEYS.Upload.Delete}`, id)),

  // ************ Courses ***********
  useCourses: () => useApiPost<CoursesFormValues, void>([KEYS.COURSES.ADD], (input) => Post(URL_KEYS.COURSES.ADD, input)),
  useEditCourses: () => useApiPost<{ courseId: string } & CoursesFormValues, void>([KEYS.COURSES.EDIT, KEYS.COURSES.ALL], (input) => Post(URL_KEYS.COURSES.EDIT, input)),
  useDeleteCourses: () => useApiDelete<string, void>([KEYS.COURSES.DELETE, KEYS.COURSES.ALL], (id) => Delete(`${URL_KEYS.COURSES.DELETE}/${id}`)),
  useCoursesHandleActive: () => useApiPost<{ courseId: string; isBlocked?: boolean; features?: boolean }, void>([KEYS.COURSES.EDIT, KEYS.COURSES.ALL], (input) => Post(URL_KEYS.COURSES.EDIT, input)),
};

export default Mutations;
