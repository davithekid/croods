import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Services from "./Services.js";
import DayOff from "./TimeOff.js";

export default class Appointments extends Model { }

Appointments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: { model: User, key: "id" },
    },
    barber_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: { model: User, key: "id" },
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Services, key: "id" },
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("agendado", "cancelado", "concluido"),
      allowNull: false,
      defaultValue: "agendado",
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "appointments",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Appointments.belongsTo(User, { foreignKey: "user_id", as: "user" });
Appointments.belongsTo(User, { foreignKey: "barber_id", as: "barber" });
Appointments.belongsTo(Services, { foreignKey: "service_id", as: "service" });
