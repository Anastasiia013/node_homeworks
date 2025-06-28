import * as Yup from "yup";

export const addMagazineValidation = Yup.object({
    title: Yup.string().trim().required(),
    issueNumber: Yup.number().required(),
    publisher: Yup.string().required(),
});

export const updateMagazineValidation = Yup.object({
    title: Yup.string().trim(),
    issueNumber: Yup.number(),
    publisher: Yup.string(),
});