const puppeteer = require('puppeteer-firefox');

const App = {
    browser: null,
    page: null,
    openBrowser: async () => {
        this.browser = await puppeteer.launch({
            headless: false
        });
        this.app = await this.browser.newPage();
        await this.app.goto('https://instagram.com', { delay: 500 });
    },
    setLogin: async (username) => {
        await this.page.type('input[name="username"]', username);
    }
}

module.exports = App;