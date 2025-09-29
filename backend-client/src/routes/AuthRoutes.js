import { login, register } from '../controllers/AuthController.js'
import jwt from 'jsonwebtoken';

export default async function authRoutes(app) {
  app.post("/login", async (request, reply) => {
    const { email, password } = request.body;

    // validar user
    const user = await login(request, reply); // controller valida
    if (!user) return;

    const token = jwt.sign({
      id: user.id, role: user.role
    }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    });

    reply
      .setCookie('Token', token, {
        httpOnly: true, // evita acesso via js no browser e protege cookies de XSS
        secure: process.env.NODE_ENV === 'production', // evita token interceptado em http inseguro
        sameSite: 'strict', // restringe envio de cookies apenas para reqs originadas no site
        maxAge: parseInt(process.env.COOKIE_MAX_AGE) || 3600,
      })
      .send({ message: 'login successfull!' })
  })
  app.post("/register", register)
}
