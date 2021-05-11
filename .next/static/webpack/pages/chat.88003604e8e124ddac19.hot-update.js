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
      // console.log(document.getElementsByClassName(Style.yourMessageVu)[currentChats.length-1].childNodes[1].style.color)

      /*if(document.getElementsByClassName(Style.yourMessageVu)[currentChats.length-1].style.color)
      for (let i = currentChats.length; i>0; i--) {
          yourMessageVu
          elements[i].style.backgroundColor="blue";
      }*/
      for (var i = currentChats.length - 1; i > 0; i--) {
        if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu)[i] != undefined) {
          console.log(document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu)[i].childNodes[1]);
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
      lineNumber: 200,
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
            lineNumber: 204,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 45
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
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
                lineNumber: 211,
                columnNumber: 96
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 172
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 165
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
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
                lineNumber: 220,
                columnNumber: 71
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 61
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 29
            }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 64
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 75
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 86
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 97
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
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
                    lineNumber: 231,
                    columnNumber: 226
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 37
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "".concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.messageText, " ").concat(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.yourMessageVu, " "),
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
                    lineNumber: 232,
                    columnNumber: 261
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
                    lineNumber: 232,
                    columnNumber: 279
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 37
                }, _this)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 40
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
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
                  lineNumber: 240,
                  columnNumber: 95
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 189
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 182
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 63
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
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
                    lineNumber: 243,
                    columnNumber: 58
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
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
                    lineNumber: 244,
                    columnNumber: 99
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 55
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
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
                    lineNumber: 246,
                    columnNumber: 145
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 199,
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
        lineNumber: 263,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 263,
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
          lineNumber: 273,
          columnNumber: 91
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 48
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 14
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 272,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwiZGF0YSIsIm1hcCIsImUiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJyZXZlcnNlIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVycm9yIiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsInNlbmRlcklkIiwibWVzc2FnZUhhbmRsZXIiLCJpc1dyaXRpbmciLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiTGlzdE9mVXNlciIsInNldHZ1IiwiaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlIiwieW91ck1lc3NhZ2VWdSIsImNoaWxkTm9kZXMiLCJvbiIsIm9mZiIsInNjcm9sbGZuIiwiY29udGFpbmVyIiwiY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lciIsIlVzZXJDb250YW5lciIsImhlYWRlciIsImxpc3RDb250YWNzIiwiYm90dG9tIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXRjc3MiLCJjaGF0Q29udGFpbmVyIiwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lIiwidXNlckltYWdlQ29udGFpbmVyIiwiaXNXcml0aW5nQ29udGFpbmVyIiwibGRzZWxsaXBzaXMiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic2VlbiIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJidG5zIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwiU2VudFN2ZyIsIlVzZXJzIiwidXNlckRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInVzZXJDb250YWluZXIiLCJnZXRVc2VyZGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDK0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRC9DO0FBQUE7QUFBQSxNQUNiQywyQkFEYTtBQUFBLE1BQ2VDLDhCQURmOztBQUFBLHlCQUVvQ0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGcEM7QUFBQTtBQUFBLE1BRWJHLG9CQUZhO0FBQUEsTUFFU0MsdUJBRlQsd0JBRXFEOzs7QUFGckQseUJBR2VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSGY7QUFBQTtBQUFBLE1BR2JLLFdBSGE7QUFBQSxNQUdEQyxjQUhDOztBQUFBLHlCQUltQ1AsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUNPLG1CQUFlLEVBQUNDLFNBQWpCO0FBQTJCQyxZQUFRLEVBQUNELFNBQXBDO0FBQThDRSxPQUFHLEVBQUNGO0FBQWxELEdBQWYsQ0FKbkM7QUFBQTtBQUFBLE1BSWJHLHFCQUphO0FBQUEsTUFJU0Msd0JBSlQ7O0FBQUEseUJBS09iLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBTFA7QUFBQTtBQUFBLE1BS2JhLE9BTGE7QUFBQSxNQUtMQyxVQUxLOztB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QUFBSyxhQUFHLEVBQUVwSixLQUFLLENBQUM4SSxRQUFOLENBQWVySSxlQUFmLElBQWtDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZILGVBR0c7QUFBTSxpQkFBUyxFQUFFOEYsK0RBQUssQ0FBQzVGLFFBQXZCO0FBQUEsK0JBQWlDO0FBQUEsb0JBQUlYLEtBQUssQ0FBQzhJLFFBQU4sQ0FBZW5JO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBYkM7O0lBQU1rSSxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuODgwMDM2MDRlOGUxMjRkZGFjMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlcy9jaGF0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IHsgUGlja2VyLEVtb2ppICB9IGZyb20gJ2Vtb2ppLW1hcnQnXHJcbmltcG9ydCAnZW1vamktbWFydC9jc3MvZW1vamktbWFydC5jc3MnXHJcbmltcG9ydCB7c2VhcmNoVXNlck5hbWVBcGl9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCB7YWRkTWVzc2FnZSxnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbixnZXRVc2VyV2hvQ2hhdFdpdGh9IGZyb20gJy4uL3NlcnZpY2VzL2NoYXQnO1xyXG5pbXBvcnQgc29ja2V0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5cclxuXHJcbmNvbnN0IGNoYXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUsc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtFbW9qaUNvbnRhaW5lckhlaWdodCwgc2V0RW1vamlDb250YWluZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoOSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW2xpc3RPZlVzZXJzLHNldExpc3RPZlVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlclRvQ2hhdFdpdGgsc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoXT1SZWFjdC51c2VTdGF0ZSh7Y3VycmVudEltYWdlVXJsOnVuZGVmaW5lZCx1c2VyTmFtZTp1bmRlZmluZWQsX2lkOnVuZGVmaW5lZH0pXHJcbiAgICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2N1cnJlbnRDaGF0cyxzZXRDdXJyZW50Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgbWVzc2FnZXNDb21wPVJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtzb2NrZXQsc2V0U29ja2V0XT1SZWFjdC51c2VDb250ZXh0KHNvY2tldENvbnRleHQpXHJcbiAgICBjb25zdCBbc2tpcCxzZXRTa2lwXT1SZWFjdC51c2VTdGF0ZSgoKT0+MClcclxuICAgIGNvbnN0IFtpc1dyaXRpbmdTdGF0ZSxzZXRJc1dyaXRpbmdTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5ld1VzZXJXaG9DaGF0V2l0aCkudGhlbihuZXdhcnJheT0+e1xyXG4gICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKFsuLi5uZXdhcnJheV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfSkuY2F0Y2goZT0+Y29uc29sZS5sb2coZS5tZXNzYWdlKSlcclxuICAgIH0sW3VzZXJdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG5cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgfSxbY3VycmVudFVzZXJUb0NoYXRXaXRoXSlcclxuICAgIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgICAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgICAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZWw9PntyZXR1cm4gZWwrZW1vaml9KVxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZT0oKT0+e1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubGVuZ3RoPjAmJmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWRkTWVzc2FnZSh7cmVjZWl2ZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxtZXNzYWdlOm1lc3NhZ2UsRmlyc3RUaW1lOmN1cnJlbnRDaGF0cy5sZW5ndGh9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbdXNlci5faWRdLG1lc3NhZ2U6bWVzc2FnZSxfaWQ6cn1dXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIse290aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsdGV4dDptZXNzYWdlLHNlbmRlcklkOnVzZXIuX2lkfSlcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIilcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6ZmFsc2Usb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhc3luYyAgZnVuY3Rpb24gIGNoYXRIYW5kbGVyKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9tc2dTb3VuZC5tcDNcIilcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgICAgICAgICAvKmlmKHZ1PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgbGV0IExpc3RPZlVzZXIgPSBhd2FpdCBsaXN0T2ZVc2Vycy5tYXAoKGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1lLl9pZCAmJiBjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT1lLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5ub3RTZWVuTWVzc2FnZU51bWJlcj1lLm5vdFNlZW5NZXNzYWdlTnVtYmVyKzFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKExpc3RPZlVzZXIpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbZGF0YS5zZW5kZXJJZF0sbWVzc2FnZTpkYXRhLnRleHQsX2lkOnJ9XVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc1dyaXRpbmcoZGF0YSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShkYXRhLmlzV3JpdGluZylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0dnU9KGRhdGEpPT57XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtjdXJyZW50Q2hhdHMubGVuZ3RoLTFdLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3IpXHJcbiAgICAgICAgICAgIC8qaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtjdXJyZW50Q2hhdHMubGVuZ3RoLTFdLnN0eWxlLmNvbG9yKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudENoYXRzLmxlbmd0aDsgaT4wOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHlvdXJNZXNzYWdlVnVcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImJsdWVcIjtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50Q2hhdHMubGVuZ3RoLTE7IGk+MDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0uY2hpbGROb2Rlc1sxXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICBzb2NrZXQub24oXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICBzb2NrZXQub24oXCJnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIixjaGF0SGFuZGxlcilcclxuICAgICAgICBzb2NrZXQub24oXCJzZXR2dVwiLHNldHZ1KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE1lc3NhZ2VGcm9tVXNlclRvVXNlcicsIGNoYXRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJzZXR2dVwiLHNldHZ1KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBzY3JvbGxmbj0oZSk9PntcclxuICAgICAgICAgIC8vaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCkpe1xyXG4gICAgICAgICAgaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNldFNraXAoZT0+ZSsyMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOnNraXB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PlsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCksLi4uZV0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxbc2tpcF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgZ2V0VXNlcmRhdGE9e2dldFVzZXJkYXRhRm59IGtleT17ZS5faWR9IHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48aDM+e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC51c2VyTmFtZX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNlbGxpcHNpc30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvblNjcm9sbD17KGUpPT5zY3JvbGxmbihlKX0gcmVmPXttZXNzYWdlc0NvbXB9IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDaGF0cy5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17ZS5faWR9IGNsYXNzTmFtZT17U3R5bGUub25lTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnVzZXJzWzBdPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZVRleHR9IHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6ZmFsc2V9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gJHtTdHlsZS55b3VyTWVzc2FnZVZ1fSBgfSAgIHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6ZmFsc2V9ICBzdHlsZT17e1wiLS1pXCI6XCItMTAwJVwiLGZsb2F0OlwicmlnaHRcIixiYWNrZ3JvdW5kQ29sb3I6XCIjMTg3NmYzXCIsY29sb3I6XCJ3aGl0ZVwifX0+PHA+e2UubWVzc2FnZX08L3A+PHNwYW4gIHN0eWxlPXtlLnNlZW49PXRydWU/e2NvbG9yOlwiIzE4NzZmM1wifTp7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPXtTdHlsZS5zZWVufSA+JiMxMDAwNDs8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlbmRNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2U9PmUucHJldmVudERlZmF1bHQoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0ICB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKT0+bWVzc2FnZUhhbmRsZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+TWVzc2FnZTwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5vcGVuT3JDbG9zZUVtb2ppUGlja2VyfSBvbkNsaWNrPXsoKT0+Y2xvc2VPck9wZW5FbW9qaVBpY2tlcigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppTG9nb30+PEVtb2ppIGVtb2ppPXt7IGlkOiAnc21pbGluZ19mYWNlX3dpdGhfM19oZWFydHMnLCBza2luOiAzIH19IHNpemU9ezE2fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlQaWNrZXJDb250YWluZXJ9PjxQaWNrZXIgcGVyTGluZT17RW1vamlDb250YWluZXJIZWlnaHR9IG9uU2VsZWN0PXsoZSk9PmFkZEVtb2ppKGUpfSAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1N0eWxlLmJ0bnNlbmR9IG9uQ2xpY2s9eygpPT5zZW5kTWVzc2FnZSgpfT48c3BhbiBjbGFzc05hbWU9e1N0eWxlLnNlbmRNZXNzYWdlQnRufSA+PFNlbnRTdmc+PC9TZW50U3ZnPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhdFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHJlcS5jb29raWVzLnRva2VuID8geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfSB9IDogeyBwcm9wczogeyB0b2tlbjogZmFsc2UgfSB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBTZW50U3ZnPSgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48ZyBpZD1cIkxheWVyXzk1XCIgZGF0YS1uYW1lPVwiTGF5ZXIgOTVcIj48cGF0aCBkPVwiTTUzLjA2LDEwLjk0YTEuNSwxLjUsMCwwLDAtMS41My0uMzZsLTQwLDEzLjMzYTEuNTEsMS41MSwwLDAsMC0uMDYsMi44M2wxOC43LDcuMDksNy4wOSwxOC43YTEuNTEsMS41MSwwLDAsMCwxLjQ0LDEsMS40OSwxLjQ5LDAsMCwwLDEuMzktMWwxMy4zMy00MEExLjUsMS41LDAsMCwwLDUzLjA2LDEwLjk0WlwiLz48cGF0aCBkPVwiTTIwLjIyLDM1LjQ4YTEuNSwxLjUsMCwwLDAtMi4xMi0yLjEybC00LjQ4LDQuNDhhMS41MSwxLjUxLDAsMCwwLDAsMi4xMiwxLjQ5LDEuNDksMCwwLDAsMi4xMiwwWlwiLz48cGF0aCBkPVwiTTIzLjg4LDQwLjEyYTEuNDksMS40OSwwLDAsMC0yLjEyLDBMMTYuMDgsNDUuOGExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw1LjY4LTUuNjhBMS40OSwxLjQ5LDAsMCwwLDIzLjg4LDQwLjEyWlwiLz48cGF0aCBkPVwiTTI4LjUyLDQzLjc4LDI0LDQ4LjI2YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDQuNDgtNC40OEExLjUsMS41LDAsMCwwLDI4LjUyLDQzLjc4WlwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgKVxyXG4gIH1cclxuICBjb25zdCBVc2Vycz0ocHJvcHMpPT57XHJcbiAgICAgIGNvbnN0IFtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWxdPVJlYWN0LnVzZVN0YXRlKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICB9LFtwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcl0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj48ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckNvbnRhaW5lcn0gb25DbGljaz17KCk9Pntwcm9wcy5nZXRVc2VyZGF0YShwcm9wcy51c2VyRGF0YSksc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCgwKX19PlxyXG4gICAgICAgICAgICAgICAge25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwhPTAmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ub3RTZWVuTWVzc2FnZU51bWJlfT48c3Bhbj57bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbH08L3NwYW4+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS5pbWdDb250YWluZXJ9PjxpbWcgc3JjPXtwcm9wcy51c2VyRGF0YS5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PHA+e3Byb3BzLnVzZXJEYXRhLnVzZXJOYW1lfTwvcD48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=