import * as Yup from "yup";

export const categoryAddSchema = Yup.object({
    name: Yup.string().trim().min(2).required(),
    description: Yup.string().trim().min(10).required(),
});
