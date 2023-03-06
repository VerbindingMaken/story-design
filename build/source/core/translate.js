export class Translate {
    constructor() { }
    getBrowserLanguage() {
        const browserLanguage = window.navigator.language || "en";
        const shortBrowserLanguage = browserLanguage.slice(0, 2);
        return shortBrowserLanguage;
    }
    setLanguage() {
        const rootElement = document.querySelector('html');
        const browserLanguage = this.getBrowserLanguage();
        rootElement === null || rootElement === void 0 ? void 0 : rootElement.setAttribute("lang", browserLanguage);
    }
}
