import User from "../models/User.js";
import sequelizePaginate from "sequelize-paginate";
sequelizePaginate.paginate(User);

export default class UserService {

    static async getAllUsers(page = 1, limit = 10) {
        const result = await User.paginate({
            page,
            paginate: limit,
            order: [['created_At', 'DESC']]
        })
        return result;
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
