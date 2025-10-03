import ExtraServiceController from "../controllers/ExtraServicesController.js";

export default async function extraServiceRoutes(app){
    app.get('/', ExtraServiceController.getAll);
     app.get('/:id', ExtraServiceController.getById);
}