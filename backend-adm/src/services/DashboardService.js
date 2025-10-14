import {
  TotalFaturamento,
  NovosClientes,
  AgendamentosAtivos,
  TaxaCrescimentoClientes,
  AgendamentosPeriodo,
} from "../models/Dashboard.js";

export default class DashboardService {
  static async getFaturamentoTotal() {
    return await TotalFaturamento.findOne();
  }

  static async getNovosClientes() {
    return await NovosClientes.findAll({ order: [["mes", "DESC"]] });
  }

  static async getAgendamentosAtivos() {
    return await AgendamentosAtivos.findAll({ order: [["scheduled_at", "ASC"]] });
  }

  static async getTaxaCrescimentoClientes() {
    return await TaxaCrescimentoClientes.findAll({ order: [["mes", "ASC"]] });
  }

  static async getAgendamentosPeriodo() {
    return await AgendamentosPeriodo.findOne();
  }
}
