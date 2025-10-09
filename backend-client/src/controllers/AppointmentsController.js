import AppointmentsService from "../services/AppointmentsService.js";

export default class AppointmentsController {
  static async getAll(req, reply) {
    const appointments = await AppointmentsService.getAll();
    return reply.status(200).send(appointments);
  }

  static async getById(req, reply) {
    const appointment = await AppointmentsService.getById(req.params.id);
    return reply.status(200).send(appointment);
  }

  static async create(req, reply) {
    const appointment = await AppointmentsService.create(req.body);
    return reply.status(201).send(appointment);
  }

  static async update(req, reply) {
    const appointment = await AppointmentsService.update(req.params.id, req.body);
    return reply.status(200).send(appointment);
  }

  static async delete(req, reply) {
    await AppointmentsService.delete(req.params.id);
    return reply.status(200).send({ message: "Deleted successfully" });
  }

  static async getTimesByBarberAndDate(req, reply) {
      const { barberId, date } = req.params;
      const times = await AppointmentsService.getAvailableTimes(barberId, date);
      return reply.status(200).send(times);
  }

  static async getUserAppointments(req, reply) {
      const { id } = req.params;

      if (!id) {
        return reply.status(400).send({ message: "ID do usuário é obrigatório." });
      }

      const appointments = await AppointmentsService.getAppointmentsByUser(id);

      if (!appointments || appointments.length === 0) {
        return reply.status(404).send({ message: "Nenhum agendamento encontrado." });
      }

      return reply.status(200).send(appointments);
  }

  static async getAppointmentsActive(req, reply) {
      const {id} = req.params;
      const appointments = await AppointmentsService.getAppointmentsByUserActive(id);
      return reply.send(appointments)
    }
}
