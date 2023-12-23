import bcrypt, { hashSync } from "bcrypt";
import path from "path";
import url from "url";
import JWT from "jsonwebtoken";

import { environment as env } from "./env/config.js";

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const generateToken = (user) => {
  const { firstName, lastName, role, username, email, age, cart } = user;
  const payload = { firstName, lastName, username, role, email, age, cart };
  return JWT.sign(payload, env.dev.jwt.secret, {
    expiresIn: env.dev.jwt.expiresIn,
  });
};

export const validateToken = (token) => {
  return new Promise((resolve) => {
    JWT.verify(token, env.dev.jwt.secret, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      console.log("payload", payload);
      resolve(payload);
    });
  });
};

export const createHash = (plainText) => {
  const salt = bcrypt.genSaltSync(10);
  const textHashed = hashSync(plainText, salt);
  return textHashed;
};
