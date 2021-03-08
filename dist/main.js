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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = ()=>{\nconst listItem1 = document.createElement('div')\nconst link = document.createElement('a')\nlink.setAttribute(\"class\",\"nav-link active\")\nlink.href = '#'\nconst t= document.createTextNode('home')\n// listItem1.innerHTML = 'Home'\nlink.appendChild(t)\nlistItem1.appendChild(link)\nreturn listItem1\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tasty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasty.js */ \"./src/Tasty.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.js */ \"./src/Services.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _Contactus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contactus.js */ \"./src/Contactus.js\");\n \n \n \n \n \n \n const content = document.getElementById(\"content\");\n const nav = document.createElement('nav')\n const navHeaderRight = document.createElement('div')\n navHeaderRight.classList.add('list-unstyled','d-flex','justify-content-between','w-50')\n navHeaderRight.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)())\n navHeaderRight.appendChild((0,_About_js__WEBPACK_IMPORTED_MODULE_3__.default)())\n navHeaderRight.appendChild((0,_Services_js__WEBPACK_IMPORTED_MODULE_2__.default) ())\n navHeaderRight.appendChild((0,_Menu_js__WEBPACK_IMPORTED_MODULE_4__.default)())\n navHeaderRight.appendChild((0,_Contactus_js__WEBPACK_IMPORTED_MODULE_5__.default)())\n nav.appendChild((0,_Tasty_js__WEBPACK_IMPORTED_MODULE_0__.default)())\n nav.appendChild(navHeaderRight)\n nav.classList.add('d-flex','justify-content-around','pt-3')\n content.appendChild(nav)\n// import homepage from './homepage.js'\n// homepage()\nconst secton1 = document.createElement('section')\nsecton1.classList.add('d-flex','justify-content-around','mt-5')\nconst cardContaner = document.createElement('div')\ncardContaner.classList.add('d-flex','flex-column')\nconst h1= document.createElement('h1')\nh1.innerHTML = 'Tasty food'\nconst h2 = document.createElement('h2')\nh2.innerHTML = 'Try the best food of the week'\nconst button = document.createElement('button')\nconst buttonText = document.createTextNode('view menu')\nbutton.appendChild(buttonText)\nbutton.classList.add('btn','btn-success','py-2','w-25')\n const img1 = document.createElement('img')\n img1.setAttribute(\"src\",'/assets/img/plate1.png')\n const section2 = document.createElement('h3')\n section2.classList.add('text-center','my-4')\n section2.innerText = \"Menu of the week\"\n//  creating 3 cards\nconst section3 = document.createElement('section')\nsection3.classList.add('d-flex','justify-content-around')\nconst cc1 = document.createElement('div')\ncc1.classList.add('card')\nconst img2 = document.createElement('img')\nimg2.setAttribute(\"src\",'/assets/img/plate1.png') \nimg2.classList.add(\"card-img-top\")\nconst cb1 = document.createElement('div')\ncb1.classList.add('card-body')\nconst cc1h5 = document.createElement('h5')\ncc1h5.innerText = 'some good foot'\ncc1h5.classList.add('card-title')\nconst cc1p1 = document.createElement('p')\ncc1p1.classList.add('card-text')\ncc1p1.innerHTML = 'trying something'\nconst cc1a1 = document.createElement('a')\ncc1a1.classList.add('btn','btn-primary')\ncc1a1.innerText = 'order'\ncc1.appendChild(img2)\ncc1.appendChild(cb1)\ncb1.appendChild(cc1h5)\ncb1.appendChild(cc1p1)\ncb1.appendChild(cc1a1)\n\nsection3.appendChild(cc1)\n\ncardContaner.appendChild(h1)\ncardContaner.appendChild(h2)\ncardContaner.appendChild(button)\nsecton1.appendChild(cardContaner)\nsecton1.appendChild(img1)\ncontent.appendChild(secton1)\ncontent.appendChild(section2)\ncontent.appendChild(section3)\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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