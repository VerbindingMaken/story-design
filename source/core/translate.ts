export class Translate {

    constructor() { }

    private getBrowserLanguage(): string {
        const browserLanguage = window.navigator.language || "en";
        const shortBrowserLanguage = browserLanguage.slice(0, 2);

        return shortBrowserLanguage;
    }

    public setLanguage(): void {
        const rootElement = document.querySelector('html');
        const browserLanguage = this.getBrowserLanguage();

        rootElement?.setAttribute("lang", browserLanguage);
    }
}

