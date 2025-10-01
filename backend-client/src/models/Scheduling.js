import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Services from './Services.js'
import DayOff from "./DayOff.js";

export default class Scheduling extends Model { }

Scheduling.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: { model: User, key: 'id' }
    },
    barbeiro_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: { model: User, key: 'id' }
    },
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: Services, key: 'id' }
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dayoff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: DayOff, key: 'id' }
    },
    status: {
        type: DataTypes.ENUM('agendado', 'cancelado', 'concluido'),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'schedulings',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
})