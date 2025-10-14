import UserService from "../services/UserService.js";

export default class UserController {
    static async getAll(req, reply) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const result = await UserService.getAll(page, limit);

        return {
            data: result.docs,
            totalPages: result.pages,
            currentPage: result.page
        }
    }

    static async getById(req, reply) {
        const user = await UserService.getById(req.params.id);
        return reply.send(200).send(user)
    }
}