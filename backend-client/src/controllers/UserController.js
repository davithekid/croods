import UserService from "../services/UserService.js";

export default class UserController {
    static async getAll(req, reply) {
        const users = await UserService.getAllUsers();
        return reply.status(200).send(users);
    }

    static async getById(req, reply) {
        const user = await UserService.getUserById(req.params.id);
        return reply.status(200).send(user);
    }

    static async update(req, reply) {
        const user = await UserService.updateUser(req.params.id, req.body);
        return reply.status(200).send(user);
    }

    static async delete(req, reply) {
        await UserService.deleteUser(req.params.id);
        return reply.status(200).send({ message: "Deleted successfully!" });
    }
}
