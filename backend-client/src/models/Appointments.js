import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Services from './Services.js'
import DayOff from "./TimeOff.js";

export default class Appointments extends Model { }

Appointments.init({
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
    },
    full_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(13),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'appointments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})