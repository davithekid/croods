import Appointments from "../models/Appointments.js";
import WorkSchedule from "../models/WorkSchedule.js";
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
            const dateObj = new Date(`${date}T00:00:00Z`);
            if (isNaN(dateObj)) return []; // Data inválida
            const dayOfWeek = WEEK_DAYS[dateObj.getUTCDay()];

            const schedule = await WorkSchedule.findOne({
                where: { barber_id: barberId, day_of_week: dayOfWeek },
            });

            if (!schedule) return []; // Dia de folga

            const startTime = schedule.start_time; 
            const endTime = schedule.end_time;     

            const generateTimes = (start, end, interval = 60) => {
                const times = [];
                const [hStart, mStart] = start.split(":").map(Number);
                const [hEnd, mEnd] = end.split(":").map(Number);

                const current = new Date(Date.UTC(1970, 0, 1, hStart, mStart));
                const finish = new Date(Date.UTC(1970, 0, 1, hEnd, mEnd));

                let id = 1;
                while (current < finish) {
                    const hour = current.toISOString().slice(11, 16); // HH:MM
                    times.push({ id: id++, hour });
                    current.setUTCMinutes(current.getUTCMinutes() + interval);
                }
                return times;
            };

            const allTimes = generateTimes(startTime, endTime);

            const appointments = await Appointments.findAll({
                where: {
                    barber_id: barberId,
                    scheduled_at: {
                        [Op.between]: [`${date} 00:00:00`, `${date} 23:59:59`],
                    },
                },
            });

            const occupiedTimes = appointments.map(a => {
                return a.scheduled_at.toISOString().slice(11, 16);
            });

            const availableTimes = allTimes.filter(t => !occupiedTimes.includes(t.hour));
            return availableTimes;

        } catch (err) {
            console.error("Erro ao buscar horários disponíveis:", err);
            return [];
        }
    }
}
