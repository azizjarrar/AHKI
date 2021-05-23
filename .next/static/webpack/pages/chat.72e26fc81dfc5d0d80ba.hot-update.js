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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcyJdLCJuYW1lcyI6WyJjaGF0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJjdXJyZW50SW1hZ2VVcmwiLCJ1bmRlZmluZWQiLCJ1c2VyTmFtZSIsIl9pZCIsImN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsInNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY3VycmVudENoYXRzIiwic2V0Q3VycmVudENoYXRzIiwibWVzc2FnZXNDb21wIiwidXNlUmVmIiwidXNlQ29udGV4dCIsInVzZXJDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJzb2NrZXRDb250ZXh0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImNoYXRDb2xvciIsInNldENoYXRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJzaG93U2lkZU5hdkJhciIsInNldFNob3dTaWRlTmF2QmFyIiwic2lkZU5hdkJhckJ0biIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uIiwic2Vjb25kVXNlciIsInRva2VuIiwidGhlbiIsImRhdGEiLCJlIiwicmV2ZXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImdldFVzZXJXaG9DaGF0V2l0aCIsInJlc3VsdCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsIm1hcCIsImZpcnN0VXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vjb3VuZFVzZXIiLCJjb2xvciIsIm5vdFNlZW5NZXNzYWdlTnVtYmVyIiwiYWxsIiwibmV3YXJyYXkiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZW1pdCIsInN0YXRlIiwib3RoZXJVc2VySWQiLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5Iiwic2VuZGVySWQiLCJMaXN0T2ZVc2VyIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInVzZXJzIiwidGV4dCIsImlzV3JpdGluZyIsInVzZXJXaG9SZWNpdmVXcml0aW5nIiwic2VuZGVyaWQiLCJzZXR2dSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlIiwieW91ck1lc3NhZ2VWdSIsImkiLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJvbiIsIm9mZiIsImFkZEVtb2ppIiwic3ltIiwidW5pZmllZCIsInNwbGl0IiwiY29kZXNBcnJheSIsImZvckVhY2giLCJlbCIsInB1c2giLCJlbW9qaSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyIiwic2VhcmNoRm9yVXNlciIsInNlYXJjaFVzZXJOYW1lQXBpIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRVc2VyZGF0YUZuIiwiY3VycmVudFVzZXJEYXRhIiwic2VuZE1lc3NhZ2UiLCJhZGRNZXNzYWdlIiwicmVjZWl2ZXIiLCJGaXJzdFRpbWUiLCJtZXNzYWdlSGFuZGxlciIsInNjcm9sbGZuIiwiZ2V0TmV3Q29sb3IiLCJzZXRDb2xvck9mQ2hhdEZuIiwiY29sb3JPZkNoYXRGcm9tRGF0YUJhc2UiLCJTaG93U2lkZU5hdkJhciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoYW5nZSIsImNvbnRhaW5lciIsImNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXIiLCJVc2VyQ29udGFuZXIiLCJoZWFkZXIiLCJsaXN0Q29udGFjcyIsImJvdHRvbSIsInNlYXJjaENvbnRhaW5lciIsImlucHV0Y3NzIiwiY2hhdENvbnRhaW5lciIsImhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZSIsInVzZXJJbWFnZUNvbnRhaW5lciIsImlzV3JpdGluZ0NvbnRhaW5lciIsImxkc2VsbGlwc2lzIiwiY2hhbmdlQ29sb3JDb250YWluZXIiLCJtZXNzYWdlcyIsIm9uZU1lc3NhZ2UiLCJtZXNzYWdlVGV4dCIsImRhdGUiLCJzbGljZSIsImJhY2tncm91bmRDb2xvciIsInNlZW4iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Q29udGFpbmVyIiwiYnRucyIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJpZCIsInNraW4iLCJlbW9qaVBpY2tlckNvbnRhaW5lciIsImJ0bnNlbmQiLCJzZW5kTWVzc2FnZUJ0biIsIm5hdkJhclNob3dVc2VyIiwiY29udGFpbmVyQnRuU2lkZU5hdkJhciIsImJhcjEiLCJiYXIyIiwiYmFyMyIsIlNlbnRTdmciLCJVc2VycyIsInVzZXJEYXRhIiwibm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsInNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWwiLCJ1c2VyQ29udGFpbmVyIiwiZ2V0VXNlcmRhdGEiLCJzZXRDb2xvck9mQ2hhdCIsIm5vdFNlZW5NZXNzYWdlTnVtYmUiLCJpbWdDb250YWluZXIiLCJDb2xvclBpY2tlciIsIm9wZW5Db2xvclBpY2tlciIsInNldE9wZW5Db2xvclBpY2tlciIsImNoYW5nZVByaW1hcnlDb2xvciIsImdldE5ld0NvbG9yZm4iLCJ1cGRhdGVDb2xvckNoYXQiLCJuZXdDb2xvciIsImNvbG9yUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtB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SyxFQUFFO0FBQUM5Qix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUVSxlQVVWO0FBQUssaUJBQVMsRUFBRXpELCtEQUFLLENBQUM5QixLQUF0QjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBSXFILGtCQUFrQixDQUFDLFNBQUQsQ0FBdEI7QUFBQSxTQUF0QztBQUF5RSxhQUFLLEVBQUU7QUFBQzlCLHlCQUFlLEVBQUM7QUFBakI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZVLGVBV1Y7QUFBSyxpQkFBUyxFQUFFekQsK0RBQUssQ0FBQzlCLEtBQXRCO0FBQTZCLGVBQU8sRUFBRTtBQUFBLGlCQUFJcUgsa0JBQWtCLENBQUMsU0FBRCxDQUF0QjtBQUFBLFNBQXRDO0FBQXlFLGFBQUssRUFBRTtBQUFDOUIseUJBQWUsRUFBQztBQUFqQjtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWFUsZUFZVjtBQUFLLGlCQUFTLEVBQUV6RCwrREFBSyxDQUFDOUIsS0FBdEI7QUFBNkIsZUFBTyxFQUFFO0FBQUEsaUJBQUlxSCxrQkFBa0IsQ0FBQyxTQUFELENBQXRCO0FBQUEsU0FBdEM7QUFBeUUsYUFBSyxFQUFFO0FBQUM5Qix5QkFBZSxFQUFDO0FBQWpCO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFtQkgsQ0F6QkQ7O0lBQU0yQixXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuNzJlMjZmYzgxZGZjNWQwZDgwYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlcy9jaGF0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IHsgUGlja2VyLEVtb2ppICB9IGZyb20gJ2Vtb2ppLW1hcnQnXHJcbmltcG9ydCAnZW1vamktbWFydC9jc3MvZW1vamktbWFydC5jc3MnXHJcbmltcG9ydCB7c2VhcmNoVXNlck5hbWVBcGl9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCB7dXBkYXRlQ29sb3JDaGF0LGFkZE1lc3NhZ2UsZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24sZ2V0VXNlcldob0NoYXRXaXRofSBmcm9tICcuLi9zZXJ2aWNlcy9jaGF0JztcclxuaW1wb3J0IHNvY2tldENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zb2NrZXRDb250ZXh0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuXHJcbmNvbnN0IGNoYXQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlLHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbRW1vamlDb250YWluZXJIZWlnaHQsIHNldEVtb2ppQ29udGFpbmVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDkpLy9yZXNwb25zaXZlIGhhbmRsZXJcclxuICAgIGNvbnN0IFtsaXN0T2ZVc2VycyxzZXRMaXN0T2ZVc2Vyc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY3VycmVudFVzZXJUb0NoYXRXaXRoLHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aF09UmVhY3QudXNlU3RhdGUoe2N1cnJlbnRJbWFnZVVybDp1bmRlZmluZWQsdXNlck5hbWU6dW5kZWZpbmVkLF9pZDp1bmRlZmluZWR9KVxyXG4gICAgY29uc3QgW21lc3NhZ2Usc2V0TWVzc2FnZV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjdXJyZW50Q2hhdHMsc2V0Q3VycmVudENoYXRzXT1SZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IG1lc3NhZ2VzQ29tcD1SZWFjdC51c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbc29ja2V0LHNldFNvY2tldF09UmVhY3QudXNlQ29udGV4dChzb2NrZXRDb250ZXh0KVxyXG4gICAgY29uc3QgW3NraXAsc2V0U2tpcF09UmVhY3QudXNlU3RhdGUoKCk9PjApXHJcbiAgICBjb25zdCBbaXNXcml0aW5nU3RhdGUsc2V0SXNXcml0aW5nU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NoYXRDb2xvcixzZXRDaGF0Q29sb3JdPVJlYWN0LnVzZVN0YXRlKHtjb2xvcm9uZTpcIiMxODc2ZjNcIixjb2xvcnR3bzpcIiNlNGU2ZWJcIn0pXHJcbiAgICBjb25zdCBbaGVpZ2h0QW5kV2lkdGhPZldpbmRvdywgc2V0SGVpZ2h0QW5kV2lkdGhPZldpbmRvd10gPSBSZWFjdC51c2VTdGF0ZSh7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW3Nob3dTaWRlTmF2QmFyLHNldFNob3dTaWRlTmF2QmFyXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHNpZGVOYXZCYXJCdG4gPSBSZWFjdC51c2VSZWYobnVsbClcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKioqKioqKioqKioqdXNlRWZmZWN0cyoqKioqKioqKioqL1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgc2V0SGVpZ2h0QW5kV2lkdGhPZldpbmRvdyh7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfSkgXHJcbiAgICB9LFtdKVxyXG4gICAgLy93aGVuIHlvdSBzY3JvbCB0b3Agb24gY29udmVydGF0aW9uIGl0IHdpbGwgbG9hZCBuZXcgMjAgbWVzc2FnZVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24oe3NlY29uZFVzZXI6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxza2lwOnNraXB9LHByb3BzLnRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT5bLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpLC4uLmVdKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxbc2tpcF0pXHJcblxyXG4gICAgICAvLyBnZXQgbGlzdCBvZiB1c2VycyAgeW91IGNoYXQgd2l0aFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodXNlci5faWQhPXVuZGVmaW5lZCYmIHVzZXIuX2lkLmxlbmd0aD4yKVxyXG4gICAgICAgIGdldFVzZXJXaG9DaGF0V2l0aCh7fSxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgbGV0IG5ld1VzZXJXaG9DaGF0V2l0aD1yZXN1bHQuZGF0YS5kYXRhLm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMgdG8gcmV0dXJuIHRoZSBkYXRhIG9mIHRoZSBvdGhlciB1c2VyIG5vdCB5b3VyIGRhdGEgYmVjYXVzZSBpbSByZXR1cm4gYm90aCBvZiBkYXRhIHNlbmRlciBhbmQgcmVjaXZlciBcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsY29sb3I6ZS5jb2xvcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuZmlyc3RVc2VyLGNvbG9yOmUuY29sb3Isbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChuZXdVc2VyV2hvQ2hhdFdpdGgpLnRoZW4obmV3YXJyYXk9PntcclxuICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhbLi4ubmV3YXJyYXldKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICBcclxuICAgICAgICAgIH0pLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUubWVzc2FnZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuXHJcbiAgICAvL3doZW4geW91IGNsaWNrIG9uIHVzZXIgaXQgd2lsbCBsb2FkIGNvbnZlcnRhdGlvbiBkYXRhXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6MH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoWy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKV0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy93aGVuIHlvdSBvcGVuIGNvbnZlcnRhdGlvbiBpdHMgd2lsbCBtYWtlIGFsbCBtZXNzZ2FnZSBzZWVuXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxbY3VycmVudFVzZXJUb0NoYXRXaXRoXSlcclxuXHJcbiAgICAvL3NvY2tldCByZWNldmluZyBkYXRhIGhhbmRsZXJcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vb24gcmVjaXZpbmcgbWVzc3NhZ2Ugc29ja2V0XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9tc2dTb3VuZC5tcDNcIilcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpXHJcbiAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgICAgICAgICAvL3NldCB2dSBpZiB5b3UgYXJlIGluIGNvbnZlcmF0aW9uIFxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInZ1XCIse3N0YXRlOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZH0pXHJcbiAgICAgICAgICAgIC8vaWYgeW91IGFyZSBub3QgaW4gY29udmVydGlvbiBhZGQgKzEgdG8gbWVzc2FnZSBub3QgcmVhZCBpbiB1c2VyIGltYWdlXHJcbiAgICAgICAgICAgIGxldCBMaXN0T2ZVc2VyID0gYXdhaXQgbGlzdE9mVXNlcnMubWFwKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09ZS5faWQgJiYgY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9ZS5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUubm90U2Vlbk1lc3NhZ2VOdW1iZXI9ZS5ub3RTZWVuTWVzc2FnZU51bWJlcisxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChMaXN0T2ZVc2VyKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9hZGQgbWVzc2FnZSB0byBjaGF0XHJcbiAgICAgICAgICAgIGlmKGRhdGEuc2VuZGVySWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W2RhdGEuc2VuZGVySWRdLG1lc3NhZ2U6ZGF0YS50ZXh0LF9pZDpyfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiB0aGUgb3RoZXIgdXNlciBpcyB3cnRpbmcgYWRkIGFuaW1hdGlvbiBpZiB3cnRpbmdcclxuICAgICAgICBmdW5jdGlvbiBpc1dyaXRpbmcoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGRhdGEudXNlcldob1JlY2l2ZVdyaXRpbmc9PXVzZXIuX2lkICYmIGRhdGEuc2VuZGVyaWQ9PWN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQpe1xyXG4gICAgICAgICAgICAgICAgc2V0SXNXcml0aW5nU3RhdGUoZGF0YS5pc1dyaXRpbmcpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIG90aGVyIHVzZXIgaGFzIHNlZW4geW91IG1lc3NhZ2Ugc2VlbiBpY29uIHdpbGwgYmUgYmx1ZVxyXG4gICAgICAgIGNvbnN0IHNldHZ1PShkYXRhKT0+e1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlLnlvdXJNZXNzYWdlVnUpLmxlbmd0aCE9MCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudENoYXRzLmxlbmd0aC0xOyBpPjA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0hPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvciE9XCJyZ2IoMjQsIDExOCwgMjQzKVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSlbaV0uY2hpbGROb2Rlc1sxXS5zdHlsZS5jb2xvcj1cInJnYigyNCwgMTE4LCAyNDMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICBzb2NrZXQub24oXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICBzb2NrZXQub24oXCJnZXRNZXNzYWdlRnJvbVVzZXJUb1VzZXJcIixjaGF0SGFuZGxlcilcclxuICAgICAgICBzb2NrZXQub24oXCJzZXR2dVwiLHNldHZ1KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE1lc3NhZ2VGcm9tVXNlclRvVXNlcicsIGNoYXRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJpc1dyaXRpbmdTdGF0ZVwiLGlzV3JpdGluZylcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoXCJzZXR2dVwiLHNldHZ1KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9hZGQgZW1vamkgdG8gaW5wdXRcclxuICAgIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgICAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgICAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoZWw9PntyZXR1cm4gZWwrZW1vaml9KVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy9jbG9zZSBvciBvcGVuIGVtb2ppIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9zZWFyY2ggZm9yIHVzZXIgdG8gc2VuZCBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHNlYXJjaEZvclVzZXI9KGUpPT57XHJcbiAgICAgICAgICAgIHNlYXJjaFVzZXJOYW1lQXBpKGUudGFyZ2V0LnZhbHVlLHByb3BzLnRva2VuKS50aGVuKChyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnJlc3VsdC5kYXRhLmRhdGFdXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL29uIGNsaWNrIG9uIHVzZXIgZ2V0IGN1cnJlbnQgdXNlciBkYXRhXHJcbiAgICAgIGNvbnN0IGdldFVzZXJkYXRhRm49KGN1cnJlbnRVc2VyRGF0YSk9PntcclxuICAgICAgICBzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGgoY3VycmVudFVzZXJEYXRhKVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2U9KCk9PntcclxuICAgICAgICBpZihtZXNzYWdlLmxlbmd0aD4wJiZjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGFkZE1lc3NhZ2Uoe3JlY2VpdmVyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsbWVzc2FnZTptZXNzYWdlLEZpcnN0VGltZTpjdXJyZW50Q2hhdHMubGVuZ3RofSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W3VzZXIuX2lkXSxtZXNzYWdlOm1lc3NhZ2UsX2lkOnJ9XVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIse290aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsdGV4dDptZXNzYWdlLHNlbmRlcklkOnVzZXIuX2lkfSlcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIilcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgICAgaWYoY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOnRydWUsb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxzZW5kZXJpZDp1c2VyLl9pZH0pXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImlzV3JpdGluZ1wiLHtpc1dyaXRpbmc6ZmFsc2Usb3RoZXJVc2VySWQ6Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCxzZW5kZXJpZDp1c2VyLl9pZH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICAvL29uIHNjcm9sIHRvIHRvcCBsb2FkIDIwIG5ldyBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHNjcm9sbGZuPShlKT0+e1xyXG4gICAgICAgICAgLy9pZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0KSl7XHJcbiAgICAgICAgICBpZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgc2V0U2tpcChlPT5lKzIwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy9pZiB5b3UgY2hhbmdlIHRoZSBjb2xvciBvZiBjb252ZXJhdGlvblxyXG4gICAgICBjb25zdCBnZXROZXdDb2xvcj0oY29sb3IpPT57XHJcbiAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntyZXR1cm4gey4uLmUsY29sb3JvbmU6Y29sb3J9fSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9zZXQgY29sb3IgaWYgY29udmVydGF0aW9uXHJcbiAgICAgIGNvbnN0IHNldENvbG9yT2ZDaGF0Rm49KGNvbG9yT2ZDaGF0RnJvbURhdGFCYXNlKT0+e1xyXG4gICAgICAgIGlmKGNvbG9yT2ZDaGF0RnJvbURhdGFCYXNlPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBzZXRDaGF0Q29sb3IoZT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuey4uLmUsY29sb3JvbmU6XCIjMTg3NmYzXCJ9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldENoYXRDb2xvcihlPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm57Li4uZSxjb2xvcm9uZTpjb2xvck9mQ2hhdEZyb21EYXRhQmFzZX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgU2hvd1NpZGVOYXZCYXI9KCk9PntcclxuICAgXHJcbiAgICAgICAgc2lkZU5hdkJhckJ0bi5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoU3R5bGUuY2hhbmdlKTtcclxuICAgICAgICBzZXRTaG93U2lkZU5hdkJhcihlPT4hZSlcclxuICAgIH1cclxuICAgICAgaWYgKGhlaWdodEFuZFdpZHRoT2ZXaW5kb3cud2lkdGggPiBoZWlnaHRBbmRXaWR0aE9mV2luZG93LmhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdEFuZFJhbmRvbU9ubGluZVVzZXJDb250YW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGlzdENvbnRhY3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgc2V0Q29sb3JPZkNoYXQ9e3NldENvbG9yT2ZDaGF0Rm59IGdldFVzZXJkYXRhPXtnZXRVc2VyZGF0YUZufSBrZXk9e2UuX2lkfSAgdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZWFyY2hDb250YWluZXJ9PjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dGNzc30+PGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNlYXJjaEZvclVzZXIoZSl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9pbnB1dD48bGFiZWw+PHNwYW4+U2VhcmNoIHVzZXJzPC9zcGFuPjwvbGFiZWw+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e2N1cnJlbnRVc2VyVG9DaGF0V2l0aC5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyTmFtZX0+PGgzPntjdXJyZW50VXNlclRvQ2hhdFdpdGgudXNlck5hbWV9PC9oMz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNlbGxpcHNpc30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGFuZ2VDb2xvckNvbnRhaW5lcn0+PENvbG9yUGlja2VyIHJlY2VpdmVyPXtjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSB0b2tlbj17cHJvcHMudG9rZW59IGdldE5ld0NvbG9yZm49e2dldE5ld0NvbG9yfSBjaGF0Q29sb3I9e2NoYXRDb2xvcn0+PC9Db2xvclBpY2tlcj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvblNjcm9sbD17KGUpPT5zY3JvbGxmbihlKX0gcmVmPXttZXNzYWdlc0NvbXB9IGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Q2hhdHMubWFwKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxkaXYga2V5PXtlLl9pZH0gY2xhc3NOYW1lPXtTdHlsZS5vbmVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnVzZXJzWzBdPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VUZXh0fSB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOlwiZmFsc2VcIn0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZS5tZXNzYWdlVGV4dH0gJHtTdHlsZS55b3VyTWVzc2FnZVZ1fSBgfSAgIHRleHQtZGF0YT17ZS5kYXRlIT11bmRlZmluZWQ/ZS5kYXRlLnNsaWNlKDAsMTApK1wiIFwiK2UuZGF0ZS5zbGljZSgxMSwxNik6XCJmYWxzZVwifSAgc3R5bGU9e3tcIi0taVwiOlwiLTEwMCVcIixmbG9hdDpcInJpZ2h0XCIsYmFja2dyb3VuZENvbG9yOmNoYXRDb2xvci5jb2xvcm9uZSxjb2xvcjpcIndoaXRlXCJ9fT48cD57ZS5tZXNzYWdlfTwvcD48c3BhbiAgc3R5bGU9e2Uuc2Vlbj09dHJ1ZT97Y29sb3I6XCIjMTg3NmYzXCJ9Ontjb2xvcjpcImJsYWNrXCJ9fSBjbGFzc05hbWU9e1N0eWxlLnNlZW59ID4mIzEwMDA0Ozwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2U9PmUucHJldmVudERlZmF1bHQoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCAgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5vcGVuT3JDbG9zZUVtb2ppUGlja2VyfSBvbkNsaWNrPXsoKT0+Y2xvc2VPck9wZW5FbW9qaVBpY2tlcigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciB0b2tlbj17cHJvcHMudG9rZW59PjwvTmF2QmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubmF2QmFyU2hvd1VzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyQnRuU2lkZU5hdkJhcn0gcmVmPXtzaWRlTmF2QmFyQnRufSBvbkNsaWNrPXsoKT0+U2hvd1NpZGVOYXZCYXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYmFyMX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYmFyMn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYmFyM30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDb250YW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPmNvbnRhY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIHNldENvbG9yT2ZDaGF0PXtzZXRDb2xvck9mQ2hhdEZufSBnZXRVc2VyZGF0YT17Z2V0VXNlcmRhdGFGbn0ga2V5PXtlLl9pZH0gIHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhdFxyXG5cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWxdPVJlYWN0LnVzZVN0YXRlKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICB9LFtwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcl0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckNvbnRhaW5lcn0gb25DbGljaz17KCk9Pntwcm9wcy5nZXRVc2VyZGF0YShwcm9wcy51c2VyRGF0YSksc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCgwKSxwcm9wcy5zZXRDb2xvck9mQ2hhdChwcm9wcy51c2VyRGF0YS5jb2xvcil9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCE9MCYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdFNlZW5NZXNzYWdlTnVtYmV9PjxzcGFuPntub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsfTwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtTdHlsZS5pbWdDb250YWluZXJ9PjxpbWcgc3JjPXtwcm9wcy51c2VyRGF0YS5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb2xvclBpY2tlcj0ocHJvcHMpPT57XHJcbiAgICBjb25zdCBbb3BlbkNvbG9yUGlja2VyLHNldE9wZW5Db2xvclBpY2tlcl09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBjaGFuZ2VQcmltYXJ5Q29sb3I9KGNvbG9yKT0+e1xyXG4gICAgICAgIHByb3BzLmdldE5ld0NvbG9yZm4oY29sb3IpXHJcbiAgICAgICAgdXBkYXRlQ29sb3JDaGF0KHtuZXdDb2xvcjpjb2xvcixyZWNlaXZlcjpwcm9wcy5yZWNlaXZlcn0scHJvcHMudG9rZW4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4oPGRpdiBvbkNsaWNrPXsoKT0+c2V0T3BlbkNvbG9yUGlja2VyKGU9PiFlKX0gY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29sb3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOnByb3BzLmNoYXRDb2xvci5jb2xvcm9uZX19PlxyXG4gICAgICAgIHtvcGVuQ29sb3JQaWNrZXImJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvclBpY2tlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2Y1MDA1N1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZjUwMDU3XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMzZDVhZmVcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzNkNWFmZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNzZmZjAzXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM3NmZmMDNcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2M2ZmYwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjYzZmZjAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjNkMDBcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmM2QwMFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNjUxZmZmXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM2NTFmZmZcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmZWEwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmZlYTAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmNTAwNTdcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2Y1MDA1N1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzFkZTliNlwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMWRlOWI2XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMwM2E5ZjRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzAzYTlmNFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEscmVzfSkge1xyXG5cclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/e3Byb3BzOiB7dG9rZW46cmVxLmNvb2tpZXMudG9rZW59fTp7cmVkaXJlY3Q6IHsgZGVzdGluYXRpb246ICcvJywgcGVybWFuZW50OiBmYWxzZSwgfX1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=