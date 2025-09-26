import UserService from "../services/UserService.js";

export default class UserController {
    static async getAll(req, reply) {
        try {
            const users = await UserService.getAllUsers();
            return reply.status(200).send(users);
        } catch (error) {
            return reply.status(500).send({ message: "Failed to fetch users", error: error.message });
        }
    }

    static async getById(req, reply) {
        try {
            const user = await UserService.getUserById(req.params.id);
            return reply.status(200).send(user);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "User not found" });
            }
            return reply.status(500).send({ message: "Failed to fetch user", error: error.message });
        }
    }

    static async update(req, reply) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            return reply.status(200).send(user);
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "User not found" });
            }
            return reply.status(500).send({ message: "Failed to update user", error: error.message });
        }
    }

    static async delete(req, reply) {
        try {
            await UserService.deleteUser(req.params.id);
            return reply.status(200).send({ message: "Deleted successfully!" });
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "User not found" });
            }
            return reply.status(500).send({ message: "Failed to delete user", error: error.message });
        }
    }
}
