import ServiceController from "../controllers/ServiceController.js";

export default async function serviceRoutes(app) {
    app.get('/', ServiceController.getAll);
    app.get('/:id', ServiceController.getById);
}