import userModel from "./models/user.model.js";

export default class UserDao {

    static create(payload) {
        return userModel.create(payload);
    }

    static updateById (id, payload) {
        return userModel.updateOne({_id: id}, {$set: payload});
    }

    static deleteById (id) {
        return userModel.deleteOne({_id: id});
    }
}


