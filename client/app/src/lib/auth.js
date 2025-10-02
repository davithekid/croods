'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// A sua URL da API, definida no Server Action para maior clareza.
const API_URL = 'http://127.0.0.1:3333'; 

/**
 * Lida com o processo de login, chama a API e define o cookie.
 * @param {unknown} prevState - Estado anterior.
 * @param {FormData} formData - Dados do formulário.
 * @returns {{error: string} | void} Retorna um objeto de erro ou aciona o redirect (NEXT_REDIRECT).
 */
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

        const data = await response.json().catch(() => ({})); // Tenta ler o JSON, fallback para vazio

        if (!response.ok) {
            // Se a API retornar 4xx/5xx
            const errorMessage = data.message || `Erro no servidor com status ${response.status}`;
            
            // Retorna o erro para o cliente. O cliente pode exibir esta mensagem.
            return { error: errorMessage };
        }

        // Sucesso (response.ok é true)
        const token = data.token;
        
        if (!token) {
            return { error: 'O token de autenticação está ausente na resposta da API.' };
        }

        // Define o cookie de sessão no contexto do Next.js.
        cookies().set('Token', token, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 // 1 hora
        });
        
        // Aciona o NEXT_REDIRECT para ir para a home page
        redirect('/');

    } catch (error) {
        // Captura erros de rede ou de execução (exceto NEXT_REDIRECT)
        console.error("Erro fatal durante o login:", error);
        
        // Verificação adicional: se for o NEXT_REDIRECT, re-lança para o Next.js lidar.
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
