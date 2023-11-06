const packageJson = require('./package.json');

const greet = () => {
    const version = packageJson.version;
    console.log(`You're running Yumma CSS v${version}`);
};

module.exports = { greet };