// src/controllers/auth.controller.js
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../models/User.js"

export default async function login(request, reply) {
  const { email, password } = request.body

  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return reply.status(404).send({ message: "Usuário não encontrado" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.senha)
    if (!isPasswordValid) {
      return reply.status(401).send({ message: "Senha inválida" })
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    return reply.send({
      message: "Login realizado com sucesso",
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(error)
    return reply.status(500).send({ message: "Erro no servidor" })
  }
}

export async function registerClient(request, reply) {
  const { nome, email, cpf, senha, role } = request.body

  try {
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return reply.code(400).send({ message: "Email já cadastrado" })
    }

    const hashedPassword = await bcrypt.hash(senha, 10)

    const user = await User.create({
      nome,
      email,
      cpf,
      senha: hashedPassword,
      role: role || "usuario",
    })

    return reply.code(201).send({
      message: "Usuário registrado com sucesso",
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(error)
    return reply.code(500).send({ message: "Erro no servidor" })
  }
}
