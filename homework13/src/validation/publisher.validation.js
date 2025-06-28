import * as Yup from "yup";

export const addPublisherValidation = Yup.object({
    name: Yup.string().trim().min(2).required(),
    location: Yup.string().trim().required(),
});

export const updatePublisherValidation = Yup.object({
    name: Yup.string().trim().min(2),
    location: Yup.string().trim(),
});