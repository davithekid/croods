import AuthService from '../services/AuthService.js';
import jwt from 'jsonwebtoken';

export default async function authRoutes(app) {
  app.post('/login', async (req, reply) => {
    const { email, password } = req.body;

    try {
      // pega o usuário e token do service
      const { user } = await AuthService.login(email, password);

      // cria JWT
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
      );

      reply
        .setCookie('Token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: parseInt(process.env.COOKIE_MAX_AGE) || 3600,
        })
        .send({ message: 'Login realizado com sucesso!', user, token });

    } catch (error) {
      if (error.message === 'NOT_FOUND') return reply.status(404).send({ message: 'Usuário não encontrado' });
      if (error.message === 'INVALID_PASSWORD') return reply.status(401).send({ message: 'Senha inválida' });
      return reply.status(500).send({ message: 'Erro no servidor' });
    }
  });

  app.post('/register', async (req, reply) => {
    try {
      const user = await AuthService.register(req.body);
      reply.status(201).send({ message: 'Usuário registrado com sucesso', user });
    } catch (error) {
      if (error.message === 'EMAIL_EXISTS') return reply.status(400).send({ message: 'Email já cadastrado' });
      return reply.status(500).send({ message: 'Erro no servidor' });
    }
  });
  
  app.get('/me', async (req, reply) => {
    const token = req.cookies.Token;
    if (!token) return reply.send({ user: null });

    const user = await AuthService.getUserFromToken(token);
    return reply.send({ user });
  });

  app.post('/logout', async (req, reply) => {
    reply.clearCookie('Token', { path: '/' });
    return reply.send({ message: 'Logout realizado' });
  });
}
