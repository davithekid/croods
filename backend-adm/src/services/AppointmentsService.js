import Appointments from "../models/Appointments.js";
import User from "../models/User.js";
import Services from "../models/Services.js";

export default class AppointmentsService {

    static async getAll(status = "todos") {
        try {
            const whereClause = {};

            if (status !== "todos") {
                whereClause.status = status;
            }

            const appointments = await Appointments.findAll({
                where: whereClause,
                include: [
                    { model: User, as: "user", attributes: ["id", "name", "email"] },
                    { model: User, as: "barber", attributes: ["id", "name", "email"] },
                    { model: Services, as: "service", attributes: ["id", "name", "price"] },
                ],
                order: [["scheduled_at", "DESC"]],
                limit: 10,
            });

            return appointments;
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
            throw error;
        }
    }
}
