export default function errorHandler(fastify, options, done) {
    fastify.setErrorHandler((error, request, reply) => {
        if (error.message === 'NOT_FOUND') {
            return reply.status(404).send({ message: 'Resource not found' })
        }

        console.error(error);
        return reply.status(500).send({ message: 'Internal Server Error', error: error.message })
    })
    done();
}