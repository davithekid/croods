import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

export default class TimeOff extends Model {}

TimeOff.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    barber_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {model: User, key: 'id'}
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'time_offs',
    timestamps: false
})