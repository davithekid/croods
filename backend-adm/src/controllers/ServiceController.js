import ServicesService from "../services/Service.js";

export default class ServicesController {
  static async getAll(req, reply) {
    try {
      const { barber_id } = req.query;
      if (!barber_id) return reply.status(400).send({ error: "barber_id required" });

      const services = await ServicesService.getAll(barber_id);
      return reply.send(services);
    } catch (err) {
      return reply.status(500).send({ error: err.message });
    }
  }

  static async getById(req, reply) {
    try {
      const service = await ServicesService.getById(req.params.id);
      if (!service) return reply.status(404).send({ error: "SERVICE_NOT_FOUND" });
      return reply.send(service);
    } catch (err) {
      return reply.status(500).send({ error: err.message });
    }
  }

  static async create(req, reply) {
    try {
      const { name, price, type, extra, barber_id } = req.body;
      const service = await ServicesService.create({ name, price, type, extra, barber_id });
      return reply.status(201).send(service);
    } catch (err) {
      return reply.status(500).send({ error: err.message });
    }
  }

  static async update(req, reply) {
    try {
      const { name, price, type, extra, barber_id } = req.body;
      const service = await ServicesService.update(req.params.id, { name, price, type, extra, barber_id });
      return reply.send(service);
    } catch (err) {
      if (err.message === "SERVICE_NOT_FOUND") return reply.status(404).send({ error: err.message });
      return reply.status(500).send({ error: err.message });
    }
  }

  static async delete(req, reply) {
    try {
      await ServicesService.delete(req.params.id);
      return reply.send({ message: "Deleted successfully" });
    } catch (err) {
      if (err.message === "SERVICE_NOT_FOUND") return reply.status(404).send({ error: err.message });
      return reply.status(500).send({ error: err.message });
    }
  }
}
