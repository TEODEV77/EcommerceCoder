export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  static create(payload) {
    return this.dao.create(payload);
  }

  static findByEmail(email) {
    return this.dao.findOne({ email: email });
  }

  static updateById(id, payload) {
    return this.dao.updateOne({ _id: id }, { $set: payload });
  }

  static deleteById(id) {
    return this.dao.deleteOne({ _id: id });
  }
}
