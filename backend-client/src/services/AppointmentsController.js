import Appointments from "../models/Appointments.js";

export default class AppointmentsService {
    static async getAll() {
        return await Appointments.findAll();
    }

    static async getById(id) {
        const appointments = await Appointments.findByPk(id);
        if (!appointments) {
            throw new Error("NOT_FOUND");
        }
        return appointments;
    }

    static async create({ user_id,
        barber_id,
        service_id,
        schedule_at,
        full_name,
        phone,
        email, }) {
        const exists = await Appointments.findOne({
            where: { barber_id, date }
        });

        if (exists) {
            throw new Error("DATE_CONFLICT");
        }

        return await Appointments.create({
            user_id,
            barber_id,
            service_id,
            schedule_at,
            full_name,
            phone,
            email,
            status: "agendado",
        });
    }

    static async update(id, { user_id, barber_id, service_id, extra_services_id, date, dayoff, status }) {
        const appointments = await Appointments.findByPk(id);
        if (!appointments) {
            throw new Error("NOT_FOUND");
        }
        await appointments.update({ user_id, barber_id, service_id, extra_services_id, date, dayoff, status });
        return appointments;
    }

    static async delete(id) {
        const appointments = await Appointments.findByPk(id);
        if (!appointments) {
            throw new Error("NOT_FOUND");
        }
        await appointments.destroy();
        return true;
    }
}
