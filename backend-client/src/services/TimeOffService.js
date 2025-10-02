import TimeOff from "../models/TimeOff.js";

export default class TimeOffService {
    static async getAllDayOffs() {
        return await TimeOff.findAll();
    }

    static async getDayOffById(id) {
        const dayoff = await TimeOff.findByPk(id);
        if (!dayoff) {
            throw new Error("NOT_FOUND");
        }
        return dayoff;
    }

    static async createDayOff({ barber_id, date }) {
        return await TimeOff.create({ barber_id, date });
    }

    static async updateDayOff(id, { barber_id, date }) {
        const dayoff = await TimeOff.findByPk(id);
        if (!dayoff) {
            throw new Error("NOT_FOUND");
        }
        await dayoff.update({ barber_id, date });
        return dayoff;
    }

    static async deleteDayOff(id) {
        const dayoff = await TimeOff.findByPk(id);
        if (!dayoff) {
            throw new Error("NOT_FOUND");
        }
        await dayoff.destroy();
        return true;
    }
}
