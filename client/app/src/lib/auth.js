'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = 'http://127.0.0.1:3333'; 


export const handleLogin = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const endpoint = 'auth/login';

    try {
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

        cookies().set('Token', token, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 // 1 hora
        });
        redirect('/');

    } catch (error) {
        console.error("Erro fatal durante o login:", error);
        if (error.message === 'NEXT_REDIRECT') {
             throw error; 
        }

        return { error: "Não foi possível conectar ao servidor de autenticação. Verifique a rede." };
    }
}

// logout
export async function logoutAction() {
    cookies().delete('Token');
    redirect('/login')
}
