import * as Yup from "yup";

export const articleAddValidation = Yup.object({
    title: Yup.string().trim().min(2).required(),
    content: Yup.string().trim().min(20).required(),
    tags: Yup.array().of(Yup.string()).required(),
});

export const articleUpdateValidation = Yup.object({
    title: Yup.string().trim().min(2),
    content: Yup.string().trim().min(20),
    tags: Yup.array().of(Yup.string()),
});