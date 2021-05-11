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
      for (var i = currentChats.length; i > 0; i--) {
        console.log(document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i]); //  document.getElementsByClassName(Style.yourMessage)[i].style.color="#1876f3"
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
      socket.emit("vu", {
        state: true,
        otherUserId: currentUserToChatWith._id
      });
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
      lineNumber: 204,
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
            lineNumber: 208,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
                lineNumber: 215,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
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
                lineNumber: 224,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
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
                    lineNumber: 235,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
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
                    lineNumber: 236,
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
                    lineNumber: 236,
                    columnNumber: 276
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
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
                  lineNumber: 244,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 243
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 236
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
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
                    lineNumber: 247,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
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
                    lineNumber: 248,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
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
                    lineNumber: 250,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 9
  }, _this);
};

_s(chat, "P7L4O7MDcVEpGUX624gzh6fPk+A=");

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
        lineNumber: 267,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 267,
    columnNumber: 9
  }, _this);
};

_c = SentSvg;

var Users = function Users(props) {
  _s2();

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(props.userData.notSeenMessageNumber),
      _React$useState20 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState19, 2),
      notSeenMessageNumberlocal = _React$useState20[0],
      setNotSeenMessageNumberlocal = _React$useState20[1];

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
          lineNumber: 277,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 276,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidnUiLCJzZXRWdSIsInVzZUVmZmVjdCIsImxlbmd0aCIsImdldFVzZXJXaG9DaGF0V2l0aCIsInRva2VuIiwidGhlbiIsInJlc3VsdCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsImRhdGEiLCJtYXAiLCJlIiwiZmlyc3RVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZWNvdW5kVXNlciIsIm5vdFNlZW5NZXNzYWdlTnVtYmVyIiwiYWxsIiwibmV3YXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24iLCJzZWNvbmRVc2VyIiwicmV2ZXJzZSIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlcnJvciIsImVtaXQiLCJzdGF0ZSIsIm90aGVyVXNlcklkIiwiYWRkRW1vamkiLCJzeW0iLCJ1bmlmaWVkIiwic3BsaXQiLCJjb2Rlc0FycmF5IiwiZm9yRWFjaCIsImVsIiwicHVzaCIsImVtb2ppIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNsb3NlT3JPcGVuRW1vamlQaWNrZXIiLCJzZWFyY2hGb3JVc2VyIiwic2VhcmNoVXNlck5hbWVBcGkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFVzZXJkYXRhRm4iLCJjdXJyZW50VXNlckRhdGEiLCJzZW5kTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJyZWNlaXZlciIsIkZpcnN0VGltZSIsInIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ1c2VycyIsInRleHQiLCJzZW5kZXJJZCIsIm1lc3NhZ2VIYW5kbGVyIiwiaXNXcml0aW5nIiwiY2hhdEhhbmRsZXIiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsIkxpc3RPZlVzZXIiLCJzZXR2dSIsImkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTdHlsZSIsInlvdXJNZXNzYWdlIiwib24iLCJvZmYiLCJzY3JvbGxmbiIsIm9uRm9jdXNWdSIsIl9yZWFjdE5hbWUiLCJjb250YWluZXIiLCJjaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyIiwiVXNlckNvbnRhbmVyIiwiaGVhZGVyIiwibGlzdENvbnRhY3MiLCJib3R0b20iLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dGNzcyIsImNoYXRDb250YWluZXIiLCJoZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJpc1dyaXRpbmdDb250YWluZXIiLCJsZHNlbGxpcHNpcyIsIm1lc3NhZ2VzIiwib25lTWVzc2FnZSIsIm1lc3NhZ2VUZXh0IiwiZGF0ZSIsInNsaWNlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJzZWVuIiwicHJldmVudERlZmF1bHQiLCJpbnB1dENvbnRhaW5lciIsImJ0bnMiLCJvcGVuT3JDbG9zZUVtb2ppUGlja2VyIiwiZW1vamlMb2dvIiwiaWQiLCJza2luIiwiZW1vamlQaWNrZXJDb250YWluZXIiLCJidG5zZW5kIiwic2VuZE1lc3NhZ2VCdG4iLCJTZW50U3ZnIiwiVXNlcnMiLCJ1c2VyRGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwidXNlckNvbnRhaW5lciIsImdldFVzZXJkYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZSIsImltZ0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUMrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEL0M7QUFBQTtBQUFBLE1BQ2JDLDJCQURhO0FBQUEsTUFDZUMsOEJBRGY7O0FBQUEseUJBRW9DSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZwQztBQUFBO0FBQUEsTUFFYkcsb0JBRmE7QUFBQSxNQUVTQyx1QkFGVCx3QkFFcUQ7OztBQUZyRCx5QkFHZUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIZjtBQUFBO0FBQUEsTUFHYkssV0FIYTtBQUFBLE1BR0RDLGNBSEM7O0FBQUEseUJBSW1DUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBQ08sbUJBQWUsRUFBQ0MsU0FBakI7QUFBMkJDLFlBQVEsRUFBQ0QsU0FBcEM7QUFBOENFLE9BQUcsRUFBQ0Y7QUFBbEQsR0FBZixDQUpuQztBQUFBO0FBQUEsTUFJYkcscUJBSmE7QUFBQSxNQUlTQyx3QkFKVDs7QUFBQSx5QkFLT2IsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FMUDtBQUFBO0FBQUEsTUFLYmEs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dC5hZjEyN2NjYjI0ZDU5YzAzMDc4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NoYXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IHthZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2dSxzZXRWdV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodXNlci5faWQhPXVuZGVmaW5lZCYmIHVzZXIuX2lkLmxlbmd0aD4yKVxyXG4gICAgICAgIGdldFVzZXJXaG9DaGF0V2l0aCh7fSxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgbGV0IG5ld1VzZXJXaG9DaGF0V2l0aD1yZXN1bHQuZGF0YS5kYXRhLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICBpZihlLmZpcnN0VXNlci5faWQ9PXVzZXIuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLnNlY291bmRVc2VyLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5maXJzdFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChuZXdVc2VyV2hvQ2hhdFdpdGgpLnRoZW4obmV3YXJyYXk9PntcclxuICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhbLi4ubmV3YXJyYXldKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICBcclxuICAgICAgICAgIH0pLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUubWVzc2FnZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDowfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhbLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpXSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VhcmNoRm9yVXNlcj0oZSk9PntcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkoZS50YXJnZXQudmFsdWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2V0VXNlcmRhdGFGbj0oY3VycmVudFVzZXJEYXRhKT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aChjdXJyZW50VXNlckRhdGEpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2U9KCk9PntcclxuICAgICAgICBpZihtZXNzYWdlLmxlbmd0aD4wJiZjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGFkZE1lc3NhZ2Uoe3JlY2VpdmVyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsbWVzc2FnZTptZXNzYWdlLEZpcnN0VGltZTpjdXJyZW50Q2hhdHMubGVuZ3RofSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W3VzZXIuX2lkXSxtZXNzYWdlOm1lc3NhZ2UsX2lkOnJ9XVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIix7b3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCx0ZXh0Om1lc3NhZ2Usc2VuZGVySWQ6dXNlci5faWR9KVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0TWVzc2FnZShcIlwiKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVzc2FnZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzpmYWxzZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFzeW5jICBmdW5jdGlvbiAgY2hhdEhhbmRsZXIoZGF0YSl7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIuL21zZ1NvdW5kLm1wM1wiKVxyXG4gICAgICAgICAgICBhdWRpby5wbGF5KClcclxuICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZmFsc2UpXHJcbiAgICAgICAgICAgIGlmKHZ1PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBMaXN0T2ZVc2VyID0gYXdhaXQgbGlzdE9mVXNlcnMubWFwKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09ZS5faWQgJiYgY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9ZS5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUubm90U2Vlbk1lc3NhZ2VOdW1iZXI9ZS5ub3RTZWVuTWVzc2FnZU51bWJlcisxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChMaXN0T2ZVc2VyKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCl7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W2RhdGEuc2VuZGVySWRdLG1lc3NhZ2U6ZGF0YS50ZXh0LF9pZDpyfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNXcml0aW5nKGRhdGEpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZGF0YS5pc1dyaXRpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldHZ1PShkYXRhKT0+e1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9Y3VycmVudENoYXRzLmxlbmd0aDtpPjA7aS0tKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2UpW2ldKVxyXG4gICAgICAgICAgICAgICAgLy8gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2UpW2ldLnN0eWxlLmNvbG9yPVwiIzE4NzZmM1wiXHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgIHNvY2tldC5vbihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgIHNvY2tldC5vbihcImdldE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLGNoYXRIYW5kbGVyKVxyXG4gICAgICAgIHNvY2tldC5vbihcInNldHZ1XCIsc2V0dnUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsc2V0dnUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHNjcm9sbGZuPShlKT0+e1xyXG4gICAgICAgICAgLy9pZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0KSl7XHJcbiAgICAgICAgICBpZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgc2V0U2tpcChlPT5lKzIwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6c2tpcH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICBcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtza2lwXSlcclxuICAgICAgY29uc3Qgb25Gb2N1c1Z1PShlKT0+e1xyXG4gICAgICAgICAgaWYoZS5fcmVhY3ROYW1lPT1cIm9uRm9jdXNcIil7XHJcbiAgICAgICAgICAgIHNldFZ1KHRydWUpXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRWdShmYWxzZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc2VsbGlwc2lzfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlLm1lc3NhZ2VUZXh0fSAke1N0eWxlLnlvdXJNZXNzYWdlfWB9ICB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOmZhbHNlfSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOlwiIzE4NzZmM1wiLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPns8c3BhbiBzdHlsZT17ZS5zZWVuPT10cnVlP3tjb2xvcjpcIiMxODc2ZjNcIn06e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT17U3R5bGUuc2Vlbn0+JiMxMDAwNDs8L3NwYW4+fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkJsdXI9eyhlKT0+b25Gb2N1c1Z1KGUpfSBvbkZvY3VzPXsoZSk9Pm9uRm9jdXNWdShlKX0gdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/IHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIH0gfSA6IHsgcHJvcHM6IHsgdG9rZW46IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgICBjb25zdCBbbm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsXT1SZWFjdC51c2VTdGF0ZShwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbChwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgfSxbcHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXJdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJDb250YWluZXJ9IG9uQ2xpY2s9eygpPT57cHJvcHMuZ2V0VXNlcmRhdGEocHJvcHMudXNlckRhdGEpLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwoMCl9fT5cclxuICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuaW1nQ29udGFpbmVyfT48aW1nIHNyYz17cHJvcHMudXNlckRhdGEuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9