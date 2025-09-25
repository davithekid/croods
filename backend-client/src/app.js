import fastify from 'fastify';
import userRoutes from './routes/UserRoutes';
import authRoutes from './routes/AuthRoutes';
import cors from '@fastify/cors';

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
app.register(authRoutes, {prefix: '/auth'});

export default app;