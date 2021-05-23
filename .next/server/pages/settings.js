module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("npB8");


/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "42Y9":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5OrM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Password_container__3jlg7",
	"warningText": "Password_warningText__1VrhV",
	"header": "Password_header__wODkb",
	"inputContainer": "Password_inputContainer__7LnSf",
	"centerInputs": "Password_centerInputs__2ZmgN",
	"btn": "Password_btn__diQIY"
};


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "8buk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Telephone_container__1U-lN",
	"warningText": "Telephone_warningText__2bGvy",
	"header": "Telephone_header__ajcnL",
	"inputContainer": "Telephone_inputContainer__3JmqC",
	"centerInputs": "Telephone_centerInputs__1p9JC",
	"btn": "Telephone_btn__2WkKZ",
	"phoneContainer": "Telephone_phoneContainer__1HX2A"
};


/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "BIE6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const apiIsLoadingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("eng");
/* harmony default export */ __webpack_exports__["a"] = (apiIsLoadingContext);

/***/ }),

/***/ "Bec1":
/***/ (function(module, exports) {



/***/ }),

/***/ "Bn4x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//const ip="http://127.0.0.1:5010";
const ip = "http://46.101.169.142:5010";
/* harmony default export */ __webpack_exports__["a"] = (ip);

/***/ }),

/***/ "CGRP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IhRc");
/* harmony import */ var _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("z+U2");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LzO8");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("BIE6");









const verifyAccount = props => {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
  const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);

  const reSendCode = () => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__[/* reSendVerificationCode */ "l"])(props.userId, code.verificationCode).then(result => {});
  };

  const verifyUserAccount = () => {
    setIsLoading(true);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__[/* activeAccount */ "h"])(props.userId, code.verificationCode).then(result => {
      if (result.data.state == false) {
        props.setErrorMessageProps({
          state: true,
          text: result.data.message
        });
      } else {
        fetch("/api/setToken", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: result.data.token
          })
        }).then(() => {
          localStorage.setItem("ref_token", result.data.ref_token);
          setIsLoading(false);
          router.push({
            pathname: "/",
            query: {
              refrech: true
            }
          });
        });
      }
    });
  };

  const codeHandler = e => {
    setCode({
      verificationCode: e.target.value
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ContainerVerification,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.VerificationHeader,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        children: "Smoufy"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.discrption,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "verification code is sent to your email ou telefone type it here"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form,
      onSubmit: e => {
        e.preventDefault();
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          name: "userName",
          type: "text",
          placeholder: language.verificationcode,
          className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
          onChange: e => codeHandler(e),
          required: true
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Resendcode,
        onClick: () => reSendCode(),
        children: "Resend code"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
        onClick: () => verifyUserAccount(),
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        children: language.send
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (verifyAccount);

/***/ }),

/***/ "CvYx":
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "DEn3":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Toast_container__1ZdGs",
	"downtoUp": "Toast_downtoUp__rc00h"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GBzw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fEgT");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1gBk");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iTUb");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MbIc");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0Jp5");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Lgvo");
/* harmony import */ var _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__);











const popUpMessage = props => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);

  const handleClose = () => {
    props.fnclose();
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "alert-dialog-title",
        children: "Nozzla"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "alert-dialog-description",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.errorText,
            children: props.openPopUp.text
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
          onClick: handleClose,
          color: "primary",
          autoFocus: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.errorBtns,
            children: "Agree"
          })
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (popUpMessage);

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "IXLI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "settings_container__1AuX4",
	"settingsContainer": "settings_settingsContainer__1aEFy",
	"sideNavBar": "settings_sideNavBar__3_hlR",
	"profileSettings": "settings_profileSettings__3nbls"
};


/***/ }),

/***/ "IhRc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ContainerVerification": "verifyAccount_ContainerVerification__1q8WT",
	"discrption": "verifyAccount_discrption__1b3lU",
	"VerificationHeader": "verifyAccount_VerificationHeader__1tMyx",
	"inputContainer": "verifyAccount_inputContainer__3WDvJ",
	"Resendcode": "verifyAccount_Resendcode__3Bnxe",
	"btn": "verifyAccount_btn__3xRFl",
	"input": "verifyAccount_input__1Me4S",
	"labelspan": "verifyAccount_labelspan__3rOx-"
};


/***/ }),

/***/ "KIIW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Account_container__PaDqn",
	"header": "Account_header__18uC0",
	"inputsContainer": "Account_inputsContainer___PS2k",
	"bigInput": "Account_bigInput__3aRex",
	"inputContainer": "Account_inputContainer__1Ucr4",
	"btn": "Account_btn__2unzh"
};


/***/ }),

/***/ "KWog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/refreshAccessToken.js
 // send ref token and get new token

const refreshAccessToken = async token => {
  return interceptor.post("/token/getRefreshAccessToken", {
    ref_token: token
  });
};

const deleteRefrechTokenOldOne = async RefreshAccessToken => {
  return interceptor.post("/token/deleteRefrechTokenOldOne", {
    RefreshAccessToken: RefreshAccessToken
  });
};


// EXTERNAL MODULE: ./const.js
var const_0 = __webpack_require__("Bn4x");

// CONCATENATED MODULE: ./interceptor/interceptor.js



const axiosApiInstance = external_axios_default.a.create({
  //baseURL: 'http://46.101.169.142:5010/',
  baseURL: const_0["a" /* default */],
  withCredentials: true
});
axiosApiInstance.defaults.withCredentials = true; //axiosApiInstance.defaults.baseURL = 'http://127.0.0.1:5010/' // set default url

axiosApiInstance.interceptors.request.use(async config => {
  return config;
}, error => {
  Promise.reject(error);
});
axiosApiInstance.interceptors.response.use(response => {
  return response;
}, async function (error) {
  console.log(error);
  const originalRequest = error.config;

  if (error.message == "Network Error") {
    // localStorage.removeItem('ref_token');
    // await axios.post("api/logout") // change token in cookies to the bew one
    alert(error.message); //location.reload();

    return;
  }

  if (error.response.status === 401) {
    localStorage.removeItem('ref_token');
    await external_axios_default.a.post("api/logout"); // change token in cookies to the bew one

    window.reload();
    return;
  }

  if (error.response.status === 404) {
    return;
  }

  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await refreshAccessToken(localStorage.getItem("ref_token"));
    deleteRefrechTokenOldOne(localStorage.getItem("ref_token")); // send the ref token and get new token

    originalRequest.headers.Authorization = 'Bearer ' + access_token.data.token;
    await external_axios_default.a.post("api/setToken", {
      token: access_token.data.token
    }); // change token in cookies to the bew one

    localStorage.setItem("ref_token", access_token.data.ref_token); // save the new ref_token

    return axiosApiInstance(originalRequest); // return new  request with the new token
  }

  return Promise.reject(error);
});
/* harmony default export */ var interceptor = __webpack_exports__["a"] = (axiosApiInstance);

/***/ }),

/***/ "L+OM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "searchUser_container__1Gd-l",
	"userContainer": "searchUser_userContainer__1UKll",
	"imgContainer": "searchUser_imgContainer__22fF7",
	"userName": "searchUser_userName__2_vRZ",
	"FollowAndUnfollowContainer": "searchUser_FollowAndUnfollowContainer__2TWju"
};


/***/ }),

/***/ "Lgvo":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "popUpMessage_container__1ZRYl",
	"errorHeader": "popUpMessage_errorHeader__1mHGb",
	"errorText": "popUpMessage_errorText__1ZfgF",
	"errorBtns": "popUpMessage_errorBtns__3DU7o"
};


/***/ }),

/***/ "LzO8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return updatePrivacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getPrivacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return searchUserNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getrandomUsersApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return updateEmailApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return updateEmailSendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SetNewPasswordApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return resetPasswordApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return searchAccountToForgetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return updateProfileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return removeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoginFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetOtherUsersData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return reSendVerificationCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return activeAccount; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KWog");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Login = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/user/login', _objectSpread({}, data));
};

const LoginFacebook = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/user/loginfacebook', _objectSpread({}, data));
};

const Register = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/user/register', _objectSpread({}, data));
};

const GetUserData = async token => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/user/GetUserData', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const ChangeProfileImage = async (file, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/changeprofileimage", file, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const GetOtherUsersData = async (id, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/getotherUsersData/" + id, {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const activeAccount = async (userid, verificationCode) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/activeAccount", {
    userid,
    verificationCode
  });
};

const reSendVerificationCode = async (userid, verificationCode) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/reSendVerificationCode", {
    userid,
    verificationCode
  });
};

const removeToken = async userid => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/removeToken", {
    userid
  });
};

const updateProfileInfo = async (newUserData, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updateProfileInfo", _objectSpread({}, newUserData), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const changePassword = async (passwordChange, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/changePassword", _objectSpread({}, passwordChange), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const searchAccountToForgetPassword = async identity => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/searchAccountToForgetPassword", _objectSpread({}, identity));
};

const resetPasswordApi = async dataResetPassword => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/resetPassword", _objectSpread({}, dataResetPassword));
};

const SetNewPasswordApi = async newPasswordAndTokenAndTelOrEmail => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/SetNewPassword", _objectSpread({}, newPasswordAndTokenAndTelOrEmail));
};

const updateEmailSendCode = async (email, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updateEmailSendCode", {
    email: email
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const updateEmailApi = async (email, code, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updateEmail", {
    email: email,
    code: code
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getrandomUsersApi = async (token, randomusers) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/getrandomUsers", _objectSpread({}, randomusers), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const searchUserNameApi = async (searchUserName, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/SearchUserByUserName", {
    searchUserName: searchUserName
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getPrivacy = async token => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/getPrivacy", {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const updatePrivacy = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updatePrivacy", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PrJm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/navBar/NavBar.module.scss
var NavBar_module = __webpack_require__("pNXB");
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);

// EXTERNAL MODULE: ./components/modalSingInSingUp/ModalSingInSingUp.js + 3 modules
var ModalSingInSingUp = __webpack_require__("uEA5");

// EXTERNAL MODULE: ./components/profileMenu/profileMenu.module.scss
var profileMenu_module = __webpack_require__("gqL0");
var profileMenu_module_default = /*#__PURE__*/__webpack_require__.n(profileMenu_module);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./services/user.js
var services_user = __webpack_require__("LzO8");

// EXTERNAL MODULE: ./context/userContext.js
var userContext = __webpack_require__("Q25a");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// CONCATENATED MODULE: ./components/profileMenu/profileMenu.js









const profileMenu_removeCookie = userid => {
  fetch("/api/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => {
    Object(services_user["m" /* removeToken */])(userid).then();
    location.reload();
  });
};

const profileMenu = props => {
  const [user, setUser] = external_react_default.a.useContext(userContext["a" /* default */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: profileMenu_module_default.a.container,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: profileMenu_module_default.a.hoverHandler,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: profileMenu_module_default.a.linksContainers,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Profile"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: profileMenu_module_default.a.linksContainers,
        onClick: () => profileMenu_removeCookie(user._id),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Log out"
        })
      })]
    })
  });
};

/* harmony default export */ var profileMenu_profileMenu = (profileMenu);
// EXTERNAL MODULE: ./components/searchUser/searchUser.module.scss
var searchUser_module = __webpack_require__("L+OM");
var searchUser_module_default = /*#__PURE__*/__webpack_require__.n(searchUser_module);

// CONCATENATED MODULE: ./components/searchUser/searchUser.js






const searchUser = props => {
  const [listOfUsers, setListOfUsers] = external_react_default.a.useState([]);
  external_react_default.a.useEffect(() => {
    if (props.searchUserName != undefined && props.searchUserName.length > 0) {
      Object(services_user["p" /* searchUserNameApi */])(props.searchUserName, props.token).then(result => {
        if (result.data.data != undefined) {
          setListOfUsers(e => {
            return [...result.data.data];
          });
        }
      });
    }
  }, [props.searchUserName]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: searchUser_module_default.a.container,
    children: listOfUsers.map(e => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Users, {
      userData: e
    }, e._id))
  });
};

/* harmony default export */ var searchUser_searchUser = (searchUser);

const Users = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: `/profile/${props.userData._id}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: searchUser_module_default.a.userContainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: searchUser_module_default.a.imgContainer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: searchUser_module_default.a.userName,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: props.userData.userName
        })
      })]
    })
  });
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/notification/notification.module.scss
var notification_module = __webpack_require__("WGj/");
var notification_module_default = /*#__PURE__*/__webpack_require__.n(notification_module);

// EXTERNAL MODULE: ./interceptor/interceptor.js + 1 modules
var interceptor = __webpack_require__("KWog");

// CONCATENATED MODULE: ./services/notification.js


const getnotifications = async (data, token) => {
  return interceptor["a" /* default */].post('/notification/getnotifications', {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};


// EXTERNAL MODULE: ./services/following.js
var following = __webpack_require__("u4oV");

// CONCATENATED MODULE: ./components/notification/notification.js








const notification = props => {
  const [notifications, setnotifications] = external_react_default.a.useState([]);
  const [Loading, setLoading] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    getnotifications({}, props.token).then(result => {
      console.log(result.data.data);
      setnotifications(result.data.data);
    }).catch(error => {});
  }, []);

  const deniedfollowfn = (theOtherPersonId, idComponent) => {
    setLoading(true);
    Object(following["d" /* deniedfollow */])(theOtherPersonId, idComponent, props.token).then(result => {
      setLoading(false);
      setnotifications(e => {
        return [...e.filter(e => e._id != idComponent)];
      });
    }).catch(error => {});
  };

  const acceptfollowfn = (theOtherPersonId, idComponent) => {
    setLoading(true);
    Object(following["a" /* acceptfollow */])(theOtherPersonId, idComponent, props.token).then(result => {
      setLoading(false);
      setnotifications(e => {
        return [...e.filter(e => e._id != idComponent)];
      });
    }).catch(error => {});
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: notification_module_default.a.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: notification_module_default.a.header,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Notifcation"
      })
    }), notifications.map(notif => {
      if (notif.type == "follow") {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: notification_module_default.a.notif,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: notification_module_default.a.user,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: notification_module_default.a.userImageContainer,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: notif.from.currentImageUrl
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: notification_module_default.a.text,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              children: notif.from.userName
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "want to follow you"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: notification_module_default.a.btns,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                onClick: () => deniedfollowfn(notif.from._id, notif._id),
                children: Loading == false ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "reject"
                }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: notification_module_default.a.ldsring,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {})]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                onClick: () => acceptfollowfn(notif.from._id, notif._id),
                children: Loading == false ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "aprove"
                }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: notification_module_default.a.ldsring,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {})]
                })
              })]
            })]
          })]
        });
      } else if (notif.type == "follow directly") {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: notification_module_default.a.notif,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: notification_module_default.a.user,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: notification_module_default.a.userImageContainer,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: notif.from.currentImageUrl
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: notification_module_default.a.text,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              children: notif.from.userName
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: " followd you"
            })]
          })]
        });
      }
    })]
  });
};

/* harmony default export */ var notification_notification = (notification);
// EXTERNAL MODULE: ./services/chat.js
var chat = __webpack_require__("qJ0o");

// EXTERNAL MODULE: ./context/socketContext.js
var socketContext = __webpack_require__("W+wH");

// CONCATENATED MODULE: ./components/navBar/NavBar.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const NavBar = ({
  token
}) => {
  const {
    0: modalSingInSingUp,
    1: setModalSingInSingUp
  } = Object(external_react_["useState"])(false); //open modal

  const [heightAndWidthOfWindow, setHeightAndWidthOfWindow] = external_react_default.a.useState({
    width: 0,
    height: 0
  }); //responsive handler

  const {
    0: openMenuProfileState,
    1: setOpenMenuProfile
  } = Object(external_react_["useState"])(false); //on hover profile pic open menu

  const [disyplaySearch, setDisplaySearch] = external_react_default.a.useState({
    state: false,
    userName: ""
  });
  const [user, setUser] = external_react_default.a.useContext(userContext["a" /* default */]);
  const [numberOfChatsNotRead, setNumberOfChatsNotRead] = external_react_default.a.useState(0);
  const [socket, setSocket] = external_react_default.a.useContext(socketContext["a" /* default */]);
  const [popUpUser, setPopUpUser] = external_react_default.a.useState(null);
  const [popUpNotif, setpopUpNotif] = external_react_default.a.useState(() => 0);
  const sideNavBarBtn = external_react_default.a.useRef(null);
  const [showSideNavBar, setShowSideNavBar] = external_react_default.a.useState(false);
  const router = Object(router_["useRouter"])();
  external_react_default.a.useEffect(() => {
    async function chatHandler(data) {
      let audio = new Audio("./msgSound.mp3");
      audio.play();

      if (router.pathname != "/chat") {
        Object(services_user["b" /* GetOtherUsersData */])(data.senderId, token).then(result => {
          setPopUpUser(_objectSpread({}, result.data.data[0]));
        }).catch(error => {
          alert(error);
        });
      }
    }

    async function notifHandler(data) {
      if (data.notif == 1) {
        setpopUpNotif(e => e + 1);
      }
    }

    if (socket != undefined && socket != null) {
      socket.on("getMessageFromUserToUser", chatHandler);
      socket.on("getNotificationFromUserToUser", notifHandler);
    }

    return () => {
      if (socket != undefined && socket != null) {
        socket.off('getMessageFromUserToUser', chatHandler);
        socket.off('getNotificationFromUserToUser', notifHandler);
      }
    };
  });
  external_react_default.a.useEffect(() => {
    setHeightAndWidthOfWindow({
      height: window.innerHeight,
      width: window.innerWidth
    });

    if (token != undefined && token != null && token != false) {
      Object(chat["c" /* getUnreadUsersChatsNumber */])({}, token).then(data => {
        setNumberOfChatsNotRead(data.data.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }, []);
  const [openOrCloseNotif, setOpenOrCloseNotif] = external_react_default.a.useState(false);

  const openMenuProfile = () => {
    setOpenMenuProfile(true);
  };

  const closeMenuProfile = () => {
    setOpenMenuProfile(false);
  };

  const openMenuProfileonClick = () => {
    setOpenMenuProfile(e => !e);
  };

  const OpensearchUsers = e => {
    setDisplaySearch({
      state: true,
      userName: ""
    }); //
  };

  const SearchUserFn = e => {
    setDisplaySearch({
      state: true,
      userName: e.target.value
    });
  };

  const closeSearchUser = e => {
    setTimeout(() => {
      setDisplaySearch({
        state: false,
        userName: ""
      });
    }, 300);
  };

  const openOrCloseNotifications = () => {
    setOpenOrCloseNotif(e => !e);
  };

  const ShowSideNavBar = () => {
    sideNavBarBtn.current.classList.toggle(NavBar_module_default.a.change);
    setShowSideNavBar(e => !e);
  };

  if (heightAndWidthOfWindow.width > heightAndWidthOfWindow.height) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: NavBar_module_default.a.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        className: NavBar_module_default.a.nav,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: NavBar_module_default.a.Logo,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              children: "SPAKSI"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: NavBar_module_default.a.Search,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: NavBar_module_default.a.flexItems,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              onBlur: () => closeSearchUser(),
              onFocus: e => OpensearchUsers(e),
              children: [disyplaySearch.state && /*#__PURE__*/Object(jsx_runtime_["jsx"])(searchUser_searchUser, {
                token: token,
                searchUserName: disyplaySearch.userName
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                name: "search",
                type: "text",
                placeholder: "Search accounts",
                autoComplete: "off",
                onChange: e => SearchUserFn(e)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: NavBar_module_default.a.searchImg,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                  width: "25",
                  height: "20",
                  viewBox: "0 0 28 38",
                  fill: "rgba(22, 24, 35, 0.75)",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                    d: "M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z",
                    fill: "rgba(22, 24, 35, 0.75)"
                  })
                })
              })]
            })
          })
        }), token && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: NavBar_module_default.a.authenticated,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Chat, {
            popUpUser: popUpUser,
            numberOfChatsNotRead: numberOfChatsNotRead
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: NavBar_module_default.a.notification,
            onClick: () => openOrCloseNotifications(),
            children: [openOrCloseNotif && /*#__PURE__*/Object(jsx_runtime_["jsx"])(notification_notification, {
              token: token
            }), popUpNotif != 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: NavBar_module_default.a.numberOfNotificationNotReadlocal,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: popUpNotif
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
              width: "25",
              height: "25",
              viewBox: "0 0 50 50",
              fill: "black",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z",
                fill: "black"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: NavBar_module_default.a.profile,
            onClick: () => openMenuProfileonClick(),
            onMouseLeave: () => closeMenuProfile(),
            onMouseEnter: () => openMenuProfile(),
            children: [user != null && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: NavBar_module_default.a.navBarImageContainer,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: user.currentImageUrl || "/avatar.png"
              })
            }), openMenuProfileState && /*#__PURE__*/Object(jsx_runtime_["jsx"])(profileMenu_profileMenu, {})]
          })]
        }), !token && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: NavBar_module_default.a.Nonauthenticated,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/signin",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Log In"
              })
            })
          })
        })]
      })
    });
  } else
    /*mobile */
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: NavBar_module_default.a.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        className: NavBar_module_default.a.nav,
        children: [token && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            flex: "1 !important"
          },
          className: NavBar_module_default.a.authenticated,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SideNavBar, {
            user: user,
            token: token,
            showSideNavBar: showSideNavBar,
            numberOfChatsNotRead: numberOfChatsNotRead
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: NavBar_module_default.a.containerBtnSideNavBar,
            ref: sideNavBarBtn,
            onClick: () => ShowSideNavBar(),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: NavBar_module_default.a.bar1
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: NavBar_module_default.a.bar2
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: NavBar_module_default.a.bar3
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: NavBar_module_default.a.Search,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: NavBar_module_default.a.flexItems,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              onBlur: () => closeSearchUser(),
              onFocus: e => OpensearchUsers(e),
              children: [disyplaySearch.state && /*#__PURE__*/Object(jsx_runtime_["jsx"])(searchUser_searchUser, {
                popUpNotif: popUpNotif,
                token: token,
                searchUserName: disyplaySearch.userName
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                name: "search",
                type: "text",
                placeholder: "Search accounts",
                autoComplete: "off",
                onChange: e => SearchUserFn(e)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: NavBar_module_default.a.searchImg,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 28 38",
                  fill: "black",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                    d: "M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z",
                    fill: "black"
                  })
                })
              })]
            })
          })
        }), !token && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: NavBar_module_default.a.Nonauthenticated,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/signin",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Log In"
              })
            })
          })
        })]
      })
    });
};

/* harmony default export */ var navBar_NavBar = __webpack_exports__["a"] = (NavBar);

const Chat = props => {
  const [numberOfChatsNotReadlocal, setNumberOfChatsNotRead] = external_react_default.a.useState(0);
  const [userWhoSentYouImage, setUserWhoSentYouImage] = external_react_default.a.useState(null);
  external_react_default.a.useEffect(() => {
    setNumberOfChatsNotRead(props.numberOfChatsNotRead);
  }, [props.numberOfChatsNotRead]);
  external_react_default.a.useEffect(() => {
    if (props.popUpUser != undefined) {
      setTimeout(() => {
        setUserWhoSentYouImage(null);
      }, 2000);
      setUserWhoSentYouImage(props.popUpUser.currentImageUrl);
    }
  }, [props]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
    href: "/chat",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: NavBar_module_default.a.chatSvg,
      children: [userWhoSentYouImage != null && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: NavBar_module_default.a.showTemImageOfUserWhoSentYouMessage,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: userWhoSentYouImage
        })
      }), numberOfChatsNotReadlocal != 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: NavBar_module_default.a.numberOfChatsNotReadlocal,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: numberOfChatsNotReadlocal
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        width: "10",
        height: "10",
        viewBox: "100 -0 300.011 500.011",
        fill: "black",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          d: "M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4    l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472    l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"
        })
      })]
    })
  });
};

const SideNavBar = props => {
  //props.user.currentImageUrl
  //props.user
  const removeCookie = userid => {
    fetch("/api/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      Object(services_user["m" /* removeToken */])(userid).then();
      location.reload();
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: props.showSideNavBar ? {
      marginLeft: "0"
    } : {
      marginLeft: "-100%"
    },
    className: NavBar_module_default.a.sideBarContainer,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: NavBar_module_default.a.userImageInSideNavBar,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: props.user.currentImageUrl
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: props.user.userName
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/chat",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: NavBar_module_default.a.iconSideNavBar,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Chat, {
              numberOfChatsNotRead: props.numberOfChatsNotRead
            })
          }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Messages"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: NavBar_module_default.a.iconSideNavBar,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 50 50",
            fill: "black",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z",
              fill: "black"
            })
          })
        }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Notification"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        onClick: () => removeCookie(props.user._id),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: NavBar_module_default.a.iconSideNavBar,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "black",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "m13.5 21h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.827 0 1.5-.673 1.5-1.5v-5c0-.276.224-.5.5-.5s.5.224.5.5v5c0 1.378-1.121 2.5-2.5 2.5z"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "m23.5 11h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "m8 24c-.22 0-.435-.037-.638-.109l-5.99-1.997c-.82-.273-1.372-1.035-1.372-1.894v-18c0-1.103.897-2 2-2 .222 0 .438.037.639.11l5.989 1.996c.82.272 1.372 1.034 1.372 1.894v18c0 1.103-.897 2-2 2zm-6-23c-.552 0-1 .449-1 1v18c0 .428.276.808.688.946l6 2c.656.233 1.312-.292 1.312-.946v-18c0-.429-.276-.809-.688-.945l-6-2c-.103-.037-.208-.055-.312-.055z"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "m15.5 8c-.276 0-.5-.224-.5-.5v-5c0-.827-.673-1.5-1.5-1.5h-11.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11.5c1.379 0 2.5 1.122 2.5 2.5v5c0 .276-.224.5-.5.5z"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "m19.5 15c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l3.646-3.646-3.646-3.646c-.195-.195-.195-.512 0-.707s.512-.195.707 0l4 4c.195.195.195.512 0 .707l-4 4c-.097.096-.225.145-.353.145z"
              })
            })]
          })
        }), "  ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Log Out"
        })]
      })]
    })
  });
};

/***/ }),

/***/ "Q25a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["a"] = (UserContext);

/***/ }),

/***/ "TK/r":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Email_container__2b6oa",
	"warningText": "Email_warningText__1HeHg",
	"header": "Email_header__2ktcx",
	"inputContainer": "Email_inputContainer__3P-Yb",
	"centerInputs": "Email_centerInputs__3gXnP",
	"btn": "Email_btn__37tHl",
	"emailContainer": "Email_emailContainer__1rBB2"
};


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "W+wH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const socket = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["a"] = (socket);

/***/ }),

/***/ "W4j+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("caWW");
/* harmony import */ var _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("z+U2");
/* harmony import */ var _components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("guYw");







const changeLanguage = () => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false); // open box to choice lang

  const [displayLang, setDisplay] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false); // hide change lang box if true

  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

  const openLang = () => {
    setOpen(e => !e);
  };

  const changeLanguage = e => {
    localStorage.setItem("language", e);
    setLanguage(Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(localStorage.getItem('language') || "eng"));
  };

  const RemoveChangeLang = () => {
    setDisplay(true);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    style: displayLang ? {
      display: "none"
    } : {},
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.closeLangChange,
      onClick: () => RemoveChangeLang()
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      onClick: () => openLang(),
      className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.svgContainer,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "language",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          fill: "currentColor",
          d: "M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"
        })
      })
    }), open && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changeLang,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        onClick: () => changeLanguage("arabic"),
        children: "\u0639\u0631\u0628\u064A\u0629"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        onClick: () => changeLanguage("eng"),
        children: "english"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        onClick: () => changeLanguage("fr"),
        children: "france"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (changeLanguage);

/***/ }),

/***/ "WGj/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "notification_container__t5CmH",
	"showNotif": "notification_showNotif__343LN",
	"header": "notification_header__Q9BdH",
	"notif": "notification_notif__1lEfY",
	"user": "notification_user__1qdYr",
	"userImageContainer": "notification_userImageContainer__157FZ",
	"text": "notification_text__2XCh0",
	"btns": "notification_btns__3cd0w",
	"ldsring": "notification_ldsring__1OSyz"
};


/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XoNR":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Container": "sideNavBar_Container__2XhI2",
	"image": "sideNavBar_image__3SlEX",
	"userImage": "sideNavBar_userImage__3JQLr",
	"imageContainer": "sideNavBar_imageContainer__3wS2Y",
	"name": "sideNavBar_name__2fkzr",
	"pages": "sideNavBar_pages__c6Y5G",
	"camera": "sideNavBar_camera__wRVp8",
	"Focused": "sideNavBar_Focused__3NNo5"
};


/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZpXP":
/***/ (function(module, exports) {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ "aisa":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Privacy_container__3uXW5",
	"header": "Privacy_header__TWeV5",
	"radioContainer": "Privacy_radioContainer__1qycs",
	"radioInputContainer": "Privacy_radioInputContainer__12M82",
	"private": "Privacy_private__X6dCk",
	"public": "Privacy_public__3GCo-",
	"text": "Privacy_text__2umMR"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "caWW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "changeLanguage_container__2A91f",
	"closeLangChange": "changeLanguage_closeLangChange__2eUYS",
	"svgContainer": "changeLanguage_svgContainer__1LLZg",
	"changeLang": "changeLanguage_changeLang__3DFUd"
};


/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gqL0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "profileMenu_container__oVKjI",
	"showfaded": "profileMenu_showfaded__18vK2",
	"hoverHandler": "profileMenu_hoverHandler__Qncjx",
	"linksContainers": "profileMenu_linksContainers__2l1of",
	"settings": "profileMenu_settings__tnt2T"
};


/***/ }),

/***/ "guYw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const initLanguage = e => {
  var lang = {};

  switch (e) {
    case "eng":
      lang = {
        postAnonymously: "post Anonymously",
        Uploadphotowithyourpost: "Upload photo with your post",
        ForgotPassword: "Forgot Password?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "create a profile follow other accounts talk about your own experience and more",
        telephoneoremail: "telephone or email",
        cancel: "cancel",
        update: "update",
        putyournewEmail: "put your new Email here",
        UpdateYourEmail: "Update Your Email",
        ConfermationCode: "Confermation Code",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "You Will recive confermation Code put it here And Click Update",
        putyournewphonenumberhere: "put your new phone number here",
        UpdateYourPhoneNumber: "Update Your PhoneNumber",
        newpasswordneedtobeatleastlength: "new password need to be at least 8 length",
        Itsagoodideatouseastrongpasswordthatyou: "It's a good idea to use a strong password that you're not using elsewhere",
        newPassword: "new Password",
        oldPassword: "old Password",
        AccountSetting: "Account Setting",
        UpdateYourPassword: "Update Your Password",
        birthday: "birth day",
        topic: '',
        todayTopic: 'today Topic',
        FriendsPosts: 'friends publication',
        Following: 'following',
        Followers: 'Followers',
        UpdateProfile: 'Update Profile',
        YourPosts: 'Your Posts',
        Likes: 'Likes',
        Posts: 'Posts',
        radioboxDelteAccount: 'radioboxDelteAccount',
        DeleteAccountHeader: 'DeleteAccountHeader',
        savechange: 'savechange',
        changePassword: 'changePassword',
        Deactivating: 'Deactivating',
        Deleting: 'Deleting',
        username: 'username',
        firstname: 'firstname',
        lastname: 'lastname',
        biography: 'biography',
        phone: 'phone',
        email: 'email',
        password: 'password',
        day: 'day',
        month: 'month',
        year: 'year',
        confirmpassword: 'confirmpassword',
        placeholderInput: 'say somthing',
        Upload_photo_with_your_post_Hover: 'Upload photo with your post',
        post_Anonymously_hover: 'post_Anonymously',
        signin: 'sign in',
        signup: 'sign up',
        AlreadyHaveAccount: 'Already Have Account',
        YoudonthaveaccountClickhereto: 'You dont have account Click here to',
        verificationcode: "verification code",
        send: "send"
      };
      break;

    case "fr":
      lang = {
        postAnonymously: "publier de manière anonyme",
        Uploadphotowithyourpost: "Télécharger une photo avec votre message",
        ForgotPassword: "Mot de passe oublié?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "créer un profil suivre d'autres comptes parler de votre propre expérience et plus",
        telephoneoremail: "téléphone ou email",
        cancel: "Annuler",
        update: "mettre à jour",
        putyournewEmail: "mettez votre nouveau courriel ici",
        UpdateYourEmail: "Mettez à jour votre e-mail",
        ConfermationCode: "Code de confermation",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "Vous recevrez le code de confermation, mettez-le ici et cliquez sur Mettre à jour",
        putyournewphonenumberhere: "mettez votre nouveau numéro de téléphone ici",
        UpdateYourPhoneNumber: "Mettez à jour votre numéro de téléphone",
        newpasswordneedtobeatleastlength: "le nouveau mot de passe doit avoir une longueur d'au moins 8",
        Itsagoodideatouseastrongpasswordthatyou: "C'est une bonne idée d'utiliser un mot de passe fort que vous n'utilisez pas ailleurs",
        newPassword: "nouveau mot de passe",
        oldPassword: "ancien mot de passe",
        AccountSetting: "Paramètre du compte",
        UpdateYourPassword: "Mettez à jour votre mot de passe",
        birthday: "date d'anniversairey",
        topic: '',
        todayTopic: "Sujet d'aujourd 'hui",
        FriendsPosts: "publication d'amis",
        Following: 'suivante',
        Followers: 'Suiveurs',
        UpdateProfile: 'Mettre à jour le profil',
        YourPosts: 'Vos publications',
        Likes: "j'aimes",
        Posts: 'des postes',
        radioboxDelteAccount: 'Suppression',
        DeleteAccountHeader: 'Supprimer le compte',
        savechange: 'sauvegarder les modifications',
        changePassword: 'changer le mot de passe',
        Deactivating: 'Ceci est permanent.Lorsque vous supprimez votre compte, vous ne pourrez pas récupérer le contenu ou les informations que vous avez partagés sur l application.',
        Deleting: 'supprime',
        username: "Nom d'utilisateur",
        firstname: 'Prénom',
        lastname: 'nom de famille',
        biography: 'Biographie',
        phone: 'téléphone',
        email: 'email',
        password: 'mot de passe',
        day: 'jour',
        month: 'month',
        year: 'year',
        confirmpassword: 'Confirmez le mot de passe',
        placeholderInput: 'à quoi penses-tu',
        Upload_photo_with_your_pos_tHover: 'Télécharger une photo avec votre message',
        post_Anonymously_hover: 'publier de manière anonyme',
        signin: "s'identifier",
        signup: "S'inscrire",
        AlreadyHaveAccount: 'Vous avez déjà un compte',
        YoudonthaveaccountClickhereto: "Vous n'avez pas de compte Cliquez ici pour",
        verificationcode: "code de vérification",
        send: "envoyer"
      };
      break;

    case "arabic":
      lang = {
        postAnonymously: "نشر مجهول",
        Uploadphotowithyourpost: "تحميل الصورة مع منشورك",
        ForgotPassword: "هل نسيت كلمة السر?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "إنشاء حساب  تابع حسابات أخرى تحدث عن تجربتك الخاصة والمزيد",
        telephoneoremail: "الهاتف أو البريد الإلكتروني",
        cancel: "إلغاء",
        update: "تحديث",
        putyournewEmail: "ضع بريدك الإلكتروني الجديد هنا",
        UpdateYourEmail: "قم بتحديث بريدك الإلكتروني",
        ConfermationCode: "كود التأكيد",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "سوف تتلقى رمز التأكيد وضعه هنا وانقر فوق تحديث",
        putyournewphonenumberhere: "ضع رقم هاتفك الجديد هنا",
        UpdateYourPhoneNumber: "قم بتحديث رقم هاتفك",
        newpasswordneedtobeatleastlength: "يجب ألا يقل طول كلمة المرور الجديدة عن 8",
        Itsagoodideatouseastrongpasswordthatyou: "من الجيد استخدام كلمة مرور قوية لا تستخدمها في أي مكان آخر",
        newPassword: "كلمة السر الجديدة",
        oldPassword: "كلمة المرور القديمة",
        birthday: "عيد الميلاد",
        AccountSetting: "إعدادات الحساب",
        topic: '',
        UpdateYourPassword: "قم بتحديث كلمة المرور الخاصة بك",
        arabic: "موضوع اليوم",
        todayTopic: 'نشر الأصدقاء',
        FriendsPosts: 'الأصدقاء',
        Following: 'متابعهم',
        Followers: 'المتابعين',
        UpdateProfile: 'تحديث البينات',
        YourPosts: 'منشوراتك',
        Likes: 'اعجبتاك',
        Posts: 'المشاركات',
        radioboxDelteAccount: 'حذف',
        DeleteAccountHeader: 'حذف الحساب',
        savechange: 'حفظ التغيير',
        changePassword: 'تغير كلمة السر',
        Deactivating: "اسم الشهرةهذا دائم ، عندما تحذف حسابك ، لن تتمكن من استرداد المحتوى أو المعلومات التي شاركتها على التطبيق.",
        Deleting: 'شطب',
        username: 'اسم الشهرة',
        firstname: 'الاسم',
        lastname: 'اللقب',
        biography: 'سيرة شخصية',
        phone: 'هاتف',
        email: 'البريد',
        password: "كلمه السر",
        day: 'يوم',
        month: 'الشهر',
        year: 'العام',
        confirmpassword: 'تاكيد كلمة المرور',
        placeholderInput: 'بماذا تفكر',
        Upload_photo_with_your_pos_tHover: 'تحميل الصورة مع منشورك',
        post_Anonymously_hover: 'نشر مجهول',
        signin: 'تسجيل الدخول',
        signup: 'اشتراك',
        AlreadyHaveAccount: 'لديك حساب بالفعل',
        YoudonthaveaccountClickhereto: 'ليس لديك حساب انقر هنا',
        verificationcode: "رمز التحقق",
        send: "إرسال"
      };
      break;

    default:
      lang = {
        postAnonymously: "post Anonymously",
        Uploadphotowithyourpost: "Upload photo with your post",
        ForgotPassword: "Forgot Password?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "create a profile follow other accounts talk about your own experience and more",
        telephoneoremail: "telephone or email",
        cancel: "cancel",
        update: "update",
        putyournewEmail: "put your new Email here",
        UpdateYourEmail: "Update Your Email",
        ConfermationCode: "Confermation Code",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "You Will recive confermation Code put it here And Click Update",
        putyournewphonenumberhere: "put your new phone number here",
        UpdateYourPhoneNumber: "Update Your PhoneNumber",
        newpasswordneedtobeatleastlength: "new password need to be at least 8 length",
        Itsagoodideatouseastrongpasswordthatyou: "It's a good idea to use a strong password that you're not using elsewhere",
        newPassword: "new Password",
        topic: '',
        oldPassword: "old Password",
        UpdateYourPassword: "Update Your Password",
        AccountSetting: "Account Setting",
        birthday: "birth day",
        todayTopic: 'today Topic',
        FriendsPosts: 'friends publication',
        Following: 'following',
        Followers: 'Followers',
        UpdateProfile: 'Update Profile',
        YourPosts: 'Your Posts',
        Likes: 'Likes',
        Posts: 'Posts',
        radioboxDelteAccount: 'radioboxDelteAccount',
        DeleteAccountHeader: 'DeleteAccountHeader',
        savechange: 'savechange',
        changePassword: 'changePassword',
        Deactivating: 'Deactivating',
        Deleting: 'Deleting',
        username: 'username',
        firstname: 'firstname',
        lastname: 'lastname',
        biography: 'biography',
        phone: 'phone',
        email: 'email',
        password: 'password',
        day: 'day',
        month: 'month',
        year: 'year',
        confirmpassword: 'confirmpassword',
        placeholderInput: 'say Somthing',
        Upload_photo_with_your_post_Hover: 'Upload photo with your post',
        post_Anonymously_hover: 'post_Anonymously',
        signin: 'sign in',
        signup: 'sign up',
        AlreadyHaveAccount: 'Already Have Account',
        YoudonthaveaccountClickhereto: 'You dont have account Click here to',
        verificationcode: "verification code",
        send: "send"
      };
  }

  return lang;
};

/* harmony default export */ __webpack_exports__["a"] = (initLanguage);

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "npB8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/settings.module.scss
var settings_module = __webpack_require__("IXLI");
var settings_module_default = /*#__PURE__*/__webpack_require__.n(settings_module);

// EXTERNAL MODULE: ./components/navBar/NavBar.js + 4 modules
var NavBar = __webpack_require__("PrJm");

// EXTERNAL MODULE: ./components/profileSettings/sideNavBar/sideNavBar.module.scss
var sideNavBar_module = __webpack_require__("XoNR");
var sideNavBar_module_default = /*#__PURE__*/__webpack_require__.n(sideNavBar_module);

// EXTERNAL MODULE: ./services/user.js
var services_user = __webpack_require__("LzO8");

// EXTERNAL MODULE: ./context/userContext.js
var userContext = __webpack_require__("Q25a");

// CONCATENATED MODULE: ./components/profileSettings/sideNavBar/sideNavBar.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const sideNavBar = props => {
  const [user, setUser] = external_react_default.a.useContext(userContext["a" /* default */]);
  const [page, setPage] = external_react_default.a.useState("account");

  const changeFile = e => {
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    Object(services_user["a" /* ChangeProfileImage */])(formData, user.token).then(data => {
      setUser(e => {
        return _objectSpread(_objectSpread({}, e), {}, {
          userProfileImageUrl: data.data.Picurl
        });
      });
    });
  };

  const changePageTo = e => {
    props.changePage(e);
    setPage(e);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: sideNavBar_module_default.a.Container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: sideNavBar_module_default.a.image,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: sideNavBar_module_default.a.imageContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: sideNavBar_module_default.a.userImage,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: user.currentImageUrl || "/avatar.png",
            alt: user.userName || ""
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: sideNavBar_module_default.a.camera,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            onChange: e => changeFile(e),
            type: "file"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "camera",
            role: "img",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              fill: "currentColor",
              d: "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: sideNavBar_module_default.a.name,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "aziz jarrar"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: sideNavBar_module_default.a.pages,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: page == "account" ? sideNavBar_module_default.a.Focused : "chay",
          id: "account",
          onClick: () => changePageTo("account"),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "home",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              fill: "currentColor",
              d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
            })
          }), "Account"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: page == "password" ? sideNavBar_module_default.a.Focused : "chay",
          id: "password",
          onClick: () => changePageTo("password"),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "key",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              fill: "currentColor",
              d: "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
            })
          }), "Password"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: page == "Telephone" ? sideNavBar_module_default.a.Focused : "chay",
          id: "Telephone",
          onClick: () => changePageTo("Telephone"),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "phone-square-alt",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              fill: "currentColor",
              d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"
            })
          }), "Telephone"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: page == "Email" ? sideNavBar_module_default.a.Focused : "chay",
          id: "Email",
          onClick: () => changePageTo("email"),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "envelope-square",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              fill: "currentColor",
              d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
            })
          }), "Email"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: page == "Privacy" ? sideNavBar_module_default.a.Focused : "chay",
          id: "Email",
          onClick: () => changePageTo("Privacy"),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "envelope-square",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              fill: "currentColor",
              d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
            })
          }), "Privacy"]
        })]
      })
    })]
  });
};

/* harmony default export */ var sideNavBar_sideNavBar = (sideNavBar);
// EXTERNAL MODULE: ./components/profileSettings/Account/Account.module.scss
var Account_module = __webpack_require__("KIIW");
var Account_module_default = /*#__PURE__*/__webpack_require__.n(Account_module);

// EXTERNAL MODULE: external "react-rainbow-components"
var external_react_rainbow_components_ = __webpack_require__("oM9w");

// EXTERNAL MODULE: ./context/apiIsLoadingContext.js
var apiIsLoadingContext = __webpack_require__("BIE6");

// EXTERNAL MODULE: ./components/Toast/Toast.module.scss
var Toast_module = __webpack_require__("DEn3");
var Toast_module_default = /*#__PURE__*/__webpack_require__.n(Toast_module);

// CONCATENATED MODULE: ./components/Toast/Toast.js




const Toast = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${Toast_module_default.a.container}`,
    style: props.color != undefined ? {
      backgroundColor: props.color
    } : {},
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: props.text
    })
  });
};

/* harmony default export */ var Toast_Toast = (Toast);
// EXTERNAL MODULE: ./context/languageContext.js
var languageContext = __webpack_require__("z+U2");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/profileSettings/Account/Account.js



function Account_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Account_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Account_ownKeys(Object(source), true).forEach(function (key) { Account_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Account_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Account_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Account = () => {
  const [user, setUser] = external_react_default.a.useContext(userContext["a" /* default */]);
  const [isLoading, setIsLoading] = external_react_default.a.useContext(apiIsLoadingContext["a" /* default */]);
  const [newUserData, setNewUserData] = external_react_default.a.useState("");
  const [toastMessage, setToastMessage] = external_react_default.a.useState({
    state: false,
    message: ""
  });
  const [language, setLanguage] = external_react_default.a.useContext(languageContext["a" /* default */]);

  const changeHandler = e => {
    const {
      name,
      value
    } = e.target;
    setNewUserData(e => {
      return Account_objectSpread(Account_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const UpdateData = () => {
    setIsLoading(true);
    Object(services_user["t" /* updateProfileInfo */])(newUserData, user.token).then(result => {
      setToastMessage({
        state: true,
        message: "rak kamel amalt update mte3ek"
      });
      setIsLoading(false);
    }).catch(error => {
      setToastMessage({
        state: true,
        message: error.message
      });
      setIsLoading(false);
    });
  };

  external_react_default.a.useEffect(() => {
    if (toastMessage.state == true) {
      setTimeout(() => {
        setToastMessage({
          state: false,
          message: ""
        });
      }, 6000);
    }
  }, [toastMessage]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Account_module_default.a.container,
    children: [toastMessage.state && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toast_Toast, {
      text: toastMessage.message
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Account_module_default.a.header,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: language.AccountSetting
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Account_module_default.a.inputsContainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Account_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          onChange: e => changeHandler(e),
          defaultValue: user.userName,
          name: "userName"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.username
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Account_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          onChange: e => changeHandler(e),
          defaultValue: user.firstname,
          name: "firstname"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.firstname
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Account_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          onChange: e => changeHandler(e),
          defaultValue: user.lastname,
          name: "lastname"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.lastname
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Account_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_rainbow_components_["DatePicker"], {
          value: newUserData.age || user.age,
          onChange: value => setNewUserData(e => {
            return Account_objectSpread(Account_objectSpread({}, e), {}, {
              "age": value
            });
          }),
          formatStyle: "large" //locale={language.age}

        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.birthday
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${Account_module_default.a.inputContainer} ${Account_module_default.a.bigInput}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
          onChange: e => changeHandler(e),
          defaultValue: user.biography,
          maxLength: "150",
          type: "text",
          name: "biography"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.biography
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Account_module_default.a.btn,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: () => UpdateData(),
        children: language.update
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          children: language.cancel
        })
      })]
    })]
  });
};

/* harmony default export */ var Account_Account = (Account);
/**

 */
// EXTERNAL MODULE: ./components/profileSettings/Email/Email.module.scss
var Email_module = __webpack_require__("TK/r");
var Email_module_default = /*#__PURE__*/__webpack_require__.n(Email_module);

// CONCATENATED MODULE: ./components/profileSettings/Email/Email.js



function Email_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Email_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Email_ownKeys(Object(source), true).forEach(function (key) { Email_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Email_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Email_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Email = () => {
  const [toastMessage, setToastMessage] = external_react_default.a.useState({
    state: false,
    message: ""
  });
  const [user, setUser] = external_react_default.a.useContext(userContext["a" /* default */]);
  const [changeEamilData, setChangeEamilData] = external_react_default.a.useState("");
  const [language, setLanguage] = external_react_default.a.useContext(languageContext["a" /* default */]);
  external_react_default.a.useEffect(() => {
    if (toastMessage.state == true) {
      setTimeout(() => {
        setToastMessage({
          state: false,
          message: ""
        });
      }, 6000);
    }
  }, [toastMessage]);

  const changeHandlerNewEamilAndCode = e => {
    const {
      name,
      value
    } = e.target;
    setChangeEamilData(e => {
      return Email_objectSpread(Email_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const sendCode = () => {
    Object(services_user["r" /* updateEmailSendCode */])(changeEamilData.email, user.token).then(result => {
      setToastMessage({
        state: true,
        message: "ab3eth sex"
      });
    });
  };

  const updateEmail = () => {
    Object(services_user["q" /* updateEmailApi */])(changeEamilData.email, changeEamilData.code, user.token).then(result => {
      if (result.data.typeError == "incorectCode") {
        setToastMessage({
          state: true,
          message: "ab3eth sex"
        });
      } else if (result.data.typeError == "codeInvalid") {
        setToastMessage({
          state: true,
          message: "ab3eth sex"
        });
      } else if (result.data.typeError == "done") {
        setToastMessage({
          state: true,
          message: "ab3eth sex"
        });
      }
    }).catch(error => {
      setToastMessage({
        state: true,
        message: error.message
      });
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Email_module_default.a.container,
    children: [toastMessage.state && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toast_Toast, {
      text: toastMessage.message
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Email_module_default.a.header,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: language.UpdateYourEmail
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Email_module_default.a.centerInputs,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Email_module_default.a.warningText,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: language.putyournewEmail
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Email_module_default.a.emailContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Email_module_default.a.inputContainer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "email",
            onChange: e => changeHandlerNewEamilAndCode(e),
            name: "email"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: language.email
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => sendCode(),
          children: language.send
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Email_module_default.a.warningText,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: language.YouWillreciveconfermationCodeputithereAndClickUpdate
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Email_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          onChange: e => changeHandlerNewEamilAndCode(e),
          name: "code"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.ConfermationCode
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Email_module_default.a.btn,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: () => updateEmail(),
        children: language.update
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          children: language.cancel
        })
      })]
    })]
  });
};

/* harmony default export */ var Email_Email = (Email);
// EXTERNAL MODULE: ./components/profileSettings/Password/Password.module.scss
var Password_module = __webpack_require__("5OrM");
var Password_module_default = /*#__PURE__*/__webpack_require__.n(Password_module);

// CONCATENATED MODULE: ./components/profileSettings/Password/Password.js



function Password_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Password_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Password_ownKeys(Object(source), true).forEach(function (key) { Password_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Password_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Password_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Password = () => {
  const [password, setPassword] = external_react_default.a.useState("");
  const [user, setUser] = external_react_default.a.useContext(userContext["a" /* default */]);
  const [isLoading, setIsLoading] = external_react_default.a.useContext(apiIsLoadingContext["a" /* default */]);
  const [toastMessage, setToastMessage] = external_react_default.a.useState({
    state: false,
    message: ""
  });
  const [language, setLanguage] = external_react_default.a.useContext(languageContext["a" /* default */]);

  const changeHandler = e => {
    const {
      name,
      value
    } = e.target;
    setPassword(e => {
      return Password_objectSpread(Password_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const UpdatePassword = () => {
    if (password.newPassword == undefined) {
      setToastMessage({
        state: true,
        message: "hot mod pass mte3eke",
        color: "#ff2f2f"
      });
    } else if (password.newPassword.length < 8) {
      setToastMessage({
        state: true,
        message: "a9al min 8 raw",
        color: "#ff2f2f"
      });
    } else {
      setIsLoading(true);
      Object(services_user["i" /* changePassword */])(password, user.token).then(result => {
        if (result.data.passwordincorrect == true) {
          setToastMessage({
            state: true,
            message: "mot pass mte3ek le9dim 8ale",
            color: "#ff2f2f"
          });
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setToastMessage({
            state: true,
            message: "raw tbadel"
          });
        }
      }).catch(error => {
        alert(error.message);
      });
    }
  };

  external_react_default.a.useEffect(() => {
    if (toastMessage.state == true) {
      setTimeout(() => {
        setToastMessage({
          state: false,
          message: ""
        });
      }, 6000);
    }
  }, [toastMessage]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Password_module_default.a.container,
    children: [toastMessage.state && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toast_Toast, {
      text: toastMessage.message,
      color: toastMessage.color
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Password_module_default.a.header,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: language.UpdateYourPassword
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Password_module_default.a.centerInputs,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Password_module_default.a.warningText,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: language.Itsagoodideatouseastrongpasswordthatyou
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Password_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          onChange: e => changeHandler(e),
          type: "password",
          name: "oldPassword"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.oldPassword
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Password_module_default.a.warningText,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: language.newpasswordneedtobeatleastlength
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Password_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          onChange: e => changeHandler(e),
          type: "password",
          name: "newPassword"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.newPassword
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Password_module_default.a.btn,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: () => UpdatePassword(),
        children: language.update
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          children: language.cancel
        })
      })]
    })]
  });
};

/* harmony default export */ var Password_Password = (Password);
// EXTERNAL MODULE: ./components/profileSettings/Telephone/Telephone.module.scss
var Telephone_module = __webpack_require__("8buk");
var Telephone_module_default = /*#__PURE__*/__webpack_require__.n(Telephone_module);

// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__("ZpXP");
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);

// CONCATENATED MODULE: ./components/profileSettings/Telephone/Telephone.js








const Telephone = () => {
  const [language, setLanguage] = external_react_default.a.useContext(languageContext["a" /* default */]);
  /*  setToastMessage({state:true,message:"error.message"})
      React.useEffect(()=>{
     if(toastMessage.state==true){
         setTimeout(() => {
             setToastMessage({state:false,message:""})
         }, 6000);
  
     }
    },[toastMessage])
   import Toast from '../../Toast/Toast'
  
    const [toastMessage,setToastMessage]=React.useState({state:false,message:""})
  
    {toastMessage.state&&<Toast text={toastMessage.message} ></Toast>}
    const onChangeHandlerRegisterPhone=()=>{
      }*/

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Telephone_module_default.a.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Telephone_module_default.a.header,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: language.UpdateYourPhoneNumber
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Telephone_module_default.a.centerInputs,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Telephone_module_default.a.warningText,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: language.putyournewphonenumberhere
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Telephone_module_default.a.phoneContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_phone_input_2_default.a, {
          name: "tel",
          country: 'tn',
          specialLabel: language.phone,
          inputProps: {
            name: 'phone',
            required: true,
            autoFocus: true
          },
          onChange: (e, country) => onChangeHandlerRegisterPhone(e, country)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          children: language.send
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Telephone_module_default.a.warningText,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: language.YouWillreciveconfermationCodeputithereAndClickUpdate
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Telephone_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "password",
          name: "password"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: language.ConfermationCode
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Telephone_module_default.a.btn,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        children: language.update
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          children: language.cancel
        })
      })]
    })]
  });
};

/* harmony default export */ var Telephone_Telephone = (Telephone);
// EXTERNAL MODULE: ./components/profileSettings/Privacy/Privacy.module.scss
var Privacy_module = __webpack_require__("aisa");
var Privacy_module_default = /*#__PURE__*/__webpack_require__.n(Privacy_module);

// CONCATENATED MODULE: ./components/profileSettings/Privacy/Privacy.js







const Privacy = () => {
  const [user, setUser] = external_react_default.a.useContext(userContext["a" /* default */]);
  const [privacystate, setPrivacystate] = external_react_default.a.useState("private");
  external_react_default.a.useEffect(() => {
    Object(services_user["j" /* getPrivacy */])(user.token).then(result => {
      console.log(result.data.data.privacy);
      setPrivacystate(result.data.data.privacy);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const RadioBoxChangeHandler = e => {
    const {
      value
    } = e.target;
    Object(services_user["s" /* updatePrivacy */])({
      privacy: value
    }, user.token).then(result => {
      setPrivacystate(value);
    }).catch(error => {
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Privacy_module_default.a.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Privacy_module_default.a.header,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Privacy"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Privacy_module_default.a.radioContainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Privacy_module_default.a.text,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "Setting your profile Private will only late accepted users to view your profile (comment likes)"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Privacy_module_default.a.radioInputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "private:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          onChange: e => RadioBoxChangeHandler(e),
          checked: privacystate == "private",
          className: Privacy_module_default.a.private,
          name: "privacy",
          type: "radio",
          value: "private"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Privacy_module_default.a.text,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "Setting your profile Public will allow Follower to like or comment your posts and images "
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Privacy_module_default.a.radioInputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "public:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          onChange: e => RadioBoxChangeHandler(e),
          checked: privacystate == "public",
          className: Privacy_module_default.a.public,
          name: "privacy",
          type: "radio",
          value: "public"
        })]
      })]
    })]
  });
};

/* harmony default export */ var Privacy_Privacy = (Privacy);
// CONCATENATED MODULE: ./pages/settings/index.js












const ProfileSettings = props => {
  const [page, setPage] = external_react_default.a.useState("account");

  const changePage = e => {
    setPage(e);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: settings_module_default.a.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavBar["a" /* default */], {
      token: props.token
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: settings_module_default.a.settingsContainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: settings_module_default.a.sideNavBar,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sideNavBar_sideNavBar, {
          changePage: changePage
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: settings_module_default.a.profileSettings,
        children: [page == "account" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Account_Account, {}), page == "email" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Email_Email, {}), page == "password" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Password_Password, {}), page == "Telephone" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Telephone_Telephone, {}), page == "Privacy" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Privacy_Privacy, {})]
      })]
    })]
  });
};

/* harmony default export */ var settings = __webpack_exports__["default"] = (ProfileSettings);
async function getServerSideProps({
  req,
  res
}) {
  return req.cookies.token ? {
    props: {
      token: req.cookies.token
    }
  } : {
    redirect: {
      destination: '/',
      permanent: false
    }
  };
}

/***/ }),

/***/ "oM9w":
/***/ (function(module, exports) {

module.exports = require("react-rainbow-components");

/***/ }),

/***/ "pNXB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "NavBar_container__PqDJM",
	"nav": "NavBar_nav__zEzq2",
	"Logo": "NavBar_Logo__3TCwx",
	"Search": "NavBar_Search__2DtTD",
	"flexItems": "NavBar_flexItems__26Wt6",
	"searchImg": "NavBar_searchImg__AAY-7",
	"Nonauthenticated": "NavBar_Nonauthenticated__2a_17",
	"authenticated": "NavBar_authenticated__2MYd8",
	"notification": "NavBar_notification__3XRuG",
	"upload": "NavBar_upload__30HO_",
	"profile": "NavBar_profile__3Hvcd",
	"navBarImageContainer": "NavBar_navBarImageContainer__3nQy9",
	"SideNavBarContainer": "NavBar_SideNavBarContainer__3Y1g8",
	"SideNavBarIconMenu": "NavBar_SideNavBarIconMenu__2t8jt",
	"icon": "NavBar_icon__13wI1",
	"iconbar1": "NavBar_iconbar1__32TCU",
	"iconbar2": "NavBar_iconbar2__28YWi",
	"iconbar3": "NavBar_iconbar3__WsW9q",
	"openClose": "NavBar_openClose__2YiZd",
	"chatSvg": "NavBar_chatSvg__2bzza",
	"numberOfChatsNotReadlocal": "NavBar_numberOfChatsNotReadlocal__3kP0-",
	"numberOfNotificationNotReadlocal": "NavBar_numberOfNotificationNotReadlocal__3VTiL",
	"showTemImageOfUserWhoSentYouMessage": "NavBar_showTemImageOfUserWhoSentYouMessage__24h52",
	"showImage": "NavBar_showImage__2RARv",
	"containerBtnSideNavBar": "NavBar_containerBtnSideNavBar__3hNrx",
	"bar1": "NavBar_bar1__2Djth",
	"bar2": "NavBar_bar2__2WsLa",
	"bar3": "NavBar_bar3__2F2Oy",
	"change": "NavBar_change__15vgR",
	"sideBarContainer": "NavBar_sideBarContainer__1xLOB",
	"showSideNavBar": "NavBar_showSideNavBar__1bysC",
	"iconSideNavBar": "NavBar_iconSideNavBar__3WlU4",
	"userImageInSideNavBar": "NavBar_userImageInSideNavBar__5CDKD"
};


/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "qJ0o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateColorChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUnreadUsersChatsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMessagesOfCurrentconversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserWhoChatWith; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KWog");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const addMessage = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/chat/addMessage", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getMessagesOfCurrentconversation = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/chat/getMessagesOfCurrentconversation", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getUserWhoChatWith = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/chat/getUserWhoChatWith", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getUnreadUsersChatsNumber = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/chat/getUnreadUsersChatsNumber", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const updateColorChat = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/chat/updateColorChat", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "tD+B":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Container": "facebookLogIn_Container__2RYXQ"
};


/***/ }),

/***/ "u4oV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return countFollowingOfUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deniedfollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acceptfollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeFollowPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkIffollowApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return followUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return unfollowUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFollowingOfUser; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KWog");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getFollowingOfUser = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/getFollowingOfUser", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const unfollowUserApi = async (followingid, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/unfollowUser", {
    followingid: followingid
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const followUserApi = async (userToFollow, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/followUser", {
    followingid: userToFollow
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const checkIffollowApi = async (theOtherPersonId, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/checkIffollow", {
    followingid: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const removeFollowPending = async (theOtherPersonId, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/removeFollowPending", {
    followingid: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const acceptfollow = async (theOtherPersonId, idNotif, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/acceptfollow", {
    idNotif: idNotif,
    theOtherPersonId: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const deniedfollow = async (theOtherPersonId, idNotif, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/deniedfollow", {
    idNotif: idNotif,
    followingid: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const countFollowingOfUser = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/following/countFollowingOfUser", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "uEA5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/modalSingInSingUp/ModalSingInSingUp.module.scss
var ModalSingInSingUp_module = __webpack_require__("CvYx");
var ModalSingInSingUp_module_default = /*#__PURE__*/__webpack_require__.n(ModalSingInSingUp_module);

// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/material.css
var material = __webpack_require__("Bec1");

// EXTERNAL MODULE: ./components/popUpMessage/popUpMessage.js
var popUpMessage = __webpack_require__("GBzw");

// EXTERNAL MODULE: ./context/languageContext.js
var languageContext = __webpack_require__("z+U2");

// EXTERNAL MODULE: ./context/apiIsLoadingContext.js
var apiIsLoadingContext = __webpack_require__("BIE6");

// EXTERNAL MODULE: external "react-facebook-login"
var external_react_facebook_login_ = __webpack_require__("42Y9");
var external_react_facebook_login_default = /*#__PURE__*/__webpack_require__.n(external_react_facebook_login_);

// EXTERNAL MODULE: ./components/facebookLogIn/facebookLogIn.module.scss
var facebookLogIn_module = __webpack_require__("tD+B");
var facebookLogIn_module_default = /*#__PURE__*/__webpack_require__.n(facebookLogIn_module);

// EXTERNAL MODULE: ./services/user.js
var user = __webpack_require__("LzO8");

// CONCATENATED MODULE: ./components/facebookLogIn/facebookLogIn.js






const FacebookLoginFn = () => {
  const responseFacebook = e => {
    Object(user["e" /* LoginFacebook */])({
      expiresIn: e.expiresIn,
      accessToken: e.accessToken,
      id: e.id,
      urlImage: e.picture.data.url
    }).then(res => {
      if (res.data.state == false) {
        alert(res.data.message);
      } else {
        fetch("api/setToken", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: res.data.token
          })
        }).then(data => {
          localStorage.setItem("ref_token", res.data.ref_token);
          location.reload();
          props.openOrcloseModal();
        });
      }
    }).catch(e => {
      console.log(e);
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: facebookLogIn_module_default.a.Container,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_facebook_login_default.a, {
      appId: "428158131820092",
      autoLoad: false,
      fields: "name,email,picture",
      callback: responseFacebook
    })
  });
};

/* harmony default export */ var facebookLogIn = (FacebookLoginFn);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/modalSingInSingUp/singIn/singIn.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const singIn_singIn = props => {
  const [language, setLanguage] = external_react_default.a.useContext(languageContext["a" /* default */]);
  const [isLoading, setIsLoading] = external_react_default.a.useContext(apiIsLoadingContext["a" /* default */]);
  const [loginState, setLoginState] = external_react_default.a.useState({});

  const singIn = () => {
    setIsLoading(true);
    Object(user["d" /* Login */])(loginState).then(res => {
      if (res.data.state == false) {
        props.setErrorMessageProps({
          state: true,
          text: res.data.message
        });
        setIsLoading(false);
      } else if (res.data.verified == false) {
        props.openVerifieAccountModal(res.data.userid);
        setIsLoading(false);
      } else {
        fetch("/api/setToken", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: res.data.token
          })
        }).then(() => {
          localStorage.setItem("ref_token", res.data.ref_token);
          setIsLoading(false);
          location.reload();
        });
      }
    }).catch(e => {
      setIsLoading(false);
      props.setErrorMessageProps({
        state: true,
        text: e.message
      });
    });
  };

  const setLoginData = e => {
    const {
      name,
      value
    } = e.target;
    setLoginState(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  }; //onKeyUp={(e)=>e.target.value=e.target.value.replace(/[^\d]/,'')}  


  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: ModalSingInSingUp_module_default.a.singIn,
    style: props.showSingIn_Or_SHowSingUp ? {
      left: '0%'
    } : {
      left: '100%'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      className: ModalSingInSingUp_module_default.a.form,
      onSubmit: e => {
        e.preventDefault();
      },
      autoComplete: "new-password",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.pageHeader,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Log in to NOZZLA"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.descriptionHeader,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: language.createaprofilefollowotheraccountstalkaboutyourownexperienceandmore
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "text",
        name: "",
        value: "",
        readOnly: true,
        style: {
          display: "none"
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ModalSingInSingUp_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          onChange: e => setLoginData(e),
          defaultValue: "",
          name: "identity",
          type: "text",
          className: ModalSingInSingUp_module_default.a.input,
          required: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: ModalSingInSingUp_module_default.a.labelspan,
            children: language.telephoneoremail
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ModalSingInSingUp_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          onChange: e => setLoginData(e),
          defaultValue: "",
          name: "password",
          type: "password",
          className: ModalSingInSingUp_module_default.a.input,
          required: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: ModalSingInSingUp_module_default.a.labelspan,
            children: language.password
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: ModalSingInSingUp_module_default.a.btn,
        onClick: () => singIn(),
        children: language.signin
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: ModalSingInSingUp_module_default.a.message,
        children: [language.YoudonthaveaccountClickhereto, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: ModalSingInSingUp_module_default.a.clickHere,
          onClick: () => props.fnshowSingInOrSingUp(),
          children: language.signup
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/forgetPassword",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: ModalSingInSingUp_module_default.a.forgetPassword,
            children: language.ForgotPassword
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var modalSingInSingUp_singIn_singIn = (singIn_singIn);
// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__("ZpXP");
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);

// EXTERNAL MODULE: external "react-rainbow-components"
var external_react_rainbow_components_ = __webpack_require__("oM9w");

// CONCATENATED MODULE: ./components/modalSingInSingUp/singUp/singUp.js



function singUp_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function singUp_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { singUp_ownKeys(Object(source), true).forEach(function (key) { singUp_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { singUp_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function singUp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const singUp_singUp = props => {
  const [language, setLanguage] = external_react_default.a.useContext(languageContext["a" /* default */]);
  const [confirmRegisterForm, setConfirmRegisterForm] = external_react_default.a.useState(false); //enable and disable sing up button if the from is not complete

  const [errorData, setErrorData] = external_react_default.a.useState({
    userName: {
      state: 'false',
      msg: ''
    },
    password: {
      state: 'false',
      msg: ''
    },
    email: {
      state: 'false',
      msg: ''
    }
  }); //error messages

  const [registerState, setregisterState] = external_react_default.a.useState({
    userName: "",
    tel: "",
    password: "",
    email: "",
    birthDay: "2000-01-01T23:00:00.000Z",
    dialCode: ""
  }); //user register data

  const [changeEmailOrTelinit, setChangeEmailOrTel] = external_react_default.a.useState("email");
  var userName = external_react_default.a.useRef();
  var password = external_react_default.a.useRef();
  external_react_default.a.useEffect(() => {
    setTimeout(() => {
      userName.current.value = "";
      password.current.value = "";
    }, 1000);
  }, []);

  const singUp = () => {
    if (changeEmailOrTelinit == "email") {
      delete registerState["tel"];
    } else {
      delete registerState["email"];
    }

    Object(user["f" /* Register */])(registerState).then(res => {
      if (res.data == undefined) {} else if (res.data.state == false) {
        props.setErrorMessageProps({
          state: true,
          text: res.data.message
        });
      } else {
        props.openVerifieAccountModal(res.data.userid);
        props.fnshowSingInOrSingUp();
      }
    }).catch(e => {
      props.setErrorMessageProps({
        state: true,
        text: e.message
      });
    });
  };

  const formValidation = e => {
    let tel = "";
    let email = "";

    if (e.target.form != null) {
      let userName = e.target.form[0].value || "";

      if (e.target.form[1].name == "phone") {
        tel = e.target.form[1].value;
        email = "";
      } else {
        tel = "";
        email = e.target.form[1].value;
      }

      let password = e.target.form[2].value || "";
      let confirmPassword = e.target.form[3].value || "";
      let birdhDay = e.target.form[4].value || "";

      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      if (email.length > 0) {
        if (validateEmail(email.toLowerCase())) {
          e.target.form[1].style.border = "1px solid rgba(22, 24, 35, 0.12) ";
          setErrorData(e => {
            return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
              email: {
                state: 'false',
                msg: ''
              }
            });
          });
        } else {
          e.target.form[1].style.border = "1px solid red ";
          setErrorData(e => {
            return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
              email: {
                state: 'true',
                msg: 'Enter a valid email address'
              }
            });
          });
        }
      }

      if (confirmPassword.length > 1) {
        if (password != confirmPassword) {
          document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid red";
          document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid red";
          setErrorData(e => {
            return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
              password: {
                state: 'true',
                msg: 'the 2 password are not the same'
              }
            });
          });
        } else {
          if (password.length < 8) {
            setErrorData(e => {
              return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
                password: {
                  state: 'true',
                  msg: 'your browser must contain more than 8 letters'
                }
              });
            });
          } else {
            setErrorData(e => {
              return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
                password: {
                  state: 'false',
                  msg: 'your browser must contain more than 8 letters'
                }
              });
            });
            document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid rgba(22, 24, 35, 0.12)";
            document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid rgba(22, 24, 35, 0.12)";
          }
        }
      } else {
        document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid rgba(22, 24, 35, 0.12)";
        document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid rgba(22, 24, 35, 0.12)";
      }

      if (userName.length > 0 && password.length > 0 && confirmPassword.length > 0 && (validateEmail(email) || tel.length > 6)) {
        if (password == confirmPassword) {
          setConfirmRegisterForm(true);
          return true;
        } else {
          setConfirmRegisterForm(false);
          return false;
        }
      } else {
        setConfirmRegisterForm(false);
        return false;
      }
    }
  };
  /****************************************/

  /************Set Phone Number************/

  /****************************************/


  const onChangeHandlerRegisterPhone = (data, country) => {
    setregisterState(e => {
      return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
        "dialCode": country.dialCode,
        'tel': data
      });
    });
  };
  /****************************************/

  /********Set User Name and Password******/

  /****************************************/


  const userName_Password_Handler = e => {
    const {
      name,
      value
    } = e.target;
    setregisterState(e => {
      return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const changeEmailOrTel = () => {
    setChangeEmailOrTel(e => {
      if (e == "email") {
        setregisterState(e => {
          return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
            email: ""
          });
        });
        setConfirmRegisterForm(false);
        return "tel";
      } else {
        setregisterState(e => {
          return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
            tel: ""
          });
        });
        setConfirmRegisterForm(false);
        return "email";
      }
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: ModalSingInSingUp_module_default.a.singUp,
    style: props.showSingIn_Or_SHowSingUp ? {
      left: '0%'
    } : {
      left: '-100%'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      className: ModalSingInSingUp_module_default.a.form,
      onSubmit: e => {
        e.preventDefault();
      },
      onChange: e => {
        formValidation(e);
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.pageHeader,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Sing up For NOZZLA"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.descriptionHeader,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: language.createaprofilefollowotheraccountstalkaboutyourownexperienceandmore
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ModalSingInSingUp_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          ref: userName,
          name: "userName",
          type: "text",
          className: ModalSingInSingUp_module_default.a.input,
          onChange: e => userName_Password_Handler(e),
          required: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: ModalSingInSingUp_module_default.a.labelspan,
            children: language.username
          })
        })]
      }), errorData.userName.state == "true" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.errorMessage,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: errorData.userName.msg
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.inputContainer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: ModalSingInSingUp_module_default.a.telOrEmail,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: ModalSingInSingUp_module_default.a.labelEmailOrPassword,
            onClick: () => changeEmailOrTel(),
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["change to ", changeEmailOrTelinit]
            })
          }), changeEmailOrTelinit == "tel" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: ModalSingInSingUp_module_default.a.tel,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_phone_input_2_default.a, {
              name: "tel",
              specialLabel: language.phone,
              country: 'tn',
              inputProps: {
                name: 'phone',
                required: true,
                autoFocus: true
              },
              value: registerState.tel,
              onChange: (e, country) => onChangeHandlerRegisterPhone(e, country)
            })
          }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: ModalSingInSingUp_module_default.a.email,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              name: "email",
              type: "text",
              onChange: e => {
                userName_Password_Handler(e);
              },
              className: `${ModalSingInSingUp_module_default.a.input} `,
              required: true
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: ModalSingInSingUp_module_default.a.labelspan,
                children: language.email
              })
            })]
          })]
        })
      }), errorData.email.state == "true" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.errorMessage,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: errorData.email.msg
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ModalSingInSingUp_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          ref: password,
          name: "password",
          type: "password",
          onChange: e => {
            userName_Password_Handler(e);
          },
          className: `${ModalSingInSingUp_module_default.a.ConfirmPassword} ${ModalSingInSingUp_module_default.a.input} `,
          required: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: ModalSingInSingUp_module_default.a.labelspan,
            children: language.password
          })
        })]
      }), errorData.password.state == "true" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.errorMessage,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: errorData.password.msg
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ModalSingInSingUp_module_default.a.inputContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "password",
          className: `${ModalSingInSingUp_module_default.a.input} ${ModalSingInSingUp_module_default.a.ConfirmPassword}`,
          required: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: ModalSingInSingUp_module_default.a.labelspan,
            children: language.confirmpassword
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.inputContainer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_rainbow_components_["DatePicker"], {
          value: registerState.birthDay,
          onChange: value => setregisterState(e => {
            return singUp_objectSpread(singUp_objectSpread({}, e), {}, {
              "birthDay": value
            });
          }),
          label: "birth Day",
          formatStyle: "large",
          locale: language.age
        })
      }), confirmRegisterForm == true && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: ModalSingInSingUp_module_default.a.btn,
        onClick: () => singUp(),
        children: language.signup
      }), confirmRegisterForm == false && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: ModalSingInSingUp_module_default.a.btn,
        disabled: true,
        style: {
          opacity: 0.2,
          cursor: 'default'
        },
        children: language.signup
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: ModalSingInSingUp_module_default.a.message,
        children: [language.AlreadyHaveAccount, "  ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: ModalSingInSingUp_module_default.a.clickHere,
          onClick: () => props.fnshowSingInOrSingUp(),
          children: language.signin
        })]
      })]
    })
  });
};

/* harmony default export */ var modalSingInSingUp_singUp_singUp = (singUp_singUp);
// EXTERNAL MODULE: ./components/verifyAccount/verifyAccount.js
var verifyAccount = __webpack_require__("CGRP");

// EXTERNAL MODULE: ./components/changeLanguage/changeLanguage.js
var changeLanguage = __webpack_require__("W4j+");

// CONCATENATED MODULE: ./components/modalSingInSingUp/ModalSingInSingUp.js



function ModalSingInSingUp_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ModalSingInSingUp_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ModalSingInSingUp_ownKeys(Object(source), true).forEach(function (key) { ModalSingInSingUp_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ModalSingInSingUp_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModalSingInSingUp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ModalSingInSingUp = props => {
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(external_react_["useState"])({
    state: false,
    text: ""
  }); // when state true show  pop up 

  const {
    0: showSingIn_Or_SHowSingUp,
    1: setShowSingIn_Or_SHowSingUp
  } = Object(external_react_["useState"])(true);
  /*change between sing in and sing up */

  const {
    0: verifiedAccountModal,
    1: setverifiedAccountModal
  } = Object(external_react_["useState"])(false); //when trye open modal to put the code

  const {
    0: userId,
    1: setUserId
  } = Object(external_react_["useState"])("");

  const fnsetShowSingIn_Or_SHowSingUp = () => {
    setShowSingIn_Or_SHowSingUp(e => !e);
  };

  const closeModal = () => {
    props.openOrcloseModal();
  };

  const closePopUp = () => {
    setErrorMessage({
      state: false,
      text: ""
    });
  };

  const setErrorMessagefn = e => {
    setErrorMessage(ModalSingInSingUp_objectSpread({}, e));
  };

  const openVerifieAccountModalfn = userid => {
    setUserId(userid);
    setverifiedAccountModal(e => !e);
  };
  /***test */


  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: ModalSingInSingUp_module_default.a.contrainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ModalSingInSingUp_module_default.a.waveContainer
    }), errorMessage.state == true && /*#__PURE__*/Object(jsx_runtime_["jsx"])(popUpMessage["a" /* default */], {
      fnclose: closePopUp,
      openPopUp: errorMessage
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ModalSingInSingUp_module_default.a.changelang,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(changeLanguage["a" /* default */], {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ModalSingInSingUp_module_default.a.formContainer,
      children: [verifiedAccountModal && /*#__PURE__*/Object(jsx_runtime_["jsx"])(verifyAccount["a" /* default */], {
        setErrorMessageProps: setErrorMessagefn,
        userId: userId
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalSingInSingUp_module_default.a.closebtn,
        onClick: () => closeModal()
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ModalSingInSingUp_module_default.a.formsContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(modalSingInSingUp_singIn_singIn, {
          openVerifieAccountModal: openVerifieAccountModalfn,
          setErrorMessageProps: setErrorMessagefn,
          showSingIn_Or_SHowSingUp: showSingIn_Or_SHowSingUp,
          fnshowSingInOrSingUp: fnsetShowSingIn_Or_SHowSingUp
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modalSingInSingUp_singUp_singUp, {
          openVerifieAccountModal: openVerifieAccountModalfn,
          setErrorMessageProps: setErrorMessagefn,
          showSingIn_Or_SHowSingUp: showSingIn_Or_SHowSingUp,
          fnshowSingInOrSingUp: fnsetShowSingIn_Or_SHowSingUp
        })]
      })]
    })]
  });
};

/* harmony default export */ var modalSingInSingUp_ModalSingInSingUp = __webpack_exports__["a"] = (ModalSingInSingUp);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z+U2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LanguageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("eng");
/* harmony default export */ __webpack_exports__["a"] = (LanguageContext);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });