import { BarberRevenue } from "../models/BarberViews.js";

class BarberRevenueService {
  async getAllRevenues() {
    return await BarberRevenue.findAll();
  }

  async getRevenueByBarber(barberId) {
    return await BarberRevenue.findOne({ where: { barber_id: barberId } });
  }
}

export default new BarberRevenueService();
