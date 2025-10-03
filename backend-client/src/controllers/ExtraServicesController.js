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
}
