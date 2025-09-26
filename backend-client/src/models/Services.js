import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import ExtraServices from "./ExtraServices.js";

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
    type: {
        type: DataTypes.ENUM('cortes', 'barba', 'especiais'),
        allowNull: false
    },
    extra_service_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: ExtraServices, key: 'id' }
    },
}, {
    sequelize,
    tableName: 'services',
    timestamps: false
})