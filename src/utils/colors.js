import colors from "chalk";

export default class ColorsMessage {
    static title = (title) => colors.yellow(title);
    static value = (value) => colors.blue(value);
    static separator = (separator) => colors.red(separator);
}