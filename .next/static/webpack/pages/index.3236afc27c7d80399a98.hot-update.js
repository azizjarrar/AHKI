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
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.selectOption
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
          lineNumber: 72,
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
        lineNumber: 76,
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
            lineNumber: 79,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
          lineNumber: 95,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsInVuZGVmaW5lZCIsImdldFRvZGF5VG9waWNQb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3BVc2VyUG9zdHNMaWtlcyIsImdldGFsbFRvcGljcyIsIm5ld0FycmF5T2ZUb3BpY3MiLCJpIiwibGVuZ3RoIiwicHVzaCIsIl9pZCIsInRvcGljIiwicmVmcmVjaERhdGFGbiIsImFsZXJ0IiwiU3R5bGVzIiwidG9kYXlUb3BpY3MiLCJjaGFuZ2VUb3BpYyIsImhlYWRlciIsIm5hbWUiLCJzZWxlY3RPcHRpb24iLCJtYXAiLCJlIiwiaW5kZXgiLCJwdWJsaWNhdGlvbkNvbnRhaW5lciIsImFsbG93QW5vbnltZUNvbW1lbnRzIiwiT3duZXJPZlBvc3QiLCJ1c2VyTmFtZSIsImRhdGUiLCJjdXJyZW50SW1hZ2VVcmwiLCJwb3N0VGV4dCIsInBvc3RWaWRlbyIsInBvc3RJbWFnZSIsIlRvcFVzZXJzIiwicHJvcHMiLCJUb3BVc2Vyc1N0eWxlIiwidXNlckltYWdlIiwicG9zdGRhdGEiLCJyYW5raW5nIiwicmFuZGtpbmdJbWFnZUNvbnRhaW5lciIsIm51bWJlck9mTGlrZXMiLCJMaWtlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdB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LElBQWEsQ0FBN0IsSUFBZ0NXLEtBQUssQ0FBQ1gsS0FBTixJQUFhLENBQTlDLGtCQUEwRFcsS0FBSyxDQUFDWCxLQUFOLEdBQVksQ0FBdEUsTUFBTCxvQ0FBc0ZXLEtBQUssQ0FBQ0csUUFBTixDQUFlSSxLQUFyRyx5RUFBNEcsQ0FBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxlQWdCSDtBQUFLLGVBQVMsRUFBRTFCLG1FQUFNLENBQUNlLFFBQXZCO0FBQUEsNkJBQWlDO0FBQUEsa0JBQUlJLEtBQUssQ0FBQ0csUUFBTixDQUFlUDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFrQkgsQ0FuQkQ7O0tBQU1HLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzIzNmFmYzI3YzdkODAzOTlhOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2hvbWVUb2RheVRvcGljcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFBvc3RUb2RheVRvcGljIGZyb20gJy4uL3Bvc3RUb2RheVRvcGljL3Bvc3RUb2RheVRvcGljJ1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IHtnZXRUb2RheVRvcGljUG9zdCxnZXRUb3BVc2VyUG9zdHNMaWtlc30gZnJvbSAnLi4vLi4vc2VydmljZXMvcG9zdCdcclxuaW1wb3J0IFB1YmxpY2F0aW9uIGZyb20gJy4uL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uJ1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcclxuaW1wb3J0IHtnZXRhbGxUb3BpY3N9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvZGF5VG9waWMnXHJcbmNvbnN0IGhvbWVUb2RheVRvcGljcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbcG9zdHMsc2V0UG9zdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcFVzZXJzLHNldFRvcFVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcHRpb25zLHNldE9wdGlvbnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLnRva2VuIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRUb2RheVRvcGljUG9zdCh7fSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdldFRvcFVzZXJQb3N0c0xpa2VzKHt9KS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb3BVc2VycyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdldGFsbFRvcGljcygpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FycmF5T2ZUb3BpY3M9W11cclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHJlc3VsdC5kYXRhLmRhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5T2ZUb3BpY3MucHVzaCh7IFwidmFsdWVcIjogcmVzdWx0LmRhdGEuZGF0YS5faWQsIFwibGFiZWxcIjpyZXN1bHQuZGF0YS5kYXRhWzBdLnRvcGljIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbnMoWy4uLm5ld0FycmF5T2ZUb3BpY3NdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFt1c2VyLnRva2VuXSlcclxuICAgIGNvbnN0IHJlZnJlY2hEYXRhRm49KCk9PntcclxuICAgICAgICBnZXRUb2RheVRvcGljUG9zdCh7fSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRvZGF5VG9waWNzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9wVXNlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbmdlVG9waWN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGVjayBvbGQgVG9waWNzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zZWxlY3RPcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BVc2Vycy5tYXAoKGUsaW5kZXgpPT4gPFRvcFVzZXJzICBpbmRleD17aW5kZXh9IHBvc3RkYXRhPXtlfSBrZXk9e2UuX2lkfT48L1RvcFVzZXJzPil9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdHN9PlxyXG4gICAgICAgICAgICAgICAgezxQb3N0VG9kYXlUb3BpYyBsb2dlZE9yTm90PXt1c2VyLnRva2VuIT1mYWxzZSYmdXNlci50b2tlbiE9dW5kZWZpbmVkfSByZWZyZWNoRGF0YT17cmVmcmVjaERhdGFGbn0+PC9Qb3N0VG9kYXlUb3BpYz59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wdWJsaWNhdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKGUpPT48UHVibGljYXRpb24gIGFsbG93QW5vbnltZUNvbW1lbnRzPXtlLmFsbG93QW5vbnltZUNvbW1lbnRzfSAgdXNlck5hbWU9e2UuT3duZXJPZlBvc3QudXNlck5hbWV9IGlkPXtlLl9pZH0gIGRhdGU9e2UuZGF0ZX0gb3duZXJPZlBvc3RJbWFnZT17ZS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmx8fFwiYW5vbnltXCJ9IGtleT17ZS5faWR9IHRleHQ9e2UucG9zdFRleHR9IHZpZGVvPXtlLnBvc3RWaWRlbyE9dW5kZWZpbmVkP2UucG9zdFZpZGVvOnVuZGVmaW5lZH0gaW1hZ2U9e2UucG9zdEltYWdlIT11bmRlZmluZWQ/ZS5wb3N0SW1hZ2U6dW5kZWZpbmVkfT48L1B1YmxpY2F0aW9uPil9XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVRvZGF5VG9waWNzXHJcblxyXG5cclxuY29uc3QgVG9wVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuVG9wVXNlcnNTdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5oZWFkZXJ9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy51c2VySW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybD09XCJhbm9ueW1cIj9cIi9hbm9ueW1vdXMucG5nXCI6cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGgyPntwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC51c2VyTmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5raW5nfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL2ZpcnN0LnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTEmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy9zZWNvbmQucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MiYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL3RoaXJkLnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm51bWJlck9mTGlrZXN9PjxoMj57KHByb3BzLmluZGV4IT0xJiZwcm9wcy5pbmRleCE9MiYmcHJvcHMuaW5kZXghPTApICYmYHRvcCAke3Byb3BzLmluZGV4KzF9IGB9V2l0aCB7cHJvcHMucG9zdGRhdGEuTGlrZXM/PzB9IExpa2VzPC9oMj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBvc3RUZXh0fT48cD57cHJvcHMucG9zdGRhdGEucG9zdFRleHR9PC9wPjwvZGl2PlxyXG4gICAgPC9kaXY+KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=