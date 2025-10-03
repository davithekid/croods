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
}
