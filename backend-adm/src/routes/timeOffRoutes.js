import TimeOffController from "../controllers/TimeOffController.js";

export default async function timeOffRoutes(app) {
    app.get("/", TimeOffController.getAll);
    app.get("/:id", TimeOffController.getOne);
    app.post("/", TimeOffController.create);
    app.put("/:id", TimeOffController.update);
    app.delete("/:id", TimeOffController.delete);
}

