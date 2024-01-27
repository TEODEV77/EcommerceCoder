import {
  DevEnvironment,
  TestEnvironment,
  ProdEnvironment,
} from "./environment.js";

const EnvironmentMode = {
  DEV: "DEV",
  TEST: "TEST",
  PROD: "PROD",
};

export default class EnvironmentFactory {
  static CreateEnvironment(mode) {
    switch (mode) {
      case EnvironmentMode.DEV:
        return new DevEnvironment();
      case EnvironmentMode.TEST:
        return new TestEnvironment();
      case EnvironmentMode.PROD:
        return new ProdEnvironment();
      default:
        return new DevEnvironment();
    }
  }
}
