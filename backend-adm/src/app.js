import fastify from 'fastify'
import errorHandler from './plugins/erroHandler'
import userRoutes from './routes/userRoutes'
import { dashboardRoutes } from './routes/dashboardRoutes'
const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

app.get('/', (request, reply) => {
    return reply.status(200).send({ message: 'Hello ADM API!!' })
})

app.register(errorHandler)
app.register(userRoutes, { prefix: '/users' })
app.register(dashboardRoutes, { prefix: '/dashboard' })

export default app;