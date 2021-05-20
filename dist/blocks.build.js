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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    useBlockProps = _wp$blockEditor.useBlockProps,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar SelectControl = wp.components.SelectControl;\nvar _wp = wp,\n    ServerSideRender = _wp.serverSideRender;\n\n\nregisterBlockType('gb/block-gb-menu', {\n\t\tapiVersion: 2,\n\t\ttitle: 'Example: last post',\n\t\ticon: 'megaphone',\n\t\tcategory: 'widgets',\n\n\t\tedit: function edit(props) {\n\t\t\t\tvar blockProps = useBlockProps();\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tblockProps,\n\t\t\t\t\t\twp.element.createElement(ServerSideRender, {\n\t\t\t\t\t\t\t\tblock: 'gutenberg-examples/example-dynamic',\n\t\t\t\t\t\t\t\tattributes: props.attributes\n\t\t\t\t\t\t})\n\t\t\t\t);\n\t\t}\n\t\t// apiVersion: 2,\n\t\t// title: __( 'Menu' ), \n\t\t// icon: 'shield', \n\t\t// category: 'common', \n\t\t// keywords: [\n\t\t// \t__( 'Menu' ),\n\t\t// \t__( 'Appearance' ),\n\t\t// ],\n\t\t// attributes: {\n\t\t// \tmenu: {\n\t\t// \t\ttype: 'string',\n\t\t// \t\tdefault: \"\"\n\t\t// \t},\n\t\t// \tmenusAvailable: {\n\t\t// \t\ttype: 'array',\n\t\t// \t\tdefault: null\n\t\t// \t}\n\t\t// },\n\n\t\t// edit: ( props ) => {\n\t\t// \tconst { attributes, setAttributes } = props;\n\t\t// \tif( attributes.menusAvailable == null ) {\n\t\t// \t\tattributes.menusAvailable = gbGlobal.siteMenus; \n\t\t// \t\tattributes.menusAvailable.unshift( { value: null, label: 'Select a menu' } );\n\t\t// \t}\n\n\t\t// \tconst onUpdateMenu = ( newMenu ) => {\n\t\t// \t\tsetAttributes( { menu: newMenu } );\n\t\t// \t};\n\n\t\t// \tconst blockProps = useBlockProps();\n\n\t\t// \treturn (\n\t\t// \t\t<div { ... useBlockProps() } className={ props.className }>\n\t\t// \t\t\t<InspectorControls>\n\t\t// \t\t\t\t<div className=\"components-panel__body gb-menu-controls is-opened\">\n\t\t// \t\t\t\t\t<h2 className=\"components-panel__body-title\">\n\t\t// \t\t\t\t\t\t<button type=\"button\" aria-expanded=\"true\" class=\"components-button components-panel__body-toggle\"><span aria-hidden=\"true\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" class=\"components-panel__arrow\" role=\"img\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z\"></path></svg></span>Menu</button>\n\t\t// \t\t\t\t\t</h2>\n\t\t// \t\t\t\t\t<SelectControl \n\t\t// \t\t\t\t\t\tlabel={ __( 'Select a menu: ' ) }\n\t\t// \t\t\t\t\t\tonChange={ onUpdateMenu }\n\t\t// \t\t\t\t\t\tvalue={ attributes.menu }\n\t\t// \t\t\t\t\t\toptions={ attributes.menusAvailable }\n\t\t// \t\t\t\t\t/>\n\t\t// \t\t\t\t</div>\t\n\t\t// \t\t\t</InspectorControls>\n\t\t// \t\t\t<div className=\"gb-menus-wrapper\">\n\t\t// \t\t\t\t<ServerSideRender\n\t\t// \t\t\t\t\tblock=\"gb/block-gb-menu\"\n\t\t// \t\t\t\t\tattributes={ { menu: attributes.menu } }\n\t\t// \t\t\t\t/>\n\t\t// \t\t\t</div>\n\t\t// \t\t</div>\n\t\t// \t);\n\t\t// },\n\n\t\t// // save: ( props ) => {\n\t\t// // \tconst blockProps = useBlockProps.save();\n\n\t\t// // \treturn (\n\t\t// // \t\t<div { ... blockProps } className={ props.className }>\n\t\t// // \t\t\t<p>Working</p>\n\t\t// // \t\t</div>\n\t\t// // \t);\n\t\t// // },\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUuanM/NmI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRibG9ja0VkaXRvciA9IHdwLmJsb2NrRWRpdG9yLFxuICAgIHVzZUJsb2NrUHJvcHMgPSBfd3AkYmxvY2tFZGl0b3IudXNlQmxvY2tQcm9wcyxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja0VkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBTZWxlY3RDb250cm9sID0gd3AuY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xudmFyIF93cCA9IHdwLFxuICAgIFNlcnZlclNpZGVSZW5kZXIgPSBfd3Auc2VydmVyU2lkZVJlbmRlcjtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZ2IvYmxvY2stZ2ItbWVudScsIHtcblx0XHRhcGlWZXJzaW9uOiAyLFxuXHRcdHRpdGxlOiAnRXhhbXBsZTogbGFzdCBwb3N0Jyxcblx0XHRpY29uOiAnbWVnYXBob25lJyxcblx0XHRjYXRlZ29yeTogJ3dpZGdldHMnLFxuXG5cdFx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdFx0XHR2YXIgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0YmxvY2tQcm9wcyxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZXJ2ZXJTaWRlUmVuZGVyLCB7XG5cdFx0XHRcdFx0XHRcdFx0YmxvY2s6ICdndXRlbmJlcmctZXhhbXBsZXMvZXhhbXBsZS1keW5hbWljJyxcblx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBwcm9wcy5hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0XHQvLyBhcGlWZXJzaW9uOiAyLFxuXHRcdC8vIHRpdGxlOiBfXyggJ01lbnUnICksIFxuXHRcdC8vIGljb246ICdzaGllbGQnLCBcblx0XHQvLyBjYXRlZ29yeTogJ2NvbW1vbicsIFxuXHRcdC8vIGtleXdvcmRzOiBbXG5cdFx0Ly8gXHRfXyggJ01lbnUnICksXG5cdFx0Ly8gXHRfXyggJ0FwcGVhcmFuY2UnICksXG5cdFx0Ly8gXSxcblx0XHQvLyBhdHRyaWJ1dGVzOiB7XG5cdFx0Ly8gXHRtZW51OiB7XG5cdFx0Ly8gXHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRkZWZhdWx0OiBcIlwiXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0bWVudXNBdmFpbGFibGU6IHtcblx0XHQvLyBcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHQvLyBcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdC8vIFx0fVxuXHRcdC8vIH0sXG5cblx0XHQvLyBlZGl0OiAoIHByb3BzICkgPT4ge1xuXHRcdC8vIFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcblx0XHQvLyBcdGlmKCBhdHRyaWJ1dGVzLm1lbnVzQXZhaWxhYmxlID09IG51bGwgKSB7XG5cdFx0Ly8gXHRcdGF0dHJpYnV0ZXMubWVudXNBdmFpbGFibGUgPSBnYkdsb2JhbC5zaXRlTWVudXM7IFxuXHRcdC8vIFx0XHRhdHRyaWJ1dGVzLm1lbnVzQXZhaWxhYmxlLnVuc2hpZnQoIHsgdmFsdWU6IG51bGwsIGxhYmVsOiAnU2VsZWN0IGEgbWVudScgfSApO1xuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRjb25zdCBvblVwZGF0ZU1lbnUgPSAoIG5ld01lbnUgKSA9PiB7XG5cdFx0Ly8gXHRcdHNldEF0dHJpYnV0ZXMoIHsgbWVudTogbmV3TWVudSB9ICk7XG5cdFx0Ly8gXHR9O1xuXG5cdFx0Ly8gXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdFx0Ly8gXHRyZXR1cm4gKFxuXHRcdC8vIFx0XHQ8ZGl2IHsgLi4uIHVzZUJsb2NrUHJvcHMoKSB9IGNsYXNzTmFtZT17IHByb3BzLmNsYXNzTmFtZSB9PlxuXHRcdC8vIFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHQvLyBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1wYW5lbF9fYm9keSBnYi1tZW51LWNvbnRyb2xzIGlzLW9wZW5lZFwiPlxuXHRcdC8vIFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1wYW5lbF9fYm9keS10aXRsZVwiPlxuXHRcdC8vIFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgY2xhc3M9XCJjb21wb25lbnRzLWJ1dHRvbiBjb21wb25lbnRzLXBhbmVsX19ib2R5LXRvZ2dsZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImNvbXBvbmVudHMtcGFuZWxfX2Fycm93XCIgcm9sZT1cImltZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+PHBhdGggZD1cIk02LjUgMTIuNEwxMiA4bDUuNSA0LjQtLjkgMS4yTDEyIDEwbC00LjUgMy42LTEtMS4yelwiPjwvcGF0aD48L3N2Zz48L3NwYW4+TWVudTwvYnV0dG9uPlxuXHRcdC8vIFx0XHRcdFx0XHQ8L2gyPlxuXHRcdC8vIFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbCBcblx0XHQvLyBcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2VsZWN0IGEgbWVudTogJyApIH1cblx0XHQvLyBcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVXBkYXRlTWVudSB9XG5cdFx0Ly8gXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lbnUgfVxuXHRcdC8vIFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBhdHRyaWJ1dGVzLm1lbnVzQXZhaWxhYmxlIH1cblx0XHQvLyBcdFx0XHRcdFx0Lz5cblx0XHQvLyBcdFx0XHRcdDwvZGl2Plx0XG5cdFx0Ly8gXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQvLyBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdiLW1lbnVzLXdyYXBwZXJcIj5cblx0XHQvLyBcdFx0XHRcdDxTZXJ2ZXJTaWRlUmVuZGVyXG5cdFx0Ly8gXHRcdFx0XHRcdGJsb2NrPVwiZ2IvYmxvY2stZ2ItbWVudVwiXG5cdFx0Ly8gXHRcdFx0XHRcdGF0dHJpYnV0ZXM9eyB7IG1lbnU6IGF0dHJpYnV0ZXMubWVudSB9IH1cblx0XHQvLyBcdFx0XHRcdC8+XG5cdFx0Ly8gXHRcdFx0PC9kaXY+XG5cdFx0Ly8gXHRcdDwvZGl2PlxuXHRcdC8vIFx0KTtcblx0XHQvLyB9LFxuXG5cdFx0Ly8gLy8gc2F2ZTogKCBwcm9wcyApID0+IHtcblx0XHQvLyAvLyBcdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzLnNhdmUoKTtcblxuXHRcdC8vIC8vIFx0cmV0dXJuIChcblx0XHQvLyAvLyBcdFx0PGRpdiB7IC4uLiBibG9ja1Byb3BzIH0gY2xhc3NOYW1lPXsgcHJvcHMuY2xhc3NOYW1lIH0+XG5cdFx0Ly8gLy8gXHRcdFx0PHA+V29ya2luZzwvcD5cblx0XHQvLyAvLyBcdFx0PC9kaXY+XG5cdFx0Ly8gLy8gXHQpO1xuXHRcdC8vIC8vIH0sXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tZW51L21lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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