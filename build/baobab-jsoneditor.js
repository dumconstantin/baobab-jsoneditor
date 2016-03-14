/*
 * Baobab-JsonEditor
 *
 * Homepage: https://github.com/dumconstantin/baobab-jsoneditor
 * Version: 0.1.0
 * Author: dumconstantin (Dumitrescu Constantin)
 * License: MIT
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createJsonEditor = function createJsonEditor() {
  var el = document.getElementById('jsoneditor');
  var ignoreNext = false;
  var options = {
    mode: 'form',
    onChange: function onChange() {
      ignoreNext = true;
      tree.deepMerge(editor.get());
    }
  };
  var editor = new JSONEditor(el, options, tree.serialize());
  tree.on('update', function (e) {
    if (ignoreNext == false) {
      editor.set(tree.serialize());
    } else {
      ignoreNext = false;
    }
  });
};

var baobabJsonEditor = function baobabJsonEditor(tree, opts) {

  // Add JSONEditor dependencies
  $('body').append('<div id="jsoneditor" style="width: 400px; position: absolute; top: 10px; right: 10px;"></div>');
  $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.css">');
  $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.js"></script>');

  // Wait for JSONEditor to load
  var interval = setInterval(function () {
    if (typeof JSONEditor !== 'undefined') {
      clearInterval(interval);
      createJsonEditor();
    }
  }, 500);

  // Module dispose logic
  if (module && module.hot) {
    module.hot.dispose(function (data) {
      $('#jsoneditor').remove();
    });
  }
};

exports.baobabJsonEditor = baobabJsonEditor;
exports.default = baobabJsonEditor;
//# sourceMappingURL=baobab-jsoneditor.js.map
