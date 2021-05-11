webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/initLanguage/initLanguage */ "./components/initLanguage/initLanguage.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user */ "./services/user.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/userContext */ "./context/userContext.js");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/socketContext */ "./context/socketContext.js");
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/apiIsLoadingContext */ "./context/apiIsLoadingContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "F:\\AHKI\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    image: "",
    tel: "",
    biography: "",
    userName: "",
    firstname: "",
    lastname: "",
    age: "",
    following: 0,
    followers: 0
  }),
      _React$useState2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      user = _React$useState2[0],
      setUser = _React$useState2[1];

  var userProvider = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    return {
      user: user,
      setUser: setUser
    }, [user, setUser];
  });
  /********************************************************************/

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(_objectSpread({}, Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_5__["default"])("eng"))),
      _React$useState4 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      language = _React$useState4[0],
      setLanguage = _React$useState4[1];

  var languageProvider = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    return {
      language: language,
      setLanguage: setLanguage
    }, [language, setLanguage];
  });
  /********************************************************************/

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      isLoading = _React$useState6[0],
      setIsLoading = _React$useState6[1];

  var loadingProvider = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    return {
      isLoading: isLoading,
      setIsLoading: setIsLoading
    }, [isLoading, setIsLoading];
  });
  /********************************************************************/

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(undefined),
      _React$useState8 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      socket = _React$useState8[0],
      setSocket = _React$useState8[1];

  var socketProvider = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    return {
      socket: socket,
      setSocket: setSocket
    }, [socket, setSocket];
  });
  /*****************************************************************/

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState10 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      onlyOnce = _React$useState10[0],
      setonlyOnce = _React$useState10[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  var socketRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
  /*socket io*/

  /************************************/

  if (router.query.refrech == "true" && onlyOnce == false) {
    setonlyOnce(true);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_6__["GetUserData"])(pageProps.token).then(function (data) {
      setUser(function (e) {
        return _objectSpread(_objectSpread(_objectSpread({}, e), data.data.data[0]), {}, {
          token: pageProps.token
        });
      });
    })["catch"](function (e) {});
  }

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    /*****************init Token to userProvider******************/
    setUser(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        token: pageProps.token
      });
    });
    /*get current lang */

    setLanguage(Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_5__["default"])(localStorage.getItem('language') || "eng"));
    /***********************************************************/

    /********************fetch user data online if there is token************************/

    /***********************************************************/

    if (pageProps.token) {
      Object(_services_user__WEBPACK_IMPORTED_MODULE_6__["GetUserData"])(pageProps.token).then(function (data) {
        socketRef.current = socket_io_client__WEBPACK_IMPORTED_MODULE_13___default()("http://127.0.0.1:5010");
        socketRef.current.on("getSocketid", function (dataFromSocket) {
          socketRef.current.emit("saveuserOnline", {
            userid: data.data.data[0]._id,
            socketid: dataFromSocket
          });
          setSocket(socketRef.current);
        });
        setUser(function (e) {
          return _objectSpread(_objectSpread({}, e), data.data.data[0]);
        });
      })["catch"](function (e) {});
    }
  }, [router.query.refrech]);
  /******************************************************************************************
   *******************************************************************************************
   ******************************************************************************************/

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "appWrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_languageContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
        value: languageProvider,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_userContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
          value: userProvider,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
            value: loadingProvider,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_socketContext__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
              value: socketProvider,
              children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "loading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 52
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 27
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(MyApp, "2ggWz+dS6ZeMF0pMmOUJAZWH5gY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"]];
});

_c = MyApp;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZSIsInRlbCIsImJpb2dyYXBoeSIsInVzZXJOYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJhZ2UiLCJmb2xsb3dpbmciLCJmb2xsb3dlcnMiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJQcm92aWRlciIsInVzZU1lbW8iLCJpbml0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwibGFuZ3VhZ2VQcm92aWRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvYWRpbmdQcm92aWRlciIsInVuZGVmaW5lZCIsInNvY2tldCIsInNldFNvY2tldCIsInNvY2tldFByb3ZpZGVyIiwib25seU9uY2UiLCJzZXRvbmx5T25jZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNvY2tldFJlZiIsInVzZVJlZiIsInF1ZXJ5IiwicmVmcmVjaCIsIkdldFVzZXJEYXRhIiwidG9rZW4iLCJ0aGVuIiwiZGF0YSIsImUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3VycmVudCIsImlvIiwib24iLCJkYXRhRnJvbVNvY2tldCIsImVtaXQiLCJ1c2VyaWQiLCJfaWQiLCJzb2NrZXRpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsd0JBQ2ZDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUFDQyxTQUFLLEVBQUMsRUFBUDtBQUFVQyxPQUFH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Q0FBaUIsUUFBakI7QUFBMEIsYUFBSyxFQUFFZixnQkFBakM7QUFBQSwrQkFDRSxxRUFBQyw0REFBRCxDQUFhLFFBQWI7QUFBc0IsZUFBSyxFQUFFTCxZQUE3QjtBQUFBLGlDQUNFLHFFQUFDLHFFQUFELENBQXFCLFFBQXJCO0FBQThCLGlCQUFLLEVBQUVRLGVBQXJDO0FBQUEsbUNBQ0UscUVBQUMsK0RBQUQsQ0FBZSxRQUFmO0FBQXdCLG1CQUFLLEVBQUVJLGNBQS9CO0FBQUEseUJBQ0NOLFNBQVMsaUJBQUU7QUFBSyx5QkFBUyxFQUFDLFNBQWY7QUFBQSx1Q0FBeUIscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURaLGVBRUEscUVBQUMsU0FBRCxvQkFBZXBCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFnQkQ7O0dBM0VRRixLO1VBY1FnQyxzRDs7O0tBZFJoQyxLOztBQTZFTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44MjI1NTkxZWRkZjUwMTEwMGVhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbml0TGFuZ3VhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9pbml0TGFuZ3VhZ2UvaW5pdExhbmd1YWdlJ1xyXG5pbXBvcnQgeyBHZXRVc2VyRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0J1xyXG5pbXBvcnQgU29ja2V0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCBBcGlJc0xvYWRpbmdDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXBpSXNMb2FkaW5nQ29udGV4dCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoe2ltYWdlOlwiXCIsdGVsOlwiXCIsYmlvZ3JhcGh5OlwiXCIsdXNlck5hbWU6XCJcIixmaXJzdG5hbWU6XCJcIixsYXN0bmFtZTpcIlwiLGFnZTpcIlwiLGZvbGxvd2luZzowLGZvbGxvd2VyczowfSlcclxuICBjb25zdCB1c2VyUHJvdmlkZXIgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IHVzZXIsIHNldFVzZXIgfSwgW3VzZXIsIHNldFVzZXJdKSlcclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSBSZWFjdC51c2VTdGF0ZSh7IC4uLmluaXRMYW5ndWFnZShcImVuZ1wiKSB9KVxyXG4gIGNvbnN0IGxhbmd1YWdlUHJvdmlkZXIgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IGxhbmd1YWdlLCBzZXRMYW5ndWFnZSB9LCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSkpXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBsb2FkaW5nUHJvdmlkZXIgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIH0sIFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10pKVxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gIGNvbnN0IHNvY2tldFByb3ZpZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBzb2NrZXQsIHNldFNvY2tldH0sIFtzb2NrZXQsIHNldFNvY2tldF0pKVxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBbb25seU9uY2Usc2V0b25seU9uY2VdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qgc29ja2V0UmVmID0gUmVhY3QudXNlUmVmKClcclxuXHJcbi8qc29ja2V0IGlvKi9cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8gXHJcbiAgaWYocm91dGVyLnF1ZXJ5LnJlZnJlY2g9PVwidHJ1ZVwiICYmIG9ubHlPbmNlPT1mYWxzZSl7XHJcbiAgICBzZXRvbmx5T25jZSh0cnVlKVxyXG4gICAgR2V0VXNlckRhdGEocGFnZVByb3BzLnRva2VuKS50aGVuKGRhdGEgPT4geyBcclxuICAgICAgXHJcbiAgICAgIHNldFVzZXIoZSA9PiB7IHJldHVybiB7IC4uLmUsIC4uLmRhdGEuZGF0YS5kYXRhWzBdLHRva2VuOiBwYWdlUHJvcHMudG9rZW4gfSB9KVxyXG5cclxuICAgICB9KS5jYXRjaChlID0+IHsgfSlcclxuXHJcbiAgfVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLyoqKioqKioqKioqKioqKioqaW5pdCBUb2tlbiB0byB1c2VyUHJvdmlkZXIqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXRVc2VyKGUgPT4geyByZXR1cm4geyAuLi5lLCB0b2tlbjogcGFnZVByb3BzLnRva2VuIH0gfSlcclxuICAgIC8qZ2V0IGN1cnJlbnQgbGFuZyAqL1xyXG4gICAgc2V0TGFuZ3VhZ2UoaW5pdExhbmd1YWdlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpIHx8IFwiZW5nXCIpKVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKipmZXRjaCB1c2VyIGRhdGEgb25saW5lIGlmIHRoZXJlIGlzIHRva2VuKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgXHJcbiAgICBpZiAocGFnZVByb3BzLnRva2VuKSB7XHJcbiAgICAgIEdldFVzZXJEYXRhKHBhZ2VQcm9wcy50b2tlbikudGhlbihkYXRhID0+IHsgXHJcbiAgICAgICAgc29ja2V0UmVmLmN1cnJlbnQgPWlvKFwiaHR0cDovLzEyNy4wLjAuMTo1MDEwXCIpO1xyXG4gICAgICAgIHNvY2tldFJlZi5jdXJyZW50Lm9uKFwiZ2V0U29ja2V0aWRcIiwoZGF0YUZyb21Tb2NrZXQpPT57XHJcbiAgICAgICAgc29ja2V0UmVmLmN1cnJlbnQuZW1pdChcInNhdmV1c2VyT25saW5lXCIse3VzZXJpZDpkYXRhLmRhdGEuZGF0YVswXS5faWQsc29ja2V0aWQ6ZGF0YUZyb21Tb2NrZXR9KVxyXG4gICAgICAgIHNldFNvY2tldChzb2NrZXRSZWYuY3VycmVudClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFVzZXIoZSA9PiB7IFxyXG4gICAgICAgIHJldHVybiB7IC4uLmUsIC4uLmRhdGEuZGF0YS5kYXRhWzBdIH0gXHJcbiAgICAgIH0pIFxyXG4gICAgICB9KS5jYXRjaChlID0+IHsgfSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LnJlZnJlY2hdKVxyXG5cclxuICBcclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwV3JhcHBlcic+XHJcbiAgICAgICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bGFuZ3VhZ2VQcm92aWRlcn0+XHJcbiAgICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJQcm92aWRlcn0gPlxyXG4gICAgICAgICAgICA8QXBpSXNMb2FkaW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bG9hZGluZ1Byb3ZpZGVyfT5cclxuICAgICAgICAgICAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0UHJvdmlkZXJ9PlxyXG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcmJjxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxMaW5lYXJQcm9ncmVzcyAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgPC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0FwaUlzTG9hZGluZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICByZXR1cm4gYXdhaXQgcmVxLmNvb2tpZXMudG9rZW4gPyB7IHByb3BzOiB7IHRva2VuOiB0cnVlIH0gfSA6IHsgcmVkaXJlY3Q6IHsgZGVzdGluYXRpb246ICcvJywgcGVybWFuZW50OiBmYWxzZSwgfSB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==