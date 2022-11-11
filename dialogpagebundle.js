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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/dialogpage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img sync \\.(png|jpg|svg)$":
/*!************************************************!*\
  !*** ./img sync nonrecursive \.(png|jpg|svg)$ ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./free-icon-clear-6888231.png\": \"./img/free-icon-clear-6888231.png\",\n\t\"./free-icon-clear-7538598.png\": \"./img/free-icon-clear-7538598.png\",\n\t\"./free-icon-technology-995332.png\": \"./img/free-icon-technology-995332.png\",\n\t\"./free-icon-transparency-1046112.png\": \"./img/free-icon-transparency-1046112.png\",\n\t\"./profile.png\": \"./img/profile.png\",\n\t\"./senden (1).png\": \"./img/senden (1).png\",\n\t\"./senden.png\": \"./img/senden.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./img sync \\\\.(png|jpg|svg)$\";\n\n//# sourceURL=webpack:///./img_sync_nonrecursive_\\.(png%7Cjpg%7Csvg)$?");

/***/ }),

/***/ "./img/free-icon-clear-6888231.png":
/*!*****************************************!*\
  !*** ./img/free-icon-clear-6888231.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/free-icon-clear-6888231.png\");\n\n//# sourceURL=webpack:///./img/free-icon-clear-6888231.png?");

/***/ }),

/***/ "./img/free-icon-clear-7538598.png":
/*!*****************************************!*\
  !*** ./img/free-icon-clear-7538598.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/free-icon-clear-7538598.png\");\n\n//# sourceURL=webpack:///./img/free-icon-clear-7538598.png?");

/***/ }),

/***/ "./img/free-icon-technology-995332.png":
/*!*********************************************!*\
  !*** ./img/free-icon-technology-995332.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/free-icon-technology-995332.png\");\n\n//# sourceURL=webpack:///./img/free-icon-technology-995332.png?");

/***/ }),

/***/ "./img/free-icon-transparency-1046112.png":
/*!************************************************!*\
  !*** ./img/free-icon-transparency-1046112.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/free-icon-transparency-1046112.png\");\n\n//# sourceURL=webpack:///./img/free-icon-transparency-1046112.png?");

/***/ }),

/***/ "./img/profile.png":
/*!*************************!*\
  !*** ./img/profile.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/profile.png\");\n\n//# sourceURL=webpack:///./img/profile.png?");

/***/ }),

/***/ "./img/senden (1).png":
/*!****************************!*\
  !*** ./img/senden (1).png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/senden (1).png\");\n\n//# sourceURL=webpack:///./img/senden_(1).png?");

/***/ }),

/***/ "./img/senden.png":
/*!************************!*\
  !*** ./img/senden.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/senden.png\");\n\n//# sourceURL=webpack:///./img/senden.png?");

/***/ }),

/***/ "./scripts/dialogpage.js":
/*!*******************************!*\
  !*** ./scripts/dialogpage.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_messagepage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/messagepage.css */ \"./styles/messagepage.css\");\n/* harmony import */ var _styles_messagepage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_messagepage_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction importAll(r) {\n  return r.keys().map(r);\n}\nvar images = importAll(__webpack_require__(\"./img sync \\\\.(png|jpg|svg)$\"));\nvar adddialog = document.querySelector('.bottom-button');\n\n//# sourceURL=webpack:///./scripts/dialogpage.js?");

/***/ }),

/***/ "./styles/messagepage.css":
/*!********************************!*\
  !*** ./styles/messagepage.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/messagepage.css?");

/***/ })

/******/ });