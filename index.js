const pkg = require('./package.json');

const showVer = () => {
    const version = pkg.version;
    console.log(`You're running Yumma CSS v${version}!`);
};

module.exports = { showVer };