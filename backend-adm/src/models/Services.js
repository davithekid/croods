import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

export default class Services extends Model { }

Services.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    barber_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {model: User, key: 'id'},
    }
}, {
    sequelize,
    tableName: 'services',
    timestamps: false
})

