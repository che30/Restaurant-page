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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n  const container = document.createElement('div');\n  container.classList.add('d-none', 'about__1', 'flex-column', 'justify-content-center', 'mt-5', 'text-center');\n  const h1 = document.createElement('h1');\n  h1.innerHTML = 'About us';\n  h1.classList.add('text-success');\n  const h2 = document.createElement('h2');\n  h2.innerHTML = 'We cook the best  tasty food';\n  const h3 = document.createElement('h3');\n  h3.innerHTML = 'We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us';\n  h3.style.color = 'violet';\n  container.appendChild(h1);\n  container.appendChild(h2);\n  container.appendChild(h3);\n  // const about = document.querySelector('#abt');\n\n  return container;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/About.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  const section = document.createElement('section');\n  section.classList.add('mt-5', 'd-none', 'menu__1', 'flex-column');\n  const h1 = document.createElement('h1');\n  h1.classList.add('text-center');\n  h1.innerHTML = 'Menu of the week';\n  section.appendChild(h1);\n  const section1 = document.createElement('section');\n  section1.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'mt-5');\n  const cc1 = document.createElement('div');\n  cc1.classList.add('card', 'text-center');\n  const img2 = document.createElement('img');\n  img2.setAttribute('src', '/assets/img/plate1.png');\n  img2.classList.add('card-img-top');\n  const cb1 = document.createElement('div');\n  cb1.classList.add('card-body');\n  const cc1h5 = document.createElement('h5');\n  cc1h5.innerText = 'some good foot';\n  cc1h5.classList.add('card-title');\n  const cc1p1 = document.createElement('p');\n  cc1p1.classList.add('card-text');\n  cc1p1.innerHTML = 'trying something';\n  const cc1a1 = document.createElement('a');\n  cc1a1.classList.add('btn', 'btn-primary');\n  cc1a1.innerText = 'order';\n  cc1.appendChild(img2);\n  cc1.appendChild(cb1);\n  cb1.appendChild(cc1h5);\n  cb1.appendChild(cc1p1);\n  cb1.appendChild(cc1a1);\n  section1.appendChild(cc1);\n  // second item\n  const cc2 = document.createElement('div');\n  cc2.classList.add('card', 'text-center');\n  const img3 = document.createElement('img');\n  img3.setAttribute('src', '/assets/img/plate1.png');\n  img3.classList.add('card-img-top');\n  const cb2 = document.createElement('div');\n  cb2.classList.add('card-body');\n  const cc2h5 = document.createElement('h5');\n  cc2h5.innerText = 'some good foot';\n  cc2h5.classList.add('card-title');\n  const cc2p1 = document.createElement('p');\n  cc2p1.classList.add('card-text');\n  cc2p1.innerHTML = 'trying something';\n  const cc2a1 = document.createElement('a');\n  cc2a1.classList.add('btn', 'btn-primary');\n  cc2a1.innerText = 'order';\n  cc2.appendChild(img3);\n  cc2.appendChild(cb2);\n  cb2.appendChild(cc2h5);\n  cb2.appendChild(cc2p1);\n  cb2.appendChild(cc2a1);\n  section1.appendChild(cc2);\n  // third item\n  const cc3 = document.createElement('div');\n  cc3.classList.add('card', 'text-center');\n  const img4 = document.createElement('img');\n  img4.setAttribute('src', '/assets/img/plate1.png');\n  img4.classList.add('card-img-top');\n  const cb3 = document.createElement('div');\n  cb3.classList.add('card-body');\n  const cc3h5 = document.createElement('h5');\n  cc3h5.innerText = 'some good foot';\n  cc3h5.classList.add('card-title');\n  const cc3p1 = document.createElement('p');\n  cc3p1.classList.add('card-text');\n  cc3p1.innerHTML = 'trying something';\n  const cc3a1 = document.createElement('a');\n  cc3a1.classList.add('btn', 'btn-primary');\n  cc3a1.innerText = 'order';\n  cc3.appendChild(img4);\n  cc3.appendChild(cb3);\n  cb3.appendChild(cc3h5);\n  cb3.appendChild(cc3p1);\n  cb3.appendChild(cc3a1);\n  section1.appendChild(cc3);\n  section.appendChild(section1);\n\n  return section;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Services.js":
/*!*************************!*\
  !*** ./src/Services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst services = () => {\n  const container = document.createElement('div');\n  container.classList.add('d-none', 'flex-column', 'align-items-center', 'align-content-center', 'justify-content-around', 'servbody', 'mt-5');\n  const h1 = document.createElement('h1');\n  h1.innerHTML = 'offerring';\n  h1.classList.add('text-success');\n  h1.style.fontSize = '1.2rem';\n  const h2 = document.createElement('h2');\n  h2.innerHTML = 'Our amazing services';\n  h2.classList.add('display-5', 'text-bold');\n\n  const section = document.createElement('section');\n  section.classList.add('d-flex', 'justify-content-around', 'flex-wrap');\n\n  const cc1 = document.createElement('div');\n  cc1.classList.add('card', 'text-center');\n  const img2 = document.createElement('img');\n  img2.setAttribute('src', '/assets/img/dish.svg');\n  img2.classList.add('card-img-top');\n  img2.style.margin = '20% 0 0 40%';\n  img2.style.fill = 'green';\n  const cb1 = document.createElement('div');\n  cb1.classList.add('card-body');\n  const cc1h5 = document.createElement('h5');\n  cc1h5.innerText = 'some good foot';\n  cc1h5.classList.add('card-title');\n  const cc1p1 = document.createElement('p');\n  cc1p1.classList.add('card-text');\n  cc1p1.innerHTML = 'trying something';\n  const cc1a1 = document.createElement('a');\n  cc1a1.classList.add('btn', 'btn-primary');\n  cc1a1.innerText = 'order';\n  cc1.appendChild(img2);\n  cc1.appendChild(cb1);\n  cb1.appendChild(cc1h5);\n  cb1.appendChild(cc1p1);\n  cb1.appendChild(cc1a1);\n  container.appendChild(h1);\n  container.appendChild(h2);\n  section.appendChild(cc1);\n  // second\n  const cc2 = document.createElement('div');\n  cc2.classList.add('card', 'text-center');\n  const img3 = document.createElement('img');\n  img3.setAttribute('src', '/assets/img/dish.svg');\n  img3.classList.add('card-img-top');\n  img3.style.margin = '20% 0 0 40%';\n  const cb2 = document.createElement('div');\n  cb2.classList.add('card-body');\n  const cc2h5 = document.createElement('h5');\n  cc2h5.innerText = 'some good foot';\n  cc2h5.classList.add('card-title');\n  const cc2p1 = document.createElement('p');\n  cc2p1.classList.add('card-text');\n  cc2p1.innerHTML = 'trying something';\n  const cc2a1 = document.createElement('a');\n  cc2a1.classList.add('btn', 'btn-primary');\n  cc2a1.innerText = 'order';\n  cc2.appendChild(img3);\n  cc2.appendChild(cb2);\n  cb2.appendChild(cc2h5);\n  cb2.appendChild(cc2p1);\n  cb2.appendChild(cc2a1);\n  section.appendChild(cc2);\n  // third\n  const cc3 = document.createElement('div');\n  cc3.classList.add('card', 'text-center');\n  const img4 = document.createElement('img');\n  img4.setAttribute('src', '/assets/img/dish.svg');\n  img4.classList.add('card-img-top');\n  img4.style.margin = '20% 0 0 40%';\n  const cb3 = document.createElement('div');\n  cb3.classList.add('card-body');\n  const cc3h5 = document.createElement('h5');\n  cc3h5.innerText = 'some good foot';\n  cc3h5.classList.add('card-title');\n  const cc3p1 = document.createElement('p');\n  cc3p1.classList.add('card-text');\n  cc3p1.innerHTML = 'trying something';\n  const cc3a1 = document.createElement('a');\n  cc3a1.classList.add('btn', 'btn-primary');\n  cc3a1.innerText = 'order';\n  cc3.appendChild(img4);\n  cc3.appendChild(cb3);\n  cb3.appendChild(cc3h5);\n  cb3.appendChild(cc3p1);\n  cb3.appendChild(cc3a1);\n  section.appendChild(cc3);\n  container.appendChild(section);\n  return container;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);\n\n//# sourceURL=webpack://restaurant-page/./src/Services.js?");

/***/ }),

/***/ "./src/Tab.js":
/*!********************!*\
  !*** ./src/Tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tab)\n/* harmony export */ });\nfunction tab() {\n  const nav = document.createElement('nav');\n\n  const navHeaderLeft = document.createElement('div');\n  navHeaderLeft.innerHTML = 'Tasty';\n\n  const navHeaderRight = document.createElement('div');\n  navHeaderRight.classList.add('list-unstyled', 'd-flex', 'justify-content-between', 'w-50');\n\n  const listItem4 = document.createElement('button');\n  listItem4.id = 'menu-1';\n  listItem4.innerHTML = 'Menu';\n  listItem4.classList.add('bg-white', 'text-black', 'border-none', 'rounded-circle');\n\n  const listItem1 = document.createElement('div');\n  const link = document.createElement('button');\n  link.classList.add('bg-white', 'text-black', 'rounded-circle');\n  const t = document.createTextNode('home');\n  link.appendChild(t);\n  link.id = 'home-1';\n  listItem1.appendChild(link);\n\n\n  const listItem2 = document.createElement('button');\n  listItem2.classList.add('bg-white', 'text-black', 'rounded-circle');\n  listItem2.innerHTML = 'About';\n  listItem2.id = 'abt';\n\n  const listItem3 = document.createElement('button');\n  listItem3.classList.add('bg-white', 'text-black', 'rounded-circle');\n  listItem3.id = 'servi';\n  listItem3.innerHTML = 'Services';\n\n  const listItem5 = document.createElement('div');\n  listItem5.innerHTML = 'Contact us';\n  navHeaderRight.appendChild(listItem1);\n  navHeaderRight.appendChild(listItem2);\n  navHeaderRight.appendChild(listItem3);\n  navHeaderRight.appendChild(listItem4);\n  navHeaderRight.appendChild(listItem5);\n  nav.appendChild(navHeaderLeft);\n  nav.appendChild(navHeaderRight);\n  nav.classList.add('d-flex', 'justify-content-around', 'pt-3');\n  return nav;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Tab.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n  const mainDiv = document.createElement('div');\n  mainDiv.classList.add('s1');\n  const secton1 = document.createElement('section');\n  secton1.classList.add('d-flex', 'justify-content-around', 'mt-5', 'align-items-center', 'flex-wrap');\n  const cardContaner = document.createElement('div');\n  cardContaner.classList.add('d-flex', 'flex-column');\n  const h1 = document.createElement('h1');\n  h1.innerHTML = 'Tasty food';\n  h1.classList.add('text-success');\n  h1.style.fontSize = '5rem';\n  const h2 = document.createElement('h2');\n  h2.innerHTML = 'Try the best food of the week';\n  const button = document.createElement('button');\n  const buttonText = document.createTextNode('view menu');\n  button.appendChild(buttonText);\n  button.classList.add('btn', 'btn-success', 'py-2', 'w-25');\n  const img1 = document.createElement('img');\n  img1.setAttribute('src', '/assets/img/home.png');\n  img1.classList.add('w-25');\n  const section2 = document.createElement('h3');\n  section2.classList.add('text-center', 'my-4');\n  section2.innerText = 'Menu of the week';\n  //  creating 3 cards\n  const section3 = document.createElement('section');\n  section3.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'mt-5');\n\n  const cc1 = document.createElement('div');\n  cc1.classList.add('card');\n  const img2 = document.createElement('img');\n  img2.setAttribute('src', '/assets/img/plate1.png');\n  img2.classList.add('card-img-top');\n  const cb1 = document.createElement('div');\n  cb1.classList.add('card-body');\n  const cc1h5 = document.createElement('h5');\n  cc1h5.innerText = 'some good foot';\n  cc1h5.classList.add('card-title');\n  const cc1p1 = document.createElement('p');\n  cc1p1.classList.add('card-text');\n  cc1p1.innerHTML = 'trying something';\n  const cc1a1 = document.createElement('a');\n  cc1a1.classList.add('btn', 'btn-primary');\n  cc1a1.innerText = 'order';\n  cc1.appendChild(img2);\n  cc1.appendChild(cb1);\n  cb1.appendChild(cc1h5);\n  cb1.appendChild(cc1p1);\n  cb1.appendChild(cc1a1);\n\n  section3.appendChild(cc1);\n  // second card\n  const cc2 = document.createElement('div');\n  cc2.classList.add('card');\n  const img3 = document.createElement('img');\n  img3.setAttribute('src', '/assets/img/plate1.png');\n  img3.classList.add('card-img-top');\n\n  const cb2 = document.createElement('div');\n  cb2.classList.add('card-body');\n  const cc2h5 = document.createElement('h5');\n  cc2h5.innerText = 'food';\n  cc2h5.classList.add('card-title');\n\n  const cc2p1 = document.createElement('p');\n  cc2p1.classList.add('card-text');\n  cc2p1.innerHTML = 'trying something';\n  const cc2a1 = document.createElement('a');\n  cc2a1.classList.add('btn', 'btn-primary');\n  cc2a1.innerText = 'order';\n\n  cc2.appendChild(img3);\n  cc2.appendChild(cb2);\n  cb2.appendChild(cc2h5);\n  cb2.appendChild(cc2p1);\n  cb2.appendChild(cc2a1);\n  section3.appendChild(cc2);\n  // third card\n  const cc3 = document.createElement('div');\n  cc3.classList.add('card');\n  const img4 = document.createElement('img');\n  img4.setAttribute('src', '/assets/img/plate1.png');\n  img4.classList.add('card-img-top');\n\n  const cb3 = document.createElement('div');\n  cb3.classList.add('card-body');\n  const cc3h5 = document.createElement('h5');\n  cc3h5.innerText = 'food';\n  cc3h5.classList.add('card-title');\n\n  const cc3p1 = document.createElement('p');\n  cc3p1.classList.add('card-text');\n  cc3p1.innerHTML = 'trying something';\n  const cc3a1 = document.createElement('a');\n  cc3a1.classList.add('btn', 'btn-primary');\n  cc3a1.innerText = 'order';\n\n  cc3.appendChild(img4);\n  cc3.appendChild(cb3);\n  cb3.appendChild(cc3h5);\n  cb3.appendChild(cc3p1);\n  cb3.appendChild(cc3a1);\n  section3.appendChild(cc3);\n\n  cardContaner.appendChild(h1);\n  cardContaner.appendChild(h2);\n  cardContaner.appendChild(button);\n  secton1.appendChild(cardContaner);\n  secton1.appendChild(img1);\n  mainDiv.appendChild(secton1);\n  mainDiv.appendChild(section2);\n  mainDiv.appendChild(section3);\n  return mainDiv;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.js */ \"./src/Services.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _Tab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tab.js */ \"./src/Tab.js\");\n/* eslint-disable import/extensions */\n\n\n\n\n\n\nfunction homepage() {\n  const content = document.getElementById('content');\n  content.appendChild((0,_Tab_js__WEBPACK_IMPORTED_MODULE_4__.default)());\n  content.appendChild((0,_About_js__WEBPACK_IMPORTED_MODULE_2__.default)());\n  content.appendChild((0,_Services_js__WEBPACK_IMPORTED_MODULE_1__.default)());\n  content.appendChild((0,_Menu_js__WEBPACK_IMPORTED_MODULE_3__.default)());\n  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)());\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* eslint-disable import/extensions */\n\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst abt = document.getElementById('abt');\nconst abt1 = document.querySelector('.about__1');\n\nconst servi = document.getElementById('servi');\nconst servbody = document.querySelector('.servbody');\n\nconst menu1 = document.querySelector('.menu__1');\nconst menu2 = document.getElementById('menu-1');\nconst s1 = document.querySelector('.s1');\n\n\nconst home1 = document.getElementById('home-1');\nhome1.addEventListener('click', () => {\n  s1.classList.remove('d-none');\n  menu1.classList.remove('d-flex');\n  menu1.classList.remove('d-block');\n  menu1.classList.add('d-none');\n  servbody.classList.remove('d-flex');\n  servbody.classList.remove('d-block');\n  servbody.classList.add('d-none');\n  abt1.classList.remove('d-flex');\n  abt1.classList.remove('d-block');\n  abt1.classList.add('d-none');\n});\n\nabt.addEventListener('click', () => {\n  abt1.classList.remove('d-none');\n  abt1.classList.add('d-flex');\n  servbody.classList.remove('d-flex');\n  servbody.classList.add('d-none');\n  menu1.classList.remove('d-flex');\n  menu1.classList.add('d-none');\n  s1.classList.remove('d-block');\n  s1.classList.remove('d-flex');\n  s1.classList.add('d-none');\n});\n\nservi.addEventListener('click', () => {\n  servbody.classList.remove('d-none');\n  servbody.classList.add('d-flex');\n  menu1.classList.remove('d-flex');\n  menu1.classList.add('d-none');\n  abt1.classList.remove('d-flex');\n  abt1.classList.add('d-none');\n  s1.classList.remove('d-flex');\n  s1.classList.add('d-none');\n});\n\nmenu2.addEventListener('click', () => {\n  menu1.classList.remove('d-none');\n  menu1.classList.add('d-flex');\n  servbody.classList.remove('d-flex');\n  servbody.classList.add('d-none');\n  abt1.classList.remove('d-flex');\n  abt1.classList.add('d-none');\n  s1.classList.remove('d-flex');\n  s1.classList.add('d-none');\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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