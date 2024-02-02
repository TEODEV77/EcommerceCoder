import { getLogger } from "../config/logger.js";
import ColorsMessage from "./colors.js";

export default class Messages {
  static logger = getLogger();

  static resourceNotAvailable() {
    return "The resource is not available at this time";
  }

  static initMessages(flags) {
    this.logger.info(`${ColorsMessage.title("mode: ")}${ColorsMessage.value(
      flags.environ
    )} ${ColorsMessage.separator("--")} ${ColorsMessage.title(
      "persistence: "
    )}${ColorsMessage.value(flags.p)}`);
  }

  static serverRunning(host, port) {
    this.logger.info(
      `${ColorsMessage.title('Server running at: ')} ${ColorsMessage.value(
        host
      )}:${ColorsMessage.separator(port)}`
    );
  }
}
