import Services from "../models/Services.js";

export default class BarberService {
  static async getServicesByBarberId(barber_id) {
    const services = await Services.findAll({
      where: { barber_id },   
      attributes: ["id", "name", "price"]
    });

    return services;
  }
}
