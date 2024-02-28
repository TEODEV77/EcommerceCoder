export default class GenericRepository {

    constructor (dao) {
        this.dao = dao
    }

    getAll = (params) => {
        return this.dao.get(params);
    }

    getBy = (params) => {
        return this.dao.getBy(params);
    }

    populate = (id) => {
        return this.dao.populate(id);
    }

    paginate = (queryCriteria, options) => {
        return this.dao.paginate(queryCriteria, options);
    }

    save = (payload) => {
        return this.dao.save(payload);
    }

    update = (id, payload) => {
        return this.dao.update(id, payload);
    }

    delete = (id) => {
        return this.dao.delete(id);
    }
}