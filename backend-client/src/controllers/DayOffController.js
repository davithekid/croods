import DayOffService from "../services/DayOffService.js";

export default class DayOffController {
    static async getAll(req, reply) {
        try {
            const dayoffs = await DayOffService.getAllDayOffs();
            return reply.status(200).send(dayoffs);
        } catch (error) {
            return reply.status(500).send({ message: "Failed to fetch dayoffs", error: error.message });
        }
    }

    static async getById(req, reply) {
        try {
            const dayoff = await DayOffService.getDayOffById(req.params.id);
            return reply.status(200).send(dayoff);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Dayoff not found" });
            }
            return reply.status(500).send({ message: "Failed to fetch dayoff", error: error.message });
        }
    }

    static async create(req, reply) {
        try {
            const dayoff = await DayOffService.createDayOff(req.body);
            return reply.status(201).send(dayoff);
        } catch (error) {
            return reply.status(500).send({ message: "Failed to create dayoff", error: error.message });
        }
    }

    static async update(req, reply) {
        try {
            const dayoff = await DayOffService.updateDayOff(req.params.id, req.body);
            return reply.status(200).send(dayoff);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Dayoff not found" });
            }
            return reply.status(500).send({ message: "Failed to update dayoff", error: error.message });
        }
    }

    static async delete(req, reply) {
        try {
            await DayOffService.deleteDayOff(req.params.id);
            return reply.status(200).send({ message: "Deleted successfully" });
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Dayoff not found" });
            }
            return reply.status(500).send({ message: "Failed to delete dayoff", error: error.message });
        }
    }
}
