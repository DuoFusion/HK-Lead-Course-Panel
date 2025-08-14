import { KEYS, URL_KEYS } from "../constants";
import { CategoryFormValues, ChangePasswordPayload, LoginPayload, LoginResponse } from "../types";
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
};

export default Mutations;
