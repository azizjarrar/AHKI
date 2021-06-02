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
              "value": result.data.data[0]._id,
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
              lineNumber: 78,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
            lineNumber: 82,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, _this), topUsers.map(function (e, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
          index: index,
          postdata: e
        }, e._id, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 47
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__["default"], {
        logedOrNot: user.token != false && user.token != undefined,
        refrechData: refrechDataFn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
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
            lineNumber: 93,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
          lineNumber: 109,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJpZFRvcGljIiwic2V0SWRUb3BpYyIsInVzZUVmZmVjdCIsInRva2VuIiwiZ2V0VG9kYXlUb3BpY1Bvc3QiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldFRvcFVzZXJQb3N0c0xpa2VzIiwiZ2V0YWxsVG9waWNzIiwibmV3QXJyYXlPZlRvcGljcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiX2lkIiwidG9waWMiLCJyZWZyZWNoRGF0YUZuIiwiYWxlcnQiLCJnZXRTZWxlY3RkSWRPZlRvcGljIiwiaWQiLCJnZXRTZWxlY3RlZFRvcGljUG9zdHMiLCJ2YWx1ZSIsIlN0eWxlcyIsInRvZGF5VG9waWNzIiwiY2hhbmdlVG9waWMiLCJoZWFkZXIiLCJuYW1lIiwic2VsZWN0T3B0aW9uIiwibWFwIiwiZSIsImluZGV4IiwicHVibGljYXRpb25Db250YWluZXIiLCJhbGxvd0Fub255bWVDb21tZW50cyIsIk93bmVyT2ZQb3N0IiwidXNlck5hbWUiLCJkYXRlIiwiY3VycmVudEltYWdlVXJsIiwicG9zdFRleHQiLCJwb3N0VmlkZW8iLCJwb3N0SW1hZ2UiLCJUb3BVc2VycyIsInByb3BzIiwiVG9wVXNlcnNTdHlsZSIsInVzZXJJbWFnZSIsInBvc3RkYXRhIiwicmFua2luZyIsInJhbmRraW5nSW1hZ2VDb250YWluZXIiLCJudW1iZXJPZkxpa2VzIiwiTGlrZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREcsZUFnQkg7QUFBSyxlQUFTLEVBQUUxQixtRUFBTSxDQUFDZSxRQUF2QjtBQUFBLDZCQUFpQztBQUFBLGtCQUFJSSxLQUFLLENBQUNHLFFBQU4sQ0FBZVA7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBa0JILENBbkJEOztLQUFNRyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjZDUxZTEzMTU1ZDc0ZDFhM2NlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9ob21lVG9kYXlUb3BpY3MubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBQb3N0VG9kYXlUb3BpYyBmcm9tICcuLi9wb3N0VG9kYXlUb3BpYy9wb3N0VG9kYXlUb3BpYydcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcbmltcG9ydCB7Z2V0VG9kYXlUb3BpY1Bvc3QsZ2V0U2VsZWN0ZWRUb3BpY1Bvc3RzLGdldFRvcFVzZXJQb3N0c0xpa2VzfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3N0J1xyXG5pbXBvcnQgUHVibGljYXRpb24gZnJvbSAnLi4vcHVibGljYXRpb24vcHVibGljYXRpb24nXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xyXG5pbXBvcnQge2dldGFsbFRvcGljc30gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9kYXlUb3BpYydcclxuY29uc3QgaG9tZVRvZGF5VG9waWNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtwb3N0cyxzZXRQb3N0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG9wVXNlcnMsc2V0VG9wVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW29wdGlvbnMsc2V0T3B0aW9uc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbaWRUb3BpYyxzZXRJZFRvcGljXT1SZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodXNlci50b2tlbiE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0VG9kYXlUb3BpY1Bvc3Qoe30sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXRUb3BVc2VyUG9zdHNMaWtlcyh7fSkudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9wVXNlcnMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXRhbGxUb3BpY3MoKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdBcnJheU9mVG9waWNzPVtdXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxyZXN1bHQuZGF0YS5kYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheU9mVG9waWNzLnB1c2goeyBcInZhbHVlXCI6IHJlc3VsdC5kYXRhLmRhdGFbMF0uX2lkLCBcImxhYmVsXCI6cmVzdWx0LmRhdGEuZGF0YVswXS50b3BpYyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25zKFsuLi5uZXdBcnJheU9mVG9waWNzXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbdXNlci50b2tlbl0pXHJcbiAgICBjb25zdCByZWZyZWNoRGF0YUZuPSgpPT57XHJcbiAgICAgICAgZ2V0VG9kYXlUb3BpY1Bvc3Qoe30sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRTZWxlY3RkSWRPZlRvcGljPShpZCk9PntcclxuICAgICAgICBnZXRTZWxlY3RlZFRvcGljUG9zdHMoe2lkVG9waWM6aWQudmFsdWV9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRJZFRvcGljKGlkLnZhbHVlKVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRvZGF5VG9waWNzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9wVXNlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbmdlVG9waWN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGVjayBvbGQgVG9waWNzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zZWxlY3RPcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9e2dldFNlbGVjdGRJZE9mVG9waWN9IGluc3RhbmNlSWQ9e1wiaWR1bmlxdWVcIn0gaWQ9e1wiZ3plZ3plZ3plXCJ9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvcFVzZXJzLm1hcCgoZSxpbmRleCk9PiA8VG9wVXNlcnMgIGluZGV4PXtpbmRleH0gcG9zdGRhdGE9e2V9IGtleT17ZS5faWR9PjwvVG9wVXNlcnM+KX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICAgICAgICB7PFBvc3RUb2RheVRvcGljIGxvZ2VkT3JOb3Q9e3VzZXIudG9rZW4hPWZhbHNlJiZ1c2VyLnRva2VuIT11bmRlZmluZWR9IHJlZnJlY2hEYXRhPXtyZWZyZWNoRGF0YUZufT48L1Bvc3RUb2RheVRvcGljPn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnB1YmxpY2F0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgoZSk9PjxQdWJsaWNhdGlvbiAgYWxsb3dBbm9ueW1lQ29tbWVudHM9e2UuYWxsb3dBbm9ueW1lQ29tbWVudHN9ICB1c2VyTmFtZT17ZS5Pd25lck9mUG9zdC51c2VyTmFtZX0gaWQ9e2UuX2lkfSAgZGF0ZT17ZS5kYXRlfSBvd25lck9mUG9zdEltYWdlPXtlLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybHx8XCJhbm9ueW1cIn0ga2V5PXtlLl9pZH0gdGV4dD17ZS5wb3N0VGV4dH0gdmlkZW89e2UucG9zdFZpZGVvIT11bmRlZmluZWQ/ZS5wb3N0VmlkZW86dW5kZWZpbmVkfSBpbWFnZT17ZS5wb3N0SW1hZ2UhPXVuZGVmaW5lZD9lLnBvc3RJbWFnZTp1bmRlZmluZWR9PjwvUHVibGljYXRpb24+KX1cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lVG9kYXlUb3BpY3NcclxuXHJcblxyXG5jb25zdCBUb3BVc2Vycz0ocHJvcHMpPT57XHJcbiAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Ub3BVc2Vyc1N0eWxlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmhlYWRlcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnVzZXJJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsPT1cImFub255bVwiP1wiL2Fub255bW91cy5wbmdcIjpwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LnVzZXJOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmtpbmd9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3JhbmtpbmcvZmlyc3QucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL3NlY29uZC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0yJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3JhbmtpbmcvdGhpcmQucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubnVtYmVyT2ZMaWtlc30+PGgyPnsocHJvcHMuaW5kZXghPTEmJnByb3BzLmluZGV4IT0yJiZwcm9wcy5pbmRleCE9MCkgJiZgdG9wICR7cHJvcHMuaW5kZXgrMX0gYH1XaXRoIHtwcm9wcy5wb3N0ZGF0YS5MaWtlcz8/MH0gTGlrZXM8L2gyPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdFRleHR9PjxwPntwcm9wcy5wb3N0ZGF0YS5wb3N0VGV4dH08L3A+PC9kaXY+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==