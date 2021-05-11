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
      console.log("d5al");

      if (currentChats.length > 0) {
        for (var i = currentChats.length - 1; i > 0; i--) {
          console.log(i);
          console.log(document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage)[i]);

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
      lineNumber: 203,
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
            lineNumber: 207,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
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
                lineNumber: 214,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
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
                lineNumber: 223,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
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
                    lineNumber: 234,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 37
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "".concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText, " "),
                  id: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessage,
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
                    lineNumber: 235,
                    columnNumber: 260
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
                    lineNumber: 235,
                    columnNumber: 279
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
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
                  lineNumber: 243,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 189
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 182
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
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
                    lineNumber: 246,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
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
                    lineNumber: 247,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
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
                    lineNumber: 249,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 202,
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
        lineNumber: 266,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 266,
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
          lineNumber: 276,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 275,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwiZGF0YSIsIm1hcCIsImUiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJyZXZlcnNlIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVycm9yIiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiTGlzdE9mVXNlciIsInNldHZ1IiwiaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlIiwieW91ck1lc3NhZ2UiLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJjb2xvciIsIm9uIiwib2ZmIiwic2Nyb2xsZm4iLCJjb250YWluZXIiLCJjaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyIiwiVXNlckNvbnRhbmVyIiwiaGVhZGVyIiwibGlzdENvbnRhY3MiLCJib3R0b20iLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dGNzcyIsImNoYXRDb250YWluZXIiLCJoZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJpc1dyaXRpbmdDb250YWluZXIiLCJsZHNlbGxpcHNpcyIsIm1lc3NhZ2VzIiwib25lTWVzc2FnZSIsIm1lc3NhZ2VUZXh0IiwiZGF0ZSIsInNsaWNlIiwiYmFja2dyb3VuZENvbG9yIiwic2VlbiIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJidG5zIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwiU2VudFN2ZyIsIlVzZXJzIiwidXNlckRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInVzZXJDb250YWluZXIiLCJnZXRVc2VyZGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDK0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRC9DO0FBQUE7QUFBQSxNQUNiQywyQkFEYTtBQUFBLE1BQ2VDLDhCQURmOztBQUFBLHlCQUVvQ0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGcEM7QUFBQTtBQUFBLE1BRWJHLG9CQUZhO0FBQUEsTUFFU0MsdUJBRlQsd0JBRXFEOzs7QUFGckQseUJBR2VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSGY7QUFBQTtBQUFBLE1BR2JLLFdBSGE7QUFBQSxNQUdEQyxjQUhDOztBQUFBLHlCQUltQ1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUNPLG1CQUFlLEVBQUNDLFNBQWpCO0FBQTJCQyxZQUFRLEVBQUNELFNBQXBDO0FBQThDRSxPQUFHLEVBQUNGO0FBQWxELEdBQWYsQ0FKbkM7QUFBQTtBQUFBLE1BSWJHLHFCQUphO0FBQUEsTUFJU0Msd0JBSlQ7O0FBQUEseUJBS09iLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFA7QUFBQTtBQUFBLE1BS2JhLE9BTGE7QUFBQSxNQUtMQyxV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QUFlakcsb0JBQWhCLENBRkY7QUFHRixzQkFDSTtBQUFBLDJCQUFLO0FBQUssZUFBUyxFQUFFeUQsK0RBQUssQ0FBQzJDLGFBQXRCO0FBQXFDLGFBQU8sRUFBRSxtQkFBSTtBQUFDbEosYUFBSyxDQUFDbUosV0FBTixDQUFrQm5KLEtBQUssQ0FBQytJLFFBQXhCLEdBQWtDRSw0QkFBNEIsQ0FBQyxDQUFELENBQTlEO0FBQWtFLE9BQXJIO0FBQUEsaUJBQ0lELHlCQUF5QixJQUFFLENBQTNCLGlCQUE4QjtBQUFLLGlCQUFTLEVBQUV6QywrREFBSyxDQUFDNkMsbUJBQXRCO0FBQUEsK0JBQTJDO0FBQUEsb0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGxDLGVBRUc7QUFBTSxpQkFBUyxFQUFFekMsK0RBQUssQ0FBQzhDLFlBQXZCO0FBQUEsK0JBQXFDO0FBQUssYUFBRyxFQUFFckosS0FBSyxDQUFDK0ksUUFBTixDQUFldEksZUFBZixJQUFrQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSCxlQUdHO0FBQU0saUJBQVMsRUFBRThGLCtEQUFLLENBQUM1RixRQUF2QjtBQUFBLCtCQUFpQztBQUFBLG9CQUFJWCxLQUFLLENBQUMrSSxRQUFOLENBQWVwSTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQWJDOztJQUFNbUksSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjYwM2Y1ZThmMDkxNzczNWI1NmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge2FkZE1lc3NhZ2UsZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24sZ2V0VXNlcldob0NoYXRXaXRofSBmcm9tICcuLi9zZXJ2aWNlcy9jaGF0JztcclxuaW1wb3J0IHNvY2tldENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zb2NrZXRDb250ZXh0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuXHJcblxyXG5jb25zdCBjaGF0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlLHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbRW1vamlDb250YWluZXJIZWlnaHQsIHNldEVtb2ppQ29udGFpbmVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDkpLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuICAgIGNvbnN0IFtsaXN0T2ZVc2VycyxzZXRMaXN0T2ZVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY3VycmVudFVzZXJUb0NoYXRXaXRoLHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aF09UmVhY3QudXNlU3RhdGUoe2N1cnJlbnRJbWFnZVVybDp1bmRlZmluZWQsdXNlck5hbWU6dW5kZWZpbmVkLF9pZDp1bmRlZmluZWR9KVxyXG4gICAgY29uc3QgW21lc3NhZ2Usc2V0TWVzc2FnZV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjdXJyZW50Q2hhdHMsc2V0Q3VycmVudENoYXRzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IG1lc3NhZ2VzQ29tcD1SZWFjdC51c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbc29ja2V0LHNldFNvY2tldF09UmVhY3QudXNlQ29udGV4dChzb2NrZXRDb250ZXh0KVxyXG4gICAgY29uc3QgW3NraXAsc2V0U2tpcF09UmVhY3QudXNlU3RhdGUoKCk9PjApXHJcbiAgICBjb25zdCBbaXNXcml0aW5nU3RhdGUsc2V0SXNXcml0aW5nU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodXNlci5faWQhPXVuZGVmaW5lZCYmIHVzZXIuX2lkLmxlbmd0aD4yKVxyXG4gICAgICAgIGdldFVzZXJXaG9DaGF0V2l0aCh7fSxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgbGV0IG5ld1VzZXJXaG9DaGF0V2l0aD1yZXN1bHQuZGF0YS5kYXRhLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICBpZihlLmZpcnN0VXNlci5faWQ9PXVzZXIuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLnNlY291bmRVc2VyLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5maXJzdFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChuZXdVc2VyV2hvQ2hhdFdpdGgpLnRoZW4obmV3YXJyYXk9PntcclxuICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhbLi4ubmV3YXJyYXldKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICBcclxuICAgICAgICAgIH0pLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUubWVzc2FnZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDowfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhbLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpXSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VhcmNoRm9yVXNlcj0oZSk9PntcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkoZS50YXJnZXQudmFsdWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2V0VXNlcmRhdGFGbj0oY3VycmVudFVzZXJEYXRhKT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aChjdXJyZW50VXNlckRhdGEpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2U9KCk9PntcclxuICAgICAgICBpZihtZXNzYWdlLmxlbmd0aD4wJiZjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGFkZE1lc3NhZ2Uoe3JlY2VpdmVyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsbWVzc2FnZTptZXNzYWdlLEZpcnN0VGltZTpjdXJyZW50Q2hhdHMubGVuZ3RofSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W3VzZXIuX2lkXSxtZXNzYWdlOm1lc3NhZ2UsX2lkOnJ9XVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgLyppZih2dT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGxldCBMaXN0T2ZVc2VyID0gYXdhaXQgbGlzdE9mVXNlcnMubWFwKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09ZS5faWQgJiYgY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9ZS5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUubm90U2Vlbk1lc3NhZ2VOdW1iZXI9ZS5ub3RTZWVuTWVzc2FnZU51bWJlcisxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChMaXN0T2ZVc2VyKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCl7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W2RhdGEuc2VuZGVySWRdLG1lc3NhZ2U6ZGF0YS50ZXh0LF9pZDpyfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNXcml0aW5nKGRhdGEpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZGF0YS5pc1dyaXRpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldHZ1PShkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImQ1YWxcIilcclxuICAgICAgICAgICAgaWYoY3VycmVudENoYXRzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT1jdXJyZW50Q2hhdHMubGVuZ3RoLTE7aT4wO2ktLSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlKVtpXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZSlbaV0hPXVuZGVmaW5lZCYmZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvciE9XCJyZ2IoMjQsIDExOCwgMjQzKVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2UpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3I9XCIjMTg3NmYzXCJcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJicmVha1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICBzb2NrZXQub24oXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICBzb2NrZXQub24oXCJnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIixjaGF0SGFuZGxlcilcclxuICAgICAgICBzb2NrZXQub24oXCJzZXR2dVwiLHNldHZ1KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE1lc3NhZ2VGcm9tVXNlclRvVXNlcicsIGNoYXRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJpc1dyaXRpbmdTdGF0ZVwiLHNldHZ1KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBzY3JvbGxmbj0oZSk9PntcclxuICAgICAgICAgIC8vaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCkpe1xyXG4gICAgICAgICAgaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNldFNraXAoZT0+ZSsyMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOnNraXB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PlsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCksLi4uZV0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbc2tpcF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgZ2V0VXNlcmRhdGE9e2dldFVzZXJkYXRhRm59IGtleT17ZS5faWR9IHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48aDM+e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC51c2VyTmFtZX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNlbGxpcHNpc30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvblNjcm9sbD17KGUpPT5zY3JvbGxmbihlKX0gcmVmPXttZXNzYWdlc0NvbXB9IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDaGF0cy5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17ZS5faWR9IGNsYXNzTmFtZT17U3R5bGUub25lTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnVzZXJzWzBdPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZVRleHR9IHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6ZmFsc2V9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gYH0gIGlkPXtTdHlsZS55b3VyTWVzc2FnZX0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpmYWxzZX0gIHN0eWxlPXt7XCItLWlcIjpcIi0xMDAlXCIsZmxvYXQ6XCJyaWdodFwiLGJhY2tncm91bmRDb2xvcjpcIiMxODc2ZjNcIixjb2xvcjpcIndoaXRlXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD57PHNwYW4gc3R5bGU9e2Uuc2Vlbj09dHJ1ZT97Y29sb3I6XCIjMTg3NmYzXCJ9Ontjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9e1N0eWxlLnNlZW59PiYjMTAwMDQ7PC9zcGFuPn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm9wZW5PckNsb3NlRW1vamlQaWNrZXJ9IG9uQ2xpY2s9eygpPT5jbG9zZU9yT3BlbkVtb2ppUGlja2VyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICByZXR1cm4gcmVxLmNvb2tpZXMudG9rZW4gPyB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB9IH0gOiB7IHByb3BzOiB7IHRva2VuOiBmYWxzZSB9IH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFNlbnRTdmc9KCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICApXHJcbiAgfVxyXG4gIGNvbnN0IFVzZXJzPShwcm9wcyk9PntcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApfX0+XHJcbiAgICAgICAgICAgICAgICB7bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCE9MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdFNlZW5NZXNzYWdlTnVtYmV9PjxzcGFuPntub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsfTwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==