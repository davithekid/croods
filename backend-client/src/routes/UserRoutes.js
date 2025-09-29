import UserController from "../controllers/UserController.js";

export default async function userRoutes(app) {
    app.get('/', async (req, reply) => {

        // chama o controller e devolve a resposta...
        const result = await UserController.getAll(req, reply);
        reply.send(result);
    });
    app.get('/:id', UserController.getById);
    app.put('/:id', UserController.update);
    app.delete('/:id', UserController.delete);
}