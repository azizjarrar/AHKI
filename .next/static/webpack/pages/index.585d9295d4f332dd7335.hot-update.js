webpackHotUpdate_N_E("pages/index",{

/***/ "./services/todayTopic.js":
/*!********************************!*\
  !*** ./services/todayTopic.js ***!
  \********************************/
/*! exports provided: getSpecificTopic, Addtopic, getLastTopic, getallTopics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecificTopic", function() { return getSpecificTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addtopic", function() { return Addtopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastTopic", function() { return getLastTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getallTopics", function() { return getallTopics; });
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interceptor/interceptor */ "./interceptor/interceptor.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // send ref token and get new token

var Addtopic = /*#__PURE__*/function () {
  var _ref = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
    return F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/topic/Addtopic", {}));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Addtopic(_x) {
    return _ref.apply(this, arguments);
  };
}();

_c = Addtopic;

var getLastTopic = /*#__PURE__*/function () {
  var _ref2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    return F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/topic/getLastTopic", {}, {
              secure: true
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getLastTopic() {
    return _ref2.apply(this, arguments);
  };
}();

var getallTopics = /*#__PURE__*/function () {
  var _ref3 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
    return F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/topic/getallTopics", {}, {
              secure: true
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getallTopics() {
    return _ref3.apply(this, arguments);
  };
}();

var getSpecificTopic = /*#__PURE__*/function () {
  var _ref4 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(data) {
    return F_AHKI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/topic/getallTopics", _objectSpread({}, data), {
              secure: true
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getSpecificTopic(_x2) {
    return _ref4.apply(this, arguments);
  };
}();



var _c;

$RefreshReg$(_c, "Addtopic");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvdG9kYXlUb3BpYy5qcyJdLCJuYW1lcyI6WyJBZGR0b3BpYyIsImRhdGEiLCJheGlvc0FwaUluc3RhbmNlIiwicG9zdCIsImdldExhc3RUb3BpYyIsInNlY3VyZSIsImdldGFsbFRvcGljcyIsImdldFNwZWNpZmljVG9waWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQSxJQUFNQSxRQUFRO0FBQUEsd1FBQUMsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUNMQyxnRUFBZ0IsQ0FBQ0MsSUFBakIsQ0FBc0IsaUJBQXRCLEVBQXdDLEVBQXhDLENBREs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBUkgsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkOztLQUFNQSxROztBQUdOLElBQU1JLFlBQVk7QUFBQSx5UUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ1RGLGdFQUFnQixDQUFDQyxJQUFqQixDQUFzQixxQkFBdEIsRUFBNEMsRUFBNUMsRUFBK0M7QUFBQ0Usb0JBQU0sRUFBRTtBQUFULGFBQS9DLENBRFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBWkQsWUFBWTtBQUFBO0FBQUE7QUFBQSxHQUFsQjs7QUFHQSxJQUFNRSxZQUFZO0FBQUEseVFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNSSixnRUFBZ0IsQ0FBQ0MsSUFBakIsQ0FBc0IscUJBQXRCLEVBQTRDLEVBQTVDLEVBQStDO0FBQUNFLG9CQUFNLEVBQUU7QUFBVCxhQUEvQyxDQURROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUEsa0JBQVpDLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O0FBR0MsSUFBTUMsZ0JBQWdCO0FBQUEseVFBQUMsa0JBQU1OLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNkQyxnRUFBZ0IsQ0FBQ0MsSUFBakIsQ0FBc0IscUJBQXRCLG9CQUFnREYsSUFBaEQsR0FBc0Q7QUFBQ0ksb0JBQU0sRUFBRTtBQUFULGFBQXRELENBRGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBaEJFLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ODVkOTI5NWQ0ZjMzMmRkNzMzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zQXBpSW5zdGFuY2UgZnJvbSAnLi4vaW50ZXJjZXB0b3IvaW50ZXJjZXB0b3InXHJcbi8vIHNlbmQgcmVmIHRva2VuIGFuZCBnZXQgbmV3IHRva2VuXHJcbmNvbnN0IEFkZHRvcGljPWFzeW5jIChkYXRhKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3RvcGljL0FkZHRvcGljXCIse30pXHJcbn1cclxuY29uc3QgZ2V0TGFzdFRvcGljPWFzeW5jICgpPT57XHJcbiAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdG9waWMvZ2V0TGFzdFRvcGljXCIse30se3NlY3VyZTogdHJ1ZX0pXHJcbn1cclxuY29uc3QgZ2V0YWxsVG9waWNzPWFzeW5jICgpPT57XHJcbiAgICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3RvcGljL2dldGFsbFRvcGljc1wiLHt9LHtzZWN1cmU6IHRydWV9KVxyXG4gfVxyXG4gY29uc3QgZ2V0U3BlY2lmaWNUb3BpYz1hc3luYyhkYXRhKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3RvcGljL2dldGFsbFRvcGljc1wiLHsuLi5kYXRhfSx7c2VjdXJlOiB0cnVlfSlcclxuXHJcbiB9XHJcbmV4cG9ydCB7Z2V0U3BlY2lmaWNUb3BpYyAsQWRkdG9waWMgLGdldExhc3RUb3BpYyxnZXRhbGxUb3BpY3N9XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9