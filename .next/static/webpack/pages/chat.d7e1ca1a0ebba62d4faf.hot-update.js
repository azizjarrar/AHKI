webpackHotUpdate_N_E("pages/chat",{

/***/ "./services/chat.js":
/*!**************************!*\
  !*** ./services/chat.js ***!
  \**************************/
/*! exports provided: updateColorChat, getUnreadUsersChatsNumber, addMessage, getMessagesOfCurrentconversation, getUserWhoChatWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateColorChat", function() { return updateColorChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnreadUsersChatsNumber", function() { return getUnreadUsersChatsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessagesOfCurrentconversation", function() { return getMessagesOfCurrentconversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserWhoChatWith", function() { return getUserWhoChatWith; });
/* harmony import */ var F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interceptor/interceptor */ "./interceptor/interceptor.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var addMessage = /*#__PURE__*/function () {
  var _ref = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, token) {
    return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/chat/addMessage", _objectSpread({}, data), {
              headers: {
                Authorization: 'Bearer ' + token
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addMessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getMessagesOfCurrentconversation = /*#__PURE__*/function () {
  var _ref2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, token) {
    return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/chat/getMessagesOfCurrentconversation", _objectSpread({}, data), {
              headers: {
                Authorization: 'Bearer ' + token
              }
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMessagesOfCurrentconversation(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getUserWhoChatWith = /*#__PURE__*/function () {
  var _ref3 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data, token) {
    return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/chat/getUserWhoChatWith", _objectSpread({}, data), {
              headers: {
                Authorization: 'Bearer ' + token
              }
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUserWhoChatWith(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getUnreadUsersChatsNumber = /*#__PURE__*/function () {
  var _ref4 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data, token) {
    return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/chat/getUnreadUsersChatsNumber", _objectSpread({}, data), {
              headers: {
                Authorization: 'Bearer ' + token
              }
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getUnreadUsersChatsNumber(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var updateColorChat = /*#__PURE__*/function () {
  var _ref5 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data, token) {
    return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_3__["default"].post("/chat/updateColorChat", _objectSpread({}, data), {
              headers: {
                Authorization: 'Bearer ' + token
              }
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateColorChat(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJhZGRNZXNzYWdlIiwiZGF0YSIsInRva2VuIiwiYXhpb3NBcGlJbnN0YW5jZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwiZ2V0VW5yZWFkVXNlcnNDaGF0c051bWJlciIsInVwZGF0ZUNvbG9yQ2hhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVO0FBQUEsb09BQUMsaUJBQU1DLElBQU4sRUFBV0MsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ05DLGdFQUFnQixDQUFDQyxJQUFqQixDQUFzQixrQkFBdEIsb0JBQTZDSCxJQUE3QyxHQUFtRDtBQUFFSSxxQkFBTyxFQUFFO0FBQUNDLDZCQUFhLEVBQUUsWUFBWUo7QUFBNUI7QUFBWCxhQUFuRCxDQURNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUEsa0JBQVZGLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBR0EsSUFBTU8sZ0NBQWdDO0FBQUEscU9BQUMsa0JBQU1OLElBQU4sRUFBV0MsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQzVCQyxnRUFBZ0IsQ0FBQ0MsSUFBakIsQ0FBc0Isd0NBQXRCLG9CQUFtRUgsSUFBbkUsR0FBeUU7QUFBRUkscUJBQU8sRUFBRTtBQUFDQyw2QkFBYSxFQUFFLFlBQVlKO0FBQTVCO0FBQVgsYUFBekUsQ0FENEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBaENLLGdDQUFnQztBQUFBO0FBQUE7QUFBQSxHQUF0Qzs7QUFHQSxJQUFNQyxrQkFBa0I7QUFBQSxxT0FBQyxrQkFBTVAsSUFBTixFQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDZEMsZ0VBQWdCLENBQUNDLElBQWpCLENBQXNCLDBCQUF0QixvQkFBcURILElBQXJELEdBQTJEO0FBQUVJLHFCQUFPLEVBQUU7QUFBQ0MsNkJBQWEsRUFBRSxZQUFZSjtBQUE1QjtBQUFYLGFBQTNELENBRGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBbEJNLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFHQSxJQUFNQyx5QkFBeUI7QUFBQSxxT0FBQyxrQkFBTVIsSUFBTixFQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDckJDLGdFQUFnQixDQUFDQyxJQUFqQixDQUFzQixpQ0FBdEIsb0JBQTRESCxJQUE1RCxHQUFrRTtBQUFFSSxxQkFBTyxFQUFFO0FBQUNDLDZCQUFhLEVBQUUsWUFBWUo7QUFBNUI7QUFBWCxhQUFsRSxDQURxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQUFBLGtCQUF6Qk8seUJBQXlCO0FBQUE7QUFBQTtBQUFBLEdBQS9COztBQUdBLElBQU1DLGVBQWU7QUFBQSxxT0FBQyxrQkFBTVQsSUFBTixFQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FDWEMsZ0VBQWdCLENBQUNDLElBQWpCLENBQXNCLHVCQUF0QixvQkFBa0RILElBQWxELEdBQXdEO0FBQUVJLHFCQUFPLEVBQUU7QUFBQ0MsNkJBQWEsRUFBRSxZQUFZSjtBQUE1QjtBQUFYLGFBQXhELENBRFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQSxrQkFBZlEsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LmQ3ZTFjYTFhMGViYmE2MmQ0ZmFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3NBcGlJbnN0YW5jZSBmcm9tICcuLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvcidcclxuXHJcbmNvbnN0IGFkZE1lc3NhZ2U9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvY2hhdC9hZGRNZXNzYWdlXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbj1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9jaGF0L2dldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBnZXRVc2VyV2hvQ2hhdFdpdGg9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvY2hhdC9nZXRVc2VyV2hvQ2hhdFdpdGhcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IGdldFVucmVhZFVzZXJzQ2hhdHNOdW1iZXI9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvY2hhdC9nZXRVbnJlYWRVc2Vyc0NoYXRzTnVtYmVyXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCB1cGRhdGVDb2xvckNoYXQ9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvY2hhdC91cGRhdGVDb2xvckNoYXRcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmV4cG9ydCB7dXBkYXRlQ29sb3JDaGF0LGdldFVucmVhZFVzZXJzQ2hhdHNOdW1iZXIsYWRkTWVzc2FnZSxnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbixnZXRVc2VyV2hvQ2hhdFdpdGh9Il0sInNvdXJjZVJvb3QiOiIifQ==