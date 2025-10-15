import TimeOffService from "../services/TimeOffService.js";

class TimeOffController {
  async getAll(req, reply) {
    try {
      const { barber_id } = req.query;
      if (!barber_id)
        return reply.status(400).send({ error: "barber_id é obrigatório" });

      const timeOffs = await TimeOffService.getAllByBarber(barber_id);
      return reply.send(timeOffs);
    } catch (err) {
      console.error("Erro ao buscar folgas:", err);
      return reply.status(500).send({ error: err.message });
    }
  }

  async getOne(req, reply) {
    try {
      const { id } = req.params;
      const timeOff = await TimeOffService.getById(id);
      if (!timeOff)
        return reply.status(404).send({ error: "Folga não encontrada" });

      return reply.send(timeOff);
    } catch (err) {
      return reply.status(500).send({ error: err.message });
    }
  }

  async create(req, reply) {
    try {
      const { barber_id, date } = req.body;
      if (!barber_id || !date)
        return reply.status(400).send({ error: "barber_id e date são obrigatórios" });

      const created = await TimeOffService.create({ barber_id, date });
      return reply.status(201).send(created);
    } catch (err) {
      console.error("Erro ao criar folga:", err);
      return reply.status(500).send({ error: err.message });
    }
  }

  async update(req, reply) {
    try {
      const { id } = req.params;
      const updated = await TimeOffService.update(id, req.body);
      return reply.send(updated);
    } catch (err) {
      return reply.status(500).send({ error: err.message });
    }
  }

  async delete(req, reply) {
    try {
      const { id } = req.params;
      const result = await TimeOffService.delete(id);
      return reply.send(result);
    } catch (err) {
      return reply.status(500).send({ error: err.message });
    }
  }
}

export default new TimeOffController();
