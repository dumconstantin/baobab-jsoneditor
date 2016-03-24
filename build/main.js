/*!
 * baobab-jsoneditor - version 0.2.14 (built: 2016-03-24)
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

  var sync = true;

  var expandButton = container.querySelector('.jsoneditor-expand-all');
  expandButton.parentNode.removeChild(expandButton);
  var collapseButton = container.querySelector('.jsoneditor-collapse-all');
  collapseButton.parentNode.removeChild(collapseButton);

  var menu = document.querySelector('.jsoneditor-menu');

  var syncButton = document.createElement('div');
  syncButton.setAttribute('style', '\n        float: left;\n        padding: 7px;\n        text-transform: uppercase;\n        cursor: pointer;\n        font-family: Helvetica, Arial;\n        font-size: 15px;\n        background: #88C425;\n        color: #FEFEFE;\n        font-weight: bold;\n    ');
  syncButton.innerText = 'Sync';
  syncButton.dataset.sync = sync;
  syncButton.addEventListener('click', function (e) {
    if (syncButton.dataset.sync === 'true') {
      syncButton.dataset.sync = false;
      syncButton.style.background = '#E3342D';
      sync = false;
    } else {
      syncButton.dataset.sync = true;
      syncButton.style.background = '#88C425';
      sync = true;
      editor.set(tree.serialize());
    }
  });

  container.style.background = 'white';
  menu.style.cursor = 'move';
  menu.style.position = 'relative';
  menu.style.zIndex = '10';

  var el = container;
  var mover = false,
      x,
      y,
      posx,
      posy,
      first = true;
  el.onmousedown = function (e) {
    if (e.target.getAttribute('class') === 'jsoneditor-menu') {
      mover = true;
    }
  };
  el.onmouseup = function () {
    mover = false;
    first = true;
  };
  el.onmousemove = function (e) {
    if (mover) {
      if (first) {
        x = e.offsetX;
        y = e.offsetY;
        first = false;
      }
      posx = e.pageX - x;
      posy = e.pageY - y;
      this.style.left = posx + 'px';
      this.style.top = posy + 'px';
    }
  };

  menu.insertBefore(syncButton, menu.firstChild);

  tree.on('update', function (e) {
    if (ignoreNext == false) {
      if (sync) {
        editor.set(tree.serialize());
      }
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
      el.parentNode.removeChild(el);
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
