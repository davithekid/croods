import barberRevenueController from '../controllers/BarberViewController.js';

export default async function barberRevenueRoutes(app) {
  app.get('/revenue', barberRevenueController.getAll);
  app.get('/revenue/:barberId', barberRevenueController.getByBarber);
}
