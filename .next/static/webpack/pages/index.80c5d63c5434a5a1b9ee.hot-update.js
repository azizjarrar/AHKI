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


  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    height: 500,
    width: 550
  }),
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

_s(homeTodayTopics, "0+l89mAbLCBV3LDJjVCERA+CjAI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lVG9kYXlUb3BpY3MvaG9tZVRvZGF5VG9waWNzLmpzIl0sIm5hbWVzIjpbImhvbWVUb2RheVRvcGljcyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJpZFRvcGljIiwic2V0SWRUb3BpYyIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJvcGVuUmFua2luZ1N0YXRlIiwic2V0T3BlblJhbmtpbmciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0b2tlbiIsImdldFRvZGF5VG9waWNQb3N0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb3BVc2VyUG9zdHNMaWtlcyIsIm1lc3NhZ2UiLCJnZXRhbGxUb3BpY3MiLCJuZXdBcnJheU9mVG9waWNzIiwiaSIsImxlbmd0aCIsInB1c2giLCJfaWQiLCJ0b3BpYyIsInJlZnJlY2hEYXRhRm4iLCJnZXRTZWxlY3RlZFRvcGljUG9zdHMiLCJhbGVydCIsImdldFNlbGVjdGRJZE9mVG9waWMiLCJpZCIsInZhbHVlIiwib3BlblJhbmtpbmciLCJlIiwiU3R5bGVzIiwidG9kYXlUb3BpY3MiLCJjaGFuZ2VUb3BpYyIsImhlYWRlciIsIm5hbWUiLCJzZWxlY3RPcHRpb24iLCJtYXAiLCJpbmRleCIsIm9wZW5yYW5raW5nIiwicHVibGljYXRpb25Db250YWluZXIiLCJhbGxvd0Fub255bWVDb21tZW50cyIsIk93bmVyT2ZQb3N0IiwidXNlck5hbWUiLCJkYXRlIiwiY3VycmVudEltYWdlVXJsIiwicG9zdFRleHQiLCJwb3N0VmlkZW8iLCJwb3N0SW1hZ2UiLCJUb3BVc2VycyIsInByb3BzIiwiVG9wVXNlcnNTdHlsZSIsInVzZXJJbWFnZSIsInBvc3RkYXRhIiwicmFua2luZyIsInJhbmRraW5nSW1hZ2VDb250YWluZXIiLCJudW1iZXJPZkxpa2VzIiwiTGlrZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsMEJBQ0xDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLDREQUFqQixDQURLO0FBQUE7QUFBQSxNQUNuQkMsSUFEbUI7QUFBQSxNQUNkQyxPQURjOztBQUFBLHdCQUVISiw0Q0FBSyxDQUFDSyxRQUFOLENBQWUsRUFBZixDQUZHO0FBQUE7QUFBQSxNQUVuQkMsS0FGbUI7QUFBQSxNQUViQyxRQUZhOztBQUFBLHlCQUdHUCw0Q0FBSyxDQUFDSyxRQUFOLENBQWUsRUFBZixDQUhIO0FBQUE7QUFBQSxNQUduQkcsUUFIbUI7QUFBQSxNQUdWQyxXQUhVOztBQUFBLHlCQUlDVCw0Q0FBSyxDQUFDSyxRQUFOLENBQWUsRUFBZixDQUpEO0FBQUE7QUFBQSxNQUluQkssT0FKbUI7QUFBQSxNQUlYQyxVQUpXOztBQUFBLHlCQUtDWCw0Q0FBSyxDQUFDSyxRQUFOLENBQWVPLFNBQWYsQ0FMRDtBQUFBO0FBQUEsTUFLbkJDLE9BTG1CO0FBQUEsTUFLWEMsVUFMVzs7QUFBQSx5QkFNa0NkLDRDQUFLLENBQUNLLFFBQU4sQ0FBZTtBQUFFVSxTQUFLLEVBQUUsQ0FBVDtBQUFZQyxVQUFNLEVBQUU7QUFBcEIsR0FBZixDQU5sQztBQUFBO0FBQUEsTUFNbkJDLHNCQU5tQjtBQUFBLE1BTUtDLHlCQU5MLHlCQU15RTs7O0FBTnpFLDBCQU9jbEIsNENBQUssQ0FBQ0ssUUFBTixDQUFlO0FBQUNXLFVBQU0s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QUEsYUFoQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFrQkgsQ0FuQkQ7O0tBQU1HLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODBjNWQ2M2M1NDM0YTVhMWI5ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2hvbWVUb2RheVRvcGljcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFBvc3RUb2RheVRvcGljIGZyb20gJy4uL3Bvc3RUb2RheVRvcGljL3Bvc3RUb2RheVRvcGljJ1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IHtnZXRUb2RheVRvcGljUG9zdCxnZXRTZWxlY3RlZFRvcGljUG9zdHMsZ2V0VG9wVXNlclBvc3RzTGlrZXN9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bvc3QnXHJcbmltcG9ydCBQdWJsaWNhdGlvbiBmcm9tICcuLi9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbidcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCB7Z2V0YWxsVG9waWNzfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2RheVRvcGljJ1xyXG5jb25zdCBob21lVG9kYXlUb3BpY3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3Bvc3RzLHNldFBvc3RzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3BVc2VycyxzZXRUb3BVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3B0aW9ucyxzZXRPcHRpb25zXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpZFRvcGljLHNldElkVG9waWNdPVJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZClcclxuICAgIGNvbnN0IFtoZWlnaHRBbmRXaWR0aE9mV2luZG93LCBzZXRIZWlnaHRBbmRXaWR0aE9mV2luZG93XSA9IFJlYWN0LnVzZVN0YXRlKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbb3BlblJhbmtpbmdTdGF0ZSxzZXRPcGVuUmFua2luZ109UmVhY3QudXNlU3RhdGUoe2hlaWdodDo1MDAsd2lkdGg6NTUwfSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBzZXRIZWlnaHRBbmRXaWR0aE9mV2luZG93KHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KSBcclxuICAgIH0sW10pXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLnRva2VuIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRUb2RheVRvcGljUG9zdCh7fSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdldFRvcFVzZXJQb3N0c0xpa2VzKHtpZFRvcGljOnVuZGVmaW5lZH0pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvcFVzZXJzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXRhbGxUb3BpY3MoKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdBcnJheU9mVG9waWNzPVtdXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxyZXN1bHQuZGF0YS5kYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheU9mVG9waWNzLnB1c2goeyBcInZhbHVlXCI6IHJlc3VsdC5kYXRhLmRhdGFbaV0uX2lkLCBcImxhYmVsXCI6cmVzdWx0LmRhdGEuZGF0YVtpXS50b3BpYyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25zKFsuLi5uZXdBcnJheU9mVG9waWNzXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbdXNlci50b2tlbl0pXHJcbiAgICBjb25zdCByZWZyZWNoRGF0YUZuPSgpPT57XHJcbiAgICAgICAgaWYoaWRUb3BpYyE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRUb3BpY1Bvc3RzKHtpZFRvcGljOmlkVG9waWN9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKFsuLi5yZXN1bHQuZGF0YS5kYXRhXSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGdldFRvZGF5VG9waWNQb3N0KHt9LHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhbLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0U2VsZWN0ZElkT2ZUb3BpYz0oaWQpPT57XHJcbiAgICAgICAgZ2V0U2VsZWN0ZWRUb3BpY1Bvc3RzKHtpZFRvcGljOmlkLnZhbHVlfSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UG9zdHMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2V0VG9wVXNlclBvc3RzTGlrZXMoe2lkVG9waWM6aWQudmFsdWV9KS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgaWYocmVzdWx0IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0VG9wVXNlcnMoWy4uLnJlc3VsdC5kYXRhLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0SWRUb3BpYyhpZC52YWx1ZSlcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcGVuUmFua2luZz0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3plZ1wiKVxyXG4gICAgICAgIHNldE9wZW5SYW5raW5nKGU9PiFlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9kYXlUb3BpY3N9PlxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB7aGVpZ2h0QW5kV2lkdGhPZldpbmRvdy53aWR0aCA+IGhlaWdodEFuZFdpZHRoT2ZXaW5kb3cuaGVpZ2h0PzxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BVc2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jaGFuZ2VUb3BpY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoZWNrIG9sZCBUb3BpY3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNlbGVjdE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17Z2V0U2VsZWN0ZElkT2ZUb3BpY30gaW5zdGFuY2VJZD17XCJpZHVuaXF1ZVwifSBpZD17XCJnemVnemVnemVcIn0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wVXNlcnMubWFwKChlLGluZGV4KT0+IDxUb3BVc2VycyAgaW5kZXg9e2luZGV4fSBwb3N0ZGF0YT17ZX0ga2V5PXtlLl9pZH0+PC9Ub3BVc2Vycz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+OjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm9wZW5yYW5raW5nfSBvbkNsaWNrPXsoKT0+b3BlblJhbmtpbmcoKX0+PGltZyBzcmM9e1wiL3JhbmtpbmcvcmFua2luZy5wbmdcIn0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wZW5SYW5raW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9wVXNlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbmdlVG9waWN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGVjayBvbGQgVG9waWNzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zZWxlY3RPcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtnZXRTZWxlY3RkSWRPZlRvcGljfSBpbnN0YW5jZUlkPXtcImlkdW5pcXVlXCJ9IGlkPXtcImd6ZWd6ZWd6ZVwifSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9wVXNlcnMubWFwKChlLGluZGV4KT0+IDxUb3BVc2VycyAgaW5kZXg9e2luZGV4fSBwb3N0ZGF0YT17ZX0ga2V5PXtlLl9pZH0+PC9Ub3BVc2Vycz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICAgICAgICB7PFBvc3RUb2RheVRvcGljIGlkVG9waWM9e2lkVG9waWN9ICBsb2dlZE9yTm90PXt1c2VyLnRva2VuIT1mYWxzZSYmdXNlci50b2tlbiE9dW5kZWZpbmVkfSByZWZyZWNoRGF0YT17cmVmcmVjaERhdGFGbn0+PC9Qb3N0VG9kYXlUb3BpYz59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wdWJsaWNhdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKGUpPT48UHVibGljYXRpb24gIGFsbG93QW5vbnltZUNvbW1lbnRzPXtlLmFsbG93QW5vbnltZUNvbW1lbnRzfSAgdXNlck5hbWU9e2UuT3duZXJPZlBvc3QudXNlck5hbWV9IGlkPXtlLl9pZH0gIGRhdGU9e2UuZGF0ZX0gb3duZXJPZlBvc3RJbWFnZT17ZS5Pd25lck9mUG9zdC5jdXJyZW50SW1hZ2VVcmx8fFwiYW5vbnltXCJ9IGtleT17ZS5faWR9IHRleHQ9e2UucG9zdFRleHR9IHZpZGVvPXtlLnBvc3RWaWRlbyE9dW5kZWZpbmVkP2UucG9zdFZpZGVvOnVuZGVmaW5lZH0gaW1hZ2U9e2UucG9zdEltYWdlIT11bmRlZmluZWQ/ZS5wb3N0SW1hZ2U6dW5kZWZpbmVkfT48L1B1YmxpY2F0aW9uPil9XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVRvZGF5VG9waWNzXHJcblxyXG5cclxuY29uc3QgVG9wVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuVG9wVXNlcnNTdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5oZWFkZXJ9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy51c2VySW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3RkYXRhLk93bmVyT2ZQb3N0LmN1cnJlbnRJbWFnZVVybD09XCJhbm9ueW1cIj9cIi9hbm9ueW1vdXMucG5nXCI6cHJvcHMucG9zdGRhdGEuT3duZXJPZlBvc3QuY3VycmVudEltYWdlVXJsfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGgyPntwcm9wcy5wb3N0ZGF0YS5Pd25lck9mUG9zdC51c2VyTmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5raW5nfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL2ZpcnN0LnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5kZXg9PTEmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmFuZGtpbmdJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9XCIvcmFua2luZy9zZWNvbmQucG5nXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pbmRleD09MiYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yYW5ka2luZ0ltYWdlQ29udGFpbmVyfT48aW1nIHNyYz1cIi9yYW5raW5nL3RoaXJkLnBuZ1wiLz48L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm51bWJlck9mTGlrZXN9PjxoMj57KHByb3BzLmluZGV4IT0xJiZwcm9wcy5pbmRleCE9MiYmcHJvcHMuaW5kZXghPTApICYmYHRvcCAke3Byb3BzLmluZGV4KzF9IGB9V2l0aCB7cHJvcHMucG9zdGRhdGEuTGlrZXM/PzB9IExpa2VzPC9oMj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBvc3RUZXh0fT48cD57cHJvcHMucG9zdGRhdGEucG9zdFRleHR9PC9wPjwvZGl2PlxyXG4gICAgPC9kaXY+KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=