import WorkScheduleService from "../services/WorkScheduleService.js";

export default class WorkScheduleController {
  static async getAll(req, reply) {
    const schedules = await WorkScheduleService.getAll();
    return reply.status(200).send(schedules);
  }

  static async getById(req, reply) {
    const schedule = await WorkScheduleService.getById(req.params.id);
    return reply.status(200).send(schedule);
  }

  static async getByBarberId(req, reply) {
    const { id } = req.params;
    const schedules = await WorkScheduleService.getByBarberId(id);      
    return reply.status(200).send(schedules);
  }
}
