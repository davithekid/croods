import AppointmentsController from "../controllers/AppointmentsController.js";

export default async function appointmentsRoutes(app) {
  app.get("/", AppointmentsController.getAll);
  app.post("/", AppointmentsController.create);
  app.get("/:id", AppointmentsController.getById);
  app.put("/:id", AppointmentsController.update);
  app.delete("/:id", AppointmentsController.delete);
  app.get("/user/:id", AppointmentsController.getUserAppointments);
  app.get("/barber/:barberId/date/:date", AppointmentsController.getTimesByBarberAndDate);
  app.get("/user/:id/active", AppointmentsController.getAppointmentsActive);
}
