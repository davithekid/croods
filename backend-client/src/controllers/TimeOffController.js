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
}
