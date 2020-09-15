const puppeteer = require('puppeteer-firefox');

const App = {
    url: 'https://www.instagram.com',
    browser: null,
    page: null,
    openBrowser: async () => {
        App.browser = await puppeteer.launch({
            headless: true
        });
        App.page = await App.browser.newPage();
        await App.page.goto(App.url);
        await App.page.waitFor('input[name="username"]');
    },
    setLogin: async (username, password) => {
        await App.page.type('input[name="username"]', username, { delay: Math.random * 10 });
        await App.page.type('input[name="password"]', password, { delay: Math.random * 10 });
        
        await App.page.click('.L3NKy', { delay: Math.random * 10 });
        
        await App.page.waitFor('.Fifk5');
    },
    openHashtag: async (hashtag) => {
        await App.page.goto(`https://www.instagram.com/explore/tags/${hashtag}/`);

        await App.page.waitFor('.Fifk5');

        await App.page.evaluate(() => {
            document.querySelectorAll('._9AhH0')[9].click();
        });
    },
    likePosts: async () => {
        await App.page.click(".ltpMr span button");

        await App.page.waitFor(Math.random * 10);

        await App.page.evaluate(() => {
            document.querySelector('.coreSpriteRightPaginationArrow').click();
        });
    }
}

module.exports = App;