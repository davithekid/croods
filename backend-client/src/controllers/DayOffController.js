import DayOff from "../models/DayOff.js";

export default class DayOffController {
    static async getAll(request, reply) {
        try {
            const dayoff = await DayOff.findAll();
            return reply.status(200).send(dayoff);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch dayoffs', error })
        }
    }

    static async getById(request, reply) {
        try {
            const { id } = request.params;
            const dayoff = await DayOff.findByPk(id);
            if (!dayoff) {
                return reply.status(404).send({ message: 'Dayoff not found' });
            }
            return reply.status(200).send(dayoff);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch dayoff', error })
        }
    }

    static async create(request, reply) {
        try {
            const { barber_id, date } = request.body;
            const dayoff = await DayOff.create({
                barber_id, date
            })

            return reply.status(201).send(dayoff);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to create user', error })
        }
    }

    static async update(request, reply) {
        try {
            const { id } = request.params;
            const { barber_id, date } = request.body;
            const dayoff = await DayOff.findByPk(id);
            if (!dayoff) {
                return reply.status(404).send({ message: 'Dayoff not found' });
            }
            await dayoff.update({
                barber_id,
                date
            })
            return reply.status(200).send(dayoff);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to update dayoff', error })
        }
    }

    static async delete(request, reply) {
        try {
            const { id } = request.params;
            const dayoff = await DayOff.findByPk(id);
            if(!dayoff){
                return reply.status(404).send({message: 'Dayoff not found'});
            }
            await dayoff.destroy();
            return reply.status(200).send({message: 'Delete successfully'});
        } catch (error) {
            return reply.status(500).send({error: 'Failed to delete dayoff'});
        }
    }
}