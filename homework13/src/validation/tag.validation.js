import * as Yup from "yup";

export const tagAddValidation = Yup.object({
    name: Yup.string().trim().min(2).required(),
    articles: Yup.array()
        .of(Yup.string().matches(/^[0-9a-fA-F]{24}$/)),
});