import * as Yup from "yup";

export const productAddSheme = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
});