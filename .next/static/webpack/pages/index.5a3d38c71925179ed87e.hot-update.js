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
/* harmony import */ var _services_todayTopic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/todayTopic */ "./services/todayTopic.js");




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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState6 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      options = _React$useState6[0],
      setOptions = _React$useState6[1];

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
      Object(_services_todayTopic__WEBPACK_IMPORTED_MODULE_10__["getallTopics"])().then(function (result) {
        if (result != undefined) {
          var newArrayOfTopics = [];

          for (var i = 0; i < result.data.data.length; i++) {
            newArrayOfTopics.push({
              "value": result.data.data._id,
              "label": result.data.data[0].topic
            });
          }

          setOptions([].concat(newArrayOfTopics));
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
              lineNumber: 65,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.selectOption,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onChange: getSelectdIdOfTopic,
            instanceId: "idunique",
            id: "gzegzegze",
            options: options
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, _this), topUsers.map(function (e, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
          index: index,
          postdata: e
        }, e._id, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 47
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__["default"], {
        logedOrNot: user.token != false && user.token != undefined,
        refrechData: refrechDataFn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
            lineNumber: 80,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 13
  }, _this);
};

_s(homeTodayTopics, "qXPubY5YKpVKHNfWhjLPzEanUR4=");

/* harmony default export */ __webpack_exports__["default"] = (homeTodayTopics);

var TopUsers = function TopUsers(props) {
  var _props$postdata$Likes;

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
          lineNumber: 96,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsInVuZGVmaW5lZCIsImdldFRvZGF5VG9waWNQb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3BVc2VyUG9zdHNMaWtlcyIsImdldGFsbFRvcGljcyIsIm5ld0FycmF5T2ZUb3BpY3MiLCJpIiwibGVuZ3RoIiwicHVzaCIsIl9pZCIsInRvcGljIiwicmVmcmVjaERhdGFGbiIsImFsZXJ0IiwiU3R5bGVzIiwidG9kYXlUb3BpY3MiLCJjaGFuZ2VUb3BpYyIsImhlYWRlciIsIm5hbWUiLCJzZWxlY3RPcHRpb24iLCJnZXRTZWxlY3RkSWRPZlRvcGljIiwibWFwIiwiZSIsImluZGV4IiwicHVibGljYXRpb25Db250YWluZXIiLCJhbGxvd0Fub255bWVDb21tZW50cyIsIk93bmVyT2ZQb3N0IiwidXNlck5hbWUiLCJkYXRlIiwiY3VycmVudEltYWdlVXJsIiwicG9zdFRleHQiLCJwb3N0VmlkZW8iLCJwb3N0SW1hZ2UiLCJUb3BVc2VycyIsInByb3BzIiwiVG9wVXNlcnNTdHlsZSIsInVzZXJJbWFnZSIsInBvc3RkYXRhIiwicmFua2luZyIsInJhbmRraW5nSW1hZ2VDb250YWluZXIiLCJudW1iZXJPZkxpa2VzIiwiTGlrZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQTtBQUFBO0FBQUEsaUJBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLGVBYUk7QUFBSyxpQkFBUyxFQUFFekIsbUVBQU0sQ0FBQzBCLGFBQXZCO0FBQUEsK0JBQXNDO0FBQUEscUJBQU1OLEtBQUssQ0FBQ1gsS0FBTixJQUFhLENBQWIsSUFBZ0JXLEtBQUssQ0FBQ1gsS0FBTixJQUFhLENBQTdCLElBQWdDVyxLQUFLLENBQUNYLEtBQU4sSUFBYSxDQUE5QyxrQkFBMERXLEtBQUssQ0FBQ1gsS0FBTixHQUFZLENBQXRFLE1BQUwsb0NBQXNGVyxLQUFLLENBQUNHLFFBQU4sQ0FBZUksS0FBckcseUVBQTRHLENBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREcsZUFnQkg7QUFBSyxlQUFTLEVBQUUzQixtRUFBTSxDQUFDZ0IsUUFBdkI7QUFBQSw2QkFBaUM7QUFBQSxrQkFBSUksS0FBSyxDQUFDRyxRQUFOLENBQWVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWtCSCxDQW5CRDs7S0FBTUcsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YTNkMzhjNzE5MjUxNzllZDg3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaG9tZVRvZGF5VG9waWNzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUG9zdFRvZGF5VG9waWMgZnJvbSAnLi4vcG9zdFRvZGF5VG9waWMvcG9zdFRvZGF5VG9waWMnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQge2dldFRvZGF5VG9waWNQb3N0LGdldFRvcFVzZXJQb3N0c0xpa2VzfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3N0J1xyXG5pbXBvcnQgUHVibGljYXRpb24gZnJvbSAnLi4vcHVibGljYXRpb24vcHVibGljYXRpb24nXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xyXG5pbXBvcnQge2dldGFsbFRvcGljc30gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9kYXlUb3BpYydcclxuY29uc3QgaG9tZVRvZGF5VG9waWNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtwb3N0cyxzZXRQb3N0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG9wVXNlcnMsc2V0VG9wVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW29wdGlvbnMsc2V0T3B0aW9uc109UmVhY3QudXNlU3RhdGUoW10pXHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIudG9rZW4hPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldFRvZGF5VG9waWNQb3N0KHt9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ2V0VG9wVXNlclBvc3RzTGlrZXMoe30pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvcFVzZXJzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ2V0YWxsVG9waWNzKCkudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QXJyYXlPZlRvcGljcz1bXVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8cmVzdWx0LmRhdGEuZGF0YS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXlPZlRvcGljcy5wdXNoKHsgXCJ2YWx1ZVwiOiByZXN1bHQuZGF0YS5kYXRhLl9pZCwgXCJsYWJlbFwiOnJlc3VsdC5kYXRhLmRhdGFbMF0udG9waWMgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucyhbLi4ubmV3QXJyYXlPZlRvcGljc10pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW3VzZXIudG9rZW5dKVxyXG4gICAgY29uc3QgcmVmcmVjaERhdGFGbj0oKT0+e1xyXG4gICAgICAgIGdldFRvZGF5VG9waWNQb3N0KHt9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9kYXlUb3BpY3N9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BVc2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jaGFuZ2VUb3BpY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoZWNrIG9sZCBUb3BpY3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNlbGVjdE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17Z2V0U2VsZWN0ZElkT2ZUb3BpY30gaW5zdGFuY2VJZD17XCJpZHVuaXF1ZVwifSBpZD17XCJnemVnemVnemVcIn0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wVXNlcnMubWFwKChlLGluZGV4KT0+IDxUb3BVc2VycyAgaW5kZXg9e2luZGV4fSBwb3N0ZGF0YT17ZX0ga2V5PXtlLl9pZH0+PC9Ub3BVc2Vycz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBvc3RzfT5cclxuICAgICAgICAgICAgICAgIHs8UG9zdFRvZGF5VG9waWMgbG9nZWRPck5vdD17dXNlci50b2tlbiE9ZmFsc2UmJnVzZXIudG9rZW4hPXVuZGVmaW5lZH0gcmVmcmVjaERhdGE9e3JlZnJlY2hEYXRhRm59PjwvUG9zdFRvZGF5VG9waWM+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucHVibGljYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChlKT0+PFB1YmxpY2F0aW9uICBhbGxvd0Fub255bWVDb21tZW50cz17ZS5hbGxvd0Fub255bWVDb21tZW50c30gIHVzZXJOYW1lPXtlLk93bmVyT2ZQb3N0LnVzZXJOYW1lfSBpZD17ZS5faWR9ICBkYXRlPXtlLmRhdGV9IG93bmVyT2ZQb3N0SW1hZ2U9e2UuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsfHxcImFub255bVwifSBrZXk9e2UuX2lkfSB0ZXh0PXtlLnBvc3RUZXh0fSB2aWRlbz17ZS5wb3N0VmlkZW8hPXVuZGVmaW5lZD9lLnBvc3RWaWRlbzp1bmRlZmluZWR9IGltYWdlPXtlLnBvc3RJbWFnZSE9dW5kZWZpbmVkP2UucG9zdEltYWdlOnVuZGVmaW5lZH0+PC9QdWJsaWNhdGlvbj4pfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVUb2RheVRvcGljc1xyXG5cclxuXHJcbmNvbnN0IFRvcFVzZXJzPShwcm9wcyk9PntcclxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLlRvcFVzZXJzU3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyfT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudXNlckltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmw9PVwiYW5vbnltXCI/XCIvYW5vbnltb3VzLnBuZ1wiOnByb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxoMj57cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QudXNlck5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFua2luZ30+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTAmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy9maXJzdC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0xJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3Jhbmtpbmcvc2Vjb25kLnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTImJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy90aGlyZC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5udW1iZXJPZkxpa2VzfT48aDI+eyhwcm9wcy5pbmRleCE9MSYmcHJvcHMuaW5kZXghPTImJnByb3BzLmluZGV4IT0wKSAmJmB0b3AgJHtwcm9wcy5pbmRleCsxfSBgfVdpdGgge3Byb3BzLnBvc3RkYXRhLkxpa2VzPz8wfSBMaWtlczwvaDI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0VGV4dH0+PHA+e3Byb3BzLnBvc3RkYXRhLnBvc3RUZXh0fTwvcD48L2Rpdj5cclxuICAgIDwvZGl2PilcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9