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

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const contain = document.createElement('div');\n  contain.innerHTML = 'Menu';\n  contain.classList.add('tabs','borderM');\n  contain.style.cursor = 'pointer';\n  contain.setAttribute('id', 'menu__container');\n  return contain;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Nav.js":
/*!********************!*\
  !*** ./src/Nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services */ \"./src/Services.js\");\n\n\n\n\n\nconst navbar = () => {\n  const nav = document.createElement('nav');\n  nav.classList.add('d-flex', 'justify-content-around',\n    'mx-auto', 'mt-4', 'bg-warning', 'text-dark', 'rounded', 'py-2','align-items-center');\n  nav.append((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  nav.appendChild((0,_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  nav.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  nav.appendChild((0,_Services__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  document.body.style.height = '100vh';\n  document.body.style.backgroundPosition = 'center center';\n  return nav;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://restaurant-page/./src/Nav.js?");

/***/ }),

/***/ "./src/Services.js":
/*!*************************!*\
  !*** ./src/Services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst services = () => {\n  const contain = document.createElement('div');\n  contain.classList.add('tabs','borderS');\n  contain.innerHTML = 'Services';\n  contain.style.cursor = 'pointer';\n  return contain;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);\n\n\n//# sourceURL=webpack://restaurant-page/./src/Services.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n  const contain = document.createElement('div');\n  contain.innerHTML = 'About';\n  contain.classList.add('tabs','borderA');\n  contain.style.cursor = 'pointer';\n  return contain;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/bodyContain.js":
/*!****************************!*\
  !*** ./src/bodyContain.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bodyinfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyinfo */ \"./src/bodyinfo.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./src/Nav.js\");\n\n\n\nconst bodyContain = () => {\n  const root = document.getElementById('content');\n  root.appendChild((0,_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  root.appendChild((0,_bodyinfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodyContain);\n\n//# sourceURL=webpack://restaurant-page/./src/bodyContain.js?");

/***/ }),

/***/ "./src/bodyinfo.js":
/*!*************************!*\
  !*** ./src/bodyinfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst bodyInfo = () => {\n  const container = document.createElement('div');\n  const menu = document.createElement('div');\n  menu.classList.add('d-none', 'menu');\n  const about = document.createElement('div');\n  about.classList.add('d-none', 'about', 'text-center', 'pt-5', 'text-white', 'h1');\n  about.style.marginTop = '14vh';\n  const services = document.createElement('div');\n  services.classList.add('d-none', 'services', 'text-center', 'text-white', 'h1', 'bg-dark', 'pb-5');\n  about.innerHTML = 'We cook the best tasty food We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us';\n  services.innerHTML = 'We rent';\n  services.classList.add('my-3');\n  const serviceContainer = document.createElement('div');\n  serviceContainer.classList.add('d-flex', 'justify-content-center', 'flex-wrap');\n  const serviceImg1 = document.createElement('img');\n  serviceImg1.setAttribute('src', './assets/img/plates.webp');\n  serviceImg1.classList.add('bg-white');\n  const serviceImg2 = document.createElement('img');\n  serviceImg2.setAttribute('src', './assets/img/glass.webp');\n  serviceImg2.classList.add('third__image');\n  serviceImg2.classList.add('mx-3');\n  const serviceImg3 = document.createElement('img');\n  serviceImg3.classList.add('third__image');\n  serviceImg3.setAttribute('src', './assets/img/tray.webp');\n  serviceContainer.appendChild(serviceImg1);\n  serviceContainer.appendChild(serviceImg2);\n  serviceContainer.appendChild(serviceImg3);\n  services.appendChild(serviceContainer);\n\n  const gridContainer = document.createElement('div');\n  gridContainer.classList.add('container-fluid', 'bg-white', 'py-2');\n  gridContainer.style.marginTop = '10px';\n  const row = document.createElement('div');\n  row.classList.add('row');\n  row.style.padding = '10px 10px 50px 10px';\n  const columnOne = document.createElement('div');\n  columnOne.classList.add('col-6', 'd-flex', 'justify-content-center');\n  const columnTwo = document.createElement('div');\n  columnTwo.classList.add('col-6', 'd-flex', 'justify-content-center');\n  const row2 = document.createElement('div');\n  row2.classList.add('row');\n  const columnThree = document.createElement('div');\n  columnThree.classList.add('col-6', 'py-1', 'd-flex', 'justify-content-center');\n  const columnFour = document.createElement('div');\n  columnFour.classList.add('col-6', 'py-1', 'd-flex', 'justify-content-center');\n\n  row.appendChild(columnOne);\n  row.appendChild(columnTwo);\n  row2.appendChild(columnThree);\n  row2.appendChild(columnFour);\n  gridContainer.appendChild(row);\n  gridContainer.appendChild(row2);\n  menu.appendChild(gridContainer);\n  const menuImageContain = document.createElement('div');\n  menu.appendChild(menuImageContain);\n  const menuImageOne = document.createElement('img');\n\n  const holdImageOne = document.createElement('div');\n  holdImageOne.classList.add('d-flex', 'align-items-center');\n  const holdOneText = document.createElement('div');\n  holdOneText.innerHTML = '1. Tasty salad';\n  holdImageOne.appendChild(holdOneText);\n  holdImageOne.appendChild(menuImageOne);\n\n  const menuImageTwo = document.createElement('img');\n\n  const holdImageTwo = document.createElement('div');\n  holdImageTwo.classList.add('d-flex', 'align-items-center');\n  const holdTwoText = document.createElement('div');\n  holdTwoText.innerHTML = '2. Tasty salad';\n  holdImageTwo.appendChild(holdTwoText);\n  holdImageTwo.appendChild(menuImageTwo);\n\n  const menuImageThree = document.createElement('img');\n\n  const holdImageThree = document.createElement('div');\n  holdImageThree.classList.add('d-flex', 'align-items-center');\n  const holdThreeText = document.createElement('div');\n  holdThreeText.innerHTML = '3. Tasty salad';\n  holdImageThree.appendChild(holdThreeText);\n  holdImageThree.appendChild(menuImageThree);\n\n  const menuImageFour = document.createElement('img');\n\n  const holdImageFour = document.createElement('div');\n  holdImageFour.classList.add('d-flex', 'align-items-center');\n  const holdFourText = document.createElement('div');\n  holdFourText.innerHTML = '3. Tasty salad';\n  holdImageFour.appendChild(holdFourText);\n  holdImageFour.appendChild(menuImageFour);\n\n  menuImageOne.setAttribute('src', './assets/img/plate1.png');\n  menuImageOne.style.width = '40%';\n  menuImageTwo.setAttribute('src', './assets/img/home.png');\n  menuImageTwo.style.width = '40%';\n  menuImageThree.setAttribute('src', './assets/img/plate1.png');\n  menuImageThree.style.width = '40%';\n  menuImageFour.setAttribute('src', './assets/img/home.png');\n  menuImageFour.style.width = '40%';\n  columnOne.appendChild(holdImageOne);\n  columnTwo.appendChild(holdImageTwo);\n  columnThree.appendChild(holdImageThree);\n  columnFour.appendChild(holdImageFour);\n  container.appendChild(menu);\n  container.appendChild(about);\n  container.appendChild(services);\n  return container;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodyInfo);\n\n//# sourceURL=webpack://restaurant-page/./src/bodyinfo.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n  const mainDiv = document.createElement('div');\n  const home = document.createElement('div');\n  home.classList.add('tabs', 'borderH');\n  home.innerHTML = 'Home';\n  mainDiv.appendChild(home);\n  home.style.cursor = 'pointer';\n  document.body.style.backgroundImage = \"url('./assets/img/restaurant_background.avif')\";\n  document.body.style.backgroundRepeat = 'no-repeat';\n  document.body.style.backgroundSize = 'cover';\n  return mainDiv;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bodyContain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyContain */ \"./src/bodyContain.js\");\n/* eslint-disable import/extensions */\n\n\n(0,_bodyContain__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst tabs = document.getElementsByClassName('tabs');\nconst menuBorder = document.querySelector('.borderH');\nconst menuBorderM = document.querySelector('.borderM');\nconst menuBorderA = document.querySelector('.borderA');\nconst menuBorderS = document.querySelector('.borderS');\nmenuBorder.style.border = '2px solid black';\nmenuBorder.classList.add('rounded','p-2');\nmenuBorder.style.borderStyle = 'dotted';\nfor (let i = 0; i < tabs.length; i += 1) {\n  tabs[i].addEventListener('click', () => {\n    switch (tabs[i].innerHTML) {\n      case 'Menu':\n        document.querySelector('.menu').classList.remove('d-none');\n        document.querySelector('.about').classList.remove('d-block');\n        document.querySelector('.services').classList.remove('d-block');\n        document.querySelector('.about').classList.add('d-none');\n        document.querySelector('.services').classList.add('d-none');\n        document.querySelector('.borderH').style.border = 'none';\n        menuBorderM.style.border = '2px solid black';\n        menuBorderM.classList.add('rounded','p-2');\n        menuBorderM.style.borderStyle = 'dotted';\n        document.querySelector('.borderA').style.border = 'none';\n        document.querySelector('.borderS').style.border = 'none';\n        break;\n      case 'About':\n        document.querySelector('.about').classList.remove('d-none');\n        document.querySelector('.menu').classList.remove('d-block');\n        document.querySelector('.services').classList.remove('d-block');\n        document.querySelector('.menu').classList.add('d-none');\n        document.querySelector('.services').classList.add('d-none');\n        menuBorderA.style.border = '2px solid black';\n        menuBorderA.classList.add('rounded','p-2');\n        menuBorderA.style.borderStyle = 'dotted';\n        document.querySelector('.borderM').style.border = 'none';\n        document.querySelector('.borderH').style.border = 'none';\n        document.querySelector('.borderS').style.border = 'none';\n        break;\n      case 'Services':\n        document.querySelector('.menu').classList.remove('d-block');\n        document.querySelector('.about').classList.remove('d-block');\n        document.querySelector('.menu').classList.add('d-none');\n        document.querySelector('.about').classList.add('d-none');\n        document.querySelector('.services').classList.remove('d-none');\n        document.querySelector('.borderM').style.border = 'none';\n        document.querySelector('.borderH').style.border = 'none';\n        document.querySelector('.borderA').style.border = 'none';\n        menuBorderS.style.border = '2px solid black';\n        menuBorderS.classList.add('rounded','p-2');\n        menuBorderS.style.borderStyle = 'dotted';\n        break;\n      case 'Home':\n        menuBorder.style.border = '2px solid black';\n        menuBorder.style.borderStyle = 'dotted';\n        document.querySelector('.menu').classList.remove('d-block');\n        document.querySelector('.about').classList.remove('d-block');\n        document.querySelector('.services').classList.remove('d-block');\n        document.querySelector('.menu').classList.add('d-none');\n        document.querySelector('.about').classList.add('d-none');\n        document.querySelector('.services').classList.add('d-none');\n        document.querySelector('.borderM').style.border = 'none';\n        document.querySelector('.borderA').style.border = 'none';\n        document.querySelector('.borderS').style.border = 'none';\n        break;\n      default:\n        document.querySelector('.menu').classList.add('d-none');\n        document.querySelector('.about').classList.add('d-none');\n        document.querySelector('.services').classList.add('d-none');\n    }\n  });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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