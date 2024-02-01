export class CustomError {
  static create({
    name = "Something went wrong",
    cause,
    idx = 5,
    message = "Internal Server Error !",
    code = 50,
  }) {
    const error = new Error(message);
    error.name = name;
    error.cause = cause;
    error.idx = idx;
    error.code = code;
    throw error;
  }
}
