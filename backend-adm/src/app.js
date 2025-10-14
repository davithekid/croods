import fastify from 'fastify'
import errorHandler from './plugins/erroHandler.js'
import userRoutes from './routes/userRoutes.js'
import { dashboardRoutes } from './routes/dashboardRoutes.js'
import { appointmentsRoutes } from './routes/appointmentsRoutes.js'
import barberRevenueRoutes from './routes/barberViewsRoutes.js'
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
app.register(appointmentsRoutes, { prefix: '/appointments' })
app.register(barberRevenueRoutes, {prefix: '/barbers'})

export default app;