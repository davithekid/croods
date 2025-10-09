export default function errorHandler(fastify, options, done) {
    fastify.setErrorHandler((error, request, reply) => {
      const statusCode = error.statusCode || 500;
      const message =
        statusCode === 500
          ? "Erro interno no servidor"
          : error.message || "Erro desconhecido";
  
      if (statusCode === 500) {
        console.error(error);
      }
  
      reply.status(statusCode).send({
        error: true,
        message,
      });
    });
  
    done();
  }
  