import * as Yup from "yup";

import { emailValidation, passwordValidation } from "../constants/users.constants.js";

export const passwordSchema = Yup.string()
  .trim()
  .min(6)
  .matches(
    passwordValidation.value,
    passwordValidation.message
  )
  .required();

export const emailSchema = Yup.string()
  .trim()
  .matches(emailValidation.value, emailValidation.message)
  .required();

export const adminAddSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  fullName: Yup.string().trim().required(),
});

export const adminChangePasswordSchema = Yup.object({
  oldPassword: passwordSchema,
  newPassword: passwordSchema,
});

export const adminChangeEmailSchema = Yup.object({
  oldEmail: emailSchema,
  newEmail: emailSchema,
});

export const changeRoleSchema = Yup.object({
  id: Yup.number().required(),
  newRole: Yup
    .string()
    .oneOf(["user", "manager", "admin", "superadmin"])
    .required()
});