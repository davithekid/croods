import ExtraServices from "../models/ExtraServices.js";

export default class ExtraService {
    static async getAll() {
        return await ExtraServices.findAll();
    }

    static async getById(id) {
        const service = await ExtraServices.findByPk(id);
        if (!service) {
            throw new Error("NOT_FOUND");
        }
        return service;
    }
}
