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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --timberwolf: hsla(150, 14%, 84%, 1);\\n    --alabaster: hsla(81, 28%, 90%, 1);\\n    --maize-crayola: hsla(44, 88%, 66%, 1);\\n    --eerie-black: hsla(60, 1%, 14%, 1);\\n    --jet: hsla(120, 2%, 20%, 1);\\n}\\n\\nbody {\\n    margin: 0;\\n    font-family: 'Zen Kurenaido', sans-serif;\\n    min-height: 100vh;\\n    display: grid;\\n    justify-content: center;\\n    background-color: var(--jet);\\n}\\n\\n#content {\\n    background-color: aliceblue;\\n    display: grid;\\n    grid-template-columns: minmax(min-content, 960px);\\n    grid-template-rows: min-content 1fr min-content;\\n}\\n\\nheader {\\n    background-color: var(--maize-crayola);\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    align-items: center;\\n    padding: 10px 30px;\\n}\\n\\n#logo {\\n    font-size: 1.8rem;\\n    font-weight: 900;\\n    text-transform: uppercase;\\n}\\n\\nnav {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    gap: 10px;\\n}\\n\\nnav button {\\n    border: none;\\n    background: none;\\n    padding: 10px 30px;\\n    font-weight: 900;\\n    text-transform: uppercase;\\n}\\n\\nnav button:hover {\\n    color: var(--jet);\\n}\\n\\nmain {\\n    background-color: var(--eerie-black);\\n    padding: 10px 30px;\\n    color: var(--alabaster);\\n}\\n\\n#imageheader {\\n    padding: 30px 0;\\n    display: grid;\\n    grid-template-columns: min-content 1fr;\\n    gap: 30px;}\\n\\n#interior-img {\\n    padding: 10px;\\n    background-color: var(--timberwolf);\\n    color: black;\\n    font-family: 'Dancing Script', cursive;\\n}\\n\\n#interior-img img {\\n    width: 300px;\\n}\\n\\n#interior-img h3 {\\n    margin: 0;\\n    padding: 10px;\\n    font-size: 2rem;\\n    text-align: center;\\n}\\n\\n#testimonials {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    gap: 10px;\\n}\\n\\nfooter {\\n    background-color: var(--maize-crayola);\\n    padding: 10px 30px;\\n    font-size: 0.5rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global */ \"./src/Global.js\");\n\n\n\nconst GenerateContactPage = () => {\n    /*\n    * HEADER\n    */\n    let header = (0,_Global__WEBPACK_IMPORTED_MODULE_0__.GenerateHeader)();\n\n    /*\n    * MAIN\n    */\n    let main = (0,_Global__WEBPACK_IMPORTED_MODULE_0__.GenerateMain)();\n    main.innerText = 'Contact Page';\n\n    /*\n    * FOOTER\n    */\n    let footer = (0,_Global__WEBPACK_IMPORTED_MODULE_0__.GenerateFooter)();\n\n    return { header, main, footer };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/Contact.js?");

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GenerateHeader\": () => (/* binding */ GenerateHeader),\n/* harmony export */   \"GenerateMain\": () => (/* binding */ GenerateMain),\n/* harmony export */   \"GenerateFooter\": () => (/* binding */ GenerateFooter)\n/* harmony export */ });\nconst GenerateHeader = () => {\n    let header = document.createElement('header');\n    \n    let logo = document.createElement('div');\n    logo.id = 'logo';\n    logo.innerText = 'Awesome Restaurant';\n\n    let nav = document.createElement('nav');\n\n    let homeBtn = document.createElement('button');\n    homeBtn.id = \"homebtn\";\n    homeBtn.innerText = \"Home\";\n\n    let menuBtn = document.createElement('button');\n    menuBtn.id = \"menubtn\";\n    menuBtn.innerText = \"Menu\";\n\n    let contactBtn = document.createElement('button');\n    contactBtn.id = \"contactbtn\";\n    contactBtn.innerText = \"Contact\";\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    header.appendChild(logo);\n    header.appendChild(nav);\n\n    return header;\n}\n\nlet GenerateMain = () => {\n    let main = document.createElement('main');\n\n    return main;\n}\n\nlet GenerateFooter = () => {\n    let footer = document.createElement('footer');\n\n    return footer;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Global.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pexels_lisa_fotios_776538_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pexels-lisa-fotios-776538.jpg */ \"./src/images/pexels-lisa-fotios-776538.jpg\");\n/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global */ \"./src/Global.js\");\n\n\n\nconst generateHourListItem = (day, hours) => {\n    let li = document.createElement('li');\n    let opentimes = document.createTextNode(hours);\n    \n    let strong = document.createElement('strong');\n    strong.innerText = day;\n    \n    li.appendChild(strong);\n    li.appendChild(opentimes);\n    \n    return li;\n}\n\nconst GenerateHomePage = () => {\n    /*\n    * HEADER\n    */\n    let header = (0,_Global__WEBPACK_IMPORTED_MODULE_1__.GenerateHeader)();\n\n    /*\n    * MAIN\n    */\n    let main = (0,_Global__WEBPACK_IMPORTED_MODULE_1__.GenerateMain)();\n\n    // imageheader section\n    let imageHeader = document.createElement('section');\n    imageHeader.id = 'imageheader';\n\n    let interiorImg = document.createElement('div');\n    interiorImg.id = 'interior-img';\n\n    let image = document.createElement('img');\n    image.src = _images_pexels_lisa_fotios_776538_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = 'restaurant interior image';\n\n    let imageH3 = document.createElement('h3');\n    imageH3.innerText = 'Awesome Restaurant';\n\n    interiorImg.appendChild(image);\n    interiorImg.appendChild(imageH3);\n\n    let hours = document.createElement('div');\n    hours.id = 'hours';\n\n    let hoursH3 = document.createElement('h3');\n    hoursH3.innerText = 'Awesome Restaurant!';\n\n    let list = document.createElement('ul');\n    let li1 = generateHourListItem('Mon - Thurs:', ' 12:00pm - 10:00pm');\n    let li2 = generateHourListItem('Friday:', ' 12:00pm - 12:00am');\n    let li3 = generateHourListItem('Saturday:', ' 10:00am - 12:00am');\n    let li4 = generateHourListItem('Sunday:', ' 8:00am - 10:00pm');\n\n    list.appendChild(li1);\n    list.appendChild(li2);\n    list.appendChild(li3);\n    list.appendChild(li4);\n\n    hours.appendChild(hoursH3);\n    hours.appendChild(list);\n\n    imageHeader.appendChild(interiorImg);\n    imageHeader.appendChild(hours);\n\n    main.appendChild(imageHeader);\n\n    // testimonials sections\n    let testimonialH3 = document.createElement('h3');\n    testimonialH3.innerText = 'Testimonials!';\n    main.appendChild(testimonialH3);\n\n    let testimonialsSection = document.createElement('section');\n    testimonialsSection.id = 'testimonials';\n\n    for (let i = 1; i <= 3; i++) {\n        let quote = document.createElement('div');\n        quote.classList.add('quote');\n\n        let p = document.createElement('p');\n        p.innerText = '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Phasellus egestas tellus rutrum tellus pellentesque.\"';\n\n        let span = document.createElement('span');\n        span.innerText = ' - Some guy';\n\n        quote.appendChild(p);\n        quote.appendChild(span);\n\n        testimonialsSection.appendChild(quote);\n    }\n\n    main.appendChild(testimonialsSection);\n\n    /*\n    * FOOTER\n    */\n    let footer = (0,_Global__WEBPACK_IMPORTED_MODULE_1__.GenerateFooter)();\n\n    let imageCredit = document.createElement('span');\n    imageCredit.innerText = 'pexels-lisa-fotios-776538.jpg by ';\n\n    let link = document.createElement('a');\n    link.href = 'https://www.pexels.com/photo/restaurant-interior-776538/';\n    link.innerText = 'Lisa Fotios from Pexels';\n\n    imageCredit.appendChild(link);\n    footer.appendChild(imageCredit);\n\n    return { header, main, footer };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global */ \"./src/Global.js\");\n\n\n\nconst GenerateMenuPage = () => {\n    /*\n    * HEADER\n    */\n    let header = (0,_Global__WEBPACK_IMPORTED_MODULE_0__.GenerateHeader)();\n\n    /*\n    * MAIN\n    */\n    let main = (0,_Global__WEBPACK_IMPORTED_MODULE_0__.GenerateMain)();\n    main.innerText = 'Menu Page';\n\n    /*\n    * FOOTER\n    */\n    let footer = (0,_Global__WEBPACK_IMPORTED_MODULE_0__.GenerateFooter)();\n\n    return { header, main, footer };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n\n\n\n\n\nconst showHome = () => {\n    let { header, main, footer } = (0,_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    \n    showPage(header, main, footer);\n}\n\nconst showMenu = () => {\n    let { header, main, footer } = (0,_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    \n    showPage(header, main, footer);\n}\n\nconst showContact = () => {\n    let { header, main, footer } = (0,_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    \n    showPage(header, main, footer);\n}\n\nconst showPage = (header, main, footer) => {\n    content.innerText = '';\n    \n    content.appendChild(header);\n    content.appendChild(main);\n    content.appendChild(footer);\n\n    let homeBtn = document.querySelector(\"#homebtn\");\n    homeBtn.addEventListener('click', showHome);\n    \n    let menuBtn = document.querySelector(\"#menubtn\");\n    menuBtn.addEventListener('click', showMenu);\n    \n    let contactBtn = document.querySelector(\"#contactbtn\");\n    contactBtn.addEventListener('click', showContact);\n}\n\nlet content = document.querySelector(\"#content\");\n\nshowHome();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/images/pexels-lisa-fotios-776538.jpg":
/*!**************************************************!*\
  !*** ./src/images/pexels-lisa-fotios-776538.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ed81150071f4596e3a9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pexels-lisa-fotios-776538.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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