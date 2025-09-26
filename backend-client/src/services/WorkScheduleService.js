import WorkSchedule from "../models/WorkSchedule.js";

export default class WorkScheduleService {
    static async getAll() {
        return await WorkSchedule.findAll();
    }

    static async getById(id) {
        const workSchedule = await WorkSchedule.findByPk(id);
        if (!workSchedule) {
            throw new Error("NOT_FOUND");
        }
        return workSchedule;
    }
}
