export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL = {
  AUTH: {
    LOGIN: "/auth/login",
    FORGOT_PASSWORD: "/auth/forgot_password",
    VERIFY_OTP: "/auth/verify_otp",
    RESET_PASSWORD: "/auth/reset_password",
    CHANGE_PASSWORD: "/auth/change-password",
  },
  CATEGORY: {
    ALL: "/category",
    ADD: "/category/add",
    EDIT: "/category/edit",
    DELETE: "/category/delete",
  },
} as const;

// Construct the URL object
export const URL_KEYS: { [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string } } = Object.fromEntries(Object.entries(URL).map(([key, subKeys]) => [key, Object.fromEntries(Object.entries(subKeys).map(([subKey, path]) => [subKey, `${BASE_URL}${path}`]))])) as {
  [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string };
};
