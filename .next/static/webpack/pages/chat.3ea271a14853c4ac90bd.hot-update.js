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
      console.log(data);
      console.log(currentUserToChatWith._id);

      if (data.userWhoReciveWriting == user._id && data.senderid == currentUserToChatWith._id) {
        setIsWritingState(data.isWriting);
      }
    }

    var setvu = function setvu(data) {
      if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu).length != 0) {
        for (var i = currentChats.length - 1; i > 0; i--) {
          if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu)[i] != undefined) {
            console.log(document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu)[i].childNodes[1].style.color);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
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
            lineNumber: 210,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
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
                lineNumber: 217,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
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
                lineNumber: 226,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
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
                    lineNumber: 237,
                    columnNumber: 228
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 37
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "".concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText, " ").concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu, " "),
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : "false",
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
                    lineNumber: 238,
                    columnNumber: 263
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
                    lineNumber: 238,
                    columnNumber: 281
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
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
                  lineNumber: 246,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 189
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 182
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
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
                    lineNumber: 249,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
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
                    lineNumber: 250,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
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
                    lineNumber: 252,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 205,
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
        lineNumber: 269,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 269,
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
          lineNumber: 279,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 278,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwiZGF0YSIsIm1hcCIsImUiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJyZXZlcnNlIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVycm9yIiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJzZW5kZXJpZCIsImNoYXRIYW5kbGVyIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJMaXN0T2ZVc2VyIiwidXNlcldob1JlY2l2ZVdyaXRpbmciLCJzZXR2dSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlIiwieW91ck1lc3NhZ2VWdSIsImkiLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJjb2xvciIsIm9uIiwib2ZmIiwic2Nyb2xsZm4iLCJjb250YWluZXIiLCJjaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyIiwiVXNlckNvbnRhbmVyIiwiaGVhZGVyIiwibGlzdENvbnRhY3MiLCJib3R0b20iLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dGNzcyIsImNoYXRDb250YWluZXIiLCJoZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJpc1dyaXRpbmdDb250YWluZXIiLCJsZHNlbGxpcHNpcyIsIm1lc3NhZ2VzIiwib25lTWVzc2FnZSIsIm1lc3NhZ2VUZXh0IiwiZGF0ZSIsInNsaWNlIiwiYmFja2dyb3VuZENvbG9yIiwic2VlbiIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJidG5zIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwiU2VudFN2ZyIsIlVzZXJzIiwidXNlckRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInVzZXJDb250YWluZXIiLCJnZXRVc2VyZGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDK0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRC9DO0FBQUE7QUFBQSxNQUNiQywyQkFEYTtBQUFBLE1BQ2VDLDhCQURmOztBQUFBLHlCQUVvQ0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGcEM7QUFBQTtBQUFBLE1BRWJHLG9CQUZhO0FBQUEsTUFFU0MsdUJBRlQsd0JBRXFEOzs7QUFGckQseUJBR2VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSGY7QUFBQTtBQUFBLE1BR2JLLFdBSGE7QUFBQSxNQUdEQyxjQUhDOztBQUFBLHlCQUltQ1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUNPLG1CQUFlLEVBQUNDLFNBQWpCO0FBQTJCQyxZQUFRLEVBQUNELFNBQXBDO0FBQThDRSxPQUFHLEVBQUNGO0FBQWxELEdBQWYsQ0FKbkM7QUFBQTtBQUFBLE1BSWJHLHFCQUphO0FBQUEsTUFJU0Msd0JBSlQ7O0FBQUEseUJBS09iLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENB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RztBQUFNLGlCQUFTLEVBQUUrRiwrREFBSyxDQUFDN0YsUUFBdkI7QUFBQSwrQkFBaUM7QUFBQSxvQkFBSVgsS0FBSyxDQUFDaUosUUFBTixDQUFldEk7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FiQzs7SUFBTXFJLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC4zZWEyNzFhMTQ4NTNjNGFjOTBiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NoYXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IHthZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIuX2lkIT11bmRlZmluZWQmJiB1c2VyLl9pZC5sZW5ndGg+MilcclxuICAgICAgICBnZXRVc2VyV2hvQ2hhdFdpdGgoe30scHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VyV2hvQ2hhdFdpdGg9cmVzdWx0LmRhdGEuZGF0YS5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZS5maXJzdFVzZXIuX2lkPT11c2VyLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5zZWNvdW5kVXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuZmlyc3RVc2VyLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobmV3VXNlcldob0NoYXRXaXRoKS50aGVuKG5ld2FycmF5PT57XHJcbiAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoWy4uLm5ld2FycmF5XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICB9KS5jYXRjaChlPT5jb25zb2xlLmxvZyhlLm1lc3NhZ2UpKVxyXG4gICAgfSxbdXNlcl0pXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6MH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoWy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKV0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgXHJcbiAgICB9LFtjdXJyZW50VXNlclRvQ2hhdFdpdGhdKVxyXG4gICAgY29uc3QgYWRkRW1vamk9KGUpPT57XHJcbiAgICAgICAgbGV0IHN5bSA9IGUudW5pZmllZC5zcGxpdCgnLScpXHJcbiAgICAgICAgbGV0IGNvZGVzQXJyYXkgPSBbXVxyXG4gICAgICAgIHN5bS5mb3JFYWNoKGVsID0+IGNvZGVzQXJyYXkucHVzaCgnMHgnICsgZWwpKVxyXG4gICAgICAgIGxldCBlbW9qaSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVzQXJyYXkpXHJcbiAgICAgICAgc2V0TWVzc2FnZShlbD0+e3JldHVybiBlbCtlbW9qaX0pXHJcbiAgICAgIH07XHJcbiAgICBjb25zdCBjbG9zZU9yT3BlbkVtb2ppUGlja2VyPSgpPT57XHJcbiAgICAgICAgc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlKGU9PiFlKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlYXJjaEZvclVzZXI9KGUpPT57XHJcbiAgICAgICAgICAgIHNlYXJjaFVzZXJOYW1lQXBpKGUudGFyZ2V0LnZhbHVlLHByb3BzLnRva2VuKS50aGVuKChyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnJlc3VsdC5kYXRhLmRhdGFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGdldFVzZXJkYXRhRm49KGN1cnJlbnRVc2VyRGF0YSk9PntcclxuICAgICAgICBzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGgoY3VycmVudFVzZXJEYXRhKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbmRNZXNzYWdlPSgpPT57XHJcbiAgICAgICAgaWYobWVzc2FnZS5sZW5ndGg+MCYmY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICBhZGRNZXNzYWdlKHtyZWNlaXZlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLG1lc3NhZ2U6bWVzc2FnZSxGaXJzdFRpbWU6Y3VycmVudENoYXRzLmxlbmd0aH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOlt1c2VyLl9pZF0sbWVzc2FnZTptZXNzYWdlLF9pZDpyfV1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIix7b3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCx0ZXh0Om1lc3NhZ2Usc2VuZGVySWQ6dXNlci5faWR9KVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0TWVzc2FnZShcIlwiKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVzc2FnZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNlbmRlcmlkOnVzZXIuX2lkfSlcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzpmYWxzZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNlbmRlcmlkOnVzZXIuX2lkfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFzeW5jICBmdW5jdGlvbiAgY2hhdEhhbmRsZXIoZGF0YSl7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIuL21zZ1NvdW5kLm1wM1wiKVxyXG4gICAgICAgICAgICBhdWRpby5wbGF5KClcclxuICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZmFsc2UpXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuXHJcbiAgICAgICAgICAgIC8qaWYodnU9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzV3JpdGluZyhkYXRhKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZClcclxuICAgICAgICAgICAgaWYoZGF0YS51c2VyV2hvUmVjaXZlV3JpdGluZz09dXNlci5faWQgJiYgZGF0YS5zZW5kZXJpZD09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShkYXRhLmlzV3JpdGluZylcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0dnU9KGRhdGEpPT57XHJcbiAgIFxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpLmxlbmd0aCE9MCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudENoYXRzLmxlbmd0aC0xOyBpPjA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0hPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yIT1cInJnYigyNCwgMTE4LCAyNDMpXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yPVwicmdiKDI0LCAxMTgsIDI0MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgIHNvY2tldC5vbihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgIHNvY2tldC5vbihcImdldE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLGNoYXRIYW5kbGVyKVxyXG4gICAgICAgIHNvY2tldC5vbihcInNldHZ1XCIsc2V0dnUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcInNldHZ1XCIsc2V0dnUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHNjcm9sbGZuPShlKT0+e1xyXG4gICAgICAgICAgLy9pZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0KSl7XHJcbiAgICAgICAgICBpZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgc2V0U2tpcChlPT5lKzIwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6c2tpcH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICBcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtza2lwXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc2VsbGlwc2lzfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpcImZhbHNlXCJ9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gJHtTdHlsZS55b3VyTWVzc2FnZVZ1fSBgfSAgIHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6XCJmYWxzZVwifSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOlwiIzE4NzZmM1wiLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjxzcGFuICBzdHlsZT17ZS5zZWVuPT10cnVlP3tjb2xvcjpcIiMxODc2ZjNcIn06e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT17U3R5bGUuc2Vlbn0gPiYjMTAwMDQ7PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCAgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/IHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIH0gfSA6IHsgcHJvcHM6IHsgdG9rZW46IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgICBjb25zdCBbbm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsXT1SZWFjdC51c2VTdGF0ZShwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbChwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgfSxbcHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXJdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJDb250YWluZXJ9IG9uQ2xpY2s9eygpPT57cHJvcHMuZ2V0VXNlcmRhdGEocHJvcHMudXNlckRhdGEpLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwoMCl9fT5cclxuICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuaW1nQ29udGFpbmVyfT48aW1nIHNyYz17cHJvcHMudXNlckRhdGEuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9