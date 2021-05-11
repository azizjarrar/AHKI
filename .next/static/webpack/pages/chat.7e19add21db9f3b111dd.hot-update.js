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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
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
            lineNumber: 206,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
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
                lineNumber: 213,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
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
                lineNumber: 222,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
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
                    lineNumber: 233,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
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
                    lineNumber: 234,
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
                    lineNumber: 234,
                    columnNumber: 276
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
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
                  lineNumber: 242,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 189
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 182
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
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
                    lineNumber: 245,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
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
                    lineNumber: 246,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
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
                    lineNumber: 248,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 201,
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
        lineNumber: 265,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 265,
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
          lineNumber: 275,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwiZGF0YSIsIm1hcCIsImUiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJyZXZlcnNlIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVycm9yIiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwidnUiLCJMaXN0T2ZVc2VyIiwic2V0dnUiLCJpIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiU3R5bGUiLCJ5b3VyTWVzc2FnZSIsImNoaWxkTm9kZXMiLCJzdHlsZSIsImNvbG9yIiwic2V0TnVtYmVyT2ZOb3RWdSIsIm9uIiwib2ZmIiwic2Nyb2xsZm4iLCJjb250YWluZXIiLCJjaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyIiwiVXNlckNvbnRhbmVyIiwiaGVhZGVyIiwibGlzdENvbnRhY3MiLCJib3R0b20iLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dGNzcyIsImNoYXRDb250YWluZXIiLCJoZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJpc1dyaXRpbmdDb250YWluZXIiLCJsZHNlbGxpcHNpcyIsIm1lc3NhZ2VzIiwib25lTWVzc2FnZSIsIm1lc3NhZ2VUZXh0IiwiZGF0ZSIsInNsaWNlIiwiYmFja2dyb3VuZENvbG9yIiwic2VlbiIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJidG5zIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwiU2VudFN2ZyIsIlVzZXJzIiwidXNlckRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInVzZXJDb250YWluZXIiLCJnZXRVc2VyZGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDK0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRC9DO0FBQUE7QUFBQSxNQUNiQywyQkFEYTtBQUFBLE1BQ2VDLDhCQURmOztBQUFBLHlCQUVvQ0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGcEM7QUFBQTtBQUFBLE1BRWJHLG9CQUZhO0FBQUEsTUFFU0MsdUJBRlQsd0JBRXFEOzs7QUFGckQseUJBR2VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSGY7QUFBQTtBQUFBLE1BR2JLLFdBSGE7QUFBQSxNQUdEQyxjQUhDOztBQUFBLHlCQUltQ1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUNPLG1CQUFlLEVBQUNDLFNBQWpCO0FBQTJCQyxZQUFRLEVBQUNELFNBQXBDO0FBQThDRSxPQUFHLEVBQUNGO0FBQWxELEdBQWYsQ0FKbkM7QUFBQTtBQUFBLE1BSWJHLHFCQUphO0FBQUEsTUFJU0Msd0JBSlQ7O0FBQUEseUJBS09iLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFA7QUFBQTtBQUFB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QUFlbkcsb0JBQWhCLENBRkY7QUFHRixzQkFDSTtBQUFBLDJCQUFLO0FBQUssZUFBUyxFQUFFMEQsK0RBQUssQ0FBQzRDLGFBQXRCO0FBQXFDLGFBQU8sRUFBRSxtQkFBSTtBQUFDcEosYUFBSyxDQUFDcUosV0FBTixDQUFrQnJKLEtBQUssQ0FBQ2lKLFFBQXhCLEdBQWtDRSw0QkFBNEIsQ0FBQyxDQUFELENBQTlEO0FBQWtFLE9BQXJIO0FBQUEsaUJBQ0lELHlCQUF5QixJQUFFLENBQTNCLGlCQUE4QjtBQUFLLGlCQUFTLEVBQUUxQywrREFBSyxDQUFDOEMsbUJBQXRCO0FBQUEsK0JBQTJDO0FBQUEsb0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGxDLGVBRUc7QUFBTSxpQkFBUyxFQUFFMUMsK0RBQUssQ0FBQytDLFlBQXZCO0FBQUEsK0JBQXFDO0FBQUssYUFBRyxFQUFFdkosS0FBSyxDQUFDaUosUUFBTixDQUFleEksZUFBZixJQUFrQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSCxlQUdHO0FBQU0saUJBQVMsRUFBRStGLCtEQUFLLENBQUM3RixRQUF2QjtBQUFBLCtCQUFpQztBQUFBLG9CQUFJWCxLQUFLLENBQUNpSixRQUFOLENBQWV0STtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQWJDOztJQUFNcUksSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjdlMTlhZGQyMWRiOWYzYjExMWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge2FkZE1lc3NhZ2UsZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24sZ2V0VXNlcldob0NoYXRXaXRofSBmcm9tICcuLi9zZXJ2aWNlcy9jaGF0JztcclxuaW1wb3J0IHNvY2tldENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zb2NrZXRDb250ZXh0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuXHJcblxyXG5jb25zdCBjaGF0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlLHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbRW1vamlDb250YWluZXJIZWlnaHQsIHNldEVtb2ppQ29udGFpbmVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDkpLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuICAgIGNvbnN0IFtsaXN0T2ZVc2VycyxzZXRMaXN0T2ZVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY3VycmVudFVzZXJUb0NoYXRXaXRoLHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aF09UmVhY3QudXNlU3RhdGUoe2N1cnJlbnRJbWFnZVVybDp1bmRlZmluZWQsdXNlck5hbWU6dW5kZWZpbmVkLF9pZDp1bmRlZmluZWR9KVxyXG4gICAgY29uc3QgW21lc3NhZ2Usc2V0TWVzc2FnZV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjdXJyZW50Q2hhdHMsc2V0Q3VycmVudENoYXRzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IG1lc3NhZ2VzQ29tcD1SZWFjdC51c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbc29ja2V0LHNldFNvY2tldF09UmVhY3QudXNlQ29udGV4dChzb2NrZXRDb250ZXh0KVxyXG4gICAgY29uc3QgW3NraXAsc2V0U2tpcF09UmVhY3QudXNlU3RhdGUoKCk9PjApXHJcbiAgICBjb25zdCBbaXNXcml0aW5nU3RhdGUsc2V0SXNXcml0aW5nU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodXNlci5faWQhPXVuZGVmaW5lZCYmIHVzZXIuX2lkLmxlbmd0aD4yKVxyXG4gICAgICAgIGdldFVzZXJXaG9DaGF0V2l0aCh7fSxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgbGV0IG5ld1VzZXJXaG9DaGF0V2l0aD1yZXN1bHQuZGF0YS5kYXRhLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICBpZihlLmZpcnN0VXNlci5faWQ9PXVzZXIuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLnNlY291bmRVc2VyLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5maXJzdFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChuZXdVc2VyV2hvQ2hhdFdpdGgpLnRoZW4obmV3YXJyYXk9PntcclxuICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhbLi4ubmV3YXJyYXldKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICBcclxuICAgICAgICAgIH0pLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUubWVzc2FnZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDowfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhbLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpXSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VhcmNoRm9yVXNlcj0oZSk9PntcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkoZS50YXJnZXQudmFsdWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2V0VXNlcmRhdGFGbj0oY3VycmVudFVzZXJEYXRhKT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aChjdXJyZW50VXNlckRhdGEpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2U9KCk9PntcclxuICAgICAgICBpZihtZXNzYWdlLmxlbmd0aD4wJiZjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGFkZE1lc3NhZ2Uoe3JlY2VpdmVyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsbWVzc2FnZTptZXNzYWdlLEZpcnN0VGltZTpjdXJyZW50Q2hhdHMubGVuZ3RofSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W3VzZXIuX2lkXSxtZXNzYWdlOm1lc3NhZ2UsX2lkOnJ9XVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgaWYodnU9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IExpc3RPZlVzZXIgPSBhd2FpdCBsaXN0T2ZVc2Vycy5tYXAoKGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1lLl9pZCAmJiBjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT1lLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5ub3RTZWVuTWVzc2FnZU51bWJlcj1lLm5vdFNlZW5NZXNzYWdlTnVtYmVyKzFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKExpc3RPZlVzZXIpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbZGF0YS5zZW5kZXJJZF0sbWVzc2FnZTpkYXRhLnRleHQsX2lkOnJ9XVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc1dyaXRpbmcoZGF0YSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShkYXRhLmlzV3JpdGluZylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0dnU9KGRhdGEpPT57XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRDaGF0cy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9Y3VycmVudENoYXRzLmxlbmd0aDtpPjA7aS0tKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZSlbaV0hPXVuZGVmaW5lZCYmZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvciE9XCJyZ2IoMjQsIDExOCwgMjQzKVwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2UpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3I9XCIjMTg3NmYzXCJcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TnVtYmVyT2ZOb3RWdSgwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJyZWFrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgIHNvY2tldC5vbihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgIHNvY2tldC5vbihcImdldE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLGNoYXRIYW5kbGVyKVxyXG4gICAgICAgIHNvY2tldC5vbihcInNldHZ1XCIsc2V0dnUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsc2V0dnUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHNjcm9sbGZuPShlKT0+e1xyXG4gICAgICAgICAgLy9pZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0KSl7XHJcbiAgICAgICAgICBpZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgc2V0U2tpcChlPT5lKzIwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6c2tpcH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICBcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtza2lwXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc2VsbGlwc2lzfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlLm1lc3NhZ2VUZXh0fSAke1N0eWxlLnlvdXJNZXNzYWdlfWB9ICB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOmZhbHNlfSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOlwiIzE4NzZmM1wiLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPns8c3BhbiBzdHlsZT17ZS5zZWVuPT10cnVlP3tjb2xvcjpcIiMxODc2ZjNcIn06e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT17U3R5bGUuc2Vlbn0+JiMxMDAwNDs8L3NwYW4+fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCAgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/IHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIH0gfSA6IHsgcHJvcHM6IHsgdG9rZW46IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgICBjb25zdCBbbm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsXT1SZWFjdC51c2VTdGF0ZShwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbChwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgfSxbcHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXJdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJDb250YWluZXJ9IG9uQ2xpY2s9eygpPT57cHJvcHMuZ2V0VXNlcmRhdGEocHJvcHMudXNlckRhdGEpLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwoMCl9fT5cclxuICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuaW1nQ29udGFpbmVyfT48aW1nIHNyYz17cHJvcHMudXNlckRhdGEuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9