import passport from "passport";

import { gitHubOptions } from "../config/custom/githubOptions.js";

import { Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as GitHubStrategy } from "passport-github2";

import { jwtOptions } from "../config/custom/jwtOptions.js";

import UsersService from '../services/users.service.js';

export const initPassport = () => {
  passport.use(
    "github",
    new GitHubStrategy(
      gitHubOptions,
      async (accessToken, refreshToken, profile, done) => {
        const { username, provider, displayName } = profile;

        const email = profile._json.email;

        if (!email) {
          return done(new Error("No email"));
        }

        let user = await UsersService.findByEmail(email);

        if (user) {
          return done(null, user);
        }

        user = {
          firstName: displayName,
          lastName: "",
          role: "user",
          email,
          username,
          provider,
          password: "",
          age: 17,
        };

        const newUser = await UsersService.createUserCart(user);

        return done(null, newUser);
      }
    )
  );
  passport.use(
    "jwt",
    new JWTStrategy(jwtOptions, (payload, done) => {
      return done(null, payload);
    })
  );
};
