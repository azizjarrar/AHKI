webpackHotUpdate_N_E("pages/index",{

/***/ "./components/homeTodayTopics/homeTodayTopics.js":
/*!*******************************************************!*\
  !*** ./components/homeTodayTopics/homeTodayTopics.js ***!
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
/* harmony import */ var _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeTodayTopics.module.scss */ "./components/homeTodayTopics/homeTodayTopics.module.scss");
/* harmony import */ var _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../postTodayTopic/postTodayTopic */ "./components/postTodayTopic/postTodayTopic.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/post */ "./services/post.js");
/* harmony import */ var _publication_publication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../publication/publication */ "./components/publication/publication.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");




var _jsxFileName = "F:\\AHKI\\components\\homeTodayTopics\\homeTodayTopics.js",
    _this = undefined,
    _s = $RefreshSig$();









var homeTodayTopics = function homeTodayTopics() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      _React$useContext2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useContext, 2),
      user = _React$useContext2[0],
      setUser = _React$useContext2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      posts = _React$useState2[0],
      setPosts = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState4 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      topUsers = _React$useState4[0],
      setTopUsers = _React$useState4[1];

  var options = [{
    value: 'chocolate',
    label: 'Chocolate'
  }, {
    value: 'strawberry',
    label: 'Strawberry'
  }, {
    value: 'vanilla',
    label: 'Vanilla'
  }];
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (user.token != undefined) {
      Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getTodayTopicPost"])({}, user.token).then(function (result) {
        if (result != undefined) {
          setPosts(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
        }
      })["catch"](function (error) {
        console.log(error);
      });
      Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getTopUserPostsLikes"])({}).then(function (result) {
        if (result != undefined) {
          setTopUsers(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, [user.token]);

  var refrechDataFn = function refrechDataFn() {
    Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getTodayTopicPost"])({}, user.token).then(function (result) {
      setPosts(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
    })["catch"](function (error) {
      alert(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.todayTopics,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.topUsers,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.changeTopic,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Check old Topics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.select,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
            options: options
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, _this), topUsers.map(function (e, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
          index: index,
          postdata: e
        }, e._id, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 47
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__["default"], {
        logedOrNot: user.token != false && user.token != undefined,
        refrechData: refrechDataFn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 18
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.publicationContainer,
        children: posts.map(function (e) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_publication_publication__WEBPACK_IMPORTED_MODULE_8__["default"], {
            allowAnonymeComments: e.allowAnonymeComments,
            userName: e.OwnerOfPost.userName,
            id: e._id,
            date: e.date,
            ownerOfPostImage: e.OwnerOfPost.currentImageUrl || "anonym",
            text: e.postText,
            video: e.postVideo != undefined ? e.postVideo : undefined,
            image: e.postImage != undefined ? e.postImage : undefined
          }, e._id, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 13
  }, _this);
};

_s(homeTodayTopics, "RYiU3UItnMWx/2BQDytLurVgBI8=");

/* harmony default export */ __webpack_exports__["default"] = (homeTodayTopics);

var TopUsers = function TopUsers(props) {
  var _props$postdata$Likes;

  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TopUsersStyle,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.userImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.postdata.OwnerOfPost.currentImageUrl == "anonym" ? "/anonymous.png" : props.postdata.OwnerOfPost.currentImageUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 12
  }, _this);
};

_c = TopUsers;

var _c;

$RefreshReg$(_c, "TopUsers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsInVuZGVmaW5lZCIsImdldFRvZGF5VG9waWNQb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3BVc2VyUG9zdHNMaWtlcyIsInJlZnJlY2hEYXRhRm4iLCJhbGVydCIsIlN0eWxlcyIsInRvZGF5VG9waWNzIiwiY2hhbmdlVG9waWMiLCJoZWFkZXIiLCJuYW1lIiwic2VsZWN0IiwibWFwIiwiZSIsImluZGV4IiwiX2lkIiwicHVibGljYXRpb25Db250YWluZXIiLCJhbGxvd0Fub255bWVDb21tZW50cyIsIk93bmVyT2ZQb3N0IiwidXNlck5hbWUiLCJkYXRlIiwiY3VycmVudEltYWdlVXJsIiwicG9zdFRleHQiLCJwb3N0VmlkZW8iLCJwb3N0SW1hZ2UiLCJUb3BVc2VycyIsInByb3BzIiwiVG9wVXNlcnNTdHlsZSIsInVzZXJJbWFnZSIsInBvc3RkYXRhIiwicmFua2luZyIsInJhbmRraW5nSW1hZ2VDb250YWluZXIiLCJudW1iZXJPZkxpa2VzIiwiTGlrZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsMEJBQ0xDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLDREQUFqQixD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QUFBQTtBQUFBLGFBaEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBa0JILENBcEJEOztLQUFNRyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1M2MxYzgzNzgwYzI3OGZlZDk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9ob21lVG9kYXlUb3BpY3MubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBQb3N0VG9kYXlUb3BpYyBmcm9tICcuLi9wb3N0VG9kYXlUb3BpYy9wb3N0VG9kYXlUb3BpYydcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcbmltcG9ydCB7Z2V0VG9kYXlUb3BpY1Bvc3QsZ2V0VG9wVXNlclBvc3RzTGlrZXN9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bvc3QnXHJcbmltcG9ydCBQdWJsaWNhdGlvbiBmcm9tICcuLi9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbidcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcblxyXG5jb25zdCBob21lVG9kYXlUb3BpY3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3Bvc3RzLHNldFBvc3RzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3BVc2VycyxzZXRUb3BVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgICAgIHsgdmFsdWU6ICdjaG9jb2xhdGUnLCBsYWJlbDogJ0Nob2NvbGF0ZScgfSxcclxuICAgICAgICB7IHZhbHVlOiAnc3RyYXdiZXJyeScsIGxhYmVsOiAnU3RyYXdiZXJyeScgfSxcclxuICAgICAgICB7IHZhbHVlOiAndmFuaWxsYScsIGxhYmVsOiAnVmFuaWxsYScgfVxyXG4gICAgICBdXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLnRva2VuIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRUb2RheVRvcGljUG9zdCh7fSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdldFRvcFVzZXJQb3N0c0xpa2VzKHt9KS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb3BVc2VycyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW3VzZXIudG9rZW5dKVxyXG4gICAgY29uc3QgcmVmcmVjaERhdGFGbj0oKT0+e1xyXG4gICAgICAgIGdldFRvZGF5VG9waWNQb3N0KHt9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9kYXlUb3BpY3N9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BVc2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jaGFuZ2VUb3BpY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoZWNrIG9sZCBUb3BpY3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNlbGVjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BVc2Vycy5tYXAoKGUsaW5kZXgpPT4gPFRvcFVzZXJzICBpbmRleD17aW5kZXh9IHBvc3RkYXRhPXtlfSBrZXk9e2UuX2lkfT48L1RvcFVzZXJzPil9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdHN9PlxyXG4gICAgICAgICAgICAgICAgezxQb3N0VG9kYXlUb3BpYyBsb2dlZE9yTm90PXt1c2VyLnRva2VuIT1mYWxzZSYmdXNlci50b2tlbiE9dW5kZWZpbmVkfSByZWZyZWNoRGF0YT17cmVmcmVjaERhdGFGbn0+PC9Qb3N0VG9kYXlUb3BpYz59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wdWJsaWNhdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKGUpPT48UHVibGljYXRpb24gIGFsbG93QW5vbnltZUNvbW1lbnRzPXtlLmFsbG93QW5vbnltZUNvbW1lbnRzfSAgdXNlck5hbWU9e2UuT3duZXJPZlBvc3QudXNlck5hbWV9IGlkPXtlLl9pZH0gIGRhdGU9e2UuZGF0ZX0gb3duZXJPZlBvc3RJbWFnZT17ZS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmx8fFwiYW5vbnltXCJ9IGtleT17ZS5faWR9IHRleHQ9e2UucG9zdFRleHR9IHZpZGVvPXtlLnBvc3RWaWRlbyE9dW5kZWZpbmVkP2UucG9zdFZpZGVvOnVuZGVmaW5lZH0gaW1hZ2U9e2UucG9zdEltYWdlIT11bmRlZmluZWQ/ZS5wb3N0SW1hZ2U6dW5kZWZpbmVkfT48L1B1YmxpY2F0aW9uPil9XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVRvZGF5VG9waWNzXHJcblxyXG5cclxuY29uc3QgVG9wVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuVG9wVXNlcnNTdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5oZWFkZXJ9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy51c2VySW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybD09XCJhbm9ueW1cIj9cIi9hbm9ueW1vdXMucG5nXCI6cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGgyPntwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC51c2VyTmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5raW5nfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL2ZpcnN0LnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTEmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy9zZWNvbmQucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MiYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL3RoaXJkLnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm51bWJlck9mTGlrZXN9PjxoMj57KHByb3BzLmluZGV4IT0xJiZwcm9wcy5pbmRleCE9MiYmcHJvcHMuaW5kZXghPTApICYmYHRvcCAke3Byb3BzLmluZGV4KzF9IGB9V2l0aCB7cHJvcHMucG9zdGRhdGEuTGlrZXM/PzB9IExpa2VzPC9oMj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBvc3RUZXh0fT48cD57cHJvcHMucG9zdGRhdGEucG9zdFRleHR9PC9wPjwvZGl2PlxyXG4gICAgPC9kaXY+KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=