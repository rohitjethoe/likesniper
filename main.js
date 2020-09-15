const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const App = require('./server/app');

let user = {
    username: null,
    password: null,
    hashtag: null
}

const fetchUsername = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter your username: ', answer => {
            user.username = answer;
            resolve();
        });
    });
}

const fetchPassword = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter your password: ', answer => {
            user.password = answer;
            resolve();
        });
    });
}

const fetchHashtag = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter your hashtag: ', answer => {
            user.hashtag = answer;
            resolve();
        });
    });
}

const runBot = () => {
    return new Promise((resolve, reject) => {
        readline.question('\nRun the instagram bot? (y/n) ', async answer => {
            if (answer === "y") {
                await App.openBrowser();
                await App.setLogin(user.username, user.password);
                await App.openHashtag(user.hashtag);
                
                let count = 0;

                setInterval(() => {
                    App.likePosts();
                    
                    count++;
                    console.log(`👍 Liked ${count} posts. `);
                }, 10001);
            } else {
                console.log('Cancelling execution... :(');
            }
        });
    })
}

(async() => {
    await fetchUsername();
    await fetchPassword();
    await fetchHashtag();
    await runBot();
})()