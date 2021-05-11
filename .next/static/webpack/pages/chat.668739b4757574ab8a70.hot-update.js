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
                /*if(vu==true){
                    
                    socket.emit("vu",{state:true,otherUserId:currentUserToChatWith._id})
                }*/

                _context.next = 5;
                return listOfUsers.map(function (e) {
                  if (data.senderId == e._id && currentUserToChatWith._id != e._id) {
                    e.notSeenMessageNumber = e.notSeenMessageNumber + 1;
                    return Promise.resolve(e);
                  } else {
                    return Promise.resolve(e);
                  }
                });

              case 5:
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

              case 8:
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
      console.log(document.getElementById(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu).style);

      if (document.getElementById(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu) != undefined) {
        document.getElementById(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu).style.color = "#1876f3";
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
      lineNumber: 194,
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
            lineNumber: 198,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
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
                lineNumber: 205,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
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
                lineNumber: 214,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
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
                    lineNumber: 225,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 37
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "".concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText, " "),
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
                    lineNumber: 226,
                    columnNumber: 238
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    id: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu,
                    style: e.seen == true ? {
                      color: "#1876f3"
                    } : {
                      color: "black"
                    },
                    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.seen,
                    children: "\u2714"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 256
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
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
                  lineNumber: 234,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 189
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 182
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
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
                    lineNumber: 237,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
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
                    lineNumber: 238,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
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
                    lineNumber: 240,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 193,
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
        lineNumber: 257,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 257,
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
          lineNumber: 267,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 266,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwiZGF0YSIsIm1hcCIsImUiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJyZXZlcnNlIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVycm9yIiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiTGlzdE9mVXNlciIsInNldHZ1IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlN0eWxlIiwieW91ck1lc3NhZ2VWdSIsInN0eWxlIiwiY29sb3IiLCJvbiIsIm9mZiIsInNjcm9sbGZuIiwiY29udGFpbmVyIiwiY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lciIsIlVzZXJDb250YW5lciIsImhlYWRlciIsImxpc3RDb250YWNzIiwiYm90dG9tIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXRjc3MiLCJjaGF0Q29udGFpbmVyIiwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lIiwidXNlckltYWdlQ29udGFpbmVyIiwiaXNXcml0aW5nQ29udGFpbmVyIiwibGRzZWxsaXBzaXMiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsInNlZW4iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Q29udGFpbmVyIiwiYnRucyIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJpZCIsInNraW4iLCJlbW9qaVBpY2tlckNvbnRhaW5lciIsImJ0bnNlbmQiLCJzZW5kTWVzc2FnZUJ0biIsIlNlbnRTdmciLCJVc2VycyIsInVzZXJEYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJ1c2VyQ29udGFpbmVyIiwiZ2V0VXNlcmRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlIiwiaW1nQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQytDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUQvQztBQUFBO0FBQUEsTUFDYkMsMkJBRGE7QUFBQSxNQUNlQyw4QkFEZjs7QUFBQSx5QkFFb0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRnBDO0FBQUE7QUFBQSxNQUViRyxvQkFGYTtBQUFBLE1BRVNDLHVCQUZULHdCQUVxRDs7O0FBRnJELHlCQUdlTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhmO0FBQUE7QUFBQSxNQUdiSyxXQUhhO0FBQUEsTUFHREMsY0FIQzs7QUFBQSx5QkFJbUNQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUFDTyxtQkFBZSxFQUFDQyxTQUFqQjtBQUEyQkMsWUFBUSxFQUFDRCxTQUFwQztBQUE4Q0UsT0FBRyxFQUFDRjtBQUFsRCxHQUFmLENBSm5DO0FBQUE7QUFBQSxNQUliRyxxQkFKYTtBQUFBLE1BSVNDLHdCQUpUOztBQUFBLHlCQUtPYiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUxQO0FBQUE7QUFBQSxNQUtiYSxPQUxhO0FBQUEsTUFLTEMsVUFMSzs7QUFBQSwwQkFNaUJmLDRDQUFL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LGVBRkgsZUFHRztBQUFNLGlCQUFTLEVBQUU2RiwrREFBSyxDQUFDM0YsUUFBdkI7QUFBQSwrQkFBaUM7QUFBQSxvQkFBSVgsS0FBSyxDQUFDNkksUUFBTixDQUFlbEk7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FiQzs7SUFBTWlJLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC42Njg3MzliNDc1NzU3NGFiOGE3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NoYXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IHthZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIuX2lkIT11bmRlZmluZWQmJiB1c2VyLl9pZC5sZW5ndGg+MilcclxuICAgICAgICBnZXRVc2VyV2hvQ2hhdFdpdGgoe30scHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VyV2hvQ2hhdFdpdGg9cmVzdWx0LmRhdGEuZGF0YS5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZS5maXJzdFVzZXIuX2lkPT11c2VyLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5zZWNvdW5kVXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuZmlyc3RVc2VyLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobmV3VXNlcldob0NoYXRXaXRoKS50aGVuKG5ld2FycmF5PT57XHJcbiAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoWy4uLm5ld2FycmF5XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICB9KS5jYXRjaChlPT5jb25zb2xlLmxvZyhlLm1lc3NhZ2UpKVxyXG4gICAgfSxbdXNlcl0pXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6MH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoWy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKV0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgXHJcbiAgICB9LFtjdXJyZW50VXNlclRvQ2hhdFdpdGhdKVxyXG4gICAgY29uc3QgYWRkRW1vamk9KGUpPT57XHJcbiAgICAgICAgbGV0IHN5bSA9IGUudW5pZmllZC5zcGxpdCgnLScpXHJcbiAgICAgICAgbGV0IGNvZGVzQXJyYXkgPSBbXVxyXG4gICAgICAgIHN5bS5mb3JFYWNoKGVsID0+IGNvZGVzQXJyYXkucHVzaCgnMHgnICsgZWwpKVxyXG4gICAgICAgIGxldCBlbW9qaSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVzQXJyYXkpXHJcbiAgICAgICAgc2V0TWVzc2FnZShlbD0+e3JldHVybiBlbCtlbW9qaX0pXHJcbiAgICAgIH07XHJcbiAgICBjb25zdCBjbG9zZU9yT3BlbkVtb2ppUGlja2VyPSgpPT57XHJcbiAgICAgICAgc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlKGU9PiFlKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlYXJjaEZvclVzZXI9KGUpPT57XHJcbiAgICAgICAgICAgIHNlYXJjaFVzZXJOYW1lQXBpKGUudGFyZ2V0LnZhbHVlLHByb3BzLnRva2VuKS50aGVuKChyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnJlc3VsdC5kYXRhLmRhdGFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGdldFVzZXJkYXRhRm49KGN1cnJlbnRVc2VyRGF0YSk9PntcclxuICAgICAgICBzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGgoY3VycmVudFVzZXJEYXRhKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbmRNZXNzYWdlPSgpPT57XHJcbiAgICAgICAgaWYobWVzc2FnZS5sZW5ndGg+MCYmY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICBhZGRNZXNzYWdlKHtyZWNlaXZlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLG1lc3NhZ2U6bWVzc2FnZSxGaXJzdFRpbWU6Y3VycmVudENoYXRzLmxlbmd0aH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOlt1c2VyLl9pZF0sbWVzc2FnZTptZXNzYWdlLF9pZDpyfV1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIix7b3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCx0ZXh0Om1lc3NhZ2Usc2VuZGVySWQ6dXNlci5faWR9KVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0TWVzc2FnZShcIlwiKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVzc2FnZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzpmYWxzZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFzeW5jICBmdW5jdGlvbiAgY2hhdEhhbmRsZXIoZGF0YSl7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIuL21zZ1NvdW5kLm1wM1wiKVxyXG4gICAgICAgICAgICBhdWRpby5wbGF5KClcclxuICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZmFsc2UpXHJcbiAgICAgICAgICAgIC8qaWYodnU9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzV3JpdGluZyhkYXRhKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGRhdGEuaXNXcml0aW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXR2dT0oZGF0YSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU3R5bGUueW91ck1lc3NhZ2VWdSkuc3R5bGUpXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFN0eWxlLnlvdXJNZXNzYWdlVnUpIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU3R5bGUueW91ck1lc3NhZ2VWdSkuc3R5bGUuY29sb3I9XCIjMTg3NmYzXCJcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0dnVcIixzZXR2dSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXInLCBjaGF0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixzZXR2dSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY29uc3Qgc2Nyb2xsZm49KGUpPT57XHJcbiAgICAgICAgICAvL2lmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IChlLnRhcmdldC5zY3JvbGxIZWlnaHQgLSBlLnRhcmdldC5vZmZzZXRIZWlnaHQpKXtcclxuICAgICAgICAgIGlmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IDApe1xyXG4gICAgICAgICAgICBzZXRTa2lwKGU9PmUrMjApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDpza2lwfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT5bLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpLC4uLmVdKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sW3NraXBdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2QmFyIHRva2VuPXtwcm9wcy50b2tlbn0+PC9OYXZCYXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDb250YW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmNvbnRhY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5saXN0Q29udGFjc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIGdldFVzZXJkYXRhPXtnZXRVc2VyZGF0YUZufSBrZXk9e2UuX2lkfSB1c2VyRGF0YT17ZX0+PC9Vc2Vycz4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZWFyY2hGb3JVc2VyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPlNlYXJjaCB1c2Vyczwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NZXNzYWdlczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VySW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPXtjdXJyZW50VXNlclRvQ2hhdFdpdGguY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PGgzPntjdXJyZW50VXNlclRvQ2hhdFdpdGgudXNlck5hbWV9PC9oMz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1dyaXRpbmdTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlzV3JpdGluZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGRzZWxsaXBzaXN9PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25TY3JvbGw9eyhlKT0+c2Nyb2xsZm4oZSl9IHJlZj17bWVzc2FnZXNDb21wfSBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Q2hhdHMubWFwKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGRpdiBrZXk9e2UuX2lkfSBjbGFzc05hbWU9e1N0eWxlLm9uZU1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS51c2Vyc1swXT09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VUZXh0fSB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOmZhbHNlfSAgc3R5bGU9e3tcIi0taVwiOlwiMCVcIixmbG9hdDpcImxlZnRcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZTRlNmViXCIsY29sb3I6XCJibGFja1wifX0+PHA+e2UubWVzc2FnZX08L3A+PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGUubWVzc2FnZVRleHR9IGB9ICAgdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIi0xMDAlXCIsZmxvYXQ6XCJyaWdodFwiLGJhY2tncm91bmRDb2xvcjpcIiMxODc2ZjNcIixjb2xvcjpcIndoaXRlXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48c3BhbiBpZD17U3R5bGUueW91ck1lc3NhZ2VWdX0gc3R5bGU9e2Uuc2Vlbj09dHJ1ZT97Y29sb3I6XCIjMTg3NmYzXCJ9Ontjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9e1N0eWxlLnNlZW59ID4mIzEwMDA0Ozwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm9wZW5PckNsb3NlRW1vamlQaWNrZXJ9IG9uQ2xpY2s9eygpPT5jbG9zZU9yT3BlbkVtb2ppUGlja2VyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICByZXR1cm4gcmVxLmNvb2tpZXMudG9rZW4gPyB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB9IH0gOiB7IHByb3BzOiB7IHRva2VuOiBmYWxzZSB9IH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFNlbnRTdmc9KCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICApXHJcbiAgfVxyXG4gIGNvbnN0IFVzZXJzPShwcm9wcyk9PntcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApfX0+XHJcbiAgICAgICAgICAgICAgICB7bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCE9MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdFNlZW5NZXNzYWdlTnVtYmV9PjxzcGFuPntub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsfTwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==