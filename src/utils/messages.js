import ColorsMessage from "./colors.js";

export default class Messages {
  static resourceNotAvailable() {
    return "The resource is not available at this time";
  }

  static initMessages(flags) {
    console.log(
      `${ColorsMessage.title("mode:")}${ColorsMessage.value(
        flags.e
      )} ${ColorsMessage.separator("--")} ${ColorsMessage.title(
        "persistence:"
      )}${ColorsMessage.value(flags.p)} `
    );
  }

  static serverRunning (host,port) {
    console.log(
      `${ColorsMessage.title("Server running at:")} ${ColorsMessage.value(
        host
      )}:${ColorsMessage.separator(port)}`
    );
  }
}
