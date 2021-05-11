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

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState18 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState17, 2),
      vu = _React$useState18[0],
      setVu = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(function () {
    return 0;
  }),
      _React$useState20 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState19, 2),
      numberOfNotVu = _React$useState20[0],
      setNumberOfNotVu = _React$useState20[1];

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
        setNumberOfNotVu(function (e) {
          return e + 1;
        });
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
      console.log("setVu");

      if (currentChats.length > 0) {
        for (var i = currentChats.length; i > 0; i--) {
          if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i] != undefined && document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i].childNodes[1].style.color != "rgb(24, 118, 243)") {
            document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i].childNodes[1].style.color = "#1876f3";
          } else {
            setNumberOfNotVu(0);
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

  var onFocusVu = function onFocusVu(e) {
    if (e._reactName == "onFocus") {
      setVu(true);

      if (numberOfNotVu != 0) {
        socket.emit("vu", {
          state: true,
          otherUserId: currentUserToChatWith._id
        });
      }
    } else {
      setVu(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
            lineNumber: 221,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
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
                lineNumber: 228,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
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
                lineNumber: 237,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
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
                    lineNumber: 248,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
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
                    lineNumber: 249,
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
                    lineNumber: 249,
                    columnNumber: 276
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
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
                  onBlur: function onBlur(e) {
                    return onFocusVu(e);
                  },
                  onFocus: function onFocus(e) {
                    return onFocusVu(e);
                  },
                  value: message,
                  onChange: function onChange(e) {
                    return messageHandler(e);
                  },
                  type: "text",
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 243
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 236
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
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
                    lineNumber: 260,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
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
                    lineNumber: 261,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
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
                    lineNumber: 263,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 9
  }, _this);
};

_s(chat, "ExrWTFZm1OMr0KFWm9Pg+GAjCrU=");

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
        lineNumber: 280,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 9
  }, _this);
};

_c = SentSvg;

var Users = function Users(props) {
  _s2();

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(props.userData.notSeenMessageNumber),
      _React$useState22 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState21, 2),
      notSeenMessageNumberlocal = _React$useState22[0],
      setNotSeenMessageNumberlocal = _React$useState22[1];

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
          lineNumber: 290,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 289,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidnUiLCJzZXRWdSIsIm51bWJlck9mTm90VnUiLCJzZXROdW1iZXJPZk5vdFZ1IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwiZGF0YSIsIm1hcCIsImUiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJyZXZlcnNlIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVycm9yIiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiTGlzdE9mVXNlciIsInNldHZ1IiwiaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlIiwieW91ck1lc3NhZ2UiLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJjb2xvciIsIm9uIiwib2ZmIiwic2Nyb2xsZm4iLCJvbkZvY3VzVnUiLCJfcmVhY3ROYW1lIiwiY29udGFpbmVyIiwiY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lciIsIlVzZXJDb250YW5lciIsImhlYWRlciIsImxpc3RDb250YWNzIiwiYm90dG9tIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXRjc3MiLCJjaGF0Q29udGFpbmVyIiwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lIiwidXNlckltYWdlQ29udGFpbmVyIiwiaXNXcml0aW5nQ29udGFpbmVyIiwibGRzZWxsaXBzaXMiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsInNlZW4iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Q29udGFpbmVyIiwiYnRucyIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJpZCIsInNraW4iLCJlbW9qaVBpY2tlckNvbnRhaW5lciIsImJ0bnNlbmQiLCJzZW5kTWVzc2FnZUJ0biIsIlNlbnRTdmciLCJVc2VycyIsInVzZXJEYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJ1c2VyQ29udGFpbmVyIiwiZ2V0VXNlcmRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlIiwiaW1nQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQytDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUQvQztBQUFBO0FBQUEsTUFDYkMsMkJBRGE7QUFBQSxNQUNlQyw4QkFEZjs7QUFBQSx5QkFFb0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRnBDO0FBQUE7QUFBQSxNQUViRyxvQkFGYTtBQUFBLE1BRVNDLHVCQUZULHdCQUVxRDs7O0FBRnJELHlCQUdlTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhmO0FBQUE7QUFBQSxNQUdiSyxXQUhhO0FBQUEsTUFHREMsY0FIQzs7QUFBQSx5QkFJbUNQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUFDTyxtQkFBZSxFQUFDQyxTQUFqQjtBQUEyQkMsWUFBUSxFQUFDRCxTQUFwQztBQUE4Q0UsT0FBRyxFQUFDRjtBQUFsRCxHQUFmLENBSm5DO0FBQUE7QUFBQSxNQUliRyxxQkFKYTtBQUFBLE1BSVNDLHdCQUpUOztBQUFB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QjtBQUFxQyxhQUFPLEVBQUUsbUJBQUk7QUFBQ3hKLGFBQUssQ0FBQ3lKLFdBQU4sQ0FBa0J6SixLQUFLLENBQUNxSixRQUF4QixHQUFrQ0UsNEJBQTRCLENBQUMsQ0FBRCxDQUE5RDtBQUFrRSxPQUFySDtBQUFBLGlCQUNJRCx5QkFBeUIsSUFBRSxDQUEzQixpQkFBOEI7QUFBSyxpQkFBUyxFQUFFM0MsK0RBQUssQ0FBQytDLG1CQUF0QjtBQUFBLCtCQUEyQztBQUFBLG9CQUFPSjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURsQyxlQUVHO0FBQU0saUJBQVMsRUFBRTNDLCtEQUFLLENBQUNnRCxZQUF2QjtBQUFBLCtCQUFxQztBQUFLLGFBQUcsRUFBRTNKLEtBQUssQ0FBQ3FKLFFBQU4sQ0FBZTVJLGVBQWYsSUFBa0M7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkgsZUFHRztBQUFNLGlCQUFTLEVBQUVrRywrREFBSyxDQUFDaEcsUUFBdkI7QUFBQSwrQkFBaUM7QUFBQSxvQkFBSVgsS0FBSyxDQUFDcUosUUFBTixDQUFlMUk7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FiQzs7SUFBTXlJLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC5hMmQxYmYxOTYxOWEyNGVhNGMyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NoYXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IHthZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2dSxzZXRWdV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbnVtYmVyT2ZOb3RWdSxzZXROdW1iZXJPZk5vdFZ1XT1SZWFjdC51c2VTdGF0ZSgoKT0+MClcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIuX2lkIT11bmRlZmluZWQmJiB1c2VyLl9pZC5sZW5ndGg+MilcclxuICAgICAgICBnZXRVc2VyV2hvQ2hhdFdpdGgoe30scHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VyV2hvQ2hhdFdpdGg9cmVzdWx0LmRhdGEuZGF0YS5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZS5maXJzdFVzZXIuX2lkPT11c2VyLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5zZWNvdW5kVXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuZmlyc3RVc2VyLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobmV3VXNlcldob0NoYXRXaXRoKS50aGVuKG5ld2FycmF5PT57XHJcbiAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoWy4uLm5ld2FycmF5XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICB9KS5jYXRjaChlPT5jb25zb2xlLmxvZyhlLm1lc3NhZ2UpKVxyXG4gICAgfSxbdXNlcl0pXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6MH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoWy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKV0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgXHJcbiAgICB9LFtjdXJyZW50VXNlclRvQ2hhdFdpdGhdKVxyXG4gICAgY29uc3QgYWRkRW1vamk9KGUpPT57XHJcbiAgICAgICAgbGV0IHN5bSA9IGUudW5pZmllZC5zcGxpdCgnLScpXHJcbiAgICAgICAgbGV0IGNvZGVzQXJyYXkgPSBbXVxyXG4gICAgICAgIHN5bS5mb3JFYWNoKGVsID0+IGNvZGVzQXJyYXkucHVzaCgnMHgnICsgZWwpKVxyXG4gICAgICAgIGxldCBlbW9qaSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVzQXJyYXkpXHJcbiAgICAgICAgc2V0TWVzc2FnZShlbD0+e3JldHVybiBlbCtlbW9qaX0pXHJcbiAgICAgIH07XHJcbiAgICBjb25zdCBjbG9zZU9yT3BlbkVtb2ppUGlja2VyPSgpPT57XHJcbiAgICAgICAgc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlKGU9PiFlKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlYXJjaEZvclVzZXI9KGUpPT57XHJcbiAgICAgICAgICAgIHNlYXJjaFVzZXJOYW1lQXBpKGUudGFyZ2V0LnZhbHVlLHByb3BzLnRva2VuKS50aGVuKChyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnJlc3VsdC5kYXRhLmRhdGFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGdldFVzZXJkYXRhRm49KGN1cnJlbnRVc2VyRGF0YSk9PntcclxuICAgICAgICBzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGgoY3VycmVudFVzZXJEYXRhKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbmRNZXNzYWdlPSgpPT57XHJcbiAgICAgICAgaWYobWVzc2FnZS5sZW5ndGg+MCYmY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICBhZGRNZXNzYWdlKHtyZWNlaXZlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLG1lc3NhZ2U6bWVzc2FnZSxGaXJzdFRpbWU6Y3VycmVudENoYXRzLmxlbmd0aH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOlt1c2VyLl9pZF0sbWVzc2FnZTptZXNzYWdlLF9pZDpyfV1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHNldE51bWJlck9mTm90VnUoZT0+ZSsxKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIse290aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsdGV4dDptZXNzYWdlLHNlbmRlcklkOnVzZXIuX2lkfSlcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIilcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6ZmFsc2Usb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhc3luYyAgZnVuY3Rpb24gIGNoYXRIYW5kbGVyKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9tc2dTb3VuZC5tcDNcIilcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgICAgICAgICBpZih2dT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzV3JpdGluZyhkYXRhKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGRhdGEuaXNXcml0aW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXR2dT0oZGF0YSk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0VnVcIilcclxuICAgICAgICAgICAgaWYoY3VycmVudENoYXRzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT1jdXJyZW50Q2hhdHMubGVuZ3RoO2k+MDtpLS0pe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlKVtpXSE9dW5kZWZpbmVkJiZkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlKVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yIT1cInJnYigyNCwgMTE4LCAyNDMpXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvcj1cIiMxODc2ZjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROdW1iZXJPZk5vdFZ1KDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnJlYWtcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0dnVcIixzZXR2dSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXInLCBjaGF0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixzZXR2dSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY29uc3Qgc2Nyb2xsZm49KGUpPT57XHJcbiAgICAgICAgICAvL2lmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IChlLnRhcmdldC5zY3JvbGxIZWlnaHQgLSBlLnRhcmdldC5vZmZzZXRIZWlnaHQpKXtcclxuICAgICAgICAgIGlmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IDApe1xyXG4gICAgICAgICAgICBzZXRTa2lwKGU9PmUrMjApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDpza2lwfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT5bLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpLC4uLmVdKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sW3NraXBdKVxyXG4gICAgICBjb25zdCBvbkZvY3VzVnU9KGUpPT57XHJcbiAgICAgICAgICBpZihlLl9yZWFjdE5hbWU9PVwib25Gb2N1c1wiKXtcclxuICAgICAgICAgICAgc2V0VnUodHJ1ZSlcclxuICAgICAgICAgICAgaWYobnVtYmVyT2ZOb3RWdSE9MCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0VnUoZmFsc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgZ2V0VXNlcmRhdGE9e2dldFVzZXJkYXRhRm59IGtleT17ZS5faWR9IHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48aDM+e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC51c2VyTmFtZX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNlbGxpcHNpc30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvblNjcm9sbD17KGUpPT5zY3JvbGxmbihlKX0gcmVmPXttZXNzYWdlc0NvbXB9IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDaGF0cy5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17ZS5faWR9IGNsYXNzTmFtZT17U3R5bGUub25lTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnVzZXJzWzBdPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZVRleHR9IHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6ZmFsc2V9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gJHtTdHlsZS55b3VyTWVzc2FnZX1gfSAgdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIi0xMDAlXCIsZmxvYXQ6XCJyaWdodFwiLGJhY2tncm91bmRDb2xvcjpcIiMxODc2ZjNcIixjb2xvcjpcIndoaXRlXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD57PHNwYW4gc3R5bGU9e2Uuc2Vlbj09dHJ1ZT97Y29sb3I6XCIjMTg3NmYzXCJ9Ontjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9e1N0eWxlLnNlZW59PiYjMTAwMDQ7PC9zcGFuPn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25CbHVyPXsoZSk9Pm9uRm9jdXNWdShlKX0gb25Gb2N1cz17KGUpPT5vbkZvY3VzVnUoZSl9IHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm9wZW5PckNsb3NlRW1vamlQaWNrZXJ9IG9uQ2xpY2s9eygpPT5jbG9zZU9yT3BlbkVtb2ppUGlja2VyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICByZXR1cm4gcmVxLmNvb2tpZXMudG9rZW4gPyB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB9IH0gOiB7IHByb3BzOiB7IHRva2VuOiBmYWxzZSB9IH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFNlbnRTdmc9KCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICApXHJcbiAgfVxyXG4gIGNvbnN0IFVzZXJzPShwcm9wcyk9PntcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApfX0+XHJcbiAgICAgICAgICAgICAgICB7bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCE9MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdFNlZW5NZXNzYWdlTnVtYmV9PjxzcGFuPntub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsfTwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==