import ticketModel from "./models/ticket.model.js";

export default class TicketDao {

    static create (ticket) {
        return ticketModel.create(ticket);
    }

}