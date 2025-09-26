import Service from "../services/Service.js";

export default class ServiceController {
    static async getAll(req, reply) {
        try {
            const services = await Service.getAll();
            return reply.status(200).send(services);
        } catch (error) {
            return reply.status(500).send({ message: "Failed to fetch all services", error: error.message });
        }
    }

    static async getById(req, reply) {
        try {
            const service = await Service.getById(req.params.id);
            return reply.status(200).send(service);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Service not found" });
            }
            return reply.status(500).send({ message: "Failed to fetch service", error: error.message });
        }
    }

    static async create(req, reply) {
        try {
            const service = await Service.create(req.body);
            return reply.status(201).send(service);
        } catch (error) {
            return reply.status(500).send({ message: "Failed to create service", error: error.message });
        }
    }

    static async update(req, reply) {
        try {
            const service = await Service.update(req.params.id, req.body);
            return reply.status(200).send(service);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Service not found" });
            }
            return reply.status(500).send({ message: "Failed to update service", error: error.message });
        }
    }

    static async delete(req, reply) {
        try {
            await Service.delete(req.params.id);
            return reply.status(200).send({ message: "Deleted successfully!!!" });
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Service not found" });
            }
            return reply.status(500).send({ message: "Failed to delete service", error: error.message });
        }
    }
}
