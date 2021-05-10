webpackHotUpdate_N_E("pages/signin",{

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




var axiosApiInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: 'http://127.0.0.1:5010/',
  //baseURL: 'http://46.101.169.142:5010/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW50ZXJjZXB0b3IvaW50ZXJjZXB0b3IuanMiXSwibmFtZXMiOlsiYXhpb3NBcGlJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImRlZmF1bHRzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9yaWdpbmFsUmVxdWVzdCIsIm1lc3NhZ2UiLCJhbGVydCIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwb3N0Iiwid2luZG93IiwicmVsb2FkIiwiX3JldHJ5IiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwiZ2V0SXRlbSIsImFjY2Vzc190b2tlbiIsImRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInRva2VuIiwic2V0SXRlbSIsInJlZl90b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3BDQyxTQUFPLEVBQUUsd0JBRDJCO0FBRXBDO0FBQ0FDLGlCQUFlLEVBQUU7QUFIbUIsQ0FBYixDQUF6QjtBQUtBSixnQkFBZ0IsQ0FBQ0ssUUFBakIsQ0FBMEJELGVBQTFCLEdBQTRDLElBQTVDLEMsQ0FDQTs7QUFDQUosZ0JBQWdCLENBQUNNLFlBQWpCLENBQThCQyxPQUE5QixDQUFzQ0MsR0FBdEM7QUFBQSxvT0FDRSxpQkFBTUMsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ1dBLE1BRFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLFVBQUFDLEtBQUssRUFBSTtBQUVQQyxTQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZjtBQUNILENBUEQ7QUFRQVYsZ0JBQWdCLENBQUNNLFlBQWpCLENBQThCTyxRQUE5QixDQUF1Q0wsR0FBdkMsQ0FBMkMsVUFBQ0ssUUFBRCxFQUFjO0FBQ3ZELFNBQU9BLFFBQVA7QUFDRCxDQUZEO0FBQUEscU9BRUcsa0JBQWdCSCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDREksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ01NLDJCQUZMLEdBRXVCTixLQUFLLENBQUNELE1BRjdCOztBQUFBLGtCQUdFQyxLQUFLLENBQUNPLE9BQU4sSUFBZSxlQUhqQjtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBRUNDLGlCQUFLLENBQUNSLEtBQUssQ0FBQ08sT0FBUCxDQUFMLENBUEQsQ0FRQzs7QUFSRDs7QUFBQTtBQUFBLGtCQVdFUCxLQUFLLENBQUNHLFFBQU4sQ0FBZU0sTUFBZixLQUF5QixHQVgzQjtBQUFBO0FBQUE7QUFBQTs7QUFZQ0Msd0JBQVksQ0FBQ0MsVUFBYixDQUF3QixXQUF4QjtBQVpEO0FBQUEsbUJBYU9wQiw0Q0FBSyxDQUFDcUIsSUFBTixDQUFXLFlBQVgsQ0FiUDs7QUFBQTtBQWFnQztBQUMvQkMsa0JBQU0sQ0FBQ0MsTUFBUDtBQWREOztBQUFBO0FBQUEsa0JBa0JFZCxLQUFLLENBQUNHLFFBQU4sQ0FBZU0sTUFBZixLQUEwQixHQWxCNUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxrQkFxQkdULEtBQUssQ0FBQ0csUUFBTixDQUFlTSxNQUFmLEtBQTBCLEdBQTFCLElBQWlDLENBQUNILGVBQWUsQ0FBQ1MsTUFyQnJEO0FBQUE7QUFBQTtBQUFBOztBQXNCR1QsMkJBQWUsQ0FBQ1MsTUFBaEIsR0FBeUIsSUFBekI7QUF0Qkg7QUFBQSxtQkF1QjhCQyx1RkFBa0IsQ0FBQ04sWUFBWSxDQUFDTyxPQUFiLENBQXFCLFdBQXJCLENBQUQsQ0F2QmhEOztBQUFBO0FBdUJTQyx3QkF2QlQ7QUF3QkdDLHlHQUF3QixDQUFDVCxZQUFZLENBQUNPLE9BQWIsQ0FBcUIsV0FBckIsQ0FBRCxDQUF4QixDQXhCSCxDQXlCRzs7QUFDQVgsMkJBQWUsQ0FBQ2MsT0FBaEIsQ0FBd0JDLGFBQXhCLEdBQXdDLFlBQVlILFlBQVksQ0FBQ0ksSUFBYixDQUFrQkMsS0FBdEU7QUExQkg7QUFBQSxtQkEyQlNoQyw0Q0FBSyxDQUFDcUIsSUFBTixDQUFXLGNBQVgsRUFBMEI7QUFBQ1csbUJBQUssRUFBQ0wsWUFBWSxDQUFDSSxJQUFiLENBQWtCQztBQUF6QixhQUExQixDQTNCVDs7QUFBQTtBQTJCb0U7QUFDakViLHdCQUFZLENBQUNjLE9BQWIsQ0FBcUIsV0FBckIsRUFBaUNOLFlBQVksQ0FBQ0ksSUFBYixDQUFrQkcsU0FBbkQsRUE1QkgsQ0E0QmlFOztBQTVCakUsOENBNkJVbkMsZ0JBQWdCLENBQUNnQixlQUFELENBN0IxQjs7QUFBQTtBQUFBLDhDQStCTUwsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0EvQk47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9DZ0JWLCtFQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uNTk1ZTZiM2U4NGNiOGU2MWY5NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtyZWZyZXNoQWNjZXNzVG9rZW4sZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWZyZXNoQWNjZXNzVG9rZW4nXHJcbmNvbnN0IGF4aW9zQXBpSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjUwMTAvJyxcclxuICAvL2Jhc2VVUkw6ICdodHRwOi8vNDYuMTAxLjE2OS4xNDI6NTAxMC8nLFxyXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG59KVxyXG5heGlvc0FwaUluc3RhbmNlLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWVcclxuLy9heGlvc0FwaUluc3RhbmNlLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo1MDEwLycgLy8gc2V0IGRlZmF1bHQgdXJsXHJcbmF4aW9zQXBpSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gIGFzeW5jIGNvbmZpZyA9PiB7XHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBlcnJvciA9PiB7XHJcblxyXG4gICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbn0pO1xyXG5heGlvc0FwaUluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlXHJcbn0sIGFzeW5jIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGVycm9yLmNvbmZpZztcclxuICBpZihlcnJvci5tZXNzYWdlPT1cIk5ldHdvcmsgRXJyb3JcIil7XHJcbiAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZfdG9rZW4nKTtcclxuICAgLy8gYXdhaXQgYXhpb3MucG9zdChcImFwaS9sb2dvdXRcIikgLy8gY2hhbmdlIHRva2VuIGluIGNvb2tpZXMgdG8gdGhlIGJldyBvbmVcclxuXHJcbiAgICBhbGVydChlcnJvci5tZXNzYWdlKVxyXG4gICAgLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09NDAxKXtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZfdG9rZW4nKTtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvbG9nb3V0XCIpIC8vIGNoYW5nZSB0b2tlbiBpbiBjb29raWVzIHRvIHRoZSBiZXcgb25lXHJcbiAgICB3aW5kb3cucmVsb2FkKClcclxuXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpe1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyAmJiAhb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSkge1xyXG4gICAgICBvcmlnaW5hbFJlcXVlc3QuX3JldHJ5ID0gdHJ1ZTtcclxuICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gYXdhaXQgcmVmcmVzaEFjY2Vzc1Rva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmX3Rva2VuXCIpKTsgXHJcbiAgICAgIGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZl90b2tlblwiKSlcclxuICAgICAgLy8gc2VuZCB0aGUgcmVmIHRva2VuIGFuZCBnZXQgbmV3IHRva2VuXHJcbiAgICAgIG9yaWdpbmFsUmVxdWVzdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyBhY2Nlc3NfdG9rZW4uZGF0YS50b2tlbjtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcImFwaS9zZXRUb2tlblwiLHt0b2tlbjphY2Nlc3NfdG9rZW4uZGF0YS50b2tlbn0pIC8vIGNoYW5nZSB0b2tlbiBpbiBjb29raWVzIHRvIHRoZSBiZXcgb25lXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmX3Rva2VuXCIsYWNjZXNzX3Rva2VuLmRhdGEucmVmX3Rva2VuKSAvLyBzYXZlIHRoZSBuZXcgcmVmX3Rva2VuXHJcbiAgICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlKG9yaWdpbmFsUmVxdWVzdCk7IC8vIHJldHVybiBuZXcgIHJlcXVlc3Qgd2l0aCB0aGUgbmV3IHRva2VuXHJcbiAgfVxyXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5cclxuZXhwb3J0ICBkZWZhdWx0IGF4aW9zQXBpSW5zdGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==