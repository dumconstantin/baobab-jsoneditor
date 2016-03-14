var baobabJsonEditor = require('./src/main.js')
var Baobab = require('baobab')

var tree = new Baobab({
  
})

var tree = new Baobab({
  "colors": [{
    "colorName":"red",
    "hexValue":"#f00"
    },
    {
      "colorName":"blue",
    "hexValue":"#00f"
    },
    {
      "colorName":"cyan",
    "hexValue":"#0ff"
    },
    {
      "colorName":"magenta",
    "hexValue":"#f0f"
    }
  ],
  story: {
    title: 'Little Prince',
    author: 'Antoine de Saint-Exupéry',
    color: 2
  }
})

var el = document.createElement('div')

document.body.appendChild(el)


function render() {
  var story = tree.select('story')
  var colors = tree.select('colors').get()

  var storyHTML = `<div style="font-size: 20px; margin: 20px">The story "<strong style="background-color:${tree.select('colors', story.select('color').get(), 'hexValue').get()}">${story.select('title').get()}</strong>" was written by "${story.select('author').get()}"</div>`
  var colorsHTML = colors.reduce(function (acc, color) {
    acc += `<div style="background: ${color.hexValue}; color: #fff; text-align:center; width: 120px; padding: 30px 0 30px 0; font-size: 20px; text-transform: uppercase; font-weight: bold; font-family: Helvetica; float:left; margin-left: 10px;"><strong>${color.colorName}</strong></div>`
    return acc
  }, '')

  var content = storyHTML + colorsHTML

  el.innerHTML = content

}

tree.on('update', render)

render()

window.tree = tree

baobabJsonEditor(tree)
