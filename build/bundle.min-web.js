/*!
 * baobab-jsoneditor - version 0.2.14 (built: 2016-03-24)
 *
 *   A devtool UI widget that shows BaobabJS in a nicely formated JSON Editor
 *
 * git: https://github.com/dumconstantin/baobab-jsoneditor
 * Copyright © 2016, Constantin Dumitrescu <dum.constantin@gmail.com> (https://github.com/dumconstantin)
 * License: MIT
 */

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function(e,t,n){(function(e){"use strict";function t(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}var n=function(e,t){var n=!1,o={mode:"form",onChange:function(){n=!0,e.deepMerge(r.get())}},r=new JSONEditor(t,o,e.serialize()),i=!0,d=t.querySelector(".jsoneditor-expand-all");d.parentNode.removeChild(d);var a=t.querySelector(".jsoneditor-collapse-all");a.parentNode.removeChild(a);var s=document.querySelector(".jsoneditor-menu"),c=document.createElement("div");c.setAttribute("style","\n        float: left;\n        padding: 7px;\n        text-transform: uppercase;\n        cursor: pointer;\n        font-family: Helvetica, Arial;\n        font-size: 15px;\n        background: #88C425;\n        color: #FEFEFE;\n        font-weight: bold;\n    "),c.innerText="Sync",c.dataset.sync=i,c.addEventListener("click",function(t){"true"===c.dataset.sync?(c.dataset.sync=!1,c.style.background="#E3342D",i=!1):(c.dataset.sync=!0,c.style.background="#88C425",i=!0,r.set(e.serialize()))}),t.style.background="white",s.style.cursor="move",s.style.position="relative",s.style.zIndex="10";var l,u,p,f,m=t,v=!1,y=!0;m.onmousedown=function(e){"jsoneditor-menu"===e.target.getAttribute("class")&&(v=!0)},m.onmouseup=function(){v=!1,y=!0},m.onmousemove=function(e){v&&(y&&(l=e.offsetX,u=e.offsetY,y=!1),p=e.pageX-l,f=e.pageY-u,this.style.left=p+"px",this.style.top=f+"px")},s.insertBefore(c,s.firstChild),e.on("update",function(t){0==n?i&&r.set(e.serialize()):n=!1})},o=function(o,r){var i="baobab-jsoneditor";t(function(){var e=document.getElementById(i);e&&e.parentNode.removeChild(e);var t=document.createElement("link");t.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.css"),t.setAttribute("rel","stylesheet"),document.head.appendChild(t);var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.js"),document.head.appendChild(n);var o=document.createElement("div");o.setAttribute("id",i),o.setAttribute("style","width: 400px; position: absolute; top: 10px; right: 10px;"),document.body.appendChild(o)});var d=setInterval(function(){if("undefined"!=typeof JSONEditor){clearInterval(d);var e=document.getElementById(i);n(o,e)}},300);e&&e.hot&&e.hot.dispose(function(e){var t=document.getElementById("jsoneditor");t.parentNode.removeChild(t)})};window&&(window.baobabJsonEditor=o),e.exports=o}).call(t,n(1)(e))},/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}]);
//# sourceMappingURL=bundle.min-web.js.map