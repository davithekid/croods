'use server';

const API_URL = 'http://localhost:3334'; 

export async function getTotalFaturamento() {
  try {
    const res = await fetch(`${API_URL}/dashboard/faturamento`, {
      cache: 'no-store',
      credentials: 'include',
    });
    
    if (!res.ok) {
      throw new Error(`Erro ao buscar faturamento: ${res.status}`);
    }

    return res.json(); 
  } catch (err) {
    console.error(err);
    return { total: 0 }; 
  }
}

export async function getNovosClientes() {
  try {
    const res = await fetch(`${API_URL}/dashboard/novos-clientes`, {
      cache: 'no-store',
      credentials: 'include',
    });

    if (!res.ok) throw new Error(`Erro ao buscar novos clientes`);

    return res.json();
  } catch (err) {
    console.error(err);
    return { total: 0 };
  }
}
