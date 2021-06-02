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
      Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getTopUserPostsLikes"])({
        idTopic: undefined
      }).then(function (result) {
        if (result != undefined) {
          setTopUsers(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
        }
      })["catch"](function (error) {
        console.log(error.message);
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
    if (idTopic != undefined) {
      Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getSelectedTopicPosts"])({
        idTopic: idTopic
      }, user.token).then(function (result) {
        if (result != undefined) {
          setPosts(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
        }
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      Object(_services_post__WEBPACK_IMPORTED_MODULE_7__["getTodayTopicPost"])({}, user.token).then(function (result) {
        setPosts(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result.data.data));
      })["catch"](function (error) {
        alert(error);
      });
    }
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
              lineNumber: 100,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
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
            lineNumber: 104,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }, _this), topUsers.map(function (e, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
          index: index,
          postdata: e
        }, e._id, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 47
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__["default"], {
        idTopic: idTopic,
        logedOrNot: user.token != false && user.token != undefined,
        refrechData: refrechDataFn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
            lineNumber: 115,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
          lineNumber: 131,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJpZFRvcGljIiwic2V0SWRUb3BpYyIsInVzZUVmZmVjdCIsInRva2VuIiwiZ2V0VG9kYXlUb3BpY1Bvc3QiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldFRvcFVzZXJQb3N0c0xpa2VzIiwibWVzc2FnZSIsImdldGFsbFRvcGljcyIsIm5ld0FycmF5T2ZUb3BpY3MiLCJpIiwibGVuZ3RoIiwicHVzaCIsIl9pZCIsInRvcGljIiwicmVmcmVjaERhdGFGbiIsImdldFNlbGVjdGVkVG9waWNQb3N0cyIsImFsZXJ0IiwiZ2V0U2VsZWN0ZElkT2ZUb3BpYyIsImlkIiwidmFsdWUiLCJTdHlsZXMiLCJ0b2RheVRvcGljcyIsImNoYW5nZVRvcGljIiwiaGVhZGVyIiwibmFtZSIsInNlbGVjdE9wdGlvbiIsIm1hcCIsImUiLCJpbmRleCIsInB1YmxpY2F0aW9uQ29udGFpbmVyIiwiYWxsb3dBbm9ueW1lQ29tbWVudHMiLCJPd25lck9mUG9zdCIsInVzZXJOYW1lIiwiZGF0ZSIsImN1cnJlbnRJbWFnZVVybCIsInBvc3RUZXh0IiwicG9zdFZpZGVvIiwicG9zdEltYWdlIiwiVG9wVXNlcnMiLCJwcm9wcyIsIlRvcFVzZXJzU3R5bGUiLCJ1c2VySW1hZ2UiLCJwb3N0ZGF0YSIsInJhbmtpbmciLCJyYW5ka2luZ0ltYWdlQ29udGFpbmVyIiwibnVtYmVyT2ZMaWtlcyIsIkxpa2VzIl0sIm1hcHBpbmdzIjoi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QUFrQkgsQ0FuQkQ7O0tBQU1HLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTgyY2I1YzIwZGYxOTlmNjQ4YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2hvbWVUb2RheVRvcGljcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFBvc3RUb2RheVRvcGljIGZyb20gJy4uL3Bvc3RUb2RheVRvcGljL3Bvc3RUb2RheVRvcGljJ1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IHtnZXRUb2RheVRvcGljUG9zdCxnZXRTZWxlY3RlZFRvcGljUG9zdHMsZ2V0VG9wVXNlclBvc3RzTGlrZXN9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bvc3QnXHJcbmltcG9ydCBQdWJsaWNhdGlvbiBmcm9tICcuLi9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbidcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCB7Z2V0YWxsVG9waWNzfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2RheVRvcGljJ1xyXG5jb25zdCBob21lVG9kYXlUb3BpY3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3Bvc3RzLHNldFBvc3RzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3BVc2VycyxzZXRUb3BVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3B0aW9ucyxzZXRPcHRpb25zXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpZFRvcGljLHNldElkVG9waWNdPVJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLnRva2VuIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRUb2RheVRvcGljUG9zdCh7fSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdldFRvcFVzZXJQb3N0c0xpa2VzKHtpZFRvcGljOnVuZGVmaW5lZH0pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvcFVzZXJzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXRhbGxUb3BpY3MoKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdBcnJheU9mVG9waWNzPVtdXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxyZXN1bHQuZGF0YS5kYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheU9mVG9waWNzLnB1c2goeyBcInZhbHVlXCI6IHJlc3VsdC5kYXRhLmRhdGFbaV0uX2lkLCBcImxhYmVsXCI6cmVzdWx0LmRhdGEuZGF0YVtpXS50b3BpYyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25zKFsuLi5uZXdBcnJheU9mVG9waWNzXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbdXNlci50b2tlbl0pXHJcbiAgICBjb25zdCByZWZyZWNoRGF0YUZuPSgpPT57XHJcbiAgICAgICAgaWYoaWRUb3BpYyE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRUb3BpY1Bvc3RzKHtpZFRvcGljOmlkVG9waWN9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGdldFRvZGF5VG9waWNQb3N0KHt9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0U2VsZWN0ZElkT2ZUb3BpYz0oaWQpPT57XHJcbiAgICAgICAgZ2V0U2VsZWN0ZWRUb3BpY1Bvc3RzKHtpZFRvcGljOmlkLnZhbHVlfSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2V0VG9wVXNlclBvc3RzTGlrZXMoe2lkVG9waWM6aWQudmFsdWV9KS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0VG9wVXNlcnMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0SWRUb3BpYyhpZC52YWx1ZSlcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b2RheVRvcGljc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRvcFVzZXJzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNoYW5nZVRvcGljfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2hlY2sgb2xkIFRvcGljczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc2VsZWN0T3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtnZXRTZWxlY3RkSWRPZlRvcGljfSBpbnN0YW5jZUlkPXtcImlkdW5pcXVlXCJ9IGlkPXtcImd6ZWd6ZWd6ZVwifSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BVc2Vycy5tYXAoKGUsaW5kZXgpPT4gPFRvcFVzZXJzICBpbmRleD17aW5kZXh9IHBvc3RkYXRhPXtlfSBrZXk9e2UuX2lkfT48L1RvcFVzZXJzPil9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdHN9PlxyXG4gICAgICAgICAgICAgICAgezxQb3N0VG9kYXlUb3BpYyBpZFRvcGljPXtpZFRvcGljfSAgbG9nZWRPck5vdD17dXNlci50b2tlbiE9ZmFsc2UmJnVzZXIudG9rZW4hPXVuZGVmaW5lZH0gcmVmcmVjaERhdGE9e3JlZnJlY2hEYXRhRm59PjwvUG9zdFRvZGF5VG9waWM+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucHVibGljYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChlKT0+PFB1YmxpY2F0aW9uICBhbGxvd0Fub255bWVDb21tZW50cz17ZS5hbGxvd0Fub255bWVDb21tZW50c30gIHVzZXJOYW1lPXtlLk93bmVyT2ZQb3N0LnVzZXJOYW1lfSBpZD17ZS5faWR9ICBkYXRlPXtlLmRhdGV9IG93bmVyT2ZQb3N0SW1hZ2U9e2UuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsfHxcImFub255bVwifSBrZXk9e2UuX2lkfSB0ZXh0PXtlLnBvc3RUZXh0fSB2aWRlbz17ZS5wb3N0VmlkZW8hPXVuZGVmaW5lZD9lLnBvc3RWaWRlbzp1bmRlZmluZWR9IGltYWdlPXtlLnBvc3RJbWFnZSE9dW5kZWZpbmVkP2UucG9zdEltYWdlOnVuZGVmaW5lZH0+PC9QdWJsaWNhdGlvbj4pfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVUb2RheVRvcGljc1xyXG5cclxuXHJcbmNvbnN0IFRvcFVzZXJzPShwcm9wcyk9PntcclxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLlRvcFVzZXJzU3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyfT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudXNlckltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmw9PVwiYW5vbnltXCI/XCIvYW5vbnltb3VzLnBuZ1wiOnByb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxoMj57cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QudXNlck5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFua2luZ30+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTAmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy9maXJzdC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0xJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3Jhbmtpbmcvc2Vjb25kLnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTImJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy90aGlyZC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5udW1iZXJPZkxpa2VzfT48aDI+eyhwcm9wcy5pbmRleCE9MSYmcHJvcHMuaW5kZXghPTImJnByb3BzLmluZGV4IT0wKSAmJmB0b3AgJHtwcm9wcy5pbmRleCsxfSBgfVdpdGgge3Byb3BzLnBvc3RkYXRhLkxpa2VzPz8wfSBMaWtlczwvaDI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0VGV4dH0+PHA+e3Byb3BzLnBvc3RkYXRhLnBvc3RUZXh0fTwvcD48L2Rpdj5cclxuICAgIDwvZGl2PilcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9