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

    static async create({ name, price, type }) {
        return await Services.create({ name, price, type });
    }

    static async update(id, { name, price, type }) {
        const service = await Services.findByPk(id);
        if (!service) {
            throw new Error("NOT_FOUND");
        }
        await service.update({ name, price, type });
        return service;
    }

    static async delete(id) {
        const service = await Services.findByPk(id);
        if (!service) {
            throw new Error("NOT_FOUND");
        }
        await service.destroy();
        return true;
    }
}
