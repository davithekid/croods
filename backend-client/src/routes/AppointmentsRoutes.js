import AppointmentsController from "../controllers/AppointmentsController.js";

export default async function schedulingRoutes(app) {
    app.get('/', AppointmentsController.getAll);
    app.post('/', AppointmentsController.create);
    app.get('/:id', AppointmentsController.getById);
    app.put('/:id', AppointmentsController.update);
    app.delete('/:id', AppointmentsController.delete);
}