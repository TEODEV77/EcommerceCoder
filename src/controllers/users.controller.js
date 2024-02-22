import UsersService from "../services/users.service.js";
import { requiredFields } from "../utils/CauseErrors.js";
import { CustomError } from "../utils/CustomError.js";
import EnumsError from "../utils/EnumsError.js";

export default class UsersController {
  static create(payload) {
    return UsersService.create(payload);
  }

  static async updatePassword(id, body) {
    const { password, newpassword } = body;
    if (password === newpassword) {
      const hashedPassword = await UsersService.checkLastPassword(id, password);
      if (hashedPassword != 1) {
        return UsersService.updatePassword(id, hashedPassword);
      }
    } else {
      return CustomError.create({
        name: "Not matching passwords",
        cause: "Passwords do not match",
        message: "Not matching passwords",
        idx: EnumsError.USER_ERROR.IDX,
        code: EnumsError.USER_ERROR.INVALID_FIELDS,
      });
    }
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

  static async updateRoleById(id) {
    const payload = await UsersService.findById(id);
    if (payload) {
      return UsersService.updateRoleById(id, payload);
    }
    CustomError.create({
      name: "Resource not found",
      cause: `User with id ${id} not found`,
      message: "User not found",
      idx: EnumsError.USER_ERROR.IDX,
      code: EnumsError.USER_ERROR.NOT_FOUND,
    });
  }

  static deleteById(id) {
    return UsersService.deleteById(id);
  }
}
