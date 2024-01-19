import bcrypt, { hashSync } from "bcrypt";
import path from "path";
import url from "url";

import { Command } from 'commander';


const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const createHash = (plainText) => {
  const salt = bcrypt.genSaltSync(10);
  const textHashed = hashSync(plainText, salt);
  return textHashed;
};

const program = new Command();

program.option('-e <env>','Flag environment', 'dev');
program.option('-p <persistence>','Flag persistence', 'MONGO');
program.parse();

export const flags = program.opts();