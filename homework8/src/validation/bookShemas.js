import * as Yup from "yup";

export const bookAddSheme = Yup.object({
    title: Yup.string().trim().required(),
    year: Yup.number().min(0).required(),
    author: Yup.string().trim().required(),
});

export const bookUpdateSheme = Yup.object({
    title: Yup.string().trim(),
    year: Yup.number().min(0),
    author: Yup.string().trim(),
});