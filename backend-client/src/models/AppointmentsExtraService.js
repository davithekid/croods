import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Appointments from "./Appointments.js";
import ExtraServices from "./ExtraServices";

export default class AppointmentsExtraServices extends Model {}

AppointmentsExtraServices.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    appointment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: Appointments, id: 'id'}
    },
    extra_service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: ExtraServices, id: 'id'}
    }
}, {
    sequelize,
    timestamps: false
})