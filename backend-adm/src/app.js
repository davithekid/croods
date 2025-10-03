import fastify from 'fastify'
import errorHandler from './plugins/erroHandler'
const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

app.get('/', (request, reply) => {
    return reply.status(200).send({message: 'Hello ADM API!!'})
})

app.register(errorHandler)

export default app;