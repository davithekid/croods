import User from "../models/User.js";

export default class UserController {
    static async getAll(request, reply) {
        try {
            const users = await User.findAll();
            return reply.status(200).send(users);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch all users', error });
        }
    }

    static async getById(request, reply) {
        try {
            const { id } = request.params;
            const user = await User.findByPk(id);
            if (!user) {
                return reply.status(404).send({ message: 'User not found' });
            }
            return reply.status(200).send(user);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch user', error });
        }
    }

    static async update(request, reply) {
        try {
            const { id } = request.params;
            const { name, password, cpf, email, role } = request.body;
            const user = await User.findByPk(id);
            if (!user) {
                return reply.status(404).send({ message: 'User not found' });
            }
            await user.update({
                name, password, cpf, email, role
            })

            return reply.status(200).send(user);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to update user', error })
        }
    }

    static async delete(request, reply) {
        try {
            const { id } = request.params;
            const user = await User.findByPk(id);
            if (!user) {
                return reply.status(404).send({ message: 'User not found' });
            }

            await user.destroy();
            return reply.status(200).send({ message: 'Deleted sucessfully!!!' });
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to delete user', error });
        }
    }
}