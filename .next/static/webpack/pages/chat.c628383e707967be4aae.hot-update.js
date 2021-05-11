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

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState16 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState15, 2),
      isWritingState = _React$useState16[0],
      setIsWritingState = _React$useState16[1];

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
      socket.emit("vu", {
        state: true,
        otherUserId: currentUserToChatWith._id
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
    if (currentUserToChatWith._id != undefined) {
      if (e.target.value.length > 0) {
        socket.emit("isWriting", {
          isWriting: true,
          otherUserId: currentUserToChatWith._id
        });
      } else {
        socket.emit("isWriting", {
          isWriting: false,
          otherUserId: currentUserToChatWith._id
        });
      }
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
                setIsWritingState(false);

                if (vu == true) {
                  socket.emit("vu", {
                    state: true,
                    otherUserId: currentUserToChatWith._id
                  });
                }

                _context.next = 6;
                return listOfUsers.map(function (e) {
                  if (data.senderId == e._id && currentUserToChatWith._id != e._id) {
                    e.notSeenMessageNumber = e.notSeenMessageNumber + 1;
                    return Promise.resolve(e);
                  } else {
                    return Promise.resolve(e);
                  }
                });

              case 6:
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

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _chatHandler.apply(this, arguments);
    }

    function isWriting(data) {
      setIsWritingState(data.isWriting);
    }

    var setvu = function setvu(data) {
      if (currentChats.length > 0) {
        for (var i = currentChats.length; i > 0; i--) {
          if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i] != undefined && document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i].childNodes[1].style.color != "rgb(24, 118, 243)") {
            document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i].childNodes[1].style.color = "#1876f3";
          } else {
            console.log("break");
            break;
          }
        }
      }
    };

    if (socket != undefined && socket != null) {
      socket.on("isWritingState", isWriting);
      socket.on("getMessageFromUserToUser", chatHandler);
      socket.on("setvu", setvu);
    }

    return function () {
      if (socket != undefined && socket != null) {
        socket.off('getMessageFromUserToUser', chatHandler);
        socket.off("isWritingState", isWriting);
        socket.off("isWritingState", setvu);
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
      lineNumber: 201,
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
            lineNumber: 205,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
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
                lineNumber: 212,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
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
                lineNumber: 221,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
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
                    lineNumber: 232,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 37
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "".concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText, " ").concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage),
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : false,
                  style: {
                    "--i": "-100%",
                    "float": "right",
                    backgroundColor: "#1876f3",
                    color: "white"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: e.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 257
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: e.seen == true ? {
                      color: "#1876f3"
                    } : {
                      color: "black"
                    },
                    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.seen,
                    children: "\u2714"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 276
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
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
                  lineNumber: 241,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 189
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 182
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
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
                    lineNumber: 244,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
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
                    lineNumber: 245,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
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
                    lineNumber: 247,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 9
  }, _this);
};

_s(chat, "qerLPFVhKh2zbe213Zsbnode2h4=");

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
        lineNumber: 264,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 264,
    columnNumber: 9
  }, _this);
};

_c = SentSvg;

var Users = function Users(props) {
  _s2();

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(props.userData.notSeenMessageNumber),
      _React$useState18 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState17, 2),
      notSeenMessageNumberlocal = _React$useState18[0],
      setNotSeenMessageNumberlocal = _React$useState18[1];

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
          lineNumber: 274,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 273,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwiZGF0YSIsIm1hcCIsImUiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJyZXZlcnNlIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVycm9yIiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwidnUiLCJMaXN0T2ZVc2VyIiwic2V0dnUiLCJpIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiU3R5bGUiLCJ5b3VyTWVzc2FnZSIsImNoaWxkTm9kZXMiLCJzdHlsZSIsImNvbG9yIiwib24iLCJvZmYiLCJzY3JvbGxmbiIsImNvbnRhaW5lciIsImNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXIiLCJVc2VyQ29udGFuZXIiLCJoZWFkZXIiLCJsaXN0Q29udGFjcyIsImJvdHRvbSIsInNlYXJjaENvbnRhaW5lciIsImlucHV0Y3NzIiwiY2hhdENvbnRhaW5lciIsImhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZSIsInVzZXJJbWFnZUNvbnRhaW5lciIsImlzV3JpdGluZ0NvbnRhaW5lciIsImxkc2VsbGlwc2lzIiwibWVzc2FnZXMiLCJvbmVNZXNzYWdlIiwibWVzc2FnZVRleHQiLCJkYXRlIiwic2xpY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWVuIiwicHJldmVudERlZmF1bHQiLCJpbnB1dENvbnRhaW5lciIsImJ0bnMiLCJvcGVuT3JDbG9zZUVtb2ppUGlja2VyIiwiZW1vamlMb2dvIiwiaWQiLCJza2luIiwiZW1vamlQaWNrZXJDb250YWluZXIiLCJidG5zZW5kIiwic2VuZE1lc3NhZ2VCdG4iLCJTZW50U3ZnIiwiVXNlcnMiLCJ1c2VyRGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwidXNlckNvbnRhaW5lciIsImdldFVzZXJkYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZSIsImltZ0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUMrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEL0M7QUFBQTtBQUFBLE1BQ2JDLDJCQURhO0FBQUEsTUFDZUMsOEJBRGY7O0FBQUEseUJBRW9DSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZwQztBQUFBO0FBQUEsTUFFYkcsb0JBRmE7QUFBQSxNQUVTQyx1QkFGVCx3QkFFcUQ7OztBQUZyRCx5QkFHZUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIZjtBQUFBO0FBQUEsTUFHYkssV0FIYTtBQUFBLE1BR0RDLGNBSEM7O0FBQUEseUJBSW1DUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBQ08sbUJBQWUsRUFBQ0MsU0FBakI7QUFBMkJDLFlBQVEsRUFBQ0QsU0FBcEM7QUFBOENFLE9BQUcsRUFBQ0Y7QUFBbEQsR0FBZixDQUpuQztBQUFBO0FBQUEsTUFJYkcscUJBSmE7QUFBQSxNQUlTQyx3QkFKVDs7QUFBQSx5QkFLT2IsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FMUDtBQUFBO0FBQUEsTUFLYmEsT0FMYTtBQUFBLE1B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QUUwRCwrREFBSyxDQUFDMkMsYUFBdEI7QUFBcUMsYUFBTyxFQUFFLG1CQUFJO0FBQUNuSixhQUFLLENBQUNvSixXQUFOLENBQWtCcEosS0FBSyxDQUFDZ0osUUFBeEIsR0FBa0NFLDRCQUE0QixDQUFDLENBQUQsQ0FBOUQ7QUFBa0UsT0FBckg7QUFBQSxpQkFDSUQseUJBQXlCLElBQUUsQ0FBM0IsaUJBQThCO0FBQUssaUJBQVMsRUFBRXpDLCtEQUFLLENBQUM2QyxtQkFBdEI7QUFBQSwrQkFBMkM7QUFBQSxvQkFBT0o7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbEMsZUFFRztBQUFNLGlCQUFTLEVBQUV6QywrREFBSyxDQUFDOEMsWUFBdkI7QUFBQSwrQkFBcUM7QUFBSyxhQUFHLEVBQUV0SixLQUFLLENBQUNnSixRQUFOLENBQWV2SSxlQUFmLElBQWtDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZILGVBR0c7QUFBTSxpQkFBUyxFQUFFK0YsK0RBQUssQ0FBQzdGLFFBQXZCO0FBQUEsK0JBQWlDO0FBQUEsb0JBQUlYLEtBQUssQ0FBQ2dKLFFBQU4sQ0FBZXJJO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBYkM7O0lBQU1vSSxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuYzYyODM4M2U3MDc5NjdiZTRhYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlcy9jaGF0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IHsgUGlja2VyLEVtb2ppICB9IGZyb20gJ2Vtb2ppLW1hcnQnXHJcbmltcG9ydCAnZW1vamktbWFydC9jc3MvZW1vamktbWFydC5jc3MnXHJcbmltcG9ydCB7c2VhcmNoVXNlck5hbWVBcGl9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCB7YWRkTWVzc2FnZSxnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbixnZXRVc2VyV2hvQ2hhdFdpdGh9IGZyb20gJy4uL3NlcnZpY2VzL2NoYXQnO1xyXG5pbXBvcnQgc29ja2V0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5cclxuXHJcbmNvbnN0IGNoYXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUsc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtFbW9qaUNvbnRhaW5lckhlaWdodCwgc2V0RW1vamlDb250YWluZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoOSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW2xpc3RPZlVzZXJzLHNldExpc3RPZlVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlclRvQ2hhdFdpdGgsc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoXT1SZWFjdC51c2VTdGF0ZSh7Y3VycmVudEltYWdlVXJsOnVuZGVmaW5lZCx1c2VyTmFtZTp1bmRlZmluZWQsX2lkOnVuZGVmaW5lZH0pXHJcbiAgICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2N1cnJlbnRDaGF0cyxzZXRDdXJyZW50Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgbWVzc2FnZXNDb21wPVJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtzb2NrZXQsc2V0U29ja2V0XT1SZWFjdC51c2VDb250ZXh0KHNvY2tldENvbnRleHQpXHJcbiAgICBjb25zdCBbc2tpcCxzZXRTa2lwXT1SZWFjdC51c2VTdGF0ZSgoKT0+MClcclxuICAgIGNvbnN0IFtpc1dyaXRpbmdTdGF0ZSxzZXRJc1dyaXRpbmdTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5ld1VzZXJXaG9DaGF0V2l0aCkudGhlbihuZXdhcnJheT0+e1xyXG4gICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKFsuLi5uZXdhcnJheV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfSkuY2F0Y2goZT0+Y29uc29sZS5sb2coZS5tZXNzYWdlKSlcclxuICAgIH0sW3VzZXJdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG5cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgfSxbY3VycmVudFVzZXJUb0NoYXRXaXRoXSlcclxuICAgIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgICAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgICAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZWw9PntyZXR1cm4gZWwrZW1vaml9KVxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZT0oKT0+e1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubGVuZ3RoPjAmJmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWRkTWVzc2FnZSh7cmVjZWl2ZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxtZXNzYWdlOm1lc3NhZ2UsRmlyc3RUaW1lOmN1cnJlbnRDaGF0cy5sZW5ndGh9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbdXNlci5faWRdLG1lc3NhZ2U6bWVzc2FnZSxfaWQ6cn1dXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIse290aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsdGV4dDptZXNzYWdlLHNlbmRlcklkOnVzZXIuX2lkfSlcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIilcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6ZmFsc2Usb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhc3luYyAgZnVuY3Rpb24gIGNoYXRIYW5kbGVyKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9tc2dTb3VuZC5tcDNcIilcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgICAgICAgICBpZih2dT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzV3JpdGluZyhkYXRhKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGRhdGEuaXNXcml0aW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXR2dT0oZGF0YSk9PntcclxuICAgICAgICAgICAgaWYoY3VycmVudENoYXRzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT1jdXJyZW50Q2hhdHMubGVuZ3RoO2k+MDtpLS0pe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlKVtpXSE9dW5kZWZpbmVkJiZkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlKVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yIT1cInJnYigyNCwgMTE4LCAyNDMpXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvcj1cIiMxODc2ZjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJyZWFrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgIHNvY2tldC5vbihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgIHNvY2tldC5vbihcImdldE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLGNoYXRIYW5kbGVyKVxyXG4gICAgICAgIHNvY2tldC5vbihcInNldHZ1XCIsc2V0dnUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsc2V0dnUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHNjcm9sbGZuPShlKT0+e1xyXG4gICAgICAgICAgLy9pZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0KSl7XHJcbiAgICAgICAgICBpZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgc2V0U2tpcChlPT5lKzIwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6c2tpcH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICBcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtza2lwXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc2VsbGlwc2lzfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlLm1lc3NhZ2VUZXh0fSAke1N0eWxlLnlvdXJNZXNzYWdlfWB9ICB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOmZhbHNlfSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOlwiIzE4NzZmM1wiLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPns8c3BhbiBzdHlsZT17ZS5zZWVuPT10cnVlP3tjb2xvcjpcIiMxODc2ZjNcIn06e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT17U3R5bGUuc2Vlbn0+JiMxMDAwNDs8L3NwYW4+fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCAgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/IHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIH0gfSA6IHsgcHJvcHM6IHsgdG9rZW46IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgICBjb25zdCBbbm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsXT1SZWFjdC51c2VTdGF0ZShwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbChwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgfSxbcHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXJdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJDb250YWluZXJ9IG9uQ2xpY2s9eygpPT57cHJvcHMuZ2V0VXNlcmRhdGEocHJvcHMudXNlckRhdGEpLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwoMCl9fT5cclxuICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuaW1nQ29udGFpbmVyfT48aW1nIHNyYz17cHJvcHMudXNlckRhdGEuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9