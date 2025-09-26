import WorkScheduleService from "../services/WorkScheduleService.js";

export default class WorkScheduleController {
    static async getAll(req, reply) {
        try {
            const schedules = await WorkScheduleService.getAll();
            return reply.status(200).send(schedules);
        } catch (error) {
            return reply.status(500).send({ message: "Failed to fetch all work schedules", error: error.message });
        }
    }

    static async getById(req, reply) {
        try {
            const schedule = await WorkScheduleService.getById(req.params.id);
            return reply.status(200).send(schedule);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Work schedule not found" });
            }
            return reply.status(500).send({ message: "Failed to fetch work schedule", error: error.message });
        }
    }
}
