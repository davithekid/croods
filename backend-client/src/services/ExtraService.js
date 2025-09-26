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

    static async create({ name, price, type }) {
        // Validação extra: evitar nomes duplicados
        const exists = await ExtraServices.findOne({ where: { name } });
        if (exists) {
            throw new Error("DUPLICATE_NAME");
        }

        return await ExtraServices.create({ name, price, type });
    }

    static async update(id, { name, price, type }) {
        const service = await ExtraServices.findByPk(id);
        if (!service) {
            throw new Error("NOT_FOUND");
        }
        await service.update({ name, price, type });
        return service;
    }

    static async delete(id) {
        const service = await ExtraServices.findByPk(id);
        if (!service) {
            throw new Error("NOT_FOUND");
        }
        await service.destroy();
        return true;
    }
}
