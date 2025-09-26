import AuthService from "../services/AuthService.js";

export default class AuthController {
    static async login(req, reply) {
        const { email, password } = req.body;

        try {
            const result = await AuthService.login(email, password);
            return reply.send({
                message: "Login realizado com sucesso",
                ...result
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

    static async register(req, reply) {
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
}
