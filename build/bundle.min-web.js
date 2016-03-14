/*!
 * baobab-jsoneditor - version 0.2.3 (built: 2016-03-14)
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
function(e,t,n){(function(e){"use strict";function t(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}var n=function(e,t){var n=!1,o={mode:"form",onChange:function(){n=!0,e.deepMerge(r.get())}},r=new JSONEditor(t,o,e.serialize());e.on("update",function(t){0==n?r.set(e.serialize()):n=!1})},o=function(o,r){var d="baobab-jsoneditor";t(function(){var e=document.createElement("link");e.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.css"),e.setAttribute("rel","stylesheet"),document.head.appendChild(e);var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.1.5/jsoneditor.js"),document.head.appendChild(t);var n=document.createElement("div");n.setAttribute("id",d),n.setAttribute("style","width: 400px; position: absolute; top: 10px; right: 10px;"),document.body.appendChild(n)});var i=setInterval(function(){if("undefined"!=typeof JSONEditor){clearInterval(i);var e=document.getElementById(d);n(o,e)}},300);e&&e.hot&&e.hot.dispose(function(e){var t=document.getElementById("jsoneditor");t.parentNode.removeChild(t)})};window&&(window.baobabJsonEditor=o),e.exports=o}).call(t,n(1)(e))},/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}]);
//# sourceMappingURL=bundle.min-web.js.map