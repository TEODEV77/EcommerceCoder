export default class TicketRepository {

    constructor(dao){
        this.dao = dao;
    }

    static create (ticket) {
        return this.dao.create(ticket);
    }

}
    
