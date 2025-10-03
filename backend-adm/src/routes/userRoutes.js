import UserController from "../controllers/UserController.js";

export default async function userRoutes(app){
    app.get('/', UserController.getAll);
    app.get('/:id', UserController.getById);
}