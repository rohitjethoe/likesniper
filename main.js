const App = require('./server/app');

(async() => {
    await App.openBrowser();
    await App.setLogin();
})()