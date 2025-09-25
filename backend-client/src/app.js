import fastify from 'fastify';
import cors from '@fastify/cors';
import userRoutes from './routes/UserRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import dayOffRoutes from './routes/DayOffRoutes.js';

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

app.register(userRoutes, { prefix: '/users' });
app.register(dayOffRoutes, { prefix: '/dayoffs' });
app.register(authRoutes, {prefix: '/auth'});

export default app;