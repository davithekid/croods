import User from "../models/User.js";
import sequelizePaginate from "sequelize-paginate";
sequelizePaginate.paginate(User);

export default class UserService {

    static async getAllBarbers(){
        const barbers = await User.findAll({
            where: {role: 'barber'},
            attributes: ['name']
        })
        return barbers; 
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

}
