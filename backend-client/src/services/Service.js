import Services from "../models/Services.js";

export default class Service {
    static async getAll() {
        return await Services.findAll();
    }

    static async getById(id) {
        const service = await Services.findByPk(id);
        if (!service) {
            throw new Error("NOT_FOUND");
        }
        return service;
    }

}
