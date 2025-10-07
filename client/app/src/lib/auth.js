'use server';
import { z } from 'zod';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = 'http://127.0.0.1:3333';

// login auth 
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

export const handleLogin = async (prevState, formData) => {
    try {
        const parsed = loginSchema.safeParse({
            email: formData.get('email'),
            password: formData.get('password')
        });

        if (!parsed.success) {
            return { error: 'Dados inválidos enviados ao servidor.' };
        }

        const { email, password } = parsed.data;
        const endpoint = 'auth/login';

        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            cache: 'no-store'
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            const errorMessage = data.message || `Erro no servidor com status ${response.status}`;
            return { error: errorMessage };
        }

        const token = data.token;

        if (!token) {
            return { error: 'O token de autenticação está ausente na resposta da API.' };
        }

        const cookieStore = await cookies();
        cookieStore.set('Token', token, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 // 1 hora
        });

        redirect('/');

    } catch (error) {
        if (error.message.includes('NEXT_REDIRECT')) throw error;

        console.error("Erro fatal durante o login:", error);
        return { error: "Não foi possível conectar ao servidor de autenticação. Verifique a rede." };
    }
};

// logout
export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete('Token');
    redirect('/login');
}
