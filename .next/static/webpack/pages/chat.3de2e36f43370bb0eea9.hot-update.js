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
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

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

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({
    colorone: "#1876f3",
    colortwo: "#e4e6eb"
  }),
      _React$useState18 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState17, 2),
      chatColor = _React$useState18[0],
      setChatColor = _React$useState18[1];

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
          otherUserId: currentUserToChatWith._id,
          senderid: user._id
        });
      } else {
        socket.emit("isWriting", {
          isWriting: false,
          otherUserId: currentUserToChatWith._id,
          senderid: user._id
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
                socket.emit("vu", {
                  state: true,
                  otherUserId: currentUserToChatWith._id
                });
                /*if(vu==true){
                    
                    socket.emit("vu",{state:true,otherUserId:currentUserToChatWith._id})
                }*/

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
      console.log(currentUserToChatWith._id);

      if (data.userWhoReciveWriting == user._id && data.senderid == currentUserToChatWith._id) {
        setIsWritingState(data.isWriting);
      }
    }

    var setvu = function setvu(data) {
      if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu).length != 0) {
        for (var i = currentChats.length - 1; i > 0; i--) {
          if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu)[i] != undefined) {
            if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu)[i].childNodes[1].style.color != "rgb(24, 118, 243)") {
              document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu)[i].childNodes[1].style.color = "rgb(24, 118, 243)";
            }
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
        socket.off("setvu", setvu);
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

  var getNewColor = function getNewColor(color) {
    setChatColor(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        colorone: color
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
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
            lineNumber: 212,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
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
                lineNumber: 219,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
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
                lineNumber: 228,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 46
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.changeColorContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ColorPicker, {
                getNewColorfn: getNewColor,
                chatColor: chatColor
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 73
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : "false",
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
                    lineNumber: 239,
                    columnNumber: 228
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 37
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "".concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText, " ").concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu, " "),
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : "false",
                  style: {
                    "--i": "-100%",
                    "float": "right",
                    backgroundColor: chatColor.colorone,
                    color: "white"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: e.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 272
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
                    lineNumber: 240,
                    columnNumber: 290
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
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
                  lineNumber: 248,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 189
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 182
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
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
                    lineNumber: 251,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
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
                    lineNumber: 252,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 250,
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
                    lineNumber: 254,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 9
  }, _this);
};

_s(chat, "weMQ+hBZ1KrBqdVWA58uU7OT9vQ=");

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
        lineNumber: 271,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 271,
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
          lineNumber: 281,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 9
  }, _this);
};

_s2(Users, "pd1fD7onXKAt+z6/CWeN/oALkEw=");

_c2 = Users;

var ColorPicker = function ColorPicker(props) {
  _s3();

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState22 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState21, 2),
      openColorPicker = _React$useState22[0],
      setOpenColorPicker = _React$useState22[1];

  var changePrimaryColor = function changePrimaryColor(color) {
    props.getNewColorfn(color);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: function onClick() {
      return setOpenColorPicker(true);
    },
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chatColor,
    style: {
      backgroundColor: props.chatColor.colorone
    },
    children: openColorPicker && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.colorPicker,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#ff1744");
        },
        style: {
          backgroundColor: "#ff1744"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#f50057");
        },
        style: {
          backgroundColor: "#f50057"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#3d5afe");
        },
        style: {
          backgroundColor: "#3d5afe"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#76ff03");
        },
        style: {
          backgroundColor: "#76ff03"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#c6ff00");
        },
        style: {
          backgroundColor: "#c6ff00"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#ff3d00");
        },
        style: {
          backgroundColor: "#ff3d00"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#651fff");
        },
        style: {
          backgroundColor: "#651fff"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#ffea00");
        },
        style: {
          backgroundColor: "#ffea00"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#f50057");
        },
        style: {
          backgroundColor: "#f50057"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#ff1744");
        },
        style: {
          backgroundColor: "#ff1744"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#1de9b6");
        },
        style: {
          backgroundColor: "#1de9b6"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.color,
        onClick: function onClick() {
          return changePrimaryColor("#03a9f4");
        },
        style: {
          backgroundColor: "#03a9f4"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 27
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 12
  }, _this);
};

_s3(ColorPicker, "pZgH7UcsKyXt6VoMsQjt7zbvjT4=");

_c3 = ColorPicker;

var _c, _c2, _c3;

$RefreshReg$(_c, "SentSvg");
$RefreshReg$(_c2, "Users");
$RefreshReg$(_c3, "ColorPicker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImNoYXRDb2xvciIsInNldENoYXRDb2xvciIsInVzZUVmZmVjdCIsImxlbmd0aCIsImdldFVzZXJXaG9DaGF0V2l0aCIsInRva2VuIiwidGhlbiIsInJlc3VsdCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsImRhdGEiLCJtYXAiLCJlIiwiZmlyc3RVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZWNvdW5kVXNlciIsIm5vdFNlZW5NZXNzYWdlTnVtYmVyIiwiYWxsIiwibmV3YXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24iLCJzZWNvbmRVc2VyIiwicmV2ZXJzZSIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlcnJvciIsImVtaXQiLCJzdGF0ZSIsIm90aGVyVXNlcklkIiwiYWRkRW1vamkiLCJzeW0iLCJ1bmlmaWVkIiwic3BsaXQiLCJjb2Rlc0FycmF5IiwiZm9yRWFjaCIsImVsIiwicHVzaCIsImVtb2ppIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNsb3NlT3JPcGVuRW1vamlQaWNrZXIiLCJzZWFyY2hGb3JVc2VyIiwic2VhcmNoVXNlck5hbWVBcGkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFVzZXJkYXRhRm4iLCJjdXJyZW50VXNlckRhdGEiLCJzZW5kTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJyZWNlaXZlciIsIkZpcnN0VGltZSIsInIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ1c2VycyIsInRleHQiLCJzZW5kZXJJZCIsIm1lc3NhZ2VIYW5kbGVyIiwiaXNXcml0aW5nIiwic2VuZGVyaWQiLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiTGlzdE9mVXNlciIsInVzZXJXaG9SZWNpdmVXcml0aW5nIiwic2V0dnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTdHlsZSIsInlvdXJNZXNzYWdlVnUiLCJpIiwiY2hpbGROb2RlcyIsInN0eWxlIiwiY29sb3IiLCJvbiIsIm9mZiIsInNjcm9sbGZuIiwiZ2V0TmV3Q29sb3IiLCJjb250YWluZXIiLCJjaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyIiwiVXNlckNvbnRhbmVyIiwiaGVhZGVyIiwibGlzdENvbnRhY3MiLCJib3R0b20iLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dGNzcyIsImNoYXRDb250YWluZXIiLCJoZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJpc1dyaXRpbmdDb250YWluZXIiLCJsZHNlbGxpcHNpcyIsImNoYW5nZUNvbG9yQ29udGFpbmVyIiwibWVzc2FnZXMiLCJvbmVNZXNzYWdlIiwibWVzc2FnZVRleHQiLCJkYXRlIiwic2xpY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWVuIiwicHJldmVudERlZmF1bHQiLCJpbnB1dENvbnRhaW5lciIsImJ0bnMiLCJvcGVuT3JDbG9zZUVtb2ppUGlja2VyIiwiZW1vamlMb2dvIiwiaWQiLCJza2luIiwiZW1vamlQaWNrZXJDb250YWluZXIiLCJidG5zZW5kIiwic2VuZE1lc3NhZ2VCdG4iLCJTZW50U3ZnIiwiVXNlcnMiLCJ1c2VyRGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwidXNlckNvbnRhaW5lciIsImdldFVzZXJkYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZSIsImltZ0NvbnRhaW5lciIsIkNvbG9yUGlja2VyIiwib3BlbkNvbG9yUGlja2VyIiwic2V0T3BlbkNvbG9yUGlja2VyIiwiY2hhbmdlUHJpbWFyeUNvbG9yIiwiZ2V0TmV3Q29sb3JmbiIsImNvbG9yUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUMrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEL0M7QUFBQTtBQUFBLE1BQ2JDLDJCQURhO0FBQUEsTUFDZUMsOEJBRGY7O0FBQUEseUJBRW9DSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZwQztBQUFBO0FBQUEsTUFFYkcsb0JBRmE7QUFBQSxNQUVTQyx1QkFGVCx3QkFFcUQ7OztBQUZyRCx5QkFHZUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIZjtBQUFBO0FBQUEsTUFHYkssV0FIYTtBQUFBLE1BR0RDLGNBSEM7O0FBQUEseUJB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QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQ3hCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRVLGVBVVY7QUFBSyxpQkFBUyxFQUFFN0IsK0RBQUssQ0FBQ0ssS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlnRCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUN4Qix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWVSxlQVdWO0FBQUssaUJBQVMsRUFBRTdCLCtEQUFLLENBQUNLLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJZ0Qsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDeEIseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWFUsZUFZVjtBQUFLLGlCQUFTLEVBQUU3QiwrREFBSyxDQUFDSyxLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSWdELGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQ3hCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQW1CSCxDQXhCRDs7SUFBTXFCLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC4zZGUyZTM2ZjQzMzcwYmIwZWVhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NoYXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IHthZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjaGF0Q29sb3Isc2V0Q2hhdENvbG9yXT1SZWFjdC51c2VTdGF0ZSh7Y29sb3JvbmU6XCIjMTg3NmYzXCIsY29sb3J0d286XCIjZTRlNmViXCJ9KVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5ld1VzZXJXaG9DaGF0V2l0aCkudGhlbihuZXdhcnJheT0+e1xyXG4gICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKFsuLi5uZXdhcnJheV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfSkuY2F0Y2goZT0+Y29uc29sZS5sb2coZS5tZXNzYWdlKSlcclxuICAgIH0sW3VzZXJdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG5cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgfSxbY3VycmVudFVzZXJUb0NoYXRXaXRoXSlcclxuICAgIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgICAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgICAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZWw9PntyZXR1cm4gZWwrZW1vaml9KVxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZT0oKT0+e1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubGVuZ3RoPjAmJmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWRkTWVzc2FnZSh7cmVjZWl2ZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxtZXNzYWdlOm1lc3NhZ2UsRmlyc3RUaW1lOmN1cnJlbnRDaGF0cy5sZW5ndGh9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbdXNlci5faWRdLG1lc3NhZ2U6bWVzc2FnZSxfaWQ6cn1dXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIse290aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsdGV4dDptZXNzYWdlLHNlbmRlcklkOnVzZXIuX2lkfSlcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIilcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxzZW5kZXJpZDp1c2VyLl9pZH0pXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6ZmFsc2Usb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxzZW5kZXJpZDp1c2VyLl9pZH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhc3luYyAgZnVuY3Rpb24gIGNoYXRIYW5kbGVyKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9tc2dTb3VuZC5tcDNcIilcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgICAgICAvKmlmKHZ1PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgbGV0IExpc3RPZlVzZXIgPSBhd2FpdCBsaXN0T2ZVc2Vycy5tYXAoKGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1lLl9pZCAmJiBjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT1lLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5ub3RTZWVuTWVzc2FnZU51bWJlcj1lLm5vdFNlZW5NZXNzYWdlTnVtYmVyKzFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKExpc3RPZlVzZXIpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbZGF0YS5zZW5kZXJJZF0sbWVzc2FnZTpkYXRhLnRleHQsX2lkOnJ9XVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc1dyaXRpbmcoZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpXHJcbiAgICAgICAgICAgIGlmKGRhdGEudXNlcldob1JlY2l2ZVdyaXRpbmc9PXVzZXIuX2lkICYmIGRhdGEuc2VuZGVyaWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZGF0YS5pc1dyaXRpbmcpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldHZ1PShkYXRhKT0+e1xyXG4gICBcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KS5sZW5ndGghPTApe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRDaGF0cy5sZW5ndGgtMTsgaT4wOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3IhPVwicmdiKDI0LCAxMTgsIDI0MylcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3I9XCJyZ2IoMjQsIDExOCwgMjQzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0dnVcIixzZXR2dSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXInLCBjaGF0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwic2V0dnVcIixzZXR2dSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY29uc3Qgc2Nyb2xsZm49KGUpPT57XHJcbiAgICAgICAgICAvL2lmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IChlLnRhcmdldC5zY3JvbGxIZWlnaHQgLSBlLnRhcmdldC5vZmZzZXRIZWlnaHQpKXtcclxuICAgICAgICAgIGlmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IDApe1xyXG4gICAgICAgICAgICBzZXRTa2lwKGU9PmUrMjApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDpza2lwfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT5bLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpLC4uLmVdKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sW3NraXBdKVxyXG4gICAgICBjb25zdCBnZXROZXdDb2xvcj0oY29sb3IpPT57XHJcbiAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntyZXR1cm4gey4uLmUsY29sb3JvbmU6Y29sb3J9fSlcclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgZ2V0VXNlcmRhdGE9e2dldFVzZXJkYXRhRm59IGtleT17ZS5faWR9IHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48aDM+e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC51c2VyTmFtZX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNlbGxpcHNpc30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhbmdlQ29sb3JDb250YWluZXJ9PjxDb2xvclBpY2tlciBnZXROZXdDb2xvcmZuPXtnZXROZXdDb2xvcn0gY2hhdENvbG9yPXtjaGF0Q29sb3J9PjwvQ29sb3JQaWNrZXI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpcImZhbHNlXCJ9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gJHtTdHlsZS55b3VyTWVzc2FnZVZ1fSBgfSAgIHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6XCJmYWxzZVwifSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOmNoYXRDb2xvci5jb2xvcm9uZSxjb2xvcjpcIndoaXRlXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48c3BhbiAgc3R5bGU9e2Uuc2Vlbj09dHJ1ZT97Y29sb3I6XCIjMTg3NmYzXCJ9Ontjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9e1N0eWxlLnNlZW59ID4mIzEwMDA0Ozwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm9wZW5PckNsb3NlRW1vamlQaWNrZXJ9IG9uQ2xpY2s9eygpPT5jbG9zZU9yT3BlbkVtb2ppUGlja2VyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICByZXR1cm4gcmVxLmNvb2tpZXMudG9rZW4gPyB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB9IH0gOiB7IHByb3BzOiB7IHRva2VuOiBmYWxzZSB9IH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFNlbnRTdmc9KCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICApXHJcbiAgfVxyXG4gIGNvbnN0IFVzZXJzPShwcm9wcyk9PntcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApfX0+XHJcbiAgICAgICAgICAgICAgICB7bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCE9MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdFNlZW5NZXNzYWdlTnVtYmV9PjxzcGFuPntub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsfTwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQ29sb3JQaWNrZXI9KHByb3BzKT0+e1xyXG4gICAgY29uc3QgW29wZW5Db2xvclBpY2tlcixzZXRPcGVuQ29sb3JQaWNrZXJdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgY2hhbmdlUHJpbWFyeUNvbG9yPShjb2xvcik9PntcclxuICAgICAgICBwcm9wcy5nZXROZXdDb2xvcmZuKGNvbG9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKDxkaXYgb25DbGljaz17KCk9PnNldE9wZW5Db2xvclBpY2tlcih0cnVlKX0gY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29sb3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOnByb3BzLmNoYXRDb2xvci5jb2xvcm9uZX19PlxyXG4gICAgICAgIHtvcGVuQ29sb3JQaWNrZXImJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvclBpY2tlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2Y1MDA1N1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZjUwMDU3XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMzZDVhZmVcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzNkNWFmZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNzZmZjAzXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM3NmZmMDNcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2M2ZmYwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjYzZmZjAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjNkMDBcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmM2QwMFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNjUxZmZmXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM2NTFmZmZcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmZWEwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmZlYTAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmNTAwNTdcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2Y1MDA1N1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzFkZTliNlwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMWRlOWI2XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMwM2E5ZjRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzAzYTlmNFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=