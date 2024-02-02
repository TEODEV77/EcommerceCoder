import EnumsError from "./EnumsError.js";

export const requiredFields = (payload) => {
  return {
    title: "All fields required",
    got: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      role: payload.role,
      email: payload.email,
      password: payload.password ? "*******" : payload.password,
      age: payload.age,
      cart: payload.cart,
    },
    expected: {
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      password: "",
      age: 0,
      cart: "",
    },
  };
};

export const invalidFields = (got, expected) => {
  return {
    title: "Invalid field",
    got: {
      got,
    },
    expected: {
      expected,
    },
  };
};

export const authError = (code) => {
  switch (code) {
    case EnumsError.AUTH_ERROR.UNAUTHENTICATED:
      return {
        title: "Unauthenticated",
        message: "You need to be authenticated to access this resource",
      };
    case EnumsError.AUTH_ERROR.UNAUTHORIZED:
      return {
        title: "Unauthorized",
        message: "You are not authorized to access this resource",
      };
  }
};

export const dbError = (code) => {
  switch (code) {
    case EnumsError.DB_ERROR.WRONG_CONNECTION:
      return {
        title: "Wrong connection",
        message: "The connection to the database failed",
      };
    case EnumsError.DB_ERROR.WRONG_CREDENTIALS:
      return {
        title: "Wrong credentials",
        message: "The credentials to the database are wrong",
      };
  }
};

export const routingError = (code) => {
  switch (code) {
    case EnumsError.ROUTING_ERROR.ROUTE_NOT_DEFINED:
      return {
        title: "Route not defined",
        message: "The route you are trying to access is not defined",
      };
    case EnumsError.ROUTING_ERROR.ROUTE_NOT_FOUND:
      return {
        title: "Route not found",
        message: "The route you are trying to access was not found",
      };
  }
};

export const serverError = (code) => {
  switch (code) {
    case EnumsError.SERVER.INTERNAL_ERROR:
      return {
        title: "Internal server error",
        message: "An internal server error occurred",
      };
    case EnumsError.SERVER.BAD_REQUEST:
      return {
        title: "Bad request",
        message: "The request you made is invalid",
      };
  }
};
