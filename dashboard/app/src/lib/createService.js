'use server';

const API_URL = "http://localhost:3334/services";

export async function createService(payload) {
  const res = await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Erro ao criar serviço");

  return res.json();
}
