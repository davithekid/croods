'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_BASE_URL = 'http://localhost:3333'; // api

export const handleLogin = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    try {

        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        })
        const data = await response.json();

        if (response.ok) {
            const token = data.token

            cookies().set('Token', token, {
                secure: process.env.NODE_ENV === 'production',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60
            });
            redirect('/')
        } else {
            return { error: data.message || 'Credenciais Invalidas ou erro desconhecido' }
        }
    } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        return { error: "Não foi possível conectar ao servidor de autenticação." };
    }
}

// logout
export async function logoutAction() {
    cookies().delete('Token');
    redirect('/login')
}