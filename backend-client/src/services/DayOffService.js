import DayOff from "../models/DayOff.js";

export default class DayOffService {
    static async getAllDayOffs() {
        return await DayOff.findAll();
    }

    static async getDayOffById(id) {
        const dayoff = await DayOff.findByPk(id);
        if (!dayoff) {
            throw new Error("NOT_FOUND");
        }
        return dayoff;
    }

    static async createDayOff({ barber_id, date }) {
        return await DayOff.create({ barber_id, date });
    }

    static async updateDayOff(id, { barber_id, date }) {
        const dayoff = await DayOff.findByPk(id);
        if (!dayoff) {
            throw new Error("NOT_FOUND");
        }
        await dayoff.update({ barber_id, date });
        return dayoff;
    }

    static async deleteDayOff(id) {
        const dayoff = await DayOff.findByPk(id);
        if (!dayoff) {
            throw new Error("NOT_FOUND");
        }
        await dayoff.destroy();
        return true;
    }
}
