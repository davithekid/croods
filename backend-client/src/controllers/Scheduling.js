import SchedulingService from "../services/SchedulingService.js";

export default class SchedulingController {
    static async getAll(req, reply) {
            const schedulings = await SchedulingService.getAll();
            return reply.status(200).send(schedulings);
    }

    static async getById(req, reply) {
            const scheduling = await SchedulingService.getById(req.params.id);
            return reply.status(200).send(scheduling);
    }

    static async create(req, reply) {
            const scheduling = await SchedulingService.create(req.body);
            return reply.status(201).send(scheduling);
    }

    static async update(req, reply) {
        try {
            const scheduling = await SchedulingService.update(req.params.id, req.body);
            return reply.status(200).send(scheduling);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Scheduling not found" });
            }
            return reply.status(500).send({ message: "Failed to update scheduling", error: error.message });
        }
    }

    static async delete(req, reply) {
        try {
            await SchedulingService.delete(req.params.id);
            return reply.status(200).send({ message: "Deleted successfully!!!" });
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Scheduling not found" });
            }
            return reply.status(500).send({ message: "Failed to delete scheduling", error: error.message });
        }
    }
}
