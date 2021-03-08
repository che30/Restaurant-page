/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = ()=>{\n  const listItem2 = document.createElement('div')\nlistItem2.innerHTML = 'About'\nreturn listItem2\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/About.js?");

/***/ }),

/***/ "./src/Contactus.js":
/*!**************************!*\
  !*** ./src/Contactus.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactUs)\n/* harmony export */ });\nfunction contactUs(){\n  const listItem5 = document.createElement('div')\nlistItem5.innerHTML = 'Contact us'\nreturn listItem5\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Contactus.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n  const listItem4 = document.createElement('div')\nlistItem4.innerHTML = 'Menu'\nreturn listItem4\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Services.js":
/*!*************************!*\
  !*** ./src/Services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst services = ()=>{\n  const listItem3 = document.createElement('div')\nlistItem3.innerHTML = 'Services'\nreturn listItem3\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);\n\n//# sourceURL=webpack://restaurant-page/./src/Services.js?");

/***/ }),

/***/ "./src/Tasty.js":
/*!**********************!*\
  !*** ./src/Tasty.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n const tabOne= ()=>{\n  const navHeaderLeft = document.createElement('div')\n  navHeaderLeft.innerHTML = 'Tasty'\n  return navHeaderLeft\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabOne);\n\n//# sourceURL=webpack://restaurant-page/./src/Tasty.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = ()=>{\nconst listItem1 = document.createElement('div')\nlistItem1.innerHTML = 'Home'\nreturn listItem1\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _Tasty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasty.js */ \"./src/Tasty.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.js */ \"./src/Services.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _Contactus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contactus.js */ \"./src/Contactus.js\");\n\n\n\n\n\n\nfunction homepage(){\n \nconst content = document.getElementById(\"content\");\nconst nav = document.createElement('nav')\nconst navHeaderRight = document.createElement('div')\nnavHeaderRight.classList.add('list-unstyled','d-flex','justify-content-between','w-50')\nnavHeaderRight.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)())\nnavHeaderRight.appendChild((0,_About_js__WEBPACK_IMPORTED_MODULE_3__.default)())\nnavHeaderRight.appendChild((0,_Services_js__WEBPACK_IMPORTED_MODULE_2__.default) ())\nnavHeaderRight.appendChild((0,_Menu_js__WEBPACK_IMPORTED_MODULE_4__.default)())\nnavHeaderRight.appendChild((0,_Contactus_js__WEBPACK_IMPORTED_MODULE_5__.default)())\nnav.appendChild((0,_Tasty_js__WEBPACK_IMPORTED_MODULE_0__.default)())\nnav.appendChild(navHeaderRight)\nnav.classList.add('d-flex','justify-content-around','pt-3')\ncontent.appendChild(nav)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n// import tabOne from './Tasty.js'\n// import home from './home.js'\n// import services from './Services.js'\n// import about from './About.js';\n// import menu from './Menu.js'\n// import contactUs from './Contactus.js'\n// const content = document.getElementById(\"content\");\n// const nav = document.createElement('nav')\n// const navHeaderRight = document.createElement('div')\n// navHeaderRight.classList.add('list-unstyled','d-flex','justify-content-between','w-50')\n// navHeaderRight.appendChild(home())\n// navHeaderRight.appendChild(about())\n// navHeaderRight.appendChild(services ())\n// navHeaderRight.appendChild(menu())\n// navHeaderRight.appendChild(contactUs())\n// nav.appendChild(tabOne())\n// nav.appendChild(navHeaderRight)\n// nav.classList.add('d-flex','justify-content-around','pt-3')\n// content.appendChild(nav)\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;