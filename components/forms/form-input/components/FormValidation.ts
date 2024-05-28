import * as Yup from "yup";

export const emailSchema = Yup.string()
  .email("Please enter a valid email")
  .required("Email is required");

export const nameSchema = Yup.string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must be at most 50 characters")
  .required("Name is required");

export const passwordSchema = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");

export const verifyPasswordSchema = Yup.string()
  .required("Password is required");
