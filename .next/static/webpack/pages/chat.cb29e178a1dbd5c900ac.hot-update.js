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
        console.log(document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i].childNodes); //  document.getElementsByClassName(Style.yourMessage)[i].style.color="#1876f3"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidnUiLCJzZXRWdSIsInVzZUVmZmVjdCIsImxlbmd0aCIsImdldFVzZXJXaG9DaGF0V2l0aCIsInRva2VuIiwidGhlbiIsInJlc3VsdCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsImRhdGEiLCJtYXAiLCJlIiwiZmlyc3RVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZWNvdW5kVXNlciIsIm5vdFNlZW5NZXNzYWdlTnVtYmVyIiwiYWxsIiwibmV3YXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24iLCJzZWNvbmRVc2VyIiwicmV2ZXJzZSIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlcnJvciIsImVtaXQiLCJzdGF0ZSIsIm90aGVyVXNlcklkIiwiYWRkRW1vamkiLCJzeW0iLCJ1bmlmaWVkIiwic3BsaXQiLCJjb2Rlc0FycmF5IiwiZm9yRWFjaCIsImVsIiwicHVzaCIsImVtb2ppIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNsb3NlT3JPcGVuRW1vamlQaWNrZXIiLCJzZWFyY2hGb3JVc2VyIiwic2VhcmNoVXNlck5hbWVBcGkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFVzZXJkYXRhRm4iLCJjdXJyZW50VXNlckRhdGEiLCJzZW5kTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJyZWNlaXZlciIsIkZpcnN0VGltZSIsInIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ1c2VycyIsInRleHQiLCJzZW5kZXJJZCIsIm1lc3NhZ2VIYW5kbGVyIiwiaXNXcml0aW5nIiwiY2hhdEhhbmRsZXIiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsIkxpc3RPZlVzZXIiLCJzZXR2dSIsImkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTdHlsZSIsInlvdXJNZXNzYWdlIiwiY2hpbGROb2RlcyIsIm9uIiwib2ZmIiwic2Nyb2xsZm4iLCJvbkZvY3VzVnUiLCJfcmVhY3ROYW1lIiwiY29udGFpbmVyIiwiY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lciIsIlVzZXJDb250YW5lciIsImhlYWRlciIsImxpc3RDb250YWNzIiwiYm90dG9tIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXRjc3MiLCJjaGF0Q29udGFpbmVyIiwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lIiwidXNlckltYWdlQ29udGFpbmVyIiwiaXNXcml0aW5nQ29udGFpbmVyIiwibGRzZWxsaXBzaXMiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic2VlbiIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJidG5zIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwiU2VudFN2ZyIsIlVzZXJzIiwidXNlckRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInVzZXJDb250YWluZXIiLCJnZXRVc2VyZGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDK0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRC9DO0FBQUE7QUFBQSxNQUNiQywyQkFEYTtBQUFBLE1BQ2VDLDhCQURmOztBQUFBLHlCQUVvQ0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGcEM7QUFBQTtBQUFBLE1BRWJHLG9CQUZhO0FBQUEsTUFFU0MsdUJBRlQsd0JBRXFEOzs7QUFGckQseUJBR2VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSGY7QUFBQTtBQUFBLE1BR2JLLFdBSGE7QUFBQSxNQUdEQyxjQUhDOztBQUFBLHlCQUltQ1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUNPLG1CQUFlLEVBQUNDLFNBQWpCO0FBQTJCQyxZQUFRLEVBQUNELFNBQXBDO0FBQThDRSxPQUFHLEVBQUNGO0FBQWxELEdBQWYsQ0FKbkM7QUFBQTtBQUFBLE1BSWJHLHFCQUphO0FBQUEsTUFJU0Msd0JBSlQ7O0FBQUEseUJBS09iLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFA7QUFB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dGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LmNiMjllMTc4YTFkYmQ1YzkwMGFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge2FkZE1lc3NhZ2UsZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24sZ2V0VXNlcldob0NoYXRXaXRofSBmcm9tICcuLi9zZXJ2aWNlcy9jaGF0JztcclxuaW1wb3J0IHNvY2tldENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zb2NrZXRDb250ZXh0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuXHJcblxyXG5jb25zdCBjaGF0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlLHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbRW1vamlDb250YWluZXJIZWlnaHQsIHNldEVtb2ppQ29udGFpbmVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDkpLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuICAgIGNvbnN0IFtsaXN0T2ZVc2VycyxzZXRMaXN0T2ZVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY3VycmVudFVzZXJUb0NoYXRXaXRoLHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aF09UmVhY3QudXNlU3RhdGUoe2N1cnJlbnRJbWFnZVVybDp1bmRlZmluZWQsdXNlck5hbWU6dW5kZWZpbmVkLF9pZDp1bmRlZmluZWR9KVxyXG4gICAgY29uc3QgW21lc3NhZ2Usc2V0TWVzc2FnZV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjdXJyZW50Q2hhdHMsc2V0Q3VycmVudENoYXRzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IG1lc3NhZ2VzQ29tcD1SZWFjdC51c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbc29ja2V0LHNldFNvY2tldF09UmVhY3QudXNlQ29udGV4dChzb2NrZXRDb250ZXh0KVxyXG4gICAgY29uc3QgW3NraXAsc2V0U2tpcF09UmVhY3QudXNlU3RhdGUoKCk9PjApXHJcbiAgICBjb25zdCBbaXNXcml0aW5nU3RhdGUsc2V0SXNXcml0aW5nU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Z1LHNldFZ1XT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5ld1VzZXJXaG9DaGF0V2l0aCkudGhlbihuZXdhcnJheT0+e1xyXG4gICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKFsuLi5uZXdhcnJheV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfSkuY2F0Y2goZT0+Y29uc29sZS5sb2coZS5tZXNzYWdlKSlcclxuICAgIH0sW3VzZXJdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG5cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgfSxbY3VycmVudFVzZXJUb0NoYXRXaXRoXSlcclxuICAgIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgICAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgICAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZWw9PntyZXR1cm4gZWwrZW1vaml9KVxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZT0oKT0+e1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubGVuZ3RoPjAmJmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWRkTWVzc2FnZSh7cmVjZWl2ZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxtZXNzYWdlOm1lc3NhZ2UsRmlyc3RUaW1lOmN1cnJlbnRDaGF0cy5sZW5ndGh9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbdXNlci5faWRdLG1lc3NhZ2U6bWVzc2FnZSxfaWQ6cn1dXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgaWYodnU9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IExpc3RPZlVzZXIgPSBhd2FpdCBsaXN0T2ZVc2Vycy5tYXAoKGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1lLl9pZCAmJiBjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT1lLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5ub3RTZWVuTWVzc2FnZU51bWJlcj1lLm5vdFNlZW5NZXNzYWdlTnVtYmVyKzFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKExpc3RPZlVzZXIpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbZGF0YS5zZW5kZXJJZF0sbWVzc2FnZTpkYXRhLnRleHQsX2lkOnJ9XVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc1dyaXRpbmcoZGF0YSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShkYXRhLmlzV3JpdGluZylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0dnU9KGRhdGEpPT57XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1jdXJyZW50Q2hhdHMubGVuZ3RoO2k+MDtpLS0pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZSlbaV0uY2hpbGROb2RlcylcclxuICAgICAgICAgICAgICAgIC8vICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlKVtpXS5zdHlsZS5jb2xvcj1cIiMxODc2ZjNcIlxyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICBzb2NrZXQub24oXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICBzb2NrZXQub24oXCJnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIixjaGF0SGFuZGxlcilcclxuICAgICAgICBzb2NrZXQub24oXCJzZXR2dVwiLHNldHZ1KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE1lc3NhZ2VGcm9tVXNlclRvVXNlcicsIGNoYXRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJpc1dyaXRpbmdTdGF0ZVwiLHNldHZ1KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBzY3JvbGxmbj0oZSk9PntcclxuICAgICAgICAgIC8vaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCkpe1xyXG4gICAgICAgICAgaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNldFNraXAoZT0+ZSsyMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOnNraXB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PlsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCksLi4uZV0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbc2tpcF0pXHJcbiAgICAgIGNvbnN0IG9uRm9jdXNWdT0oZSk9PntcclxuICAgICAgICAgIGlmKGUuX3JlYWN0TmFtZT09XCJvbkZvY3VzXCIpe1xyXG4gICAgICAgICAgICBzZXRWdSh0cnVlKVxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0VnUoZmFsc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgZ2V0VXNlcmRhdGE9e2dldFVzZXJkYXRhRm59IGtleT17ZS5faWR9IHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48aDM+e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC51c2VyTmFtZX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNlbGxpcHNpc30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvblNjcm9sbD17KGUpPT5zY3JvbGxmbihlKX0gcmVmPXttZXNzYWdlc0NvbXB9IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDaGF0cy5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17ZS5faWR9IGNsYXNzTmFtZT17U3R5bGUub25lTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnVzZXJzWzBdPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZVRleHR9IHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6ZmFsc2V9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gJHtTdHlsZS55b3VyTWVzc2FnZX1gfSAgdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIi0xMDAlXCIsZmxvYXQ6XCJyaWdodFwiLGJhY2tncm91bmRDb2xvcjpcIiMxODc2ZjNcIixjb2xvcjpcIndoaXRlXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD57PHNwYW4gc3R5bGU9e2Uuc2Vlbj09dHJ1ZT97Y29sb3I6XCIjMTg3NmYzXCJ9Ontjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9e1N0eWxlLnNlZW59PiYjMTAwMDQ7PC9zcGFuPn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25CbHVyPXsoZSk9Pm9uRm9jdXNWdShlKX0gb25Gb2N1cz17KGUpPT5vbkZvY3VzVnUoZSl9IHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm9wZW5PckNsb3NlRW1vamlQaWNrZXJ9IG9uQ2xpY2s9eygpPT5jbG9zZU9yT3BlbkVtb2ppUGlja2VyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICByZXR1cm4gcmVxLmNvb2tpZXMudG9rZW4gPyB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB9IH0gOiB7IHByb3BzOiB7IHRva2VuOiBmYWxzZSB9IH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFNlbnRTdmc9KCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICApXHJcbiAgfVxyXG4gIGNvbnN0IFVzZXJzPShwcm9wcyk9PntcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApfX0+XHJcbiAgICAgICAgICAgICAgICB7bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCE9MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdFNlZW5NZXNzYWdlTnVtYmV9PjxzcGFuPntub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsfTwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==