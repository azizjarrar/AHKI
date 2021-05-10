webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/followAndUnfollow/followAndUnfollow.js":
/*!***********************************************************!*\
  !*** ./components/followAndUnfollow/followAndUnfollow.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./followAndUnfollow.module.scss */ "./components/followAndUnfollow/followAndUnfollow.module.scss");
/* harmony import */ var _followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_following__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/following */ "./services/following.js");
/* harmony import */ var _services_followers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/followers */ "./services/followers.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");
/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/socketContext */ "./context/socketContext.js");




var _jsxFileName = "F:\\AHKI\\components\\followAndUnfollow\\followAndUnfollow.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var followAndUnfollow = function followAndUnfollow(props) {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useContext, 2),
      user = _React$useContext2[0],
      setUser = _React$useContext2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      followOrNot = _React$useState2[0],
      setFollowOrNot = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      ifHeDeletedUser = _React$useState4[0],
      setIfHeDeletedUser = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState6 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      Loading = _React$useState6[0],
      setLoading = _React$useState6[1];

  var refDelte = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);

  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_context_socketContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      _React$useContext4 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useContext3, 2),
      socket = _React$useContext4[0],
      setSocket = _React$useContext4[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    setLoading(true);

    if (user.token != undefined && props.theOtherPersonId != undefined) {
      Object(_services_following__WEBPACK_IMPORTED_MODULE_5__["checkIffollowApi"])(props.theOtherPersonId, user.token).then(function (result) {
        setFollowOrNot(result.data);
      })["catch"](function (error) {});
    }
  }, [user.token]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    setLoading(false);
  }, [followOrNot]);

  var followUser = function followUser(theOtherPersonId) {
    console.log("followit");
    Object(_services_following__WEBPACK_IMPORTED_MODULE_5__["followUserApi"])(theOtherPersonId, user.token).then(function (result) {
      //setFollowOrNot(e=>!e)
      setFollowOrNot(function (e) {
        return _objectSpread(_objectSpread({}, e), {}, {
          "state": result.data.state
        });
      });
    })["catch"](function (error) {});
  };

  var removeFollowPendingfn = function removeFollowPendingfn(theOtherPersonId) {
    setLoading(true);
    Object(_services_following__WEBPACK_IMPORTED_MODULE_5__["removeFollowPending"])(theOtherPersonId, user.token).then(function (result) {
      setFollowOrNot(function (e) {
        return _objectSpread(_objectSpread({}, e), {}, {
          "state": result.data.state
        });
      });
    })["catch"](function (error) {});
  };

  var unfollow = function unfollow(followingid) {
    Object(_services_following__WEBPACK_IMPORTED_MODULE_5__["unfollowUserApi"])(followingid, user.token).then(function (result) {
      setFollowOrNot(function (e) {
        return _objectSpread(_objectSpread({}, e), {}, {
          "state": result.data.state
        });
      });
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var deleteFollow = function deleteFollow(theOtherPersonId) {
    Object(_services_followers__WEBPACK_IMPORTED_MODULE_6__["deleteFollowApi"])(theOtherPersonId, user.token).then(function (result) {
      refDelte.current.innerHTML = "done";
    })["catch"](function (error) {
      console.log(error);
    });
  };

  if (followOrNot == undefined) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.loadingAnimation,
      children: Loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ldsring,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 50
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 61
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 72
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 83
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }, _this);
  } else if (props.YouAreInYourProfile != undefined && props.YouAreInYourProfile == true && ifHeDeletedUser == false) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return deleteFollow({
          theOtherPersonId: props.theOtherPersonId
        });
      },
      className: "".concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.followAndUnfollow, " ").concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.unfollow),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        ref: refDelte,
        children: "delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 16
    }, _this);
  } else if (followOrNot.state == 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return removeFollowPendingfn(props.theOtherPersonId);
      },
      className: "".concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.followAndUnfollow, " ").concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.unfollow),
      children: [console.log("aaa"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "pending"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }, _this);
  } else if (followOrNot.state == 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return unfollow(props.theOtherPersonId);
      },
      className: "".concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.followAndUnfollow, " ").concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.unfollow),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "unfollow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, _this);
  } else {
    {
      console.log("unhaaa");
    }
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return followUser(props.theOtherPersonId);
      },
      className: "".concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.followAndUnfollow, " ").concat(_followAndUnfollow_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.follow),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Follow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, _this), console.log("unhaaa")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, _this);
    {
      console.log("unhaaa");
    }
  }
};

_s(followAndUnfollow, "NNW1zYdl4EyMtviJqv+k2h/yuMo=");

/* harmony default export */ __webpack_exports__["default"] = (followAndUnfollow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb2xsb3dBbmRVbmZvbGxvdy9mb2xsb3dBbmRVbmZvbGxvdy5qcyJdLCJuYW1lcyI6WyJmb2xsb3dBbmRVbmZvbGxvdyIsInByb3BzIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiZm9sbG93T3JOb3QiLCJzZXRGb2xsb3dPck5vdCIsImlmSGVEZWxldGVkVXNlciIsInNldElmSGVEZWxldGVkVXNlciIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmRGVsdGUiLCJ1c2VSZWYiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0IiwidXNlRWZmZWN0IiwidG9rZW4iLCJ1bmRlZmluZWQiLCJ0aGVPdGhlclBlcnNvbklkIiwiY2hlY2tJZmZvbGxvd0FwaSIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwiZXJyb3IiLCJmb2xsb3dVc2VyIiwiY29uc29sZSIsImxvZyIsImZvbGxvd1VzZXJBcGkiLCJlIiwic3RhdGUiLCJyZW1vdmVGb2xsb3dQZW5kaW5nZm4iLCJyZW1vdmVGb2xsb3dQZW5kaW5nIiwidW5mb2xsb3ciLCJmb2xsb3dpbmdpZCIsInVuZm9sbG93VXNlckFwaSIsImRlbGV0ZUZvbGxvdyIsImRlbGV0ZUZvbGxvd0FwaSIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJTdHlsZSIsImxvYWRpbmdBbmltYXRpb24iLCJsZHNyaW5nIiwiWW91QXJlSW5Zb3VyUHJvZmlsZSIsImZvbGxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSwwQkFDVkMsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsNERBQWpCLENBRFU7QUFBQTtBQUFBLE1BQzFCQyxJQUQwQjtBQUFBLE1BQ3BCQyxPQURvQjs7QUFBQSx3QkFFRUosNENBQUssQ0FBQ0ssUUFBTixDQUFlLEtBQWYsQ0FGRjtBQUFBO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFZEMsY0FGYzs7QUFBQSx5QkFHVVAsNENBQUssQ0FBQ0ssUUFBTixDQUFlLEtBQWYsQ0FIVjtBQUFBO0FBQUEsTUFHMUJHLGVBSDBCO0FBQUEsTUFHVkMsa0JBSFU7O0FBQUEseUJBSU5ULDRDQUFLLENBQUNLLFFBQU4sQ0FBZSxLQUFmLENBSk07QUFBQTtBQUFBLE1BSTFCSyxPQUowQjtBQUFBLE1BSWxCQyxVQUprQjs7QUFLakMsTUFBTUMsUUFBUSxHQUFDWiw0Q0FBSyxDQUFDYSxNQUFOLENBQWEsSUFBYixDQUFmOztBQUxpQywyQkFNUmIsNENBQUssQ0FBQ0MsVUFBTixDQUFpQmEsOERBQWpCLENBTlE7QUFBQTtBQUFBLE1BTTFCQyxNQU4wQjtBQUFBLE1BTW5CQyxTQU5tQjs7QUFTakNoQiw4Q0FBSyxDQUFDaUIsU0FBTixDQUFnQixZQUFJO0FBQ2hCTixjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQUdSLElBQUksQ0FBQ2UsS0FBTCxJQUFZQyxTQUFaLElBQXlCcEIsS0FBSyxDQUFDcUIsZ0JBQU4sSUFBd0JELFNBQXBELEVBQThEO0FBQzFERSxrRkFBZ0IsQ0FBQ3RCLEtBQUssQ0FBQ3FCLGdCQUFQLEVBQXdCakIsSUFBSSxDQUFDZSxLQUE3QixDQUFoQixDQUFvREksSUFBcEQsQ0FBeUQsVUFBQUMsTUFBTSxFQUFFO0FBQzdEaEIsc0JBQWMsQ0FBQ2dCLE1BQU0sQ0FBQ0MsSUFBUixDQUFkO0FBQ0gsT0FGRCxXQUVTLFVBQUFDLEtBQUssRUFBRSxDQUFFLENBRmxCO0FBR0g7QUFDSixHQVBELEVBT0UsQ0FBQ3RCLElBQUksQ0FBQ2UsS0FBTixDQVBGO0FBUUFsQiw4Q0FBSyxDQUFDaUIsU0FBTixDQUFnQixZQUFJO0FBQ2hCTixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0FGRCxFQUVFLENBQUNMLFdBQUQsQ0FGRjs7QUFHQSxNQUFNb0IsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ04sZ0JBQUQsRUFBb0I7QUFDakNPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQUMsNkVBQWEsQ0FBQ1QsZ0JBQUQsRUFBa0JqQixJQUFJLENBQUNlLEtBQXZCLENBQWIsQ0FBMkNJLElBQTNDLENBQWdELFVBQUFDLE1BQU0sRUFBRTtBQUNwRDtBQUdBaEIsb0JBQWMsQ0FBQyxVQUFBdUIsQ0FBQyxFQUFFO0FBQ2QsK0NBQVdBLENBQVg7QUFBYSxtQkFBUVAsTUFBTSxDQUFDQyxJQUFQLENBQVlPO0FBQWpDO0FBQ0gsT0FGYSxDQUFkO0FBR0gsS0FQRCxXQU9TLFVBQUFOLEtBQUssRUFBRSxDQUFFLENBUGxCO0FBUUgsR0FWRDs7QUFZQSxNQUFNTyxxQkFBcUIsR0FBQyxTQUF0QkEscUJBQXNCLENBQUNaLGdCQUFELEVBQW9CO0FBQzVDVCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FzQixtRkFBbUIsQ0FBQ2IsZ0JBQUQsRUFBa0JqQixJQUFJLENBQUNlLEtBQXZCLENBQW5CLENBQWlESSxJQUFqRCxDQUFzRCxVQUFBQyxNQUFNLEVBQUU7QUFDMURoQixvQkFBYyxDQUFDLFVBQUF1QixDQUFDLEVBQUU7QUFDZCwrQ0FBV0EsQ0FBWDtBQUFhLG1CQUFRUCxNQUFNLENBQUNDLElBQVAsQ0FBWU87QUFBakM7QUFDSCxPQUZhLENBQWQ7QUFHSCxLQUpELFdBSVMsVUFBQU4sS0FBSyxFQUFFLENBQUUsQ0FKbEI7QUFLSCxHQVBEOztBQVFBLE1BQU1TLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNDLFdBQUQsRUFBZTtBQUMxQkMsK0VBQWUsQ0FBQ0QsV0FBRCxFQUFhaEMsSUFBSSxDQUFDZSxLQUFsQixDQUFmLENBQXdDSSxJQUF4QyxDQUE2QyxVQUFBQyxNQUFNLEVBQUU7QUFDakRoQixvQkFBYyxDQUFDLFVBQUF1QixDQUFDLEVBQUU7QUFDZCwrQ0FBV0EsQ0FBWDtBQUFhLG1CQUFRUCxNQUFNLENBQUNDLElBQVAsQ0FBWU87QUFBakM7QUFDSCxPQUZhLENBQWQ7QUFHSCxLQUpELFdBSVMsVUFBQU4sS0FBSztBQUFBLGFBQUVFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLENBQUY7QUFBQSxLQUpkO0FBS0gsR0FORDs7QUFPQSxNQUFNWSxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDakIsZ0JBQUQsRUFBb0I7QUFDbkNrQiwrRUFBZSxDQUFDbEIsZ0JBQUQsRUFBa0JqQixJQUFJLENBQUNlLEtBQXZCLENBQWYsQ0FBNkNJLElBQTdDLENBQWtELFVBQUFDLE1BQU0sRUFBRTtBQUN0RFgsY0FBUSxDQUFDMkIsT0FBVCxDQUFpQkMsU0FBakIsR0FBMkIsTUFBM0I7QUFDSCxLQUZELFdBRVMsVUFBQWYsS0FBSyxFQUFFO0FBQ1pFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0gsS0FKRDtBQUtILEdBTkQ7O0FBT0EsTUFBR25CLFdBQVcsSUFBRWEsU0FBaEIsRUFBMEI7QUFDdEIsd0JBQVE7QUFBSyxlQUFTLEVBQUVzQixxRUFBSyxDQUFDQyxnQkFBdEI7QUFBQSxnQkFDUGhDLE9BQU8saUJBQUU7QUFBSyxpQkFBUyxFQUFFK0IscUVBQUssQ0FBQ0UsT0FBdEI7QUFBQSxnQ0FBK0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBL0IsZUFBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBMUMsZUFBcUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBckQsZUFBZ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBR0gsR0FKRCxNQUtLLElBQUk1QyxLQUFLLENBQUM2QyxtQkFBTixJQUEyQnpCLFNBQTNCLElBQXdDcEIsS0FBSyxDQUFDNkMsbUJBQU4sSUFBMkIsSUFBbkUsSUFBMkVwQyxlQUFlLElBQUUsS0FBaEcsRUFBc0c7QUFDdkcsd0JBQU87QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFJNkIsWUFBWSxDQUFDO0FBQUNqQiwwQkFBZ0IsRUFBQ3JCLEtBQUssQ0FBQ3FCO0FBQXhCLFNBQUQsQ0FBaEI7QUFBQSxPQUFkO0FBQTJFLGVBQVMsWUFBS3FCLHFFQUFLLENBQUMzQyxpQkFBWCxjQUFnQzJDLHFFQUFLLENBQUNQLFFBQXRDLENBQXBGO0FBQUEsNkJBQ0g7QUFBRyxXQUFHLEVBQUV0QixRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBSUgsR0FMSSxNQUtDLElBQUdOLFdBQVcsQ0FBQ3lCLEtBQVosSUFBbUIsQ0FBdEIsRUFBd0I7QUFFMUIsd0JBQVE7QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFJQyxxQkFBcUIsQ0FBQ2pDLEtBQUssQ0FBQ3FCLGdCQUFQLENBQXpCO0FBQUEsT0FBZDtBQUFpRSxlQUFTLFlBQUtxQixxRUFBSyxDQUFDM0MsaUJBQVgsY0FBZ0MyQyxxRUFBSyxDQUFDUCxRQUF0QyxDQUExRTtBQUFBLGlCQUNGUCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBREUsZUFFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBSUgsR0FOSyxNQU1BLElBQUd0QixXQUFXLENBQUN5QixLQUFaLElBQW1CLENBQXRCLEVBQXdCO0FBQzFCLHdCQUNBO0FBQUssYUFBTyxFQUFFO0FBQUEsZUFBSUcsUUFBUSxDQUFDbkMsS0FBSyxDQUFDcUIsZ0JBQVAsQ0FBWjtBQUFBLE9BQWQ7QUFBb0QsZUFBUyxZQUFLcUIscUVBQUssQ0FBQzNDLGlCQUFYLGNBQWdDMkMscUVBQUssQ0FBQ1AsUUFBdEMsQ0FBN0Q7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQTtBQUtILEdBTkssTUFPRjtBQUNBO0FBQUNQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFBc0I7QUFDdkIsd0JBQ0E7QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFJRixVQUFVLENBQUMzQixLQUFLLENBQUNxQixnQkFBUCxDQUFkO0FBQUEsT0FBZDtBQUFzRCxlQUFTLFlBQUtxQixxRUFBSyxDQUFDM0MsaUJBQVgsY0FBZ0MyQyxxRUFBSyxDQUFDSSxNQUF0QyxDQUEvRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS2xCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQTtBQU9BO0FBQUNELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFBc0I7QUFFMUI7QUFFSixDQTFGRDs7R0FBTTlCLGlCOztBQTRGU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5jMzQyNmJiY2M4NzgyNzY0ZGU3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9mb2xsb3dBbmRVbmZvbGxvdy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHt1bmZvbGxvd1VzZXJBcGksZm9sbG93VXNlckFwaSxjaGVja0lmZm9sbG93QXBpLHJlbW92ZUZvbGxvd1BlbmRpbmd9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZvbGxvd2luZydcclxuaW1wb3J0IHtkZWxldGVGb2xsb3dBcGl9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZvbGxvd2VycydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuY29uc3QgZm9sbG93QW5kVW5mb2xsb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXT0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtmb2xsb3dPck5vdCxzZXRGb2xsb3dPck5vdF09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaWZIZURlbGV0ZWRVc2VyLHNldElmSGVEZWxldGVkVXNlcl09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbTG9hZGluZyxzZXRMb2FkaW5nXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHJlZkRlbHRlPVJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGlmKHVzZXIudG9rZW4hPXVuZGVmaW5lZCAmJiBwcm9wcy50aGVPdGhlclBlcnNvbklkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjaGVja0lmZm9sbG93QXBpKHByb3BzLnRoZU90aGVyUGVyc29uSWQsdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIHNldEZvbGxvd09yTm90KHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e30pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbdXNlci50b2tlbl0pXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSxbZm9sbG93T3JOb3RdKVxyXG4gICAgY29uc3QgZm9sbG93VXNlcj0odGhlT3RoZXJQZXJzb25JZCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZvbGxvd2l0XCIpXHJcbiAgICAgICAgZm9sbG93VXNlckFwaSh0aGVPdGhlclBlcnNvbklkLHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIC8vc2V0Rm9sbG93T3JOb3QoZT0+IWUpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0Rm9sbG93T3JOb3QoZT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5lLFwic3RhdGVcIjpyZXN1bHQuZGF0YS5zdGF0ZX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e30pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbW92ZUZvbGxvd1BlbmRpbmdmbj0odGhlT3RoZXJQZXJzb25JZCk9PntcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgcmVtb3ZlRm9sbG93UGVuZGluZyh0aGVPdGhlclBlcnNvbklkLHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIHNldEZvbGxvd09yTm90KGU9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uZSxcInN0YXRlXCI6cmVzdWx0LmRhdGEuc3RhdGV9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9Pnt9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgdW5mb2xsb3c9KGZvbGxvd2luZ2lkKT0+e1xyXG4gICAgICAgIHVuZm9sbG93VXNlckFwaShmb2xsb3dpbmdpZCx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBzZXRGb2xsb3dPck5vdChlPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLmUsXCJzdGF0ZVwiOnJlc3VsdC5kYXRhLnN0YXRlfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVGb2xsb3c9KHRoZU90aGVyUGVyc29uSWQpPT57XHJcbiAgICAgICAgZGVsZXRlRm9sbG93QXBpKHRoZU90aGVyUGVyc29uSWQsdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgcmVmRGVsdGUuY3VycmVudC5pbm5lckhUTUw9XCJkb25lXCJcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYoZm9sbG93T3JOb3Q9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17U3R5bGUubG9hZGluZ0FuaW1hdGlvbn0+XHJcbiAgICAgICAge0xvYWRpbmcmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNyaW5nfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wcy5Zb3VBcmVJbllvdXJQcm9maWxlIT11bmRlZmluZWQgJiYgcHJvcHMuWW91QXJlSW5Zb3VyUHJvZmlsZT09dHJ1ZSAmJiBpZkhlRGVsZXRlZFVzZXI9PWZhbHNlKXtcclxuICAgICAgICByZXR1cm4oPGRpdiBvbkNsaWNrPXsoKT0+ZGVsZXRlRm9sbG93KHt0aGVPdGhlclBlcnNvbklkOnByb3BzLnRoZU90aGVyUGVyc29uSWR9KX0gY2xhc3NOYW1lPXtgJHtTdHlsZS5mb2xsb3dBbmRVbmZvbGxvd30gJHtTdHlsZS51bmZvbGxvd31gfT5cclxuICAgICAgICAgICAgPHAgcmVmPXtyZWZEZWx0ZX0+ZGVsZXRlPC9wPlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIFxyXG4gICAgfWVsc2UgaWYoZm9sbG93T3JOb3Quc3RhdGU9PTEpe1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IG9uQ2xpY2s9eygpPT5yZW1vdmVGb2xsb3dQZW5kaW5nZm4ocHJvcHMudGhlT3RoZXJQZXJzb25JZCl9IGNsYXNzTmFtZT17YCR7U3R5bGUuZm9sbG93QW5kVW5mb2xsb3d9ICR7U3R5bGUudW5mb2xsb3d9YH0+XHJcbiAgICAgICAgICAgICB7Y29uc29sZS5sb2coXCJhYWFcIil9XHJcbiAgICAgICAgICAgIDxwPnBlbmRpbmc8L3A+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfWVsc2UgaWYoZm9sbG93T3JOb3Quc3RhdGU9PTIpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dW5mb2xsb3cocHJvcHMudGhlT3RoZXJQZXJzb25JZCl9IGNsYXNzTmFtZT17YCR7U3R5bGUuZm9sbG93QW5kVW5mb2xsb3d9ICR7U3R5bGUudW5mb2xsb3d9YH0+XHJcbiAgICAgICAgICAgIDxwID51bmZvbGxvdzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHtjb25zb2xlLmxvZyhcInVuaGFhYVwiKX1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCk9PmZvbGxvd1VzZXIocHJvcHMudGhlT3RoZXJQZXJzb25JZCl9IGNsYXNzTmFtZT17YCR7U3R5bGUuZm9sbG93QW5kVW5mb2xsb3d9ICR7U3R5bGUuZm9sbG93fWB9PlxyXG4gICAgICAgICAgICA8cD5Gb2xsb3c8L3A+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcInVuaGFhYVwiKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHtjb25zb2xlLmxvZyhcInVuaGFhYVwiKX1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb2xsb3dBbmRVbmZvbGxvd1xyXG4iXSwic291cmNlUm9vdCI6IiJ9