import BarberService from "../services/BarberService.js";

export default class BarberController {
  static async getServices(req, reply) {
    const { id } = req.params; 
    const services = await BarberService.getServicesByBarberId(id);
    return reply.status(200).send(services);
  }
}
