import { Translate } from "./story-app/services/translate.js";
import { Logger } from "./story-app/services/logger.js";
import { SearchBox } from "./story-app/components/search-box.component.js";
const translate = new Translate;
const logger = new Logger;
translate.setLanguage();
logger.logMessage("index", "Language is set with: ", translate.browserLanguage);
window.addEventListener('DOMContentLoaded', (event) => {
    logger.logMessage("index", "DOM content has loaded", event);
});
customElements.define("search-box", SearchBox);
