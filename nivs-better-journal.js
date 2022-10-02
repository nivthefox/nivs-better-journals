import { Logger } from "./infrastructure/logging.js";

export class NivsBetterJournal {
    logger;

    constructor() {
        this.logger = new Logger('nivs-better-journal');
        this.logger.Infof("Initializing");
    }
}