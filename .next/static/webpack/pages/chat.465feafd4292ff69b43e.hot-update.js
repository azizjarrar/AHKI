webpackHotUpdate_N_E("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/chat.module.scss */ "./styles/chat.module.scss");
/* harmony import */ var _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/navBar/NavBar */ "./components/navBar/NavBar.js");
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! emoji-mart */ "./node_modules/emoji-mart/dist-es/index.js");
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emoji-mart/css/emoji-mart.css */ "./node_modules/emoji-mart/css/emoji-mart.css");
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/user */ "./services/user.js");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/chat */ "./services/chat.js");
/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context/socketContext */ "./context/socketContext.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../context/userContext */ "./context/userContext.js");







var _jsxFileName = "F:\\AHKI\\pages\\chat.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var chat = function chat(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      closeOrOpenEmojiPickerState = _React$useState2[0],
      setcloseOrOpenEmojiPickerState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(9),
      _React$useState4 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState3, 2),
      EmojiContainerHeight = _React$useState4[0],
      setEmojiContainerHeight = _React$useState4[1]; //responsive handler


  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState([]),
      _React$useState6 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState5, 2),
      listOfUsers = _React$useState6[0],
      setListOfUsers = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({
    currentImageUrl: undefined,
    userName: undefined,
    _id: undefined
  }),
      _React$useState8 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState7, 2),
      currentUserToChatWith = _React$useState8[0],
      setCurrentUserToChatWith = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(""),
      _React$useState10 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState9, 2),
      message = _React$useState10[0],
      setMessage = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState([]),
      _React$useState12 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState11, 2),
      currentChats = _React$useState12[0],
      setCurrentChats = _React$useState12[1];

  var messagesComp = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_14__["default"]),
      _React$useContext2 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useContext, 2),
      user = _React$useContext2[0],
      setUser = _React$useContext2[1];

  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_context_socketContext__WEBPACK_IMPORTED_MODULE_13__["default"]),
      _React$useContext4 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useContext3, 2),
      socket = _React$useContext4[0],
      setSocket = _React$useContext4[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(function () {
    return 0;
  }),
      _React$useState14 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState13, 2),
      skip = _React$useState14[0],
      setSkip = _React$useState14[1];

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (user._id != undefined && user._id.length > 2) Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["getUserWhoChatWith"])({}, props.token).then(function (result) {
      var newUserWhoChatWith = result.data.data.map(function (e) {
        if (e.firstUser._id == user._id) {
          return Promise.resolve(_objectSpread(_objectSpread({}, e.secoundUser), {}, {
            notSeenMessageNumber: e.notSeenMessageNumber
          }));
        } else {
          return Promise.resolve(_objectSpread(_objectSpread({}, e.firstUser), {}, {
            notSeenMessageNumber: e.notSeenMessageNumber
          }));
        }
      });
      Promise.all(newUserWhoChatWith).then(function (newarray) {
        setListOfUsers(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(newarray));
      });
    })["catch"](function (e) {
      return console.log(e.message);
    });
  }, [user]);
  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (currentUserToChatWith._id != undefined) {
      Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["getMessagesOfCurrentconversation"])({
        secondUser: currentUserToChatWith._id,
        skip: 0
      }, props.token).then(function (data) {
        setCurrentChats(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(data.data.data.reverse()));
        messagesComp.current.scrollTop = messagesComp.current.scrollHeight + messagesComp.current.clientHeight;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, [currentUserToChatWith]);

  var addEmoji = function addEmoji(e) {
    var sym = e.unified.split('-');
    var codesArray = [];
    sym.forEach(function (el) {
      return codesArray.push('0x' + el);
    });
    var emoji = String.fromCodePoint.apply(String, codesArray);
    setMessage(function (el) {
      return el + emoji;
    });
  };

  var closeOrOpenEmojiPicker = function closeOrOpenEmojiPicker() {
    setcloseOrOpenEmojiPickerState(function (e) {
      return !e;
    });
  };

  var searchForUser = function searchForUser(e) {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_11__["searchUserNameApi"])(e.target.value, props.token).then(function (result) {
      if (result.data.data != undefined) {
        setListOfUsers(function (e) {
          return Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(result.data.data);
        });
      }
    });
  };

  var getUserdataFn = function getUserdataFn(currentUserData) {
    setCurrentUserToChatWith(currentUserData);
  };

  var sendMessage = function sendMessage() {
    if (message.length > 0 && currentUserToChatWith._id != undefined) {
      Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["addMessage"])({
        receiver: currentUserToChatWith._id,
        message: message,
        FirstTime: currentChats.length
      }, props.token).then(function (data) {
        setCurrentChats(function (e) {
          var r = Math.random().toString(36).substring(7);
          return [].concat(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(e), [{
            users: [user._id],
            message: message,
            _id: r
          }]);
        });
        messagesComp.current.scrollTop = messagesComp.current.scrollHeight + messagesComp.current.clientHeight;
        socket.emit("sendMessageFromUserToUser", {
          otherUserId: currentUserToChatWith._id,
          text: message,
          senderId: user._id
        });
        setMessage("");
      })["catch"](function (error) {
        console.log(error);
      });
    }
  };

  var messageHandler = function messageHandler(e) {
    if (e.target.value.length > 0) {
      socket.emit("sendMessageFromUserToUser", {
        isWriting: true
      });
    } else {
      socket.emit("sendMessageFromUserToUser", {
        isWriting: false
      });
    }

    setMessage(e.target.value);
  };

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    function chatHandler(_x) {
      return _chatHandler.apply(this, arguments);
    }

    function _chatHandler() {
      _chatHandler = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var audio, ListOfUser;
        return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                audio = new Audio("./msgSound.mp3");
                audio.play();
                _context.next = 4;
                return listOfUsers.map(function (e) {
                  if (data.senderId == e._id && currentUserToChatWith._id != e._id) {
                    e.notSeenMessageNumber = e.notSeenMessageNumber + 1;
                    return Promise.resolve(e);
                  } else {
                    return Promise.resolve(e);
                  }
                });

              case 4:
                ListOfUser = _context.sent;
                Promise.all(ListOfUser).then(function (data) {
                  setListOfUsers(data);
                });

                if (data.senderId == currentUserToChatWith._id) {
                  setCurrentChats(function (e) {
                    var r = Math.random().toString(36).substring(7);
                    return [].concat(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(e), [{
                      users: [data.senderId],
                      message: data.text,
                      _id: r
                    }]);
                  });
                  messagesComp.current.scrollTop = messagesComp.current.scrollHeight + messagesComp.current.clientHeight;
                } else {}

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _chatHandler.apply(this, arguments);
    }

    if (socket != undefined && socket != null) {
      socket.on("getMessageFromUserToUser", chatHandler);
    }

    return function () {
      if (socket != undefined && socket != null) {
        socket.off('getMessageFromUserToUser', chatHandler);
      }
    };
  });

  var scrollfn = function scrollfn(e) {
    //if( e.target.scrollTop === (e.target.scrollHeight - e.target.offsetHeight)){
    if (e.target.scrollTop === 0) {
      setSkip(function (e) {
        return e + 20;
      });
    }
  };

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["getMessagesOfCurrentconversation"])({
      secondUser: currentUserToChatWith._id,
      skip: skip
    }, props.token).then(function (data) {
      setCurrentChats(function (e) {
        return [].concat(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(data.data.data.reverse()), Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(e));
      });
    })["catch"](function (error) {
      console.log(error);
    });
  }, [skip]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chatAndRandomOnlineUserContaner,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserContaner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "contacts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bottom,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.searchContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.inputcss,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  return searchForUser(e);
                },
                type: "text",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chatContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerOfChatuserNameAndName,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userImageContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: currentUserToChatWith.currentImageUrl || "/avatar.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onScroll: function onScroll(e) {
              return scrollfn(e);
            },
            ref: messagesComp,
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messages,
            children: currentChats.map(function (e) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.oneMessage,
                children: e.users[0] == currentUserToChatWith._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText,
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : false,
                  style: {
                    "--i": "0%",
                    "float": "left",
                    backgroundColor: "#e4e6eb",
                    color: "black"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: e.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 37
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText,
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : false,
                  style: {
                    "--i": "-100%",
                    "float": "right",
                    backgroundColor: "#1876f3",
                    color: "white"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: e.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 230
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sendMessage,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: function onSubmit(e) {
              return e.preventDefault();
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.inputContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.inputcss,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  value: message,
                  onChange: function onChange(e) {
                    return messageHandler(e);
                  },
                  type: "text",
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 188
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 181
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.btns,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.openOrCloseEmojiPicker,
                onClick: function onClick() {
                  return closeOrOpenEmojiPicker();
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.emojiLogo,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_9__["Emoji"], {
                    emoji: {
                      id: 'smiling_face_with_3_hearts',
                      skin: 3
                    },
                    size: 16
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 25
                }, _this), closeOrOpenEmojiPickerState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.emojiPickerContainer,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_9__["Picker"], {
                    perLine: EmojiContainerHeight,
                    onSelect: function onSelect(e) {
                      return addEmoji(e);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.btnsend,
                onClick: function onClick() {
                  return sendMessage();
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sendMessageBtn,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SentSvg, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 9
  }, _this);
};

_s(chat, "tdVKVL+haIbllIGwo6HAXxrVIv4=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (chat);

var SentSvg = function SentSvg() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      id: "Layer_95",
      "data-name": "Layer 95",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M53.06,10.94a1.5,1.5,0,0,0-1.53-.36l-40,13.33a1.51,1.51,0,0,0-.06,2.83l18.7,7.09,7.09,18.7a1.51,1.51,0,0,0,1.44,1,1.49,1.49,0,0,0,1.39-1l13.33-40A1.5,1.5,0,0,0,53.06,10.94Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 9
  }, _this);
};

_c = SentSvg;

var Users = function Users(props) {
  _s2();

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(props.userData.notSeenMessageNumber),
      _React$useState16 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState15, 2),
      notSeenMessageNumberlocal = _React$useState16[0],
      setNotSeenMessageNumberlocal = _React$useState16[1];

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    setNotSeenMessageNumberlocal(props.userData.notSeenMessageNumber);
  }, [props.userData.notSeenMessageNumber]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userContainer,
      onClick: function onClick() {
        props.getUserdata(props.userData), setNotSeenMessageNumberlocal(0);
      },
      children: [notSeenMessageNumberlocal != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.notSeenMessageNumbe,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: notSeenMessageNumberlocal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 9
  }, _this);
};

_s2(Users, "pd1fD7onXKAt+z6/CWeN/oALkEw=");

_c2 = Users;

var _c, _c2;

$RefreshReg$(_c, "SentSvg");
$RefreshReg$(_c2, "Users");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJnZXRVc2VyV2hvQ2hhdFdpdGgiLCJ0b2tlbiIsInRoZW4iLCJyZXN1bHQiLCJuZXdVc2VyV2hvQ2hhdFdpdGgiLCJkYXRhIiwibWFwIiwiZSIsImZpcnN0VXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vjb3VuZFVzZXIiLCJub3RTZWVuTWVzc2FnZU51bWJlciIsImFsbCIsIm5ld2FycmF5IiwiY29uc29sZSIsImxvZyIsImdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uIiwic2Vjb25kVXNlciIsInJldmVyc2UiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZXJyb3IiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwiZW1pdCIsIm90aGVyVXNlcklkIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiTGlzdE9mVXNlciIsIm9uIiwib2ZmIiwic2Nyb2xsZm4iLCJTdHlsZSIsImNvbnRhaW5lciIsImNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXIiLCJVc2VyQ29udGFuZXIiLCJoZWFkZXIiLCJsaXN0Q29udGFjcyIsImJvdHRvbSIsInNlYXJjaENvbnRhaW5lciIsImlucHV0Y3NzIiwiY2hhdENvbnRhaW5lciIsImhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZSIsInVzZXJJbWFnZUNvbnRhaW5lciIsIm1lc3NhZ2VzIiwib25lTWVzc2FnZSIsIm1lc3NhZ2VUZXh0IiwiZGF0ZSIsInNsaWNlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Q29udGFpbmVyIiwiYnRucyIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJpZCIsInNraW4iLCJlbW9qaVBpY2tlckNvbnRhaW5lciIsImJ0bnNlbmQiLCJzZW5kTWVzc2FnZUJ0biIsIlNlbnRTdmciLCJVc2VycyIsInVzZXJEYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJ1c2VyQ29udGFpbmVyIiwiZ2V0VXNlcmRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlIiwiaW1nQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQytDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUQvQztBQUFBO0FBQUEsTUFDYkMsMkJBRGE7QUFBQSxNQUNlQyw4QkFEZjs7QUFBQSx5QkFFb0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRnBDO0FBQUE7QUFBQSxNQUViRyxvQkFGYTtBQUFBLE1BRVNDLHVCQUZULHdCQUVxRDs7O0FBRnJELHlCQUdlTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhmO0FBQUE7QUFBQSxNQUdiSyxXQUhhO0FBQUEsTUFHREMsY0FIQzs7QUFBQSx5QkFJbUNQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUFDTyxtQkFBZSxFQUFDQyxTQUFqQjtBQUEyQkMsWUFBUSxFQUFDRCxTQUFwQztBQUE4Q0UsT0FBRyxFQUFDRjtBQUFsRCxHQUFmLENBSm5DO0FBQUE7QUFBQSxNQUliRyxxQkFKYTtBQUFBLE1BSVNDLHdCQUpUOztBQUFBLHlCQUtPYiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUxQO0FBQUE7QUFBQSxNQUtiYSxPQUxhO0FBQUEsTUFLTEMsVUFMSzs7QUFBQSwwQkFNaUJmLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTmpCO0FBQUE7QUFBQSxNQU1iZSxZQU5hO0FBQUEsTUFNQUMsZUFOQTs7QUFPcEIsTUFBTUMsWUFBWSxHQUFDbEIsNENBQUssQ0FBQ21CLE1BQU4sQ0FBYSxJQUFiLENBQW5COztBQVBvQiwwQkFRQ25CLDRDQUFLLENB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REFBSyxDQUFDcUMsWUFBdkI7QUFBQSwrQkFBcUM7QUFBSyxhQUFHLEVBQUV4SSxLQUFLLENBQUNrSSxRQUFOLENBQWV6SCxlQUFmLElBQWtDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZILGVBR0c7QUFBTSxpQkFBUyxFQUFFMEYsK0RBQUssQ0FBQ3hGLFFBQXZCO0FBQUEsK0JBQWlDO0FBQUEsb0JBQUlYLEtBQUssQ0FBQ2tJLFFBQU4sQ0FBZXZIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBYkM7O0lBQU1zSCxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuNDY1ZmVhZmQ0MjkyZmY2OWI0M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlcy9jaGF0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IHsgUGlja2VyLEVtb2ppICB9IGZyb20gJ2Vtb2ppLW1hcnQnXHJcbmltcG9ydCAnZW1vamktbWFydC9jc3MvZW1vamktbWFydC5jc3MnXHJcbmltcG9ydCB7c2VhcmNoVXNlck5hbWVBcGl9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCB7YWRkTWVzc2FnZSxnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbixnZXRVc2VyV2hvQ2hhdFdpdGh9IGZyb20gJy4uL3NlcnZpY2VzL2NoYXQnO1xyXG5pbXBvcnQgc29ja2V0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5cclxuXHJcbmNvbnN0IGNoYXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUsc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtFbW9qaUNvbnRhaW5lckhlaWdodCwgc2V0RW1vamlDb250YWluZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoOSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW2xpc3RPZlVzZXJzLHNldExpc3RPZlVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlclRvQ2hhdFdpdGgsc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoXT1SZWFjdC51c2VTdGF0ZSh7Y3VycmVudEltYWdlVXJsOnVuZGVmaW5lZCx1c2VyTmFtZTp1bmRlZmluZWQsX2lkOnVuZGVmaW5lZH0pXHJcbiAgICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2N1cnJlbnRDaGF0cyxzZXRDdXJyZW50Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgbWVzc2FnZXNDb21wPVJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtzb2NrZXQsc2V0U29ja2V0XT1SZWFjdC51c2VDb250ZXh0KHNvY2tldENvbnRleHQpXHJcbiAgICBjb25zdCBbc2tpcCxzZXRTa2lwXT1SZWFjdC51c2VTdGF0ZSgoKT0+MClcclxuXHJcbiBcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5ld1VzZXJXaG9DaGF0V2l0aCkudGhlbihuZXdhcnJheT0+e1xyXG4gICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKFsuLi5uZXdhcnJheV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfSkuY2F0Y2goZT0+Y29uc29sZS5sb2coZS5tZXNzYWdlKSlcclxuICAgIH0sW3VzZXJdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhbLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpXSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VhcmNoRm9yVXNlcj0oZSk9PntcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkoZS50YXJnZXQudmFsdWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2V0VXNlcmRhdGFGbj0oY3VycmVudFVzZXJEYXRhKT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aChjdXJyZW50VXNlckRhdGEpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2U9KCk9PntcclxuICAgICAgICBpZihtZXNzYWdlLmxlbmd0aD4wJiZjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGFkZE1lc3NhZ2Uoe3JlY2VpdmVyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsbWVzc2FnZTptZXNzYWdlLEZpcnN0VGltZTpjdXJyZW50Q2hhdHMubGVuZ3RofSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W3VzZXIuX2lkXSxtZXNzYWdlOm1lc3NhZ2UsX2lkOnJ9XVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIix7b3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCx0ZXh0Om1lc3NhZ2Usc2VuZGVySWQ6dXNlci5faWR9KVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0TWVzc2FnZShcIlwiKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVzc2FnZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtpc1dyaXRpbmc6dHJ1ZX0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIse2lzV3JpdGluZzpmYWxzZX0pXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBzY3JvbGxmbj0oZSk9PntcclxuICAgICAgICAgIC8vaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCkpe1xyXG4gICAgICAgICAgaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNldFNraXAoZT0+ZSsyMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOnNraXB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PlsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCksLi4uZV0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbc2tpcF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VUZXh0fSB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOmZhbHNlfSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOlwiIzE4NzZmM1wiLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKT0+bWVzc2FnZUhhbmRsZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+TWVzc2FnZTwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5vcGVuT3JDbG9zZUVtb2ppUGlja2VyfSBvbkNsaWNrPXsoKT0+Y2xvc2VPck9wZW5FbW9qaVBpY2tlcigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppTG9nb30+PEVtb2ppIGVtb2ppPXt7IGlkOiAnc21pbGluZ19mYWNlX3dpdGhfM19oZWFydHMnLCBza2luOiAzIH19IHNpemU9ezE2fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlQaWNrZXJDb250YWluZXJ9PjxQaWNrZXIgcGVyTGluZT17RW1vamlDb250YWluZXJIZWlnaHR9IG9uU2VsZWN0PXsoZSk9PmFkZEVtb2ppKGUpfSAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1N0eWxlLmJ0bnNlbmR9IG9uQ2xpY2s9eygpPT5zZW5kTWVzc2FnZSgpfT48c3BhbiBjbGFzc05hbWU9e1N0eWxlLnNlbmRNZXNzYWdlQnRufSA+PFNlbnRTdmc+PC9TZW50U3ZnPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhdFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHJlcS5jb29raWVzLnRva2VuID8geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfSB9IDogeyBwcm9wczogeyB0b2tlbjogZmFsc2UgfSB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBTZW50U3ZnPSgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48ZyBpZD1cIkxheWVyXzk1XCIgZGF0YS1uYW1lPVwiTGF5ZXIgOTVcIj48cGF0aCBkPVwiTTUzLjA2LDEwLjk0YTEuNSwxLjUsMCwwLDAtMS41My0uMzZsLTQwLDEzLjMzYTEuNTEsMS41MSwwLDAsMC0uMDYsMi44M2wxOC43LDcuMDksNy4wOSwxOC43YTEuNTEsMS41MSwwLDAsMCwxLjQ0LDEsMS40OSwxLjQ5LDAsMCwwLDEuMzktMWwxMy4zMy00MEExLjUsMS41LDAsMCwwLDUzLjA2LDEwLjk0WlwiLz48cGF0aCBkPVwiTTIwLjIyLDM1LjQ4YTEuNSwxLjUsMCwwLDAtMi4xMi0yLjEybC00LjQ4LDQuNDhhMS41MSwxLjUxLDAsMCwwLDAsMi4xMiwxLjQ5LDEuNDksMCwwLDAsMi4xMiwwWlwiLz48cGF0aCBkPVwiTTIzLjg4LDQwLjEyYTEuNDksMS40OSwwLDAsMC0yLjEyLDBMMTYuMDgsNDUuOGExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw1LjY4LTUuNjhBMS40OSwxLjQ5LDAsMCwwLDIzLjg4LDQwLjEyWlwiLz48cGF0aCBkPVwiTTI4LjUyLDQzLjc4LDI0LDQ4LjI2YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDQuNDgtNC40OEExLjUsMS41LDAsMCwwLDI4LjUyLDQzLjc4WlwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgKVxyXG4gIH1cclxuICBjb25zdCBVc2Vycz0ocHJvcHMpPT57XHJcbiAgICAgIGNvbnN0IFtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWxdPVJlYWN0LnVzZVN0YXRlKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICB9LFtwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcl0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj48ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckNvbnRhaW5lcn0gb25DbGljaz17KCk9Pntwcm9wcy5nZXRVc2VyZGF0YShwcm9wcy51c2VyRGF0YSksc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCgwKX19PlxyXG4gICAgICAgICAgICAgICAge25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwhPTAmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ub3RTZWVuTWVzc2FnZU51bWJlfT48c3Bhbj57bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbH08L3NwYW4+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS5pbWdDb250YWluZXJ9PjxpbWcgc3JjPXtwcm9wcy51c2VyRGF0YS5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PHA+e3Byb3BzLnVzZXJEYXRhLnVzZXJOYW1lfTwvcD48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=