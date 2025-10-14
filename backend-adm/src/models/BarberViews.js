// models/barberViews.js
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

// ====================
// Faturamento do Barbeiro por Períodos
// ====================
export class BarberRevenue extends Model {}
BarberRevenue.init(
  {
    barber_id: { type: DataTypes.STRING(36), primaryKey: true },
    barber_name: DataTypes.STRING,
    receita_ultima_semana: DataTypes.DECIMAL(10, 2),
    receita_ultimo_mes: DataTypes.DECIMAL(10, 2),
    receita_ultimos_6_meses: DataTypes.DECIMAL(10, 2),
    receita_ultimo_ano: DataTypes.DECIMAL(10, 2),
  },
  {
    sequelize,
    modelName: "BarberRevenue",
    tableName: "view_faturamento_barbeiro_periodos",
    timestamps: false,
  }
);
