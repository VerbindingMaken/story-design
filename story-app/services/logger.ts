export class Logger {

    constructor() { };

    logMessage(origin: string, message: string, data?: any): void {
        console.log(`A message from ${origin}: ${message}`, data);
    }
}



