import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

export default class Services extends Model {}

Services.init({
    id: {
        type: DataTypes.STRING(255),
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
    }
}, {
    sequelize,
    tableName: 'services',
    timestamps: false
})