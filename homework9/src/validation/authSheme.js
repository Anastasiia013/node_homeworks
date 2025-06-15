import * as Yup from "yup";

import { passwordSchema, emailSchema } from "./usersSheme.js";

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
});