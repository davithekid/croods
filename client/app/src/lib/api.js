const API_URL = 'http://localhost:3333'; // back-end

export async function post(endpoint, payload) {
    const url = `${API_URL}/${endpoint}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if(!response.ok){

        // erro formatado back-end
        const errorData = await response.json().catch(() => {
            message: `Erro no servidor com status ${response.status}`;
        })

        // cria um erro
        throw new Error(errorData.message, {
            cause: {status: response.status, data: errorData}
        })
    }

    return response.json();
}