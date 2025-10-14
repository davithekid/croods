'use server';

const API_URL = 'http://localhost:3334/dashboard';

export async function getDashboardCards() {
  try {
    const [faturamentoRes, clientesRes, ativosRes, taxaRes] = await Promise.all([
      fetch(`${API_URL}/faturamento`, { cache: 'no-store' }),
      fetch(`${API_URL}/novos-clientes`, { cache: 'no-store' }),
      fetch(`${API_URL}/ativos`, { cache: 'no-store' }),
      fetch(`${API_URL}/taxa-crescimento`, { cache: 'no-store' }),
    ]);

    const [faturamentoData, clientesData, ativosData, taxaData] = await Promise.all([
      faturamentoRes.json(),
      clientesRes.json(),
      ativosRes.json(),
      taxaRes.json(),
    ]);

    return [
      {
        title: "Faturamento Total",
        value: `R$ ${faturamentoData.total_faturamento || 0}`,
        trend: faturamentoData.trend || '+0%',
        trendIcon: faturamentoData.trend >= 0 ? 'up' : 'down',
        trendColor: faturamentoData.trend >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
        footerText: "Crescimento este mês",
        footerDesc: "Comparado com os últimos 6 meses",
      },
      {
        title: "Novos Clientes",
        value: clientesData.total_novos_clientes || 0,
        trend: clientesData.trend || '+0%',
        trendIcon: clientesData.trend >= 0 ? 'up' : 'down',
        trendColor: clientesData.trend >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
        footerText: "Mais clientes neste período",
        footerDesc: "Captação de clientes ativa",
      },
      {
        title: "Agendamentos Ativos",
        value: ativosData.total || 0,
        trend: ativosData.trend || '+0%',
        trendIcon: ativosData.trend >= 0 ? 'up' : 'down',
        trendColor: ativosData.trend >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
        footerText: "Crescimento de reservas",
        footerDesc: "Mantendo ocupação saudável",
      },
      {
        title: "Taxa de Crescimento",
        value: `${taxaData.taxa_crescimento_percentual || 0}%`,
        trend: taxaData.trend || '+0%',
        trendIcon: taxaData.trend >= 0 ? 'up' : 'down',
        trendColor: taxaData.trend >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
        footerText: "Crescimento consistente",
        footerDesc: "Alcançando metas do salão",
      },
    ];
  } catch (err) {
    console.error('Erro ao buscar dados do dashboard:', err);
    return []; 
  }
}
