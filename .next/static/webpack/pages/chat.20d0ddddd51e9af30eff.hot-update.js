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
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_AHKI_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











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

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({
    width: 0,
    height: 0
  }),
      _React$useState20 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState19, 2),
      heightAndWidthOfWindow = _React$useState20[0],
      setHeightAndWidthOfWindow = _React$useState20[1]; //responsive handler

  /**********************************/

  /*************useEffects***********/

  /**********************************/


  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    setHeightAndWidthOfWindow({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }, []); //when you scrol top on convertation it will load new 20 message

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (currentUserToChatWith._id != undefined) {
      Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["getMessagesOfCurrentconversation"])({
        secondUser: currentUserToChatWith._id,
        skip: skip
      }, props.token).then(function (data) {
        setCurrentChats(function (e) {
          return [].concat(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(data.data.data.reverse()), Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(e));
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, [skip]); // get list of users  you chat with

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (user._id != undefined && user._id.length > 2) Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["getUserWhoChatWith"])({}, props.token).then(function (result) {
      var newUserWhoChatWith = result.data.data.map(function (e) {
        //this to return the data of the other user not your data because im return both of data sender and reciver 
        if (e.firstUser._id == user._id) {
          return Promise.resolve(_objectSpread(_objectSpread({}, e.secoundUser), {}, {
            color: e.color,
            notSeenMessageNumber: e.notSeenMessageNumber
          }));
        } else {
          return Promise.resolve(_objectSpread(_objectSpread({}, e.firstUser), {}, {
            color: e.color,
            notSeenMessageNumber: e.notSeenMessageNumber
          }));
        }
      });
      Promise.all(newUserWhoChatWith).then(function (newarray) {
        setListOfUsers(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newarray));
      });
    })["catch"](function (e) {
      return console.log(e.message);
    });
  }, [user]); //when you click on user it will load convertation data

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    if (currentUserToChatWith._id != undefined) {
      Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["getMessagesOfCurrentconversation"])({
        secondUser: currentUserToChatWith._id,
        skip: 0
      }, props.token).then(function (data) {
        setCurrentChats(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(data.data.data.reverse()));
        messagesComp.current.scrollTop = messagesComp.current.scrollHeight + messagesComp.current.clientHeight;
      })["catch"](function (error) {
        console.log(error);
      }); //when you open convertation its will make all messgage seen

      socket.emit("vu", {
        state: true,
        otherUserId: currentUserToChatWith._id
      });
    }
  }, [currentUserToChatWith]); //socket receving data handler

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    //on reciving messsage socket
    function chatHandler(_x) {
      return _chatHandler.apply(this, arguments);
    } //if the other user is wrting add animation if wrting


    function _chatHandler() {
      _chatHandler = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var audio, ListOfUser;
        return F_AHKI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                audio = new Audio("./msgSound.mp3");
                audio.play();
                setIsWritingState(false); //set vu if you are in converation 

                socket.emit("vu", {
                  state: true,
                  otherUserId: currentUserToChatWith._id
                }); //if you are not in convertion add +1 to message not read in user image

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
                }); //add message to chat

                if (data.senderId == currentUserToChatWith._id) {
                  setCurrentChats(function (e) {
                    var r = Math.random().toString(36).substring(7);
                    return [].concat(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(e), [{
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
      if (data.userWhoReciveWriting == user._id && data.senderid == currentUserToChatWith._id) {
        setIsWritingState(data.isWriting);
      }
    } // if other user has seen you message seen icon will be blue


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
  }); //add emoji to input

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
  }; //close or open emoji container


  var closeOrOpenEmojiPicker = function closeOrOpenEmojiPicker() {
    setcloseOrOpenEmojiPickerState(function (e) {
      return !e;
    });
  }; //search for user to send message


  var searchForUser = function searchForUser(e) {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_11__["searchUserNameApi"])(e.target.value, props.token).then(function (result) {
      if (result.data.data != undefined) {
        setListOfUsers(function (e) {
          return Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(result.data.data);
        });
      }
    });
  }; //on click on user get current user data


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
          return [].concat(Object(F_AHKI_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(e), [{
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
  }; //on scrol to top load 20 new message


  var scrollfn = function scrollfn(e) {
    //if( e.target.scrollTop === (e.target.scrollHeight - e.target.offsetHeight)){
    if (e.target.scrollTop === 0) {
      setSkip(function (e) {
        return e + 20;
      });
    }
  }; //if you change the color of converation


  var getNewColor = function getNewColor(color) {
    setChatColor(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        colorone: color
      });
    });
  }; //set color if convertation


  var setColorOfChatFn = function setColorOfChatFn(colorOfChatFromDataBase) {
    if (colorOfChatFromDataBase == undefined) {
      setChatColor(function (e) {
        return _objectSpread(_objectSpread({}, e), {}, {
          colorone: "#1876f3"
        });
      });
    } else {
      setChatColor(function (e) {
        return _objectSpread(_objectSpread({}, e), {}, {
          colorone: colorOfChatFromDataBase
        });
      });
    }
  };

  if (heightAndWidthOfWindow.width > heightAndWidthOfWindow.height) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 23
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
              lineNumber: 252,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
            children: listOfUsers.map(function (e) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
                setColorOfChat: setColorOfChatFn,
                getUserdata: getUserdataFn,
                userData: e
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 49
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 29
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
                  lineNumber: 259,
                  columnNumber: 100
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Search users"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 176
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 169
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 68
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 25
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
                  lineNumber: 268,
                  columnNumber: 75
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: currentUserToChatWith.userName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 65
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 33
              }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 68
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 79
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 90
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 101
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 50
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.changeColorContainer,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ColorPicker, {
                  receiver: currentUserToChatWith._id,
                  token: props.token,
                  getNewColorfn: getNewColor,
                  chatColor: chatColor
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 77
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 29
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
                      lineNumber: 279,
                      columnNumber: 232
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 41
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
                      lineNumber: 280,
                      columnNumber: 276
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
                      lineNumber: 280,
                      columnNumber: 294
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 41
                  }, _this)
                }, e._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 44
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 25
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
                    lineNumber: 288,
                    columnNumber: 99
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "Message"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 288,
                      columnNumber: 193
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 186
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 67
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 29
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
                      lineNumber: 291,
                      columnNumber: 62
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 29
                  }, _this), closeOrOpenEmojiPickerState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.emojiPickerContainer,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_9__["Picker"], {
                      perLine: EmojiContainerHeight,
                      onSelect: function onSelect(e) {
                        return addEmoji(e);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 292,
                      columnNumber: 103
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 59
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 29
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
                      lineNumber: 294,
                      columnNumber: 149
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 294,
                    columnNumber: 109
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.navBarShowUser,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.containerBtnSideNavBar,
          ref: sideNavBarBtn,
          onClick: function onClick() {
            return ShowSideNavBar();
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bar1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bar2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bar3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserContaner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "contacts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listContacs,
          children: listOfUsers.map(function (e) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
              setColorOfChat: setColorOfChatFn,
              getUserdata: getUserdataFn,
              userData: e
            }, e._id, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 49
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 29
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
                lineNumber: 321,
                columnNumber: 100
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 176
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 169
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 68
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 21
    }, _this);
  }
};

_s(chat, "feQBzUWM5zSTVQear+edItGMfrI=");

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
        lineNumber: 335,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 335,
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
        props.getUserdata(props.userData), setNotSeenMessageNumberlocal(0), props.setColorOfChat(props.userData.color);
      },
      children: [notSeenMessageNumberlocal != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.notSeenMessageNumbe,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: notSeenMessageNumberlocal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 95
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 52
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 345,
    columnNumber: 13
  }, _this);
};

_s2(Users, "pd1fD7onXKAt+z6/CWeN/oALkEw=");

_c2 = Users;

var ColorPicker = function ColorPicker(props) {
  _s3();

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState24 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState23, 2),
      openColorPicker = _React$useState24[0],
      setOpenColorPicker = _React$useState24[1];

  var changePrimaryColor = function changePrimaryColor(color) {
    props.getNewColorfn(color);
    Object(_services_chat__WEBPACK_IMPORTED_MODULE_12__["updateColorChat"])({
      newColor: color,
      receiver: props.receiver
    }, props.token);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: function onClick() {
      return setOpenColorPicker(function (e) {
        return !e;
      });
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
        lineNumber: 364,
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
        lineNumber: 365,
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
        lineNumber: 366,
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
        lineNumber: 367,
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
        lineNumber: 368,
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
        lineNumber: 369,
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
        lineNumber: 370,
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
        lineNumber: 371,
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
        lineNumber: 372,
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
        lineNumber: 373,
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
        lineNumber: 374,
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
        lineNumber: 375,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 27
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 362,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImNoYXRDb2xvciIsInNldENoYXRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJ0b2tlbiIsInRoZW4iLCJkYXRhIiwiZSIsInJldmVyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJnZXRVc2VyV2hvQ2hhdFdpdGgiLCJyZXN1bHQiLCJuZXdVc2VyV2hvQ2hhdFdpdGgiLCJtYXAiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwiY29sb3IiLCJub3RTZWVuTWVzc2FnZU51bWJlciIsImFsbCIsIm5ld2FycmF5IiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVtaXQiLCJzdGF0ZSIsIm90aGVyVXNlcklkIiwiY2hhdEhhbmRsZXIiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsInNlbmRlcklkIiwiTGlzdE9mVXNlciIsInIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ1c2VycyIsInRleHQiLCJpc1dyaXRpbmciLCJ1c2VyV2hvUmVjaXZlV3JpdGluZyIsInNlbmRlcmlkIiwic2V0dnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTdHlsZSIsInlvdXJNZXNzYWdlVnUiLCJpIiwiY2hpbGROb2RlcyIsInN0eWxlIiwib24iLCJvZmYiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwibWVzc2FnZUhhbmRsZXIiLCJzY3JvbGxmbiIsImdldE5ld0NvbG9yIiwic2V0Q29sb3JPZkNoYXRGbiIsImNvbG9yT2ZDaGF0RnJvbURhdGFCYXNlIiwiY29udGFpbmVyIiwiY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lciIsIlVzZXJDb250YW5lciIsImhlYWRlciIsImxpc3RDb250YWNzIiwiYm90dG9tIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXRjc3MiLCJjaGF0Q29udGFpbmVyIiwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lIiwidXNlckltYWdlQ29udGFpbmVyIiwiaXNXcml0aW5nQ29udGFpbmVyIiwibGRzZWxsaXBzaXMiLCJjaGFuZ2VDb2xvckNvbnRhaW5lciIsIm1lc3NhZ2VzIiwib25lTWVzc2FnZSIsIm1lc3NhZ2VUZXh0IiwiZGF0ZSIsInNsaWNlIiwiYmFja2dyb3VuZENvbG9yIiwic2VlbiIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJidG5zIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwibmF2QmFyU2hvd1VzZXIiLCJjb250YWluZXJCdG5TaWRlTmF2QmFyIiwic2lkZU5hdkJhckJ0biIsIlNob3dTaWRlTmF2QmFyIiwiYmFyMSIsImJhcjIiLCJiYXIzIiwiU2VudFN2ZyIsIlVzZXJzIiwidXNlckRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInVzZXJDb250YWluZXIiLCJnZXRVc2VyZGF0YSIsInNldENvbG9yT2ZDaGF0Iiwibm90U2Vlbk1lc3NhZ2VOdW1iZSIsImltZ0NvbnRhaW5lciIsIkNvbG9yUGlja2VyIiwib3BlbkNvbG9yUGlja2VyIiwic2V0T3BlbkNvbG9yUGlja2VyIiwiY2hhbmdlUHJpbWFyeUNvbG9yIiwiZ2V0TmV3Q29sb3JmbiIsInVwZGF0ZUNvbG9yQ2hhdCIsIm5ld0NvbG9yIiwiY29sb3JQaWNrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBRStDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUYvQztBQUFBO0FBQUEsTUFFYkMsMkJBRmE7QUFBQSxNQUVlQyw4QkFGZjs7QUFBQSx5QkFHb0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBSHBDO0FBQUE7QUFBQSxNQUdiRyxvQkFIYTtBQUFBLE1BR1NDLHVCQUhULHdCQUdxRDs7O0FBSHJELHlCQUllTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUpmO0FBQUE7QUFBQSxNQUliSyxXQUphO0FBQUEsTUFJREMsY0FKQzs7QUFBQSx5QkFLbUNQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUFDTyxtQkFBZSxFQUFDQyxTQUFqQjtBQUEyQkMsWUFBUSxFQUFDRCxTQUFwQztBQUE4Q0UsT0FBRyxFQUFDRjtBQUFsRCxHQUFmLENBTG5DO0FBQUE7QUFBQSxNQUtiRyxxQkFMYTtBQUFBLE1BS1NDLHdCQUxUOztBQUFBLHlCQU1PYiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5QO0FBQUE7QUFBQSxNQU1iYSxPQU5hO0FBQUEsTUFNTEMsVUFOSzs7QUFBQSwwQkFPaUJmLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBUGpCO0FBQUE7QUFBQSxNQU9iZSxZQVBhO0FBQUEsTUFPQUMsZUFQQTs7QUFRcEIsTUFBTUMsWUFBWSxHQUFDbEIsNENBQUssQ0FBQ21CLE1BQU4sQ0FBYSxJQUFiLENBQW5COztBQVJvQiwwQkFTQ25CLDRDQUFLLENBQUNvQixVQUFOLENBQWlCQyw2REFBakIsQ0FURDtBQUFBO0FBQUEsTUFTYkMsSUFUYTtBQUFBLE1BU1JDLE9BVFE7O0FBQUEsMkJBVUt2Qiw0Q0FBSyxDQUFDb0IsVUFBTixDQUFpQkksK0RBQWpCLENBVkw7QUFBQTtBQUFBLE1BVWJDLE1BVmE7QUFBQSxNQVVOQyxTQVZNOztBQUFBLDBCQVdDMUIsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUEsV0FBSSxDQUFKO0FBQUEsR0FBZixDQVhEO0FBQUE7QUFBQSxNQVdiMEIsSUFYYTtBQUFBLE1BV1JDLE9BWFE7O0FBQUEsMEJBWXFCNUIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FackI7QUFBQTtBQUFBLE1BWWI0QixjQVphO0FBQUEsTUFZRUMsaUJBWkY7O0FBQUEsMEJBYVc5Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBQzhCLFlBQVEsRUFBQyxTQUFWO0FBQW9CQyxZQUFRLEVBQUM7QUFBN0IsR0FBZixDQWJYO0FBQUE7QUFBQSxNQWFiQyxTQWJhO0FBQUEsTUFhSEMsWUFiRzs7QUFBQSwwQkFjd0NsQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBRWtDLFNBQUssRUFBRSxDQUFUO0FBQVlDLFVBQU0sRUFBRTtBQUFwQixHQUFmLENBZHhDO0FBQUE7QUFBQSxNQWNiQyxzQkFkYTtBQUFBLE1BY1dDLHlCQWRYLHlCQWMrRTs7QUFFbkc7O0FBQ0E7O0FBQ0E7OztBQUNBdEMsOENBQUssQ0FBQ3VDLFNBQU4sQ0FBZ0IsWUFBSTtBQUVoQkQsNkJBQXlCLENBQUM7QUFBRUYsWUFBTSxFQUFFSSxNQUFNLENBQUNDLFdBQWpCO0FBQThCTixXQUFLLEVBQUVLLE1BQU0sQ0FBQ0U7QUFBNUMsS0FBRCxDQUF6QjtBQUNILEdBSEQsRUFHRSxFQUhGLEVBbkJvQixDQXVCcEI7O0FBQ0ExQyw4Q0FBSyxDQUFDdUMsU0FBTixDQUFnQixZQUFJO0FBQ2hCLFFBQUczQixxQkFBcUIsQ0FBQ0QsR0FBdEIsSUFBMkJGLFNBQTlCLEVBQXdDO0FBQ3BDa0MsOEZBQWdDLENBQUM7QUFBQ0Msa0JBQVUsRUFBQ2hDLHFCQUFxQixDQUFDRCxHQUFsQztBQUFzQ2dCLFlBQUksRUFBQ0E7QUFBM0MsT0FBRCxFQUFrRDVCLEtBQUssQ0FBQzhDLEtBQXhELENBQWhDLENBQStGQyxJQUEvRixDQUFvRyxVQUFBQyxJQUFJLEVBQUU7QUFDdEc5Qix1QkFBZSxDQUFDLFVBQUErQixDQUFDO0FBQUEsMklBQU1ELElBQUksQ0FBQ0EsSUFBTCxDQUFVQSxJQUFWLENBQWVFLE9BQWYsRUFBTixtSEFBa0NELENBQWxDO0FBQUEsU0FBRixDQUFmO0FBRUgsT0FIRCxXQUdTLFVBQUFFLEtBQUssRUFBRTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILE9BTEQ7QUFNSDtBQUNGLEdBVEgsRUFTSSxDQUFDdkIsSUFBRCxDQVRKLEVBeEJvQixDQW1DbEI7O0FBQ0YzQiw4Q0FBSyxDQUFDdUMsU0FBTixDQUFnQixZQUFJO0FBQ2hCLFFBQUdqQixJQUFJLENBQUNYLEdBQUwsSUFBVUYsU0FBVixJQUFzQmEsSUFBSSxDQUFDWCxHQUFMLENBQVMwQyxNQUFULEdBQWdCLENBQXpDLEVBQ0FDLDBFQUFrQixDQUFDLEVBQUQsRUFBSXZELEtBQUssQ0FBQzhDLEtBQVYsQ0FBbEIsQ0FBbUNDLElBQW5DLENBQXdDLFVBQUFTLE1BQU0sRUFBRTtBQUM1QyxVQUFJQyxrQkFBa0IsR0FBQ0QsTUFBTSxDQUFDUixJQUFQLENBQVlBLElBQVosQ0FBaUJVLEdBQWpCLENBQXFCLFVBQUFULENBQUMsRUFBRTtBQUMzQztBQUNBLFlBQUdBLENBQUMsQ0FBQ1UsU0FBRixDQUFZL0MsR0FBWixJQUFpQlcsSUFBSSxDQUFDWCxHQUF6QixFQUE2QjtBQUN6QixpQkFBT2dELE9BQU8sQ0FBQ0MsT0FBUixpQ0FBb0JaLENBQUMsQ0FBQ2EsV0FBdEI7QUFBa0NDLGlCQUFLLEVBQUNkLENBQUMsQ0FBQ2MsS0FBMUM7QUFBZ0RDLGdDQUFvQixFQUFDZixDQUFDLENBQUNlO0FBQXZFLGFBQVA7QUFDSCxTQUZELE1BRUs7QUFDRCxpQkFBT0osT0FBTyxDQUFDQyxPQUFSLGlDQUFvQlosQ0FBQyxDQUFDVSxTQUF0QjtBQUFnQ0ksaUJBQUssRUFBQ2QsQ0FBQyxDQUFDYyxLQUF4QztBQUE4Q0MsZ0NBQW9CLEVBQUNmLENBQUMsQ0FBQ2U7QUFBckUsYUFBUDtBQUNIO0FBR0osT0FUc0IsQ0FBdkI7QUFVQUosYUFBTyxDQUFDSyxHQUFSLENBQVlSLGtCQUFaLEVBQWdDVixJQUFoQyxDQUFxQyxVQUFBbUIsUUFBUSxFQUFFO0FBQzdDMUQsc0JBQWMsQ0FBQyxnSEFBSTBELFFBQUwsRUFBZDtBQUNELE9BRkQ7QUFJRCxLQWZILFdBZVcsVUFBQWpCLENBQUM7QUFBQSxhQUFFRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosQ0FBQyxDQUFDbEMsT0FBZCxDQUFGO0FBQUEsS0FmWjtBQWdCSCxHQWxCRCxFQWtCRSxDQUFDUSxJQUFELENBbEJGLEVBcENvQixDQXdEcEI7O0FBQ0F0Qiw4Q0FBSyxDQUFDdUMsU0FBTixDQUFnQixZQUFJO0FBQ2hCLFFBQUczQixxQkFBcUIsQ0FBQ0QsR0FBdEIsSUFBMkJGLFNBQTlCLEVBQXdDO0FBQ3BDa0MsOEZBQWdDLENBQUM7QUFBQ0Msa0JBQVUsRUFBQ2hDLHFCQUFxQixDQUFDRCxHQUFsQztBQUFzQ2dCLFlBQUksRUFBQztBQUEzQyxPQUFELEVBQStDNUIsS0FBSyxDQUFDOEMsS0FBckQsQ0FBaEMsQ0FBNEZDLElBQTVGLENBQWlHLFVBQUFDLElBQUksRUFBRTtBQUVuRzlCLHVCQUFlLENBQUMsZ0hBQUk4QixJQUFJLENBQUNBLElBQUwsQ0FBVUEsSUFBVixDQUFlRSxPQUFmLEVBQUwsRUFBZjtBQUNBL0Isb0JBQVksQ0FBQ2dELE9BQWIsQ0FBcUJDLFNBQXJCLEdBQStCakQsWUFBWSxDQUFDZ0QsT0FBYixDQUFxQkUsWUFBckIsR0FBbUNsRCxZQUFZLENBQUNnRCxPQUFiLENBQXFCRyxZQUF2RjtBQUdILE9BTkQsV0FNUyxVQUFBbkIsS0FBSyxFQUFFO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FSRCxFQURvQyxDQVdwQzs7QUFDQXpCLFlBQU0sQ0FBQzZDLElBQVAsQ0FBWSxJQUFaLEVBQWlCO0FBQUNDLGFBQUssRUFBQyxJQUFQO0FBQVlDLG1CQUFXLEVBQUM1RCxxQkFBcUIsQ0FBQ0Q7QUFBOUMsT0FBakI7QUFFSDtBQUNKLEdBaEJELEVBZ0JFLENBQUNDLHFCQUFELENBaEJGLEVBekRvQixDQTJFcEI7O0FBQ0FaLDhDQUFLLENBQUN1QyxTQUFOLENBQWdCLFlBQUk7QUFDaEI7QUFEZ0IsYUFFQ2tDLFdBRkQ7QUFBQTtBQUFBLE1Ba0NoQjs7O0FBbENnQjtBQUFBLDRPQUVoQixpQkFBNkIxQixJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUTJCLHFCQURSLEdBQ2dCLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDQURoQjtBQUVJRCxxQkFBSyxDQUFDRSxJQUFOO0FBQ0E5QyxpQ0FBaUIsQ0FBQyxLQUFELENBQWpCLENBSEosQ0FJSTs7QUFDQUwsc0JBQU0sQ0FBQzZDLElBQVAsQ0FBWSxJQUFaLEVBQWlCO0FBQUNDLHVCQUFLLEVBQUMsSUFBUDtBQUFZQyw2QkFBVyxFQUFDNUQscUJBQXFCLENBQUNEO0FBQTlDLGlCQUFqQixFQUxKLENBTUk7O0FBTko7QUFBQSx1QkFPMkJMLFdBQVcsQ0FBQ21ELEdBQVosQ0FBZ0IsVUFBQ1QsQ0FBRCxFQUFLO0FBQ3hDLHNCQUFHRCxJQUFJLENBQUM4QixRQUFMLElBQWU3QixDQUFDLENBQUNyQyxHQUFqQixJQUF3QkMscUJBQXFCLENBQUNELEdBQXRCLElBQTJCcUMsQ0FBQyxDQUFDckMsR0FBeEQsRUFBNEQ7QUFDeERxQyxxQkFBQyxDQUFDZSxvQkFBRixHQUF1QmYsQ0FBQyxDQUFDZSxvQkFBRixHQUF1QixDQUE5QztBQUNBLDJCQUFPSixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JaLENBQWhCLENBQVA7QUFDSCxtQkFIRCxNQUdLO0FBQ0QsMkJBQU9XLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlosQ0FBaEIsQ0FBUDtBQUNIO0FBQ0osaUJBUHNCLENBUDNCOztBQUFBO0FBT1E4QiwwQkFQUjtBQWVJbkIsdUJBQU8sQ0FBQ0ssR0FBUixDQUFZYyxVQUFaLEVBQXdCaEMsSUFBeEIsQ0FBNkIsVUFBQUMsSUFBSSxFQUFFO0FBRS9CeEMsZ0NBQWMsQ0FBQ3dDLElBQUQsQ0FBZDtBQUNILGlCQUhELEVBZkosQ0FtQkk7O0FBQ0Esb0JBQUdBLElBQUksQ0FBQzhCLFFBQUwsSUFBZWpFLHFCQUFxQixDQUFDRCxHQUF4QyxFQUE0QztBQUV4Q00saUNBQWUsQ0FBQyxVQUFBK0IsQ0FBQyxFQUFFO0FBQ2Ysd0JBQUkrQixDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxDQUFyQyxDQUFSO0FBQ0EscUpBQVduQyxDQUFYLElBQWE7QUFBQ29DLDJCQUFLLEVBQUMsQ0FBQ3JDLElBQUksQ0FBQzhCLFFBQU4sQ0FBUDtBQUF1Qi9ELDZCQUFPLEVBQUNpQyxJQUFJLENBQUNzQyxJQUFwQztBQUF5QzFFLHlCQUFHLEVBQUNvRTtBQUE3QyxxQkFBYjtBQUNILG1CQUhjLENBQWY7QUFJQTdELDhCQUFZLENBQUNnRCxPQUFiLENBQXFCQyxTQUFyQixHQUErQmpELFlBQVksQ0FBQ2dELE9BQWIsQ0FBcUJFLFlBQXJCLEdBQW1DbEQsWUFBWSxDQUFDZ0QsT0FBYixDQUFxQkcsWUFBdkY7QUFFSCxpQkFSRCxNQVFLLENBRUo7O0FBOUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmdCO0FBQUE7QUFBQTs7QUFtQ2hCLGFBQVNpQixTQUFULENBQW1CdkMsSUFBbkIsRUFBd0I7QUFDcEIsVUFBR0EsSUFBSSxDQUFDd0Msb0JBQUwsSUFBMkJqRSxJQUFJLENBQUNYLEdBQWhDLElBQXVDb0MsSUFBSSxDQUFDeUMsUUFBTCxJQUFlNUUscUJBQXFCLENBQUNELEdBQS9FLEVBQW1GO0FBQy9FbUIseUJBQWlCLENBQUNpQixJQUFJLENBQUN1QyxTQUFOLENBQWpCO0FBRUg7QUFDSixLQXhDZSxDQXlDaEI7OztBQUNBLFFBQU1HLEtBQUssR0FBQyxTQUFOQSxLQUFNLENBQUMxQyxJQUFELEVBQVE7QUFDaEIsVUFBRzJDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLCtEQUFLLENBQUNDLGFBQXRDLEVBQXFEeEMsTUFBckQsSUFBNkQsQ0FBaEUsRUFBa0U7QUFDOUQsYUFBSyxJQUFJeUMsQ0FBQyxHQUFHOUUsWUFBWSxDQUFDcUMsTUFBYixHQUFvQixDQUFqQyxFQUFvQ3lDLENBQUMsR0FBQyxDQUF0QyxFQUF5Q0EsQ0FBQyxFQUExQyxFQUE4QztBQUMxQyxjQUFHSixRQUFRLENBQUNDLHNCQUFULENBQWdDQywrREFBSyxDQUFDQyxhQUF0QyxFQUFxREMsQ0FBckQsS0FBeURyRixTQUE1RCxFQUFzRTtBQUNsRSxnQkFBR2lGLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLCtEQUFLLENBQUNDLGFBQXRDLEVBQXFEQyxDQUFyRCxFQUF3REMsVUFBeEQsQ0FBbUUsQ0FBbkUsRUFBc0VDLEtBQXRFLENBQTRFbEMsS0FBNUUsSUFBbUYsbUJBQXRGLEVBQTBHO0FBQ3RHNEIsc0JBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLCtEQUFLLENBQUNDLGFBQXRDLEVBQXFEQyxDQUFyRCxFQUF3REMsVUFBeEQsQ0FBbUUsQ0FBbkUsRUFBc0VDLEtBQXRFLENBQTRFbEMsS0FBNUUsR0FBa0YsbUJBQWxGO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFFSixLQVhEOztBQVlBLFFBQUdyQyxNQUFNLElBQUVoQixTQUFSLElBQXFCZ0IsTUFBTSxJQUFFLElBQWhDLEVBQXFDO0FBQ3JDQSxZQUFNLENBQUN3RSxFQUFQLENBQVUsZ0JBQVYsRUFBMkJYLFNBQTNCO0FBQ0E3RCxZQUFNLENBQUN3RSxFQUFQLENBQVUsMEJBQVYsRUFBcUN4QixXQUFyQztBQUNBaEQsWUFBTSxDQUFDd0UsRUFBUCxDQUFVLE9BQVYsRUFBa0JSLEtBQWxCO0FBQ0c7O0FBQ0QsV0FBTyxZQUFNO0FBQ1gsVUFBR2hFLE1BQU0sSUFBRWhCLFNBQVIsSUFBcUJnQixNQUFNLElBQUUsSUFBaEMsRUFBcUM7QUFDakNBLGNBQU0sQ0FBQ3lFLEdBQVAsQ0FBVywwQkFBWCxFQUF1Q3pCLFdBQXZDO0FBQ0FoRCxjQUFNLENBQUN5RSxHQUFQLENBQVcsZ0JBQVgsRUFBNEJaLFNBQTVCO0FBQ0E3RCxjQUFNLENBQUN5RSxHQUFQLENBQVcsT0FBWCxFQUFtQlQsS0FBbkI7QUFFSDtBQUNGLEtBUEQ7QUFRSCxHQW5FSCxFQTVFb0IsQ0FpSmxCOztBQUNGLE1BQU1VLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNuRCxDQUFELEVBQUs7QUFDaEIsUUFBSW9ELEdBQUcsR0FBR3BELENBQUMsQ0FBQ3FELE9BQUYsQ0FBVUMsS0FBVixDQUFnQixHQUFoQixDQUFWO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0FILE9BQUcsQ0FBQ0ksT0FBSixDQUFZLFVBQUFDLEVBQUU7QUFBQSxhQUFJRixVQUFVLENBQUNHLElBQVgsQ0FBZ0IsT0FBT0QsRUFBdkIsQ0FBSjtBQUFBLEtBQWQ7QUFDQSxRQUFJRSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsYUFBUCxPQUFBRCxNQUFNLEVBQWtCTCxVQUFsQixDQUFsQjtBQUNBeEYsY0FBVSxDQUFDLFVBQUEwRixFQUFFLEVBQUU7QUFBQyxhQUFPQSxFQUFFLEdBQUNFLEtBQVY7QUFBZ0IsS0FBdEIsQ0FBVjtBQUNELEdBTkgsQ0FsSm9CLENBMEpsQjs7O0FBQ0YsTUFBTUcsc0JBQXNCLEdBQUMsU0FBdkJBLHNCQUF1QixHQUFJO0FBQzdCM0csa0NBQThCLENBQUMsVUFBQTZDLENBQUM7QUFBQSxhQUFFLENBQUNBLENBQUg7QUFBQSxLQUFGLENBQTlCO0FBQ0QsR0FGSCxDQTNKb0IsQ0ErSmxCOzs7QUFDQSxNQUFNK0QsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQy9ELENBQUQsRUFBSztBQUNuQmdFLDZFQUFpQixDQUFDaEUsQ0FBQyxDQUFDaUUsTUFBRixDQUFTQyxLQUFWLEVBQWdCbkgsS0FBSyxDQUFDOEMsS0FBdEIsQ0FBakIsQ0FBOENDLElBQTlDLENBQW9ELFVBQUFTLE1BQU0sRUFBRTtBQUN4RCxVQUFHQSxNQUFNLENBQUNSLElBQVAsQ0FBWUEsSUFBWixJQUFrQnRDLFNBQXJCLEVBQStCO0FBQzNCRixzQkFBYyxDQUFDLFVBQUF5QyxDQUFDLEVBQUU7QUFDZCxpSUFBV08sTUFBTSxDQUFDUixJQUFQLENBQVlBLElBQXZCO0FBQ0gsU0FGYSxDQUFkO0FBR0g7QUFDSixLQU5EO0FBUUwsR0FURCxDQWhLa0IsQ0EyS2xCOzs7QUFDQSxNQUFNb0UsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQ0MsZUFBRCxFQUFtQjtBQUNyQ3ZHLDRCQUF3QixDQUFDdUcsZUFBRCxDQUF4QjtBQUNELEdBRkQ7O0FBS0EsTUFBTUMsV0FBVyxHQUFDLFNBQVpBLFdBQVksR0FBSTtBQUNwQixRQUFHdkcsT0FBTyxDQUFDdUMsTUFBUixHQUFlLENBQWYsSUFBa0J6QyxxQkFBcUIsQ0FBQ0QsR0FBdEIsSUFBMkJGLFNBQWhELEVBQTBEO0FBQzFENkcsd0VBQVUsQ0FBQztBQUFDQyxnQkFBUSxFQUFDM0cscUJBQXFCLENBQUNELEdBQWhDO0FBQW9DRyxlQUFPLEVBQUNBLE9BQTVDO0FBQW9EMEcsaUJBQVMsRUFBQ3hHLFlBQVksQ0FBQ3FDO0FBQTNFLE9BQUQsRUFBb0Z0RCxLQUFLLENBQUM4QyxLQUExRixDQUFWLENBQTJHQyxJQUEzRyxDQUFnSCxVQUFBQyxJQUFJLEVBQUU7QUFDbEg5Qix1QkFBZSxDQUFDLFVBQUErQixDQUFDLEVBQUU7QUFDZixjQUFJK0IsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsQ0FBUjtBQUNBLDJJQUFXbkMsQ0FBWCxJQUFhO0FBQUNvQyxpQkFBSyxFQUFDLENBQUM5RCxJQUFJLENBQUNYLEdBQU4sQ0FBUDtBQUFrQkcsbUJBQU8sRUFBQ0EsT0FBMUI7QUFBa0NILGVBQUcsRUFBQ29FO0FBQXRDLFdBQWI7QUFFSCxTQUpjLENBQWY7QUFNQTdELG9CQUFZLENBQUNnRCxPQUFiLENBQXFCQyxTQUFyQixHQUErQmpELFlBQVksQ0FBQ2dELE9BQWIsQ0FBcUJFLFlBQXJCLEdBQW1DbEQsWUFBWSxDQUFDZ0QsT0FBYixDQUFxQkcsWUFBdkY7QUFDQTVDLGNBQU0sQ0FBQzZDLElBQVAsQ0FBWSwyQkFBWixFQUF3QztBQUFDRSxxQkFBVyxFQUFDNUQscUJBQXFCLENBQUNELEdBQW5DO0FBQXVDMEUsY0FBSSxFQUFDdkUsT0FBNUM7QUFBb0QrRCxrQkFBUSxFQUFDdkQsSUFBSSxDQUFDWDtBQUFsRSxTQUF4QztBQUlBSSxrQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNILE9BYkQsV0FhUyxVQUFBbUMsS0FBSyxFQUFFO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FmRDtBQWdCSDtBQUNFLEdBbkJEOztBQW9CQSxNQUFNdUUsY0FBYyxHQUFDLFNBQWZBLGNBQWUsQ0FBQ3pFLENBQUQsRUFBSztBQUN0QixRQUFHcEMscUJBQXFCLENBQUNELEdBQXRCLElBQTJCRixTQUE5QixFQUF3QztBQUN0QyxVQUFHdUMsQ0FBQyxDQUFDaUUsTUFBRixDQUFTQyxLQUFULENBQWU3RCxNQUFmLEdBQXNCLENBQXpCLEVBQTJCO0FBQ3ZCNUIsY0FBTSxDQUFDNkMsSUFBUCxDQUFZLFdBQVosRUFBd0I7QUFBQ2dCLG1CQUFTLEVBQUMsSUFBWDtBQUFnQmQscUJBQVcsRUFBQzVELHFCQUFxQixDQUFDRCxHQUFsRDtBQUFzRDZFLGtCQUFRLEVBQUNsRSxJQUFJLENBQUNYO0FBQXBFLFNBQXhCO0FBQ0QsT0FGSCxNQUVPO0FBQ0hjLGNBQU0sQ0FBQzZDLElBQVAsQ0FBWSxXQUFaLEVBQXdCO0FBQUNnQixtQkFBUyxFQUFDLEtBQVg7QUFBaUJkLHFCQUFXLEVBQUM1RCxxQkFBcUIsQ0FBQ0QsR0FBbkQ7QUFBdUQ2RSxrQkFBUSxFQUFDbEUsSUFBSSxDQUFDWDtBQUFyRSxTQUF4QjtBQUNEO0FBQ0o7O0FBRUhJLGNBQVUsQ0FBQ2lDLENBQUMsQ0FBQ2lFLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FWRCxDQXJNa0IsQ0FnTmxCOzs7QUFDQSxNQUFNUSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDMUUsQ0FBRCxFQUFLO0FBQ2hCO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDaUUsTUFBRixDQUFTOUMsU0FBVCxLQUF1QixDQUEzQixFQUE2QjtBQUMzQnZDLGFBQU8sQ0FBQyxVQUFBb0IsQ0FBQztBQUFBLGVBQUVBLENBQUMsR0FBQyxFQUFKO0FBQUEsT0FBRixDQUFQO0FBQ0Q7QUFFSixHQU5ELENBak5rQixDQXdObEI7OztBQUNBLE1BQU0yRSxXQUFXLEdBQUMsU0FBWkEsV0FBWSxDQUFDN0QsS0FBRCxFQUFTO0FBQ3pCNUIsZ0JBQVksQ0FBQyxVQUFBYyxDQUFDLEVBQUU7QUFBQyw2Q0FBV0EsQ0FBWDtBQUFhakIsZ0JBQVEsRUFBQytCO0FBQXRCO0FBQTZCLEtBQWxDLENBQVo7QUFDRCxHQUZELENBek5rQixDQTZObEI7OztBQUNBLE1BQU04RCxnQkFBZ0IsR0FBQyxTQUFqQkEsZ0JBQWlCLENBQUNDLHVCQUFELEVBQTJCO0FBQ2hELFFBQUdBLHVCQUF1QixJQUFFcEgsU0FBNUIsRUFBc0M7QUFDbEN5QixrQkFBWSxDQUFDLFVBQUFjLENBQUMsRUFBRTtBQUNaLCtDQUFVQSxDQUFWO0FBQVlqQixrQkFBUSxFQUFDO0FBQXJCO0FBQ0gsT0FGVyxDQUFaO0FBR0gsS0FKRCxNQUlLO0FBQ0RHLGtCQUFZLENBQUMsVUFBQWMsQ0FBQyxFQUFFO0FBQ1osK0NBQVVBLENBQVY7QUFBWWpCLGtCQUFRLEVBQUM4RjtBQUFyQjtBQUNILE9BRlcsQ0FBWjtBQUdIO0FBQ0YsR0FWRDs7QUFXQSxNQUFJeEYsc0JBQXNCLENBQUNGLEtBQXZCLEdBQStCRSxzQkFBc0IsQ0FBQ0QsTUFBMUQsRUFBa0U7QUFDaEUsd0JBQ0k7QUFBSyxlQUFTLEVBQUV3RCwrREFBSyxDQUFDa0MsU0FBdEI7QUFBQSw4QkFDVSxxRUFBQyxpRUFBRDtBQUFRLGFBQUssRUFBRS9ILEtBQUssQ0FBQzhDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVixlQUVRO0FBQUssaUJBQVMsRUFBRStDLCtEQUFLLENBQUNtQywrQkFBdEI7QUFBQSxnQ0FFSTtBQUFLLG1CQUFTLEVBQUVuQywrREFBSyxDQUFDb0MsWUFBdEI7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUVwQywrREFBSyxDQUFDcUMsTUFBdEI7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFLLHFCQUFTLEVBQUVyQywrREFBSyxDQUFDc0MsV0FBdEI7QUFBQSxzQkFDQzVILFdBQVcsQ0FBQ21ELEdBQVosQ0FBZ0IsVUFBQVQsQ0FBQztBQUFBLGtDQUFFLHFFQUFDLEtBQUQ7QUFBTyw4QkFBYyxFQUFFNEUsZ0JBQXZCO0FBQXlDLDJCQUFXLEVBQUVULGFBQXREO0FBQWtGLHdCQUFRLEVBQUVuRTtBQUE1RixpQkFBMEVBLENBQUMsQ0FBQ3JDLEdBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUY7QUFBQSxhQUFqQjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFRSTtBQUFLLHFCQUFTLEVBQUVpRiwrREFBSyxDQUFDdUMsTUFBdEI7QUFBQSxtQ0FDQTtBQUFLLHVCQUFTLEVBQUV2QywrREFBSyxDQUFDd0MsZUFBdEI7QUFBQSxxQ0FBdUM7QUFBSyx5QkFBUyxFQUFFeEMsK0RBQUssQ0FBQ3lDLFFBQXRCO0FBQUEsd0NBQWdDO0FBQU8sMEJBQVEsRUFBRSxrQkFBQ3JGLENBQUQ7QUFBQSwyQkFBSytELGFBQWEsQ0FBQy9ELENBQUQsQ0FBbEI7QUFBQSxtQkFBakI7QUFBd0Msc0JBQUksRUFBQyxNQUE3QztBQUFvRCwwQkFBUTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFoQyxlQUFxRztBQUFBLHlDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQWNJO0FBQUssbUJBQVMsRUFBRTRDLCtEQUFLLENBQUM5RixJQUF0QjtBQUFBLGtDQUNBO0FBQUsscUJBQVMsRUFBRThGLCtEQUFLLENBQUNxQyxNQUF0QjtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUlBO0FBQUsscUJBQVMsRUFBRXJDLCtEQUFLLENBQUMwQyxhQUF0QjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBRTFDLCtEQUFLLENBQUMyQywyQkFBdEI7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUUzQywrREFBSyxDQUFDNEMsa0JBQXRCO0FBQUEsdUNBQTBDO0FBQUsscUJBQUcsRUFBRTVILHFCQUFxQixDQUFDSixlQUF0QixJQUF5QztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFLLHlCQUFTLEVBQUVvRiwrREFBSyxDQUFDbEYsUUFBdEI7QUFBQSx1Q0FBZ0M7QUFBQSw0QkFBS0UscUJBQXFCLENBQUNGO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixFQUdLbUIsY0FBYyxpQkFBRTtBQUFLLHlCQUFTLEVBQUUrRCwrREFBSyxDQUFDNkMsa0JBQXRCO0FBQUEsdUNBQ2pCO0FBQUssMkJBQVMsRUFBRTdDLCtEQUFLLENBQUM4QyxXQUF0QjtBQUFBLDBDQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFuQyxlQUE4QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUE5QyxlQUF5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF6RCxlQUFvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIckIsZUFNSTtBQUFLLHlCQUFTLEVBQUU5QywrREFBSyxDQUFDK0Msb0JBQXRCO0FBQUEsdUNBQTRDLHFFQUFDLFdBQUQ7QUFBYSwwQkFBUSxFQUFFL0gscUJBQXFCLENBQUNELEdBQTdDO0FBQWtELHVCQUFLLEVBQUVaLEtBQUssQ0FBQzhDLEtBQS9EO0FBQXNFLCtCQUFhLEVBQUU4RSxXQUFyRjtBQUFrRywyQkFBUyxFQUFFMUY7QUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQVNJO0FBQUssc0JBQVEsRUFBRSxrQkFBQ2UsQ0FBRDtBQUFBLHVCQUFLMEUsUUFBUSxDQUFDMUUsQ0FBRCxDQUFiO0FBQUEsZUFBZjtBQUFpQyxpQkFBRyxFQUFFOUIsWUFBdEM7QUFBb0QsdUJBQVMsRUFBRTBFLCtEQUFLLENBQUNnRCxRQUFyRTtBQUFBLHdCQUNLNUgsWUFBWSxDQUFDeUMsR0FBYixDQUFpQixVQUFBVCxDQUFDLEVBQUU7QUFDakIsb0NBQU87QUFBaUIsMkJBQVMsRUFBRTRDLCtEQUFLLENBQUNpRCxVQUFsQztBQUFBLDRCQUNGN0YsQ0FBQyxDQUFDb0MsS0FBRixDQUFRLENBQVIsS0FBWXhFLHFCQUFxQixDQUFDRCxHQUFsQyxnQkFDRDtBQUFLLDZCQUFTLEVBQUVpRiwrREFBSyxDQUFDa0QsV0FBdEI7QUFBbUMsaUNBQVc5RixDQUFDLENBQUMrRixJQUFGLElBQVF0SSxTQUFSLEdBQWtCdUMsQ0FBQyxDQUFDK0YsSUFBRixDQUFPQyxLQUFQLENBQWEsQ0FBYixFQUFlLEVBQWYsSUFBbUIsR0FBbkIsR0FBdUJoRyxDQUFDLENBQUMrRixJQUFGLENBQU9DLEtBQVAsQ0FBYSxFQUFiLEVBQWdCLEVBQWhCLENBQXpDLEdBQTZELE9BQTNHO0FBQXFILHlCQUFLLEVBQUU7QUFBQyw2QkFBTSxJQUFQO0FBQVksK0JBQU0sTUFBbEI7QUFBeUJDLHFDQUFlLEVBQUMsU0FBekM7QUFBbURuRiwyQkFBSyxFQUFDO0FBQXpELHFCQUE1SDtBQUFBLDJDQUErTDtBQUFBLGdDQUFJZCxDQUFDLENBQUNsQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0w7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQyxnQkFFRDtBQUFLLDZCQUFTLFlBQUs4RSwrREFBSyxDQUFDa0QsV0FBWCxjQUEwQmxELCtEQUFLLENBQUNDLGFBQWhDLE1BQWQ7QUFBa0UsaUNBQVc3QyxDQUFDLENBQUMrRixJQUFGLElBQVF0SSxTQUFSLEdBQWtCdUMsQ0FBQyxDQUFDK0YsSUFBRixDQUFPQyxLQUFQLENBQWEsQ0FBYixFQUFlLEVBQWYsSUFBbUIsR0FBbkIsR0FBdUJoRyxDQUFDLENBQUMrRixJQUFGLENBQU9DLEtBQVAsQ0FBYSxFQUFiLEVBQWdCLEVBQWhCLENBQXpDLEdBQTZELE9BQTFJO0FBQW9KLHlCQUFLLEVBQUU7QUFBQyw2QkFBTSxPQUFQO0FBQWUsK0JBQU0sT0FBckI7QUFBNkJDLHFDQUFlLEVBQUNoSCxTQUFTLENBQUNGLFFBQXZEO0FBQWdFK0IsMkJBQUssRUFBQztBQUF0RSxxQkFBM0o7QUFBQSw0Q0FBMk87QUFBQSxnQ0FBSWQsQ0FBQyxDQUFDbEM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUEzTyxlQUE2UDtBQUFPLDJCQUFLLEVBQUVrQyxDQUFDLENBQUNrRyxJQUFGLElBQVEsSUFBUixHQUFhO0FBQUNwRiw2QkFBSyxFQUFDO0FBQVAsdUJBQWIsR0FBK0I7QUFBQ0EsNkJBQUssRUFBQztBQUFQLHVCQUE3QztBQUE4RCwrQkFBUyxFQUFFOEIsK0RBQUssQ0FBQ3NELElBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE3UDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRyxtQkFBVWxHLENBQUMsQ0FBQ3JDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQU1ILGVBUEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQSxlQXdCQTtBQUFLLHFCQUFTLEVBQUVpRiwrREFBSyxDQUFDeUIsV0FBdEI7QUFBQSxtQ0FDSTtBQUFNLHNCQUFRLEVBQUUsa0JBQUFyRSxDQUFDO0FBQUEsdUJBQUVBLENBQUMsQ0FBQ21HLGNBQUYsRUFBRjtBQUFBLGVBQWpCO0FBQUEsc0NBQ0E7QUFBSyx5QkFBUyxFQUFFdkQsK0RBQUssQ0FBQ3dELGNBQXRCO0FBQUEsdUNBQXNDO0FBQUssMkJBQVMsRUFBRXhELCtEQUFLLENBQUN5QyxRQUF0QjtBQUFBLDBDQUFnQztBQUFRLHlCQUFLLEVBQUV2SCxPQUFmO0FBQXdCLDRCQUFRLEVBQUUsa0JBQUNrQyxDQUFEO0FBQUEsNkJBQUt5RSxjQUFjLENBQUN6RSxDQUFELENBQW5CO0FBQUEscUJBQWxDO0FBQTBELHdCQUFJLEVBQUMsTUFBL0Q7QUFBc0UsNEJBQVE7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBaEMsZUFBdUg7QUFBQSwyQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBRUE7QUFBSyx5QkFBUyxFQUFFNEMsK0RBQUssQ0FBQ3lELElBQXRCO0FBQUEsd0NBQ0E7QUFBSywyQkFBUyxFQUFFekQsK0RBQUssQ0FBQzBELHNCQUF0QjtBQUE4Qyx5QkFBTyxFQUFFO0FBQUEsMkJBQUl4QyxzQkFBc0IsRUFBMUI7QUFBQSxtQkFBdkQ7QUFBQSwwQ0FDQTtBQUFLLDZCQUFTLEVBQUVsQiwrREFBSyxDQUFDMkQsU0FBdEI7QUFBQSwyQ0FBaUMscUVBQUMsZ0RBQUQ7QUFBTywyQkFBSyxFQUFFO0FBQUVDLDBCQUFFLEVBQUUsNEJBQU47QUFBb0NDLDRCQUFJLEVBQUU7QUFBMUMsdUJBQWQ7QUFBNkQsMEJBQUksRUFBRTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREEsRUFFQ3ZKLDJCQUEyQixpQkFBRTtBQUFLLDZCQUFTLEVBQUUwRiwrREFBSyxDQUFDOEQsb0JBQXRCO0FBQUEsMkNBQTRDLHFFQUFDLGlEQUFEO0FBQVEsNkJBQU8sRUFBRXRKLG9CQUFqQjtBQUF1Qyw4QkFBUSxFQUFFLGtCQUFDNEMsQ0FBRDtBQUFBLCtCQUFLbUQsUUFBUSxDQUFDbkQsQ0FBRCxDQUFiO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsZUFLSTtBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFzQiwyQkFBUyxFQUFFNEMsK0RBQUssQ0FBQytELE9BQXZDO0FBQWdELHlCQUFPLEVBQUU7QUFBQSwyQkFBSXRDLFdBQVcsRUFBZjtBQUFBLG1CQUF6RDtBQUFBLHlDQUE0RTtBQUFNLDZCQUFTLEVBQUV6QiwrREFBSyxDQUFDZ0UsY0FBdkI7QUFBQSwyQ0FBd0MscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBeURELEdBMURELE1BMERLO0FBQ0Qsd0JBQ1U7QUFBSyxlQUFTLEVBQUVoRSwrREFBSyxDQUFDa0MsU0FBdEI7QUFBQSw4QkFDQSxxRUFBQyxpRUFBRDtBQUFRLGFBQUssRUFBRS9ILEtBQUssQ0FBQzhDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVJO0FBQUssaUJBQVMsRUFBRStDLCtEQUFLLENBQUNpRSxjQUF0QjtBQUFBLCtCQUNBO0FBQUssbUJBQVMsRUFBRWpFLCtEQUFLLENBQUNrRSxzQkFBdEI7QUFBOEMsYUFBRyxFQUFFQyxhQUFuRDtBQUFrRSxpQkFBTyxFQUFFO0FBQUEsbUJBQUlDLGNBQWMsRUFBbEI7QUFBQSxXQUEzRTtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBRXBFLCtEQUFLLENBQUNxRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFFckUsK0RBQUssQ0FBQ3NFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFLLHFCQUFTLEVBQUV0RSwrREFBSyxDQUFDdUU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFTSTtBQUFLLGlCQUFTLEVBQUV2RSwrREFBSyxDQUFDb0MsWUFBdEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVwQywrREFBSyxDQUFDcUMsTUFBdEI7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUVyQywrREFBSyxDQUFDc0MsV0FBdEI7QUFBQSxvQkFDQzVILFdBQVcsQ0FBQ21ELEdBQVosQ0FBZ0IsVUFBQVQsQ0FBQztBQUFBLGdDQUFFLHFFQUFDLEtBQUQ7QUFBTyw0QkFBYyxFQUFFNEUsZ0JBQXZCO0FBQXlDLHlCQUFXLEVBQUVULGFBQXREO0FBQWtGLHNCQUFRLEVBQUVuRTtBQUE1RixlQUEwRUEsQ0FBQyxDQUFDckMsR0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBRjtBQUFBLFdBQWpCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQUssbUJBQVMsRUFBRWlGLCtEQUFLLENBQUN1QyxNQUF0QjtBQUFBLGlDQUNBO0FBQUsscUJBQVMsRUFBRXZDLCtEQUFLLENBQUN3QyxlQUF0QjtBQUFBLG1DQUF1QztBQUFLLHVCQUFTLEVBQUV4QywrREFBSyxDQUFDeUMsUUFBdEI7QUFBQSxzQ0FBZ0M7QUFBTyx3QkFBUSxFQUFFLGtCQUFDckYsQ0FBRDtBQUFBLHlCQUFLK0QsYUFBYSxDQUFDL0QsQ0FBRCxDQUFsQjtBQUFBLGlCQUFqQjtBQUF3QyxvQkFBSSxFQUFDLE1BQTdDO0FBQW9ELHdCQUFRO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWhDLGVBQXFHO0FBQUEsdUNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFY7QUF1Qkg7QUFFTixDQTdURDs7R0FBTWxELEk7OztBQStUU0EsbUVBQWY7O0FBR0UsSUFBTXNLLE9BQU8sR0FBQyxTQUFSQSxPQUFRLEdBQUk7QUFDaEIsc0JBQ0k7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLFdBQWhEO0FBQUEsMkJBQTREO0FBQUcsUUFBRSxFQUFDLFVBQU47QUFBaUIsbUJBQVUsVUFBM0I7QUFBQSw4QkFBc0M7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXRDLGVBQThOO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE5TixlQUF3VTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeFUsZUFBaWM7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWpjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHRCxDQUpEOztLQUFNQSxPOztBQUtOLElBQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLENBQUN0SyxLQUFELEVBQVM7QUFBQTs7QUFBQSwwQkFFOENDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUYsS0FBSyxDQUFDdUssUUFBTixDQUFldkcsb0JBQTlCLENBRjlDO0FBQUE7QUFBQSxNQUVWd0cseUJBRlU7QUFBQSxNQUVnQkMsNEJBRmhCOztBQUdqQnhLLDhDQUFLLENBQUN1QyxTQUFOLENBQWdCLFlBQUk7QUFDbEJpSSxnQ0FBNEIsQ0FBQ3pLLEtBQUssQ0FBQ3VLLFFBQU4sQ0FBZXZHLG9CQUFoQixDQUE1QjtBQUNELEdBRkQsRUFFRSxDQUFDaEUsS0FBSyxDQUFDdUssUUFBTixDQUFldkcsb0JBQWhCLENBRkY7QUFHRixzQkFDUTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFNkIsK0RBQUssQ0FBQzZFLGFBQXRCO0FBQXFDLGFBQU8sRUFBRSxtQkFBSTtBQUFDMUssYUFBSyxDQUFDMkssV0FBTixDQUFrQjNLLEtBQUssQ0FBQ3VLLFFBQXhCLEdBQWtDRSw0QkFBNEIsQ0FBQyxDQUFELENBQTlELEVBQWtFekssS0FBSyxDQUFDNEssY0FBTixDQUFxQjVLLEtBQUssQ0FBQ3VLLFFBQU4sQ0FBZXhHLEtBQXBDLENBQWxFO0FBQTZHLE9BQWhLO0FBQUEsaUJBQ0t5Ryx5QkFBeUIsSUFBRSxDQUEzQixpQkFBOEI7QUFBSyxpQkFBUyxFQUFFM0UsK0RBQUssQ0FBQ2dGLG1CQUF0QjtBQUFBLCtCQUEyQztBQUFBLG9CQUFPTDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURuQyxlQUVJO0FBQU0saUJBQVMsRUFBRTNFLCtEQUFLLENBQUNpRixZQUF2QjtBQUFBLCtCQUFxQztBQUFLLGFBQUcsRUFBRTlLLEtBQUssQ0FBQ3VLLFFBQU4sQ0FBZTlKLGVBQWYsSUFBa0M7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFNLGlCQUFTLEVBQUVvRiwrREFBSyxDQUFDbEYsUUFBdkI7QUFBQSwrQkFBaUM7QUFBQSxvQkFBSVgsS0FBSyxDQUFDdUssUUFBTixDQUFlNUo7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBU0gsQ0FmQzs7SUFBTTJKLEs7O01BQUFBLEs7O0FBa0JSLElBQU1TLFdBQVcsR0FBQyxTQUFaQSxXQUFZLENBQUMvSyxLQUFELEVBQVM7QUFBQTs7QUFBQSwwQkFDb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRHBCO0FBQUE7QUFBQSxNQUNoQjhLLGVBRGdCO0FBQUEsTUFDQUMsa0JBREE7O0FBRXZCLE1BQU1DLGtCQUFrQixHQUFDLFNBQW5CQSxrQkFBbUIsQ0FBQ25ILEtBQUQsRUFBUztBQUM5Qi9ELFNBQUssQ0FBQ21MLGFBQU4sQ0FBb0JwSCxLQUFwQjtBQUNBcUgsMkVBQWUsQ0FBQztBQUFDQyxjQUFRLEVBQUN0SCxLQUFWO0FBQWdCeUQsY0FBUSxFQUFDeEgsS0FBSyxDQUFDd0g7QUFBL0IsS0FBRCxFQUEwQ3hILEtBQUssQ0FBQzhDLEtBQWhELENBQWY7QUFDSCxHQUhEOztBQUlBLHNCQUFPO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBSW1JLGtCQUFrQixDQUFDLFVBQUFoSSxDQUFDO0FBQUEsZUFBRSxDQUFDQSxDQUFIO0FBQUEsT0FBRixDQUF0QjtBQUFBLEtBQWQ7QUFBNkMsYUFBUyxFQUFFNEMsK0RBQUssQ0FBQzNELFNBQTlEO0FBQXlFLFNBQUssRUFBRTtBQUFDZ0gscUJBQWUsRUFBQ2xKLEtBQUssQ0FBQ2tDLFNBQU4sQ0FBZ0JGO0FBQWpDLEtBQWhGO0FBQUEsY0FDRmdKLGVBQWUsaUJBQUU7QUFBSyxlQUFTLEVBQUVuRiwrREFBSyxDQUFDeUYsV0FBdEI7QUFBQSw4QkFDVjtBQUFLLGlCQUFTLEVBQUV6RiwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUltSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUNoQyx5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVSxlQUVWO0FBQUssaUJBQVMsRUFBRXJELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSW1ILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQ2hDLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZVLGVBR1Y7QUFBSyxpQkFBUyxFQUFFckQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJbUgsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDaEMseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSFUsZUFJVjtBQUFLLGlCQUFTLEVBQUVyRCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUltSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUNoQyx5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKVSxlQUtWO0FBQUssaUJBQVMsRUFBRXJELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSW1ILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQ2hDLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxVLGVBTVY7QUFBSyxpQkFBUyxFQUFFckQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJbUgsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDaEMseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTlUsZUFPVjtBQUFLLGlCQUFTLEVBQUVyRCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUltSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUNoQyx5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQVSxlQVFWO0FBQUssaUJBQVMsRUFBRXJELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSW1ILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQ2hDLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJVLGVBU1Y7QUFBSyxpQkFBUyxFQUFFckQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJbUgsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDaEMseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVFUsZUFVVjtBQUFLLGlCQUFTLEVBQUVyRCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUltSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUNoQyx5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWVSxlQVdWO0FBQUssaUJBQVMsRUFBRXJELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSW1ILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQ2hDLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhVLGVBWVY7QUFBSyxpQkFBUyxFQUFFckQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJbUgsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDaEMseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBbUJILENBekJEOztJQUFNNkIsVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjIwZDBkZGRkZDUxZTlhZjMwZWZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge3VwZGF0ZUNvbG9yQ2hhdCxhZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5jb25zdCBjaGF0ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjaGF0Q29sb3Isc2V0Q2hhdENvbG9yXT1SZWFjdC51c2VTdGF0ZSh7Y29sb3JvbmU6XCIjMTg3NmYzXCIsY29sb3J0d286XCIjZTRlNmViXCJ9KVxyXG4gICAgY29uc3QgW2hlaWdodEFuZFdpZHRoT2ZXaW5kb3csIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ddID0gUmVhY3QudXNlU3RhdGUoeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKioqKioqKioqKioqdXNlRWZmZWN0cyoqKioqKioqKioqL1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgc2V0SGVpZ2h0QW5kV2lkdGhPZldpbmRvdyh7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfSkgXHJcbiAgICB9LFtdKVxyXG4gICAgLy93aGVuIHlvdSBzY3JvbCB0b3Agb24gY29udmVydGF0aW9uIGl0IHdpbGwgbG9hZCBuZXcgMjAgbWVzc2FnZVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOnNraXB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT5bLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpLC4uLmVdKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxbc2tpcF0pXHJcblxyXG4gICAgICAvLyBnZXQgbGlzdCBvZiB1c2VycyAgeW91IGNoYXQgd2l0aFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodXNlci5faWQhPXVuZGVmaW5lZCYmIHVzZXIuX2lkLmxlbmd0aD4yKVxyXG4gICAgICAgIGdldFVzZXJXaG9DaGF0V2l0aCh7fSxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgbGV0IG5ld1VzZXJXaG9DaGF0V2l0aD1yZXN1bHQuZGF0YS5kYXRhLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMgdG8gcmV0dXJuIHRoZSBkYXRhIG9mIHRoZSBvdGhlciB1c2VyIG5vdCB5b3VyIGRhdGEgYmVjYXVzZSBpbSByZXR1cm4gYm90aCBvZiBkYXRhIHNlbmRlciBhbmQgcmVjaXZlciBcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsY29sb3I6ZS5jb2xvcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuZmlyc3RVc2VyLGNvbG9yOmUuY29sb3Isbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChuZXdVc2VyV2hvQ2hhdFdpdGgpLnRoZW4obmV3YXJyYXk9PntcclxuICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhbLi4ubmV3YXJyYXldKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICBcclxuICAgICAgICAgIH0pLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUubWVzc2FnZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuXHJcbiAgICAvL3doZW4geW91IGNsaWNrIG9uIHVzZXIgaXQgd2lsbCBsb2FkIGNvbnZlcnRhdGlvbiBkYXRhXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6MH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoWy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKV0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy93aGVuIHlvdSBvcGVuIGNvbnZlcnRhdGlvbiBpdHMgd2lsbCBtYWtlIGFsbCBtZXNzZ2FnZSBzZWVuXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxbY3VycmVudFVzZXJUb0NoYXRXaXRoXSlcclxuXHJcbiAgICAvL3NvY2tldCByZWNldmluZyBkYXRhIGhhbmRsZXJcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vb24gcmVjaXZpbmcgbWVzc3NhZ2Ugc29ja2V0XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9tc2dTb3VuZC5tcDNcIilcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgICAgICAgICAvL3NldCB2dSBpZiB5b3UgYXJlIGluIGNvbnZlcmF0aW9uIFxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgIC8vaWYgeW91IGFyZSBub3QgaW4gY29udmVydGlvbiBhZGQgKzEgdG8gbWVzc2FnZSBub3QgcmVhZCBpbiB1c2VyIGltYWdlXHJcbiAgICAgICAgICAgIGxldCBMaXN0T2ZVc2VyID0gYXdhaXQgbGlzdE9mVXNlcnMubWFwKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09ZS5faWQgJiYgY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9ZS5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUubm90U2Vlbk1lc3NhZ2VOdW1iZXI9ZS5ub3RTZWVuTWVzc2FnZU51bWJlcisxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChMaXN0T2ZVc2VyKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9hZGQgbWVzc2FnZSB0byBjaGF0XHJcbiAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W2RhdGEuc2VuZGVySWRdLG1lc3NhZ2U6ZGF0YS50ZXh0LF9pZDpyfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiB0aGUgb3RoZXIgdXNlciBpcyB3cnRpbmcgYWRkIGFuaW1hdGlvbiBpZiB3cnRpbmdcclxuICAgICAgICBmdW5jdGlvbiBpc1dyaXRpbmcoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGRhdGEudXNlcldob1JlY2l2ZVdyaXRpbmc9PXVzZXIuX2lkICYmIGRhdGEuc2VuZGVyaWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZGF0YS5pc1dyaXRpbmcpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIG90aGVyIHVzZXIgaGFzIHNlZW4geW91IG1lc3NhZ2Ugc2VlbiBpY29uIHdpbGwgYmUgYmx1ZVxyXG4gICAgICAgIGNvbnN0IHNldHZ1PShkYXRhKT0+e1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpLmxlbmd0aCE9MCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudENoYXRzLmxlbmd0aC0xOyBpPjA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0hPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvciE9XCJyZ2IoMjQsIDExOCwgMjQzKVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvcj1cInJnYigyNCwgMTE4LCAyNDMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICBzb2NrZXQub24oXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICBzb2NrZXQub24oXCJnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIixjaGF0SGFuZGxlcilcclxuICAgICAgICBzb2NrZXQub24oXCJzZXR2dVwiLHNldHZ1KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE1lc3NhZ2VGcm9tVXNlclRvVXNlcicsIGNoYXRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJzZXR2dVwiLHNldHZ1KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9hZGQgZW1vamkgdG8gaW5wdXRcclxuICAgIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgICAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgICAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZWw9PntyZXR1cm4gZWwrZW1vaml9KVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy9jbG9zZSBvciBvcGVuIGVtb2ppIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9zZWFyY2ggZm9yIHVzZXIgdG8gc2VuZCBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHNlYXJjaEZvclVzZXI9KGUpPT57XHJcbiAgICAgICAgICAgIHNlYXJjaFVzZXJOYW1lQXBpKGUudGFyZ2V0LnZhbHVlLHByb3BzLnRva2VuKS50aGVuKChyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnJlc3VsdC5kYXRhLmRhdGFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL29uIGNsaWNrIG9uIHVzZXIgZ2V0IGN1cnJlbnQgdXNlciBkYXRhXHJcbiAgICAgIGNvbnN0IGdldFVzZXJkYXRhRm49KGN1cnJlbnRVc2VyRGF0YSk9PntcclxuICAgICAgICBzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGgoY3VycmVudFVzZXJEYXRhKVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2U9KCk9PntcclxuICAgICAgICBpZihtZXNzYWdlLmxlbmd0aD4wJiZjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGFkZE1lc3NhZ2Uoe3JlY2VpdmVyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsbWVzc2FnZTptZXNzYWdlLEZpcnN0VGltZTpjdXJyZW50Q2hhdHMubGVuZ3RofSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W3VzZXIuX2lkXSxtZXNzYWdlOm1lc3NhZ2UsX2lkOnJ9XVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIse290aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsdGV4dDptZXNzYWdlLHNlbmRlcklkOnVzZXIuX2lkfSlcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIilcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxzZW5kZXJpZDp1c2VyLl9pZH0pXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6ZmFsc2Usb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxzZW5kZXJpZDp1c2VyLl9pZH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICAvL29uIHNjcm9sIHRvIHRvcCBsb2FkIDIwIG5ldyBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHNjcm9sbGZuPShlKT0+e1xyXG4gICAgICAgICAgLy9pZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0KSl7XHJcbiAgICAgICAgICBpZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgc2V0U2tpcChlPT5lKzIwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy9pZiB5b3UgY2hhbmdlIHRoZSBjb2xvciBvZiBjb252ZXJhdGlvblxyXG4gICAgICBjb25zdCBnZXROZXdDb2xvcj0oY29sb3IpPT57XHJcbiAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntyZXR1cm4gey4uLmUsY29sb3JvbmU6Y29sb3J9fSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9zZXQgY29sb3IgaWYgY29udmVydGF0aW9uXHJcbiAgICAgIGNvbnN0IHNldENvbG9yT2ZDaGF0Rm49KGNvbG9yT2ZDaGF0RnJvbURhdGFCYXNlKT0+e1xyXG4gICAgICAgIGlmKGNvbG9yT2ZDaGF0RnJvbURhdGFCYXNlPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBzZXRDaGF0Q29sb3IoZT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuey4uLmUsY29sb3JvbmU6XCIjMTg3NmYzXCJ9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldENoYXRDb2xvcihlPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm57Li4uZSxjb2xvcm9uZTpjb2xvck9mQ2hhdEZyb21EYXRhQmFzZX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhlaWdodEFuZFdpZHRoT2ZXaW5kb3cud2lkdGggPiBoZWlnaHRBbmRXaWR0aE9mV2luZG93LmhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgc2V0Q29sb3JPZkNoYXQ9e3NldENvbG9yT2ZDaGF0Rm59IGdldFVzZXJkYXRhPXtnZXRVc2VyZGF0YUZufSBrZXk9e2UuX2lkfSAgdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PGgzPntjdXJyZW50VXNlclRvQ2hhdFdpdGgudXNlck5hbWV9PC9oMz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNlbGxpcHNpc30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGFuZ2VDb2xvckNvbnRhaW5lcn0+PENvbG9yUGlja2VyIHJlY2VpdmVyPXtjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSB0b2tlbj17cHJvcHMudG9rZW59IGdldE5ld0NvbG9yZm49e2dldE5ld0NvbG9yfSBjaGF0Q29sb3I9e2NoYXRDb2xvcn0+PC9Db2xvclBpY2tlcj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvblNjcm9sbD17KGUpPT5zY3JvbGxmbihlKX0gcmVmPXttZXNzYWdlc0NvbXB9IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Q2hhdHMubWFwKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnVzZXJzWzBdPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VUZXh0fSB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOlwiZmFsc2VcIn0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gJHtTdHlsZS55b3VyTWVzc2FnZVZ1fSBgfSAgIHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6XCJmYWxzZVwifSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOmNoYXRDb2xvci5jb2xvcm9uZSxjb2xvcjpcIndoaXRlXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48c3BhbiAgc3R5bGU9e2Uuc2Vlbj09dHJ1ZT97Y29sb3I6XCIjMTg3NmYzXCJ9Ontjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9e1N0eWxlLnNlZW59ID4mIzEwMDA0Ozwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2U9PmUucHJldmVudERlZmF1bHQoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCAgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5vcGVuT3JDbG9zZUVtb2ppUGlja2VyfSBvbkNsaWNrPXsoKT0+Y2xvc2VPck9wZW5FbW9qaVBpY2tlcigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubmF2QmFyU2hvd1VzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyQnRuU2lkZU5hdkJhcn0gcmVmPXtzaWRlTmF2QmFyQnRufSBvbkNsaWNrPXsoKT0+U2hvd1NpZGVOYXZCYXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYmFyMX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYmFyMn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYmFyM30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDb250YW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmNvbnRhY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIHNldENvbG9yT2ZDaGF0PXtzZXRDb2xvck9mQ2hhdEZufSBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gIHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhdFxyXG5cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWxdPVJlYWN0LnVzZVN0YXRlKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICB9LFtwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcl0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckNvbnRhaW5lcn0gb25DbGljaz17KCk9Pntwcm9wcy5nZXRVc2VyZGF0YShwcm9wcy51c2VyRGF0YSksc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCgwKSxwcm9wcy5zZXRDb2xvck9mQ2hhdChwcm9wcy51c2VyRGF0YS5jb2xvcil9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCE9MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdFNlZW5NZXNzYWdlTnVtYmV9PjxzcGFuPntub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsfTwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS5pbWdDb250YWluZXJ9PjxpbWcgc3JjPXtwcm9wcy51c2VyRGF0YS5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb2xvclBpY2tlcj0ocHJvcHMpPT57XHJcbiAgICBjb25zdCBbb3BlbkNvbG9yUGlja2VyLHNldE9wZW5Db2xvclBpY2tlcl09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBjaGFuZ2VQcmltYXJ5Q29sb3I9KGNvbG9yKT0+e1xyXG4gICAgICAgIHByb3BzLmdldE5ld0NvbG9yZm4oY29sb3IpXHJcbiAgICAgICAgdXBkYXRlQ29sb3JDaGF0KHtuZXdDb2xvcjpjb2xvcixyZWNlaXZlcjpwcm9wcy5yZWNlaXZlcn0scHJvcHMudG9rZW4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4oPGRpdiBvbkNsaWNrPXsoKT0+c2V0T3BlbkNvbG9yUGlja2VyKGU9PiFlKX0gY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29sb3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOnByb3BzLmNoYXRDb2xvci5jb2xvcm9uZX19PlxyXG4gICAgICAgIHtvcGVuQ29sb3JQaWNrZXImJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvclBpY2tlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2Y1MDA1N1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZjUwMDU3XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMzZDVhZmVcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzNkNWFmZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNzZmZjAzXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM3NmZmMDNcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2M2ZmYwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjYzZmZjAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjNkMDBcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmM2QwMFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNjUxZmZmXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM2NTFmZmZcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmZWEwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmZlYTAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmNTAwNTdcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2Y1MDA1N1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzFkZTliNlwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMWRlOWI2XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMwM2E5ZjRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzAzYTlmNFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEscmVzfSkge1xyXG5cclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/e3Byb3BzOiB7dG9rZW46cmVxLmNvb2tpZXMudG9rZW59fTp7cmVkaXJlY3Q6IHsgZGVzdGluYXRpb246ICcvJywgcGVybWFuZW50OiBmYWxzZSwgfX1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=