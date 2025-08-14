import { KEYS, URL_KEYS } from "../constants";
import { CategoryApiResponse, Params } from "../types";
import Get from "./Get";
import { useApiGet } from "./hooks";

const Queries = {
  // ************ Category ***********
  useGetCategory: (params: Params) => useApiGet<CategoryApiResponse>([KEYS.CATEGORY.ALL, params], () => Get(URL_KEYS.CATEGORY.ALL, params)),
  // useGetCategory: (params: Params, id?: string) => useApiGet<CategoryApiResponse>([KEYS.CATEGORY.ALL, id, params], () => Get(id ? `${URL_KEYS.CATEGORY.ALL}/${id}` : URL_KEYS.CATEGORY.ALL, params)),
};

export default Queries;
