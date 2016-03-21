/*!
 * baobab-jsoneditor - version 0.2.11 (built: 2016-03-21)
 *
 *   A devtool UI widget that shows BaobabJS in a nicely formated JSON Editor
 *
 * git: https://github.com/dumconstantin/baobab-jsoneditor
 * Copyright © 2016, Constantin Dumitrescu <dum.constantin@gmail.com> (https://github.com/dumconstantin)
 * License: MIT
 */
'use strict';

var createJsonEditor = function createJsonEditor(tree, container) {
  var ignoreNext = false;
  var options = {
    mode: 'form',
    onChange: function onChange() {
      ignoreNext = true;
      tree.deepMerge(editor.get());
    }
  };
  var editor = new JSONEditor(container, options, tree.serialize());
  tree.on('update', function (e) {
    if (ignoreNext == false) {
      editor.set(tree.serialize());
    } else {
      ignoreNext = false;
    }
  });
};

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var baobabJsonEditor = function baobabJsonEditor(tree, opts) {

  var containerId = 'baobab-jsoneditor';

  ready(function () {
    var el = document.getElementById(containerId);
    if (el) {
      el.parent().removeChild(el);
    }

    var css = document.createElement('link');
    css.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.css');
    css.setAttribute('rel', 'stylesheet');
    document.head.appendChild(css);

    var jsonEditorDepsJs = document.createElement('script');
    jsonEditorDepsJs.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.js');
    document.head.appendChild(jsonEditorDepsJs);

    var jsonEditorEl = document.createElement('div');
    jsonEditorEl.setAttribute('id', containerId);
    jsonEditorEl.setAttribute('style', 'width: 400px; position: absolute; top: 10px; right: 10px;');
    document.body.appendChild(jsonEditorEl);
  });

  // Wait for JSONEditor to load
  var interval = setInterval(function () {
    if (typeof JSONEditor !== 'undefined') {
      clearInterval(interval);
      var container = document.getElementById(containerId);
      createJsonEditor(tree, container);
    }
  }, 300);

  // Module dispose logic
  if (module && module.hot) {
    module.hot.dispose(function (data) {
      var el = document.getElementById('jsoneditor');
      el.parentNode.removeChild(el);
    });
  }
};

if (window) {
  window.baobabJsonEditor = baobabJsonEditor;
}

module.exports = baobabJsonEditor;
//# sourceMappingURL=main.js.map
