const API_URL = 'http://127.0.0.1:3333';

/**
 * Realiza uma requisição POST para a API e lida com erros de forma centralizada.
 * @param {string} endpoint - O endpoint da API (ex: 'auth/login').
 * @param {object} payload - O corpo da requisição.
 * @returns {Promise<object>} O corpo JSON da resposta em caso de sucesso.
 * @throws {Error} Um erro com a mensagem formatada do backend em caso de falha.
 */
export async function post(endpoint, payload) {
    const url = `${API_URL}/${endpoint}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        // credentials: 'include' não é necessário em Server Actions, 
        // mas pode ser útil em fetches do lado do cliente.
        credentials: 'include' 
    });

    if (!response.ok) {
        // Tenta ler a mensagem de erro formatada do backend.
        const errorData = await response.json().catch(() => ({
            message: `Erro no servidor com status ${response.status}.`
        }));

        // Lança um erro que será capturado pelo handleLogin.
        throw new Error(errorData.message || `Erro no servidor com status ${response.status}`, {
            cause: { status: response.status, data: errorData }
        });
    }

    // Retorna os dados de sucesso (incluindo o token, user, etc.)
    return response.json();
}
