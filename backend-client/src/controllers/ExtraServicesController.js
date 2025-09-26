import ExtraService from "../services/ExtraService.js";

export default class ExtraServiceController {
    static async getAll(req, reply) {
        try {
            const services = await ExtraService.getAll();
            return reply.status(200).send(services);
        } catch (error) {
            return reply.status(500).send({ message: "Failed to fetch all services", error: error.message });
        }
    }

    static async getById(req, reply) {
        try {
            const service = await ExtraService.getById(req.params.id);
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
            const service = await ExtraService.create(req.body);
            return reply.status(201).send(service);
        } catch (error) {
            if (error.message === "DUPLICATE_NAME") {
                return reply.status(400).send({ message: "Service with this name already exists" });
            }
            return reply.status(500).send({ message: "Failed to create service", error: error.message });
        }
    }

    static async update(req, reply) {
        try {
            const service = await ExtraService.update(req.params.id, req.body);
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
            await ExtraService.delete(req.params.id);
            return reply.status(200).send({ message: "Deleted successfully!!!" });
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Service not found" });
            }
            return reply.status(500).send({ message: "Failed to delete service", error: error.message });
        }
    }
}
