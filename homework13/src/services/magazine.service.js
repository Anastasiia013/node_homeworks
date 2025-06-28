import Magazine from "../db/Magazine.js";

export const getMagazines = async () => {
    return await Magazine.find().populate("publisher");
};

export const getMagazineById = async (id) => {
    return await Magazine.findById(id);
};

export const addMagazine = async (payload) => {
    return await Magazine.create(payload);
};

export const updateMagazine = async (id, payload) => {
    return await Magazine.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteMagazine = async (id) => {
    return await Magazine.findByIdAndDelete(id);
}