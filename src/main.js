const createJsonEditor = (tree, container) => {
  let ignoreNext = false
    let options = {
      mode: 'form',
      onChange: () => {
        ignoreNext = true
          tree.deepMerge(editor.get())
      }
    }
  let editor = new JSONEditor(container, options, tree.serialize())

    let sync = true

    var expandButton = container.querySelector('.jsoneditor-expand-all')
    expandButton.parentNode.removeChild(expandButton)
    var collapseButton = container.querySelector('.jsoneditor-collapse-all')
    collapseButton.parentNode.removeChild(collapseButton)

    var menu = document.querySelector('.jsoneditor-menu')

    var syncButton = document.createElement('div')
    syncButton.setAttribute('style', `
        float: left;
        padding: 7px;
        text-transform: uppercase;
        cursor: pointer;
        font-family: Helvetica, Arial;
        font-size: 15px;
        background: #88C425;
        color: #FEFEFE;
        font-weight: bold;
    `)
    syncButton.innerText = 'Sync'
    syncButton.dataset.sync = sync
    syncButton.addEventListener('click', e => {
      if (syncButton.dataset.sync === 'true') {
        syncButton.dataset.sync = false
      syncButton.style.background = '#E3342D'
      sync = false
      } else {
        syncButton.dataset.sync = true
      syncButton.style.background = '#88C425'
      sync = true
      editor.set(tree.serialize())
      }
    })

  container.style.background = 'white'
  menu.style.cursor = 'move'
  menu.style.position = 'relative'
  menu.style.zIndex = '10'

  var el = container
  var mover = false, x, y, posx, posy, first = true;
  el.onmousedown = function(e) {
    if (e.target.getAttribute('class') === 'jsoneditor-menu') {
      mover = true;
    }
  };
  el.onmouseup = function() {
    mover = false;
    first = true;
  };
  el.onmousemove = function(e) {
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

  menu.insertBefore(syncButton, menu.firstChild)

  tree.on('update', e => {
    if (ignoreNext == false) {
      if (sync) {
        editor.set(tree.serialize())
      }
    } else {
      ignoreNext = false
    }
  })
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const baobabJsonEditor = (tree, opts) => {

  var containerId = 'baobab-jsoneditor'

    ready(() => {
      var el =  document.getElementById(containerId)
      if (el) {
        el.parentNode.removeChild(el)
      }

    var css = document.createElement('link')
      css.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.css')
      css.setAttribute('rel', 'stylesheet')
      document.head.appendChild(css)

      var jsonEditorDepsJs = document.createElement('script')
      jsonEditorDepsJs.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.js')
      document.head.appendChild(jsonEditorDepsJs)

      var jsonEditorEl = document.createElement('div')
      jsonEditorEl.setAttribute('id', containerId)
      jsonEditorEl.setAttribute('style', 'width: 400px; position: absolute; top: 10px; right: 10px;')
      document.body.appendChild(jsonEditorEl)



    })

  // Wait for JSONEditor to load
  let interval = setInterval(function () {
    if (typeof JSONEditor !== 'undefined') {
      clearInterval(interval)
    var container = document.getElementById(containerId)
    createJsonEditor(tree, container)
    }
  }, 300)

  // Module dispose logic
  if (module && module.hot) {
    module.hot.dispose(data => {
      var el = document.getElementById('jsoneditor')
      el.parentNode.removeChild(el)
    })
  }
}

if (window) {
  window.baobabJsonEditor = baobabJsonEditor
}

module.exports = baobabJsonEditor
