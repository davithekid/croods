import UserService from "../services/UserService.js";

export default class UserController {
    static async getAll(req, reply) {

        // parametros para o front-end
        const page = parseInt(req.query.page) || 1; // 1 page
        const limit = parseInt(req.query.limit) || 10; // com 10 users

        // busca dados no service
        const result = await UserService.getAllUsers(page, limit);

        // formata e devolve para o front
        return {
            data: result.docs,
            totalPages: result.pages,
            currentPage: result.page
        }
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
