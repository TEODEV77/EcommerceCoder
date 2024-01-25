
export default class MessageRepository {

    constructor (dao) {
        this.dao = dao;
    }

    static getAll(){
        return this.dao.getAll();
    }

}