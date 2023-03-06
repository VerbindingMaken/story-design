import { Translate } from "./source/core/translate.js";
import { Logger } from "./source/core/logger.js";
const translate = new Translate;
const logger = new Logger;
translate.setLanguage();
window.addEventListener('DOMContentLoaded', (event) => {
    logger.logMessage("index", "DOM content has loaded", event);
});
