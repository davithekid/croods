const API_URL = 'http://127.0.0.1:3333';

export async function post(endpoint, payload) {
    const url = `${API_URL}/${endpoint}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include' 
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({
            message: `Erro no servidor com status ${response.status}.`
        }));
        throw new Error(errorData.message || `Erro no servidor com status ${response.status}`, {
            cause: { status: response.status, data: errorData }
        });
    }
    return response.json();
}
