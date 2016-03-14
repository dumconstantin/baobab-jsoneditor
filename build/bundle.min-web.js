/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************!*\
  !*** ./src/baobab-jsoneditor.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 1)(module)))

/***/ },
/* 1 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.min-web.js.map