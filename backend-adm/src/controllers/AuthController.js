import AuthService from "../services/AuthService.js";

export default class AuthController {
  async login(req, reply) {
    const { email, password } = req.body;

    try {
      const { token, user } = await AuthService.login(email, password);

      reply.setCookie('Token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 3600, 
      });

      return reply.send({
        message: "Login realizado com sucesso",
        token, 
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

  async me(req, reply) {
    const token = req.cookies.Token;
    if (!token) return reply.send({ user: null });

    const user = await AuthService.getUserFromToken(token);
    return reply.send({ user });
  }

  async logout(req, reply) {
    reply.clearCookie('Token', { path: '/' });
    return reply.send({ message: "Logout realizado" });
  }
}
