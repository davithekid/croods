'use server'

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = 'http://localhost:3334';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const handleLogin = async ({ email, password }) => {
  try {
    const parsed = loginSchema.safeParse({ email, password });

    if (!parsed.success) {
      return { error: "Dados inválidos" };
    }

    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data.message || `Erro no servidor (${response.status})`;
      return { error: errorMessage };
    }

    const token = data.token;
    if (!token) {
      return { error: 'Token ausente na resposta do servidor.' };
    }

    const cookieStore = cookies();
    cookieStore.set('Token', token, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 3600,
    });

    redirect('/');
  } catch (error) {
    if (error.message?.includes('NEXT_REDIRECT')) throw error;

    console.error('Erro fatal durante o login:', error);
    return { error: 'Não foi possível conectar ao servidor de autenticação.' };
  }
};
