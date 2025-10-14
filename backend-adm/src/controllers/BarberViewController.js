import barberRevenueService from "../services/barberRevenueService.js";

class BarberRevenueController {
  async getAll(request, reply) {
    try {
      const revenues = await barberRevenueService.getAllRevenues();
      reply.send(revenues);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }

  async getByBarber(request, reply) {
    try {
      const { barberId } = request.params;
      const revenue = await barberRevenueService.getRevenueByBarber(barberId);
      if (!revenue) return reply.status(404).send({ error: "Barbeiro não encontrado" });
      reply.send(revenue);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }
}

export default new BarberRevenueController();
