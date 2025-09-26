import ExtraService from "../services/ExtraService.js";

export default class ExtraServiceController {
    static async getAll(req, reply) {
        const services = await ExtraService.getAll();
        return reply.status(200).send(services);
    }

    static async getById(req, reply) {
        const service = await ExtraService.getById(req.params.id);
        return reply.status(200).send(service);
    }

    static async create(req, reply) {
        const service = await ExtraService.create(req.body);
        return reply.status(201).send(service);
    }

    static async update(req, reply) {
        const service = await ExtraService.update(req.params.id, req.body);
        return reply.status(200).send(service);
    }

    static async delete(req, reply) {
        await ExtraService.delete(req.params.id);
        return reply.status(200).send({ message: "Deleted successfully!!!" });
    }
}
