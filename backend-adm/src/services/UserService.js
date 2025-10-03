import User from "../models/User.js";
import sequelizePaginate from 'sequelize-paginate';
sequelizePaginate.paginate(User);

export default class UserService {
    async getAllUsers(page = 1, limit = 10) {
        const result = await User.paginate({
            page,
            paginate: limit,
            order: [['created_at', 'DESC']]
        })
        return result;
    }

    async getUserById(id){
        const user = await User.findByPk(id);
        if(!user){
            throw new Error('NOT_FOUND');
        }
        return user;
    }
}