import fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyCookie from '@fastify/cookie'
import fastifyFormbody from '@fastify/formbody'

import userRoutes from './routes/UserRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import timeOffRoutes from './routes/TimeOffRoutes.js';
import serviceRoutes from './routes/ServiceRoutes.js';
import extraServiceRoutes from './routes/ExtraServicesRoutes.js';
import appointmentsRoutes from './routes/AppointmentsRoutes.js';
import errorHandler from './plugins/errorHandler.js';
import barberRoutes from './routes/barberRoutes.js';
import workScheduleRoutes from './routes/WorkScheduleRoutes.js';

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
});

await app.register(cors, {
    origin: 'http://localhost:3000',
    credentials: true,
})

app.register(fastifyFormbody);              

app.get('/', (request, reply) => {
    return reply.status(200).send({ message: 'Hello API!!!' });
})
    
// register cookies...
app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET || 'supersecret',
    parseOptions: {}
})
app.register(errorHandler)
app.register(barberRoutes, {prefix: 'barbers'})
app.register(userRoutes, { prefix: '/users' }); 
app.register(timeOffRoutes, { prefix: '/timeoff' });
app.register(authRoutes, { prefix: '/auth' });
app.register(serviceRoutes, { prefix: '/services' })
app.register(extraServiceRoutes, { prefix: '/extra-services' })
app.register(workScheduleRoutes, {prefix: 'work-schedules'})
app.register(appointmentsRoutes, { prefix: '/appointments' })

export default app;