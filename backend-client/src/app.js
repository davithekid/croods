import fastify from 'fastify';
import cors from '@fastify/cors';
import userRoutes from './routes/UserRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import dayOffRoutes from './routes/DayOffRoutes.js';
import serviceRoutes from './routes/ServiceRoutes.js';
import extraServiceRoutes from './routes/ExtraServicesRoutes.js';
import schedulingRoutes from './routes/SchedulingRoutes.js';
import errorHandler from './plugins/errorHandler.js';
import fastifyCookie from '@fastify/cookie'

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
});

await app.register(cors, {
    origin: 'http://localhost:3000'
})

app.get('/', (request, reply) => {
    return reply.status(200).send({ message: 'Hello API!!!' });
})

// register cookies...
app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET || 'supersecret',
    parseOptions: {}
})
app.register(errorHandler)
app.register(userRoutes, { prefix: '/users' });
app.register(dayOffRoutes, { prefix: '/dayoffs' });
app.register(authRoutes, {prefix: '/auth'});
app.register(serviceRoutes, {prefix: '/services'})
app.register(extraServiceRoutes, {prefix: '/extra-services'})
app.register(schedulingRoutes, {prefix: '/schedulings'})


export default app;