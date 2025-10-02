import TimeOffService from "../services/TimeOffService.js";

export default class TimeOffController {
    static async getAll(req, reply) {
        const dayoffs = await TimeOffService.getAllDayOffs();
        return reply.status(200).send(dayoffs);
    }

    static async getById(req, reply) {
        const dayoff = await TimeOffService.getDayOffById(req.params.id);
        return reply.status(200).send(dayoff);
    }

    static async create(req, reply) {
        const dayoff = await TimeOffService.createDayOff(req.body);
        return reply.status(201).send(dayoff);
    }

    static async update(req, reply) {
        const dayoff = await TimeOffService.updateDayOff(req.params.id, req.body);
        return reply.status(200).send(dayoff);
    }

    static async delete(req, reply) {
        await TimeOffService.deleteDayOff(req.params.id);
        return reply.status(200).send({ message: "Deleted successfully" });
    }
}
