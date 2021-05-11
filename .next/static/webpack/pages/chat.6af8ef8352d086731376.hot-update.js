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
      console.log("d5al");
      setCurrentChats(function (e) {
        return Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(e.map(function (e) {
          return _objectSpread(_objectSpread({}, e), {}, {
            seen: true
          });
        }));
      });
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
      lineNumber: 199,
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
            lineNumber: 203,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
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
                lineNumber: 210,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
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
                lineNumber: 219,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
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
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: e.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 226
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
                    lineNumber: 230,
                    columnNumber: 245
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
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
                    lineNumber: 231,
                    columnNumber: 230
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
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
                  lineNumber: 239,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 243
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 236
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
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
                    lineNumber: 242,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
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
                    lineNumber: 243,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
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
                    lineNumber: 245,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 198,
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
        lineNumber: 262,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 262,
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
          lineNumber: 272,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 271,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidnUiLCJzZXRWdSIsInVzZUVmZmVjdCIsImxlbmd0aCIsImdldFVzZXJXaG9DaGF0V2l0aCIsInRva2VuIiwidGhlbiIsInJlc3VsdCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsImRhdGEiLCJtYXAiLCJlIiwiZmlyc3RVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZWNvdW5kVXNlciIsIm5vdFNlZW5NZXNzYWdlTnVtYmVyIiwiYWxsIiwibmV3YXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24iLCJzZWNvbmRVc2VyIiwicmV2ZXJzZSIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlcnJvciIsImFkZEVtb2ppIiwic3ltIiwidW5pZmllZCIsInNwbGl0IiwiY29kZXNBcnJheSIsImZvckVhY2giLCJlbCIsInB1c2giLCJlbW9qaSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyIiwic2VhcmNoRm9yVXNlciIsInNlYXJjaFVzZXJOYW1lQXBpIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRVc2VyZGF0YUZuIiwiY3VycmVudFVzZXJEYXRhIiwic2VuZE1lc3NhZ2UiLCJhZGRNZXNzYWdlIiwicmVjZWl2ZXIiLCJGaXJzdFRpbWUiLCJyIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwidXNlcnMiLCJlbWl0Iiwib3RoZXJVc2VySWQiLCJ0ZXh0Iiwic2VuZGVySWQiLCJtZXNzYWdlSGFuZGxlciIsImlzV3JpdGluZyIsImNoYXRIYW5kbGVyIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJzdGF0ZSIsIkxpc3RPZlVzZXIiLCJzZXR2dSIsInNlZW4iLCJvbiIsIm9mZiIsInNjcm9sbGZuIiwib25Gb2N1c1Z1IiwiX3JlYWN0TmFtZSIsIlN0eWxlIiwiY29udGFpbmVyIiwiY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lciIsIlVzZXJDb250YW5lciIsImhlYWRlciIsImxpc3RDb250YWNzIiwiYm90dG9tIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXRjc3MiLCJjaGF0Q29udGFpbmVyIiwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lIiwidXNlckltYWdlQ29udGFpbmVyIiwiaXNXcml0aW5nQ29udGFpbmVyIiwibGRzZWxsaXBzaXMiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicHJldmVudERlZmF1bHQiLCJpbnB1dENvbnRhaW5lciIsImJ0bnMiLCJvcGVuT3JDbG9zZUVtb2ppUGlja2VyIiwiZW1vamlMb2dvIiwiaWQiLCJza2luIiwiZW1vamlQaWNrZXJDb250YWluZXIiLCJidG5zZW5kIiwic2VuZE1lc3NhZ2VCdG4iLCJTZW50U3ZnIiwiVXNlcnMiLCJ1c2VyRGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwidXNlckNvbnRhaW5lciIsImdldFVzZXJkYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZSIsImltZ0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUMrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEL0M7QUFBQTtBQUFBLE1BQ2JDLDJCQURhO0FBQUEsTUFDZUMsOEJBRGY7O0FBQUEseUJBRW9DSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZwQztBQUFBO0FBQUEsTUFFYkcsb0JBRmE7QUFBQSxNQUVTQyx1QkFGVCx3QkFFcUQ7OztBQUZyRCx5QkFHZUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIZjtBQUFBO0FBQUEsTUFHYkssV0FIYTtBQUFBLE1BR0RDLGNBSEM7O0FBQUEseUJBSW1DUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBQ08sbUJBQWUsRUFBQ0MsU0FBakI7QUFBMkJDLFlBQVEsRUFBQ0QsU0FBcEM7QUFBOENFLE9BQUcsRUFBQ0Y7QUFBbEQsR0FBZixDQUpuQztBQUFBO0FBQUEsTUFJYkcscUJBSmE7QUFBQSxNQUlTQyx3QkFKVDs7QUFBQSx5QkFLT2IsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FMUDtBQUFBO0FBQUEsTUFLYmEsT0FMYTtBQUFBLE1BS0xDLFVBTEs7O0FBQUEsMEJBTWlCZiw0Q0FBSyxDQUFDQyxRQUFOLENB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LHlCQUF5QixJQUFFLENBQTNCLGlCQUE4QjtBQUFLLGlCQUFTLEVBQUVsQywrREFBSyxDQUFDc0MsbUJBQXRCO0FBQUEsK0JBQTJDO0FBQUEsb0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGxDLGVBRUc7QUFBTSxpQkFBUyxFQUFFbEMsK0RBQUssQ0FBQ3VDLFlBQXZCO0FBQUEsK0JBQXFDO0FBQUssYUFBRyxFQUFFbkosS0FBSyxDQUFDNkksUUFBTixDQUFlcEksZUFBZixJQUFrQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSCxlQUdHO0FBQU0saUJBQVMsRUFBRW1HLCtEQUFLLENBQUNqRyxRQUF2QjtBQUFBLCtCQUFpQztBQUFBLG9CQUFJWCxLQUFLLENBQUM2SSxRQUFOLENBQWVsSTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQWJDOztJQUFNaUksSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjZhZjhlZjgzNTJkMDg2NzMxMzc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge2FkZE1lc3NhZ2UsZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24sZ2V0VXNlcldob0NoYXRXaXRofSBmcm9tICcuLi9zZXJ2aWNlcy9jaGF0JztcclxuaW1wb3J0IHNvY2tldENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zb2NrZXRDb250ZXh0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuXHJcblxyXG5jb25zdCBjaGF0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlLHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbRW1vamlDb250YWluZXJIZWlnaHQsIHNldEVtb2ppQ29udGFpbmVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDkpLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuICAgIGNvbnN0IFtsaXN0T2ZVc2VycyxzZXRMaXN0T2ZVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY3VycmVudFVzZXJUb0NoYXRXaXRoLHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aF09UmVhY3QudXNlU3RhdGUoe2N1cnJlbnRJbWFnZVVybDp1bmRlZmluZWQsdXNlck5hbWU6dW5kZWZpbmVkLF9pZDp1bmRlZmluZWR9KVxyXG4gICAgY29uc3QgW21lc3NhZ2Usc2V0TWVzc2FnZV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjdXJyZW50Q2hhdHMsc2V0Q3VycmVudENoYXRzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IG1lc3NhZ2VzQ29tcD1SZWFjdC51c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbc29ja2V0LHNldFNvY2tldF09UmVhY3QudXNlQ29udGV4dChzb2NrZXRDb250ZXh0KVxyXG4gICAgY29uc3QgW3NraXAsc2V0U2tpcF09UmVhY3QudXNlU3RhdGUoKCk9PjApXHJcbiAgICBjb25zdCBbaXNXcml0aW5nU3RhdGUsc2V0SXNXcml0aW5nU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Z1LHNldFZ1XT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5ld1VzZXJXaG9DaGF0V2l0aCkudGhlbihuZXdhcnJheT0+e1xyXG4gICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKFsuLi5uZXdhcnJheV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfSkuY2F0Y2goZT0+Y29uc29sZS5sb2coZS5tZXNzYWdlKSlcclxuICAgIH0sW3VzZXJdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgfSxbY3VycmVudFVzZXJUb0NoYXRXaXRoXSlcclxuICAgIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgICAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgICAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZWw9PntyZXR1cm4gZWwrZW1vaml9KVxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZT0oKT0+e1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubGVuZ3RoPjAmJmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWRkTWVzc2FnZSh7cmVjZWl2ZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxtZXNzYWdlOm1lc3NhZ2UsRmlyc3RUaW1lOmN1cnJlbnRDaGF0cy5sZW5ndGh9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbdXNlci5faWRdLG1lc3NhZ2U6bWVzc2FnZSxfaWQ6cn1dXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgaWYodnU9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBMaXN0T2ZVc2VyID0gYXdhaXQgbGlzdE9mVXNlcnMubWFwKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09ZS5faWQgJiYgY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9ZS5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUubm90U2Vlbk1lc3NhZ2VOdW1iZXI9ZS5ub3RTZWVuTWVzc2FnZU51bWJlcisxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChMaXN0T2ZVc2VyKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCl7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W2RhdGEuc2VuZGVySWRdLG1lc3NhZ2U6ZGF0YS50ZXh0LF9pZDpyfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNXcml0aW5nKGRhdGEpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZGF0YS5pc1dyaXRpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldHZ1PShkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImQ1YWxcIilcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PlsuLi5lLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLmUsc2Vlbjp0cnVlfVxyXG4gICAgICAgICAgICB9KV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0dnVcIixzZXR2dSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXInLCBjaGF0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixzZXR2dSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY29uc3Qgc2Nyb2xsZm49KGUpPT57XHJcbiAgICAgICAgICAvL2lmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IChlLnRhcmdldC5zY3JvbGxIZWlnaHQgLSBlLnRhcmdldC5vZmZzZXRIZWlnaHQpKXtcclxuICAgICAgICAgIGlmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IDApe1xyXG4gICAgICAgICAgICBzZXRTa2lwKGU9PmUrMjApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDpza2lwfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT5bLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpLC4uLmVdKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sW3NraXBdKVxyXG4gICAgICBjb25zdCBvbkZvY3VzVnU9KGUpPT57XHJcbiAgICAgICAgICBpZihlLl9yZWFjdE5hbWU9PVwib25Gb2N1c1wiKXtcclxuICAgICAgICAgICAgc2V0VnUodHJ1ZSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRWdShmYWxzZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc2VsbGlwc2lzfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPns8c3BhbiBzdHlsZT17ZS5zZWVuPT10cnVlP3tjb2xvcjpcIiMxODc2ZjNcIn06e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT17U3R5bGUuc2Vlbn0+JiMxMDAwNDs8L3NwYW4+fTwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VUZXh0fSB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOmZhbHNlfSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOlwiIzE4NzZmM1wiLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkJsdXI9eyhlKT0+b25Gb2N1c1Z1KGUpfSBvbkZvY3VzPXsoZSk9Pm9uRm9jdXNWdShlKX0gdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/IHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIH0gfSA6IHsgcHJvcHM6IHsgdG9rZW46IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgICBjb25zdCBbbm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsXT1SZWFjdC51c2VTdGF0ZShwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbChwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgfSxbcHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXJdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJDb250YWluZXJ9IG9uQ2xpY2s9eygpPT57cHJvcHMuZ2V0VXNlcmRhdGEocHJvcHMudXNlckRhdGEpLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwoMCl9fT5cclxuICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuaW1nQ29udGFpbmVyfT48aW1nIHNyYz17cHJvcHMudXNlckRhdGEuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9