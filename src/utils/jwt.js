import JWT from "jsonwebtoken";

import { flags } from "../utils.js";
import SingletonEnvironment from "../env/singletonEnvironment.js";

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { secret, expiresIn } = environment.env.jwt;

export const generateToken = (user) => {
  const { firstName, lastName, role, username, provider, email, age, cart } =
    user;
  const payload = {
    firstName,
    lastName,
    username,
    provider,
    role,
    email,
    age,
    cart,
  };
  return JWT.sign(payload, secret, {
    expiresIn: expiresIn,
  });
};

export const validateToken = (token) => {
  return new Promise((resolve) => {
    JWT.verify(token, secret, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      console.log("payload", payload);
      resolve(payload);
    });
  });
};
