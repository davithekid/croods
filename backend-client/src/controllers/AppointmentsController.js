import SchedulingService from "../services/AppointmentsController.js";

export default class AppointmentsController {
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
        const scheduling = await SchedulingService.update(req.params.id, req.body);
        return reply.status(200).send(scheduling);
    }

    static async delete(req, reply) {
        await SchedulingService.delete(req.params.id);
        return reply.status(200).send({ message: "Deleted successfully!!!" });
    }
}
