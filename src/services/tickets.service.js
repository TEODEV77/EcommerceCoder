import { faker } from '@faker-js/faker';
import { ticketRepository } from '../repositories/index.js';

export default class TicketService {

    static create (ticket) {
        ticket.code = faker.string.uuid();
        return ticketRepository.dao.create(ticket);
    }
}