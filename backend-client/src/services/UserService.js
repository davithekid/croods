import User from "../models/User.js";

export default class UserService {
    static async getAllUsers() {
        return await User.findAll();
    }

    static async getUserById(id) {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("NOT_FOUND");
        }
        return user;
    }

    static async updateUser(id, data) {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("NOT_FOUND");
        }
        await user.update(data);
        return user;
    }

    static async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("NOT_FOUND");
        }
        await user.destroy();
        return true;
    }
}
