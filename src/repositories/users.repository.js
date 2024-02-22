export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  static findById (id){
    return this.dao.findById(id);
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

  static updateRoleById(id, role){
    return this.dao.updateRoleById(id,role);
  }

  static checkLastPassword(id, password){
    return this.dao.checkLastPassword(id, password);
  }

  static updatePassword(id, password){
    console.log(password);
    return this.dao.updatePassword(id, password);
  }
}
