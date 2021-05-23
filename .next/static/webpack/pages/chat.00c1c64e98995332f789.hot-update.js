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

  var sideNavBarBtn = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null);
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
        lineNumber: 254,
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
              lineNumber: 259,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
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
                lineNumber: 262,
                columnNumber: 49
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
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
                  lineNumber: 266,
                  columnNumber: 100
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Search users"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 176
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 169
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 68
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
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
                  lineNumber: 275,
                  columnNumber: 75
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: currentUserToChatWith.userName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 65
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 33
              }, _this), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.isWritingContainer,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ldsellipsis,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 68
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 79
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 90
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 101
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
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
                  lineNumber: 280,
                  columnNumber: 77
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
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
                      lineNumber: 286,
                      columnNumber: 232
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
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
                      lineNumber: 287,
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
                      lineNumber: 287,
                      columnNumber: 294
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 41
                  }, _this)
                }, e._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 44
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 273,
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
                    lineNumber: 295,
                    columnNumber: 99
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "Message"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 193
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
                    columnNumber: 186
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 67
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
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
                      lineNumber: 298,
                      columnNumber: 62
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
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
                      lineNumber: 299,
                      columnNumber: 103
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 59
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
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
                      lineNumber: 301,
                      columnNumber: 149
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 109
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        token: props.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
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
            lineNumber: 315,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bar2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bar3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: showSideNavBar ? {
          marginRight: "100%"
        } : {
          marginRight: "0px"
        },
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserContaner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "contacts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
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
              lineNumber: 325,
              columnNumber: 49
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
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
                lineNumber: 328,
                columnNumber: 100
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 176
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 169
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 68
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }, _this);
  }
};

_s(chat, "tSYuz8uGxGdiU3MRjyVi0tEdbt8=");

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
        lineNumber: 342,
        columnNumber: 107
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 291
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 397
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 518
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 69
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 342,
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
          lineNumber: 354,
          columnNumber: 95
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 52
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 352,
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
          return changePrimaryColor("#3d5afe");
        },
        style: {
          backgroundColor: "#3d5afe"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
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
        lineNumber: 374,
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
        lineNumber: 375,
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
        lineNumber: 376,
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
        lineNumber: 377,
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
        lineNumber: 378,
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
        lineNumber: 379,
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
        lineNumber: 380,
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
        lineNumber: 381,
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
        lineNumber: 382,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 27
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 369,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImNoYXRDb2xvciIsInNldENoYXRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJzaG93U2lkZU5hdkJhciIsInNldFNob3dTaWRlTmF2QmFyIiwic2lkZU5hdkJhckJ0biIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uIiwic2Vjb25kVXNlciIsInRva2VuIiwidGhlbiIsImRhdGEiLCJlIiwicmV2ZXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImdldFVzZXJXaG9DaGF0V2l0aCIsInJlc3VsdCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsIm1hcCIsImZpcnN0VXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vjb3VuZFVzZXIiLCJjb2xvciIsIm5vdFNlZW5NZXNzYWdlTnVtYmVyIiwiYWxsIiwibmV3YXJyYXkiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5Iiwic2VuZGVySWQiLCJMaXN0T2ZVc2VyIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsImlzV3JpdGluZyIsInVzZXJXaG9SZWNpdmVXcml0aW5nIiwic2VuZGVyaWQiLCJzZXR2dSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlIiwieW91ck1lc3NhZ2VWdSIsImkiLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJvbiIsIm9mZiIsImFkZEVtb2ppIiwic3ltIiwidW5pZmllZCIsInNwbGl0IiwiY29kZXNBcnJheSIsImZvckVhY2giLCJlbCIsInB1c2giLCJlbW9qaSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyIiwic2VhcmNoRm9yVXNlciIsInNlYXJjaFVzZXJOYW1lQXBpIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRVc2VyZGF0YUZuIiwiY3VycmVudFVzZXJEYXRhIiwic2VuZE1lc3NhZ2UiLCJhZGRNZXNzYWdlIiwicmVjZWl2ZXIiLCJGaXJzdFRpbWUiLCJtZXNzYWdlSGFuZGxlciIsInNjcm9sbGZuIiwiZ2V0TmV3Q29sb3IiLCJzZXRDb2xvck9mQ2hhdEZuIiwiY29sb3JPZkNoYXRGcm9tRGF0YUJhc2UiLCJTaG93U2lkZU5hdkJhciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoYW5nZSIsImNvbnRhaW5lciIsImNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXIiLCJVc2VyQ29udGFuZXIiLCJoZWFkZXIiLCJsaXN0Q29udGFjcyIsImJvdHRvbSIsInNlYXJjaENvbnRhaW5lciIsImlucHV0Y3NzIiwiY2hhdENvbnRhaW5lciIsImhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZSIsInVzZXJJbWFnZUNvbnRhaW5lciIsImlzV3JpdGluZ0NvbnRhaW5lciIsImxkc2VsbGlwc2lzIiwiY2hhbmdlQ29sb3JDb250YWluZXIiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsInNlZW4iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Q29udGFpbmVyIiwiYnRucyIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJpZCIsInNraW4iLCJlbW9qaVBpY2tlckNvbnRhaW5lciIsImJ0bnNlbmQiLCJzZW5kTWVzc2FnZUJ0biIsIm5hdkJhclNob3dVc2VyIiwiY29udGFpbmVyQnRuU2lkZU5hdkJhciIsImJhcjEiLCJiYXIyIiwiYmFyMyIsIm1hcmdpblJpZ2h0IiwiU2VudFN2ZyIsIlVzZXJzIiwidXNlckRhdGEiLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInVzZXJDb250YWluZXIiLCJnZXRVc2VyZGF0YSIsInNldENvbG9yT2ZDaGF0Iiwibm90U2Vlbk1lc3NhZ2VOdW1iZSIsImltZ0NvbnRhaW5lciIsIkNvbG9yUGlja2VyIiwib3BlbkNvbG9yUGlja2VyIiwic2V0T3BlbkNvbG9yUGlja2VyIiwiY2hhbmdlUHJpbWFyeUNvbG9yIiwiZ2V0TmV3Q29sb3JmbiIsInVwZGF0ZUNvbG9yQ2hhdCIsIm5ld0NvbG9yIiwiY29sb3JQaWNrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aUJBQVMsRUFBRXpELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXNILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQy9CLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRVLGVBVVY7QUFBSyxpQkFBUyxFQUFFekQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJc0gsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDL0IseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVlUsZUFXVjtBQUFLLGlCQUFTLEVBQUV6RCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlzSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUMvQix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYVSxlQVlWO0FBQUssaUJBQVMsRUFBRXpELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXNILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQy9CLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQW1CSCxDQXpCRDs7SUFBTTRCLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC4wMGMxYzY0ZTk4OTk1MzMyZjc4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NoYXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyJ1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IHt1cGRhdGVDb2xvckNoYXQsYWRkTWVzc2FnZSxnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbixnZXRVc2VyV2hvQ2hhdFdpdGh9IGZyb20gJy4uL3NlcnZpY2VzL2NoYXQnO1xyXG5pbXBvcnQgc29ja2V0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUsc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtFbW9qaUNvbnRhaW5lckhlaWdodCwgc2V0RW1vamlDb250YWluZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoOSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW2xpc3RPZlVzZXJzLHNldExpc3RPZlVzZXJzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlclRvQ2hhdFdpdGgsc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoXT1SZWFjdC51c2VTdGF0ZSh7Y3VycmVudEltYWdlVXJsOnVuZGVmaW5lZCx1c2VyTmFtZTp1bmRlZmluZWQsX2lkOnVuZGVmaW5lZH0pXHJcbiAgICBjb25zdCBbbWVzc2FnZSxzZXRNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2N1cnJlbnRDaGF0cyxzZXRDdXJyZW50Q2hhdHNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgbWVzc2FnZXNDb21wPVJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtzb2NrZXQsc2V0U29ja2V0XT1SZWFjdC51c2VDb250ZXh0KHNvY2tldENvbnRleHQpXHJcbiAgICBjb25zdCBbc2tpcCxzZXRTa2lwXT1SZWFjdC51c2VTdGF0ZSgoKT0+MClcclxuICAgIGNvbnN0IFtpc1dyaXRpbmdTdGF0ZSxzZXRJc1dyaXRpbmdTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2hhdENvbG9yLHNldENoYXRDb2xvcl09UmVhY3QudXNlU3RhdGUoe2NvbG9yb25lOlwiIzE4NzZmM1wiLGNvbG9ydHdvOlwiI2U0ZTZlYlwifSlcclxuICAgIGNvbnN0IFtoZWlnaHRBbmRXaWR0aE9mV2luZG93LCBzZXRIZWlnaHRBbmRXaWR0aE9mV2luZG93XSA9IFJlYWN0LnVzZVN0YXRlKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbc2hvd1NpZGVOYXZCYXIsc2V0U2hvd1NpZGVOYXZCYXJdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qgc2lkZU5hdkJhckJ0biA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoqKioqKioqKioqKip1c2VFZmZlY3RzKioqKioqKioqKiovXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBzZXRIZWlnaHRBbmRXaWR0aE9mV2luZG93KHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KSBcclxuICAgIH0sW10pXHJcbiAgICAvL3doZW4geW91IHNjcm9sIHRvcCBvbiBjb252ZXJ0YXRpb24gaXQgd2lsbCBsb2FkIG5ldyAyMCBtZXNzYWdlXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6c2tpcH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PlsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCksLi4uZV0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFtza2lwXSlcclxuXHJcbiAgICAgIC8vIGdldCBsaXN0IG9mIHVzZXJzICB5b3UgY2hhdCB3aXRoXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIC8vdGhpcyB0byByZXR1cm4gdGhlIGRhdGEgb2YgdGhlIG90aGVyIHVzZXIgbm90IHlvdXIgZGF0YSBiZWNhdXNlIGltIHJldHVybiBib3RoIG9mIGRhdGEgc2VuZGVyIGFuZCByZWNpdmVyIFxyXG4gICAgICAgICAgICAgICAgaWYoZS5maXJzdFVzZXIuX2lkPT11c2VyLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5zZWNvdW5kVXNlcixjb2xvcjplLmNvbG9yLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7Li4uZS5maXJzdFVzZXIsY29sb3I6ZS5jb2xvcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5ld1VzZXJXaG9DaGF0V2l0aCkudGhlbihuZXdhcnJheT0+e1xyXG4gICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKFsuLi5uZXdhcnJheV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfSkuY2F0Y2goZT0+Y29uc29sZS5sb2coZS5tZXNzYWdlKSlcclxuICAgIH0sW3VzZXJdKVxyXG5cclxuICAgIC8vd2hlbiB5b3UgY2xpY2sgb24gdXNlciBpdCB3aWxsIGxvYWQgY29udmVydGF0aW9uIGRhdGFcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDowfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhbLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpXSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvL3doZW4geW91IG9wZW4gY29udmVydGF0aW9uIGl0cyB3aWxsIG1ha2UgYWxsIG1lc3NnYWdlIHNlZW5cclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFtjdXJyZW50VXNlclRvQ2hhdFdpdGhdKVxyXG5cclxuICAgIC8vc29ja2V0IHJlY2V2aW5nIGRhdGEgaGFuZGxlclxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy9vbiByZWNpdmluZyBtZXNzc2FnZSBzb2NrZXRcclxuICAgICAgICBhc3luYyAgZnVuY3Rpb24gIGNoYXRIYW5kbGVyKGRhdGEpe1xyXG4gICAgICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIuL21zZ1NvdW5kLm1wM1wiKVxyXG4gICAgICAgICAgICBhdWRpby5wbGF5KClcclxuICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZmFsc2UpXHJcbiAgICAgICAgICAgIC8vc2V0IHZ1IGlmIHlvdSBhcmUgaW4gY29udmVyYXRpb24gXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgLy9pZiB5b3UgYXJlIG5vdCBpbiBjb252ZXJ0aW9uIGFkZCArMSB0byBtZXNzYWdlIG5vdCByZWFkIGluIHVzZXIgaW1hZ2VcclxuICAgICAgICAgICAgbGV0IExpc3RPZlVzZXIgPSBhd2FpdCBsaXN0T2ZVc2Vycy5tYXAoKGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1lLl9pZCAmJiBjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT1lLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5ub3RTZWVuTWVzc2FnZU51bWJlcj1lLm5vdFNlZW5NZXNzYWdlTnVtYmVyKzFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKExpc3RPZlVzZXIpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2FkZCBtZXNzYWdlIHRvIGNoYXRcclxuICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbZGF0YS5zZW5kZXJJZF0sbWVzc2FnZTpkYXRhLnRleHQsX2lkOnJ9XVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIHRoZSBvdGhlciB1c2VyIGlzIHdydGluZyBhZGQgYW5pbWF0aW9uIGlmIHdydGluZ1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzV3JpdGluZyhkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YS51c2VyV2hvUmVjaXZlV3JpdGluZz09dXNlci5faWQgJiYgZGF0YS5zZW5kZXJpZD09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCl7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShkYXRhLmlzV3JpdGluZylcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgb3RoZXIgdXNlciBoYXMgc2VlbiB5b3UgbWVzc2FnZSBzZWVuIGljb24gd2lsbCBiZSBibHVlXHJcbiAgICAgICAgY29uc3Qgc2V0dnU9KGRhdGEpPT57XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSkubGVuZ3RoIT0wKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50Q2hhdHMubGVuZ3RoLTE7IGk+MDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yIT1cInJnYigyNCwgMTE4LCAyNDMpXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yPVwicmdiKDI0LCAxMTgsIDI0MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgIHNvY2tldC5vbihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgIHNvY2tldC5vbihcImdldE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLGNoYXRIYW5kbGVyKVxyXG4gICAgICAgIHNvY2tldC5vbihcInNldHZ1XCIsc2V0dnUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcInNldHZ1XCIsc2V0dnUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvL2FkZCBlbW9qaSB0byBpbnB1dFxyXG4gICAgY29uc3QgYWRkRW1vamk9KGUpPT57XHJcbiAgICAgICAgbGV0IHN5bSA9IGUudW5pZmllZC5zcGxpdCgnLScpXHJcbiAgICAgICAgbGV0IGNvZGVzQXJyYXkgPSBbXVxyXG4gICAgICAgIHN5bS5mb3JFYWNoKGVsID0+IGNvZGVzQXJyYXkucHVzaCgnMHgnICsgZWwpKVxyXG4gICAgICAgIGxldCBlbW9qaSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVzQXJyYXkpXHJcbiAgICAgICAgc2V0TWVzc2FnZShlbD0+e3JldHVybiBlbCtlbW9qaX0pXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvL2Nsb3NlIG9yIG9wZW4gZW1vamkgY29udGFpbmVyXHJcbiAgICBjb25zdCBjbG9zZU9yT3BlbkVtb2ppUGlja2VyPSgpPT57XHJcbiAgICAgICAgc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlKGU9PiFlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL3NlYXJjaCBmb3IgdXNlciB0byBzZW5kIG1lc3NhZ2VcclxuICAgICAgY29uc3Qgc2VhcmNoRm9yVXNlcj0oZSk9PntcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkoZS50YXJnZXQudmFsdWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vb24gY2xpY2sgb24gdXNlciBnZXQgY3VycmVudCB1c2VyIGRhdGFcclxuICAgICAgY29uc3QgZ2V0VXNlcmRhdGFGbj0oY3VycmVudFVzZXJEYXRhKT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aChjdXJyZW50VXNlckRhdGEpXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBjb25zdCBzZW5kTWVzc2FnZT0oKT0+e1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubGVuZ3RoPjAmJmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgYWRkTWVzc2FnZSh7cmVjZWl2ZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxtZXNzYWdlOm1lc3NhZ2UsRmlyc3RUaW1lOmN1cnJlbnRDaGF0cy5sZW5ndGh9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5lLHt1c2VyczpbdXNlci5faWRdLG1lc3NhZ2U6bWVzc2FnZSxfaWQ6cn1dXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIix7b3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCx0ZXh0Om1lc3NhZ2Usc2VuZGVySWQ6dXNlci5faWR9KVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0TWVzc2FnZShcIlwiKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVzc2FnZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNlbmRlcmlkOnVzZXIuX2lkfSlcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzpmYWxzZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNlbmRlcmlkOnVzZXIuX2lkfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiBcclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICAgIC8vb24gc2Nyb2wgdG8gdG9wIGxvYWQgMjAgbmV3IG1lc3NhZ2VcclxuICAgICAgY29uc3Qgc2Nyb2xsZm49KGUpPT57XHJcbiAgICAgICAgICAvL2lmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IChlLnRhcmdldC5zY3JvbGxIZWlnaHQgLSBlLnRhcmdldC5vZmZzZXRIZWlnaHQpKXtcclxuICAgICAgICAgIGlmKCBlLnRhcmdldC5zY3JvbGxUb3AgPT09IDApe1xyXG4gICAgICAgICAgICBzZXRTa2lwKGU9PmUrMjApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvL2lmIHlvdSBjaGFuZ2UgdGhlIGNvbG9yIG9mIGNvbnZlcmF0aW9uXHJcbiAgICAgIGNvbnN0IGdldE5ld0NvbG9yPShjb2xvcik9PntcclxuICAgICAgICBzZXRDaGF0Q29sb3IoZT0+e3JldHVybiB7Li4uZSxjb2xvcm9uZTpjb2xvcn19KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL3NldCBjb2xvciBpZiBjb252ZXJ0YXRpb25cclxuICAgICAgY29uc3Qgc2V0Q29sb3JPZkNoYXRGbj0oY29sb3JPZkNoYXRGcm9tRGF0YUJhc2UpPT57XHJcbiAgICAgICAgaWYoY29sb3JPZkNoYXRGcm9tRGF0YUJhc2U9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHNldENoYXRDb2xvcihlPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm57Li4uZSxjb2xvcm9uZTpcIiMxODc2ZjNcIn1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntcclxuICAgICAgICAgICAgICAgIHJldHVybnsuLi5lLGNvbG9yb25lOmNvbG9yT2ZDaGF0RnJvbURhdGFCYXNlfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBTaG93U2lkZU5hdkJhcj0oKT0+e1xyXG4gICBcclxuICAgICAgICBzaWRlTmF2QmFyQnRuLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZShTdHlsZS5jaGFuZ2UpO1xyXG4gICAgICAgIHNldFNob3dTaWRlTmF2QmFyKGU9PiFlKVxyXG4gICAgfVxyXG4gICAgICBpZiAoaGVpZ2h0QW5kV2lkdGhPZldpbmRvdy53aWR0aCA+IGhlaWdodEFuZFdpZHRoT2ZXaW5kb3cuaGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ29udGFuZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5jb250YWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5saXN0Q29udGFjc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdE9mVXNlcnMubWFwKGU9PjxVc2VycyBzZXRDb2xvck9mQ2hhdD17c2V0Q29sb3JPZkNoYXRGbn0gZ2V0VXNlcmRhdGE9e2dldFVzZXJkYXRhRm59IGtleT17ZS5faWR9ICB1c2VyRGF0YT17ZX0+PC9Vc2Vycz4pfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NZXNzYWdlczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48aDM+e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC51c2VyTmFtZX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1dyaXRpbmdTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlzV3JpdGluZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc2VsbGlwc2lzfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYW5nZUNvbG9yQ29udGFpbmVyfT48Q29sb3JQaWNrZXIgcmVjZWl2ZXI9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9IHRva2VuPXtwcm9wcy50b2tlbn0gZ2V0TmV3Q29sb3Jmbj17Z2V0TmV3Q29sb3J9IGNoYXRDb2xvcj17Y2hhdENvbG9yfT48L0NvbG9yUGlja2VyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uU2Nyb2xsPXsoZSk9PnNjcm9sbGZuKGUpfSByZWY9e21lc3NhZ2VzQ29tcH0gY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDaGF0cy5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGRpdiBrZXk9e2UuX2lkfSBjbGFzc05hbWU9e1N0eWxlLm9uZU1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudXNlcnNbMF09PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZVRleHR9IHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6XCJmYWxzZVwifSAgc3R5bGU9e3tcIi0taVwiOlwiMCVcIixmbG9hdDpcImxlZnRcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZTRlNmViXCIsY29sb3I6XCJibGFja1wifX0+PHA+e2UubWVzc2FnZX08L3A+PC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlLm1lc3NhZ2VUZXh0fSAke1N0eWxlLnlvdXJNZXNzYWdlVnV9IGB9ICAgdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpcImZhbHNlXCJ9ICBzdHlsZT17e1wiLS1pXCI6XCItMTAwJVwiLGZsb2F0OlwicmlnaHRcIixiYWNrZ3JvdW5kQ29sb3I6Y2hhdENvbG9yLmNvbG9yb25lLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjxzcGFuICBzdHlsZT17ZS5zZWVuPT10cnVlP3tjb2xvcjpcIiMxODc2ZjNcIn06e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT17U3R5bGUuc2Vlbn0gPiYjMTAwMDQ7PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0ICB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKT0+bWVzc2FnZUhhbmRsZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+TWVzc2FnZTwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm9wZW5PckNsb3NlRW1vamlQaWNrZXJ9IG9uQ2xpY2s9eygpPT5jbG9zZU9yT3BlbkVtb2ppUGlja2VyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppTG9nb30+PEVtb2ppIGVtb2ppPXt7IGlkOiAnc21pbGluZ19mYWNlX3dpdGhfM19oZWFydHMnLCBza2luOiAzIH19IHNpemU9ezE2fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1N0eWxlLmJ0bnNlbmR9IG9uQ2xpY2s9eygpPT5zZW5kTWVzc2FnZSgpfT48c3BhbiBjbGFzc05hbWU9e1N0eWxlLnNlbmRNZXNzYWdlQnRufSA+PFNlbnRTdmc+PC9TZW50U3ZnPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIHRva2VuPXtwcm9wcy50b2tlbn0+PC9OYXZCYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5uYXZCYXJTaG93VXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJCdG5TaWRlTmF2QmFyfSByZWY9e3NpZGVOYXZCYXJCdG59IG9uQ2xpY2s9eygpPT5TaG93U2lkZU5hdkJhcigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5iYXIxfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5iYXIyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5iYXIzfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17c2hvd1NpZGVOYXZCYXI/e21hcmdpblJpZ2h0OlwiMTAwJVwifTp7bWFyZ2luUmlnaHQ6XCIwcHhcIn19IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgc2V0Q29sb3JPZkNoYXQ9e3NldENvbG9yT2ZDaGF0Rm59IGdldFVzZXJkYXRhPXtnZXRVc2VyZGF0YUZufSBrZXk9e2UuX2lkfSAgdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZWFyY2hGb3JVc2VyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPlNlYXJjaCB1c2Vyczwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcblxyXG5cclxuICBjb25zdCBTZW50U3ZnPSgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48ZyBpZD1cIkxheWVyXzk1XCIgZGF0YS1uYW1lPVwiTGF5ZXIgOTVcIj48cGF0aCBkPVwiTTUzLjA2LDEwLjk0YTEuNSwxLjUsMCwwLDAtMS41My0uMzZsLTQwLDEzLjMzYTEuNTEsMS41MSwwLDAsMC0uMDYsMi44M2wxOC43LDcuMDksNy4wOSwxOC43YTEuNTEsMS41MSwwLDAsMCwxLjQ0LDEsMS40OSwxLjQ5LDAsMCwwLDEuMzktMWwxMy4zMy00MEExLjUsMS41LDAsMCwwLDUzLjA2LDEwLjk0WlwiLz48cGF0aCBkPVwiTTIwLjIyLDM1LjQ4YTEuNSwxLjUsMCwwLDAtMi4xMi0yLjEybC00LjQ4LDQuNDhhMS41MSwxLjUxLDAsMCwwLDAsMi4xMiwxLjQ5LDEuNDksMCwwLDAsMi4xMiwwWlwiLz48cGF0aCBkPVwiTTIzLjg4LDQwLjEyYTEuNDksMS40OSwwLDAsMC0yLjEyLDBMMTYuMDgsNDUuOGExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw1LjY4LTUuNjhBMS40OSwxLjQ5LDAsMCwwLDIzLjg4LDQwLjEyWlwiLz48cGF0aCBkPVwiTTI4LjUyLDQzLjc4LDI0LDQ4LjI2YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDQuNDgtNC40OEExLjUsMS41LDAsMCwwLDI4LjUyLDQzLjc4WlwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgKVxyXG4gIH1cclxuICBjb25zdCBVc2Vycz0ocHJvcHMpPT57XHJcbiAgICBcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApLHByb3BzLnNldENvbG9yT2ZDaGF0KHByb3BzLnVzZXJEYXRhLmNvbG9yKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PHA+e3Byb3BzLnVzZXJEYXRhLnVzZXJOYW1lfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbG9yUGlja2VyPShwcm9wcyk9PntcclxuICAgIGNvbnN0IFtvcGVuQ29sb3JQaWNrZXIsc2V0T3BlbkNvbG9yUGlja2VyXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGNoYW5nZVByaW1hcnlDb2xvcj0oY29sb3IpPT57XHJcbiAgICAgICAgcHJvcHMuZ2V0TmV3Q29sb3Jmbihjb2xvcilcclxuICAgICAgICB1cGRhdGVDb2xvckNoYXQoe25ld0NvbG9yOmNvbG9yLHJlY2VpdmVyOnByb3BzLnJlY2VpdmVyfSxwcm9wcy50b2tlbilcclxuICAgIH1cclxuICAgIHJldHVybig8ZGl2IG9uQ2xpY2s9eygpPT5zZXRPcGVuQ29sb3JQaWNrZXIoZT0+IWUpfSBjbGFzc05hbWU9e1N0eWxlLmNoYXRDb2xvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6cHJvcHMuY2hhdENvbG9yLmNvbG9yb25lfX0+XHJcbiAgICAgICAge29wZW5Db2xvclBpY2tlciYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yUGlja2VyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjE3NDRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmMTc0NFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZjUwMDU3XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmNTAwNTdcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzNkNWFmZVwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjM2Q1YWZlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiM3NmZmMDNcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzc2ZmYwM1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjYzZmZjAwXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNjNmZmMDBcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmM2QwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmYzZDAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiM2NTFmZmZcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzY1MWZmZlwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmZlYTAwXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZmVhMDBcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2Y1MDA1N1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZjUwMDU3XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjE3NDRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmMTc0NFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjMWRlOWI2XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiMxZGU5YjZcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzAzYTlmNFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMDNhOWY0XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcSxyZXN9KSB7XHJcblxyXG4gICAgcmV0dXJuIHJlcS5jb29raWVzLnRva2VuID97cHJvcHM6IHt0b2tlbjpyZXEuY29va2llcy50b2tlbn19OntyZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogJy8nLCBwZXJtYW5lbnQ6IGZhbHNlLCB9fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==