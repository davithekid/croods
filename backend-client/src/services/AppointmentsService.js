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
        
        const dateStr = `${date}T00:00:00`; 
        const dateObj = new Date(dateStr); 

        const dayIndex = dateObj.getDay(); 
        const dayOfWeek = WEEK_DAYS[dayIndex];

        // 2. Busca Horário de Trabalho
        const schedule = await WorkSchedule.findOne({
            where: { barber_id: barberId, day_of_week: dayOfWeek },
        });

        if (!schedule) {
            return []; 
        }
        
        const startTime = schedule.start_time; 
        const endTime = schedule.end_time;      

        // 3. Gera todos os horários possíveis
        const generateTimes = (start, end, interval = 60) => {
            const times = [];
            const [hStart, mStart] = start.split(":").map(Number);
            const [hEnd, mEnd] = end.split(":").map(Number);
            
            let current = new Date(1970, 0, 1); 
            current.setUTCHours(hStart, mStart, 0, 0); 
            
            const finish = new Date(1970, 0, 1);
            finish.setUTCHours(hEnd, mEnd, 0, 0);

            let id = 1;
            while (current < finish) {
                const hour = current.toISOString().slice(11, 16); 
                
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
                    [Op.between]: [`${date} 00:00:00`, `${date} 23:59:59`],
                },
            },
        });

        const occupiedTimes = appointments.map(a => {
            return a.scheduled_at.toISOString().slice(11, 16);
        });
        const availableTimes = allTimes.filter(t => !occupiedTimes.includes(t.hour));

        return availableTimes;
    }
}