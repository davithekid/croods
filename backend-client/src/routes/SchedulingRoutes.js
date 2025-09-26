import SchedulingController from "../controllers/Scheduling.js";

export default async function schedulingRoutes(app) {
    app.get('/', SchedulingController.getAll);
    app.get('/:id', SchedulingController.getById);
    app.put('/:id', SchedulingController.update);
    app.delete('/:id', SchedulingController.delete);
}