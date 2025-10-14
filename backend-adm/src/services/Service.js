import Services from "../models/Services.js";

export default class ServicesService {
  static async getAll() {
    return Services.findAll({ order: [["id", "ASC"]] });
  }

  static async getById(id) {
    return Services.findByPk(id);
  }

  static async create({ name, price, barber_id }) {
    return Services.create({ name, price, barber_id });
  }

  static async update(id, { name, price, barber_id }) {
    const service = await Services.findByPk(id);
    if (!service) throw new Error("SERVICE_NOT_FOUND");

    service.name = name ?? service.name;
    service.price = price ?? service.price;
    service.barber_id = barber_id ?? service.barber_id;

    return service.save();
  }

  static async delete(id) {
    const service = await Services.findByPk(id);
    if (!service) throw new Error("SERVICE_NOT_FOUND");
    return service.destroy();
  }
}
