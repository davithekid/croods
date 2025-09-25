import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

export default class ExtraServices extends Model {}

ExtraServices.init({
    id: {
        type: DataTypes.INTEGER     ,
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
    }
}, {
    sequelize,
    tableName: 'extra_services',
    timestamps: false
})