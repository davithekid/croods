import AppointmentsService from "../services/AppointmentsService.js";

class AppointmentsController {
  async getAll(request, reply) {
    try {
      const { status } = request.query; 
      const appointments = await AppointmentsService.getAll(status || "todos");
      return reply.status(200).send(appointments);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ message: "Erro ao buscar agendamentos" });
    }
  }
}

export default new AppointmentsController();
