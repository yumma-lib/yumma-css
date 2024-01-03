const packageJson = require('./package.json');

const showVer = () => {
    const version = packageJson.version;
    console.log(`You're running Yumma CSS v${version}!`);
};

module.exports = { showVer };