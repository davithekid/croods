import TimeOff from "../models/TimeOff.js";
import User from "../models/User.js";

class TimeOffService {
  async getAllByBarber(barber_id) {
    return await TimeOff.findAll({
      where: { barber_id },
      order: [["date", "ASC"]],
    });
  }

  async getById(id) {
    return await TimeOff.findByPk(id);
  }

  async create(data) {
    const barberExists = await User.findByPk(data.barber_id);
    if (!barberExists) throw new Error("Barbeiro não encontrado");

    return await TimeOff.create(data);
  }

  async update(id, newData) {
    const timeOff = await TimeOff.findByPk(id);
    if (!timeOff) throw new Error("Registro não encontrado");

    await timeOff.update(newData);
    return timeOff;
  }

  async delete(id) {
    const timeOff = await TimeOff.findByPk(id);
    if (!timeOff) throw new Error("Registro não encontrado");

    await timeOff.destroy();
    return { message: "Registro deletado com sucesso" };
  }
}

export default new TimeOffService();
