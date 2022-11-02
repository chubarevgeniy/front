/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar buttonSend = document.querySelector('#send-button');\nvar buttonOptions = document.querySelector('.options');\nvar mid = document.querySelector('.middle');\nform.addEventListener('submit', handleSubmit.bind(undefined));\n//form.addEventListener('keyup', handleKeyPress);\nbuttonSend.addEventListener('click', handleSendButton.bind(undefined));\nbuttonOptions.addEventListener('click', handleOptionsButton.bind(undefined));\nloadLocalStorge();\nfunction handleOptionsButton(event) {\n  clearMassegesStorage();\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var nowTime = new Date();\n  sendMessage(input.value, String(nowTime.getHours()) + \":\" + (nowTime.getMinutes() < 10 ? '0' + String(nowTime.getMinutes()) : String(nowTime.getMinutes())));\n  input.value = \"\";\n}\n\n//function handleKeyPress (event) {\n//    if (event.keyCode === 13) {\n//        event.preventDefault();\n//        form.dispatchEvent(new Event('submit'));\n//    }\n//}\n\nfunction handleSendButton(event) {\n  form.dispatchEvent(new Event('submit'));\n}\nvar Messege = /*#__PURE__*/_createClass(function Messege(text, time, owner) {\n  _classCallCheck(this, Messege);\n  this.owner = owner;\n  this.text = text;\n  this.time = time;\n});\nfunction sendMessage(text, time) {\n  var owner = \"me\";\n  if (text[0] === \"<\") {\n    owner = \"not me\";\n    text = text.slice(1);\n  }\n  var message = new Messege(text, time, owner);\n  displayMessage(message);\n  saveLocalMessage(message);\n}\nfunction loadLocalStorge() {\n  var messages = localStorage.getItem('messages');\n  if (!messages) {\n    InitMessagesStorage();\n    return;\n  }\n  messages = JSON.parse(messages);\n  var _iterator = _createForOfIteratorHelper(messages.messages),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var message = _step.value;\n      displayMessage(message);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction InitMessagesStorage() {\n  localStorage.setItem('messages', JSON.stringify({\n    'messages': []\n  }));\n}\nfunction displayMessage(message) {\n  var elem = document.createElement('div');\n  if (message.owner === \"me\") {\n    elem.className = 'message-r';\n  } else {\n    elem.className = 'message-l';\n  }\n  var elemText = document.createElement('div');\n  elemText.className = 'message-text';\n  var elemHead = document.createElement('div');\n  elemHead.className = 'message-head';\n  var elemTime = document.createElement('div');\n  elemTime.className = 'message-time';\n  var elemOwner = document.createElement('div');\n  elemOwner.className = 'message-owner';\n  elemText.innerText = message.text;\n  elemTime.innerText = message.time;\n  elemOwner.innerText = message.owner;\n  elemHead.append(elemOwner);\n  elemHead.append(elemTime);\n  elem.append(elemHead);\n  elem.append(elemText);\n  mid.insertBefore(elem, mid.firstChild);\n}\nfunction saveLocalMessage(message) {\n  var messages = JSON.parse(localStorage.getItem('messages'));\n  messages.messages.push(message);\n  localStorage.setItem('messages', JSON.stringify(messages));\n}\nfunction clearMassegesStorage() {\n  InitMessagesStorage();\n  document.location.reload();\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });