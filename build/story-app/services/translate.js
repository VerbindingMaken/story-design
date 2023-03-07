export class Translate {
    constructor() {
        this._browserLanguage = "nl";
        this._browserLanguage = this.getLanguageFromBrowser();
    }
    getLanguageFromBrowser() {
        const browserLanguage = window.navigator.language || "en";
        const shortBrowserLanguage = browserLanguage.slice(0, 2);
        return shortBrowserLanguage;
    }
    setLanguage() {
        const rootElement = document.querySelector('html');
        const browserLanguage = this._browserLanguage;
        rootElement === null || rootElement === void 0 ? void 0 : rootElement.setAttribute("lang", browserLanguage);
    }
    get browserLanguage() { return this._browserLanguage; }
}
