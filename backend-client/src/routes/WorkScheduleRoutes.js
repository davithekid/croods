import WorkScheduleController from "../controllers/WorkScheduleController.js";

export default async function workScheduleRoutes(app) {
    app.get('/', WorkScheduleController.getAll);
    app.get('/:id', WorkScheduleController.getById);
}