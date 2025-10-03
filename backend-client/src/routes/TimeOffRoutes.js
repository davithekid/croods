import TimeOffController from "../controllers/TimeOffController.js";

export default async function timeOffRoutes(app) {
    app.get('/', TimeOffController.getAll);
    app.get('/:id', TimeOffController.getById);
}