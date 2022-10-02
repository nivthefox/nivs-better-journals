import { Logger } from "./infrastructure/logging";

export class NivsBetterJournal {
    logger;

    constructor() {
        this.logger = new Logger('nivs-better-journal');
        this.logger.Infof("initializing");
    }
}