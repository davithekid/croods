import User from "../models/User.js";
import sequelizePaginate from "sequelize-paginate";

sequelizePaginate.paginate(User);

export default class UserService {
  static async getAllBarbers() {
    return await User.findAll({
      where: { role: "barber" },
      attributes: ["id", "name"],
    });
  }

  static async getUserById(id) {
    const user = await User.findByPk(id);
    if (!user) {
      const err = new Error("Usuário não encontrado");
      err.statusCode = 404;
      throw err;
    }
    return user;
  }

  static async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) {
      const err = new Error("Usuário não encontrado");
      err.statusCode = 404;
      throw err;
    }

    await user.update(data);
    return user;
  }

  static async myAppointments() {
    const users = await User.findAll();
    return users;
  }
}
