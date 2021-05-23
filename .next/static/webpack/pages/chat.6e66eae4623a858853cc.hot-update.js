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


  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState22 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState21, 2),
      showSideNavBar = _React$useState22[0],
      setShowSideNavBar = _React$useState22[1];
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

  var ShowSideNavBar = function ShowSideNavBar() {
    sideNavBarBtn.current.classList.toggle(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.change);
    setShowSideNavBar(function (e) {
      return !e;
    });
  };

  if (heightAndWidthOfWindow.width > heightAndWidthOfWindow.height) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
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
              lineNumber: 258,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
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
                lineNumber: 261,
                columnNumber: 49
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
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
                  lineNumber: 265,
                  columnNumber: 100
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Search users"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 176
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 169
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 68
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
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
                  lineNumber: 274,
                  columnNumber: 75
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: currentUserToChatWith.userName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 65
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 33
              }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 68
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 79
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 90
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 101
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
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
                  lineNumber: 279,
                  columnNumber: 77
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 273,
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
                      lineNumber: 285,
                      columnNumber: 232
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
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
                      lineNumber: 286,
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
                      lineNumber: 286,
                      columnNumber: 294
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 41
                  }, _this)
                }, e._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 44
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
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
                    lineNumber: 294,
                    columnNumber: 99
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "Message"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 193
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 294,
                    columnNumber: 186
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 67
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
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
                      lineNumber: 297,
                      columnNumber: 62
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
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
                      lineNumber: 298,
                      columnNumber: 103
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 59
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
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
                      lineNumber: 300,
                      columnNumber: 149
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 109
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
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
            lineNumber: 314,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bar2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bar3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserContaner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "contacts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
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
              lineNumber: 324,
              columnNumber: 49
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
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
                lineNumber: 327,
                columnNumber: 100
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 176
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 169
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 68
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }, _this);
  }
};

_s(chat, "DKgnvcvJuyE/zb+iM77cQdw9q0M=");

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
        lineNumber: 341,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 341,
    columnNumber: 9
  }, _this);
};

_c = SentSvg;

var Users = function Users(props) {
  _s2();

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(props.userData.notSeenMessageNumber),
      _React$useState24 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState23, 2),
      notSeenMessageNumberlocal = _React$useState24[0],
      setNotSeenMessageNumberlocal = _React$useState24[1];

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
          lineNumber: 353,
          columnNumber: 95
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 52
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 351,
    columnNumber: 13
  }, _this);
};

_s2(Users, "pd1fD7onXKAt+z6/CWeN/oALkEw=");

_c2 = Users;

var ColorPicker = function ColorPicker(props) {
  _s3();

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState26 = Object(F_AHKI_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState25, 2),
      openColorPicker = _React$useState26[0],
      setOpenColorPicker = _React$useState26[1];

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
        lineNumber: 370,
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
        lineNumber: 371,
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
        lineNumber: 372,
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
        lineNumber: 373,
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
        lineNumber: 374,
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
        lineNumber: 375,
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
        lineNumber: 376,
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
        lineNumber: 377,
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
        lineNumber: 378,
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
        lineNumber: 379,
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
        lineNumber: 380,
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
        lineNumber: 381,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 27
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 368,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImNoYXRDb2xvciIsInNldENoYXRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJzaG93U2lkZU5hdkJhciIsInNldFNob3dTaWRlTmF2QmFyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24iLCJzZWNvbmRVc2VyIiwidG9rZW4iLCJ0aGVuIiwiZGF0YSIsImUiLCJyZXZlcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwicmVzdWx0IiwibmV3VXNlcldob0NoYXRXaXRoIiwibWFwIiwiZmlyc3RVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZWNvdW5kVXNlciIsImNvbG9yIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXIiLCJhbGwiLCJuZXdhcnJheSIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlbWl0Iiwic3RhdGUiLCJvdGhlclVzZXJJZCIsImNoYXRIYW5kbGVyIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJzZW5kZXJJZCIsIkxpc3RPZlVzZXIiLCJyIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwidXNlcnMiLCJ0ZXh0IiwiaXNXcml0aW5nIiwidXNlcldob1JlY2l2ZVdyaXRpbmciLCJzZW5kZXJpZCIsInNldHZ1IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiU3R5bGUiLCJ5b3VyTWVzc2FnZVZ1IiwiaSIsImNoaWxkTm9kZXMiLCJzdHlsZSIsIm9uIiwib2ZmIiwiYWRkRW1vamkiLCJzeW0iLCJ1bmlmaWVkIiwic3BsaXQiLCJjb2Rlc0FycmF5IiwiZm9yRWFjaCIsImVsIiwicHVzaCIsImVtb2ppIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNsb3NlT3JPcGVuRW1vamlQaWNrZXIiLCJzZWFyY2hGb3JVc2VyIiwic2VhcmNoVXNlck5hbWVBcGkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFVzZXJkYXRhRm4iLCJjdXJyZW50VXNlckRhdGEiLCJzZW5kTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJyZWNlaXZlciIsIkZpcnN0VGltZSIsIm1lc3NhZ2VIYW5kbGVyIiwic2Nyb2xsZm4iLCJnZXROZXdDb2xvciIsInNldENvbG9yT2ZDaGF0Rm4iLCJjb2xvck9mQ2hhdEZyb21EYXRhQmFzZSIsIlNob3dTaWRlTmF2QmFyIiwic2lkZU5hdkJhckJ0biIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoYW5nZSIsImNvbnRhaW5lciIsImNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXIiLCJVc2VyQ29udGFuZXIiLCJoZWFkZXIiLCJsaXN0Q29udGFjcyIsImJvdHRvbSIsInNlYXJjaENvbnRhaW5lciIsImlucHV0Y3NzIiwiY2hhdENvbnRhaW5lciIsImhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZSIsInVzZXJJbWFnZUNvbnRhaW5lciIsImlzV3JpdGluZ0NvbnRhaW5lciIsImxkc2VsbGlwc2lzIiwiY2hhbmdlQ29sb3JDb250YWluZXIiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsInNlZW4iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Q29udGFpbmVyIiwiYnRucyIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJpZCIsInNraW4iLCJlbW9qaVBpY2tlckNvbnRhaW5lciIsImJ0bnNlbmQiLCJzZW5kTWVzc2FnZUJ0biIsIm5hdkJhclNob3dVc2VyIiwiY29udGFpbmVyQnRuU2lkZU5hdkJhciIsImJhcjEiLCJiYXIyIiwiYmFyMyIsIlNlbnRTdmciLCJVc2VycyIsInVzZXJEYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJ1c2VyQ29udGFpbmVyIiwiZ2V0VXNlcmRhdGEiLCJzZXRDb2xvck9mQ2hhdCIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiLCJDb2xvclBpY2tlciIsIm9wZW5Db2xvclBpY2tlciIsInNldE9wZW5Db2xvclBpY2tlciIsImNoYW5nZVByaW1hcnlDb2xvciIsImdldE5ld0NvbG9yZm4iLCJ1cGRhdGVDb2xvckNoYXQiLCJuZXdDb2xvciIsImNvbG9yUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUUrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGL0M7QUFBQTtBQUFBLE1BRWJDLDJCQUZhO0FBQUEsTUFFZUMsOEJBRmY7O0FBQUEseUJBR29DSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUhwQztBQUFBO0FBQUEsTUFHYkcsb0JBSGE7QUFBQSxNQUdTQyx1QkFIVCx3QkFHcUQ7OztBQUhyRCx5QkFJZUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FKZjtBQUFBO0FBQUEsTUFJYkssV0FKYTtBQUFBLE1BSURDLGNBSkM7O0FBQUEseUJBS21DUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBQ08sbUJBQWUsRUFBQ0MsU0FBakI7QUFBMkJDLFlBQVEsRUFBQ0QsU0FBcEM7QUFBOENFLE9BQUcsRUFBQ0Y7QUFBbEQsR0FBZixDQUxuQztBQUFBO0FBQUEsTUFLYkcscUJBTGE7QUFBQSxNQUtTQyx3QkFMVDs7QUFBQSx5QkFNT2IsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FOUDtBQUFBO0FBQUEsTUFNYmEsT0FOYTtBQUFBLE1BTUxDLFVBTks7O0FBQUEsMEJBT2lCZiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVBqQjtBQUFBO0FBQUEsTUFPYmUsWUFQYTtBQUFBLE1BT0FDLGVBUEE7O0FBUXBCLE1BQU1DLFlBQVksR0FBQ2xCLDRDQUFLLENBQUNtQixNQUFOLENBQWEsSUFBYixDQUFuQjs7QUFSb0IsMEJBU0NuQiw0Q0FBSyxDQUFDb0IsVUFBTixDQUFpQkMsNkRBQWpCLENBVEQ7QUFBQTtBQUFBLE1BU2JDLElBVGE7QUFBQSxNQVNSQyxPQVRROztBQUFBLDJCQVVLdkIsNENBQUssQ0FBQ29CLFVBQU4sQ0FBaUJJLCtEQUFqQixDQVZMO0FBQUE7QUFBQSxNQVViQyxNQVZhO0FBQUEsTUFVTkMsU0FWTTs7QUFBQSwwQkFXQzFCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUFBLFdBQUksQ0FBSjtBQUFBLEdBQWYsQ0FYRDtBQUFBO0FBQUEsTUFXYjBCLElBWGE7QUFBQSxNQVdSQyxPQVhROztBQUFBLDBCQVlxQjVCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBWnJCO0FBQUE7QUFBQSxNQVliNEIsY0FaYTtBQUFBLE1BWUVDLGlCQVpGOztBQUFBLDBCQWFXOUIsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUM4QixZQUFRLEVBQUMsU0FBVjtBQUFvQkMsWUFBUSxFQUFDO0FBQTdCLEdBQWYsQ0FiWDtBQUFBO0FBQUEsTUFhYkMsU0FiYTtBQUFBLE1BYUhDLFlBYkc7O0FBQUEsMEJBY3dDbEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUVrQyxTQUFLLEVBQUUsQ0FBVDtBQUFZQyxVQUFNLEVBQUU7QUFBcEIsR0FBZixDQWR4QztBQUFBO0FBQUEsTUFjYkMsc0JBZGE7QUFBQSxNQWNXQyx5QkFkWCx5QkFjK0U7OztBQWQvRSwwQkFlcUJ0Qyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQWZyQjtBQUFBO0FBQUEsTUFlYnNDLGNBZmE7QUFBQSxNQWVFQyxpQkFmRjtBQWlCcEI7O0FBQ0E7O0FBQ0E7OztBQUNBeEMsOENBQUssQ0FBQ3lDLFNBQU4sQ0FBZ0IsWUFBSTtBQUVoQkgsNkJBQXlCLENBQUM7QUFBRUYsWUFBTSxFQUFFTSxNQUFNLENBQUNDLFdBQWpCO0FBQThCUixXQUFLLEVBQUVPLE1BQU0sQ0FBQ0U7QUFBNUMsS0FBRCxDQUF6QjtBQUNILEdBSEQsRUFHRSxFQUhGLEVBcEJvQixDQXdCcEI7O0FBQ0E1Qyw4Q0FBSyxDQUFDeUMsU0FBTixDQUFnQixZQUFJO0FBQ2hCLFFBQUc3QixxQkFBcUIsQ0FBQ0QsR0FBdEIsSUFBMkJGLFNBQTlCLEVBQXdDO0FBQ3BDb0MsOEZBQWdDLENBQUM7QUFBQ0Msa0JBQVUsRUFBQ2xDLHFCQUFxQixDQUFDRCxHQUFsQztBQUFzQ2dCLFlBQUksRUFBQ0E7QUFBM0MsT0FBRCxFQUFrRDVCLEtBQUssQ0FBQ2dELEtBQXhELENBQWhDLENBQStGQyxJQUEvRixDQUFvRyxVQUFBQyxJQUFJLEVBQUU7QUFDdEdoQyx1QkFBZSxDQUFDLFVBQUFpQyxDQUFDO0FBQUEsMklBQU1ELElBQUksQ0FBQ0EsSUFBTCxDQUFVQSxJQUFWLENBQWVFLE9BQWYsRUFBTixtSEFBa0NELENBQWxDO0FBQUEsU0FBRixDQUFmO0FBRUgsT0FIRCxXQUdTLFVBQUFFLEtBQUssRUFBRTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILE9BTEQ7QUFNSDtBQUNGLEdBVEgsRUFTSSxDQUFDekIsSUFBRCxDQVRKLEVBekJvQixDQW9DbEI7O0FBQ0YzQiw4Q0FBSyxDQUFDeUMsU0FBTixDQUFnQixZQUFJO0FBQ2hCLFFBQUduQixJQUFJLENBQUNYLEdBQUwsSUFBVUYsU0FBVixJQUFzQmEsSUFBSSxDQUFDWCxHQUFMLENBQVM0QyxNQUFULEdBQWdCLENBQXpDLEVBQ0FDLDBFQUFrQixDQUFDLEVBQUQsRUFBSXpELEtBQUssQ0FBQ2dELEtBQVYsQ0FBbEIsQ0FBbUNDLElBQW5DLENBQXdDLFVBQUFTLE1BQU0sRUFBRTtBQUM1QyxVQUFJQyxrQkFBa0IsR0FBQ0QsTUFBTSxDQUFDUixJQUFQLENBQVlBLElBQVosQ0FBaUJVLEdBQWpCLENBQXFCLFVBQUFULENBQUMsRUFBRTtBQUMzQztBQUNBLFlBQUdBLENBQUMsQ0FBQ1UsU0FBRixDQUFZakQsR0FBWixJQUFpQlcsSUFBSSxDQUFDWCxHQUF6QixFQUE2QjtBQUN6QixpQkFBT2tELE9BQU8sQ0FBQ0MsT0FBUixpQ0FBb0JaLENBQUMsQ0FBQ2EsV0FBdEI7QUFBa0NDLGlCQUFLLEVBQUNkLENBQUMsQ0FBQ2MsS0FBMUM7QUFBZ0RDLGdDQUFvQixFQUFDZixDQUFDLENBQUNlO0FBQXZFLGFBQVA7QUFDSCxTQUZELE1BRUs7QUFDRCxpQkFBT0osT0FBTyxDQUFDQyxPQUFSLGlDQUFvQlosQ0FBQyxDQUFDVSxTQUF0QjtBQUFnQ0ksaUJBQUssRUFBQ2QsQ0FBQyxDQUFDYyxLQUF4QztBQUE4Q0MsZ0NBQW9CLEVBQUNmLENBQUMsQ0FBQ2U7QUFBckUsYUFBUDtBQUNIO0FBR0osT0FUc0IsQ0FBdkI7QUFVQUosYUFBTyxDQUFDSyxHQUFSLENBQVlSLGtCQUFaLEVBQWdDVixJQUFoQyxDQUFxQyxVQUFBbUIsUUFBUSxFQUFFO0FBQzdDNUQsc0JBQWMsQ0FBQyxnSEFBSTRELFFBQUwsRUFBZDtBQUNELE9BRkQ7QUFJRCxLQWZILFdBZVcsVUFBQWpCLENBQUM7QUFBQSxhQUFFRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosQ0FBQyxDQUFDcEMsT0FBZCxDQUFGO0FBQUEsS0FmWjtBQWdCSCxHQWxCRCxFQWtCRSxDQUFDUSxJQUFELENBbEJGLEVBckNvQixDQXlEcEI7O0FBQ0F0Qiw4Q0FBSyxDQUFDeUMsU0FBTixDQUFnQixZQUFJO0FBQ2hCLFFBQUc3QixxQkFBcUIsQ0FBQ0QsR0FBdEIsSUFBMkJGLFNBQTlCLEVBQXdDO0FBQ3BDb0MsOEZBQWdDLENBQUM7QUFBQ0Msa0JBQVUsRUFBQ2xDLHFCQUFxQixDQUFDRCxHQUFsQztBQUFzQ2dCLFlBQUksRUFBQztBQUEzQyxPQUFELEVBQStDNUIsS0FBSyxDQUFDZ0QsS0FBckQsQ0FBaEMsQ0FBNEZDLElBQTVGLENBQWlHLFVBQUFDLElBQUksRUFBRTtBQUVuR2hDLHVCQUFlLENBQUMsZ0hBQUlnQyxJQUFJLENBQUNBLElBQUwsQ0FBVUEsSUFBVixDQUFlRSxPQUFmLEVBQUwsRUFBZjtBQUNBakMsb0JBQVksQ0FBQ2tELE9BQWIsQ0FBcUJDLFNBQXJCLEdBQStCbkQsWUFBWSxDQUFDa0QsT0FBYixDQUFxQkUsWUFBckIsR0FBbUNwRCxZQUFZLENBQUNrRCxPQUFiLENBQXFCRyxZQUF2RjtBQUdILE9BTkQsV0FNUyxVQUFBbkIsS0FBSyxFQUFFO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FSRCxFQURvQyxDQVdwQzs7QUFDQTNCLFlBQU0sQ0FBQytDLElBQVAsQ0FBWSxJQUFaLEVBQWlCO0FBQUNDLGFBQUssRUFBQyxJQUFQO0FBQVlDLG1CQUFXLEVBQUM5RCxxQkFBcUIsQ0FBQ0Q7QUFBOUMsT0FBakI7QUFFSDtBQUNKLEdBaEJELEVBZ0JFLENBQUNDLHFCQUFELENBaEJGLEVBMURvQixDQTRFcEI7O0FBQ0FaLDhDQUFLLENBQUN5QyxTQUFOLENBQWdCLFlBQUk7QUFDaEI7QUFEZ0IsYUFFQ2tDLFdBRkQ7QUFBQTtBQUFBLE1Ba0NoQjs7O0FBbENnQjtBQUFBLDRPQUVoQixpQkFBNkIxQixJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUTJCLHFCQURSLEdBQ2dCLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDQURoQjtBQUVJRCxxQkFBSyxDQUFDRSxJQUFOO0FBQ0FoRCxpQ0FBaUIsQ0FBQyxLQUFELENBQWpCLENBSEosQ0FJSTs7QUFDQUwsc0JBQU0sQ0FBQytDLElBQVAsQ0FBWSxJQUFaLEVBQWlCO0FBQUNDLHVCQUFLLEVBQUMsSUFBUDtBQUFZQyw2QkFBVyxFQUFDOUQscUJBQXFCLENBQUNEO0FBQTlDLGlCQUFqQixFQUxKLENBTUk7O0FBTko7QUFBQSx1QkFPMkJMLFdBQVcsQ0FBQ3FELEdBQVosQ0FBZ0IsVUFBQ1QsQ0FBRCxFQUFLO0FBQ3hDLHNCQUFHRCxJQUFJLENBQUM4QixRQUFMLElBQWU3QixDQUFDLENBQUN2QyxHQUFqQixJQUF3QkMscUJBQXFCLENBQUNELEdBQXRCLElBQTJCdUMsQ0FBQyxDQUFDdkMsR0FBeEQsRUFBNEQ7QUFDeER1QyxxQkFBQyxDQUFDZSxvQkFBRixHQUF1QmYsQ0FBQyxDQUFDZSxvQkFBRixHQUF1QixDQUE5QztBQUNBLDJCQUFPSixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JaLENBQWhCLENBQVA7QUFDSCxtQkFIRCxNQUdLO0FBQ0QsMkJBQU9XLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlosQ0FBaEIsQ0FBUDtBQUNIO0FBQ0osaUJBUHNCLENBUDNCOztBQUFBO0FBT1E4QiwwQkFQUjtBQWVJbkIsdUJBQU8sQ0FBQ0ssR0FBUixDQUFZYyxVQUFaLEVBQXdCaEMsSUFBeEIsQ0FBNkIsVUFBQUMsSUFBSSxFQUFFO0FBRS9CMUMsZ0NBQWMsQ0FBQzBDLElBQUQsQ0FBZDtBQUNILGlCQUhELEVBZkosQ0FtQkk7O0FBQ0Esb0JBQUdBLElBQUksQ0FBQzhCLFFBQUwsSUFBZW5FLHFCQUFxQixDQUFDRCxHQUF4QyxFQUE0QztBQUV4Q00saUNBQWUsQ0FBQyxVQUFBaUMsQ0FBQyxFQUFFO0FBQ2Ysd0JBQUkrQixDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxDQUFyQyxDQUFSO0FBQ0EscUpBQVduQyxDQUFYLElBQWE7QUFBQ29DLDJCQUFLLEVBQUMsQ0FBQ3JDLElBQUksQ0FBQzhCLFFBQU4sQ0FBUDtBQUF1QmpFLDZCQUFPLEVBQUNtQyxJQUFJLENBQUNzQyxJQUFwQztBQUF5QzVFLHlCQUFHLEVBQUNzRTtBQUE3QyxxQkFBYjtBQUNILG1CQUhjLENBQWY7QUFJQS9ELDhCQUFZLENBQUNrRCxPQUFiLENBQXFCQyxTQUFyQixHQUErQm5ELFlBQVksQ0FBQ2tELE9BQWIsQ0FBcUJFLFlBQXJCLEdBQW1DcEQsWUFBWSxDQUFDa0QsT0FBYixDQUFxQkcsWUFBdkY7QUFFSCxpQkFSRCxNQVFLLENBRUo7O0FBOUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmdCO0FBQUE7QUFBQTs7QUFtQ2hCLGFBQVNpQixTQUFULENBQW1CdkMsSUFBbkIsRUFBd0I7QUFDcEIsVUFBR0EsSUFBSSxDQUFDd0Msb0JBQUwsSUFBMkJuRSxJQUFJLENBQUNYLEdBQWhDLElBQXVDc0MsSUFBSSxDQUFDeUMsUUFBTCxJQUFlOUUscUJBQXFCLENBQUNELEdBQS9FLEVBQW1GO0FBQy9FbUIseUJBQWlCLENBQUNtQixJQUFJLENBQUN1QyxTQUFOLENBQWpCO0FBRUg7QUFDSixLQXhDZSxDQXlDaEI7OztBQUNBLFFBQU1HLEtBQUssR0FBQyxTQUFOQSxLQUFNLENBQUMxQyxJQUFELEVBQVE7QUFDaEIsVUFBRzJDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLCtEQUFLLENBQUNDLGFBQXRDLEVBQXFEeEMsTUFBckQsSUFBNkQsQ0FBaEUsRUFBa0U7QUFDOUQsYUFBSyxJQUFJeUMsQ0FBQyxHQUFHaEYsWUFBWSxDQUFDdUMsTUFBYixHQUFvQixDQUFqQyxFQUFvQ3lDLENBQUMsR0FBQyxDQUF0QyxFQUF5Q0EsQ0FBQyxFQUExQyxFQUE4QztBQUMxQyxjQUFHSixRQUFRLENBQUNDLHNCQUFULENBQWdDQywrREFBSyxDQUFDQyxhQUF0QyxFQUFxREMsQ0FBckQsS0FBeUR2RixTQUE1RCxFQUFzRTtBQUNsRSxnQkFBR21GLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLCtEQUFLLENBQUNDLGFBQXRDLEVBQXFEQyxDQUFyRCxFQUF3REMsVUFBeEQsQ0FBbUUsQ0FBbkUsRUFBc0VDLEtBQXRFLENBQTRFbEMsS0FBNUUsSUFBbUYsbUJBQXRGLEVBQTBHO0FBQ3RHNEIsc0JBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLCtEQUFLLENBQUNDLGFBQXRDLEVBQXFEQyxDQUFyRCxFQUF3REMsVUFBeEQsQ0FBbUUsQ0FBbkUsRUFBc0VDLEtBQXRFLENBQTRFbEMsS0FBNUUsR0FBa0YsbUJBQWxGO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFFSixLQVhEOztBQVlBLFFBQUd2QyxNQUFNLElBQUVoQixTQUFSLElBQXFCZ0IsTUFBTSxJQUFFLElBQWhDLEVBQXFDO0FBQ3JDQSxZQUFNLENBQUMwRSxFQUFQLENBQVUsZ0JBQVYsRUFBMkJYLFNBQTNCO0FBQ0EvRCxZQUFNLENBQUMwRSxFQUFQLENBQVUsMEJBQVYsRUFBcUN4QixXQUFyQztBQUNBbEQsWUFBTSxDQUFDMEUsRUFBUCxDQUFVLE9BQVYsRUFBa0JSLEtBQWxCO0FBQ0c7O0FBQ0QsV0FBTyxZQUFNO0FBQ1gsVUFBR2xFLE1BQU0sSUFBRWhCLFNBQVIsSUFBcUJnQixNQUFNLElBQUUsSUFBaEMsRUFBcUM7QUFDakNBLGNBQU0sQ0FBQzJFLEdBQVAsQ0FBVywwQkFBWCxFQUF1Q3pCLFdBQXZDO0FBQ0FsRCxjQUFNLENBQUMyRSxHQUFQLENBQVcsZ0JBQVgsRUFBNEJaLFNBQTVCO0FBQ0EvRCxjQUFNLENBQUMyRSxHQUFQLENBQVcsT0FBWCxFQUFtQlQsS0FBbkI7QUFFSDtBQUNGLEtBUEQ7QUFRSCxHQW5FSCxFQTdFb0IsQ0FrSmxCOztBQUNGLE1BQU1VLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNuRCxDQUFELEVBQUs7QUFDaEIsUUFBSW9ELEdBQUcsR0FBR3BELENBQUMsQ0FBQ3FELE9BQUYsQ0FBVUMsS0FBVixDQUFnQixHQUFoQixDQUFWO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0FILE9BQUcsQ0FBQ0ksT0FBSixDQUFZLFVBQUFDLEVBQUU7QUFBQSxhQUFJRixVQUFVLENBQUNHLElBQVgsQ0FBZ0IsT0FBT0QsRUFBdkIsQ0FBSjtBQUFBLEtBQWQ7QUFDQSxRQUFJRSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsYUFBUCxPQUFBRCxNQUFNLEVBQWtCTCxVQUFsQixDQUFsQjtBQUNBMUYsY0FBVSxDQUFDLFVBQUE0RixFQUFFLEVBQUU7QUFBQyxhQUFPQSxFQUFFLEdBQUNFLEtBQVY7QUFBZ0IsS0FBdEIsQ0FBVjtBQUNELEdBTkgsQ0FuSm9CLENBMkpsQjs7O0FBQ0YsTUFBTUcsc0JBQXNCLEdBQUMsU0FBdkJBLHNCQUF1QixHQUFJO0FBQzdCN0csa0NBQThCLENBQUMsVUFBQStDLENBQUM7QUFBQSxhQUFFLENBQUNBLENBQUg7QUFBQSxLQUFGLENBQTlCO0FBQ0QsR0FGSCxDQTVKb0IsQ0FnS2xCOzs7QUFDQSxNQUFNK0QsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQy9ELENBQUQsRUFBSztBQUNuQmdFLDZFQUFpQixDQUFDaEUsQ0FBQyxDQUFDaUUsTUFBRixDQUFTQyxLQUFWLEVBQWdCckgsS0FBSyxDQUFDZ0QsS0FBdEIsQ0FBakIsQ0FBOENDLElBQTlDLENBQW9ELFVBQUFTLE1BQU0sRUFBRTtBQUN4RCxVQUFHQSxNQUFNLENBQUNSLElBQVAsQ0FBWUEsSUFBWixJQUFrQnhDLFNBQXJCLEVBQStCO0FBQzNCRixzQkFBYyxDQUFDLFVBQUEyQyxDQUFDLEVBQUU7QUFDZCxpSUFBV08sTUFBTSxDQUFDUixJQUFQLENBQVlBLElBQXZCO0FBQ0gsU0FGYSxDQUFkO0FBR0g7QUFDSixLQU5EO0FBUUwsR0FURCxDQWpLa0IsQ0E0S2xCOzs7QUFDQSxNQUFNb0UsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQ0MsZUFBRCxFQUFtQjtBQUNyQ3pHLDRCQUF3QixDQUFDeUcsZUFBRCxDQUF4QjtBQUNELEdBRkQ7O0FBS0EsTUFBTUMsV0FBVyxHQUFDLFNBQVpBLFdBQVksR0FBSTtBQUNwQixRQUFHekcsT0FBTyxDQUFDeUMsTUFBUixHQUFlLENBQWYsSUFBa0IzQyxxQkFBcUIsQ0FBQ0QsR0FBdEIsSUFBMkJGLFNBQWhELEVBQTBEO0FBQzFEK0csd0VBQVUsQ0FBQztBQUFDQyxnQkFBUSxFQUFDN0cscUJBQXFCLENBQUNELEdBQWhDO0FBQW9DRyxlQUFPLEVBQUNBLE9BQTVDO0FBQW9ENEcsaUJBQVMsRUFBQzFHLFlBQVksQ0FBQ3VDO0FBQTNFLE9BQUQsRUFBb0Z4RCxLQUFLLENBQUNnRCxLQUExRixDQUFWLENBQTJHQyxJQUEzRyxDQUFnSCxVQUFBQyxJQUFJLEVBQUU7QUFDbEhoQyx1QkFBZSxDQUFDLFVBQUFpQyxDQUFDLEVBQUU7QUFDZixjQUFJK0IsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsQ0FBUjtBQUNBLDJJQUFXbkMsQ0FBWCxJQUFhO0FBQUNvQyxpQkFBSyxFQUFDLENBQUNoRSxJQUFJLENBQUNYLEdBQU4sQ0FBUDtBQUFrQkcsbUJBQU8sRUFBQ0EsT0FBMUI7QUFBa0NILGVBQUcsRUFBQ3NFO0FBQXRDLFdBQWI7QUFFSCxTQUpjLENBQWY7QUFNQS9ELG9CQUFZLENBQUNrRCxPQUFiLENBQXFCQyxTQUFyQixHQUErQm5ELFlBQVksQ0FBQ2tELE9BQWIsQ0FBcUJFLFlBQXJCLEdBQW1DcEQsWUFBWSxDQUFDa0QsT0FBYixDQUFxQkcsWUFBdkY7QUFDQTlDLGNBQU0sQ0FBQytDLElBQVAsQ0FBWSwyQkFBWixFQUF3QztBQUFDRSxxQkFBVyxFQUFDOUQscUJBQXFCLENBQUNELEdBQW5DO0FBQXVDNEUsY0FBSSxFQUFDekUsT0FBNUM7QUFBb0RpRSxrQkFBUSxFQUFDekQsSUFBSSxDQUFDWDtBQUFsRSxTQUF4QztBQUlBSSxrQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNILE9BYkQsV0FhUyxVQUFBcUMsS0FBSyxFQUFFO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FmRDtBQWdCSDtBQUNFLEdBbkJEOztBQW9CQSxNQUFNdUUsY0FBYyxHQUFDLFNBQWZBLGNBQWUsQ0FBQ3pFLENBQUQsRUFBSztBQUN0QixRQUFHdEMscUJBQXFCLENBQUNELEdBQXRCLElBQTJCRixTQUE5QixFQUF3QztBQUN0QyxVQUFHeUMsQ0FBQyxDQUFDaUUsTUFBRixDQUFTQyxLQUFULENBQWU3RCxNQUFmLEdBQXNCLENBQXpCLEVBQTJCO0FBQ3ZCOUIsY0FBTSxDQUFDK0MsSUFBUCxDQUFZLFdBQVosRUFBd0I7QUFBQ2dCLG1CQUFTLEVBQUMsSUFBWDtBQUFnQmQscUJBQVcsRUFBQzlELHFCQUFxQixDQUFDRCxHQUFsRDtBQUFzRCtFLGtCQUFRLEVBQUNwRSxJQUFJLENBQUNYO0FBQXBFLFNBQXhCO0FBQ0QsT0FGSCxNQUVPO0FBQ0hjLGNBQU0sQ0FBQytDLElBQVAsQ0FBWSxXQUFaLEVBQXdCO0FBQUNnQixtQkFBUyxFQUFDLEtBQVg7QUFBaUJkLHFCQUFXLEVBQUM5RCxxQkFBcUIsQ0FBQ0QsR0FBbkQ7QUFBdUQrRSxrQkFBUSxFQUFDcEUsSUFBSSxDQUFDWDtBQUFyRSxTQUF4QjtBQUNEO0FBQ0o7O0FBRUhJLGNBQVUsQ0FBQ21DLENBQUMsQ0FBQ2lFLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FWRCxDQXRNa0IsQ0FpTmxCOzs7QUFDQSxNQUFNUSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDMUUsQ0FBRCxFQUFLO0FBQ2hCO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDaUUsTUFBRixDQUFTOUMsU0FBVCxLQUF1QixDQUEzQixFQUE2QjtBQUMzQnpDLGFBQU8sQ0FBQyxVQUFBc0IsQ0FBQztBQUFBLGVBQUVBLENBQUMsR0FBQyxFQUFKO0FBQUEsT0FBRixDQUFQO0FBQ0Q7QUFFSixHQU5ELENBbE5rQixDQXlObEI7OztBQUNBLE1BQU0yRSxXQUFXLEdBQUMsU0FBWkEsV0FBWSxDQUFDN0QsS0FBRCxFQUFTO0FBQ3pCOUIsZ0JBQVksQ0FBQyxVQUFBZ0IsQ0FBQyxFQUFFO0FBQUMsNkNBQVdBLENBQVg7QUFBYW5CLGdCQUFRLEVBQUNpQztBQUF0QjtBQUE2QixLQUFsQyxDQUFaO0FBQ0QsR0FGRCxDQTFOa0IsQ0E4TmxCOzs7QUFDQSxNQUFNOEQsZ0JBQWdCLEdBQUMsU0FBakJBLGdCQUFpQixDQUFDQyx1QkFBRCxFQUEyQjtBQUNoRCxRQUFHQSx1QkFBdUIsSUFBRXRILFNBQTVCLEVBQXNDO0FBQ2xDeUIsa0JBQVksQ0FBQyxVQUFBZ0IsQ0FBQyxFQUFFO0FBQ1osK0NBQVVBLENBQVY7QUFBWW5CLGtCQUFRLEVBQUM7QUFBckI7QUFDSCxPQUZXLENBQVo7QUFHSCxLQUpELE1BSUs7QUFDREcsa0JBQVksQ0FBQyxVQUFBZ0IsQ0FBQyxFQUFFO0FBQ1osK0NBQVVBLENBQVY7QUFBWW5CLGtCQUFRLEVBQUNnRztBQUFyQjtBQUNILE9BRlcsQ0FBWjtBQUdIO0FBQ0YsR0FWRDs7QUFXQSxNQUFNQyxjQUFjLEdBQUMsU0FBZkEsY0FBZSxHQUFJO0FBRXZCQyxpQkFBYSxDQUFDN0QsT0FBZCxDQUFzQjhELFNBQXRCLENBQWdDQyxNQUFoQyxDQUF1Q3JDLCtEQUFLLENBQUNzQyxNQUE3QztBQUNBNUYscUJBQWlCLENBQUMsVUFBQVUsQ0FBQztBQUFBLGFBQUUsQ0FBQ0EsQ0FBSDtBQUFBLEtBQUYsQ0FBakI7QUFDSCxHQUpDOztBQUtBLE1BQUliLHNCQUFzQixDQUFDRixLQUF2QixHQUErQkUsc0JBQXNCLENBQUNELE1BQTFELEVBQWtFO0FBQ2hFLHdCQUNJO0FBQUssZUFBUyxFQUFFMEQsK0RBQUssQ0FBQ3VDLFNBQXRCO0FBQUEsOEJBQ1UscUVBQUMsaUVBQUQ7QUFBUSxhQUFLLEVBQUV0SSxLQUFLLENBQUNnRDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFYsZUFFUTtBQUFLLGlCQUFTLEVBQUUrQywrREFBSyxDQUFDd0MsK0JBQXRCO0FBQUEsZ0NBRUk7QUFBSyxtQkFBUyxFQUFFeEMsK0RBQUssQ0FBQ3lDLFlBQXRCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFekMsK0RBQUssQ0FBQzBDLE1BQXRCO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBSyxxQkFBUyxFQUFFMUMsK0RBQUssQ0FBQzJDLFdBQXRCO0FBQUEsc0JBQ0NuSSxXQUFXLENBQUNxRCxHQUFaLENBQWdCLFVBQUFULENBQUM7QUFBQSxrQ0FBRSxxRUFBQyxLQUFEO0FBQU8sOEJBQWMsRUFBRTRFLGdCQUF2QjtBQUF5QywyQkFBVyxFQUFFVCxhQUF0RDtBQUFrRix3QkFBUSxFQUFFbkU7QUFBNUYsaUJBQTBFQSxDQUFDLENBQUN2QyxHQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFGO0FBQUEsYUFBakI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBUUk7QUFBSyxxQkFBUyxFQUFFbUYsK0RBQUssQ0FBQzRDLE1BQXRCO0FBQUEsbUNBQ0E7QUFBSyx1QkFBUyxFQUFFNUMsK0RBQUssQ0FBQzZDLGVBQXRCO0FBQUEscUNBQXVDO0FBQUsseUJBQVMsRUFBRTdDLCtEQUFLLENBQUM4QyxRQUF0QjtBQUFBLHdDQUFnQztBQUFPLDBCQUFRLEVBQUUsa0JBQUMxRixDQUFEO0FBQUEsMkJBQUsrRCxhQUFhLENBQUMvRCxDQUFELENBQWxCO0FBQUEsbUJBQWpCO0FBQXdDLHNCQUFJLEVBQUMsTUFBN0M7QUFBb0QsMEJBQVE7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBaEMsZUFBcUc7QUFBQSx5Q0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFjSTtBQUFLLG1CQUFTLEVBQUU0QywrREFBSyxDQUFDaEcsSUFBdEI7QUFBQSxrQ0FDQTtBQUFLLHFCQUFTLEVBQUVnRywrREFBSyxDQUFDMEMsTUFBdEI7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFJQTtBQUFLLHFCQUFTLEVBQUUxQywrREFBSyxDQUFDK0MsYUFBdEI7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUUvQywrREFBSyxDQUFDZ0QsMkJBQXRCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFFaEQsK0RBQUssQ0FBQ2lELGtCQUF0QjtBQUFBLHVDQUEwQztBQUFLLHFCQUFHLEVBQUVuSSxxQkFBcUIsQ0FBQ0osZUFBdEIsSUFBeUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFFc0YsK0RBQUssQ0FBQ3BGLFFBQXRCO0FBQUEsdUNBQWdDO0FBQUEsNEJBQUtFLHFCQUFxQixDQUFDRjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFHS21CLGNBQWMsaUJBQUU7QUFBSyx5QkFBUyxFQUFFaUUsK0RBQUssQ0FBQ2tELGtCQUF0QjtBQUFBLHVDQUNqQjtBQUFLLDJCQUFTLEVBQUVsRCwrREFBSyxDQUFDbUQsV0FBdEI7QUFBQSwwQ0FBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBbkMsZUFBOEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBOUMsZUFBeUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBekQsZUFBb0U7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSHJCLGVBTUk7QUFBSyx5QkFBUyxFQUFFbkQsK0RBQUssQ0FBQ29ELG9CQUF0QjtBQUFBLHVDQUE0QyxxRUFBQyxXQUFEO0FBQWEsMEJBQVEsRUFBRXRJLHFCQUFxQixDQUFDRCxHQUE3QztBQUFrRCx1QkFBSyxFQUFFWixLQUFLLENBQUNnRCxLQUEvRDtBQUFzRSwrQkFBYSxFQUFFOEUsV0FBckY7QUFBa0csMkJBQVMsRUFBRTVGO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFTSTtBQUFLLHNCQUFRLEVBQUUsa0JBQUNpQixDQUFEO0FBQUEsdUJBQUswRSxRQUFRLENBQUMxRSxDQUFELENBQWI7QUFBQSxlQUFmO0FBQWlDLGlCQUFHLEVBQUVoQyxZQUF0QztBQUFvRCx1QkFBUyxFQUFFNEUsK0RBQUssQ0FBQ3FELFFBQXJFO0FBQUEsd0JBQ0tuSSxZQUFZLENBQUMyQyxHQUFiLENBQWlCLFVBQUFULENBQUMsRUFBRTtBQUNqQixvQ0FBTztBQUFpQiwyQkFBUyxFQUFFNEMsK0RBQUssQ0FBQ3NELFVBQWxDO0FBQUEsNEJBQ0ZsRyxDQUFDLENBQUNvQyxLQUFGLENBQVEsQ0FBUixLQUFZMUUscUJBQXFCLENBQUNELEdBQWxDLGdCQUNEO0FBQUssNkJBQVMsRUFBRW1GLCtEQUFLLENBQUN1RCxXQUF0QjtBQUFtQyxpQ0FBV25HLENBQUMsQ0FBQ29HLElBQUYsSUFBUTdJLFNBQVIsR0FBa0J5QyxDQUFDLENBQUNvRyxJQUFGLENBQU9DLEtBQVAsQ0FBYSxDQUFiLEVBQWUsRUFBZixJQUFtQixHQUFuQixHQUF1QnJHLENBQUMsQ0FBQ29HLElBQUYsQ0FBT0MsS0FBUCxDQUFhLEVBQWIsRUFBZ0IsRUFBaEIsQ0FBekMsR0FBNkQsT0FBM0c7QUFBcUgseUJBQUssRUFBRTtBQUFDLDZCQUFNLElBQVA7QUFBWSwrQkFBTSxNQUFsQjtBQUF5QkMscUNBQWUsRUFBQyxTQUF6QztBQUFtRHhGLDJCQUFLLEVBQUM7QUFBekQscUJBQTVIO0FBQUEsMkNBQStMO0FBQUEsZ0NBQUlkLENBQUMsQ0FBQ3BDO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURDLGdCQUVEO0FBQUssNkJBQVMsWUFBS2dGLCtEQUFLLENBQUN1RCxXQUFYLGNBQTBCdkQsK0RBQUssQ0FBQ0MsYUFBaEMsTUFBZDtBQUFrRSxpQ0FBVzdDLENBQUMsQ0FBQ29HLElBQUYsSUFBUTdJLFNBQVIsR0FBa0J5QyxDQUFDLENBQUNvRyxJQUFGLENBQU9DLEtBQVAsQ0FBYSxDQUFiLEVBQWUsRUFBZixJQUFtQixHQUFuQixHQUF1QnJHLENBQUMsQ0FBQ29HLElBQUYsQ0FBT0MsS0FBUCxDQUFhLEVBQWIsRUFBZ0IsRUFBaEIsQ0FBekMsR0FBNkQsT0FBMUk7QUFBb0oseUJBQUssRUFBRTtBQUFDLDZCQUFNLE9BQVA7QUFBZSwrQkFBTSxPQUFyQjtBQUE2QkMscUNBQWUsRUFBQ3ZILFNBQVMsQ0FBQ0YsUUFBdkQ7QUFBZ0VpQywyQkFBSyxFQUFDO0FBQXRFLHFCQUEzSjtBQUFBLDRDQUEyTztBQUFBLGdDQUFJZCxDQUFDLENBQUNwQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTNPLGVBQTZQO0FBQU8sMkJBQUssRUFBRW9DLENBQUMsQ0FBQ3VHLElBQUYsSUFBUSxJQUFSLEdBQWE7QUFBQ3pGLDZCQUFLLEVBQUM7QUFBUCx1QkFBYixHQUErQjtBQUFDQSw2QkFBSyxFQUFDO0FBQVAsdUJBQTdDO0FBQThELCtCQUFTLEVBQUU4QiwrREFBSyxDQUFDMkQsSUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTdQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhHLG1CQUFVdkcsQ0FBQyxDQUFDdkMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQO0FBTUgsZUFQQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpBLGVBd0JBO0FBQUsscUJBQVMsRUFBRW1GLCtEQUFLLENBQUN5QixXQUF0QjtBQUFBLG1DQUNJO0FBQU0sc0JBQVEsRUFBRSxrQkFBQXJFLENBQUM7QUFBQSx1QkFBRUEsQ0FBQyxDQUFDd0csY0FBRixFQUFGO0FBQUEsZUFBakI7QUFBQSxzQ0FDQTtBQUFLLHlCQUFTLEVBQUU1RCwrREFBSyxDQUFDNkQsY0FBdEI7QUFBQSx1Q0FBc0M7QUFBSywyQkFBUyxFQUFFN0QsK0RBQUssQ0FBQzhDLFFBQXRCO0FBQUEsMENBQWdDO0FBQVEseUJBQUssRUFBRTlILE9BQWY7QUFBd0IsNEJBQVEsRUFBRSxrQkFBQ29DLENBQUQ7QUFBQSw2QkFBS3lFLGNBQWMsQ0FBQ3pFLENBQUQsQ0FBbkI7QUFBQSxxQkFBbEM7QUFBMEQsd0JBQUksRUFBQyxNQUEvRDtBQUFzRSw0QkFBUTtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFoQyxlQUF1SDtBQUFBLDJDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFQTtBQUFLLHlCQUFTLEVBQUU0QywrREFBSyxDQUFDOEQsSUFBdEI7QUFBQSx3Q0FDQTtBQUFLLDJCQUFTLEVBQUU5RCwrREFBSyxDQUFDK0Qsc0JBQXRCO0FBQThDLHlCQUFPLEVBQUU7QUFBQSwyQkFBSTdDLHNCQUFzQixFQUExQjtBQUFBLG1CQUF2RDtBQUFBLDBDQUNBO0FBQUssNkJBQVMsRUFBRWxCLCtEQUFLLENBQUNnRSxTQUF0QjtBQUFBLDJDQUFpQyxxRUFBQyxnREFBRDtBQUFPLDJCQUFLLEVBQUU7QUFBRUMsMEJBQUUsRUFBRSw0QkFBTjtBQUFvQ0MsNEJBQUksRUFBRTtBQUExQyx1QkFBZDtBQUE2RCwwQkFBSSxFQUFFO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQSxFQUVDOUosMkJBQTJCLGlCQUFFO0FBQUssNkJBQVMsRUFBRTRGLCtEQUFLLENBQUNtRSxvQkFBdEI7QUFBQSwyQ0FBNEMscUVBQUMsaURBQUQ7QUFBUSw2QkFBTyxFQUFFN0osb0JBQWpCO0FBQXVDLDhCQUFRLEVBQUUsa0JBQUM4QyxDQUFEO0FBQUEsK0JBQUttRCxRQUFRLENBQUNuRCxDQUFELENBQWI7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxlQUtJO0FBQVEsc0JBQUksRUFBQyxRQUFiO0FBQXNCLDJCQUFTLEVBQUU0QywrREFBSyxDQUFDb0UsT0FBdkM7QUFBZ0QseUJBQU8sRUFBRTtBQUFBLDJCQUFJM0MsV0FBVyxFQUFmO0FBQUEsbUJBQXpEO0FBQUEseUNBQTRFO0FBQU0sNkJBQVMsRUFBRXpCLCtEQUFLLENBQUNxRSxjQUF2QjtBQUFBLDJDQUF3QyxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUF5REQsR0ExREQsTUEwREs7QUFDRCx3QkFDVTtBQUFLLGVBQVMsRUFBRXJFLCtEQUFLLENBQUN1QyxTQUF0QjtBQUFBLDhCQUNBLHFFQUFDLGlFQUFEO0FBQVEsYUFBSyxFQUFFdEksS0FBSyxDQUFDZ0Q7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUk7QUFBSyxpQkFBUyxFQUFFK0MsK0RBQUssQ0FBQ3NFLGNBQXRCO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFFdEUsK0RBQUssQ0FBQ3VFLHNCQUF0QjtBQUE4QyxhQUFHLEVBQUVwQyxhQUFuRDtBQUFrRSxpQkFBTyxFQUFFO0FBQUEsbUJBQUlELGNBQWMsRUFBbEI7QUFBQSxXQUEzRTtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBRWxDLCtEQUFLLENBQUN3RTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFFeEUsK0RBQUssQ0FBQ3lFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFLLHFCQUFTLEVBQUV6RSwrREFBSyxDQUFDMEU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFTSTtBQUFLLGlCQUFTLEVBQUUxRSwrREFBSyxDQUFDeUMsWUFBdEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUV6QywrREFBSyxDQUFDMEMsTUFBdEI7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUUxQywrREFBSyxDQUFDMkMsV0FBdEI7QUFBQSxvQkFDQ25JLFdBQVcsQ0FBQ3FELEdBQVosQ0FBZ0IsVUFBQVQsQ0FBQztBQUFBLGdDQUFFLHFFQUFDLEtBQUQ7QUFBTyw0QkFBYyxFQUFFNEUsZ0JBQXZCO0FBQXlDLHlCQUFXLEVBQUVULGFBQXREO0FBQWtGLHNCQUFRLEVBQUVuRTtBQUE1RixlQUEwRUEsQ0FBQyxDQUFDdkMsR0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBRjtBQUFBLFdBQWpCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQUssbUJBQVMsRUFBRW1GLCtEQUFLLENBQUM0QyxNQUF0QjtBQUFBLGlDQUNBO0FBQUsscUJBQVMsRUFBRTVDLCtEQUFLLENBQUM2QyxlQUF0QjtBQUFBLG1DQUF1QztBQUFLLHVCQUFTLEVBQUU3QywrREFBSyxDQUFDOEMsUUFBdEI7QUFBQSxzQ0FBZ0M7QUFBTyx3QkFBUSxFQUFFLGtCQUFDMUYsQ0FBRDtBQUFBLHlCQUFLK0QsYUFBYSxDQUFDL0QsQ0FBRCxDQUFsQjtBQUFBLGlCQUFqQjtBQUF3QyxvQkFBSSxFQUFDLE1BQTdDO0FBQW9ELHdCQUFRO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWhDLGVBQXFHO0FBQUEsdUNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFY7QUF1Qkg7QUFFTixDQW5VRDs7R0FBTXBELEk7OztBQXFVU0EsbUVBQWY7O0FBR0UsSUFBTTJLLE9BQU8sR0FBQyxTQUFSQSxPQUFRLEdBQUk7QUFDaEIsc0JBQ0k7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLFdBQWhEO0FBQUEsMkJBQTREO0FBQUcsUUFBRSxFQUFDLFVBQU47QUFBaUIsbUJBQVUsVUFBM0I7QUFBQSw4QkFBc0M7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXRDLGVBQThOO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE5TixlQUF3VTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeFUsZUFBaWM7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWpjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHRCxDQUpEOztLQUFNQSxPOztBQUtOLElBQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLENBQUMzSyxLQUFELEVBQVM7QUFBQTs7QUFBQSwwQkFFOENDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUYsS0FBSyxDQUFDNEssUUFBTixDQUFlMUcsb0JBQTlCLENBRjlDO0FBQUE7QUFBQSxNQUVWMkcseUJBRlU7QUFBQSxNQUVnQkMsNEJBRmhCOztBQUdqQjdLLDhDQUFLLENBQUN5QyxTQUFOLENBQWdCLFlBQUk7QUFDbEJvSSxnQ0FBNEIsQ0FBQzlLLEtBQUssQ0FBQzRLLFFBQU4sQ0FBZTFHLG9CQUFoQixDQUE1QjtBQUNELEdBRkQsRUFFRSxDQUFDbEUsS0FBSyxDQUFDNEssUUFBTixDQUFlMUcsb0JBQWhCLENBRkY7QUFHRixzQkFDUTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFNkIsK0RBQUssQ0FBQ2dGLGFBQXRCO0FBQXFDLGFBQU8sRUFBRSxtQkFBSTtBQUFDL0ssYUFBSyxDQUFDZ0wsV0FBTixDQUFrQmhMLEtBQUssQ0FBQzRLLFFBQXhCLEdBQWtDRSw0QkFBNEIsQ0FBQyxDQUFELENBQTlELEVBQWtFOUssS0FBSyxDQUFDaUwsY0FBTixDQUFxQmpMLEtBQUssQ0FBQzRLLFFBQU4sQ0FBZTNHLEtBQXBDLENBQWxFO0FBQTZHLE9BQWhLO0FBQUEsaUJBQ0s0Ryx5QkFBeUIsSUFBRSxDQUEzQixpQkFBOEI7QUFBSyxpQkFBUyxFQUFFOUUsK0RBQUssQ0FBQ21GLG1CQUF0QjtBQUFBLCtCQUEyQztBQUFBLG9CQUFPTDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURuQyxlQUVJO0FBQU0saUJBQVMsRUFBRTlFLCtEQUFLLENBQUNvRixZQUF2QjtBQUFBLCtCQUFxQztBQUFLLGFBQUcsRUFBRW5MLEtBQUssQ0FBQzRLLFFBQU4sQ0FBZW5LLGVBQWYsSUFBa0M7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFNLGlCQUFTLEVBQUVzRiwrREFBSyxDQUFDcEYsUUFBdkI7QUFBQSwrQkFBaUM7QUFBQSxvQkFBSVgsS0FBSyxDQUFDNEssUUFBTixDQUFlaks7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBU0gsQ0FmQzs7SUFBTWdLLEs7O01BQUFBLEs7O0FBa0JSLElBQU1TLFdBQVcsR0FBQyxTQUFaQSxXQUFZLENBQUNwTCxLQUFELEVBQVM7QUFBQTs7QUFBQSwwQkFDb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRHBCO0FBQUE7QUFBQSxNQUNoQm1MLGVBRGdCO0FBQUEsTUFDQUMsa0JBREE7O0FBRXZCLE1BQU1DLGtCQUFrQixHQUFDLFNBQW5CQSxrQkFBbUIsQ0FBQ3RILEtBQUQsRUFBUztBQUM5QmpFLFNBQUssQ0FBQ3dMLGFBQU4sQ0FBb0J2SCxLQUFwQjtBQUNBd0gsMkVBQWUsQ0FBQztBQUFDQyxjQUFRLEVBQUN6SCxLQUFWO0FBQWdCeUQsY0FBUSxFQUFDMUgsS0FBSyxDQUFDMEg7QUFBL0IsS0FBRCxFQUEwQzFILEtBQUssQ0FBQ2dELEtBQWhELENBQWY7QUFDSCxHQUhEOztBQUlBLHNCQUFPO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBSXNJLGtCQUFrQixDQUFDLFVBQUFuSSxDQUFDO0FBQUEsZUFBRSxDQUFDQSxDQUFIO0FBQUEsT0FBRixDQUF0QjtBQUFBLEtBQWQ7QUFBNkMsYUFBUyxFQUFFNEMsK0RBQUssQ0FBQzdELFNBQTlEO0FBQXlFLFNBQUssRUFBRTtBQUFDdUgscUJBQWUsRUFBQ3pKLEtBQUssQ0FBQ2tDLFNBQU4sQ0FBZ0JGO0FBQWpDLEtBQWhGO0FBQUEsY0FDRnFKLGVBQWUsaUJBQUU7QUFBSyxlQUFTLEVBQUV0RiwrREFBSyxDQUFDNEYsV0FBdEI7QUFBQSw4QkFDVjtBQUFLLGlCQUFTLEVBQUU1RiwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlzSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUM5Qix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVSxlQUVWO0FBQUssaUJBQVMsRUFBRTFELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXNILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQzlCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZVLGVBR1Y7QUFBSyxpQkFBUyxFQUFFMUQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJc0gsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDOUIseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSFUsZUFJVjtBQUFLLGlCQUFTLEVBQUUxRCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlzSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUM5Qix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKVSxlQUtWO0FBQUssaUJBQVMsRUFBRTFELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXNILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQzlCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxVLGVBTVY7QUFBSyxpQkFBUyxFQUFFMUQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJc0gsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDOUIseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTlUsZUFPVjtBQUFLLGlCQUFTLEVBQUUxRCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlzSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUM5Qix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQVSxlQVFWO0FBQUssaUJBQVMsRUFBRTFELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXNILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQzlCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJVLGVBU1Y7QUFBSyxpQkFBUyxFQUFFMUQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJc0gsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDOUIseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVFUsZUFVVjtBQUFLLGlCQUFTLEVBQUUxRCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlzSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUM5Qix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWVSxlQVdWO0FBQUssaUJBQVMsRUFBRTFELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXNILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQzlCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhVLGVBWVY7QUFBSyxpQkFBUyxFQUFFMUQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJc0gsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDOUIseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBbUJILENBekJEOztJQUFNMkIsVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjZlNjZlYWU0NjIzYTg1ODg1M2NjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge3VwZGF0ZUNvbG9yQ2hhdCxhZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5jb25zdCBjaGF0ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjaGF0Q29sb3Isc2V0Q2hhdENvbG9yXT1SZWFjdC51c2VTdGF0ZSh7Y29sb3JvbmU6XCIjMTg3NmYzXCIsY29sb3J0d286XCIjZTRlNmViXCJ9KVxyXG4gICAgY29uc3QgW2hlaWdodEFuZFdpZHRoT2ZXaW5kb3csIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ddID0gUmVhY3QudXNlU3RhdGUoeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuICAgIGNvbnN0IFtzaG93U2lkZU5hdkJhcixzZXRTaG93U2lkZU5hdkJhcl09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKioqKioqKioqKioqKnVzZUVmZmVjdHMqKioqKioqKioqKi9cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3coeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pIFxyXG4gICAgfSxbXSlcclxuICAgIC8vd2hlbiB5b3Ugc2Nyb2wgdG9wIG9uIGNvbnZlcnRhdGlvbiBpdCB3aWxsIGxvYWQgbmV3IDIwIG1lc3NhZ2VcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDpza2lwfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sW3NraXBdKVxyXG5cclxuICAgICAgLy8gZ2V0IGxpc3Qgb2YgdXNlcnMgIHlvdSBjaGF0IHdpdGhcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIuX2lkIT11bmRlZmluZWQmJiB1c2VyLl9pZC5sZW5ndGg+MilcclxuICAgICAgICBnZXRVc2VyV2hvQ2hhdFdpdGgoe30scHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VyV2hvQ2hhdFdpdGg9cmVzdWx0LmRhdGEuZGF0YS5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgLy90aGlzIHRvIHJldHVybiB0aGUgZGF0YSBvZiB0aGUgb3RoZXIgdXNlciBub3QgeW91ciBkYXRhIGJlY2F1c2UgaW0gcmV0dXJuIGJvdGggb2YgZGF0YSBzZW5kZXIgYW5kIHJlY2l2ZXIgXHJcbiAgICAgICAgICAgICAgICBpZihlLmZpcnN0VXNlci5faWQ9PXVzZXIuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLnNlY291bmRVc2VyLGNvbG9yOmUuY29sb3Isbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixjb2xvcjplLmNvbG9yLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobmV3VXNlcldob0NoYXRXaXRoKS50aGVuKG5ld2FycmF5PT57XHJcbiAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoWy4uLm5ld2FycmF5XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICB9KS5jYXRjaChlPT5jb25zb2xlLmxvZyhlLm1lc3NhZ2UpKVxyXG4gICAgfSxbdXNlcl0pXHJcblxyXG4gICAgLy93aGVuIHlvdSBjbGljayBvbiB1c2VyIGl0IHdpbGwgbG9hZCBjb252ZXJ0YXRpb24gZGF0YVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiB5b3Ugb3BlbiBjb252ZXJ0YXRpb24gaXRzIHdpbGwgbWFrZSBhbGwgbWVzc2dhZ2Ugc2VlblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcblxyXG4gICAgLy9zb2NrZXQgcmVjZXZpbmcgZGF0YSBoYW5kbGVyXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvL29uIHJlY2l2aW5nIG1lc3NzYWdlIHNvY2tldFxyXG4gICAgICAgIGFzeW5jICBmdW5jdGlvbiAgY2hhdEhhbmRsZXIoZGF0YSl7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgLy9zZXQgdnUgaWYgeW91IGFyZSBpbiBjb252ZXJhdGlvbiBcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAvL2lmIHlvdSBhcmUgbm90IGluIGNvbnZlcnRpb24gYWRkICsxIHRvIG1lc3NhZ2Ugbm90IHJlYWQgaW4gdXNlciBpbWFnZVxyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vYWRkIG1lc3NhZ2UgdG8gY2hhdFxyXG4gICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgdGhlIG90aGVyIHVzZXIgaXMgd3J0aW5nIGFkZCBhbmltYXRpb24gaWYgd3J0aW5nXHJcbiAgICAgICAgZnVuY3Rpb24gaXNXcml0aW5nKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnVzZXJXaG9SZWNpdmVXcml0aW5nPT11c2VyLl9pZCAmJiBkYXRhLnNlbmRlcmlkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGRhdGEuaXNXcml0aW5nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBvdGhlciB1c2VyIGhhcyBzZWVuIHlvdSBtZXNzYWdlIHNlZW4gaWNvbiB3aWxsIGJlIGJsdWVcclxuICAgICAgICBjb25zdCBzZXR2dT0oZGF0YSk9PntcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KS5sZW5ndGghPTApe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRDaGF0cy5sZW5ndGgtMTsgaT4wOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3IhPVwicmdiKDI0LCAxMTgsIDI0MylcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3I9XCJyZ2IoMjQsIDExOCwgMjQzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0dnVcIixzZXR2dSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXInLCBjaGF0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwic2V0dnVcIixzZXR2dSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vYWRkIGVtb2ppIHRvIGlucHV0XHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vY2xvc2Ugb3Igb3BlbiBlbW9qaSBjb250YWluZXJcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vc2VhcmNoIGZvciB1c2VyIHRvIHNlbmQgbWVzc2FnZVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9vbiBjbGljayBvbiB1c2VyIGdldCBjdXJyZW50IHVzZXIgZGF0YVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNvbnN0IHNlbmRNZXNzYWdlPSgpPT57XHJcbiAgICAgICAgaWYobWVzc2FnZS5sZW5ndGg+MCYmY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICBhZGRNZXNzYWdlKHtyZWNlaXZlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLG1lc3NhZ2U6bWVzc2FnZSxGaXJzdFRpbWU6Y3VycmVudENoYXRzLmxlbmd0aH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOlt1c2VyLl9pZF0sbWVzc2FnZTptZXNzYWdlLF9pZDpyfV1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgLy9vbiBzY3JvbCB0byB0b3AgbG9hZCAyMCBuZXcgbWVzc2FnZVxyXG4gICAgICBjb25zdCBzY3JvbGxmbj0oZSk9PntcclxuICAgICAgICAgIC8vaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCkpe1xyXG4gICAgICAgICAgaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNldFNraXAoZT0+ZSsyMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vaWYgeW91IGNoYW5nZSB0aGUgY29sb3Igb2YgY29udmVyYXRpb25cclxuICAgICAgY29uc3QgZ2V0TmV3Q29sb3I9KGNvbG9yKT0+e1xyXG4gICAgICAgIHNldENoYXRDb2xvcihlPT57cmV0dXJuIHsuLi5lLGNvbG9yb25lOmNvbG9yfX0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vc2V0IGNvbG9yIGlmIGNvbnZlcnRhdGlvblxyXG4gICAgICBjb25zdCBzZXRDb2xvck9mQ2hhdEZuPShjb2xvck9mQ2hhdEZyb21EYXRhQmFzZSk9PntcclxuICAgICAgICBpZihjb2xvck9mQ2hhdEZyb21EYXRhQmFzZT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntcclxuICAgICAgICAgICAgICAgIHJldHVybnsuLi5lLGNvbG9yb25lOlwiIzE4NzZmM1wifVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRDaGF0Q29sb3IoZT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuey4uLmUsY29sb3JvbmU6Y29sb3JPZkNoYXRGcm9tRGF0YUJhc2V9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IFNob3dTaWRlTmF2QmFyPSgpPT57XHJcbiAgIFxyXG4gICAgICAgIHNpZGVOYXZCYXJCdG4uY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKFN0eWxlLmNoYW5nZSk7XHJcbiAgICAgICAgc2V0U2hvd1NpZGVOYXZCYXIoZT0+IWUpXHJcbiAgICB9XHJcbiAgICAgIGlmIChoZWlnaHRBbmRXaWR0aE9mV2luZG93LndpZHRoID4gaGVpZ2h0QW5kV2lkdGhPZldpbmRvdy5oZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIHRva2VuPXtwcm9wcy50b2tlbn0+PC9OYXZCYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDb250YW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmNvbnRhY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIHNldENvbG9yT2ZDaGF0PXtzZXRDb2xvck9mQ2hhdEZufSBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gIHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZWFyY2hGb3JVc2VyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPlNlYXJjaCB1c2Vyczwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VySW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPXtjdXJyZW50VXNlclRvQ2hhdFdpdGguY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGRzZWxsaXBzaXN9PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhbmdlQ29sb3JDb250YWluZXJ9PjxDb2xvclBpY2tlciByZWNlaXZlcj17Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0gdG9rZW49e3Byb3BzLnRva2VufSBnZXROZXdDb2xvcmZuPXtnZXROZXdDb2xvcn0gY2hhdENvbG9yPXtjaGF0Q29sb3J9PjwvQ29sb3JQaWNrZXI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25TY3JvbGw9eyhlKT0+c2Nyb2xsZm4oZSl9IHJlZj17bWVzc2FnZXNDb21wfSBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17ZS5faWR9IGNsYXNzTmFtZT17U3R5bGUub25lTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS51c2Vyc1swXT09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpcImZhbHNlXCJ9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGUubWVzc2FnZVRleHR9ICR7U3R5bGUueW91ck1lc3NhZ2VWdX0gYH0gICB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOlwiZmFsc2VcIn0gIHN0eWxlPXt7XCItLWlcIjpcIi0xMDAlXCIsZmxvYXQ6XCJyaWdodFwiLGJhY2tncm91bmRDb2xvcjpjaGF0Q29sb3IuY29sb3JvbmUsY29sb3I6XCJ3aGl0ZVwifX0+PHA+e2UubWVzc2FnZX08L3A+PHNwYW4gIHN0eWxlPXtlLnNlZW49PXRydWU/e2NvbG9yOlwiIzE4NzZmM1wifTp7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPXtTdHlsZS5zZWVufSA+JiMxMDAwNDs8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlbmRNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlQaWNrZXJDb250YWluZXJ9PjxQaWNrZXIgcGVyTGluZT17RW1vamlDb250YWluZXJIZWlnaHR9IG9uU2VsZWN0PXsoZSk9PmFkZEVtb2ppKGUpfSAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5hdkJhclNob3dVc2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lckJ0blNpZGVOYXZCYXJ9IHJlZj17c2lkZU5hdkJhckJ0bn0gb25DbGljaz17KCk9PlNob3dTaWRlTmF2QmFyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJhcjF9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJhcjJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJhcjN9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5saXN0Q29udGFjc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBzZXRDb2xvck9mQ2hhdD17c2V0Q29sb3JPZkNoYXRGbn0gZ2V0VXNlcmRhdGE9e2dldFVzZXJkYXRhRm59IGtleT17ZS5faWR9ICB1c2VyRGF0YT17ZX0+PC9Vc2Vycz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRcclxuXHJcblxyXG4gIGNvbnN0IFNlbnRTdmc9KCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICApXHJcbiAgfVxyXG4gIGNvbnN0IFVzZXJzPShwcm9wcyk9PntcclxuICAgIFxyXG4gICAgICBjb25zdCBbbm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsXT1SZWFjdC51c2VTdGF0ZShwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbChwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcilcclxuICAgICAgfSxbcHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXJdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJDb250YWluZXJ9IG9uQ2xpY2s9eygpPT57cHJvcHMuZ2V0VXNlcmRhdGEocHJvcHMudXNlckRhdGEpLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwoMCkscHJvcHMuc2V0Q29sb3JPZkNoYXQocHJvcHMudXNlckRhdGEuY29sb3IpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwhPTAmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ub3RTZWVuTWVzc2FnZU51bWJlfT48c3Bhbj57bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbH08L3NwYW4+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuaW1nQ29udGFpbmVyfT48aW1nIHNyYz17cHJvcHMudXNlckRhdGEuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQ29sb3JQaWNrZXI9KHByb3BzKT0+e1xyXG4gICAgY29uc3QgW29wZW5Db2xvclBpY2tlcixzZXRPcGVuQ29sb3JQaWNrZXJdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgY2hhbmdlUHJpbWFyeUNvbG9yPShjb2xvcik9PntcclxuICAgICAgICBwcm9wcy5nZXROZXdDb2xvcmZuKGNvbG9yKVxyXG4gICAgICAgIHVwZGF0ZUNvbG9yQ2hhdCh7bmV3Q29sb3I6Y29sb3IscmVjZWl2ZXI6cHJvcHMucmVjZWl2ZXJ9LHByb3BzLnRva2VuKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKDxkaXYgb25DbGljaz17KCk9PnNldE9wZW5Db2xvclBpY2tlcihlPT4hZSl9IGNsYXNzTmFtZT17U3R5bGUuY2hhdENvbG9yfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpwcm9wcy5jaGF0Q29sb3IuY29sb3JvbmV9fT5cclxuICAgICAgICB7b3BlbkNvbG9yUGlja2VyJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3JQaWNrZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmMTc0NFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmYxNzQ0XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmNTAwNTdcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2Y1MDA1N1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjM2Q1YWZlXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiMzZDVhZmVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzc2ZmYwM1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjNzZmZjAzXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNjNmZmMDBcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2M2ZmYwMFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYzZDAwXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjNkMDBcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzY1MWZmZlwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjNjUxZmZmXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZmVhMDBcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmZWEwMFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZjUwMDU3XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmNTAwNTdcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmMTc0NFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmYxNzQ0XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMxZGU5YjZcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzFkZTliNlwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjMDNhOWY0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiMwM2E5ZjRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cmVxLHJlc30pIHtcclxuXHJcbiAgICByZXR1cm4gcmVxLmNvb2tpZXMudG9rZW4gP3twcm9wczoge3Rva2VuOnJlcS5jb29raWVzLnRva2VufX06e3JlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiAnLycsIHBlcm1hbmVudDogZmFsc2UsIH19XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9