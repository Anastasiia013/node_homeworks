import Publisher from "../db/Publisher.js";

export const getPublishers = async () => {
    return await Publisher.find();
};

export const addPublisher = async (payload) => {
    return await Publisher.create(payload);
};

export const updatePublisher = async (id, payload) => {
    return await Publisher.findByIdAndUpdate(id, payload, { new: true });
};

export const deletePublisher = async (id) => {
    return await Publisher.findByIdAndDelete(id);
};