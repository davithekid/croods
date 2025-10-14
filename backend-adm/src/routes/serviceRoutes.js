import ServicesController from "../controllers/ServiceController.js";

export default async function servicesRoutes(app) {
  app.get("/", ServicesController.getAll);
  app.get("/:id", ServicesController.getById);
  app.post("/", ServicesController.create);
  app.put("/:id", ServicesController.update);
  app.delete("/:id", ServicesController.delete);
}
