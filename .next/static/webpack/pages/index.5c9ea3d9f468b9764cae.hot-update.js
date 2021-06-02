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

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    width: 0,
    height: 0
  }),
      _React$useState10 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      heightAndWidthOfWindow = _React$useState10[0],
      setHeightAndWidthOfWindow = _React$useState10[1]; //responsive handler


  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    setHeightAndWidthOfWindow({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }, []);
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
    children: [heightAndWidthOfWindow.width > heightAndWidthOfWindow.height ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 108,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
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
              lineNumber: 112,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this), topUsers.map(function (e, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
            index: index,
            postdata: e
          }, e._id, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 47
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 79
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 28
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__["default"], {
        idTopic: idTopic,
        logedOrNot: user.token != false && user.token != undefined,
        refrechData: refrechDataFn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
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
            lineNumber: 129,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 13
  }, _this);
};

_s(homeTodayTopics, "VPS2eGyvTnAFQSoJ30NKsp+82Wg=");

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
          lineNumber: 145,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJpZFRvcGljIiwic2V0SWRUb3BpYyIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0b2tlbiIsImdldFRvZGF5VG9waWNQb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3BVc2VyUG9zdHNMaWtlcyIsIm1lc3NhZ2UiLCJnZXRhbGxUb3BpY3MiLCJuZXdBcnJheU9mVG9waWNzIiwiaSIsImxlbmd0aCIsInB1c2giLCJfaWQiLCJ0b3BpYyIsInJlZnJlY2hEYXRhRm4iLCJnZXRTZWxlY3RlZFRvcGljUG9zdHMiLCJhbGVydCIsImdldFNlbGVjdGRJZE9mVG9waWMiLCJpZCIsInZhbHVlIiwiU3R5bGVzIiwidG9kYXlUb3BpY3MiLCJjaGFuZ2VUb3BpYyIsImhlYWRlciIsIm5hbWUiLCJzZWxlY3RPcHRpb24iLCJtYXAiLCJlIiwiaW5kZXgiLCJwdWJsaWNhdGlvbkNvbnRhaW5lciIsImFsbG93QW5vbnltZUNvbW1lbnRzIiwiT3duZXJPZlBvc3QiLCJ1c2VyTmFtZSIsImRhdGUiLCJjdXJyZW50SW1hZ2VVcmwiLCJwb3N0VGV4dCIsInBvc3RWaWRlbyIsInBvc3RJbWFnZSIsIlRvcFVzZXJzIiwicHJvcHMiLCJUb3BVc2Vyc1N0eWxlIiwidXNlckltYWdlIiwicG9zdGRhdGEiLCJyYW5raW5nIiwicmFuZGtpbmdJbWFnZUNvbnRhaW5lciIsIm51bWJlck9mTGlrZXMiLCJMaWtlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSwwQkFDTEMsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsNERBQWpCLENBREs7QUFBQTtBQUFBLE1BQ25CQyxJQURtQjtBQUFBLE1BQ2RDLE9BRGM7O0FBQUEsd0JBRUhKLDRDQUFLLENBQUNLLFFBQU4sQ0FBZSxFQUFmLENBRkc7QUFBQTtBQUFBLE1BRW5CQyxLQUZtQjtBQUFBLE1BRWJDLFFBRmE7O0FBQUEseUJBR0dQLDRDQUFLLENBQUNLLFFBQU4sQ0FBZSxFQUFmLENBSEg7QUFBQTtBQUFBLE1BR25CRyxRQUhtQjtBQUFBLE1BR1ZDLFdBSFU7O0FBQUEseUJBSUNULDRDQUFLLENBQUNLLFFBQU4sQ0FBZSxFQUFmLENBSkQ7QUFBQTtBQUFBLE1BSW5CSyxPQUptQjtBQUFBLE1BSVhDLFVBSlc7O0FBQUEseUJBS0NYLDRDQUFLLENBQUNLLFFBQU4sQ0FBZU8sU0FBZixDQUxEO0FBQUE7QUFBQSxNQUtuQkMsT0FMbUI7QUFBQSxNQUtYQyxVQUxXOztBQUFBLHlCQU1rQ2QsNENBQUssQ0FBQ0ssUUFBTixDQUFlO0FBQUVVLFNBQUssRUFBRSxDQUFUO0FBQVlDLFVBQU0sRUFBRTtBQUFwQixHQUFmLENBTmxDO0FBQUE7QUFBQSxNQU1uQkMsc0JBTm1CO0FBQUEsTUFNS0MseUJBTkwseUJBTXlFOzs7QUFFbkdsQiw4Q0FBSyxDQUFDbUIsU0FBTixDQUFnQixZQUFJO0FBRWhCRCw2QkFBeUIsQ0FBQztBQUFFRixZQUFNLEVBQUVJLE1BQU0sQ0FBQ0MsV0FBakI7QUFBOEJOLFdBQUssRUFBRUssTUFBTSxDQUFDRTtBQUE1QyxLQUFELENBQXpCO0FBQ0gsR0FIRCxFQUdFLEVBSEY7QUFJQXRCLDhDQUFLLENBQUNtQixTQUFOLENBQWdCLFlBQUk7QUFDaEIsUUFBR2hCLElBQUksQ0FBQ29CLEtBQUwsSUFBWVgsU0FBZixFQUF5QjtBQUNyQlksOEVBQWlCLENBQUMsRUFBRCxFQUFJckIsSUFBSSxDQUFDb0IsS0FBVCxDQUFqQixDQUFpQ0UsSUFBakMsQ0FBc0MsVUFBQUMsTUFBTSxFQUFFO0FBRTFDLFlBQUdBLE1BQU0sSUFBRWQsU0FBWCxFQUFxQjtBQUNqQkwsa0JBQVEsQ0FBQyxrSUFBSW1CLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFqQixFQUFSO0FBRUg7QUFDSixPQU5ELFdBTVMsVUFBQUMsS0FBSyxFQUFFO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FSRDtBQVNBRyxpRkFBb0IsQ0FBQztBQUFDbEIsZUFBTyxFQUFDRDtBQUFULE9BQUQsQ0FBcEIsQ0FBMENhLElBQTFDLENBQStDLFVBQUFDLE1BQU0sRUFBRTtBQUVuRCxZQUFHQSxNQUFNLElBQUVkLFNBQVgsRUFBcUI7QUFDakJILHFCQUFXLENBQUMsa0lBQUlpQixNQUFNLENBQUNDLElBQVAsQ0FBWUEsSUFBakIsRUFBWDtBQUVIO0FBQ0osT0FORCxXQU1TLFVBQUFDLEtBQUssRUFBRTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDSSxPQUFsQjtBQUNILE9BUkQ7QUFTQUMsZ0ZBQVksR0FBR1IsSUFBZixDQUFvQixVQUFBQyxNQUFNLEVBQUU7QUFDeEIsWUFBR0EsTUFBTSxJQUFFZCxTQUFYLEVBQXFCO0FBQ2pCLGNBQUlzQixnQkFBZ0IsR0FBQyxFQUFyQjs7QUFDQSxlQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ1QsTUFBTSxDQUFDQyxJQUFQLENBQVlBLElBQVosQ0FBaUJTLE1BQS9CLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTBDO0FBQ3RDRCw0QkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0I7QUFBRSx1QkFBU1gsTUFBTSxDQUFDQyxJQUFQLENBQVlBLElBQVosQ0FBaUJRLENBQWpCLEVBQW9CRyxHQUEvQjtBQUFvQyx1QkFBUVosTUFBTSxDQUFDQyxJQUFQLENBQVlBLElBQVosQ0FBaUJRLENBQWpCLEVBQW9CSTtBQUFoRSxhQUF0QjtBQUNIOztBQUNENUIsb0JBQVUsV0FBS3VCLGdCQUFMLEVBQVY7QUFFSDtBQUNKLE9BVEQsV0FTUyxVQUFBTixLQUFLLEVBQUU7QUFDWkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxPQVhEO0FBWUg7QUFFSixHQWxDRCxFQWtDRSxDQUFDekIsSUFBSSxDQUFDb0IsS0FBTixDQWxDRjs7QUFtQ0EsTUFBTWlCLGFBQWEsR0FBQyxTQUFkQSxhQUFjLEdBQUk7QUFDcEIsUUFBRzNCLE9BQU8sSUFBRUQsU0FBWixFQUFzQjtBQUNsQjZCLGtGQUFxQixDQUFDO0FBQUM1QixlQUFPLEVBQUNBO0FBQVQsT0FBRCxFQUFtQlYsSUFBSSxDQUFDb0IsS0FBeEIsQ0FBckIsQ0FBb0RFLElBQXBELENBQXlELFVBQUFDLE1BQU0sRUFBRTtBQUU3RCxZQUFHQSxNQUFNLElBQUVkLFNBQVgsRUFBcUI7QUFDakJMLGtCQUFRLENBQUMsa0lBQUltQixNQUFNLENBQUNDLElBQVAsQ0FBWUEsSUFBakIsRUFBUjtBQUVIO0FBQ0osT0FORCxXQU1TLFVBQUFDLEtBQUssRUFBRTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILE9BUkQ7QUFTSCxLQVZELE1BVUs7QUFDREosOEVBQWlCLENBQUMsRUFBRCxFQUFJckIsSUFBSSxDQUFDb0IsS0FBVCxDQUFqQixDQUFpQ0UsSUFBakMsQ0FBc0MsVUFBQUMsTUFBTSxFQUFFO0FBQzFDbkIsZ0JBQVEsQ0FBQyxrSUFBSW1CLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFqQixFQUFSO0FBQ0gsT0FGRCxXQUVTLFVBQUFDLEtBQUssRUFBRTtBQUNaYyxhQUFLLENBQUNkLEtBQUQsQ0FBTDtBQUNILE9BSkQ7QUFLSDtBQUVKLEdBbkJEOztBQW9CQSxNQUFNZSxtQkFBbUIsR0FBQyxTQUFwQkEsbUJBQW9CLENBQUNDLEVBQUQsRUFBTTtBQUM1QkgsZ0ZBQXFCLENBQUM7QUFBQzVCLGFBQU8sRUFBQytCLEVBQUUsQ0FBQ0M7QUFBWixLQUFELEVBQW9CMUMsSUFBSSxDQUFDb0IsS0FBekIsQ0FBckIsQ0FBcURFLElBQXJELENBQTBELFVBQUFDLE1BQU0sRUFBRTtBQUU5RCxVQUFHQSxNQUFNLElBQUVkLFNBQVgsRUFBcUI7QUFDakJMLGdCQUFRLENBQUMsa0lBQUltQixNQUFNLENBQUNDLElBQVAsQ0FBWUEsSUFBakIsRUFBUjtBQUVIO0FBQ0osS0FORCxXQU1TLFVBQUFDLEtBQUssRUFBRTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBUkQ7QUFTQUcsK0VBQW9CLENBQUM7QUFBQ2xCLGFBQU8sRUFBQytCLEVBQUUsQ0FBQ0M7QUFBWixLQUFELENBQXBCLENBQXlDcEIsSUFBekMsQ0FBOEMsVUFBQUMsTUFBTSxFQUFFO0FBRWxELFVBQUdBLE1BQU0sSUFBRWQsU0FBWCxFQUFxQjtBQUNqQkgsbUJBQVcsQ0FBQyxrSUFBSWlCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFqQixFQUFYO0FBRUg7QUFDSixLQU5ELFdBTVMsVUFBQUMsS0FBSyxFQUFFO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsS0FSRDtBQVNBZCxjQUFVLENBQUM4QixFQUFFLENBQUNDLEtBQUosQ0FBVjtBQUVILEdBckJEOztBQXNCQSxzQkFFUTtBQUFLLGFBQVMsRUFBRUMsbUVBQU0sQ0FBQ0MsV0FBdkI7QUFBQSxlQUdLOUIsc0JBQXNCLENBQUNGLEtBQXZCLEdBQStCRSxzQkFBc0IsQ0FBQ0QsTUFBdEQsZ0JBQTZEO0FBQUEsNkJBQzFEO0FBQUssaUJBQVMsRUFBRThCLG1FQUFNLENBQUN0QyxRQUF2QjtBQUFBLGdDQUNBO0FBQUssbUJBQVMsRUFBRXNDLG1FQUFNLENBQUNFLFdBQXZCO0FBQUEsa0NBQ0E7QUFBSyxxQkFBUyxFQUFFRixtRUFBTSxDQUFDRyxNQUF2QjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBRUgsbUVBQU0sQ0FBQ0ksSUFBdkI7QUFBQSxxQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBTUE7QUFBSyxxQkFBUyxFQUFFSixtRUFBTSxDQUFDSyxZQUF2QjtBQUFBLG1DQUNBLHFFQUFDLG9EQUFEO0FBQVEsc0JBQVEsRUFBRVIsbUJBQWxCO0FBQXVDLHdCQUFVLEVBQUUsVUFBbkQ7QUFBK0QsZ0JBQUUsRUFBRSxXQUFuRTtBQUFnRixxQkFBTyxFQUFFakM7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBWUNGLFFBQVEsQ0FBQzRDLEdBQVQsQ0FBYSxVQUFDQyxDQUFELEVBQUdDLEtBQUg7QUFBQSw4QkFBWSxxRUFBQyxRQUFEO0FBQVcsaUJBQUssRUFBRUEsS0FBbEI7QUFBeUIsb0JBQVEsRUFBRUQ7QUFBbkMsYUFBMkNBLENBQUMsQ0FBQ2YsR0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWjtBQUFBLFNBQWIsQ0FaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE3RCxnQkFpQlU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCZixlQXlCSTtBQUFLLGVBQVMsRUFBRVEsbUVBQU0sQ0FBQ3hDLEtBQXZCO0FBQUEsOEJBQ0MscUVBQUMsc0VBQUQ7QUFBZ0IsZUFBTyxFQUFFTyxPQUF6QjtBQUFtQyxrQkFBVSxFQUFFVixJQUFJLENBQUNvQixLQUFMLElBQVksS0FBWixJQUFtQnBCLElBQUksQ0FBQ29CLEtBQUwsSUFBWVgsU0FBOUU7QUFBeUYsbUJBQVcsRUFBRTRCO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVJO0FBQUssaUJBQVMsRUFBRU0sbUVBQU0sQ0FBQ1Msb0JBQXZCO0FBQUEsa0JBRUNqRCxLQUFLLENBQUM4QyxHQUFOLENBQVUsVUFBQ0MsQ0FBRDtBQUFBLDhCQUFLLHFFQUFDLGdFQUFEO0FBQWMsZ0NBQW9CLEVBQUVBLENBQUMsQ0FBQ0csb0JBQXRDO0FBQTZELG9CQUFRLEVBQUVILENBQUMsQ0FBQ0ksV0FBRixDQUFjQyxRQUFyRjtBQUErRixjQUFFLEVBQUVMLENBQUMsQ0FBQ2YsR0FBckc7QUFBMkcsZ0JBQUksRUFBRWUsQ0FBQyxDQUFDTSxJQUFuSDtBQUF5SCw0QkFBZ0IsRUFBRU4sQ0FBQyxDQUFDSSxXQUFGLENBQWNHLGVBQWQsSUFBK0IsUUFBMUs7QUFBZ00sZ0JBQUksRUFBRVAsQ0FBQyxDQUFDUSxRQUF4TTtBQUFrTixpQkFBSyxFQUFFUixDQUFDLENBQUNTLFNBQUYsSUFBYWxELFNBQWIsR0FBdUJ5QyxDQUFDLENBQUNTLFNBQXpCLEdBQW1DbEQsU0FBNVA7QUFBdVEsaUJBQUssRUFBRXlDLENBQUMsQ0FBQ1UsU0FBRixJQUFhbkQsU0FBYixHQUF1QnlDLENBQUMsQ0FBQ1UsU0FBekIsR0FBbUNuRDtBQUFqVCxhQUF5THlDLENBQUMsQ0FBQ2YsR0FBM0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTDtBQUFBLFNBQVY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZSO0FBcUNILENBOUhEOztHQUFNdkMsZTs7QUFnSVNBLDhFQUFmOztBQUdBLElBQU1pRSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDQyxLQUFELEVBQVM7QUFBQTs7QUFDcEIsc0JBQU87QUFBSyxhQUFTLEVBQUVuQixtRUFBTSxDQUFDb0IsYUFBdkI7QUFBQSw0QkFDSDtBQUFLLGVBQVMsRUFBRXBCLG1FQUFNLENBQUNHLE1BQXZCO0FBQUEsOEJBRUk7QUFBSyxpQkFBUyxFQUFFSCxtRUFBTSxDQUFDcUIsU0FBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRUYsS0FBSyxDQUFDRyxRQUFOLENBQWVYLFdBQWYsQ0FBMkJHLGVBQTNCLElBQTRDLFFBQTVDLEdBQXFELGdCQUFyRCxHQUFzRUssS0FBSyxDQUFDRyxRQUFOLENBQWVYLFdBQWYsQ0FBMkJHO0FBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFLSTtBQUFLLGlCQUFTLEVBQUVkLG1FQUFNLENBQUNJLElBQXZCO0FBQUEsK0JBQ0k7QUFBQSxvQkFBS2UsS0FBSyxDQUFDRyxRQUFOLENBQWVYLFdBQWYsQ0FBMkJDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFRSTtBQUFLLGlCQUFTLEVBQUVaLG1FQUFNLENBQUN1QixPQUF2QjtBQUFBLG1CQUNLSixLQUFLLENBQUNYLEtBQU4sSUFBYSxDQUFiLGlCQUFnQjtBQUFLLG1CQUFTLEVBQUVSLG1FQUFNLENBQUN3QixzQkFBdkI7QUFBQSxpQ0FBK0M7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHJCLEVBRUtMLEtBQUssQ0FBQ1gsS0FBTixJQUFhLENBQWIsaUJBQWdCO0FBQUssbUJBQVMsRUFBRVIsbUVBQU0sQ0FBQ3dCLHNCQUF2QjtBQUFBLGlDQUErQztBQUFLLGVBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGckIsRUFHS0wsS0FBSyxDQUFDWCxLQUFOLElBQWEsQ0FBYixpQkFBZ0I7QUFBSyxtQkFBUyxFQUFFUixtRUFBTSxDQUFDd0Isc0JBQXZCO0FBQUEsaUNBQStDO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQWFJO0FBQUssaUJBQVMsRUFBRXhCLG1FQUFNLENBQUN5QixhQUF2QjtBQUFBLCtCQUFzQztBQUFBLHFCQUFNTixLQUFLLENBQUNYLEtBQU4sSUFBYSxDQUFiLElBQWdCVyxLQUFLLENBQUNYLEtBQU4sSUFBYSxDQUE3QixJQUFnQ1csS0FBSyxDQUFDWCxLQUFOLElBQWEsQ0FBOUMsa0JBQTBEVyxLQUFLLENBQUNYLEtBQU4sR0FBWSxDQUF0RSxNQUFMLG9DQUFzRlcsS0FBSyxDQUFDRyxRQUFOLENBQWVJLEtBQXJHLHlFQUE0RyxDQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLGVBZ0JIO0FBQUssZUFBUyxFQUFFMUIsbUVBQU0sQ0FBQ2UsUUFBdkI7QUFBQSw2QkFBaUM7QUFBQSxrQkFBSUksS0FBSyxDQUFDRyxRQUFOLENBQWVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWtCSCxDQW5CRDs7S0FBTUcsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YzllYTNkOWY0NjhiOTc2NGNhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaG9tZVRvZGF5VG9waWNzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUG9zdFRvZGF5VG9waWMgZnJvbSAnLi4vcG9zdFRvZGF5VG9waWMvcG9zdFRvZGF5VG9waWMnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQge2dldFRvZGF5VG9waWNQb3N0LGdldFNlbGVjdGVkVG9waWNQb3N0cyxnZXRUb3BVc2VyUG9zdHNMaWtlc30gZnJvbSAnLi4vLi4vc2VydmljZXMvcG9zdCdcclxuaW1wb3J0IFB1YmxpY2F0aW9uIGZyb20gJy4uL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uJ1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcclxuaW1wb3J0IHtnZXRhbGxUb3BpY3N9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvZGF5VG9waWMnXHJcbmNvbnN0IGhvbWVUb2RheVRvcGljcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbcG9zdHMsc2V0UG9zdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcFVzZXJzLHNldFRvcFVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcHRpb25zLHNldE9wdGlvbnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2lkVG9waWMsc2V0SWRUb3BpY109UmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gICAgY29uc3QgW2hlaWdodEFuZFdpZHRoT2ZXaW5kb3csIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ddID0gUmVhY3QudXNlU3RhdGUoeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgc2V0SGVpZ2h0QW5kV2lkdGhPZldpbmRvdyh7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfSkgXHJcbiAgICB9LFtdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodXNlci50b2tlbiE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0VG9kYXlUb3BpY1Bvc3Qoe30sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXRUb3BVc2VyUG9zdHNMaWtlcyh7aWRUb3BpYzp1bmRlZmluZWR9KS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb3BVc2VycyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ2V0YWxsVG9waWNzKCkudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QXJyYXlPZlRvcGljcz1bXVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8cmVzdWx0LmRhdGEuZGF0YS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXlPZlRvcGljcy5wdXNoKHsgXCJ2YWx1ZVwiOiByZXN1bHQuZGF0YS5kYXRhW2ldLl9pZCwgXCJsYWJlbFwiOnJlc3VsdC5kYXRhLmRhdGFbaV0udG9waWMgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucyhbLi4ubmV3QXJyYXlPZlRvcGljc10pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sW3VzZXIudG9rZW5dKVxyXG4gICAgY29uc3QgcmVmcmVjaERhdGFGbj0oKT0+e1xyXG4gICAgICAgIGlmKGlkVG9waWMhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldFNlbGVjdGVkVG9waWNQb3N0cyh7aWRUb3BpYzppZFRvcGljfSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBnZXRUb2RheVRvcGljUG9zdCh7fSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGdldFNlbGVjdGRJZE9mVG9waWM9KGlkKT0+e1xyXG4gICAgICAgIGdldFNlbGVjdGVkVG9waWNQb3N0cyh7aWRUb3BpYzppZC52YWx1ZX0sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIGdldFRvcFVzZXJQb3N0c0xpa2VzKHtpZFRvcGljOmlkLnZhbHVlfSkudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHNldFRvcFVzZXJzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldElkVG9waWMoaWQudmFsdWUpXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9kYXlUb3BpY3N9PlxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB7aGVpZ2h0QW5kV2lkdGhPZldpbmRvdy53aWR0aCA+IGhlaWdodEFuZFdpZHRoT2ZXaW5kb3cuaGVpZ2h0PzxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BVc2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jaGFuZ2VUb3BpY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoZWNrIG9sZCBUb3BpY3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNlbGVjdE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17Z2V0U2VsZWN0ZElkT2ZUb3BpY30gaW5zdGFuY2VJZD17XCJpZHVuaXF1ZVwifSBpZD17XCJnemVnemVnemVcIn0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wVXNlcnMubWFwKChlLGluZGV4KT0+IDxUb3BVc2VycyAgaW5kZXg9e2luZGV4fSBwb3N0ZGF0YT17ZX0ga2V5PXtlLl9pZH0+PC9Ub3BVc2Vycz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+OjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdHN9PlxyXG4gICAgICAgICAgICAgICAgezxQb3N0VG9kYXlUb3BpYyBpZFRvcGljPXtpZFRvcGljfSAgbG9nZWRPck5vdD17dXNlci50b2tlbiE9ZmFsc2UmJnVzZXIudG9rZW4hPXVuZGVmaW5lZH0gcmVmcmVjaERhdGE9e3JlZnJlY2hEYXRhRm59PjwvUG9zdFRvZGF5VG9waWM+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucHVibGljYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChlKT0+PFB1YmxpY2F0aW9uICBhbGxvd0Fub255bWVDb21tZW50cz17ZS5hbGxvd0Fub255bWVDb21tZW50c30gIHVzZXJOYW1lPXtlLk93bmVyT2ZQb3N0LnVzZXJOYW1lfSBpZD17ZS5faWR9ICBkYXRlPXtlLmRhdGV9IG93bmVyT2ZQb3N0SW1hZ2U9e2UuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsfHxcImFub255bVwifSBrZXk9e2UuX2lkfSB0ZXh0PXtlLnBvc3RUZXh0fSB2aWRlbz17ZS5wb3N0VmlkZW8hPXVuZGVmaW5lZD9lLnBvc3RWaWRlbzp1bmRlZmluZWR9IGltYWdlPXtlLnBvc3RJbWFnZSE9dW5kZWZpbmVkP2UucG9zdEltYWdlOnVuZGVmaW5lZH0+PC9QdWJsaWNhdGlvbj4pfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVUb2RheVRvcGljc1xyXG5cclxuXHJcbmNvbnN0IFRvcFVzZXJzPShwcm9wcyk9PntcclxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLlRvcFVzZXJzU3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyfT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudXNlckltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmw9PVwiYW5vbnltXCI/XCIvYW5vbnltb3VzLnBuZ1wiOnByb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxoMj57cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QudXNlck5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFua2luZ30+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTAmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy9maXJzdC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0xJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3Jhbmtpbmcvc2Vjb25kLnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTImJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy90aGlyZC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5udW1iZXJPZkxpa2VzfT48aDI+eyhwcm9wcy5pbmRleCE9MSYmcHJvcHMuaW5kZXghPTImJnByb3BzLmluZGV4IT0wKSAmJmB0b3AgJHtwcm9wcy5pbmRleCsxfSBgfVdpdGgge3Byb3BzLnBvc3RkYXRhLkxpa2VzPz8wfSBMaWtlczwvaDI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0VGV4dH0+PHA+e3Byb3BzLnBvc3RkYXRhLnBvc3RUZXh0fTwvcD48L2Rpdj5cclxuICAgIDwvZGl2PilcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9