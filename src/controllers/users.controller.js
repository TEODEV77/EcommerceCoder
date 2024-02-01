import UsersService from "../services/users.service.js";
import { requiredFields } from "../utils/CauseErrors.js";
import { CustomError } from "../utils/CustomError.js";
import EnumsError from "../utils/EnumsError.js";


export default class UsersController {
  static create(payload) {
    return UsersService.create(payload);
  }

  static findByEmail(email) {
    return UsersService.findByEmail(email);
  }

  static async createUserCart(payload) {
    const { firstName, email, age } = payload;
    if (!firstName || !email || !age) {
      CustomError.create({
        name: "Invalid user info",
        cause: requiredFields(payload),
        message: "Missing required fields",
        idx: EnumsError.USER_ERROR.IDX,
        code: EnumsError.USER_ERROR.REQUIRED_FIELDS,
      });
    }

    return UsersService.createUserCart(payload);
  }

  static updateById(id, payload) {
    return UsersService.updateById(id, payload);
  }

  static deleteById(id) {
    return UsersService.deleteById(id);
  }
}
