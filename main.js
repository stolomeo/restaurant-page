/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 150px;\n  background-color: rgba(101, 96, 96, 0.535);\n}\n.home-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  padding-left: 150px;\n  padding-right: 150px;\n  font-size: 1.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  height: 100vh;\n  background-position: center;\n  background-attachment: fixed;\n}\n.menu-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1.5rem 150px;\n  justify-content: center;\n}\nheader img {\n  margin-bottom: 1rem;\n  position: absolute;\n  width: 300px;\n  left: 3rem;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  box-shadow: 1px 5px 12px 0 rgb(83 78 76 / 10%);\n  width: 350px;\n}\n.menu-item img {\n  width: 300px;\n  align-self: center;\n}\n.form-container {\n  max-width: 420px;\n  margin: 50px auto;\n}\n\n.title {\n  font-family: \"Roboto Serif\", serif;\n  font-size: 3rem;\n}\nnav {\n  display: flex;\n  gap: 1rem;\n}\nbutton {\n  font-size: 1.5rem;\n  width: 100px;\n  height: 50px;\n  cursor: pointer;\n  line-height: 1;\n  margin: 0.5em;\n  border-radius: 5px;\n  transition: 0.25s;\n  cursor: pointer;\n}\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.home-container img {\n  width: 30%;\n}\nh2 {\n  text-align: center;\n  font-size: 3rem;\n}\nh3 {\n  font-size: 1.5rem;\n  margin-top: 1rem;\n  margin-left: 0.7rem;\n}\n\n.userinfo {\n  color: rgb(0, 0, 0);\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  border-radius: 5px;\n  line-height: 22px;\n  background-color: transparent;\n  border: 2px solid #cc6666;\n  transition: all 0.3s;\n  padding: 13px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\ninput.userinfo:focus {\n  border: 2px solid #cc4949;\n}\ntextarea {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n[type=\"submit\"] {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #cc6666;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: rgb(32, 1, 1);\n  font-size: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n}\n[type=\"submit\"]:hover {\n  background: #cc4949;\n}\n.home-description {\n  padding: 0 5rem;\n  margin-bottom: 250px;\n  color: white;\n  font-weight: bolder;\n  text-align: center;\n  font-size: 32px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;;;;EAKE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;EACrB,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,yDAA8C;EAC9C,qBAAqB;EACrB,aAAa;EACb,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,qBAAqB;EACrB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,8CAA8C;EAC9C,YAAY;AACd;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,uDAAuD;EACvD,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 150px;\n  background-color: rgba(101, 96, 96, 0.535);\n}\n.home-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  padding-left: 150px;\n  padding-right: 150px;\n  font-size: 1.5rem;\n  background-image: url(./assets/background.jpg);\n  background-size: 100%;\n  height: 100vh;\n  background-position: center;\n  background-attachment: fixed;\n}\n.menu-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1.5rem 150px;\n  justify-content: center;\n}\nheader img {\n  margin-bottom: 1rem;\n  position: absolute;\n  width: 300px;\n  left: 3rem;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  box-shadow: 1px 5px 12px 0 rgb(83 78 76 / 10%);\n  width: 350px;\n}\n.menu-item img {\n  width: 300px;\n  align-self: center;\n}\n.form-container {\n  max-width: 420px;\n  margin: 50px auto;\n}\n\n.title {\n  font-family: \"Roboto Serif\", serif;\n  font-size: 3rem;\n}\nnav {\n  display: flex;\n  gap: 1rem;\n}\nbutton {\n  font-size: 1.5rem;\n  width: 100px;\n  height: 50px;\n  cursor: pointer;\n  line-height: 1;\n  margin: 0.5em;\n  border-radius: 5px;\n  transition: 0.25s;\n  cursor: pointer;\n}\n.header-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.home-container img {\n  width: 30%;\n}\nh2 {\n  text-align: center;\n  font-size: 3rem;\n}\nh3 {\n  font-size: 1.5rem;\n  margin-top: 1rem;\n  margin-left: 0.7rem;\n}\n\n.userinfo {\n  color: rgb(0, 0, 0);\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  border-radius: 5px;\n  line-height: 22px;\n  background-color: transparent;\n  border: 2px solid #cc6666;\n  transition: all 0.3s;\n  padding: 13px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\ninput.userinfo:focus {\n  border: 2px solid #cc4949;\n}\ntextarea {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n[type=\"submit\"] {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #cc6666;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: rgb(32, 1, 1);\n  font-size: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n}\n[type=\"submit\"]:hover {\n  background: #cc4949;\n}\n.home-description {\n  padding: 0 5rem;\n  margin-bottom: 250px;\n  color: white;\n  font-weight: bolder;\n  text-align: center;\n  font-size: 32px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/About/aboutElements.js":
/*!********************************************!*\
  !*** ./src/modules/About/aboutElements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailInput": () => (/* binding */ emailInput),
/* harmony export */   "formContainerEl": () => (/* binding */ formContainerEl),
/* harmony export */   "formHeaderEl": () => (/* binding */ formHeaderEl),
/* harmony export */   "messageInput": () => (/* binding */ messageInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "phoneInput": () => (/* binding */ phoneInput),
/* harmony export */   "submitInput": () => (/* binding */ submitInput)
/* harmony export */ });
/* harmony import */ var _utils_aboutFormConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/aboutFormConstructor */ "./src/utils/aboutFormConstructor.js");
/* harmony import */ var _utils_elementClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/elementClass */ "./src/utils/elementClass.js");



const formHeader = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_1__.TextElement(
  "formHeader",
  "form-header",
  "h2",
  "CONTACT US"
);
const formContainer = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_1__.Container("formContainer", "form-container", "div");
const nameInput = (0,_utils_aboutFormConstructor__WEBPACK_IMPORTED_MODULE_0__.formConstructor)("input", "text", "userinfo", "Name: ");
const phoneInput = (0,_utils_aboutFormConstructor__WEBPACK_IMPORTED_MODULE_0__.formConstructor)("input", "number", "userinfo", "Phone No: ");
const emailInput = (0,_utils_aboutFormConstructor__WEBPACK_IMPORTED_MODULE_0__.formConstructor)(
  "input",
  "email",
  "userinfo",
  "Email Address: "
);
const messageInput = (0,_utils_aboutFormConstructor__WEBPACK_IMPORTED_MODULE_0__.formConstructor)(
  "textarea",
  "text",
  "userinfo",
  "Message: "
);
const submitInput = (0,_utils_aboutFormConstructor__WEBPACK_IMPORTED_MODULE_0__.submitBtnConstructor)("submit", "SUBMIT");

const formHeaderEl = formHeader.createTextElement();
const formContainerEl = formContainer.createContainer();




/***/ }),

/***/ "./src/modules/About/aboutFunctions.js":
/*!*********************************************!*\
  !*** ./src/modules/About/aboutFunctions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "loadAbout": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _utils_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/main */ "./src/utils/main.js");
/* harmony import */ var _aboutElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutElements */ "./src/modules/About/aboutElements.js");



const createForm = () => {
  _aboutElements__WEBPACK_IMPORTED_MODULE_1__.formContainerEl.append(
    _aboutElements__WEBPACK_IMPORTED_MODULE_1__.nameInput,
    _aboutElements__WEBPACK_IMPORTED_MODULE_1__.phoneInput,
    _aboutElements__WEBPACK_IMPORTED_MODULE_1__.emailInput,
    _aboutElements__WEBPACK_IMPORTED_MODULE_1__.messageInput,
    _aboutElements__WEBPACK_IMPORTED_MODULE_1__.submitInput
  );
  return _aboutElements__WEBPACK_IMPORTED_MODULE_1__.formContainerEl;
};

const loadAbout = () => {
  const main = (0,_utils_main__WEBPACK_IMPORTED_MODULE_0__.clearMain)();
  main.append(_aboutElements__WEBPACK_IMPORTED_MODULE_1__.formHeaderEl, createForm());
  return main;
};


/***/ }),

/***/ "./src/modules/Header/headerElements.js":
/*!**********************************************!*\
  !*** ./src/modules/Header/headerElements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerContainerEl": () => (/* binding */ headerContainerEl),
/* harmony export */   "headerLeftEl": () => (/* binding */ headerLeftEl),
/* harmony export */   "headerLogoEl": () => (/* binding */ headerLogoEl)
/* harmony export */ });
/* harmony import */ var _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/elementClass */ "./src/utils/elementClass.js");
/* harmony import */ var _assets_Barista_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/Barista-transparent.png */ "./src/assets/Barista-transparent.png");



const headerContainer = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.Element("header", "header");
const headerLeft = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.Container("headerleft", "header-left", "div");
const headerLogo = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.Img("headerLogo", _assets_Barista_transparent_png__WEBPACK_IMPORTED_MODULE_1__);

const headerContainerEl = headerContainer.createElement();
const headerLeftEl = headerLeft.createContainer();
const headerLogoEl = headerLogo.createImg();




/***/ }),

/***/ "./src/modules/Header/headerFunctions.js":
/*!***********************************************!*\
  !*** ./src/modules/Header/headerFunctions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createHeaderLeft": () => (/* binding */ createHeaderLeft)
/* harmony export */ });
/* harmony import */ var _Nav_navFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Nav/navFunctions */ "./src/modules/Nav/navFunctions.js");
/* harmony import */ var _headerElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerElements */ "./src/modules/Header/headerElements.js");



const createHeaderLeft = () => {
  _headerElements__WEBPACK_IMPORTED_MODULE_1__.headerLeftEl.append(_headerElements__WEBPACK_IMPORTED_MODULE_1__.headerLogoEl);
  return _headerElements__WEBPACK_IMPORTED_MODULE_1__.headerLeftEl;
};

const createHeader = () => {
  _headerElements__WEBPACK_IMPORTED_MODULE_1__.headerContainerEl.append(createHeaderLeft(), (0,_Nav_navFunctions__WEBPACK_IMPORTED_MODULE_0__.createNav)());
  return _headerElements__WEBPACK_IMPORTED_MODULE_1__.headerContainerEl;
};


/***/ }),

/***/ "./src/modules/Home/homeElements.js":
/*!******************************************!*\
  !*** ./src/modules/Home/homeElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeContainerEl": () => (/* binding */ homeContainerEl),
/* harmony export */   "homeDescriptionEl": () => (/* binding */ homeDescriptionEl)
/* harmony export */ });
/* harmony import */ var _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/elementClass */ "./src/utils/elementClass.js");


const homeContainer = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.Container("homeContainer", "home-container", "div");
const homeDescription = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.TextElement(
  "homeDescrption",
  "home-description",
  "h2",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Proin nibh tortor, accumsan sed blandit in, venenatis quis elit. Donec in ex tellus. 
  Morbi sit amet sem vitae ex suscipit ultricies vel vel mauris.`
);

const homeContainerEl = homeContainer.createContainer();
const homeDescriptionEl = homeDescription.createTextElement();




/***/ }),

/***/ "./src/modules/Home/homeFunctions.js":
/*!*******************************************!*\
  !*** ./src/modules/Home/homeFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome),
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _utils_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/main */ "./src/utils/main.js");
/* harmony import */ var _homeElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeElements */ "./src/modules/Home/homeElements.js");



const createHome = () => {
  _homeElements__WEBPACK_IMPORTED_MODULE_1__.homeContainerEl.append(_homeElements__WEBPACK_IMPORTED_MODULE_1__.homeDescriptionEl);
  return _homeElements__WEBPACK_IMPORTED_MODULE_1__.homeContainerEl;
};

const loadHome = () => {
  const main = (0,_utils_main__WEBPACK_IMPORTED_MODULE_0__.clearMain)();
  main.append(createHome());
  return main;
};


/***/ }),

/***/ "./src/modules/Menu/menuElements.js":
/*!******************************************!*\
  !*** ./src/modules/Menu/menuElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuCard": () => (/* binding */ menuCard),
/* harmony export */   "menuContainerEl": () => (/* binding */ menuContainerEl)
/* harmony export */ });
/* harmony import */ var _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/elementClass */ "./src/utils/elementClass.js");


const menuContainer = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.Container("menuContainer", "menu-container", "div");
const menuCard = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.Container("menuCard", "menu-item", "div");
const menuContainerEl = menuContainer.createContainer();




/***/ }),

/***/ "./src/modules/Menu/menuFunctions.js":
/*!*******************************************!*\
  !*** ./src/modules/Menu/menuFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "createMenuImg": () => (/* binding */ createMenuImg),
/* harmony export */   "createMenuTitle": () => (/* binding */ createMenuTitle),
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu),
/* harmony export */   "menuOptions": () => (/* binding */ menuOptions)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style.css */ "./src/style.css");
/* harmony import */ var _utils_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/main */ "./src/utils/main.js");
/* harmony import */ var _menuElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuElements */ "./src/modules/Menu/menuElements.js");
/* harmony import */ var _menuOptionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuOptionsList */ "./src/modules/Menu/menuOptionsList.js");






const createMenuTitle = (title) => {
  const menuTitle = document.createElement("h3");
  menuTitle.textContent = title;
  return menuTitle;
};

const createMenuImg = (src) => {
  const menuImg = document.createElement("img");
  menuImg.src = src;
  return menuImg;
};

const menuOptions = _menuOptionsList__WEBPACK_IMPORTED_MODULE_3__.menuOptionsList.map((menuOption) => {
  const menuImg = createMenuImg(menuOption.image);
  const menuTitle = createMenuTitle(menuOption.title);
  const menuCardEl = _menuElements__WEBPACK_IMPORTED_MODULE_2__.menuCard.createContainer();
  menuCardEl.append(menuImg, menuTitle);
  _menuElements__WEBPACK_IMPORTED_MODULE_2__.menuContainerEl.append(menuCardEl);
  return menuCardEl;
});

const createMenu = () => {
  _menuElements__WEBPACK_IMPORTED_MODULE_2__.menuContainerEl.append(...menuOptions);
  return _menuElements__WEBPACK_IMPORTED_MODULE_2__.menuContainerEl;
};

const loadMenu = () => {
  const main = (0,_utils_main__WEBPACK_IMPORTED_MODULE_1__.clearMain)();
  main.append(createMenu());
  return main;
};


/***/ }),

/***/ "./src/modules/Menu/menuOptionsList.js":
/*!*********************************************!*\
  !*** ./src/modules/Menu/menuOptionsList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuOptionsList": () => (/* binding */ menuOptionsList)
/* harmony export */ });
/* harmony import */ var _assets_avocado_toast_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/avocado-toast.png */ "./src/assets/avocado-toast.png");
/* harmony import */ var _assets_biscuits_and_turkey_sausage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/biscuits-and-turkey-sausage.png */ "./src/assets/biscuits-and-turkey-sausage.png");
/* harmony import */ var _assets_chickichanga_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/chickichanga.png */ "./src/assets/chickichanga.png");
/* harmony import */ var _assets_elevated_egg_sandwich_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/elevated-egg-sandwich.png */ "./src/assets/elevated-egg-sandwich.png");
/* harmony import */ var _assets_french_toast_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/french-toast.png */ "./src/assets/french-toast.png");
/* harmony import */ var _assets_multigrain_pancake_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/multigrain-pancake.png */ "./src/assets/multigrain-pancake.png");
/* harmony import */ var _assets_smoked_salmon_benedict_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/smoked-salmon-benedict.png */ "./src/assets/smoked-salmon-benedict.png");
/* harmony import */ var _assets_the_traditional_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/the-traditional.png */ "./src/assets/the-traditional.png");
/* harmony import */ var _assets_trifecta_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/trifecta.png */ "./src/assets/trifecta.png");










const menuOptionsList = [
  {
    image: _assets_trifecta_png__WEBPACK_IMPORTED_MODULE_8__,
    title: "Tri-fecta",
  },
  {
    image: _assets_the_traditional_png__WEBPACK_IMPORTED_MODULE_7__,
    title: "The Traditional",
  },
  {
    image: _assets_avocado_toast_png__WEBPACK_IMPORTED_MODULE_0__,
    title: "Avocado Toast",
  },
  {
    image: _assets_french_toast_png__WEBPACK_IMPORTED_MODULE_4__,
    title: "French Toast",
  },
  {
    image: _assets_multigrain_pancake_png__WEBPACK_IMPORTED_MODULE_5__,
    title: "Multigrain Pancake",
  },
  {
    image: _assets_elevated_egg_sandwich_png__WEBPACK_IMPORTED_MODULE_3__,
    title: "Elevated Egg Sandwich",
  },
  {
    image: _assets_biscuits_and_turkey_sausage_png__WEBPACK_IMPORTED_MODULE_1__,
    title: "Buscuits & Turkey Sausage",
  },
  {
    image: _assets_chickichanga_png__WEBPACK_IMPORTED_MODULE_2__,
    title: "Chickichanga",
  },
  {
    image: _assets_smoked_salmon_benedict_png__WEBPACK_IMPORTED_MODULE_6__,
    title: "Smoked SalmonB enedict",
  },
];


/***/ }),

/***/ "./src/modules/Nav/navBtnClass.js":
/*!****************************************!*\
  !*** ./src/modules/Nav/navBtnClass.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBtn": () => (/* binding */ navBtn)
/* harmony export */ });
/* harmony import */ var _navFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navFunctions */ "./src/modules/Nav/navFunctions.js");


class navBtn {
  constructor(element, textContent, func) {
    this.element = element;
    this.textContent = textContent;
    this.func = func;
  }
  createBtn() {
    this.element = document.createElement("button");
    this.element.textContent = this.textContent;
    return this.element;
  }
  handleClick() {
    this.element.addEventListener("click", (e) => {
      const { classList } = e.target;
      if (classList.contains("active")) return;
      (0,_navFunctions__WEBPACK_IMPORTED_MODULE_0__.removeButtonActive)();
      (0,_navFunctions__WEBPACK_IMPORTED_MODULE_0__.setButtonActive)(this.element);
      this.func();
    });
  }
}


/***/ }),

/***/ "./src/modules/Nav/navElements.js":
/*!****************************************!*\
  !*** ./src/modules/Nav/navElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navAboutBtnEl": () => (/* binding */ navAboutBtnEl),
/* harmony export */   "navBtns": () => (/* binding */ navBtns),
/* harmony export */   "navContainerEl": () => (/* binding */ navContainerEl),
/* harmony export */   "navHomeBtnEl": () => (/* binding */ navHomeBtnEl),
/* harmony export */   "navMenuBtnEl": () => (/* binding */ navMenuBtnEl)
/* harmony export */ });
/* harmony import */ var _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/elementClass */ "./src/utils/elementClass.js");
/* harmony import */ var _About_aboutFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../About/aboutFunctions */ "./src/modules/About/aboutFunctions.js");
/* harmony import */ var _Home_homeFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/homeFunctions */ "./src/modules/Home/homeFunctions.js");
/* harmony import */ var _Menu_menuFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/menuFunctions */ "./src/modules/Menu/menuFunctions.js");
/* harmony import */ var _navBtnClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navBtnClass */ "./src/modules/Nav/navBtnClass.js");






const navContainer = new _utils_elementClass__WEBPACK_IMPORTED_MODULE_0__.Container("navContainer", "nav", "nav");
const navHomeBtn = new _navBtnClass__WEBPACK_IMPORTED_MODULE_4__.navBtn("navHomeBtn", "Home", _Home_homeFunctions__WEBPACK_IMPORTED_MODULE_2__.loadHome);
const navMenuBtn = new _navBtnClass__WEBPACK_IMPORTED_MODULE_4__.navBtn("navMenuBtn", "Menu", _Menu_menuFunctions__WEBPACK_IMPORTED_MODULE_3__.loadMenu);
const navAboutBtn = new _navBtnClass__WEBPACK_IMPORTED_MODULE_4__.navBtn("navAboutBtn", "About", _About_aboutFunctions__WEBPACK_IMPORTED_MODULE_1__.loadAbout);

const navContainerEl = navContainer.createContainer();
const navHomeBtnEl = navHomeBtn.createBtn();
const navMenuBtnEl = navMenuBtn.createBtn();
const navAboutBtnEl = navAboutBtn.createBtn();
const navBtns = [navHomeBtn, navMenuBtn, navAboutBtn];




/***/ }),

/***/ "./src/modules/Nav/navFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/Nav/navFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "removeButtonActive": () => (/* binding */ removeButtonActive),
/* harmony export */   "setButtonActive": () => (/* binding */ setButtonActive)
/* harmony export */ });
/* harmony import */ var _utils_selectNavButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/selectNavButtons */ "./src/utils/selectNavButtons.js");
/* harmony import */ var _navElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navElements */ "./src/modules/Nav/navElements.js");



const setButtonActive = (btn) => {
  btn.classList.add("active");
};
const removeButtonActive = () => {
  const buttons = (0,_utils_selectNavButtons__WEBPACK_IMPORTED_MODULE_0__.selectNavButtons)();
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const createNav = () => {
  _navElements__WEBPACK_IMPORTED_MODULE_1__.navContainerEl.append(_navElements__WEBPACK_IMPORTED_MODULE_1__.navHomeBtnEl, _navElements__WEBPACK_IMPORTED_MODULE_1__.navMenuBtnEl, _navElements__WEBPACK_IMPORTED_MODULE_1__.navAboutBtnEl);
  return _navElements__WEBPACK_IMPORTED_MODULE_1__.navContainerEl;
};


/***/ }),

/***/ "./src/utils/aboutFormConstructor.js":
/*!*******************************************!*\
  !*** ./src/utils/aboutFormConstructor.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formConstructor": () => (/* binding */ formConstructor),
/* harmony export */   "submitBtnConstructor": () => (/* binding */ submitBtnConstructor)
/* harmony export */ });
const formConstructor = (tagName, type, className, placeholder) => {
  let el = document.createElement(tagName);
  el.setAttribute("type", type);
  el.setAttribute("class", className);
  el.setAttribute("placeholder", placeholder);
  return el;
};

const submitBtnConstructor = (type, value) => {
  let el = document.createElement("input");
  el.setAttribute("type", type);
  el.setAttribute("value", value);
  return el;
};


/***/ }),

/***/ "./src/utils/elementClass.js":
/*!***********************************!*\
  !*** ./src/utils/elementClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Img": () => (/* binding */ Img),
/* harmony export */   "TextElement": () => (/* binding */ TextElement)
/* harmony export */ });
class Element {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  createElement() {
    this.name = document.createElement(this.type);
    return this.name;
  }
}

class Container extends Element {
  constructor(name, className, type) {
    super(name, type);
    this.className = className;
  }
  createContainer() {
    this.name = document.createElement(this.type);
    this.name.classList.add(this.className);
    return this.name;
  }
}

class Img extends Element {
  constructor(name, source) {
    super(name);
    this.source = source;
  }
  createImg() {
    this.name = document.createElement("img");
    this.name.src = this.source;
    return this.name;
  }
}

class TextElement extends Container {
  constructor(name, className, type, textContent) {
    super(name, className, type);
    this.textContent = textContent;
  }
  createTextElement() {
    this.name = document.createElement(this.type);
    this.name.classList.add(this.className);
    this.name.textContent = this.textContent;
    return this.name;
  }
}


/***/ }),

/***/ "./src/utils/main.js":
/*!***************************!*\
  !*** ./src/utils/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMain": () => (/* binding */ clearMain),
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "selectMain": () => (/* binding */ selectMain)
/* harmony export */ });
const createMain = () => {
  const main = document.createElement("main");
  return main;
};

const selectMain = () => {
  const main = document.querySelector("main");
  return main;
};

const clearMain = () => {
  const main = selectMain();
  main.textContent = "";
  return main;
};


/***/ }),

/***/ "./src/utils/selectNavButtons.js":
/*!***************************************!*\
  !*** ./src/utils/selectNavButtons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectNavButtons": () => (/* binding */ selectNavButtons)
/* harmony export */ });
const selectNavButtons = () => {
  const buttons = document.querySelectorAll(".nav button");
  return buttons;
};


/***/ }),

/***/ "./src/assets/Barista-transparent.png":
/*!********************************************!*\
  !*** ./src/assets/Barista-transparent.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0740fe30e6a8dfc074fe.png";

/***/ }),

/***/ "./src/assets/avocado-toast.png":
/*!**************************************!*\
  !*** ./src/assets/avocado-toast.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "212e74ee7db7e9ac06c6.png";

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c73b5067dd3813e8bbb8.jpg";

/***/ }),

/***/ "./src/assets/biscuits-and-turkey-sausage.png":
/*!****************************************************!*\
  !*** ./src/assets/biscuits-and-turkey-sausage.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5484542ccfb53c2afc4c.png";

/***/ }),

/***/ "./src/assets/chickichanga.png":
/*!*************************************!*\
  !*** ./src/assets/chickichanga.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16a164bf483b7aabc7c5.png";

/***/ }),

/***/ "./src/assets/elevated-egg-sandwich.png":
/*!**********************************************!*\
  !*** ./src/assets/elevated-egg-sandwich.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb21dd0764287e25e7fa.png";

/***/ }),

/***/ "./src/assets/french-toast.png":
/*!*************************************!*\
  !*** ./src/assets/french-toast.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35bbcfdd5908007bdc16.png";

/***/ }),

/***/ "./src/assets/multigrain-pancake.png":
/*!*******************************************!*\
  !*** ./src/assets/multigrain-pancake.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7618ef54784948c849be.png";

/***/ }),

/***/ "./src/assets/smoked-salmon-benedict.png":
/*!***********************************************!*\
  !*** ./src/assets/smoked-salmon-benedict.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90d522d39507f2789f59.png";

/***/ }),

/***/ "./src/assets/the-traditional.png":
/*!****************************************!*\
  !*** ./src/assets/the-traditional.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09ff86ad499fa00dbdd2.png";

/***/ }),

/***/ "./src/assets/trifecta.png":
/*!*********************************!*\
  !*** ./src/assets/trifecta.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61921da43ec475c413f5.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Header_headerFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Header/headerFunctions */ "./src/modules/Header/headerFunctions.js");
/* harmony import */ var _modules_Home_homeFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Home/homeFunctions */ "./src/modules/Home/homeFunctions.js");
/* harmony import */ var _modules_Nav_navElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Nav/navElements */ "./src/modules/Nav/navElements.js");
/* harmony import */ var _utils_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/main */ "./src/utils/main.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const content = document.querySelector("#content");
content.append((0,_modules_Header_headerFunctions__WEBPACK_IMPORTED_MODULE_0__.createHeader)(), (0,_utils_main__WEBPACK_IMPORTED_MODULE_3__.createMain)());

_modules_Nav_navElements__WEBPACK_IMPORTED_MODULE_2__.navBtns.forEach((btn) => {
  btn.handleClick();
});

(0,_modules_Home_homeFunctions__WEBPACK_IMPORTED_MODULE_1__.loadHome)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmdFO0FBQ1I7QUFDSjtBQUNWO0FBQ3JCOztBQUVyQjtBQUNBLGVBQWUsNkVBQVksSUFBSSx1REFBVTs7QUFFekMscUVBQWU7QUFDZjtBQUNBLENBQUM7O0FBRUQscUVBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9BYm91dC9hYm91dEVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL0Fib3V0L2Fib3V0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL0hlYWRlci9oZWFkZXJFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9IZWFkZXIvaGVhZGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL0hvbWUvaG9tZUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL0hvbWUvaG9tZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9NZW51L21lbnVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9NZW51L21lbnVGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvTWVudS9tZW51T3B0aW9uc0xpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvTmF2L25hdkJ0bkNsYXNzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL05hdi9uYXZFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9OYXYvbmF2RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy9hYm91dEZvcm1Db25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbHMvZWxlbWVudENsYXNzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy9zZWxlY3ROYXZCdXR0b25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW0gMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgOTYsIDk2LCAwLjUzNSk7XFxufVxcbi5ob21lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMTUwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDEuNXJlbSAxNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5oZWFkZXIgaW1nIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBsZWZ0OiAzcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTJweCAwIHJnYig4MyA3OCA3NiAvIDEwJSk7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNDIwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNlcmlmXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob21lLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogMC43cmVtO1xcbn1cXG5cXG4udXNlcmluZm8ge1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2M2NjY2O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBwYWRkaW5nOiAxM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IDA7XFxufVxcbmlucHV0LnVzZXJpbmZvOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYzQ5NDk7XFxufVxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjY2M2NjY2O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigzMiwgMSwgMSk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjYzQ5NDk7XFxufVxcbi5ob21lLWRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDAgNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7O0VBS0UsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseURBQThDO0VBQzlDLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMS41cmVtIDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDk2LCA5NiwgMC41MzUpO1xcbn1cXG4uaG9tZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTUwcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxLjVyZW0gMTUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGltZyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbGVmdDogM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDEycHggMCByZ2IoODMgNzggNzYgLyAxMCUpO1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTZXJpZlxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9tZS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcXG59XFxuXFxuLnVzZXJpbmZvIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjNjY2NjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgcGFkZGluZzogMTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5pbnB1dC51c2VyaW5mbzpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2M0OTQ5O1xcbn1cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2NjNjY2NjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMzIsIDEsIDEpO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgbWFyZ2luLXRvcDogLTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2M0OTQ5O1xcbn1cXG4uaG9tZS1kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwIDVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyNTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBmb3JtQ29uc3RydWN0b3IsXG4gIHN1Ym1pdEJ0bkNvbnN0cnVjdG9yLFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvYWJvdXRGb3JtQ29uc3RydWN0b3JcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZWxlbWVudENsYXNzXCI7XG5cbmNvbnN0IGZvcm1IZWFkZXIgPSBuZXcgVGV4dEVsZW1lbnQoXG4gIFwiZm9ybUhlYWRlclwiLFxuICBcImZvcm0taGVhZGVyXCIsXG4gIFwiaDJcIixcbiAgXCJDT05UQUNUIFVTXCJcbik7XG5jb25zdCBmb3JtQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcImZvcm1Db250YWluZXJcIiwgXCJmb3JtLWNvbnRhaW5lclwiLCBcImRpdlwiKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGZvcm1Db25zdHJ1Y3RvcihcImlucHV0XCIsIFwidGV4dFwiLCBcInVzZXJpbmZvXCIsIFwiTmFtZTogXCIpO1xuY29uc3QgcGhvbmVJbnB1dCA9IGZvcm1Db25zdHJ1Y3RvcihcImlucHV0XCIsIFwibnVtYmVyXCIsIFwidXNlcmluZm9cIiwgXCJQaG9uZSBObzogXCIpO1xuY29uc3QgZW1haWxJbnB1dCA9IGZvcm1Db25zdHJ1Y3RvcihcbiAgXCJpbnB1dFwiLFxuICBcImVtYWlsXCIsXG4gIFwidXNlcmluZm9cIixcbiAgXCJFbWFpbCBBZGRyZXNzOiBcIlxuKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dCA9IGZvcm1Db25zdHJ1Y3RvcihcbiAgXCJ0ZXh0YXJlYVwiLFxuICBcInRleHRcIixcbiAgXCJ1c2VyaW5mb1wiLFxuICBcIk1lc3NhZ2U6IFwiXG4pO1xuY29uc3Qgc3VibWl0SW5wdXQgPSBzdWJtaXRCdG5Db25zdHJ1Y3RvcihcInN1Ym1pdFwiLCBcIlNVQk1JVFwiKTtcblxuY29uc3QgZm9ybUhlYWRlckVsID0gZm9ybUhlYWRlci5jcmVhdGVUZXh0RWxlbWVudCgpO1xuY29uc3QgZm9ybUNvbnRhaW5lckVsID0gZm9ybUNvbnRhaW5lci5jcmVhdGVDb250YWluZXIoKTtcblxuZXhwb3J0IHtcbiAgZm9ybUhlYWRlckVsLFxuICBmb3JtQ29udGFpbmVyRWwsXG4gIG5hbWVJbnB1dCxcbiAgcGhvbmVJbnB1dCxcbiAgZW1haWxJbnB1dCxcbiAgbWVzc2FnZUlucHV0LFxuICBzdWJtaXRJbnB1dCxcbn07XG4iLCJpbXBvcnQgeyBjbGVhck1haW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWFpblwiO1xuaW1wb3J0IHtcbiAgZW1haWxJbnB1dCxcbiAgZm9ybUNvbnRhaW5lckVsLFxuICBmb3JtSGVhZGVyRWwsXG4gIG1lc3NhZ2VJbnB1dCxcbiAgbmFtZUlucHV0LFxuICBwaG9uZUlucHV0LFxuICBzdWJtaXRJbnB1dCxcbn0gZnJvbSBcIi4vYWJvdXRFbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgZm9ybUNvbnRhaW5lckVsLmFwcGVuZChcbiAgICBuYW1lSW5wdXQsXG4gICAgcGhvbmVJbnB1dCxcbiAgICBlbWFpbElucHV0LFxuICAgIG1lc3NhZ2VJbnB1dCxcbiAgICBzdWJtaXRJbnB1dFxuICApO1xuICByZXR1cm4gZm9ybUNvbnRhaW5lckVsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGNsZWFyTWFpbigpO1xuICBtYWluLmFwcGVuZChmb3JtSGVhZGVyRWwsIGNyZWF0ZUZvcm0oKSk7XG4gIHJldHVybiBtYWluO1xufTtcbiIsImltcG9ydCB7IENvbnRhaW5lciwgRWxlbWVudCwgSW1nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2VsZW1lbnRDbGFzc1wiO1xuaW1wb3J0IEhlYWRlckxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9CYXJpc3RhLXRyYW5zcGFyZW50LnBuZ1wiO1xuXG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBuZXcgRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiKTtcbmNvbnN0IGhlYWRlckxlZnQgPSBuZXcgQ29udGFpbmVyKFwiaGVhZGVybGVmdFwiLCBcImhlYWRlci1sZWZ0XCIsIFwiZGl2XCIpO1xuY29uc3QgaGVhZGVyTG9nbyA9IG5ldyBJbWcoXCJoZWFkZXJMb2dvXCIsIEhlYWRlckxvZ28pO1xuXG5jb25zdCBoZWFkZXJDb250YWluZXJFbCA9IGhlYWRlckNvbnRhaW5lci5jcmVhdGVFbGVtZW50KCk7XG5jb25zdCBoZWFkZXJMZWZ0RWwgPSBoZWFkZXJMZWZ0LmNyZWF0ZUNvbnRhaW5lcigpO1xuY29uc3QgaGVhZGVyTG9nb0VsID0gaGVhZGVyTG9nby5jcmVhdGVJbWcoKTtcblxuZXhwb3J0IHsgaGVhZGVyQ29udGFpbmVyRWwsIGhlYWRlckxlZnRFbCwgaGVhZGVyTG9nb0VsIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVOYXYgfSBmcm9tIFwiLi4vTmF2L25hdkZ1bmN0aW9uc1wiO1xuaW1wb3J0IHtcbiAgaGVhZGVyQ29udGFpbmVyRWwsXG4gIGhlYWRlckxlZnRFbCxcbiAgaGVhZGVyTG9nb0VsLFxufSBmcm9tIFwiLi9oZWFkZXJFbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSGVhZGVyTGVmdCA9ICgpID0+IHtcbiAgaGVhZGVyTGVmdEVsLmFwcGVuZChoZWFkZXJMb2dvRWwpO1xuICByZXR1cm4gaGVhZGVyTGVmdEVsO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgaGVhZGVyQ29udGFpbmVyRWwuYXBwZW5kKGNyZWF0ZUhlYWRlckxlZnQoKSwgY3JlYXRlTmF2KCkpO1xuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyRWw7XG59O1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0RWxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9lbGVtZW50Q2xhc3NcIjtcblxuY29uc3QgaG9tZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJob21lQ29udGFpbmVyXCIsIFwiaG9tZS1jb250YWluZXJcIiwgXCJkaXZcIik7XG5jb25zdCBob21lRGVzY3JpcHRpb24gPSBuZXcgVGV4dEVsZW1lbnQoXG4gIFwiaG9tZURlc2NycHRpb25cIixcbiAgXCJob21lLWRlc2NyaXB0aW9uXCIsXG4gIFwiaDJcIixcbiAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFxuICBQcm9pbiBuaWJoIHRvcnRvciwgYWNjdW1zYW4gc2VkIGJsYW5kaXQgaW4sIHZlbmVuYXRpcyBxdWlzIGVsaXQuIERvbmVjIGluIGV4IHRlbGx1cy4gXG4gIE1vcmJpIHNpdCBhbWV0IHNlbSB2aXRhZSBleCBzdXNjaXBpdCB1bHRyaWNpZXMgdmVsIHZlbCBtYXVyaXMuYFxuKTtcblxuY29uc3QgaG9tZUNvbnRhaW5lckVsID0gaG9tZUNvbnRhaW5lci5jcmVhdGVDb250YWluZXIoKTtcbmNvbnN0IGhvbWVEZXNjcmlwdGlvbkVsID0gaG9tZURlc2NyaXB0aW9uLmNyZWF0ZVRleHRFbGVtZW50KCk7XG5cbmV4cG9ydCB7IGhvbWVDb250YWluZXJFbCwgaG9tZURlc2NyaXB0aW9uRWwgfTtcbiIsImltcG9ydCB7IGNsZWFyTWFpbiB9IGZyb20gXCIuLi8uLi91dGlscy9tYWluXCI7XG5pbXBvcnQgeyBob21lQ29udGFpbmVyRWwsIGhvbWVEZXNjcmlwdGlvbkVsLCBob21lSW1nRWwgfSBmcm9tIFwiLi9ob21lRWxlbWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGhvbWVDb250YWluZXJFbC5hcHBlbmQoaG9tZURlc2NyaXB0aW9uRWwpO1xuICByZXR1cm4gaG9tZUNvbnRhaW5lckVsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gY2xlYXJNYWluKCk7XG4gIG1haW4uYXBwZW5kKGNyZWF0ZUhvbWUoKSk7XG4gIHJldHVybiBtYWluO1xufTtcbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi91dGlscy9lbGVtZW50Q2xhc3NcIjtcblxuY29uc3QgbWVudUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJtZW51Q29udGFpbmVyXCIsIFwibWVudS1jb250YWluZXJcIiwgXCJkaXZcIik7XG5jb25zdCBtZW51Q2FyZCA9IG5ldyBDb250YWluZXIoXCJtZW51Q2FyZFwiLCBcIm1lbnUtaXRlbVwiLCBcImRpdlwiKTtcbmNvbnN0IG1lbnVDb250YWluZXJFbCA9IG1lbnVDb250YWluZXIuY3JlYXRlQ29udGFpbmVyKCk7XG5cbmV4cG9ydCB7IG1lbnVDb250YWluZXJFbCwgbWVudUNhcmQgfTtcbiIsImltcG9ydCBcIi4uLy4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY2xlYXJNYWluIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21haW5cIjtcblxuaW1wb3J0IHsgbWVudUNhcmQsIG1lbnVDb250YWluZXJFbCB9IGZyb20gXCIuL21lbnVFbGVtZW50c1wiO1xuaW1wb3J0IHsgbWVudU9wdGlvbnNMaXN0IH0gZnJvbSBcIi4vbWVudU9wdGlvbnNMaXN0XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgcmV0dXJuIG1lbnVUaXRsZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51SW1nID0gKHNyYykgPT4ge1xuICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWVudUltZy5zcmMgPSBzcmM7XG4gIHJldHVybiBtZW51SW1nO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lbnVPcHRpb25zID0gbWVudU9wdGlvbnNMaXN0Lm1hcCgobWVudU9wdGlvbikgPT4ge1xuICBjb25zdCBtZW51SW1nID0gY3JlYXRlTWVudUltZyhtZW51T3B0aW9uLmltYWdlKTtcbiAgY29uc3QgbWVudVRpdGxlID0gY3JlYXRlTWVudVRpdGxlKG1lbnVPcHRpb24udGl0bGUpO1xuICBjb25zdCBtZW51Q2FyZEVsID0gbWVudUNhcmQuY3JlYXRlQ29udGFpbmVyKCk7XG4gIG1lbnVDYXJkRWwuYXBwZW5kKG1lbnVJbWcsIG1lbnVUaXRsZSk7XG4gIG1lbnVDb250YWluZXJFbC5hcHBlbmQobWVudUNhcmRFbCk7XG4gIHJldHVybiBtZW51Q2FyZEVsO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBtZW51Q29udGFpbmVyRWwuYXBwZW5kKC4uLm1lbnVPcHRpb25zKTtcbiAgcmV0dXJuIG1lbnVDb250YWluZXJFbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGNsZWFyTWFpbigpO1xuICBtYWluLmFwcGVuZChjcmVhdGVNZW51KCkpO1xuICByZXR1cm4gbWFpbjtcbn07XG4iLCJpbXBvcnQgQXZvY2Fkb1RvYXN0IGZyb20gXCIuLi8uLi9hc3NldHMvYXZvY2Fkby10b2FzdC5wbmdcIjtcbmltcG9ydCBCdXNjdWl0c0FuZFR1cmtleVNhdXNhZ2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9iaXNjdWl0cy1hbmQtdHVya2V5LXNhdXNhZ2UucG5nXCI7XG5pbXBvcnQgQ2hpY2tpY2hhbmdhIGZyb20gXCIuLi8uLi9hc3NldHMvY2hpY2tpY2hhbmdhLnBuZ1wiO1xuaW1wb3J0IEVsZXZhdGVkRWdnU2FuZHdpY2ggZnJvbSBcIi4uLy4uL2Fzc2V0cy9lbGV2YXRlZC1lZ2ctc2FuZHdpY2gucG5nXCI7XG5pbXBvcnQgRnJlbmNoVG9hc3QgZnJvbSBcIi4uLy4uL2Fzc2V0cy9mcmVuY2gtdG9hc3QucG5nXCI7XG5pbXBvcnQgTXVsdGlncmFpblBhbmNha2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9tdWx0aWdyYWluLXBhbmNha2UucG5nXCI7XG5pbXBvcnQgU21va2VkU2FsbW9uQmVuZWRpY3QgZnJvbSBcIi4uLy4uL2Fzc2V0cy9zbW9rZWQtc2FsbW9uLWJlbmVkaWN0LnBuZ1wiO1xuaW1wb3J0IFRyYWRpdGlvbmFsIGZyb20gXCIuLi8uLi9hc3NldHMvdGhlLXRyYWRpdGlvbmFsLnBuZ1wiO1xuaW1wb3J0IFRyaWZlY3RhIGZyb20gXCIuLi8uLi9hc3NldHMvdHJpZmVjdGEucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBtZW51T3B0aW9uc0xpc3QgPSBbXG4gIHtcbiAgICBpbWFnZTogVHJpZmVjdGEsXG4gICAgdGl0bGU6IFwiVHJpLWZlY3RhXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogVHJhZGl0aW9uYWwsXG4gICAgdGl0bGU6IFwiVGhlIFRyYWRpdGlvbmFsXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogQXZvY2Fkb1RvYXN0LFxuICAgIHRpdGxlOiBcIkF2b2NhZG8gVG9hc3RcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBGcmVuY2hUb2FzdCxcbiAgICB0aXRsZTogXCJGcmVuY2ggVG9hc3RcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBNdWx0aWdyYWluUGFuY2FrZSxcbiAgICB0aXRsZTogXCJNdWx0aWdyYWluIFBhbmNha2VcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBFbGV2YXRlZEVnZ1NhbmR3aWNoLFxuICAgIHRpdGxlOiBcIkVsZXZhdGVkIEVnZyBTYW5kd2ljaFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IEJ1c2N1aXRzQW5kVHVya2V5U2F1c2FnZSxcbiAgICB0aXRsZTogXCJCdXNjdWl0cyAmIFR1cmtleSBTYXVzYWdlXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogQ2hpY2tpY2hhbmdhLFxuICAgIHRpdGxlOiBcIkNoaWNraWNoYW5nYVwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFNtb2tlZFNhbG1vbkJlbmVkaWN0LFxuICAgIHRpdGxlOiBcIlNtb2tlZCBTYWxtb25CIGVuZWRpY3RcIixcbiAgfSxcbl07XG4iLCJpbXBvcnQgeyByZW1vdmVCdXR0b25BY3RpdmUsIHNldEJ1dHRvbkFjdGl2ZSB9IGZyb20gXCIuL25hdkZ1bmN0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgbmF2QnRuIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgdGV4dENvbnRlbnQsIGZ1bmMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICB0aGlzLmZ1bmMgPSBmdW5jO1xuICB9XG4gIGNyZWF0ZUJ0bigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gZS50YXJnZXQ7XG4gICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICByZW1vdmVCdXR0b25BY3RpdmUoKTtcbiAgICAgIHNldEJ1dHRvbkFjdGl2ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5mdW5jKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi91dGlscy9lbGVtZW50Q2xhc3NcIjtcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuLi9BYm91dC9hYm91dEZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi4vSG9tZS9ob21lRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuLi9NZW51L21lbnVGdW5jdGlvbnNcIjtcbmltcG9ydCB7IG5hdkJ0biB9IGZyb20gXCIuL25hdkJ0bkNsYXNzXCI7XG5cbmNvbnN0IG5hdkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJuYXZDb250YWluZXJcIiwgXCJuYXZcIiwgXCJuYXZcIik7XG5jb25zdCBuYXZIb21lQnRuID0gbmV3IG5hdkJ0bihcIm5hdkhvbWVCdG5cIiwgXCJIb21lXCIsIGxvYWRIb21lKTtcbmNvbnN0IG5hdk1lbnVCdG4gPSBuZXcgbmF2QnRuKFwibmF2TWVudUJ0blwiLCBcIk1lbnVcIiwgbG9hZE1lbnUpO1xuY29uc3QgbmF2QWJvdXRCdG4gPSBuZXcgbmF2QnRuKFwibmF2QWJvdXRCdG5cIiwgXCJBYm91dFwiLCBsb2FkQWJvdXQpO1xuXG5jb25zdCBuYXZDb250YWluZXJFbCA9IG5hdkNvbnRhaW5lci5jcmVhdGVDb250YWluZXIoKTtcbmNvbnN0IG5hdkhvbWVCdG5FbCA9IG5hdkhvbWVCdG4uY3JlYXRlQnRuKCk7XG5jb25zdCBuYXZNZW51QnRuRWwgPSBuYXZNZW51QnRuLmNyZWF0ZUJ0bigpO1xuY29uc3QgbmF2QWJvdXRCdG5FbCA9IG5hdkFib3V0QnRuLmNyZWF0ZUJ0bigpO1xuZXhwb3J0IGNvbnN0IG5hdkJ0bnMgPSBbbmF2SG9tZUJ0biwgbmF2TWVudUJ0biwgbmF2QWJvdXRCdG5dO1xuXG5leHBvcnQgeyBuYXZDb250YWluZXJFbCwgbmF2SG9tZUJ0bkVsLCBuYXZNZW51QnRuRWwsIG5hdkFib3V0QnRuRWwgfTtcbiIsImltcG9ydCB7IHNlbGVjdE5hdkJ1dHRvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvc2VsZWN0TmF2QnV0dG9uc1wiO1xuaW1wb3J0IHtcbiAgbmF2QWJvdXRCdG5FbCxcbiAgbmF2Q29udGFpbmVyRWwsXG4gIG5hdkhvbWVCdG5FbCxcbiAgbmF2TWVudUJ0bkVsLFxufSBmcm9tIFwiLi9uYXZFbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0QnV0dG9uQWN0aXZlID0gKGJ0bikgPT4ge1xuICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlQnV0dG9uQWN0aXZlID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25zID0gc2VsZWN0TmF2QnV0dG9ucygpO1xuICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gIG5hdkNvbnRhaW5lckVsLmFwcGVuZChuYXZIb21lQnRuRWwsIG5hdk1lbnVCdG5FbCwgbmF2QWJvdXRCdG5FbCk7XG4gIHJldHVybiBuYXZDb250YWluZXJFbDtcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybUNvbnN0cnVjdG9yID0gKHRhZ05hbWUsIHR5cGUsIGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIpID0+IHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xuICByZXR1cm4gZWw7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWl0QnRuQ29uc3RydWN0b3IgPSAodHlwZSwgdmFsdWUpID0+IHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gIHJldHVybiBlbDtcbn07XG4iLCJleHBvcnQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudHlwZSk7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNsYXNzTmFtZSwgdHlwZSkge1xuICAgIHN1cGVyKG5hbWUsIHR5cGUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG4gIGNyZWF0ZUNvbnRhaW5lcigpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudHlwZSk7XG4gICAgdGhpcy5uYW1lLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltZyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzb3VyY2UpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuICBjcmVhdGVJbWcoKSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0aGlzLm5hbWUuc3JjID0gdGhpcy5zb3VyY2U7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjbGFzc05hbWUsIHR5cGUsIHRleHRDb250ZW50KSB7XG4gICAgc3VwZXIobmFtZSwgY2xhc3NOYW1lLCB0eXBlKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgY3JlYXRlVGV4dEVsZW1lbnQoKSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnR5cGUpO1xuICAgIHRoaXMubmFtZS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lKTtcbiAgICB0aGlzLm5hbWUudGV4dENvbnRlbnQgPSB0aGlzLnRleHRDb250ZW50O1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gc2VsZWN0TWFpbigpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgcmV0dXJuIG1haW47XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNlbGVjdE5hdkJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdiBidXR0b25cIik7XG4gIHJldHVybiBidXR0b25zO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9IZWFkZXIvaGVhZGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL21vZHVsZXMvSG9tZS9ob21lRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBuYXZCdG5zIH0gZnJvbSBcIi4vbW9kdWxlcy9OYXYvbmF2RWxlbWVudHNcIjtcbmltcG9ydCB7IGNyZWF0ZU1haW4gfSBmcm9tIFwiLi91dGlscy9tYWluXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNyZWF0ZU1haW4oKSk7XG5cbm5hdkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5oYW5kbGVDbGljaygpO1xufSk7XG5cbmxvYWRIb21lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=