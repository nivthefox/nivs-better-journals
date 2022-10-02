export class Logger {
    name;

    constructor(name) {
        this.name = name;
    }

    Infof(message, ...args) {
        console.log(`${this.name} | ${message}`, ...args);
    }
}