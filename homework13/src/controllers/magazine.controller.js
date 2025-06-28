import * as magazinesService from "../services/magazine.service.js";

import validateBody from "../utils/validateBody.js";
import { addMagazineValidation, updateMagazineValidation } from "../validation/magazine.validation.js";
import HttpException from "../utils/HttpException.js";

export const getAllMagazinesController = async (req, res) => {
    const result = await magazinesService.getMagazines();
    res.json(result);
};

export const getSingleMagazineByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await magazinesService.getMagazineById(id);
    if (!result) throw HttpException(404, `Magazine with id ${id} not found`);

    res.json(result);
};

export const addMagazineController = async (req, res) => {
    await validateBody(addMagazineValidation, req.body);
    const result = await magazinesService.addMagazine(req.body);
    res.json(result);
};

export const updateMagazineController = async (req, res) => {
    await validateBody(updateMagazineValidation, req.body);
    const result = await magazinesService.updateMagazine(id, req.body);
    if (!result) throw HttpException(404, `Magazine with id ${id} not found`);
    res.json(result);
};

export const deleteMagazineController = async (req, res) => {
    const { id } = req.params;
    const result = await magazinesService.deleteMagazine(id);
    if (!result) throw HttpException(404, `Magazine with id ${id} not found`);
    res.json(result);
};