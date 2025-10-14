import ServicesService from "../services/Service.js";

export default class ServicesController {
  static async getAll(req, reply) {
    try {
      const services = await ServicesService.getAll();
      reply.send(services);
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  }

  static async getById(req, reply) {
    try {
      const { id } = req.params;
      const service = await ServicesService.getById(id);
      if (!service) return reply.status(404).send({ error: "Serviço não encontrado" });
      reply.send(service);
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  }

  static async create(req, reply) {
    try {
      const { name, price, barber_id } = req.body;
      const service = await ServicesService.create({ name, price, barber_id });
      reply.status(201).send(service);
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  }

  static async update(req, reply) {
    try {
      const { id } = req.params;
      const { name, price, barber_id } = req.body;
      const service = await ServicesService.update(id, { name, price, barber_id });
      reply.send(service);
    } catch (err) {
      if (err.message === "SERVICE_NOT_FOUND") {
        return reply.status(404).send({ error: "Serviço não encontrado" });
      }
      reply.status(500).send({ error: err.message });
    }
  }

  static async delete(req, reply) {
    try {
      const { id } = req.params;
      await ServicesService.delete(id);
      reply.send({ message: "Serviço removido com sucesso" });
    } catch (err) {
      if (err.message === "SERVICE_NOT_FOUND") {
        return reply.status(404).send({ error: "Serviço não encontrado" });
      }
      reply.status(500).send({ error: err.message });
    }
  }
}
