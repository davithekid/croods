import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import Services from "./Services";
import ExtraServices from "./ExtraServices";

export default class ServiceExtraService extends Model {}

ServiceExtraService.init({
    service_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {model: Services, id: 'id'}
    },
    extra_service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: ExtraServices, id: 'id'}
    }
}, {
    sequelize,
    tableName: 'service_extra_services',
    timestamps: false
})