export class Logger {
    constructor() { }
    ;
    logMessage(origin, message, data) {
        console.log(`A message from ${origin}: ${message}`, data);
    }
}
