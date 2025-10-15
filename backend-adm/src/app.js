import fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyCookie from '@fastify/cookie'
import fastifyFormbody from '@fastify/formbody'
import errorHandler from './plugins/erroHandler.js'
import userRoutes from './routes/userRoutes.js'
import { dashboardRoutes } from './routes/dashboardRoutes.js'
import { appointmentsRoutes } from './routes/appointmentsRoutes.js'
import barberRevenueRoutes from './routes/barberViewsRoutes.js'
import authRoutes from '../../backend-client/src/routes/AuthRoutes.js';
import servicesRoutes from './routes/serviceRoutes.js';
import timeOffRoutes from './routes/timeOffRoutes.js';

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

await app.register(cors, {
    origin: 'http://localhost:4000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})

app.register(fastifyFormbody);

// register cookies...
app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET || 'supersecret',
    parseOptions: {}
})

app.get('/', (request, reply) => {
    return reply.status(200).send({ message: 'Hello ADM API!!' })
})

app.register(errorHandler)
app.register(authRoutes, { prefix: '/auth' });
app.register(userRoutes, { prefix: '/users' })
app.register(dashboardRoutes, { prefix: '/dashboard' })
app.register(appointmentsRoutes, { prefix: '/appointments' })
app.register(barberRevenueRoutes, { prefix: '/barbers' })
app.register(servicesRoutes, {prefix: '/services'})
app.register(timeOffRoutes, {prefix: '/timeoff'})

export default app;