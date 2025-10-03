import UserController from "../controllers/UserController.js";

export default async function userRoutes(app) {
    app.get('/:id', UserController.getById);
    app.put('/:id', UserController.update);
}