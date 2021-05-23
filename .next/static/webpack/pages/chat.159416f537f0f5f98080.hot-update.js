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
          marginLeft: "100%"
        } : {
          marginLeft: "0px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImNoYXRDb2xvciIsInNldENoYXRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJzaG93U2lkZU5hdkJhciIsInNldFNob3dTaWRlTmF2QmFyIiwic2lkZU5hdkJhckJ0biIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uIiwic2Vjb25kVXNlciIsInRva2VuIiwidGhlbiIsImRhdGEiLCJlIiwicmV2ZXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImdldFVzZXJXaG9DaGF0V2l0aCIsInJlc3VsdCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsIm1hcCIsImZpcnN0VXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vjb3VuZFVzZXIiLCJjb2xvciIsIm5vdFNlZW5NZXNzYWdlTnVtYmVyIiwiYWxsIiwibmV3YXJyYXkiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5Iiwic2VuZGVySWQiLCJMaXN0T2ZVc2VyIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsImlzV3JpdGluZyIsInVzZXJXaG9SZWNpdmVXcml0aW5nIiwic2VuZGVyaWQiLCJzZXR2dSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlIiwieW91ck1lc3NhZ2VWdSIsImkiLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJvbiIsIm9mZiIsImFkZEVtb2ppIiwic3ltIiwidW5pZmllZCIsInNwbGl0IiwiY29kZXNBcnJheSIsImZvckVhY2giLCJlbCIsInB1c2giLCJlbW9qaSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyIiwic2VhcmNoRm9yVXNlciIsInNlYXJjaFVzZXJOYW1lQXBpIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRVc2VyZGF0YUZuIiwiY3VycmVudFVzZXJEYXRhIiwic2VuZE1lc3NhZ2UiLCJhZGRNZXNzYWdlIiwicmVjZWl2ZXIiLCJGaXJzdFRpbWUiLCJtZXNzYWdlSGFuZGxlciIsInNjcm9sbGZuIiwiZ2V0TmV3Q29sb3IiLCJzZXRDb2xvck9mQ2hhdEZuIiwiY29sb3JPZkNoYXRGcm9tRGF0YUJhc2UiLCJTaG93U2lkZU5hdkJhciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoYW5nZSIsImNvbnRhaW5lciIsImNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXIiLCJVc2VyQ29udGFuZXIiLCJoZWFkZXIiLCJsaXN0Q29udGFjcyIsImJvdHRvbSIsInNlYXJjaENvbnRhaW5lciIsImlucHV0Y3NzIiwiY2hhdENvbnRhaW5lciIsImhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZSIsInVzZXJJbWFnZUNvbnRhaW5lciIsImlzV3JpdGluZ0NvbnRhaW5lciIsImxkc2VsbGlwc2lzIiwiY2hhbmdlQ29sb3JDb250YWluZXIiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsInNlZW4iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Q29udGFpbmVyIiwiYnRucyIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJpZCIsInNraW4iLCJlbW9qaVBpY2tlckNvbnRhaW5lciIsImJ0bnNlbmQiLCJzZW5kTWVzc2FnZUJ0biIsIm5hdkJhclNob3dVc2VyIiwiY29udGFpbmVyQnRuU2lkZU5hdkJhciIsImJhcjEiLCJiYXIyIiwiYmFyMyIsIm1hcmdpbkxlZnQiLCJTZW50U3ZnIiwiVXNlcnMiLCJ1c2VyRGF0YSIsIm5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwidXNlckNvbnRhaW5lciIsImdldFVzZXJkYXRhIiwic2V0Q29sb3JPZkNoYXQiLCJub3RTZWVuTWVzc2FnZU51bWJlIiwiaW1nQ29udGFpbmVyIiwiQ29sb3JQaWNrZXIiLCJvcGVuQ29sb3JQaWNrZXIiLCJzZXRPcGVuQ29sb3JQaWNrZXIiLCJjaGFuZ2VQcmltYXJ5Q29sb3IiLCJnZXROZXdDb2xvcmZuIiwidXBkYXRlQ29sb3JDaGF0IiwibmV3Q29sb3IiLCJjb2xvclBpY2tlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBUyxFQUFFekQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJc0gsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDL0IseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVFUsZUFVVjtBQUFLLGlCQUFTLEVBQUV6RCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlzSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUMvQix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWVSxlQVdWO0FBQUssaUJBQVMsRUFBRXpELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXNILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQy9CLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhVLGVBWVY7QUFBSyxpQkFBUyxFQUFFekQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJc0gsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDL0IseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBbUJILENBekJEOztJQUFNNEIsVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjE1OTQxNmY1MzdmMGY1Zjk4MDgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge3VwZGF0ZUNvbG9yQ2hhdCxhZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5jb25zdCBjaGF0ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjaGF0Q29sb3Isc2V0Q2hhdENvbG9yXT1SZWFjdC51c2VTdGF0ZSh7Y29sb3JvbmU6XCIjMTg3NmYzXCIsY29sb3J0d286XCIjZTRlNmViXCJ9KVxyXG4gICAgY29uc3QgW2hlaWdodEFuZFdpZHRoT2ZXaW5kb3csIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ddID0gUmVhY3QudXNlU3RhdGUoeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuICAgIGNvbnN0IFtzaG93U2lkZU5hdkJhcixzZXRTaG93U2lkZU5hdkJhcl09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBzaWRlTmF2QmFyQnRuID0gUmVhY3QudXNlUmVmKG51bGwpXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKioqKioqKioqKioqKnVzZUVmZmVjdHMqKioqKioqKioqKi9cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3coeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pIFxyXG4gICAgfSxbXSlcclxuICAgIC8vd2hlbiB5b3Ugc2Nyb2wgdG9wIG9uIGNvbnZlcnRhdGlvbiBpdCB3aWxsIGxvYWQgbmV3IDIwIG1lc3NhZ2VcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDpza2lwfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sW3NraXBdKVxyXG5cclxuICAgICAgLy8gZ2V0IGxpc3Qgb2YgdXNlcnMgIHlvdSBjaGF0IHdpdGhcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHVzZXIuX2lkIT11bmRlZmluZWQmJiB1c2VyLl9pZC5sZW5ndGg+MilcclxuICAgICAgICBnZXRVc2VyV2hvQ2hhdFdpdGgoe30scHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VyV2hvQ2hhdFdpdGg9cmVzdWx0LmRhdGEuZGF0YS5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgLy90aGlzIHRvIHJldHVybiB0aGUgZGF0YSBvZiB0aGUgb3RoZXIgdXNlciBub3QgeW91ciBkYXRhIGJlY2F1c2UgaW0gcmV0dXJuIGJvdGggb2YgZGF0YSBzZW5kZXIgYW5kIHJlY2l2ZXIgXHJcbiAgICAgICAgICAgICAgICBpZihlLmZpcnN0VXNlci5faWQ9PXVzZXIuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLnNlY291bmRVc2VyLGNvbG9yOmUuY29sb3Isbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsuLi5lLmZpcnN0VXNlcixjb2xvcjplLmNvbG9yLG5vdFNlZW5NZXNzYWdlTnVtYmVyOmUubm90U2Vlbk1lc3NhZ2VOdW1iZXJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwobmV3VXNlcldob0NoYXRXaXRoKS50aGVuKG5ld2FycmF5PT57XHJcbiAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoWy4uLm5ld2FycmF5XSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICAgICAgICB9KS5jYXRjaChlPT5jb25zb2xlLmxvZyhlLm1lc3NhZ2UpKVxyXG4gICAgfSxbdXNlcl0pXHJcblxyXG4gICAgLy93aGVuIHlvdSBjbGljayBvbiB1c2VyIGl0IHdpbGwgbG9hZCBjb252ZXJ0YXRpb24gZGF0YVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOjB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKFsuLi5kYXRhLmRhdGEuZGF0YS5yZXZlcnNlKCldKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiB5b3Ugb3BlbiBjb252ZXJ0YXRpb24gaXRzIHdpbGwgbWFrZSBhbGwgbWVzc2dhZ2Ugc2VlblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcblxyXG4gICAgLy9zb2NrZXQgcmVjZXZpbmcgZGF0YSBoYW5kbGVyXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvL29uIHJlY2l2aW5nIG1lc3NzYWdlIHNvY2tldFxyXG4gICAgICAgIGFzeW5jICBmdW5jdGlvbiAgY2hhdEhhbmRsZXIoZGF0YSl7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgLy9zZXQgdnUgaWYgeW91IGFyZSBpbiBjb252ZXJhdGlvbiBcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG4gICAgICAgICAgICAvL2lmIHlvdSBhcmUgbm90IGluIGNvbnZlcnRpb24gYWRkICsxIHRvIG1lc3NhZ2Ugbm90IHJlYWQgaW4gdXNlciBpbWFnZVxyXG4gICAgICAgICAgICBsZXQgTGlzdE9mVXNlciA9IGF3YWl0IGxpc3RPZlVzZXJzLm1hcCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWUuX2lkICYmIGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPWUuX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICBlLm5vdFNlZW5NZXNzYWdlTnVtYmVyPWUubm90U2Vlbk1lc3NhZ2VOdW1iZXIrMVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoTGlzdE9mVXNlcikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vYWRkIG1lc3NhZ2UgdG8gY2hhdFxyXG4gICAgICAgICAgICBpZihkYXRhLnNlbmRlcklkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENoYXRzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOltkYXRhLnNlbmRlcklkXSxtZXNzYWdlOmRhdGEudGV4dCxfaWQ6cn1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsVG9wPW1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbEhlaWdodCsgbWVzc2FnZXNDb21wLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgdGhlIG90aGVyIHVzZXIgaXMgd3J0aW5nIGFkZCBhbmltYXRpb24gaWYgd3J0aW5nXHJcbiAgICAgICAgZnVuY3Rpb24gaXNXcml0aW5nKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnVzZXJXaG9SZWNpdmVXcml0aW5nPT11c2VyLl9pZCAmJiBkYXRhLnNlbmRlcmlkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGRhdGEuaXNXcml0aW5nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBvdGhlciB1c2VyIGhhcyBzZWVuIHlvdSBtZXNzYWdlIHNlZW4gaWNvbiB3aWxsIGJlIGJsdWVcclxuICAgICAgICBjb25zdCBzZXR2dT0oZGF0YSk9PntcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KS5sZW5ndGghPTApe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRDaGF0cy5sZW5ndGgtMTsgaT4wOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3IhPVwicmdiKDI0LCAxMTgsIDI0MylcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpW2ldLmNoaWxkTm9kZXNbMV0uc3R5bGUuY29sb3I9XCJyZ2IoMjQsIDExOCwgMjQzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0dnVcIixzZXR2dSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXInLCBjaGF0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwiaXNXcml0aW5nU3RhdGVcIixpc1dyaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub2ZmKFwic2V0dnVcIixzZXR2dSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vYWRkIGVtb2ppIHRvIGlucHV0XHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vY2xvc2Ugb3Igb3BlbiBlbW9qaSBjb250YWluZXJcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vc2VhcmNoIGZvciB1c2VyIHRvIHNlbmQgbWVzc2FnZVxyXG4gICAgICBjb25zdCBzZWFyY2hGb3JVc2VyPShlKT0+e1xyXG4gICAgICAgICAgICBzZWFyY2hVc2VyTmFtZUFwaShlLnRhcmdldC52YWx1ZSxwcm9wcy50b2tlbikudGhlbigocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RPZlVzZXJzKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQuZGF0YS5kYXRhXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9vbiBjbGljayBvbiB1c2VyIGdldCBjdXJyZW50IHVzZXIgZGF0YVxyXG4gICAgICBjb25zdCBnZXRVc2VyZGF0YUZuPShjdXJyZW50VXNlckRhdGEpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoKGN1cnJlbnRVc2VyRGF0YSlcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNvbnN0IHNlbmRNZXNzYWdlPSgpPT57XHJcbiAgICAgICAgaWYobWVzc2FnZS5sZW5ndGg+MCYmY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICBhZGRNZXNzYWdlKHtyZWNlaXZlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLG1lc3NhZ2U6bWVzc2FnZSxGaXJzdFRpbWU6Y3VycmVudENoYXRzLmxlbmd0aH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmUse3VzZXJzOlt1c2VyLl9pZF0sbWVzc2FnZTptZXNzYWdlLF9pZDpyfV1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgLy9vbiBzY3JvbCB0byB0b3AgbG9hZCAyMCBuZXcgbWVzc2FnZVxyXG4gICAgICBjb25zdCBzY3JvbGxmbj0oZSk9PntcclxuICAgICAgICAgIC8vaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCAtIGUudGFyZ2V0Lm9mZnNldEhlaWdodCkpe1xyXG4gICAgICAgICAgaWYoIGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNldFNraXAoZT0+ZSsyMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vaWYgeW91IGNoYW5nZSB0aGUgY29sb3Igb2YgY29udmVyYXRpb25cclxuICAgICAgY29uc3QgZ2V0TmV3Q29sb3I9KGNvbG9yKT0+e1xyXG4gICAgICAgIHNldENoYXRDb2xvcihlPT57cmV0dXJuIHsuLi5lLGNvbG9yb25lOmNvbG9yfX0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vc2V0IGNvbG9yIGlmIGNvbnZlcnRhdGlvblxyXG4gICAgICBjb25zdCBzZXRDb2xvck9mQ2hhdEZuPShjb2xvck9mQ2hhdEZyb21EYXRhQmFzZSk9PntcclxuICAgICAgICBpZihjb2xvck9mQ2hhdEZyb21EYXRhQmFzZT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntcclxuICAgICAgICAgICAgICAgIHJldHVybnsuLi5lLGNvbG9yb25lOlwiIzE4NzZmM1wifVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRDaGF0Q29sb3IoZT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuey4uLmUsY29sb3JvbmU6Y29sb3JPZkNoYXRGcm9tRGF0YUJhc2V9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IFNob3dTaWRlTmF2QmFyPSgpPT57XHJcbiAgIFxyXG4gICAgICAgIHNpZGVOYXZCYXJCdG4uY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKFN0eWxlLmNoYW5nZSk7XHJcbiAgICAgICAgc2V0U2hvd1NpZGVOYXZCYXIoZT0+IWUpXHJcbiAgICB9XHJcbiAgICAgIGlmIChoZWlnaHRBbmRXaWR0aE9mV2luZG93LndpZHRoID4gaGVpZ2h0QW5kV2lkdGhPZldpbmRvdy5oZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIHRva2VuPXtwcm9wcy50b2tlbn0+PC9OYXZCYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDb250YW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmNvbnRhY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIHNldENvbG9yT2ZDaGF0PXtzZXRDb2xvck9mQ2hhdEZufSBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gIHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZWFyY2hGb3JVc2VyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPlNlYXJjaCB1c2Vyczwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VySW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPXtjdXJyZW50VXNlclRvQ2hhdFdpdGguY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JpdGluZ1N0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaXNXcml0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGRzZWxsaXBzaXN9PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhbmdlQ29sb3JDb250YWluZXJ9PjxDb2xvclBpY2tlciByZWNlaXZlcj17Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0gdG9rZW49e3Byb3BzLnRva2VufSBnZXROZXdDb2xvcmZuPXtnZXROZXdDb2xvcn0gY2hhdENvbG9yPXtjaGF0Q29sb3J9PjwvQ29sb3JQaWNrZXI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25TY3JvbGw9eyhlKT0+c2Nyb2xsZm4oZSl9IHJlZj17bWVzc2FnZXNDb21wfSBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENoYXRzLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17ZS5faWR9IGNsYXNzTmFtZT17U3R5bGUub25lTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS51c2Vyc1swXT09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlVGV4dH0gdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpcImZhbHNlXCJ9ICBzdHlsZT17e1wiLS1pXCI6XCIwJVwiLGZsb2F0OlwibGVmdFwiLGJhY2tncm91bmRDb2xvcjpcIiNlNGU2ZWJcIixjb2xvcjpcImJsYWNrXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGUubWVzc2FnZVRleHR9ICR7U3R5bGUueW91ck1lc3NhZ2VWdX0gYH0gICB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOlwiZmFsc2VcIn0gIHN0eWxlPXt7XCItLWlcIjpcIi0xMDAlXCIsZmxvYXQ6XCJyaWdodFwiLGJhY2tncm91bmRDb2xvcjpjaGF0Q29sb3IuY29sb3JvbmUsY29sb3I6XCJ3aGl0ZVwifX0+PHA+e2UubWVzc2FnZX08L3A+PHNwYW4gIHN0eWxlPXtlLnNlZW49PXRydWU/e2NvbG9yOlwiIzE4NzZmM1wifTp7Y29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPXtTdHlsZS5zZWVufSA+JiMxMDAwNDs8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlbmRNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpPT5tZXNzYWdlSGFuZGxlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5NZXNzYWdlPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1vamlQaWNrZXJDb250YWluZXJ9PjxQaWNrZXIgcGVyTGluZT17RW1vamlDb250YWluZXJIZWlnaHR9IG9uU2VsZWN0PXsoZSk9PmFkZEVtb2ppKGUpfSAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17U3R5bGUuYnRuc2VuZH0gb25DbGljaz17KCk9PnNlbmRNZXNzYWdlKCl9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2VCdG59ID48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5hdkJhclNob3dVc2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lckJ0blNpZGVOYXZCYXJ9IHJlZj17c2lkZU5hdkJhckJ0bn0gb25DbGljaz17KCk9PlNob3dTaWRlTmF2QmFyKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJhcjF9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJhcjJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJhcjN9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlPXtzaG93U2lkZU5hdkJhcj97bWFyZ2luTGVmdDpcIjEwMCVcIn06e21hcmdpbkxlZnQ6XCIwcHhcIn19IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgc2V0Q29sb3JPZkNoYXQ9e3NldENvbG9yT2ZDaGF0Rm59IGdldFVzZXJkYXRhPXtnZXRVc2VyZGF0YUZufSBrZXk9e2UuX2lkfSAgdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZWFyY2hGb3JVc2VyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPlNlYXJjaCB1c2Vyczwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0XHJcblxyXG5cclxuICBjb25zdCBTZW50U3ZnPSgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48ZyBpZD1cIkxheWVyXzk1XCIgZGF0YS1uYW1lPVwiTGF5ZXIgOTVcIj48cGF0aCBkPVwiTTUzLjA2LDEwLjk0YTEuNSwxLjUsMCwwLDAtMS41My0uMzZsLTQwLDEzLjMzYTEuNTEsMS41MSwwLDAsMC0uMDYsMi44M2wxOC43LDcuMDksNy4wOSwxOC43YTEuNTEsMS41MSwwLDAsMCwxLjQ0LDEsMS40OSwxLjQ5LDAsMCwwLDEuMzktMWwxMy4zMy00MEExLjUsMS41LDAsMCwwLDUzLjA2LDEwLjk0WlwiLz48cGF0aCBkPVwiTTIwLjIyLDM1LjQ4YTEuNSwxLjUsMCwwLDAtMi4xMi0yLjEybC00LjQ4LDQuNDhhMS41MSwxLjUxLDAsMCwwLDAsMi4xMiwxLjQ5LDEuNDksMCwwLDAsMi4xMiwwWlwiLz48cGF0aCBkPVwiTTIzLjg4LDQwLjEyYTEuNDksMS40OSwwLDAsMC0yLjEyLDBMMTYuMDgsNDUuOGExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw1LjY4LTUuNjhBMS40OSwxLjQ5LDAsMCwwLDIzLjg4LDQwLjEyWlwiLz48cGF0aCBkPVwiTTI4LjUyLDQzLjc4LDI0LDQ4LjI2YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDQuNDgtNC40OEExLjUsMS41LDAsMCwwLDI4LjUyLDQzLjc4WlwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgKVxyXG4gIH1cclxuICBjb25zdCBVc2Vycz0ocHJvcHMpPT57XHJcbiAgICBcclxuICAgICAgY29uc3QgW25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwsc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbF09UmVhY3QudXNlU3RhdGUocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwocHJvcHMudXNlckRhdGEubm90U2Vlbk1lc3NhZ2VOdW1iZXIpXHJcbiAgICAgIH0sW3Byb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyXSlcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmdldFVzZXJkYXRhKHByb3BzLnVzZXJEYXRhKSxzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKDApLHByb3BzLnNldENvbG9yT2ZDaGF0KHByb3BzLnVzZXJEYXRhLmNvbG9yKX19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PHA+e3Byb3BzLnVzZXJEYXRhLnVzZXJOYW1lfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbG9yUGlja2VyPShwcm9wcyk9PntcclxuICAgIGNvbnN0IFtvcGVuQ29sb3JQaWNrZXIsc2V0T3BlbkNvbG9yUGlja2VyXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGNoYW5nZVByaW1hcnlDb2xvcj0oY29sb3IpPT57XHJcbiAgICAgICAgcHJvcHMuZ2V0TmV3Q29sb3Jmbihjb2xvcilcclxuICAgICAgICB1cGRhdGVDb2xvckNoYXQoe25ld0NvbG9yOmNvbG9yLHJlY2VpdmVyOnByb3BzLnJlY2VpdmVyfSxwcm9wcy50b2tlbilcclxuICAgIH1cclxuICAgIHJldHVybig8ZGl2IG9uQ2xpY2s9eygpPT5zZXRPcGVuQ29sb3JQaWNrZXIoZT0+IWUpfSBjbGFzc05hbWU9e1N0eWxlLmNoYXRDb2xvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6cHJvcHMuY2hhdENvbG9yLmNvbG9yb25lfX0+XHJcbiAgICAgICAge29wZW5Db2xvclBpY2tlciYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yUGlja2VyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjE3NDRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmMTc0NFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZjUwMDU3XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmNTAwNTdcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzNkNWFmZVwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjM2Q1YWZlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiM3NmZmMDNcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzc2ZmYwM1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjYzZmZjAwXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNjNmZmMDBcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmM2QwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmYzZDAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiM2NTFmZmZcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzY1MWZmZlwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmZlYTAwXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZmVhMDBcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2Y1MDA1N1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZjUwMDU3XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjE3NDRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmMTc0NFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjMWRlOWI2XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiMxZGU5YjZcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzAzYTlmNFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMDNhOWY0XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcSxyZXN9KSB7XHJcblxyXG4gICAgcmV0dXJuIHJlcS5jb29raWVzLnRva2VuID97cHJvcHM6IHt0b2tlbjpyZXEuY29va2llcy50b2tlbn19OntyZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogJy8nLCBwZXJtYW5lbnQ6IGZhbHNlLCB9fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==