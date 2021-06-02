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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(undefined),
      _React$useState8 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      idTopic = _React$useState8[0],
      setIdTopic = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (user.token != undefined) {
      Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getTodayTopicPost"])({
        idTopic: undefined
      }, user.token).then(function (result) {
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
              "value": result.data.data[i]._id,
              "label": result.data.data[i].topic
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

  var getSelectdIdOfTopic = function getSelectdIdOfTopic(id) {
    Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getSelectedTopicPosts"])({
      idTopic: id.value
    }, user.token).then(function (result) {
      if (result != undefined) {
        setPosts(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
      }
    })["catch"](function (error) {
      console.log(error);
    });
    Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getTopUserPostsLikes"])({
      idTopic: id.value
    }).then(function (result) {
      if (result != undefined) {
        setTopUsers(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
      }
    })["catch"](function (error) {
      console.log(error);
    });
    setIdTopic(id.value);
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
              lineNumber: 87,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
            lineNumber: 91,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }, _this), topUsers.map(function (e, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
          index: index,
          postdata: e
        }, e._id, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 47
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__["default"], {
        logedOrNot: user.token != false && user.token != undefined,
        refrechData: refrechDataFn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
            lineNumber: 102,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 13
  }, _this);
};

_s(homeTodayTopics, "Qbh85NF0ZrcBM7th5gslAXoR28Y=");

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
          lineNumber: 118,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJpZFRvcGljIiwic2V0SWRUb3BpYyIsInVzZUVmZmVjdCIsInRva2VuIiwiZ2V0VG9kYXlUb3BpY1Bvc3QiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldFRvcFVzZXJQb3N0c0xpa2VzIiwiZ2V0YWxsVG9waWNzIiwibmV3QXJyYXlPZlRvcGljcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiX2lkIiwidG9waWMiLCJyZWZyZWNoRGF0YUZuIiwiYWxlcnQiLCJnZXRTZWxlY3RkSWRPZlRvcGljIiwiaWQiLCJnZXRTZWxlY3RlZFRvcGljUG9zdHMiLCJ2YWx1ZSIsIlN0eWxlcyIsInRvZGF5VG9waWNzIiwiY2hhbmdlVG9waWMiLCJoZWFkZXIiLCJuYW1lIiwic2VsZWN0T3B0aW9uIiwibWFwIiwiZSIsImluZGV4IiwicHVibGljYXRpb25Db250YWluZXIiLCJhbGxvd0Fub255bWVDb21tZW50cyIsIk93bmVyT2ZQb3N0IiwidXNlck5hbWUiLCJkYXRlIiwiY3VycmVudEltYWdlVXJsIiwicG9zdFRleHQiLCJwb3N0VmlkZW8iLCJwb3N0SW1hZ2UiLCJUb3BVc2VycyIsInByb3BzIiwiVG9wVXNlcnNTdHlsZSIsInVzZXJJbWFnZSIsInBvc3RkYXRhIiwicmFua2luZyIsInJhbmRraW5nSW1hZ2VDb250YWluZXIiLCJudW1iZXJPZkxpa2VzIiwiTGlrZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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ZUFSSixlQWFJO0FBQUssaUJBQVMsRUFBRXhCLG1FQUFNLENBQUN5QixhQUF2QjtBQUFBLCtCQUFzQztBQUFBLHFCQUFNTixLQUFLLENBQUNYLEtBQU4sSUFBYSxDQUFiLElBQWdCVyxLQUFLLENBQUNYLEtBQU4sSUFBYSxDQUE3QixJQUFnQ1csS0FBSyxDQUFDWCxLQUFOLElBQWEsQ0FBOUMsa0JBQTBEVyxLQUFLLENBQUNYLEtBQU4sR0FBWSxDQUF0RSxNQUFMLG9DQUFzRlcsS0FBSyxDQUFDRyxRQUFOLENBQWVJLEtBQXJHLHlFQUE0RyxDQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLGVBZ0JIO0FBQUssZUFBUyxFQUFFMUIsbUVBQU0sQ0FBQ2UsUUFBdkI7QUFBQSw2QkFBaUM7QUFBQSxrQkFBSUksS0FBSyxDQUFDRyxRQUFOLENBQWVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWtCSCxDQW5CRDs7S0FBTUcsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYTY1Y2U5YTk3ZThhNDY2YTU2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaG9tZVRvZGF5VG9waWNzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUG9zdFRvZGF5VG9waWMgZnJvbSAnLi4vcG9zdFRvZGF5VG9waWMvcG9zdFRvZGF5VG9waWMnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQge2dldFRvZGF5VG9waWNQb3N0LGdldFNlbGVjdGVkVG9waWNQb3N0cyxnZXRUb3BVc2VyUG9zdHNMaWtlc30gZnJvbSAnLi4vLi4vc2VydmljZXMvcG9zdCdcclxuaW1wb3J0IFB1YmxpY2F0aW9uIGZyb20gJy4uL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uJ1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcclxuaW1wb3J0IHtnZXRhbGxUb3BpY3N9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvZGF5VG9waWMnXHJcbmNvbnN0IGhvbWVUb2RheVRvcGljcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbcG9zdHMsc2V0UG9zdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcFVzZXJzLHNldFRvcFVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcHRpb25zLHNldE9wdGlvbnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2lkVG9waWMsc2V0SWRUb3BpY109UmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIudG9rZW4hPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldFRvZGF5VG9waWNQb3N0KHtpZFRvcGljOnVuZGVmaW5lZH0sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXRUb3BVc2VyUG9zdHNMaWtlcyh7fSkudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9wVXNlcnMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXRhbGxUb3BpY3MoKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdBcnJheU9mVG9waWNzPVtdXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxyZXN1bHQuZGF0YS5kYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheU9mVG9waWNzLnB1c2goeyBcInZhbHVlXCI6IHJlc3VsdC5kYXRhLmRhdGFbaV0uX2lkLCBcImxhYmVsXCI6cmVzdWx0LmRhdGEuZGF0YVtpXS50b3BpYyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25zKFsuLi5uZXdBcnJheU9mVG9waWNzXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbdXNlci50b2tlbl0pXHJcbiAgICBjb25zdCByZWZyZWNoRGF0YUZuPSgpPT57XHJcbiAgICAgICAgZ2V0VG9kYXlUb3BpY1Bvc3Qoe30sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRTZWxlY3RkSWRPZlRvcGljPShpZCk9PntcclxuICAgICAgICBnZXRTZWxlY3RlZFRvcGljUG9zdHMoe2lkVG9waWM6aWQudmFsdWV9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBnZXRUb3BVc2VyUG9zdHNMaWtlcyh7aWRUb3BpYzppZC52YWx1ZX0pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3BVc2VycyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRJZFRvcGljKGlkLnZhbHVlKVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRvZGF5VG9waWNzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9wVXNlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbmdlVG9waWN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGVjayBvbGQgVG9waWNzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zZWxlY3RPcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9e2dldFNlbGVjdGRJZE9mVG9waWN9IGluc3RhbmNlSWQ9e1wiaWR1bmlxdWVcIn0gaWQ9e1wiZ3plZ3plZ3plXCJ9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvcFVzZXJzLm1hcCgoZSxpbmRleCk9PiA8VG9wVXNlcnMgIGluZGV4PXtpbmRleH0gcG9zdGRhdGE9e2V9IGtleT17ZS5faWR9PjwvVG9wVXNlcnM+KX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICAgICAgICB7PFBvc3RUb2RheVRvcGljIGxvZ2VkT3JOb3Q9e3VzZXIudG9rZW4hPWZhbHNlJiZ1c2VyLnRva2VuIT11bmRlZmluZWR9IHJlZnJlY2hEYXRhPXtyZWZyZWNoRGF0YUZufT48L1Bvc3RUb2RheVRvcGljPn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnB1YmxpY2F0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgoZSk9PjxQdWJsaWNhdGlvbiAgYWxsb3dBbm9ueW1lQ29tbWVudHM9e2UuYWxsb3dBbm9ueW1lQ29tbWVudHN9ICB1c2VyTmFtZT17ZS5Pd25lck9mUG9zdC51c2VyTmFtZX0gaWQ9e2UuX2lkfSAgZGF0ZT17ZS5kYXRlfSBvd25lck9mUG9zdEltYWdlPXtlLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybHx8XCJhbm9ueW1cIn0ga2V5PXtlLl9pZH0gdGV4dD17ZS5wb3N0VGV4dH0gdmlkZW89e2UucG9zdFZpZGVvIT11bmRlZmluZWQ/ZS5wb3N0VmlkZW86dW5kZWZpbmVkfSBpbWFnZT17ZS5wb3N0SW1hZ2UhPXVuZGVmaW5lZD9lLnBvc3RJbWFnZTp1bmRlZmluZWR9PjwvUHVibGljYXRpb24+KX1cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lVG9kYXlUb3BpY3NcclxuXHJcblxyXG5jb25zdCBUb3BVc2Vycz0ocHJvcHMpPT57XHJcbiAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Ub3BVc2Vyc1N0eWxlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmhlYWRlcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnVzZXJJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsPT1cImFub255bVwiP1wiL2Fub255bW91cy5wbmdcIjpwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LnVzZXJOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmtpbmd9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3JhbmtpbmcvZmlyc3QucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL3NlY29uZC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0yJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3JhbmtpbmcvdGhpcmQucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubnVtYmVyT2ZMaWtlc30+PGgyPnsocHJvcHMuaW5kZXghPTEmJnByb3BzLmluZGV4IT0yJiZwcm9wcy5pbmRleCE9MCkgJiZgdG9wICR7cHJvcHMuaW5kZXgrMX0gYH1XaXRoIHtwcm9wcy5wb3N0ZGF0YS5MaWtlcz8/MH0gTGlrZXM8L2gyPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdFRleHR9PjxwPntwcm9wcy5wb3N0ZGF0YS5wb3N0VGV4dH08L3A+PC9kaXY+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==