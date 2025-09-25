import ExtraServices from "../models/ExtraServices.js";

export default class ExtraServiceController {
    static async getAll(request, reply) {
        try {
            const services = await ExtraServices.findAll();
            return reply.status(200).send(services);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch all services', error })
        }
    }

    static async getById(request, reply) {
        try {
            const { id } = request.params;
            const service = await ExtraServices.findByPk(id);
            if (!service) {
                return reply.status(404).send({ message: 'Service not found' });
            }

            return reply.status(200).send(service);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch service', error })
        }
    }

    static async create(request, reply) {
        try {
            const { name, price, type } = request.body;
            const service = await ExtraServices.create({
                name, price, type
            })

            return reply.status(201).send(service);
        } catch (error) {
            return reply.status(500).send({error: 'Failed to create service', error})
        }
    }

    static async update(request, reply){
        try {
            const { id} = request.params;
             const { name, price, type } = request.body;
             const service = await ExtraServices.findByPk(id);
             if(!service){
                return reply.status(404).send({message: 'Service not found'});
             }

             await service.update({
                name, price, type
             })
             return reply.status(200).send(service);
        } catch (error) {
            return reply.status(500).send({message: 'Failed to update service'})
        }
    }

    static async delete(request, reply){
        try {
            const { id } = request.params;
            const service = await ExtraServices.findByPk(id);
            if(!service){
                return reply.status(404).send({message: 'Service not found'});
            }
            await service.destroy();
            return reply.status(200).send({message: 'Deleted successfully!!!'});
        } catch (error){
            return reply.status(500).send({error: 'Failed to delete service'});
        }
    }
}