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
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserContainerMobile,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "contacts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
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
              lineNumber: 312,
              columnNumber: 49
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
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
                lineNumber: 315,
                columnNumber: 100
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 176
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 169
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 68
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 307,
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
        lineNumber: 329,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 329,
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
          lineNumber: 341,
          columnNumber: 95
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 52
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 339,
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
        lineNumber: 358,
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
        lineNumber: 359,
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
        lineNumber: 360,
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
        lineNumber: 361,
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
        lineNumber: 362,
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
        lineNumber: 363,
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
        lineNumber: 364,
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
        lineNumber: 365,
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
        lineNumber: 366,
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
        lineNumber: 367,
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
        lineNumber: 368,
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
        lineNumber: 369,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 27
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 356,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImNoYXRDb2xvciIsInNldENoYXRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbiIsInNlY29uZFVzZXIiLCJ0b2tlbiIsInRoZW4iLCJkYXRhIiwiZSIsInJldmVyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJnZXRVc2VyV2hvQ2hhdFdpdGgiLCJyZXN1bHQiLCJuZXdVc2VyV2hvQ2hhdFdpdGgiLCJtYXAiLCJmaXJzdFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNlY291bmRVc2VyIiwiY29sb3IiLCJub3RTZWVuTWVzc2FnZU51bWJlciIsImFsbCIsIm5ld2FycmF5IiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImVtaXQiLCJzdGF0ZSIsIm90aGVyVXNlcklkIiwiY2hhdEhhbmRsZXIiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsInNlbmRlcklkIiwiTGlzdE9mVXNlciIsInIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ1c2VycyIsInRleHQiLCJpc1dyaXRpbmciLCJ1c2VyV2hvUmVjaXZlV3JpdGluZyIsInNlbmRlcmlkIiwic2V0dnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTdHlsZSIsInlvdXJNZXNzYWdlVnUiLCJpIiwiY2hpbGROb2RlcyIsInN0eWxlIiwib24iLCJvZmYiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInNlYXJjaEZvclVzZXIiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwibWVzc2FnZUhhbmRsZXIiLCJzY3JvbGxmbiIsImdldE5ld0NvbG9yIiwic2V0Q29sb3JPZkNoYXRGbiIsImNvbG9yT2ZDaGF0RnJvbURhdGFCYXNlIiwiY29udGFpbmVyIiwiY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lciIsIlVzZXJDb250YW5lciIsImhlYWRlciIsImxpc3RDb250YWNzIiwiYm90dG9tIiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXRjc3MiLCJjaGF0Q29udGFpbmVyIiwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lIiwidXNlckltYWdlQ29udGFpbmVyIiwiaXNXcml0aW5nQ29udGFpbmVyIiwibGRzZWxsaXBzaXMiLCJjaGFuZ2VDb2xvckNvbnRhaW5lciIsIm1lc3NhZ2VzIiwib25lTWVzc2FnZSIsIm1lc3NhZ2VUZXh0IiwiZGF0ZSIsInNsaWNlIiwiYmFja2dyb3VuZENvbG9yIiwic2VlbiIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRDb250YWluZXIiLCJidG5zIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwiVXNlckNvbnRhaW5lck1vYmlsZSIsIlNlbnRTdmciLCJVc2VycyIsInVzZXJEYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJ1c2VyQ29udGFpbmVyIiwiZ2V0VXNlcmRhdGEiLCJzZXRDb2xvck9mQ2hhdCIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiLCJDb2xvclBpY2tlciIsIm9wZW5Db2xvclBpY2tlciIsInNldE9wZW5Db2xvclBpY2tlciIsImNoYW5nZVByaW1hcnlDb2xvciIsImdldE5ld0NvbG9yZm4iLCJ1cGRhdGVDb2xvckNoYXQiLCJuZXdDb2xvciIsImNvbG9yUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUUrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGL0M7QUFBQTtB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QUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRVLGVBVVY7QUFBSyxpQkFBUyxFQUFFckQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJNkcsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDMUIseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVlUsZUFXVjtBQUFLLGlCQUFTLEVBQUVyRCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUk2RyxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUMxQix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYVSxlQVlWO0FBQUssaUJBQVMsRUFBRXJELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSTZHLGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQzFCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQW1CSCxDQXpCRDs7SUFBTXVCLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC4yY2I5MmFiMTJkZWRlNmM3MjcyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NoYXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IHt1cGRhdGVDb2xvckNoYXQsYWRkTWVzc2FnZSxnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbixnZXRVc2VyV2hvQ2hhdFdpdGh9IGZyb20gJy4uL3NlcnZpY2VzL2NoYXQnO1xyXG5pbXBvcnQgc29ja2V0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUsc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtFbW9qaUNvbnRhaW5lckhlaWdodCwgc2V0RW1vamlDb250YWluZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoOSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW2xpc3RPZlVzZXJzLHNldExpc3RPZlVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlclRvQ2hhdFdpdGgsc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoXT1SZWFjdC51c2VTdGF0ZSh7Y3VycmVudEltYWdlVXJsOnVuZGVmaW5lZCx1c2VyTmFtZTp1bmRlZmluZWQsX2lkOnVuZGVmaW5lZH0pXHJcbiAgICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2N1cnJlbnRDaGF0cyxzZXRDdXJyZW50Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgbWVzc2FnZXNDb21wPVJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtzb2NrZXQsc2V0U29ja2V0XT1SZWFjdC51c2VDb250ZXh0KHNvY2tldENvbnRleHQpXHJcbiAgICBjb25zdCBbc2tpcCxzZXRTa2lwXT1SZWFjdC51c2VTdGF0ZSgoKT0+MClcclxuICAgIGNvbnN0IFtpc1dyaXRpbmdTdGF0ZSxzZXRJc1dyaXRpbmdTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2hhdENvbG9yLHNldENoYXRDb2xvcl09UmVhY3QudXNlU3RhdGUoe2NvbG9yb25lOlwiIzE4NzZmM1wiLGNvbG9ydHdvOlwiI2U0ZTZlYlwifSlcclxuICAgIGNvbnN0IFtoZWlnaHRBbmRXaWR0aE9mV2luZG93LCBzZXRIZWlnaHRBbmRXaWR0aE9mV2luZG93XSA9IFJlYWN0LnVzZVN0YXRlKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKioqKioqKioqKioqKnVzZUVmZmVjdHMqKioqKioqKioqKi9cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3coeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pIFxyXG4gICAgfSxbXSlcclxuICAgIC8vd2hlbiB5b3Ugc2Nyb2wgdG9wIG9uIGNvbnZlcnRhdGlvbiBpdCB3aWxsIGxvYWQgbmV3IDIwIG1lc3NhZ2VcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDpza2lwfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sW3NraXBdKVxyXG5cclxuICAgICAgLy8gZ2V0IGxpc3Qgb2YgdXNlcnMgIHlvdSBjaGF0IHdpdGhcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIuX2lkIT11bmRlZmluZWQmJiB1c2VyLl9pZC5sZW5ndGg+MilcclxuICAgICAgICBnZXRVc2VyV2hvQ2hhdFdpdGgoe30scHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VyV2hvQ2hhdFdpdGg9cmVzdWx0LmRhdGEuZGF0YS5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgLy90aGlzIHRvIHJldHVybiB0aGUgZGF0YSBvZiB0aGUgb3RoZXIgdXNlciBub3QgeW91ciBkYXRhIGJlY2F1c2UgaW0gcmV0dXJuIGJvdGggb2YgZGF0YSBzZW5kZXIgYW5kIHJlY2l2ZXIgXHJcbiAgICAgICAgICAgICAgICBpZihlLmZpcnN0VXNlci5faWQ9PXVzZXIuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLnNlY291bmRVc2VyLGNvbG9yOmUuY29sb3Isbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixjb2xvcjplLmNvbG9yLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobmV3VXNlcldob0NoYXRXaXRoKS50aGVuKG5ld2FycmF5PT57XHJcbiAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoWy4uLm5ld2FycmF5XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICB9KS5jYXRjaChlPT5jb25zb2xlLmxvZyhlLm1lc3NhZ2UpKVxyXG4gICAgfSxbdXNlcl0pXHJcblxyXG4gICAgLy93aGVuIHlvdSBjbGljayBvbiB1c2VyIGl0IHdpbGwgbG9hZCBjb252ZXJ0YXRpb24gZGF0YVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiB5b3Ugb3BlbiBjb252ZXJ0YXRpb24gaXRzIHdpbGwgbWFrZSBhbGwgbWVzc2dhZ2Ugc2VlblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcblxyXG4gICAgLy9zb2NrZXQgcmVjZXZpbmcgZGF0YSBoYW5kbGVyXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvL29uIHJlY2l2aW5nIG1lc3NzYWdlIHNvY2tldFxyXG4gICAgICAgIGFzeW5jICBmdW5jdGlvbiAgY2hhdEhhbmRsZXIoZGF0YSl7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgLy9zZXQgdnUgaWYgeW91IGFyZSBpbiBjb252ZXJhdGlvbiBcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAvL2lmIHlvdSBhcmUgbm90IGluIGNvbnZlcnRpb24gYWRkICsxIHRvIG1lc3NhZ2Ugbm90IHJlYWQgaW4gdXNlciBpbWFnZVxyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vYWRkIG1lc3NhZ2UgdG8gY2hhdFxyXG4gICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgdGhlIG90aGVyIHVzZXIgaXMgd3J0aW5nIGFkZCBhbmltYXRpb24gaWYgd3J0aW5nXHJcbiAgICAgICAgZnVuY3Rpb24gaXNXcml0aW5nKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnVzZXJXaG9SZWNpdmVXcml0aW5nPT11c2VyLl9pZCAmJiBkYXRhLnNlbmRlcmlkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGRhdGEuaXNXcml0aW5nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBvdGhlciB1c2VyIGhhcyBzZWVuIHlvdSBtZXNzYWdlIHNlZW4gaWNvbiB3aWxsIGJlIGJsdWVcclxuICAgICAgICBjb25zdCBzZXR2dT0oZGF0YSk9PntcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KS5sZW5ndGghPTApe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRDaGF0cy5sZW5ndGgtMTsgaT4wOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3IhPVwicmdiKDI0LCAxMTgsIDI0MylcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3I9XCJyZ2IoMjQsIDExOCwgMjQzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0dnVcIixzZXR2dSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXInLCBjaGF0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwic2V0dnVcIixzZXR2dSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vYWRkIGVtb2ppIHRvIGlucHV0XHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vY2xvc2Ugb3Igb3BlbiBlbW9qaSBjb250YWluZXJcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vc2VhcmNoIGZvciB1c2VyIHRvIHNlbmQgbWVzc2FnZVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9vbiBjbGljayBvbiB1c2VyIGdldCBjdXJyZW50IHVzZXIgZGF0YVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNvbnN0IHNlbmRNZXNzYWdlPSgpPT57XHJcbiAgICAgICAgaWYobWVzc2FnZS5sZW5ndGg+MCYmY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICBhZGRNZXNzYWdlKHtyZWNlaXZlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLG1lc3NhZ2U6bWVzc2FnZSxGaXJzdFRpbWU6Y3VycmVudENoYXRzLmxlbmd0aH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOlt1c2VyLl9pZF0sbWVzc2FnZTptZXNzYWdlLF9pZDpyfV1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgLy9vbiBzY3JvbCB0byB0b3AgbG9hZCAyMCBuZXcgbWVzc2FnZVxyXG4gICAgICBjb25zdCBzY3JvbGxmbj0oZSk9PntcclxuICAgICAgICAgIC8vaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCkpe1xyXG4gICAgICAgICAgaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNldFNraXAoZT0+ZSsyMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vaWYgeW91IGNoYW5nZSB0aGUgY29sb3Igb2YgY29udmVyYXRpb25cclxuICAgICAgY29uc3QgZ2V0TmV3Q29sb3I9KGNvbG9yKT0+e1xyXG4gICAgICAgIHNldENoYXRDb2xvcihlPT57cmV0dXJuIHsuLi5lLGNvbG9yb25lOmNvbG9yfX0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vc2V0IGNvbG9yIGlmIGNvbnZlcnRhdGlvblxyXG4gICAgICBjb25zdCBzZXRDb2xvck9mQ2hhdEZuPShjb2xvck9mQ2hhdEZyb21EYXRhQmFzZSk9PntcclxuICAgICAgICBpZihjb2xvck9mQ2hhdEZyb21EYXRhQmFzZT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntcclxuICAgICAgICAgICAgICAgIHJldHVybnsuLi5lLGNvbG9yb25lOlwiIzE4NzZmM1wifVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRDaGF0Q29sb3IoZT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuey4uLmUsY29sb3JvbmU6Y29sb3JPZkNoYXRGcm9tRGF0YUJhc2V9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChoZWlnaHRBbmRXaWR0aE9mV2luZG93LndpZHRoID4gaGVpZ2h0QW5kV2lkdGhPZldpbmRvdy5oZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIHRva2VuPXtwcm9wcy50b2tlbn0+PC9OYXZCYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDb250YW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmNvbnRhY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIHNldENvbG9yT2ZDaGF0PXtzZXRDb2xvck9mQ2hhdEZufSBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gIHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZWFyY2hGb3JVc2VyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPlNlYXJjaCB1c2Vyczwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VySW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPXtjdXJyZW50VXNlclRvQ2hhdFdpdGguY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGRzZWxsaXBzaXN9PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhbmdlQ29sb3JDb250YWluZXJ9PjxDb2xvclBpY2tlciByZWNlaXZlcj17Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0gdG9rZW49e3Byb3BzLnRva2VufSBnZXROZXdDb2xvcmZuPXtnZXROZXdDb2xvcn0gY2hhdENvbG9yPXtjaGF0Q29sb3J9PjwvQ29sb3JQaWNrZXI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25TY3JvbGw9eyhlKT0+c2Nyb2xsZm4oZSl9IHJlZj17bWVzc2FnZXNDb21wfSBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17ZS5faWR9IGNsYXNzTmFtZT17U3R5bGUub25lTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS51c2Vyc1swXT09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpcImZhbHNlXCJ9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGUubWVzc2FnZVRleHR9ICR7U3R5bGUueW91ck1lc3NhZ2VWdX0gYH0gICB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOlwiZmFsc2VcIn0gIHN0eWxlPXt7XCItLWlcIjpcIi0xMDAlXCIsZmxvYXQ6XCJyaWdodFwiLGJhY2tncm91bmRDb2xvcjpjaGF0Q29sb3IuY29sb3JvbmUsY29sb3I6XCJ3aGl0ZVwifX0+PHA+e2UubWVzc2FnZX08L3A+PHNwYW4gIHN0eWxlPXtlLnNlZW49PXRydWU/e2NvbG9yOlwiIzE4NzZmM1wifTp7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPXtTdHlsZS5zZWVufSA+JiMxMDAwNDs8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlbmRNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlQaWNrZXJDb250YWluZXJ9PjxQaWNrZXIgcGVyTGluZT17RW1vamlDb250YWluZXJIZWlnaHR9IG9uU2VsZWN0PXsoZSk9PmFkZEVtb2ppKGUpfSAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFpbmVyTW9iaWxlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgc2V0Q29sb3JPZkNoYXQ9e3NldENvbG9yT2ZDaGF0Rm59IGdldFVzZXJkYXRhPXtnZXRVc2VyZGF0YUZufSBrZXk9e2UuX2lkfSAgdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZWFyY2hGb3JVc2VyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPlNlYXJjaCB1c2Vyczwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcblxyXG5cclxuICBjb25zdCBTZW50U3ZnPSgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48ZyBpZD1cIkxheWVyXzk1XCIgZGF0YS1uYW1lPVwiTGF5ZXIgOTVcIj48cGF0aCBkPVwiTTUzLjA2LDEwLjk0YTEuNSwxLjUsMCwwLDAtMS41My0uMzZsLTQwLDEzLjMzYTEuNTEsMS41MSwwLDAsMC0uMDYsMi44M2wxOC43LDcuMDksNy4wOSwxOC43YTEuNTEsMS41MSwwLDAsMCwxLjQ0LDEsMS40OSwxLjQ5LDAsMCwwLDEuMzktMWwxMy4zMy00MEExLjUsMS41LDAsMCwwLDUzLjA2LDEwLjk0WlwiLz48cGF0aCBkPVwiTTIwLjIyLDM1LjQ4YTEuNSwxLjUsMCwwLDAtMi4xMi0yLjEybC00LjQ4LDQuNDhhMS41MSwxLjUxLDAsMCwwLDAsMi4xMiwxLjQ5LDEuNDksMCwwLDAsMi4xMiwwWlwiLz48cGF0aCBkPVwiTTIzLjg4LDQwLjEyYTEuNDksMS40OSwwLDAsMC0yLjEyLDBMMTYuMDgsNDUuOGExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw1LjY4LTUuNjhBMS40OSwxLjQ5LDAsMCwwLDIzLjg4LDQwLjEyWlwiLz48cGF0aCBkPVwiTTI4LjUyLDQzLjc4LDI0LDQ4LjI2YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDQuNDgtNC40OEExLjUsMS41LDAsMCwwLDI4LjUyLDQzLjc4WlwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgKVxyXG4gIH1cclxuICBjb25zdCBVc2Vycz0ocHJvcHMpPT57XHJcbiAgICBcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApLHByb3BzLnNldENvbG9yT2ZDaGF0KHByb3BzLnVzZXJEYXRhLmNvbG9yKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PHA+e3Byb3BzLnVzZXJEYXRhLnVzZXJOYW1lfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbG9yUGlja2VyPShwcm9wcyk9PntcclxuICAgIGNvbnN0IFtvcGVuQ29sb3JQaWNrZXIsc2V0T3BlbkNvbG9yUGlja2VyXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGNoYW5nZVByaW1hcnlDb2xvcj0oY29sb3IpPT57XHJcbiAgICAgICAgcHJvcHMuZ2V0TmV3Q29sb3Jmbihjb2xvcilcclxuICAgICAgICB1cGRhdGVDb2xvckNoYXQoe25ld0NvbG9yOmNvbG9yLHJlY2VpdmVyOnByb3BzLnJlY2VpdmVyfSxwcm9wcy50b2tlbilcclxuICAgIH1cclxuICAgIHJldHVybig8ZGl2IG9uQ2xpY2s9eygpPT5zZXRPcGVuQ29sb3JQaWNrZXIoZT0+IWUpfSBjbGFzc05hbWU9e1N0eWxlLmNoYXRDb2xvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6cHJvcHMuY2hhdENvbG9yLmNvbG9yb25lfX0+XHJcbiAgICAgICAge29wZW5Db2xvclBpY2tlciYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yUGlja2VyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjE3NDRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmMTc0NFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZjUwMDU3XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmNTAwNTdcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzNkNWFmZVwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjM2Q1YWZlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiM3NmZmMDNcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzc2ZmYwM1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjYzZmZjAwXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNjNmZmMDBcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmM2QwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmYzZDAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiM2NTFmZmZcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzY1MWZmZlwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmZlYTAwXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZmVhMDBcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2Y1MDA1N1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZjUwMDU3XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjE3NDRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmMTc0NFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjMWRlOWI2XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiMxZGU5YjZcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzAzYTlmNFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMDNhOWY0XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcSxyZXN9KSB7XHJcblxyXG4gICAgcmV0dXJuIHJlcS5jb29raWVzLnRva2VuID97cHJvcHM6IHt0b2tlbjpyZXEuY29va2llcy50b2tlbn19OntyZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogJy8nLCBwZXJtYW5lbnQ6IGZhbHNlLCB9fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==