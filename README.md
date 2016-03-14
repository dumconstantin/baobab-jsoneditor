# baobab-jsoneditor
### A browser devtool that shows BaobabJS in a nicely formated JSON Editor widget

![Baobab JSON Editor integration](baobab-jsoneditor.png?raw=true)

## Install:
Via CDN, just include in the head or your HTML document:
```html
<script src="https://rawgit.com/dumconstantin/baobab-jsoneditor/master/build/bundle.min-web.js"></script>
```
Or Via NPM:
```bash
$ npm install --save-dev baobab-jsoneditor
```

## Usage:
Just include the module where your Baobab tree lies:
```javascript
var baobabJsonEditor = require('baobab-jsoneditor')

var tree = new Baobab({
  foo: {
    bar: 123
  }
})

baobabJsonEditor(tree)
```

## Credits
https://github.com/josdejong/jsoneditor - For an excelent and simple to use JsonEditor widget
https://github.com/Yomguithereal/baobab - For building an awesome state library

## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)

