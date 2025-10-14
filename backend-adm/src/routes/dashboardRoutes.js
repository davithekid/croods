import DashboardController from "../controllers/DashboardController.js";
export async function dashboardRoutes(app) {

    app.get("/faturamento", DashboardController.faturamentoTotal);

    app.get("/novos-clientes", DashboardController.novosClientes);

    app.get("/ativos", DashboardController.agendamentosAtivos);

    app.get("/taxa-crescimento", DashboardController.taxaCrescimento);

    app.get("/periodo", DashboardController.agendamentosPeriodo);
}

