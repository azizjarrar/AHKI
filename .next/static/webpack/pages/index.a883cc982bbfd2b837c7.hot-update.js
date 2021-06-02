webpackHotUpdate_N_E("pages/index",{

/***/ "./components/homeUsersStorys/homeUsersStorys.js":
/*!*******************************************************!*\
  !*** ./components/homeUsersStorys/homeUsersStorys.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _homeUsersStorys_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeUsersStorys.module.scss */ "./components/homeUsersStorys/homeUsersStorys.module.scss");
/* harmony import */ var _homeUsersStorys_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_homeUsersStorys_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _postUsersStorys_postUsersStorys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../postUsersStorys/postUsersStorys */ "./components/postUsersStorys/postUsersStorys.js");
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/post */ "./services/post.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");
/* harmony import */ var _publication_publication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../publication/publication */ "./components/publication/publication.js");




var _jsxFileName = "F:\\AHKI\\components\\homeUsersStorys\\homeUsersStorys.js",
    _this = undefined,
    _s = $RefreshSig$();








var HomeUsersStorys = function HomeUsersStorys() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useContext, 2),
      user = _React$useContext2[0],
      setUser = _React$useContext2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      posts = _React$useState2[0],
      setPosts = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (user.token != undefined) {
      Object(_services_post__WEBPACK_IMPORTED_MODULE_6__["getFriendsPosts"])({}, user.token).then(function (result) {
        setPosts(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, [user.token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _homeUsersStorys_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.usersTopics,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postUsersStorys_postUsersStorys__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeUsersStorys_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeUsersStorys_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.publicationContainer,
        children: posts.map(function (e) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_publication_publication__WEBPACK_IMPORTED_MODULE_8__["default"], {
            userName: e.OwnerOfPost.userName,
            id: e._id,
            date: e.date,
            ownerOfPostImage: e.OwnerOfPost.currentImageUrl,
            text: e.postText,
            video: e.postVideo != undefined ? e.postVideo : undefined,
            image: e.postImage != undefined ? e.postImage : undefined
          }, e._id, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 31
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(HomeUsersStorys, "T+y1KMIco0HBGH9MRYyFv6Zk9Sc=");

_c = HomeUsersStorys;
/* harmony default export */ __webpack_exports__["default"] = (HomeUsersStorys);

var _c;

$RefreshReg$(_c, "HomeUsersStorys");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVXNlcnNTdG9yeXMvaG9tZVVzZXJzU3RvcnlzLmpzIl0sIm5hbWVzIjpbIkhvbWVVc2Vyc1N0b3J5cyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsInVuZGVmaW5lZCIsImdldEZyaWVuZHNQb3N0cyIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiU3R5bGVzIiwidXNlcnNUb3BpY3MiLCJwdWJsaWNhdGlvbkNvbnRhaW5lciIsIm1hcCIsImUiLCJPd25lck9mUG9zdCIsInVzZXJOYW1lIiwiX2lkIiwiZGF0ZSIsImN1cnJlbnRJbWFnZVVybCIsInBvc3RUZXh0IiwicG9zdFZpZGVvIiwicG9zdEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLDBCQUNMQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyw0REFBakIsQ0FESztBQUFBO0FBQUEsTUFDbkJDLElBRG1CO0FBQUEsTUFDZEMsT0FEYzs7QUFBQSx3QkFFSEosNENBQUssQ0FBQ0ssUUFBTixDQUFlLEVBQWYsQ0FGRztBQUFBO0FBQUEsTUFFbkJDLEtBRm1CO0FBQUEsTUFFYkMsUUFGYTs7QUFJMUJQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsWUFBSTtBQUNoQixRQUFHTCxJQUFJLENBQUNNLEtBQUwsSUFBWUMsU0FBZixFQUF5QjtBQUNyQkMsNEVBQWUsQ0FBQyxFQUFELEVBQUlSLElBQUksQ0FBQ00sS0FBVCxDQUFmLENBQStCRyxJQUEvQixDQUFvQyxVQUFBQyxNQUFNLEVBQUU7QUFDeENOLGdCQUFRLENBQUMsa0lBQUlNLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFqQixFQUFSO0FBRUgsT0FIRCxXQUdTLFVBQUFDLEtBQUssRUFBRTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILE9BTEQ7QUFNSDtBQUVKLEdBVkQsRUFVRSxDQUFDWixJQUFJLENBQUNNLEtBQU4sQ0FWRjtBQVdBLHNCQUNJO0FBQUssYUFBUyxFQUFFUyxtRUFBTSxDQUFDQyxXQUF2QjtBQUFBLDRCQUNJLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFFRCxtRUFBTSxDQUFDWixLQUF2QjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRVksbUVBQU0sQ0FBQ0Usb0JBQXZCO0FBQUEsa0JBQ0NkLEtBQUssQ0FBQ2UsR0FBTixDQUFVLFVBQUFDLENBQUM7QUFBQSw4QkFBRSxxRUFBQyxnRUFBRDtBQUFhLG9CQUFRLEVBQUVBLENBQUMsQ0FBQ0MsV0FBRixDQUFjQyxRQUFyQztBQUErQyxjQUFFLEVBQUVGLENBQUMsQ0FBQ0csR0FBckQ7QUFBMkQsZ0JBQUksRUFBRUgsQ0FBQyxDQUFDSSxJQUFuRTtBQUF5RSw0QkFBZ0IsRUFBRUosQ0FBQyxDQUFDQyxXQUFGLENBQWNJLGVBQXpHO0FBQXNJLGdCQUFJLEVBQUVMLENBQUMsQ0FBQ00sUUFBOUk7QUFBd0osaUJBQUssRUFBRU4sQ0FBQyxDQUFDTyxTQUFGLElBQWFuQixTQUFiLEdBQXVCWSxDQUFDLENBQUNPLFNBQXpCLEdBQW1DbkIsU0FBbE07QUFBNk0saUJBQUssRUFBRVksQ0FBQyxDQUFDUSxTQUFGLElBQWFwQixTQUFiLEdBQXVCWSxDQUFDLENBQUNRLFNBQXpCLEdBQW1DcEI7QUFBdlAsYUFBK0hZLENBQUMsQ0FBQ0csR0FBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRjtBQUFBLFNBQVg7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0F6QkQ7O0dBQU0xQixlOztLQUFBQSxlO0FBMkJTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hODgzY2M5ODJiYmZkMmI4MzdjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaG9tZVVzZXJzU3RvcnlzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUG9zdFVzZXJzU3RvcnlzIGZyb20gJy4uL3Bvc3RVc2Vyc1N0b3J5cy9wb3N0VXNlcnNTdG9yeXMnXHJcbmltcG9ydCB7Z2V0RnJpZW5kc1Bvc3RzfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3N0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IFB1YmxpY2F0aW9uIGZyb20gJy4uL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uJ1xyXG5jb25zdCBIb21lVXNlcnNTdG9yeXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3Bvc3RzLHNldFBvc3RzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLnRva2VuIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRGcmllbmRzUG9zdHMoe30sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbdXNlci50b2tlbl0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudXNlcnNUb3BpY3N9PlxyXG4gICAgICAgICAgICA8UG9zdFVzZXJzU3RvcnlzPjwvUG9zdFVzZXJzU3RvcnlzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBvc3RzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucHVibGljYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3Bvc3RzLm1hcChlPT48UHVibGljYXRpb24gdXNlck5hbWU9e2UuT3duZXJPZlBvc3QudXNlck5hbWV9IGlkPXtlLl9pZH0gIGRhdGU9e2UuZGF0ZX0gb3duZXJPZlBvc3RJbWFnZT17ZS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmx9IGtleT17ZS5faWR9IHRleHQ9e2UucG9zdFRleHR9IHZpZGVvPXtlLnBvc3RWaWRlbyE9dW5kZWZpbmVkP2UucG9zdFZpZGVvOnVuZGVmaW5lZH0gaW1hZ2U9e2UucG9zdEltYWdlIT11bmRlZmluZWQ/ZS5wb3N0SW1hZ2U6dW5kZWZpbmVkfT48L1B1YmxpY2F0aW9uPil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVVc2Vyc1N0b3J5c1xyXG4iXSwic291cmNlUm9vdCI6IiJ9