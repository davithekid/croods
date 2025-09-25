import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database,js";

export default class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:  true,
        autoIncrement: true
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('user', 'barber'),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'update_at'
})