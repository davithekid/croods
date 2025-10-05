import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

export default class WorkSchedule extends Model { }

WorkSchedule.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    barber_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: { model: User, key: 'id' }
    },
    day_of_week: {
        type: DataTypes.ENUM('domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'),
        allowNull: false
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'work_schedules',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
