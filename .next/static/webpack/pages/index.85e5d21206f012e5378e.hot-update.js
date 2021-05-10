webpackHotUpdate_N_E("pages/index",{

/***/ "./components/verifyAccount/verifyAccount.js":
/*!***************************************************!*\
  !*** ./components/verifyAccount/verifyAccount.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verifyAccount.module.scss */ "./components/verifyAccount/verifyAccount.module.scss");
/* harmony import */ var _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user */ "./services/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/apiIsLoadingContext */ "./context/apiIsLoadingContext.js");



var _jsxFileName = "F:\\AHKI\\components\\verifyAccount\\verifyAccount.js",
    _this = undefined,
    _s = $RefreshSig$();








var verifyAccount = function verifyAccount(props) {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      _React$useContext2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useContext, 2),
      language = _React$useContext2[0],
      setLanguage = _React$useContext2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      code = _React$useState2[0],
      setCode = _React$useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext4 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useContext3, 2),
      isLoading = _React$useContext4[0],
      setIsLoading = _React$useContext4[1];

  var reSendCode = function reSendCode() {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_5__["reSendVerificationCode"])(props.userId, code.verificationCode).then(function (result) {});
  };

  var verifyUserAccount = function verifyUserAccount() {
    setIsLoading(true);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_5__["activeAccount"])(props.userId, code.verificationCode).then(function (result) {
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
        }).then(function () {
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

  var codeHandler = function codeHandler(e) {
    setCode({
      verificationCode: e.target.value
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerVerification,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.VerificationHeader,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Smoufy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 63
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.discrption,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "verification code is sent to your email ou telefone type it here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 55
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.form,
      onSubmit: function onSubmit(e) {
        e.preventDefault();
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "userName",
          type: "text",
          placeholder: language.verificationcode,
          className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
          onChange: function onChange(e) {
            return codeHandler(e);
          },
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 59
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Resendcode,
        onClick: function onClick() {
          return reSendCode();
        },
        children: "Resend code"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return verifyUserAccount();
        },
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btn,
        children: language.send
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};

_s(verifyAccount, "7Qrb92P2KrbFwzw3j2narfPY0EU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (verifyAccount);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92ZXJpZnlBY2NvdW50L3ZlcmlmeUFjY291bnQuanMiXSwibmFtZXMiOlsidmVyaWZ5QWNjb3VudCIsInByb3BzIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInVzZVN0YXRlIiwiY29kZSIsInNldENvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBcGlJc0xvYWRpbmdDb250ZXh0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicmVTZW5kQ29kZSIsInJlU2VuZFZlcmlmaWNhdGlvbkNvZGUiLCJ1c2VySWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwidGhlbiIsInJlc3VsdCIsInZlcmlmeVVzZXJBY2NvdW50IiwiYWN0aXZlQWNjb3VudCIsImRhdGEiLCJzdGF0ZSIsInNldEVycm9yTWVzc2FnZVByb3BzIiwidGV4dCIsIm1lc3NhZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlZl90b2tlbiIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicmVmcmVjaCIsImNvZGVIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiU3R5bGUiLCJDb250YWluZXJWZXJpZmljYXRpb24iLCJWZXJpZmljYXRpb25IZWFkZXIiLCJkaXNjcnB0aW9uIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJ2ZXJpZmljYXRpb25jb2RlIiwiaW5wdXQiLCJSZXNlbmRjb2RlIiwiYnRuIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FB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LDhCQUNBO0FBQUssaUJBQVMsRUFBRUwsaUVBQUssQ0FBQ00sY0FBdEI7QUFBQSwrQkFBc0M7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixjQUFJLEVBQUMsTUFBNUI7QUFBbUMscUJBQVcsRUFBRS9DLFFBQVEsQ0FBQ2dELGdCQUF6RDtBQUEyRSxtQkFBUyxFQUFFUCxpRUFBSyxDQUFDUSxLQUE1RjtBQUFtRyxrQkFBUSxFQUFFLGtCQUFDWCxDQUFEO0FBQUEsbUJBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUFBLFdBQTdHO0FBQW9JLGtCQUFRO0FBQTVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBSSxpQkFBUyxFQUFFRyxpRUFBSyxDQUFDUyxVQUFyQjtBQUFpQyxlQUFPLEVBQUU7QUFBQSxpQkFBSXhDLFVBQVUsRUFBZDtBQUFBLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkEsZUFHQTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFJTSxpQkFBaUIsRUFBckI7QUFBQSxTQUFqQjtBQUEyQyxpQkFBUyxFQUFFeUIsaUVBQUssQ0FBQ1UsR0FBNUQ7QUFBQSxrQkFBa0VuRCxRQUFRLENBQUNvRDtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQXRDRDs7R0FBTXpELGE7VUFHYVcscUQ7OztBQXFDSlgsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODVlNWQyMTIwNmYwMTJlNTM3OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vdmVyaWZ5QWNjb3VudC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2xhbmd1YWdlQ29udGV4dCdcclxuaW1wb3J0IHthY3RpdmVBY2NvdW50LHJlU2VuZFZlcmlmaWNhdGlvbkNvZGV9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXBpSXNMb2FkaW5nQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2FwaUlzTG9hZGluZ0NvbnRleHQnXHJcbmNvbnN0IHZlcmlmeUFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpXHJcbiAgICBjb25zdCBbY29kZSxzZXRDb2RlXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VDb250ZXh0KEFwaUlzTG9hZGluZ0NvbnRleHQpXHJcblxyXG4gICAgY29uc3QgcmVTZW5kQ29kZT0oKT0+e1xyXG4gICAgICAgIHJlU2VuZFZlcmlmaWNhdGlvbkNvZGUocHJvcHMudXNlcklkLGNvZGUudmVyaWZpY2F0aW9uQ29kZSkudGhlbihyZXN1bHQ9PntcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmVyaWZ5VXNlckFjY291bnQ9KCk9PntcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICBhY3RpdmVBY2NvdW50KHByb3BzLnVzZXJJZCxjb2RlLnZlcmlmaWNhdGlvbkNvZGUpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXRlID09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldEVycm9yTWVzc2FnZVByb3BzKHsgc3RhdGU6IHRydWUsIHRleHQ6IHJlc3VsdC5kYXRhLm1lc3NhZ2UgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBmZXRjaChcIi9hcGkvc2V0VG9rZW5cIix7bWV0aG9kOlwicG9zdFwiLGhlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LGJvZHk6SlNPTi5zdHJpbmdpZnkoe3Rva2VuOnJlc3VsdC5kYXRhLnRva2VufSl9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZfdG9rZW5cIixyZXN1bHQuZGF0YS5yZWZfdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtwYXRobmFtZTpcIi9cIixxdWVyeTogeyByZWZyZWNoOiB0cnVlIH19KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2RlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBzZXRDb2RlKHt2ZXJpZmljYXRpb25Db2RlOmUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLkNvbnRhaW5lclZlcmlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlZlcmlmaWNhdGlvbkhlYWRlcn0+PGgxPlNtb3VmeTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmRpc2NycHRpb259PjxwPnZlcmlmaWNhdGlvbiBjb2RlIGlzIHNlbnQgdG8geW91ciBlbWFpbCBvdSB0ZWxlZm9uZSB0eXBlIGl0IGhlcmU8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtTdHlsZS5mb3JtfSBvblN1Ym1pdD17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0IG5hbWU9XCJ1c2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e2xhbmd1YWdlLnZlcmlmaWNhdGlvbmNvZGV9IGNsYXNzTmFtZT17U3R5bGUuaW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gY29kZUhhbmRsZXIoZSl9IHJlcXVpcmVkIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17U3R5bGUuUmVzZW5kY29kZX0gb25DbGljaz17KCk9PnJlU2VuZENvZGUoKX0+UmVzZW5kIGNvZGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnZlcmlmeVVzZXJBY2NvdW50KCl9ICBjbGFzc05hbWU9e1N0eWxlLmJ0bn0+e2xhbmd1YWdlLnNlbmR9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlBY2NvdW50XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=