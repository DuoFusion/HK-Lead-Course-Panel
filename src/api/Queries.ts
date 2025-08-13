import { KEYS, URL_KEYS } from "../constants";
// import { Params, UserDataApiResponse } from "../types";
import Get from "./Get";
import { useApiGet } from "./hooks";

const Queries = {
  // ************ User ***********
  // useGetUser: (params: Params) => useApiGet<UserDataApiResponse>([KEYS.USER.ALL_USER, params], () => Get(URL_KEYS.User.GetAllUser, params)),

  // ************ User Setting ***********
  // useGetUserSetting: (params: Params) => useApiGet<SettingApiResponse>([KEYS.USER_SETTING.ALL_USER_SETTING, params], () => Get(URL_KEYS.UserSetting.GetAllUserSetting, params)),

  // ************ Product ***********
  // useGetProduct: (params: Params) => useApiGet<ProductApiResponse>([KEYS.PRODUCT.ALL_PRODUCT, params], () => Get(URL_KEYS.Product.GetAllProduct, params)),

  // ************ Inquiry ***********
  // useGetInquiry: (params: Params) => useApiGet<InquiryApiResponse>([KEYS.INQUIRY.ALL_INQUIRY, params], () => Get(URL_KEYS.Inquiry.GetAllInquiry, params)),

  // ************ Order ***********
  // useGetOrder: (params: Params) => useApiGet<OrderApiResponse>([KEYS.ORDER.ALL_ORDER, params], () => Get(URL_KEYS.Order.GetAllOrder, params)),

};

export default Queries;
