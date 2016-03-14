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
  tree.on('update', e => {
    if (ignoreNext == false) {
      editor.set(tree.serialize())
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
