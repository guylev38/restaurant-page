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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout() {\n  const about = document.createElement(\"div\");\n  const title = document.createElement(\"h1\");\n  const pg = document.createElement(\"p\");\n  title.textContent = \"About Baratie\";\n  pg.textContent = \"about page\";\n\n  about.appendChild(title);\n  about.appendChild(pg);\n  return about;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createParagraph(text) {\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = text;\n  return paragraph;\n}\n\nfunction createHome() {\n  const homeDiv = document.createElement(\"div\");\n  homeDiv.classList.add(\"home\");\n  const p1 = createParagraph(\n    `Dive into a culinary adventure at Baratie, the renowned floating restaurant on the Grand Line. Led by Head Chef Zeff, our eatery offers masterful chefs, tantalizing dishes, and a spirit of unity. Join pirates and travelers to savor exceptional cuisine and celebrate the joys of good food and company. `\n  );\n\n  const p2 = createParagraph(\n    `Welcome to Baratie, where every bite tells a high seas tale.`\n  );\n  p2.classList.add(\"welcome\");\n  homeDiv.appendChild(p1);\n  homeDiv.appendChild(p2);\n\n  return homeDiv;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n  const homeTab = document.createElement(\"button\");\n  homeTab.textContent = \"Home\";\n  const menuTab = document.createElement(\"button\");\n  menuTab.textContent = \"Menu\";\n  const aboutTab = document.createElement(\"button\");\n  aboutTab.textContent = \"About\";\n\n  homeTab.classList.add(\"tab\");\n  homeTab.classList.add(\"active\");\n  homeTab.addEventListener(\"click\", addActive);\n  menuTab.classList.add(\"tab\");\n  menuTab.addEventListener(\"click\", addActive);\n  aboutTab.classList.add(\"tab\");\n  aboutTab.addEventListener(\"click\", addActive);\n\n  homeTab.id = \"home\";\n  menuTab.id = \"menu\";\n  aboutTab.id = \"about\";\n\n  nav.appendChild(homeTab);\n  nav.appendChild(menuTab);\n  nav.appendChild(aboutTab);\n\n  return nav;\n}\n\nfunction loadWebsite() {\n  const content = document.getElementById(\"content\");\n  const nav = createNav();\n  const main = document.createElement(\"main\");\n  main.id = \"main\";\n  main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  content.appendChild(nav);\n  content.appendChild(main);\n}\n\nloadWebsite();\n\nfunction addActive(e) {\n  const newButton = e.target;\n  const prevButton = document.getElementsByClassName(\"active\")[0];\n  if (prevButton != undefined) prevButton.classList.remove(\"active\");\n  newButton.classList.add(\"active\");\n  switchMain();\n}\n\nfunction switchMain() {\n  const main = document.getElementById(\"main\");\n  main.removeChild(main.children[0]);\n  const active = document.getElementsByClassName(\"active\")[0];\n  switch (active.id) {\n    case \"home\":\n      main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n      break;\n    case \"menu\":\n      main.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n      break;\n    case \"about\":\n      main.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n      break;\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenuEntry(title, description, imgSrc) {\n  const entry = document.createElement(\"div\");\n  entry.classList.add(\"menu-entry\");\n  const name = document.createElement(\"h2\");\n  const desc = document.createElement(\"p\");\n  const image = new Image();\n  name.textContent = title;\n  desc.textContent = description;\n  image.src = imgSrc;\n\n  entry.appendChild(name);\n  entry.appendChild(desc);\n  entry.appendChild(image);\n\n  return entry;\n}\n\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  menu.textContent = \"menu\";\n\n  return menu;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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