export class Translate {
    private _browserLanguage = "nl";

    constructor() {
        this._browserLanguage = this.getLanguageFromBrowser();
    }

    private getLanguageFromBrowser(): string {
        const browserLanguage = window.navigator.language || "en";
        const shortBrowserLanguage = browserLanguage.slice(0, 2);

        return shortBrowserLanguage;
    }

    public setLanguage(): void {
        const rootElement = document.querySelector('html');
        const browserLanguage = this._browserLanguage;

        rootElement?.setAttribute("lang", browserLanguage);
    }

    get browserLanguage() { return this._browserLanguage }
}

