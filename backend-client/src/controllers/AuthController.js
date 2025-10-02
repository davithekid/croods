import AuthService from "../services/AuthService.js";

export default class AuthController {
    // Login
    async login(req, reply) {
        const { email, password } = req.body;

        try {
            const { token, user } = await AuthService.login(email, password);

            // Setar cookie HttpOnly
            reply.setCookie('Token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 3600, // 1h
            });

            return reply.send({
                message: "Login realizado com sucesso",
                user
            });
        } catch (error) {
            if (error.message === "NOT_FOUND") {
                return reply.status(404).send({ message: "Usuário não encontrado" });
            }
            if (error.message === "INVALID_PASSWORD") {
                return reply.status(401).send({ message: "Senha inválida" });
            }
            return reply.status(500).send({ message: "Erro no servidor" });
        }
    }

    // Registro
    async register(req, reply) {
        try {
            const user = await AuthService.register(req.body);
            return reply.status(201).send({
                message: "Usuário registrado com sucesso",
                user
            });
        } catch (error) {
            if (error.message === "EMAIL_EXISTS") {
                return reply.status(400).send({ message: "Email já cadastrado" });
            }
            return reply.status(500).send({ message: "Erro no servidor" });
        }
    }

    // Rota /me para retornar usuário logado
    async me(req, reply) {
        const token = req.cookies.Token;
        if (!token) return reply.send({ user: null });

        const user = await AuthService.getUserFromToken(req.server, token);
        return reply.send({ user });
    }

    // Logout
    async logout(req, reply) {
        reply.clearCookie('Token', { path: '/' });
        return reply.send({ message: 'Logout realizado' });
    }
}
