import UserDao from "../dao/user.dao.js";

export default class UsersService {
  
    static create(payload) {
        return UserDao.create(payload);
    }

    static updateById (id, payload) {
        return UserDao.updateById(id, payload);
    }

    static deleteById (id) {
        return UserDao.deleteById(id);
    }
}
