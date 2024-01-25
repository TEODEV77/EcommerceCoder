import JWT from "jsonwebtoken";

import { envFactory } from "../env/index.js";
import { flags } from "../utils.js";

const mode = flags.e;
const { envi } = envFactory(mode);
const { secret, expiresIn } = envi.jwt;

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
