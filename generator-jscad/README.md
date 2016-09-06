# generator-jscad [![NPM version][npm-image]][npm-url]

> Create a jscad project

## Installation

First, install [Yeoman](http://yeoman.io) and generator-jscad using [npm](https://www.npmjs.com/) (assuming you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-jscad
```

Then generate your new project:

```bash
yo jscad
```

## Running

The jscad project uses gulp to create a `dist` directory and watches your source for changes. You can drag the `dist` directory into the drop area on [openjscad.org](http://openjscad.org). Make sure you check `Auto Reload` and any time you save, gulp will recreate the `dist` directory files and your model should refresh.

## jscad-utils

The example project uses [jscad-utils](https://www.npmjs.com/package/jscad-utils). This is a set of utilities that make object creation and alignment easier. To remove it, `npm uninstall --save jscad-utils`.

## License

ISC © [John Cole](http://github.com/johnwebbcole)

[npm-image]: https://badge.fury.io/js/generator-jscad.svg
[npm-url]: https://npmjs.org/package/generator-jscad
