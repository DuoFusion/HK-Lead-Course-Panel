import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "Password must include at least one special character"),
});

export const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("New Password is required")
    .matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "New Password must include at least one special character"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Password doesn't match")
    .required("Confirm Password is required"),
});