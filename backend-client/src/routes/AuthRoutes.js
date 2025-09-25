import { login, register } from '../controllers/AuthController.js'

export default async function authRoutes(app) {
  app.post("/login", login)
  app.post("/register", register)
}
