import { faker } from '@faker-js/faker';

import TicketDao from './../dao/ticket.dao.js';

export default class TicketService {

    static create (ticket) {
        ticket.code = faker.string.uuid();
        return TicketDao.create(ticket);
    }
}