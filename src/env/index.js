import dev from '../env/dev.js';
import prod from '../env/prod.js';

export default class Environment {
  constructor(environment) {
    this.env = environment;
  }
}

export const devEnvironment = new Environment(dev);
export const prodEnvironment = new Environment(prod);

export const envFactory = (mode) => {
    let envi;

    switch(mode){
        case 'dev':
            envi = devEnvironment.env;
            break;
        case 'prod':
            envi = prodEnvironment.env;
            break;
        default:
            envi = devEnvironment.env;
            break;
    }

    return envi;
}