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

}
