import Category from "../db/Category.js";

export const getCategories = async () => {
    return await Category.find();
};

export const addCategory = async ({ payload }) => {
    const category = new Category(payload);
    return await category.save();
};
