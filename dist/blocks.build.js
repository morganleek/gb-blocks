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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu_js__ = __webpack_require__(/*! ./menu/menu.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9tZW51L21lbnUuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    useBlockProps = _wp$blockEditor.useBlockProps,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar SelectControl = wp.components.SelectControl;\nvar _wp = wp,\n    ServerSideRender = _wp.serverSideRender;\nvar _wp$components = wp.components,\n    Panel = _wp$components.Panel,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow;\nvar _wordpressIcons = '@wordpress/icons',\n    more = _wordpressIcons.more;\n\n\nregisterBlockType('gb/block-gb-menu', {\n\tapiVersion: 2,\n\ttitle: __('Menu'),\n\ticon: 'menu',\n\tcategory: 'common',\n\tkeywords: [__('Menu'), __('Appearance')],\n\tattributes: {\n\t\tmenu: {\n\t\t\ttype: 'string',\n\t\t\tdefault: \"\"\n\t\t},\n\t\tmenusAvailable: {\n\t\t\ttype: 'array',\n\t\t\tdefault: null\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\n\t\tif (attributes.menusAvailable == null) {\n\t\t\tattributes.menusAvailable = gbGlobal.siteMenus;\n\t\t\tattributes.menusAvailable.unshift({ value: null, label: 'Select a menu' });\n\t\t}\n\n\t\tvar onUpdateMenu = function onUpdateMenu(newMenu) {\n\t\t\tsetAttributes({ menu: newMenu });\n\t\t};\n\n\t\tvar blockProps = useBlockProps();\n\n\t\tvar blockRender = void 0;\n\t\tif (attributes.menu) {\n\t\t\tblockRender = wp.element.createElement(ServerSideRender, {\n\t\t\t\tblock: 'gb/block-gb-menu',\n\t\t\t\tattributes: {\n\t\t\t\t\tmenu: attributes.menu\n\t\t\t\t}\n\t\t\t});\n\t\t} else {\n\t\t\tblockRender = wp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Select a menu'\n\t\t\t);\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tblockProps,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanel,\n\t\t\t\t\t{ header: 'Menu' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelBody,\n\t\t\t\t\t\t{ title: 'Menu Settings', icon: more, initialOpen: true },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\tPanelRow,\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\t\tlabel: __('Select a menu: '),\n\t\t\t\t\t\t\t\tonChange: onUpdateMenu,\n\t\t\t\t\t\t\t\tvalue: attributes.menu,\n\t\t\t\t\t\t\t\toptions: attributes.menusAvailable\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\tblockRender\n\t\t);\n\t}\n});\n\n// <InspectorControls key=\"setting\">\n// \t<PanelBody>\n// \t\t<PanelRow>\n// \t\t\t<p>Hello</p>\n// \t\t</PanelRow>\n// \t</PanelBody>\n// </InspectorControls>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUuanM/NmI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRibG9ja0VkaXRvciA9IHdwLmJsb2NrRWRpdG9yLFxuICAgIHVzZUJsb2NrUHJvcHMgPSBfd3AkYmxvY2tFZGl0b3IudXNlQmxvY2tQcm9wcyxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja0VkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBTZWxlY3RDb250cm9sID0gd3AuY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xudmFyIF93cCA9IHdwLFxuICAgIFNlcnZlclNpZGVSZW5kZXIgPSBfd3Auc2VydmVyU2lkZVJlbmRlcjtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWwgPSBfd3AkY29tcG9uZW50cy5QYW5lbCxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdztcbnZhciBfd29yZHByZXNzSWNvbnMgPSAnQHdvcmRwcmVzcy9pY29ucycsXG4gICAgbW9yZSA9IF93b3JkcHJlc3NJY29ucy5tb3JlO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdnYi9ibG9jay1nYi1tZW51Jywge1xuXHRhcGlWZXJzaW9uOiAyLFxuXHR0aXRsZTogX18oJ01lbnUnKSxcblx0aWNvbjogJ21lbnUnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGtleXdvcmRzOiBbX18oJ01lbnUnKSwgX18oJ0FwcGVhcmFuY2UnKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRtZW51OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHR9LFxuXHRcdG1lbnVzQXZhaWxhYmxlOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuXHRcdGlmIChhdHRyaWJ1dGVzLm1lbnVzQXZhaWxhYmxlID09IG51bGwpIHtcblx0XHRcdGF0dHJpYnV0ZXMubWVudXNBdmFpbGFibGUgPSBnYkdsb2JhbC5zaXRlTWVudXM7XG5cdFx0XHRhdHRyaWJ1dGVzLm1lbnVzQXZhaWxhYmxlLnVuc2hpZnQoeyB2YWx1ZTogbnVsbCwgbGFiZWw6ICdTZWxlY3QgYSBtZW51JyB9KTtcblx0XHR9XG5cblx0XHR2YXIgb25VcGRhdGVNZW51ID0gZnVuY3Rpb24gb25VcGRhdGVNZW51KG5ld01lbnUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBtZW51OiBuZXdNZW51IH0pO1xuXHRcdH07XG5cblx0XHR2YXIgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRcdHZhciBibG9ja1JlbmRlciA9IHZvaWQgMDtcblx0XHRpZiAoYXR0cmlidXRlcy5tZW51KSB7XG5cdFx0XHRibG9ja1JlbmRlciA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZXJ2ZXJTaWRlUmVuZGVyLCB7XG5cdFx0XHRcdGJsb2NrOiAnZ2IvYmxvY2stZ2ItbWVudScsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRtZW51OiBhdHRyaWJ1dGVzLm1lbnVcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJsb2NrUmVuZGVyID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdTZWxlY3QgYSBtZW51J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRibG9ja1Byb3BzLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsLFxuXHRcdFx0XHRcdHsgaGVhZGVyOiAnTWVudScgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRQYW5lbEJvZHksXG5cdFx0XHRcdFx0XHR7IHRpdGxlOiAnTWVudSBTZXR0aW5ncycsIGljb246IG1vcmUsIGluaXRpYWxPcGVuOiB0cnVlIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnU2VsZWN0IGEgbWVudTogJyksXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IG9uVXBkYXRlTWVudSxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5tZW51LFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IGF0dHJpYnV0ZXMubWVudXNBdmFpbGFibGVcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHRibG9ja1JlbmRlclxuXHRcdCk7XG5cdH1cbn0pO1xuXG4vLyA8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwic2V0dGluZ1wiPlxuLy8gXHQ8UGFuZWxCb2R5PlxuLy8gXHRcdDxQYW5lbFJvdz5cbi8vIFx0XHRcdDxwPkhlbGxvPC9wPlxuLy8gXHRcdDwvUGFuZWxSb3c+XG4vLyBcdDwvUGFuZWxCb2R5PlxuLy8gPC9JbnNwZWN0b3JDb250cm9scz5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tZW51L21lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/menu/editor.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZW51L2VkaXRvci5zY3NzPzI1YmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tZW51L2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./src/menu/style.scss ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZW51L3N0eWxlLnNjc3M/YTBjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21lbnUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);