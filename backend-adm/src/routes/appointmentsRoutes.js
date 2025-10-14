import AppointmentsController from "../controllers/AppointmentsController.js";

export async function appointmentsRoutes(app) {
    app.get("/", AppointmentsController.getAll);
};
