const puppeteer = require('puppeteer-firefox');

const App = {
    url: 'https://www.instagram.com',
    browser: null,
    page: null,
    openBrowser: async () => {
        App.browser = await puppeteer.launch({
            headless: false
        });
        App.page = await App.browser.newPage();
        await App.page.goto(App.url);
        await App.page.waitFor('input[name="username"]');
    },
    setLogin: async (username, password) => {
        await App.page.type('input[name="username"]', username, { delay: Math.random * 10 });
        await App.page.type('input[name="password"]', password, { delay: Math.random * 10 });
        await App.page.click('.L3NKy', { delay: Math.random * 10 });
    }
}

module.exports = App;