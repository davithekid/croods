import TimeOffController from "../services/TimeOffService.js";

export default class TimeOffController {
    static async getAll(req, reply) {
        const dayoffs = await DayOffService.getAllDayOffs();
        return reply.status(200).send(dayoffs);
    }

    static async getById(req, reply) {
        const dayoff = await DayOffService.getDayOffById(req.params.id);
        return reply.status(200).send(dayoff);
    }

    static async create(req, reply) {
        const dayoff = await DayOffService.createDayOff(req.body);
        return reply.status(201).send(dayoff);
    }

    static async update(req, reply) {
        const dayoff = await DayOffService.updateDayOff(req.params.id, req.body);
        return reply.status(200).send(dayoff);
    }

    static async delete(req, reply) {
        await DayOffService.deleteDayOff(req.params.id);
        return reply.status(200).send({ message: "Deleted successfully" });
    }
}
