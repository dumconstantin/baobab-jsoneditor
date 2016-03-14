const createJsonEditor = () => {
  let el = document.getElementById('jsoneditor')
  let ignoreNext = false
  let options = {
    mode: 'form',
    onChange: () => {
      ignoreNext = true
      tree.deepMerge(editor.get())
    }
  }
  let editor = new JSONEditor(el, options, tree.serialize())
  tree.on('update', e => {
    if (ignoreNext == false) {
      editor.set(tree.serialize())
    } else {
      ignoreNext = false
    }
  })
}

const baobabJsonEditor = (tree, opts) => {

  // Add JSONEditor dependencies
  $('body').append('<div id="jsoneditor" style="width: 400px; position: absolute; top: 10px; right: 10px;"></div>')
  $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.css">')
  $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.js"></script>')

  // Wait for JSONEditor to load
  let interval = setInterval(function () {
    if (typeof JSONEditor !== 'undefined') {
      clearInterval(interval)
      createJsonEditor()
    }
  }, 500)

  // Module dispose logic
  if (module && module.hot) {
    module.hot.dispose(data => {
      $('#jsoneditor').remove()
    })
  }
}

export { baobabJsonEditor }
export default baobabJsonEditor
