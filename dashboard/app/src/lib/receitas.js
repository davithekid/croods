'use server';

export async function getReceitaMetrics() {
  try {
    const API_URL = 'http://localhost:3334/barbers/revenue';
    const res = await fetch(API_URL, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      throw new Error('Erro ao buscar receita');
    }

    const data = await res.json();

    return {
      semana: data.receitaSemana || 0,
      mes: data.receitaMes || 0,
      seisMeses: data.receita6Meses || 0,
      ano: data.receitaAno || 0,
    };
  } catch (err) {
    console.error('Erro ao buscar metrics:', err);
    return {
      semana: 0,
      mes: 0,
      seisMeses: 0,
      ano: 0,
    };
  }
}
