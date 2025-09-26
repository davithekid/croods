import Scheduling from "../models/Scheduling.js";

export default class SchedulingController {
    static async getAll(request, reply) {
        try {
            const schedulings = await Scheduling.findAll();
            return reply.status(200).send(schedulings);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch all scheduilings', error })
        }
    }

    static async getById(request, reply) {
        try {
            const { id } = request.params;
            const scheduiling = await Scheduling.findByPk(id);
            if (!scheduiling) {
                return reply.status(404).send({ message: 'Scheduling not found' })
            }
            return reply.status(200).send(scheduiling);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch scheduling' })
        }
    }

    static async create(request, reply) {
        try {
            const { user_id, barber_id, service_id, extra_services_id, date, dayoff, status } = request.body;
            const scheduiling = await Scheduling.create({
                user_id, barber_id, service_id, extra_services_id, date, dayoff, status
            })
            return reply.status(201).send(scheduiling);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to create scheduling' });
        }
    }

    static async update(request, reply) {
        try {
            const { id } = request.params;
            const { user_id, barber_id, service_id, extra_services_id, date, dayoff, status } = request.body;
            const scheduiling = await Scheduling.findByPk(id);
            if (!scheduiling) {
                return reply.status(404).send({ message: 'Scheduling not found' })
            }
            await scheduiling.update({
                user_id, barber_id, service_id, extra_services_id, date, dayoff, status
            })
            return reply.status(200).send(scheduiling);
        } catch (error) {
            return reply.status(500).send({ error: 'failed to update scheduling' })
        }
    }

    static async delete(request, reply) {
        try {
            const { id }= request.params;
            const scheduiling = await Scheduling.findByPk(id);
            if (!scheduiling) {
                return reply.status(404).send({ message: 'Scheduling not found' })
            }
            await scheduiling.destroy();
            return reply.status(200).send({message: 'Deleted successfully!!!'});
        } catch (error ){
            return reply.status(500).send({error: 'Failed to delete scheduling'});
        }
    }
}