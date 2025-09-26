import Service from "../services/Service.js";

export default class ServiceController {
    static async getAll(req, reply) {
        const services = await Service.getAll();
        return reply.status(200).send(services);
    }

    static async getById(req, reply) {
        const service = await Service.getById(req.params.id);
        return reply.status(200).send(service);
    }

    static async create(req, reply) {
        const service = await Service.create(req.body);
        return reply.status(201).send(service);
    }

    static async update(req, reply) {
        const service = await Service.update(req.params.id, req.body);
        return reply.status(200).send(service);
    }

    static async delete(req, reply) {
        await Service.delete(req.params.id);
        return reply.status(200).send({ message: "Deleted successfully!!!" });
    }
}
