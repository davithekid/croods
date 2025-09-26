import Scheduling from "../models/Scheduling.js";

export default class SchedulingService {
    static async getAll() {
        return await Scheduling.findAll();
    }

    static async getById(id) {
        const scheduling = await Scheduling.findByPk(id);
        if (!scheduling) {
            throw new Error("NOT_FOUND");
        }
        return scheduling;
    }

    static async create({ user_id, barber_id, service_id, extra_services_id, date, dayoff, status }) {
        // Exemplo de validação: não permitir data duplicada para o mesmo barbeiro
        const exists = await Scheduling.findOne({
            where: { barber_id, date }
        });

        if (exists) {
            throw new Error("DATE_CONFLICT");
        }

        return await Scheduling.create({
            user_id, barber_id, service_id, extra_services_id, date, dayoff, status
        });
    }

    static async update(id, { user_id, barber_id, service_id, extra_services_id, date, dayoff, status }) {
        const scheduling = await Scheduling.findByPk(id);
        if (!scheduling) {
            throw new Error("NOT_FOUND");
        }
        await scheduling.update({ user_id, barber_id, service_id, extra_services_id, date, dayoff, status });
        return scheduling;
    }

    static async delete(id) {
        const scheduling = await Scheduling.findByPk(id);
        if (!scheduling) {
            throw new Error("NOT_FOUND");
        }
        await scheduling.destroy();
        return true;
    }
}
