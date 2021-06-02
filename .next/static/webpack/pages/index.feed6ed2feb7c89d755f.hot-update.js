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
    height: 500,
    width: 550
  }),
      _React$useState10 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      heightAndWidthOfWindow = _React$useState10[0],
      setHeightAndWidthOfWindow = _React$useState10[1]; //responsive handler


  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState12 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState11, 2),
      openRankingState = _React$useState12[0],
      setOpenRanking = _React$useState12[1];

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

  var openRanking = function openRanking() {
    console.log("gzeg");
    setOpenRanking(function (e) {
      return !e;
    });
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
                lineNumber: 112,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
              lineNumber: 116,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, _this), topUsers.map(function (e, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
            index: index,
            postdata: e
          }, e._id, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 47
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 79
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.openranking,
        onClick: function onClick() {
          return openRanking();
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/ranking/ranking.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 93
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 29
      }, _this), openRankingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 130,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.selectOption,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
              onChange: getSelectdIdOfTopic,
              instanceId: "idunique",
              id: "gzegzegze",
              options: options
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 37
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 33
        }, _this), topUsers.map(function (e, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TopUsers, {
            index: index,
            postdata: e
          }, e._id, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 59
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 48
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 28
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.posts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_postTodayTopic_postTodayTopic__WEBPACK_IMPORTED_MODULE_5__["default"], {
        idTopic: idTopic,
        logedOrNot: user.token != false && user.token != undefined,
        refrechData: refrechDataFn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
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
            lineNumber: 145,
            columnNumber: 37
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 13
  }, _this);
};

_s(homeTodayTopics, "HJdP89s/4X9a+xDPPZiggCFHHHg=");

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
          lineNumber: 161,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: props.postdata.OwnerOfPost.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ranking,
        children: [props.index == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/first.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 34
        }, _this), props.index == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/second.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 34
        }, _this), props.index == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.randkingImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/ranking/third.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.numberOfLikes,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [props.index != 1 && props.index != 2 && props.index != 0 && "top ".concat(props.index + 1, " "), "With ", (_props$postdata$Likes = props.postdata.Likes) !== null && _props$postdata$Likes !== void 0 ? _props$postdata$Likes : 0, " Likes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _homeTodayTopics_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.postText,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.postdata.postText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 42
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJpZFRvcGljIiwic2V0SWRUb3BpYyIsImhlaWdodCIsIndpZHRoIiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJvcGVuUmFua2luZ1N0YXRlIiwic2V0T3BlblJhbmtpbmciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0b2tlbiIsImdldFRvZGF5VG9waWNQb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3BVc2VyUG9zdHNMaWtlcyIsIm1lc3NhZ2UiLCJnZXRhbGxUb3BpY3MiLCJuZXdBcnJheU9mVG9waWNzIiwiaSIsImxlbmd0aCIsInB1c2giLCJfaWQiLCJ0b3BpYyIsInJlZnJlY2hEYXRhRm4iLCJnZXRTZWxlY3RlZFRvcGljUG9zdHMiLCJhbGVydCIsImdldFNlbGVjdGRJZE9mVG9waWMiLCJpZCIsInZhbHVlIiwib3BlblJhbmtpbmciLCJlIiwiU3R5bGVzIiwidG9kYXlUb3BpY3MiLCJjaGFuZ2VUb3BpYyIsImhlYWRlciIsIm5hbWUiLCJzZWxlY3RPcHRpb24iLCJtYXAiLCJpbmRleCIsIm9wZW5yYW5raW5nIiwicHVibGljYXRpb25Db250YWluZXIiLCJhbGxvd0Fub255bWVDb21tZW50cyIsIk93bmVyT2ZQb3N0IiwidXNlck5hbWUiLCJkYXRlIiwiY3VycmVudEltYWdlVXJsIiwicG9zdFRleHQiLCJwb3N0VmlkZW8iLCJwb3N0SW1hZ2UiLCJUb3BVc2VycyIsInByb3BzIiwiVG9wVXNlcnNTdHlsZSIsInVzZXJJbWFnZSIsInBvc3RkYXRhIiwicmFua2luZyIsInJhbmRraW5nSW1hZ2VDb250YWluZXIiLCJudW1iZXJPZkxpa2VzIiwiTGlrZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsMEJBQ0xDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLDREQUFqQixDQURLO0FBQUE7QUFBQSxNQUNuQkMsSUFEbUI7QUFBQSxNQUNkQyxPQURjOztBQUFBLHdCQUVISiw0Q0FBSyxDQUFDSyxRQUFOLENBQWUsRUFBZixDQUZHO0FBQUE7QUFBQSxNQUVuQkMsS0FGbUI7QUFBQSxNQUViQyxRQUZhOztBQUFBLHlCQUdHUCw0Q0FBSyxDQUFDSyxRQUFOLENBQWUsRUFBZixDQUhIO0FBQUE7QUFBQSxNQUduQkcsUUFIbUI7QUFBQSxNQUdWQyxXQUhVOztBQUFBLHlCQUlDVCw0Q0FBSyxDQUFDSyxRQUFOLENBQWUsRUFBZixDQUpEO0FBQUE7QUFBQSxNQUluQkssT0FKbUI7QUFBQSxNQUlYQyxVQUpXOztBQUFBLHlCQUtDWCw0Q0FBSyxDQUFDSyxRQUFOLENBQWVPLFNBQWYsQ0FMRDtBQUFBO0FBQUEsTUFLbkJDLE9BTG1CO0FBQUEsTUFLWEMsVUFMVzs7QUFBQSx5QkFNa0NkLDRDQUFLLENBQUNLLFFBQU4sQ0FBZTtBQUFDVSxVQUFNLEVBQUMsR0FBUjtBQUFZQyxTQUFLLEVBQUM7QUFBbEIsR0FBZixDQU5sQztBQUFBO0FBQUEsTUFNbkJDLHNCQU5tQjtBQUFBLE1BTUtDLHlCQU5MLHlCQU13RTs7O0FBTnhFLDBCQU9jbEIsNENBQUssQ0FBQ0ssUUFBTixDQUFlLEtBQWYsQ0FQZDtBQUFBO0FBQUEsTUFPbkJjLGdCQVBtQjtBQUFBLE1BT0ZDLGNBUEU7O0FBUTFCcEIsOENBQUssQ0FBQ3FCLFNBQU4sQ0FBZ0IsWUFBSTtBQUVoQkgsNkJBQXlCLENBQUM7QUFBRUgsWUFBTSxFQUFFTyxNQUFNLENBQUNDLFdBQWpCO0FBQThCUCxXQUFLLEVBQUVNLE1BQU0sQ0FBQ0U7QUFBNUMsS0FBRCxDQUF6QjtBQUNILEdBSEQsRUFHRSxFQUhGO0FBSUF4Qiw4Q0FBSyxDQUFDcUIsU0FBTixDQUFnQixZQUFJO0FBQ2hCLFFBQUdsQixJQUFJLENBQUNzQixLQUFMLElBQVliLFNBQWYsRUFBeUI7QUFDckJjLDhFQUFpQixDQUFDLEVBQUQsRUFBSXZCLElBQUksQ0FBQ3NCLEtBQVQsQ0FBakIsQ0FBaUNFLElBQWpDLENBQXNDLFVBQUFDLE1BQU0sRUFBRTtBQUUxQyxZQUFHQSxNQUFNLElBQUVoQixTQUFYLEVBQXFCO0FBQ2pCTCxrQkFBUSxDQUFDLGtJQUFJcUIsTUFBTSxDQUFDQyxJQUFQLENBQVlBLElBQWpCLEVBQVI7QUFFSDtBQUNKLE9BTkQsV0FNUyxVQUFBQyxLQUFLLEVBQUU7QUFDWkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxPQVJEO0FBU0FHLGlGQUFvQixDQUFDO0FBQUNwQixlQUFPLEVBQUNEO0FBQVQsT0FBRCxDQUFwQixDQUEwQ2UsSUFBMUMsQ0FBK0MsVUFBQUMsTUFBTSxFQUFFO0FBRW5ELFlBQUdBLE1BQU0sSUFBRWhCLFNBQVgsRUFBcUI7QUFDakJILHFCQUFXLENBQUMsa0lBQUltQixNQUFNLENBQUNDLElBQVAsQ0FBWUEsSUFBakIsRUFBWDtBQUVIO0FBQ0osT0FORCxXQU1TLFVBQUFDLEtBQUssRUFBRTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDSSxPQUFsQjtBQUNILE9BUkQ7QUFTQUMsZ0ZBQVksR0FBR1IsSUFBZixDQUFvQixVQUFBQyxNQUFNLEVBQUU7QUFDeEIsWUFBR0EsTUFBTSxJQUFFaEIsU0FBWCxFQUFxQjtBQUNqQixjQUFJd0IsZ0JBQWdCLEdBQUMsRUFBckI7O0FBQ0EsZUFBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNULE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFaLENBQWlCUyxNQUEvQixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEwQztBQUN0Q0QsNEJBQWdCLENBQUNHLElBQWpCLENBQXNCO0FBQUUsdUJBQVNYLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFaLENBQWlCUSxDQUFqQixFQUFvQkcsR0FBL0I7QUFBb0MsdUJBQVFaLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFaLENBQWlCUSxDQUFqQixFQUFvQkk7QUFBaEUsYUFBdEI7QUFDSDs7QUFDRDlCLG9CQUFVLFdBQUt5QixnQkFBTCxFQUFWO0FBRUg7QUFDSixPQVRELFdBU1MsVUFBQU4sS0FBSyxFQUFFO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FYRDtBQVlIO0FBRUosR0FsQ0QsRUFrQ0UsQ0FBQzNCLElBQUksQ0FBQ3NCLEtBQU4sQ0FsQ0Y7O0FBbUNBLE1BQU1pQixhQUFhLEdBQUMsU0FBZEEsYUFBYyxHQUFJO0FBQ3BCLFFBQUc3QixPQUFPLElBQUVELFNBQVosRUFBc0I7QUFDbEIrQixrRkFBcUIsQ0FBQztBQUFDOUIsZUFBTyxFQUFDQTtBQUFULE9BQUQsRUFBbUJWLElBQUksQ0FBQ3NCLEtBQXhCLENBQXJCLENBQW9ERSxJQUFwRCxDQUF5RCxVQUFBQyxNQUFNLEVBQUU7QUFFN0QsWUFBR0EsTUFBTSxJQUFFaEIsU0FBWCxFQUFxQjtBQUNqQkwsa0JBQVEsQ0FBQyxrSUFBSXFCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQSxJQUFqQixFQUFSO0FBRUg7QUFDSixPQU5ELFdBTVMsVUFBQUMsS0FBSyxFQUFFO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FSRDtBQVNILEtBVkQsTUFVSztBQUNESiw4RUFBaUIsQ0FBQyxFQUFELEVBQUl2QixJQUFJLENBQUNzQixLQUFULENBQWpCLENBQWlDRSxJQUFqQyxDQUFzQyxVQUFBQyxNQUFNLEVBQUU7QUFDMUNyQixnQkFBUSxDQUFDLGtJQUFJcUIsTUFBTSxDQUFDQyxJQUFQLENBQVlBLElBQWpCLEVBQVI7QUFDSCxPQUZELFdBRVMsVUFBQUMsS0FBSyxFQUFFO0FBQ1pjLGFBQUssQ0FBQ2QsS0FBRCxDQUFMO0FBQ0gsT0FKRDtBQUtIO0FBRUosR0FuQkQ7O0FBb0JBLE1BQU1lLG1CQUFtQixHQUFDLFNBQXBCQSxtQkFBb0IsQ0FBQ0MsRUFBRCxFQUFNO0FBQzVCSCxnRkFBcUIsQ0FBQztBQUFDOUIsYUFBTyxFQUFDaUMsRUFBRSxDQUFDQztBQUFaLEtBQUQsRUFBb0I1QyxJQUFJLENBQUNzQixLQUF6QixDQUFyQixDQUFxREUsSUFBckQsQ0FBMEQsVUFBQUMsTUFBTSxFQUFFO0FBRTlELFVBQUdBLE1BQU0sSUFBRWhCLFNBQVgsRUFBcUI7QUFDakJMLGdCQUFRLENBQUMsa0lBQUlxQixNQUFNLENBQUNDLElBQVAsQ0FBWUEsSUFBakIsRUFBUjtBQUVIO0FBQ0osS0FORCxXQU1TLFVBQUFDLEtBQUssRUFBRTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBUkQ7QUFTQUcsK0VBQW9CLENBQUM7QUFBQ3BCLGFBQU8sRUFBQ2lDLEVBQUUsQ0FBQ0M7QUFBWixLQUFELENBQXBCLENBQXlDcEIsSUFBekMsQ0FBOEMsVUFBQUMsTUFBTSxFQUFFO0FBRWxELFVBQUdBLE1BQU0sSUFBRWhCLFNBQVgsRUFBcUI7QUFDakJILG1CQUFXLENBQUMsa0lBQUltQixNQUFNLENBQUNDLElBQVAsQ0FBWUEsSUFBakIsRUFBWDtBQUVIO0FBQ0osS0FORCxXQU1TLFVBQUFDLEtBQUssRUFBRTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBUkQ7QUFTQWhCLGNBQVUsQ0FBQ2dDLEVBQUUsQ0FBQ0MsS0FBSixDQUFWO0FBRUgsR0FyQkQ7O0FBc0JBLE1BQU1DLFdBQVcsR0FBQyxTQUFaQSxXQUFZLEdBQUk7QUFDbEJqQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FaLGtCQUFjLENBQUMsVUFBQTZCLENBQUM7QUFBQSxhQUFFLENBQUNBLENBQUg7QUFBQSxLQUFGLENBQWQ7QUFDSCxHQUhEOztBQUlBLHNCQUVRO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxXQUF2QjtBQUFBLGVBR0tsQyxzQkFBc0IsQ0FBQ0QsS0FBdkIsR0FBK0JDLHNCQUFzQixDQUFDRixNQUF0RCxnQkFBNkQ7QUFBQSw2QkFDMUQ7QUFBSyxpQkFBUyxFQUFFbUMsbUVBQU0sQ0FBQzFDLFFBQXZCO0FBQUEsZ0NBQ0E7QUFBSyxtQkFBUyxFQUFFMEMsbUVBQU0sQ0FBQ0UsV0FBdkI7QUFBQSxrQ0FDQTtBQUFLLHFCQUFTLEVBQUVGLG1FQUFNLENBQUNHLE1BQXZCO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFFSCxtRUFBTSxDQUFDSSxJQUF2QjtBQUFBLHFDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFNQTtBQUFLLHFCQUFTLEVBQUVKLG1FQUFNLENBQUNLLFlBQXZCO0FBQUEsbUNBQ0EscUVBQUMsb0RBQUQ7QUFBUSxzQkFBUSxFQUFFVixtQkFBbEI7QUFBdUMsd0JBQVUsRUFBRSxVQUFuRDtBQUErRCxnQkFBRSxFQUFFLFdBQW5FO0FBQWdGLHFCQUFPLEVBQUVuQztBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsRUFZQ0YsUUFBUSxDQUFDZ0QsR0FBVCxDQUFhLFVBQUNQLENBQUQsRUFBR1EsS0FBSDtBQUFBLDhCQUFZLHFFQUFDLFFBQUQ7QUFBVyxpQkFBSyxFQUFFQSxLQUFsQjtBQUF5QixvQkFBUSxFQUFFUjtBQUFuQyxhQUEyQ0EsQ0FBQyxDQUFDVCxHQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFaO0FBQUEsU0FBYixDQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTdELGdCQWlCVTtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRVUsbUVBQU0sQ0FBQ1EsV0FBdkI7QUFBb0MsZUFBTyxFQUFFO0FBQUEsaUJBQUlWLFdBQVcsRUFBZjtBQUFBLFNBQTdDO0FBQUEsK0JBQWdFO0FBQUssYUFBRyxFQUFFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsRUFFRTdCLGdCQUFnQixpQkFBRTtBQUFLLGlCQUFTLEVBQUUrQixtRUFBTSxDQUFDMUMsUUFBdkI7QUFBQSxnQ0FDZjtBQUFLLG1CQUFTLEVBQUUwQyxtRUFBTSxDQUFDRSxXQUF2QjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBRUYsbUVBQU0sQ0FBQ0csTUFBdkI7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUVILG1FQUFNLENBQUNJLElBQXZCO0FBQUEscUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQUsscUJBQVMsRUFBRUosbUVBQU0sQ0FBQ0ssWUFBdkI7QUFBQSxtQ0FDQSxxRUFBQyxvREFBRDtBQUFRLHNCQUFRLEVBQUVWLG1CQUFsQjtBQUF1Qyx3QkFBVSxFQUFFLFVBQW5EO0FBQStELGdCQUFFLEVBQUUsV0FBbkU7QUFBZ0YscUJBQU8sRUFBRW5DO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZSxFQVdkRixRQUFRLENBQUNnRCxHQUFULENBQWEsVUFBQ1AsQ0FBRCxFQUFHUSxLQUFIO0FBQUEsOEJBQVkscUVBQUMsUUFBRDtBQUFXLGlCQUFLLEVBQUVBLEtBQWxCO0FBQXlCLG9CQUFRLEVBQUVSO0FBQW5DLGFBQTJDQSxDQUFDLENBQUNULEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVo7QUFBQSxTQUFiLENBWGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCZixlQXFDSTtBQUFLLGVBQVMsRUFBRVUsbUVBQU0sQ0FBQzVDLEtBQXZCO0FBQUEsOEJBQ0MscUVBQUMsc0VBQUQ7QUFBZ0IsZUFBTyxFQUFFTyxPQUF6QjtBQUFtQyxrQkFBVSxFQUFFVixJQUFJLENBQUNzQixLQUFMLElBQVksS0FBWixJQUFtQnRCLElBQUksQ0FBQ3NCLEtBQUwsSUFBWWIsU0FBOUU7QUFBeUYsbUJBQVcsRUFBRThCO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVJO0FBQUssaUJBQVMsRUFBRVEsbUVBQU0sQ0FBQ1Msb0JBQXZCO0FBQUEsa0JBRUNyRCxLQUFLLENBQUNrRCxHQUFOLENBQVUsVUFBQ1AsQ0FBRDtBQUFBLDhCQUFLLHFFQUFDLGdFQUFEO0FBQWMsZ0NBQW9CLEVBQUVBLENBQUMsQ0FBQ1csb0JBQXRDO0FBQTZELG9CQUFRLEVBQUVYLENBQUMsQ0FBQ1ksV0FBRixDQUFjQyxRQUFyRjtBQUErRixjQUFFLEVBQUViLENBQUMsQ0FBQ1QsR0FBckc7QUFBMkcsZ0JBQUksRUFBRVMsQ0FBQyxDQUFDYyxJQUFuSDtBQUF5SCw0QkFBZ0IsRUFBRWQsQ0FBQyxDQUFDWSxXQUFGLENBQWNHLGVBQWQsSUFBK0IsUUFBMUs7QUFBZ00sZ0JBQUksRUFBRWYsQ0FBQyxDQUFDZ0IsUUFBeE07QUFBa04saUJBQUssRUFBRWhCLENBQUMsQ0FBQ2lCLFNBQUYsSUFBYXRELFNBQWIsR0FBdUJxQyxDQUFDLENBQUNpQixTQUF6QixHQUFtQ3RELFNBQTVQO0FBQXVRLGlCQUFLLEVBQUVxQyxDQUFDLENBQUNrQixTQUFGLElBQWF2RCxTQUFiLEdBQXVCcUMsQ0FBQyxDQUFDa0IsU0FBekIsR0FBbUN2RDtBQUFqVCxhQUF5THFDLENBQUMsQ0FBQ1QsR0FBM0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTDtBQUFBLFNBQVY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZSO0FBaURILENBOUlEOztHQUFNekMsZTs7QUFnSlNBLDhFQUFmOztBQUdBLElBQU1xRSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDQyxLQUFELEVBQVM7QUFBQTs7QUFDcEIsc0JBQU87QUFBSyxhQUFTLEVBQUVuQixtRUFBTSxDQUFDb0IsYUFBdkI7QUFBQSw0QkFDSDtBQUFLLGVBQVMsRUFBRXBCLG1FQUFNLENBQUNHLE1BQXZCO0FBQUEsOEJBRUk7QUFBSyxpQkFBUyxFQUFFSCxtRUFBTSxDQUFDcUIsU0FBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRUYsS0FBSyxDQUFDRyxRQUFOLENBQWVYLFdBQWYsQ0FBMkJHLGVBQTNCLElBQTRDLFFBQTVDLEdBQXFELGdCQUFyRCxHQUFzRUssS0FBSyxDQUFDRyxRQUFOLENBQWVYLFdBQWYsQ0FBMkJHO0FBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFLSTtBQUFLLGlCQUFTLEVBQUVkLG1FQUFNLENBQUNJLElBQXZCO0FBQUEsK0JBQ0k7QUFBQSxvQkFBS2UsS0FBSyxDQUFDRyxRQUFOLENBQWVYLFdBQWYsQ0FBMkJDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFRSTtBQUFLLGlCQUFTLEVBQUVaLG1FQUFNLENBQUN1QixPQUF2QjtBQUFBLG1CQUNLSixLQUFLLENBQUNaLEtBQU4sSUFBYSxDQUFiLGlCQUFnQjtBQUFLLG1CQUFTLEVBQUVQLG1FQUFNLENBQUN3QixzQkFBdkI7QUFBQSxpQ0FBK0M7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHJCLEVBRUtMLEtBQUssQ0FBQ1osS0FBTixJQUFhLENBQWIsaUJBQWdCO0FBQUssbUJBQVMsRUFBRVAsbUVBQU0sQ0FBQ3dCLHNCQUF2QjtBQUFBLGlDQUErQztBQUFLLGVBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGckIsRUFHS0wsS0FBSyxDQUFDWixLQUFOLElBQWEsQ0FBYixpQkFBZ0I7QUFBSyxtQkFBUyxFQUFFUCxtRUFBTSxDQUFDd0Isc0JBQXZCO0FBQUEsaUNBQStDO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQWFJO0FBQUssaUJBQVMsRUFBRXhCLG1FQUFNLENBQUN5QixhQUF2QjtBQUFBLCtCQUFzQztBQUFBLHFCQUFNTixLQUFLLENBQUNaLEtBQU4sSUFBYSxDQUFiLElBQWdCWSxLQUFLLENBQUNaLEtBQU4sSUFBYSxDQUE3QixJQUFnQ1ksS0FBSyxDQUFDWixLQUFOLElBQWEsQ0FBOUMsa0JBQTBEWSxLQUFLLENBQUNaLEtBQU4sR0FBWSxDQUF0RSxNQUFMLG9DQUFzRlksS0FBSyxDQUFDRyxRQUFOLENBQWVJLEtBQXJHLHlFQUE0RyxDQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLGVBZ0JIO0FBQUssZUFBUyxFQUFFMUIsbUVBQU0sQ0FBQ2UsUUFBdkI7QUFBQSw2QkFBaUM7QUFBQSxrQkFBSUksS0FBSyxDQUFDRyxRQUFOLENBQWVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQWtCSCxDQW5CRDs7S0FBTUcsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZWVkNmVkMmZlYjdjODlkNzU1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaG9tZVRvZGF5VG9waWNzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUG9zdFRvZGF5VG9waWMgZnJvbSAnLi4vcG9zdFRvZGF5VG9waWMvcG9zdFRvZGF5VG9waWMnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQge2dldFRvZGF5VG9waWNQb3N0LGdldFNlbGVjdGVkVG9waWNQb3N0cyxnZXRUb3BVc2VyUG9zdHNMaWtlc30gZnJvbSAnLi4vLi4vc2VydmljZXMvcG9zdCdcclxuaW1wb3J0IFB1YmxpY2F0aW9uIGZyb20gJy4uL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uJ1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcclxuaW1wb3J0IHtnZXRhbGxUb3BpY3N9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvZGF5VG9waWMnXHJcbmNvbnN0IGhvbWVUb2RheVRvcGljcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbcG9zdHMsc2V0UG9zdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcFVzZXJzLHNldFRvcFVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcHRpb25zLHNldE9wdGlvbnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2lkVG9waWMsc2V0SWRUb3BpY109UmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gICAgY29uc3QgW2hlaWdodEFuZFdpZHRoT2ZXaW5kb3csIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ddID0gUmVhY3QudXNlU3RhdGUoe2hlaWdodDo1MDAsd2lkdGg6NTUwfSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW29wZW5SYW5raW5nU3RhdGUsc2V0T3BlblJhbmtpbmddPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3coeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pIFxyXG4gICAgfSxbXSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIudG9rZW4hPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldFRvZGF5VG9waWNQb3N0KHt9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ2V0VG9wVXNlclBvc3RzTGlrZXMoe2lkVG9waWM6dW5kZWZpbmVkfSkudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9wVXNlcnMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdldGFsbFRvcGljcygpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FycmF5T2ZUb3BpY3M9W11cclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHJlc3VsdC5kYXRhLmRhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5T2ZUb3BpY3MucHVzaCh7IFwidmFsdWVcIjogcmVzdWx0LmRhdGEuZGF0YVtpXS5faWQsIFwibGFiZWxcIjpyZXN1bHQuZGF0YS5kYXRhW2ldLnRvcGljIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbnMoWy4uLm5ld0FycmF5T2ZUb3BpY3NdKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFt1c2VyLnRva2VuXSlcclxuICAgIGNvbnN0IHJlZnJlY2hEYXRhRm49KCk9PntcclxuICAgICAgICBpZihpZFRvcGljIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRTZWxlY3RlZFRvcGljUG9zdHMoe2lkVG9waWM6aWRUb3BpY30sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ2V0VG9kYXlUb3BpY1Bvc3Qoe30sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRTZWxlY3RkSWRPZlRvcGljPShpZCk9PntcclxuICAgICAgICBnZXRTZWxlY3RlZFRvcGljUG9zdHMoe2lkVG9waWM6aWQudmFsdWV9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBnZXRUb3BVc2VyUG9zdHNMaWtlcyh7aWRUb3BpYzppZC52YWx1ZX0pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICBpZihyZXN1bHQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3BVc2VycyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRJZFRvcGljKGlkLnZhbHVlKVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IG9wZW5SYW5raW5nPSgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnemVnXCIpXHJcbiAgICAgICAgc2V0T3BlblJhbmtpbmcoZT0+IWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b2RheVRvcGljc30+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHtoZWlnaHRBbmRXaWR0aE9mV2luZG93LndpZHRoID4gaGVpZ2h0QW5kV2lkdGhPZldpbmRvdy5oZWlnaHQ/PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRvcFVzZXJzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNoYW5nZVRvcGljfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2hlY2sgb2xkIFRvcGljczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc2VsZWN0T3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtnZXRTZWxlY3RkSWRPZlRvcGljfSBpbnN0YW5jZUlkPXtcImlkdW5pcXVlXCJ9IGlkPXtcImd6ZWd6ZWd6ZVwifSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BVc2Vycy5tYXAoKGUsaW5kZXgpPT4gPFRvcFVzZXJzICBpbmRleD17aW5kZXh9IHBvc3RkYXRhPXtlfSBrZXk9e2UuX2lkfT48L1RvcFVzZXJzPil9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj46PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMub3BlbnJhbmtpbmd9IG9uQ2xpY2s9eygpPT5vcGVuUmFua2luZygpfT48aW1nIHNyYz17XCIvcmFua2luZy9yYW5raW5nLnBuZ1wifS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BlblJhbmtpbmdTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BVc2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jaGFuZ2VUb3BpY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoZWNrIG9sZCBUb3BpY3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNlbGVjdE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9e2dldFNlbGVjdGRJZE9mVG9waWN9IGluc3RhbmNlSWQ9e1wiaWR1bmlxdWVcIn0gaWQ9e1wiZ3plZ3plZ3plXCJ9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3BVc2Vycy5tYXAoKGUsaW5kZXgpPT4gPFRvcFVzZXJzICBpbmRleD17aW5kZXh9IHBvc3RkYXRhPXtlfSBrZXk9e2UuX2lkfT48L1RvcFVzZXJzPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBvc3RzfT5cclxuICAgICAgICAgICAgICAgIHs8UG9zdFRvZGF5VG9waWMgaWRUb3BpYz17aWRUb3BpY30gIGxvZ2VkT3JOb3Q9e3VzZXIudG9rZW4hPWZhbHNlJiZ1c2VyLnRva2VuIT11bmRlZmluZWR9IHJlZnJlY2hEYXRhPXtyZWZyZWNoRGF0YUZufT48L1Bvc3RUb2RheVRvcGljPn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnB1YmxpY2F0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgoZSk9PjxQdWJsaWNhdGlvbiAgYWxsb3dBbm9ueW1lQ29tbWVudHM9e2UuYWxsb3dBbm9ueW1lQ29tbWVudHN9ICB1c2VyTmFtZT17ZS5Pd25lck9mUG9zdC51c2VyTmFtZX0gaWQ9e2UuX2lkfSAgZGF0ZT17ZS5kYXRlfSBvd25lck9mUG9zdEltYWdlPXtlLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybHx8XCJhbm9ueW1cIn0ga2V5PXtlLl9pZH0gdGV4dD17ZS5wb3N0VGV4dH0gdmlkZW89e2UucG9zdFZpZGVvIT11bmRlZmluZWQ/ZS5wb3N0VmlkZW86dW5kZWZpbmVkfSBpbWFnZT17ZS5wb3N0SW1hZ2UhPXVuZGVmaW5lZD9lLnBvc3RJbWFnZTp1bmRlZmluZWR9PjwvUHVibGljYXRpb24+KX1cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lVG9kYXlUb3BpY3NcclxuXHJcblxyXG5jb25zdCBUb3BVc2Vycz0ocHJvcHMpPT57XHJcbiAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Ub3BVc2Vyc1N0eWxlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmhlYWRlcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnVzZXJJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsPT1cImFub255bVwiP1wiL2Fub255bW91cy5wbmdcIjpwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LnVzZXJOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmtpbmd9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3JhbmtpbmcvZmlyc3QucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL3NlY29uZC5wbmdcIi8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmluZGV4PT0yJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJhbmRraW5nSW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPVwiL3JhbmtpbmcvdGhpcmQucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubnVtYmVyT2ZMaWtlc30+PGgyPnsocHJvcHMuaW5kZXghPTEmJnByb3BzLmluZGV4IT0yJiZwcm9wcy5pbmRleCE9MCkgJiZgdG9wICR7cHJvcHMuaW5kZXgrMX0gYH1XaXRoIHtwcm9wcy5wb3N0ZGF0YS5MaWtlcz8/MH0gTGlrZXM8L2gyPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdFRleHR9PjxwPntwcm9wcy5wb3N0ZGF0YS5wb3N0VGV4dH08L3A+PC9kaXY+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==