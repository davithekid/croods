import { loginClient, registerClient } from '../controllers/AuthController.js'

export default async function authRoutes(app) {
  app.post("/login", loginClient)
  app.post("/register", registerClient)
}
