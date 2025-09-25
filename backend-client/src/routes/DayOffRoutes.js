import DayOffController from "../controllers/DayOffController.js";

export default async function dayOffRoutes(app) {
    app.get('/', DayOffController.getAll);
    app.get('/:id', DayOffController.getById);
    app.put('/:id', DayOffController.update);
    app.delete('/:id', DayOffController.delete);
}