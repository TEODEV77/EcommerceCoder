import EnvironmentFactory from './environmentFactory.js';

export default class SingletonEnvironment {

  constructor(environment){
    this.environment = environment;
  }
  
  static getInstance(mode){
    if(!SingletonEnvironment.instance){
      const environment = EnvironmentFactory.CreateEnvironment(mode);
      SingletonEnvironment.instance = new SingletonEnvironment(environment);
    }
    return SingletonEnvironment.instance;
  }

}
