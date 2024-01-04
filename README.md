# Yumma CSS

<img src="https://i.ibb.co/4ZNLWYj/app-icon.jpg"  width="50" height="50">

Yumma CSS, created by **Renildo Pereira**, is a lightweight and streamlined CSS library that provides a comprehensive set of tools and functionalities to simplify web development.

## Installation
You can include Yumma CSS in your project either by using our Content Delivery Network (CDN) link or by using a package manager.

### Integrate via CDN
```html
<link rel="stylesheet" href="https://unpkg.com/yummacss/public/css/yumma.min.css" crossorigin="anonymous">
```

### Install via NPM
```
npm install yummacss
```

## Version Display
To display the Yumma CSS version in your console, import the following code snippet and call the `showVer` function:

```js
const packageJson = require('./package.json');

const showVer = () => {
    const version = packageJson.version;
    console.log(`You're running Yumma CSS v${version}!`);
};

module.exports = { showVer };
```

### How to use
To display the Yumma CSS version in your console, just call the `showVer` function in your project code:

```js
const { showVer } = require('./index');
```

## Documentation
For comprehensive documentation, visit the [Yumma CSS Docs](https://yummacss.vercel.app/).

## License
Yumma CSS is open-source software licensed under the MIT License.

## Support

If you have questions or want to stay updated on our projects, here are some ways to connect with us:

- Join our [Discord](https://discord.gg/CGw5vyqmQ6) server.
- Follow us on [Twitter](https://twitter.com/yummacss) for the latest updates.

If you'd like to show your support for our work, [you can buy me a coffee](https://www.buymeacoffee.com/rrenildoo).
