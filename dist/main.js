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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = ()=>{\n  const container = document.createElement('div')\n  container.classList.add('d-none')\n  const h1 = document.createElement('h1')\n  h1.innerHTML = 'About us'\n  const h2 = document.createElement('h2')\n  h2.innerHTML = 'We cook the best  tasty food'\n  const h3 = document.createElement('h3')\n  h3.innerHTML = 'We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us'\ncontainer.appendChild(h1)\ncontainer.appendChild(h2)\ncontainer.appendChild(h3)\n\nreturn container\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/About.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n  const listItem4 = document.createElement('div')\n  listItem4.innerHTML = 'Menu'\n//   const section3 = document.createElement('section')\n//   section3.classList.add('d-none','justify-content-around')\n  \n//   const cc1 = document.createElement('div')\n//   cc1.classList.add('card')\n//   const img2 = document.createElement('img')\n//   img2.setAttribute(\"src\",'/assets/img/plate1.png') \n//   img2.classList.add(\"card-img-top\")\n//   const cb1 = document.createElement('div')\n//   cb1.classList.add('card-body')\n//   const cc1h5 = document.createElement('h5')\n//   cc1h5.innerText = 'some good foot'\n//   cc1h5.classList.add('card-title')\n//   const cc1p1 = document.createElement('p')\n//   cc1p1.classList.add('card-text')\n//   cc1p1.innerHTML = 'trying something'\n//   const cc1a1 = document.createElement('a')\n//   cc1a1.classList.add('btn','btn-primary')\n//   cc1a1.innerText = 'order'\n//   cc1.appendChild(img2)\n//   cc1.appendChild(cb1)\n//   cb1.appendChild(cc1h5)\n//   cb1.appendChild(cc1p1)\n//   cb1.appendChild(cc1a1)\n//   section3.appendChild(cc1)\n// listItem4.appendChild(section3)\n\nreturn listItem4\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Services.js":
/*!*************************!*\
  !*** ./src/Services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst services = ()=>{\n  const container = document.createElement('div')\n  container.classList.add('d-none','flex-column','align-items-center','align-content-center','justify-content-around')\n  const h1 = document.createElement('h1')\n  h1.innerHTML = 'offerring'\n  const h2 = document.createElement('h2')\n  h2.innerHTML = 'Our amazing services'\n\n  const section = document.createElement('section')\nsection.classList.add('d-flex','justify-content-around','flex-wrap')\n\nconst cc1 = document.createElement('div')\ncc1.classList.add('card','text-center')\nconst img2 = document.createElement('img')\nimg2.setAttribute(\"src\",'/assets/img/dish.svg') \nimg2.classList.add(\"card-img-top\")\nimg2.style.margin = \"20% 0 0 40%\"\nconst cb1 = document.createElement('div')\ncb1.classList.add('card-body')\nconst cc1h5 = document.createElement('h5')\ncc1h5.innerText = 'some good foot'\ncc1h5.classList.add('card-title')\nconst cc1p1 = document.createElement('p')\ncc1p1.classList.add('card-text')\ncc1p1.innerHTML = 'trying something'\nconst cc1a1 = document.createElement('a')\ncc1a1.classList.add('btn','btn-primary')\ncc1a1.innerText = 'order'\ncc1.appendChild(img2)\ncc1.appendChild(cb1)\ncb1.appendChild(cc1h5)\ncb1.appendChild(cc1p1)\ncb1.appendChild(cc1a1)\ncontainer.appendChild(h1)\ncontainer.appendChild(h2)\nsection.appendChild(cc1)\n// second\nconst cc2 = document.createElement('div')\ncc2.classList.add('card','text-center')\nconst img3 = document.createElement('img')\nimg3.setAttribute(\"src\",'/assets/img/dish.svg') \nimg3.classList.add(\"card-img-top\")\nimg3.style.margin = \"20% 0 0 40%\"\nconst cb2 = document.createElement('div')\ncb2.classList.add('card-body')\nconst cc2h5 = document.createElement('h5')\ncc2h5.innerText = 'some good foot'\ncc2h5.classList.add('card-title')\nconst cc2p1 = document.createElement('p')\ncc2p1.classList.add('card-text')\ncc2p1.innerHTML = 'trying something'\nconst cc2a1 = document.createElement('a')\ncc2a1.classList.add('btn','btn-primary')\ncc2a1.innerText = 'order'\ncc2.appendChild(img3)\ncc2.appendChild(cb2)\ncb2.appendChild(cc2h5)\ncb2.appendChild(cc2p1)\ncb2.appendChild(cc2a1)\nsection.appendChild(cc2)\n//third\nconst cc3 = document.createElement('div')\ncc3.classList.add('card','text-center')\nconst img4 = document.createElement('img')\nimg4.setAttribute(\"src\",'/assets/img/dish.svg') \nimg4.classList.add(\"card-img-top\")\nimg4.style.margin = \"20% 0 0 40%\"\nconst cb3 = document.createElement('div')\ncb3.classList.add('card-body')\nconst cc3h5 = document.createElement('h5')\ncc3h5.innerText = 'some good foot'\ncc3h5.classList.add('card-title')\nconst cc3p1 = document.createElement('p')\ncc3p1.classList.add('card-text')\ncc3p1.innerHTML = 'trying something'\nconst cc3a1 = document.createElement('a')\ncc3a1.classList.add('btn','btn-primary')\ncc3a1.innerText = 'order'\ncc3.appendChild(img4)\ncc3.appendChild(cb3)\ncb3.appendChild(cc3h5)\ncb3.appendChild(cc3p1)\ncb3.appendChild(cc3a1)\nsection.appendChild(cc3)\ncontainer.appendChild(section)\nreturn container\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);\n\n//# sourceURL=webpack://restaurant-page/./src/Services.js?");

/***/ }),

/***/ "./src/Tab.js":
/*!********************!*\
  !*** ./src/Tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tab)\n/* harmony export */ });\nfunction tab (){\n  const nav = document.createElement('nav')\n\n  const navHeaderLeft = document.createElement('div')\n  navHeaderLeft.innerHTML = 'Tasty'\n\nconst navHeaderRight = document.createElement('div')\nnavHeaderRight.classList.add('list-unstyled','d-flex','justify-content-between','w-50')\n\nconst listItem4 = document.createElement('div')\nlistItem4.innerHTML = 'Menu'\n\nconst listItem1 = document.createElement('div')\nconst link = document.createElement('a')\nlink.setAttribute(\"class\",\"nav-link active\")\nlink.href = '#'\nconst t= document.createTextNode('home')\nlink.appendChild(t)\nlistItem1.appendChild(link)\n\nconst listItem2 = document.createElement('div')\nlistItem2.innerHTML = 'About'\n\nconst listItem3 = document.createElement('div')\nlistItem3.innerHTML = 'Services'\n\nconst listItem5 = document.createElement('div')\nlistItem5.innerHTML = 'Contact us'\nnavHeaderRight.appendChild(listItem1)\n navHeaderRight.appendChild(listItem2)\n navHeaderRight.appendChild(listItem3)\n navHeaderRight.appendChild(listItem4)\n navHeaderRight.appendChild(listItem5)\n nav.appendChild(navHeaderLeft)\n nav.appendChild(navHeaderRight)\n nav.classList.add('d-flex','justify-content-around','pt-3')\n return nav\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/Tab.js?");

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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _Tasty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasty.js */ \"./src/Tasty.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.js */ \"./src/Services.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _Contactus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contactus.js */ \"./src/Contactus.js\");\n/* harmony import */ var _Tab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tab.js */ \"./src/Tab.js\");\n\n\n\n\n\n\n\nfunction homepage(){\n \nconst content = document.getElementById(\"content\");\ncontent.appendChild((0,_Tab_js__WEBPACK_IMPORTED_MODULE_6__.default)())\ncontent.appendChild((0,_About_js__WEBPACK_IMPORTED_MODULE_3__.default) ())\ncontent.appendChild((0,_Services_js__WEBPACK_IMPORTED_MODULE_2__.default) ())\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tasty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasty.js */ \"./src/Tasty.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _Services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.js */ \"./src/Services.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _Contactus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contactus.js */ \"./src/Contactus.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n \n \n \n \n \n \n \n (0,_homepage_js__WEBPACK_IMPORTED_MODULE_6__.default)()\n\nconst secton1 = document.createElement('section')\nsecton1.classList.add('d-flex','justify-content-around','mt-5','align-items-center','flex-wrap')\nconst cardContaner = document.createElement('div')\ncardContaner.classList.add('d-flex','flex-column')\nconst h1= document.createElement('h1')\nh1.innerHTML = 'Tasty food'\nconst h2 = document.createElement('h2')\nh2.innerHTML = 'Try the best food of the week'\nconst button = document.createElement('button')\nconst buttonText = document.createTextNode('view menu')\nbutton.appendChild(buttonText)\nbutton.classList.add('btn','btn-success','py-2','w-25')\n const img1 = document.createElement('img')\n img1.setAttribute(\"src\",'/assets/img/home.png')\n img1.classList.add('w-25')\n const section2 = document.createElement('h3')\n section2.classList.add('text-center','my-4')\n section2.innerText = \"Menu of the week\"\n//  creating 3 cards\nconst section3 = document.createElement('section')\nsection3.classList.add('d-flex','justify-content-around','flex-wrap')\n\nconst cc1 = document.createElement('div')\ncc1.classList.add('card')\nconst img2 = document.createElement('img')\nimg2.setAttribute(\"src\",'/assets/img/plate1.png') \nimg2.classList.add(\"card-img-top\")\nconst cb1 = document.createElement('div')\ncb1.classList.add('card-body')\nconst cc1h5 = document.createElement('h5')\ncc1h5.innerText = 'some good foot'\ncc1h5.classList.add('card-title')\nconst cc1p1 = document.createElement('p')\ncc1p1.classList.add('card-text')\ncc1p1.innerHTML = 'trying something'\nconst cc1a1 = document.createElement('a')\ncc1a1.classList.add('btn','btn-primary')\ncc1a1.innerText = 'order'\ncc1.appendChild(img2)\ncc1.appendChild(cb1)\ncb1.appendChild(cc1h5)\ncb1.appendChild(cc1p1)\ncb1.appendChild(cc1a1)\n\nsection3.appendChild(cc1)\n//second card \nconst cc2 = document.createElement('div')\ncc2.classList.add('card')\nconst img3 = document.createElement('img')\nimg3.setAttribute(\"src\",'/assets/img/plate1.png') \nimg3.classList.add(\"card-img-top\")\n\nconst cb2 = document.createElement('div')\ncb2.classList.add('card-body')\nconst cc2h5 = document.createElement('h5')\ncc2h5.innerText = 'food'\ncc2h5.classList.add('card-title')\n\nconst cc2p1 = document.createElement('p')\ncc2p1.classList.add('card-text')\ncc2p1.innerHTML = 'trying something'\nconst cc2a1 = document.createElement('a')\ncc2a1.classList.add('btn','btn-primary')\ncc2a1.innerText = 'order'\n\ncc2.appendChild(img3)\ncc2.appendChild(cb2)\ncb2.appendChild(cc2h5)\ncb2.appendChild(cc2p1)\ncb2.appendChild(cc2a1)\nsection3.appendChild(cc2)\n//third card\nconst cc3 = document.createElement('div')\ncc3.classList.add('card')\nconst img4 = document.createElement('img')\nimg4.setAttribute(\"src\",'/assets/img/plate1.png') \nimg4.classList.add(\"card-img-top\")\n\nconst cb3 = document.createElement('div')\ncb3.classList.add('card-body')\nconst cc3h5 = document.createElement('h5')\ncc3h5.innerText = 'food'\ncc3h5.classList.add('card-title')\n\nconst cc3p1 = document.createElement('p')\ncc3p1.classList.add('card-text')\ncc3p1.innerHTML = 'trying something'\nconst cc3a1 = document.createElement('a')\ncc3a1.classList.add('btn','btn-primary')\ncc3a1.innerText = 'order'\n\ncc3.appendChild(img4)\ncc3.appendChild(cb3)\ncb3.appendChild(cc3h5)\ncb3.appendChild(cc3p1)\ncb3.appendChild(cc3a1)\nsection3.appendChild(cc3)\n\ncardContaner.appendChild(h1)\ncardContaner.appendChild(h2)\ncardContaner.appendChild(button)\nsecton1.appendChild(cardContaner)\nsecton1.appendChild(img1)\ncontent.appendChild(secton1)\ncontent.appendChild(section2)\ncontent.appendChild(section3)\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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