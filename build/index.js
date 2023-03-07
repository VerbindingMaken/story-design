import { Translate } from "./source/core/translate.js";
import { Logger } from "./source/core/logger.js";
import { SearchBox } from "./source/components/search-box.component.js";
const translate = new Translate;
const logger = new Logger;
translate.setLanguage();
window.addEventListener('DOMContentLoaded', (event) => {
    logger.logMessage("index", "DOM content has loaded", event);
});
customElements.define("search-box", SearchBox);
