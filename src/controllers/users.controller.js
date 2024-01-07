import UsersService from "../services/users.service.js";

export default class UsersController {

    static create(payload) {
        return UsersService.create(payload);
    }

    static updateById (id, payload) {
        return UsersService.updateById(id, payload);
    }

    static deleteById (id) {
        return UsersService.deleteById(id);
    }
}