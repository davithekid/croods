import UserService from "../services/UserService.js";

export default class UserController {
  static async getBarbers(req, reply) {
    try {
      const barbers = await UserService.getAllBarbers();
      return reply.status(200).send(barbers);
    } catch (error) {
      throw error; 
    }
  }

  static async getById(req, reply) {
    try {
      const user = await UserService.getUserById(req.params.id);
      return reply.status(200).send(user);
    } catch (error) {
      throw error;
    }
  }

  static async update(req, reply) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      return reply.status(200).send(user);
    } catch (error) {
      throw error;
    }
  }
}
