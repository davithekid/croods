import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

export class TotalFaturamento extends Model {}
TotalFaturamento.init(
  {
    total_faturamento: DataTypes.DECIMAL(10, 2),
  },
  {
    sequelize,
    modelName: "TotalFaturamento",
    tableName: "view_total_faturamento",
    timestamps: false,
  }
);

export class NovosClientes extends Model {}
NovosClientes.init(
  {
    mes: DataTypes.STRING,
    total_novos_clientes: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "NovosClientes",
    tableName: "view_novos_clientes",
    timestamps: false,
  }
);

export class AgendamentosAtivos extends Model {}
AgendamentosAtivos.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    cliente: DataTypes.STRING,
    barbeiro: DataTypes.STRING,
    servico: DataTypes.STRING,
    scheduled_at: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "AgendamentosAtivos",
    tableName: "view_agendamentos_ativos",
    timestamps: false,
  }
);

export class TaxaCrescimentoClientes extends Model {}
TaxaCrescimentoClientes.init(
  {
    mes: DataTypes.STRING,
    novos_clientes: DataTypes.INTEGER,
    taxa_crescimento_percentual: DataTypes.DECIMAL(5, 2),
  },
  {
    sequelize,
    modelName: "TaxaCrescimentoClientes",
    tableName: "view_taxa_crescimento_clientes",
    timestamps: false,
  }
);

export class AgendamentosPeriodo extends Model {}
AgendamentosPeriodo.init(
  {
    total_3_meses: DataTypes.INTEGER,
    total_1_mes: DataTypes.INTEGER,
    total_7_dias: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "AgendamentosPeriodo",
    tableName: "view_agendamentos_periodo",
    timestamps: false,
  }
);
