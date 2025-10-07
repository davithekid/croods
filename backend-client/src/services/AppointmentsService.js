import Appointments from "../models/Appointments.js";
import Services from "../models/Services.js";
import WorkSchedule from "../models/WorkSchedule.js";
import User from "../models/User.js";
import { Op } from "sequelize";

const WEEK_DAYS = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

export default class AppointmentsService {
    static async getAll() {
        return await Appointments.findAll();
    }

    static async getById(id) {
        const appointment = await Appointments.findByPk(id);
        if (!appointment) throw new Error("NOT_FOUND");
        return appointment;
    }

    static async create({ user_id, barber_id, service_id, scheduled_at, full_name, phone, email }) {
        const exists = await Appointments.findOne({
            where: { barber_id, scheduled_at },
        });
        if (exists) throw new Error("DATE_CONFLICT");

        return await Appointments.create({
            user_id,
            barber_id,
            service_id,
            scheduled_at,
            full_name,
            phone,
            email,
            status: "agendado",
        });
    }

    static async update(id, data) {
        const appointment = await Appointments.findByPk(id);
        if (!appointment) throw new Error("NOT_FOUND");
        await appointment.update(data);
        return appointment;
    }

    static async delete(id) {
        const appointment = await Appointments.findByPk(id);
        if (!appointment) throw new Error("NOT_FOUND");
        await appointment.destroy();
        return true;
    }

    static async getAvailableTimes(barberId, date) {
        try {
            const [year, month, day] = date.split("-").map(Number);
            const dateObj = new Date(year, month - 1, day);
            if (isNaN(dateObj)) return []; // data inválida

            const dayOfWeek = WEEK_DAYS[dateObj.getDay()];

            const schedule = await WorkSchedule.findOne({
                where: { barber_id: barberId, day_of_week: dayOfWeek },
            });

            if (!schedule) return []; // dia de folga

            const startTime = schedule.start_time; // "HH:MM"
            const endTime = schedule.end_time;

            const generateTimes = (start, end, interval = 60) => {
                const times = [];
                const [hStart, mStart] = start.split(":").map(Number);
                const [hEnd, mEnd] = end.split(":").map(Number);

                let current = new Date(dateObj);
                current.setHours(hStart, mStart, 0, 0);

                const finish = new Date(dateObj);
                finish.setHours(hEnd, mEnd, 0, 0);

                let id = 1;
                while (current < finish) {
                    const hour = current.toTimeString().slice(0, 5); // "HH:MM"
                    times.push({ id: id++, hour });
                    current.setMinutes(current.getMinutes() + interval);
                }

                return times;
            };

            const allTimes = generateTimes(startTime, endTime);

            const appointments = await Appointments.findAll({
                where: {
                    barber_id: barberId,
                    scheduled_at: {
                        [Op.between]: [
                            new Date(dateObj.setHours(0, 0, 0, 0)),
                            new Date(dateObj.setHours(23, 59, 59, 999)),
                        ],
                    },
                },
            });

            const occupiedTimes = appointments.map(a => {
                const d = new Date(a.scheduled_at);
                return d.toTimeString().slice(0, 5); // "HH:MM"
            });

            const availableTimes = allTimes.filter(t => !occupiedTimes.includes(t.hour));
            return availableTimes;

        } catch (err) {
            console.error("Erro ao buscar horários disponíveis:", err);
            return [];
        }
    }

    static async getAppointmentsByUser(userId) {
        try {
            const appointments = await Appointments.findAll({
                where: { user_id: userId },
                include: [
                    {
                        model: Services,
                        as: "service",
                        attributes: ["name", "price"]
                    },
                    {
                        model: User,
                        as: "barber",
                        attributes: ["id", "name"]
                    }
                ],
                order: [["scheduled_at", "DESC"]]
            })
            return appointments;
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
            throw new Error("Erro interno ao buscar agendamentos");
        }
    }

}
