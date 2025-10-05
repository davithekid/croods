import BarberController from "../controllers/BarberController.js";

export default async function barberRoutes(app) {
  app.get("/:id/services", BarberController.getServices);
}
