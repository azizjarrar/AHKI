webpackHotUpdate_N_E("pages/chat",{

/***/ "./const.js":
/*!******************!*\
  !*** ./const.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = (ip = "http://127.0.0.1:5010"); //export default ip="http://127.0.0.1:5010";

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./interceptor/interceptor.js":
/*!************************************!*\
  !*** ./interceptor/interceptor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_refreshAccessToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/refreshAccessToken */ "./services/refreshAccessToken.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ "./const.js");





var axiosApiInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  //baseURL: 'http://46.101.169.142:5010/',
  baseURL: _const__WEBPACK_IMPORTED_MODULE_4__["default"],
  withCredentials: true
});
axiosApiInstance.defaults.withCredentials = true; //axiosApiInstance.defaults.baseURL = 'http://127.0.0.1:5010/' // set default url

axiosApiInstance.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(config) {
    return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", config);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), function (error) {
  Promise.reject(error);
});
axiosApiInstance.interceptors.response.use(function (response) {
  return response;
}, /*#__PURE__*/function () {
  var _ref2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(error) {
    var originalRequest, access_token;
    return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(error);
            originalRequest = error.config;

            if (!(error.message == "Network Error")) {
              _context2.next = 5;
              break;
            }

            // localStorage.removeItem('ref_token');
            // await axios.post("api/logout") // change token in cookies to the bew one
            alert(error.message); //location.reload();

            return _context2.abrupt("return");

          case 5:
            if (!(error.response.status === 401)) {
              _context2.next = 11;
              break;
            }

            localStorage.removeItem('ref_token');
            _context2.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("api/logout");

          case 9:
            // change token in cookies to the bew one
            window.reload();
            return _context2.abrupt("return");

          case 11:
            if (!(error.response.status === 404)) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return");

          case 13:
            if (!(error.response.status === 403 && !originalRequest._retry)) {
              _context2.next = 24;
              break;
            }

            originalRequest._retry = true;
            _context2.next = 17;
            return Object(_services_refreshAccessToken__WEBPACK_IMPORTED_MODULE_3__["refreshAccessToken"])(localStorage.getItem("ref_token"));

          case 17:
            access_token = _context2.sent;
            Object(_services_refreshAccessToken__WEBPACK_IMPORTED_MODULE_3__["deleteRefrechTokenOldOne"])(localStorage.getItem("ref_token")); // send the ref token and get new token

            originalRequest.headers.Authorization = 'Bearer ' + access_token.data.token;
            _context2.next = 22;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("api/setToken", {
              token: access_token.data.token
            });

          case 22:
            // change token in cookies to the bew one
            localStorage.setItem("ref_token", access_token.data.ref_token); // save the new ref_token

            return _context2.abrupt("return", axiosApiInstance(originalRequest));

          case 24:
            return _context2.abrupt("return", Promise.reject(error));

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (axiosApiInstance);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yLmpzIl0sIm5hbWVzIjpbImlwIiwiYXhpb3NBcGlJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImRlZmF1bHRzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9yaWdpbmFsUmVxdWVzdCIsIm1lc3NhZ2UiLCJhbGVydCIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwb3N0Iiwid2luZG93IiwicmVsb2FkIiwiX3JldHJ5IiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwiZ2V0SXRlbSIsImFjY2Vzc190b2tlbiIsImRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInRva2VuIiwic2V0SXRlbSIsInJlZl90b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsOENBQWVBLGlFQUFFLEdBQUMsdUJBQWxCLEUsQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLGdCQUFnQixHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDcEM7QUFDREMsU0FBTyxFQUFFSiw4Q0FGNEI7QUFHcENLLGlCQUFlLEVBQUU7QUFIbUIsQ0FBYixDQUF6QjtBQUtBSixnQkFBZ0IsQ0FBQ0ssUUFBakIsQ0FBMEJELGVBQTFCLEdBQTRDLElBQTVDLEMsQ0FDQTs7QUFDQUosZ0JBQWdCLENBQUNNLFlBQWpCLENBQThCQyxPQUE5QixDQUFzQ0MsR0FBdEM7QUFBQSxvT0FDRSxpQkFBTUMsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ1dBLE1BRFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLFVBQUFDLEtBQUssRUFBSTtBQUVQQyxTQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZjtBQUNILENBUEQ7QUFRQVYsZ0JBQWdCLENBQUNNLFlBQWpCLENBQThCTyxRQUE5QixDQUF1Q0wsR0FBdkMsQ0FBMkMsVUFBQ0ssUUFBRCxFQUFjO0FBQ3ZELFNBQU9BLFFBQVA7QUFDRCxDQUZEO0FBQUEscU9BRUcsa0JBQWdCSCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDREksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ01NLDJCQUZMLEdBRXVCTixLQUFLLENBQUNELE1BRjdCOztBQUFBLGtCQUdFQyxLQUFLLENBQUNPLE9BQU4sSUFBZSxlQUhqQjtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBRUNDLGlCQUFLLENBQUNSLEtBQUssQ0FBQ08sT0FBUCxDQUFMLENBUEQsQ0FRQzs7QUFSRDs7QUFBQTtBQUFBLGtCQVdFUCxLQUFLLENBQUNHLFFBQU4sQ0FBZU0sTUFBZixLQUF5QixHQVgzQjtBQUFBO0FBQUE7QUFBQTs7QUFZQ0Msd0JBQVksQ0FBQ0MsVUFBYixDQUF3QixXQUF4QjtBQVpEO0FBQUEsbUJBYU9wQiw0Q0FBSyxDQUFDcUIsSUFBTixDQUFXLFlBQVgsQ0FiUDs7QUFBQTtBQWFnQztBQUMvQkMsa0JBQU0sQ0FBQ0MsTUFBUDtBQWREOztBQUFBO0FBQUEsa0JBa0JFZCxLQUFLLENBQUNHLFFBQU4sQ0FBZU0sTUFBZixLQUEwQixHQWxCNUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxrQkFxQkdULEtBQUssQ0FBQ0csUUFBTixDQUFlTSxNQUFmLEtBQTBCLEdBQTFCLElBQWlDLENBQUNILGVBQWUsQ0FBQ1MsTUFyQnJEO0FBQUE7QUFBQTtBQUFBOztBQXNCR1QsMkJBQWUsQ0FBQ1MsTUFBaEIsR0FBeUIsSUFBekI7QUF0Qkg7QUFBQSxtQkF1QjhCQyx1RkFBa0IsQ0FBQ04sWUFBWSxDQUFDTyxPQUFiLENBQXFCLFdBQXJCLENBQUQsQ0F2QmhEOztBQUFBO0FBdUJTQyx3QkF2QlQ7QUF3QkdDLHlHQUF3QixDQUFDVCxZQUFZLENBQUNPLE9BQWIsQ0FBcUIsV0FBckIsQ0FBRCxDQUF4QixDQXhCSCxDQXlCRzs7QUFDQVgsMkJBQWUsQ0FBQ2MsT0FBaEIsQ0FBd0JDLGFBQXhCLEdBQXdDLFlBQVlILFlBQVksQ0FBQ0ksSUFBYixDQUFrQkMsS0FBdEU7QUExQkg7QUFBQSxtQkEyQlNoQyw0Q0FBSyxDQUFDcUIsSUFBTixDQUFXLGNBQVgsRUFBMEI7QUFBQ1csbUJBQUssRUFBQ0wsWUFBWSxDQUFDSSxJQUFiLENBQWtCQztBQUF6QixhQUExQixDQTNCVDs7QUFBQTtBQTJCb0U7QUFDakViLHdCQUFZLENBQUNjLE9BQWIsQ0FBcUIsV0FBckIsRUFBaUNOLFlBQVksQ0FBQ0ksSUFBYixDQUFrQkcsU0FBbkQsRUE1QkgsQ0E0QmlFOztBQTVCakUsOENBNkJVbkMsZ0JBQWdCLENBQUNnQixlQUFELENBN0IxQjs7QUFBQTtBQUFBLDhDQStCTUwsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0EvQk47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9DZ0JWLCtFQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjkzMjIyMjhlOTA3OGEyODE1ZDcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBpcD1cImh0dHA6Ly8xMjcuMC4wLjE6NTAxMFwiO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGlwPVwiaHR0cDovLzEyNy4wLjAuMTo1MDEwXCI7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3JlZnJlc2hBY2Nlc3NUb2tlbixkZWxldGVSZWZyZWNoVG9rZW5PbGRPbmV9IGZyb20gJy4uL3NlcnZpY2VzL3JlZnJlc2hBY2Nlc3NUb2tlbidcclxuaW1wb3J0IGlwIGZyb20gJy4uL2NvbnN0J1xyXG5jb25zdCBheGlvc0FwaUluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAvL2Jhc2VVUkw6ICdodHRwOi8vNDYuMTAxLjE2OS4xNDI6NTAxMC8nLFxyXG4gYmFzZVVSTDogaXAsXHJcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbn0pXHJcbmF4aW9zQXBpSW5zdGFuY2UuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxyXG4vL2F4aW9zQXBpSW5zdGFuY2UuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMTAvJyAvLyBzZXQgZGVmYXVsdCB1cmxcclxuYXhpb3NBcGlJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgYXN5bmMgY29uZmlnID0+IHtcclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICB9LFxyXG4gIGVycm9yID0+IHtcclxuXHJcbiAgICBQcm9taXNlLnJlamVjdChlcnJvcilcclxufSk7XHJcbmF4aW9zQXBpSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzcG9uc2VcclxufSwgYXN5bmMgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gZXJyb3IuY29uZmlnO1xyXG4gIGlmKGVycm9yLm1lc3NhZ2U9PVwiTmV0d29yayBFcnJvclwiKXtcclxuICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JlZl90b2tlbicpO1xyXG4gICAvLyBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL2xvZ291dFwiKSAvLyBjaGFuZ2UgdG9rZW4gaW4gY29va2llcyB0byB0aGUgYmV3IG9uZVxyXG5cclxuICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXHJcbiAgICAvL2xvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT00MDEpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JlZl90b2tlbicpO1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdChcImFwaS9sb2dvdXRcIikgLy8gY2hhbmdlIHRva2VuIGluIGNvb2tpZXMgdG8gdGhlIGJldyBvbmVcclxuICAgIHdpbmRvdy5yZWxvYWQoKVxyXG5cclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwNCl7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzICYmICFvcmlnaW5hbFJlcXVlc3QuX3JldHJ5KSB7XHJcbiAgICAgIG9yaWdpbmFsUmVxdWVzdC5fcmV0cnkgPSB0cnVlO1xyXG4gICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSBhd2FpdCByZWZyZXNoQWNjZXNzVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZfdG9rZW5cIikpOyBcclxuICAgICAgZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmX3Rva2VuXCIpKVxyXG4gICAgICAvLyBzZW5kIHRoZSByZWYgdG9rZW4gYW5kIGdldCBuZXcgdG9rZW5cclxuICAgICAgb3JpZ2luYWxSZXF1ZXN0LmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIGFjY2Vzc190b2tlbi5kYXRhLnRva2VuO1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3NldFRva2VuXCIse3Rva2VuOmFjY2Vzc190b2tlbi5kYXRhLnRva2VufSkgLy8gY2hhbmdlIHRva2VuIGluIGNvb2tpZXMgdG8gdGhlIGJldyBvbmVcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZfdG9rZW5cIixhY2Nlc3NfdG9rZW4uZGF0YS5yZWZfdG9rZW4pIC8vIHNhdmUgdGhlIG5ldyByZWZfdG9rZW5cclxuICAgICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2Uob3JpZ2luYWxSZXF1ZXN0KTsgLy8gcmV0dXJuIG5ldyAgcmVxdWVzdCB3aXRoIHRoZSBuZXcgdG9rZW5cclxuICB9XHJcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxufSk7XHJcblxyXG5leHBvcnQgIGRlZmF1bHQgYXhpb3NBcGlJbnN0YW5jZTsiXSwic291cmNlUm9vdCI6IiJ9