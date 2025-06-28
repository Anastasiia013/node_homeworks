import Tag from "../db/Tag.js";

export const getTags = async () => {
    return await Tag.find();
};

export const getTagById = async (id) => {
    return await Tag.findById(id).populate("articles");
};

export const addTag = async (payload) => {
    return await Tag.create(payload);
};

export const deleteTag = async (id) => {
    return await Tag.findByIdAndDelete(id);
};