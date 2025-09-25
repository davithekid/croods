import jwt from "jsonwebtoken"

export async function authMiddleware(request, reply) {
  try {
    const authHeader = request.headers["authorization"]

    if (!authHeader) {
      return reply.code(401).send({ message: "Token não fornecido" })
    }

    const token = authHeader.split(" ")[1] 
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    request.user = decoded
  } catch (err) {
    return reply.code(401).send({ message: "Token inválido" })
  }
}
