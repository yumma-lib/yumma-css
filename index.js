const packageJson = require('./package.json');

const greet = () => {
    const version = packageJson.version;
    console.log(`Welcome to Yumma CSS v${version}`);
    console.log("🎉 Let's make your web project look delicious! 🍇");
};

module.exports = { greet };