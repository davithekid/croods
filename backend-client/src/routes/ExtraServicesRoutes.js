import ExtraServiceController from "../controllers/ExtraServicesController.js";

export default async function extraServiceRoutes(app){
    app.get('/', ExtraServiceController.getAll);
     app.get('/:id', ExtraServiceController.getById);
     app.put('/:id', ExtraServiceController.update);
     app.delete('/:id', ExtraServiceController.delete);   
}