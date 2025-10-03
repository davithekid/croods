import UserService from "../services/UserService.js";

export default class UserController {
    static async getById(req, reply) {
        const user = await UserService.getUserById(req.params.id);
        return reply.status(200).send(user);
    }

    static async update(req, reply) {
        const user = await UserService.updateUser(req.params.id, req.body);
        return reply.status(200).send(user);
    }

}
