import DashboardService from "../services/DashboardService.js";

class DashboardController {
  async faturamentoTotal(req, reply) {
      const data = await DashboardService.getFaturamentoTotal();
      reply.send(data);
  }

  async novosClientes(req, reply) {
      const data = await DashboardService.getNovosClientes();
      reply.send(data);
  }

  async agendamentosAtivos(req, reply) {
      const data = await DashboardService.getAgendamentosAtivos();
      reply.send(data);
  }

  async taxaCrescimento(req, reply) {
      const data = await DashboardService.getTaxaCrescimentoClientes();
      reply.send(data);
  }

  async agendamentosPeriodo(req, reply) {
      const data = await DashboardService.getAgendamentosPeriodo();
      reply.send(data);
  }
}

export default new DashboardController();
