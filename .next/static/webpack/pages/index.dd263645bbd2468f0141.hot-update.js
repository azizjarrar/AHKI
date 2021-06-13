webpackHotUpdate_N_E("pages/index",{

/***/ "./components/publication/publication.js":
/*!***********************************************!*\
  !*** ./components/publication/publication.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _publication_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publication.module.scss */ "./components/publication/publication.module.scss");
/* harmony import */ var _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_publication_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _comment_comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comment/comment */ "./components/comment/comment.js");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! emoji-mart */ "./node_modules/emoji-mart/dist-es/index.js");
/* harmony import */ var _heart_heart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../heart/heart */ "./components/heart/heart.js");
/* harmony import */ var _services_postComments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/postComments */ "./services/postComments.js");
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/post */ "./services/post.js");
/* harmony import */ var _services_post_likes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/post_likes */ "./services/post_likes.js");
/* harmony import */ var _popUpMessage_popUpMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../popUpMessage/popUpMessage */ "./components/popUpMessage/popUpMessage.js");
/* harmony import */ var _showLikesUserNames_showLikesUserNames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../showLikesUserNames/showLikesUserNames */ "./components/showLikesUserNames/showLikesUserNames.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_16__);





var _jsxFileName = "F:\\AHKI\\components\\publication\\publication.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var publication = function publication(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(100),
      _React$useState2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      slice = _React$useState2[0],
      setSlice = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      comments = _React$useState4[0],
      setComments = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      settings = _React$useState6[0],
      setSettings = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      mask = _React$useState8[0],
      setMask = _React$useState8[1];

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useContext, 2),
      language = _React$useContext2[0],
      setLanguage = _React$useContext2[1];

  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      _React$useContext4 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useContext3, 2),
      user = _React$useContext4[0],
      setUser = _React$useContext4[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState10 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      textAreaData = _React$useState10[0],
      setTextAreaData = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState12 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      countLettres = _React$useState12[0],
      setCountLettres = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState14 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      closeOrOpenEmojiPickerState = _React$useState14[0],
      setcloseOrOpenEmojiPickerState = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(9),
      _React$useState16 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      EmojiContainerHeight = _React$useState16[0],
      setEmojiContainerHeight = _React$useState16[1]; //responsive handler


  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([]),
      _React$useState18 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState17, 2),
      commentsData = _React$useState18[0],
      setCommentsData = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState20 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState19, 2),
      skip = _React$useState20[0],
      setSkip = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState22 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState21, 2),
      addsOneToCommentCount = _React$useState22[0],
      setaddOneToCommentCount = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState24 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState23, 2),
      likesModal = _React$useState24[0],
      setLikesModal = _React$useState24[1];

  var maskRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(null);

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState26 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState25, 2),
      moreComments = _React$useState26[0],
      setMoreComments = _React$useState26[1]; //show more comment fetch  with 3 by 3


  var _React$useState27 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState28 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState27, 2),
      coummentNumber = _React$useState28[0],
      setCoummentNumber = _React$useState28[1];

  var _React$useState29 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState30 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState29, 2),
      likesNumber = _React$useState30[0],
      setLikesNumber = _React$useState30[1];

  var _React$useState31 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    state: false,
    text: ""
  }),
      _React$useState32 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState31, 2),
      errorMessage = _React$useState32[0],
      setErrorMessage = _React$useState32[1]; // when state true show  pop up 


  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    if (window.innerWidth > 500) {
      setEmojiContainerHeight(9);
    } else {
      setEmojiContainerHeight(8);
    }

    Object(_services_post_likes__WEBPACK_IMPORTED_MODULE_13__["countPostLikes"])({
      postid: props.id
    }, user.token).then(function (result) {
      setLikesNumber(result.data.count);
    });
    Object(_services_postComments__WEBPACK_IMPORTED_MODULE_11__["countComments"])({
      postid: props.id
    }, user.token).then(function (result) {
      setCoummentNumber(result.data.count);
    })["catch"](function (error) {
      alert(error);
    });
  }, []);
  /*************************************************************/

  /****************if mask on it will turn into blue************/

  /*************************************************************/

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    if (maskRef.current != null) {
      if (props.allowAnonymeComments) {
        if (mask) {
          maskRef.current.childNodes[0].childNodes[0].style.fill = "#1876f3";
        } else {
          maskRef.current.childNodes[0].childNodes[0].style.fill = "black";
        }
      }
    }
  }, [mask]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    setCountLettres(textAreaData.length);
  }, [textAreaData]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    Object(_services_postComments__WEBPACK_IMPORTED_MODULE_11__["getComments"])({
      postid: props.id,
      skip: skip
    }, user.token).then(function (result) {
      setComments(true);

      if (result.data.data.length > 0) {
        setMoreComments(true);
      } else {
        setMoreComments(false);
      }

      setCommentsData(function (e) {
        return [].concat(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(e), Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(result.data.data));
      });
    })["catch"](function (error) {
      alert(error);
    });
  }, [skip]);
  /************************************************/

  /*when load publicationn that had more then 100 car
  /*slice anything after 100 the show it later 
  /*when user clikc in the 3 dots
  /************************************************/

  var completeText = function completeText(e) {
    setSlice(e);
  };
  /************************************************/

  /*******this will load list of comments************/

  /************************************************/


  var openComments = function openComments() {
    setComments(function (e) {
      return !e;
    });
  };
  /***************************************************************/

  /*************when click in the 3dots it will display************/

  /**************list of setings like reports and report*************/

  /***************************************************************/


  var ShowSettings = function ShowSettings() {
    setSettings(function (e) {
      return !e;
    });
  };
  /******************************************************/

  /********when mask on user post annonymosly************/

  /******************************************************/


  var maskOn = function maskOn() {
    setMask(function (e) {
      return !e;
    });
  };

  var closeOrOpenEmojiPicker = function closeOrOpenEmojiPicker() {
    setcloseOrOpenEmojiPickerState(function (e) {
      return !e;
    });
  };

  var textAreaHolder = function textAreaHolder(e) {
    e.target.style.height = "16px";
    e.target.style.height = e.target.scrollHeight + "px";
    setTextAreaData(function (el) {
      if (el.length <= 1000) {
        return e.target.value;
      } else {
        return el.slice(0, 1000);
      }
    });
  };

  var addEmoji = function addEmoji(e) {
    var sym = e.unified.split('-');
    var codesArray = [];
    sym.forEach(function (el) {
      return codesArray.push('0x' + el);
    });
    var emoji = String.fromCodePoint.apply(String, codesArray);
    setTextAreaData(function (el) {
      if (el.length <= 1000) {
        return el + emoji;
      } else {
        return el.slice(0, 1000);
      }
    });
  };

  var AddComment = function AddComment() {
    Object(_services_postComments__WEBPACK_IMPORTED_MODULE_11__["addComment"])({
      postid: props.id,
      anonyme: mask,
      commentText: textAreaData
    }, user.token).then(function (result) {
      if (result.data.message == "you have already anonym comment") {
        setErrorMessage({
          state: true,
          text: result.data.message
        });
      } else {
        setCommentsData(function (e) {
          return [_objectSpread(_objectSpread({}, result.data.data), {}, {
            commentOwner: {
              userName: user.userName,
              currentImageUrl: user.currentImageUrl,
              _id: user._id
            }
          })].concat(Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(e));
        });
        setComments(true);
        setaddOneToCommentCount(function (e) {
          return e + 1;
        });
        setTextAreaData("");
        setMask(false);
      }
    })["catch"](function (e) {
      console.log(e);
    });
  };

  var LoadMoreComments = function LoadMoreComments() {
    setSkip(function (e) {
      return e + 3;
    });
  };

  var _addLikeInTime = function addLikeInTime(newLikesNumber) {
    setLikesNumber(function (e) {
      return e + newLikesNumber;
    });
  };

  var openshowLikesUserNames = function openshowLikesUserNames() {
    setLikesModal(function (e) {
      return !e;
    });
  };

  var closeComponenet = function closeComponenet() {
    setSettings({
      state: false,
      firstClick: false
    });
  };

  var deleteCommentInCurrentTimefn = function deleteCommentInCurrentTimefn(commentIdDeleted) {
    setCommentsData(function (arrayOfComment) {
      return Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arrayOfComment.filter(function (e) {
        return e._id != commentIdDeleted;
      }));
    });
  };

  var closePopUp = function closePopUp() {
    setErrorMessage({
      state: false,
      text: ""
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [errorMessage.state == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popUpMessage_popUpMessage__WEBPACK_IMPORTED_MODULE_14__["default"], {
      fnclose: closePopUp,
      openPopUp: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 52
    }, _this), likesModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_showLikesUserNames_showLikesUserNames__WEBPACK_IMPORTED_MODULE_15__["default"], {
      closepopUp: openshowLikesUserNames,
      postid: props.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 20
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.userImageAndNameAndTimeAndSettings,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.userImage,
        style: props.ownerOfPostImage == "anonym" ? {
          border: "none"
        } : {},
        children: props.ownerOfPostImage != "anonym" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.ownerOfPostImage || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 48
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          style: {
            minHeight: "0",
            width: "75%",
            height: "75%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          },
          src: "/anonymous.png",
          alt: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 102
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Name,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.nameh3,
          children: props.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.date,
          children: [props.date.slice(0, 10), " ", props.date.slice(11, 16)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.settings,
        onClick: function onClick() {
          return ShowSettings();
        },
        children: settings && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SettingsPost, {
          closeComponenetfn: closeComponenet,
          currentUserId: user._id,
          ownerid: props.ownerid,
          token: user.token,
          postid: props.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 92
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, _this), props.text.length < 50 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.text,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 63
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 34
    }, _this), props.text.length > 50 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.text,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [props.text.slice(0, slice), slice != -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          onClick: function onClick() {
            return completeText(-1);
          },
          children: "..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 110
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 63
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 34
    }, _this), props.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.imageContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 62
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 23
    }, _this), props.video && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.videoContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_16___default.a, {
        width: "100%",
        height: "100%",
        controls: true,
        url: props.video
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 62
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 23
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.likesAndComments,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Comments,
        onClick: function onClick() {
          return openComments();
        },
        commentsnumbers: coummentNumber + addsOneToCommentCount,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          width: "69",
          height: "69",
          viewBox: "0 0 69 69",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M49.8333 24.6429C49.8333 11.0277 38.6807 0 24.9167 0C11.1526 0 0 11.0277 0 24.6429C0 29.9257 1.68906 34.7926 4.55208 38.8125C2.94688 43.4638 0.299479 47.1603 0.263542 47.2065C0 47.5607 -0.071875 48.0844 0.0838542 48.5464C0.239583 49.0085 0.575 49.2857 0.958333 49.2857C5.34271 49.2857 8.97239 47.3913 11.5839 45.4353C15.4411 47.8533 20.0052 49.2857 24.9167 49.2857C38.6807 49.2857 49.8333 38.258 49.8333 24.6429ZM64.4479 58.5268C67.3109 54.5223 69 49.64 69 44.3571C69 34.0533 62.5911 25.2281 53.5109 21.5471C53.6188 22.5636 53.6667 23.5955 53.6667 24.6429C53.6667 40.9533 40.7651 54.2143 24.9167 54.2143C23.6229 54.2143 22.3651 54.0911 21.1193 53.9216C24.8927 62.7777 33.7573 69 44.0833 69C48.9948 69 53.5589 67.583 57.4161 65.1496C60.0276 67.1056 63.6573 69 68.0417 69C68.425 69 68.7724 68.7074 68.9161 68.2607C69.0719 67.8141 69 67.2904 68.7365 66.9208C68.7005 66.8745 66.0531 63.1935 64.4479 58.5268Z",
            fill: "#212121"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 223
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 128
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.likes,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heart_heart__WEBPACK_IMPORTED_MODULE_10__["default"], {
          addLikeInTime: function addLikeInTime(e) {
            return _addLikeInTime(e);
          },
          token: user.token,
          postid: props.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.likesNumber,
          onClick: function onClick() {
            return openshowLikesUserNames();
          },
          children: likesNumber
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, _this), user.token != false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.userAddComments,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.userImageInComments,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: user.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 12
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.textAreaContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          placeholder: "say somthing",
          onChange: function onChange(e) {
            return textAreaHolder(e);
          },
          value: textAreaData,
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.textArea
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.countLettres,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.countLettresCss,
            style: countLettres >= 1000 ? {
              color: "red"
            } : {},
            children: [countLettres, " : 1000"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.emojiAndMaskAndPost,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.openOrCloseEmojiPicker,
          onClick: function onClick() {
            return closeOrOpenEmojiPicker();
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.emojiLogo,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_9__["Emoji"], {
              emoji: {
                id: 'smiling_face_with_3_hearts',
                skin: 3
              },
              size: 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 11
          }, _this), closeOrOpenEmojiPickerState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.emojiPickerContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_9__["Picker"], {
              perLine: EmojiContainerHeight,
              onSelect: function onSelect(e) {
                return addEmoji(e);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 86
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 41
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 9
        }, _this), props.allowAnonymeComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mask,
          ref: maskRef,
          postanonymously: language.postAnonymously,
          onClick: function onClick() {
            return maskOn();
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Masksvg, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 149
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 38
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postAndCounterContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postText,
            onClick: function onClick() {
              AddComment();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SentSvg, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 75
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 27
    }, _this), comments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commentsContainer,
      children: [commentsData.map(function (e) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_comment_comment__WEBPACK_IMPORTED_MODULE_6__["default"], {
          currentUserId: user._id,
          ownerid: e.commentOwner,
          deleteCommentInCurrentTime: deleteCommentInCurrentTimefn,
          postid: props.id,
          publication: true,
          likesNumber: e.likes,
          token: user.token,
          date: e.date,
          commentid: e._id,
          text: e.commentText,
          name: e.commentOwner.userName,
          userProfileImageUrl: e.commentOwner.currentImageUrl
        }, e._id, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 30
        }, _this);
      }), moreComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.loadMoreComments,
        onClick: function onClick() {
          return LoadMoreComments();
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "View more comments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 98
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 24
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 20
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 5
  }, _this);
};

_s(publication, "wBvj3uq1AnjI5poknhHI73AQTZA=");

/* harmony default export */ __webpack_exports__["default"] = (publication);

var Masksvg = function Masksvg() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      id: "outline",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m491.062 136.609a8 8 0 0 0 -8.719 1.734l-18.343 18.344v-60.687a8 8 0 0 0 -13.314-5.979l-46.246 41.107a82.549 82.549 0 0 1 -54.899 20.872 97.989 97.989 0 0 0 -69.741 28.889l-7.8 7.8-5.805-5.806a104.745 104.745 0 0 0 -74.554-30.883 75.088 75.088 0 0 1 -38.5-10.611l10.559-35.227a102.439 102.439 0 0 0 -10.253-81.962l-2.587-4.312a8 8 0 0 0 -11.66-2.288 102.749 102.749 0 0 0 -40.1 69.1l-.953 7.618-4.834-4.3a7.99 7.99 0 0 0 -12.613 2.725 88.455 88.455 0 0 0 -56.7-20.743 8 8 0 0 0 -8 8v16a88.451 88.451 0 0 0 32 67.868v10.191a32 32 0 0 0 -22.628 54.628l6.2 6.2-15.51 124.121a7.991 7.991 0 0 0 1.282 5.43l16 24a8 8 0 0 0 11.094 2.218l3.562-2.375v43.719a8 8 0 0 0 2.343 5.657l24 24a8 8 0 0 0 11.314 0l24-24a8 8 0 0 0 2.316-6.321l-7.5-89.971a76.637 76.637 0 0 0 19.811 2.635h31.432a75.785 75.785 0 0 0 53.941-22.343l.687-.686a30.624 30.624 0 0 1 43.312 0l12.687 12.686a8 8 0 0 0 11.314 0l12.687-12.686a30.624 30.624 0 0 1 43.312 0l.687.686a75.785 75.785 0 0 0 53.941 22.343h19.716v144a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-153.151a76.452 76.452 0 0 0 40-67.133v-123.716a8 8 0 0 0 -4.938-7.391zm-369.689 45.45-27.314-27.315v-10.744a16 16 0 0 1 27.313-11.313l22.059 22.058a16 16 0 0 1 -11.313 27.314zm-27.314 20.686-20.687-20.686 12.687-12.687 20.686 20.687zm28.767-140.6 7.517 7.516a8 8 0 0 0 8.187 1.933l12.924-4.308a86.486 86.486 0 0 1 .386 14.512l-21.386 5.347-12.491-12.496a86.745 86.745 0 0 1 4.863-12.508zm19.038-25.945a86.04 86.04 0 0 1 6.34 15.3l-10.043 3.348-6.828-6.828a86.291 86.291 0 0 1 10.531-11.82zm-27.51 57.465 7.989 7.988a8 8 0 0 0 7.6 2.1l19.145-4.786c-.23.864-.449 1.73-.707 2.589l-8.192 27.307-7.5-7.5a31.808 31.808 0 0 0 -12.94-7.856l-7.086-6.3zm-17.286 21.1q-.537.239-1.068.5v-1.448zm-65.068-26.313a72 72 0 0 1 16 3.726v19.822h-14.172a71.4 71.4 0 0 1 -1.828-16zm7.55 39.548h16.45a8 8 0 0 0 8-8v-19.8a71.77 71.77 0 0 1 16 14.58v18.209a32 32 0 0 0 -1.941 11.011v10.744l-16.4-16.4a8 8 0 0 0 -13.3 3.3 72.6 72.6 0 0 1 -8.809-13.644zm27.194 38.058-2.744 2.742v-5.49zm-30.058 28.687a15.9 15.9 0 0 1 11.314-4.686h10.744l27.315 27.314v10.745a16 16 0 0 1 -27.314 11.313l-22.058-22.059a16.017 16.017 0 0 1 -.001-22.627zm5.533 178.161-9.911-14.867 13.6-108.815 1.522 1.521a32.029 32.029 0 0 0 8.57 6.129v106.845zm37.781 71.781-16-16v-51.072l4.438-2.959a8 8 0 0 0 3.562-6.656v-107.946a31.852 31.852 0 0 0 9.474-2.033l14.246 170.946zm360 35.313h-16v-136.128a76.3 76.3 0 0 0 16-2.607zm40-212.284a60.285 60.285 0 0 1 -60.284 60.284h-31.432a59.89 59.89 0 0 1 -42.627-17.657l-.686-.687a46.631 46.631 0 0 0 -65.942 0l-7.029 7.031-7.029-7.031a46.631 46.631 0 0 0 -65.942 0l-.686.687a59.89 59.89 0 0 1 -42.627 17.657h-31.432a60.71 60.71 0 0 1 -21.247-3.895l-6.5-78.011a31.762 31.762 0 0 0 5.523-17.976v-10.745l19.314-19.314h10.745a32 32 0 0 0 32-32c0-.788-.038-1.569-.094-2.346a91.152 91.152 0 0 0 27.616 4.287 88.849 88.849 0 0 1 63.24 26.195l11.462 11.462a8 8 0 0 0 11.314 0l13.454-13.457a82.094 82.094 0 0 1 58.43-24.2 98.541 98.541 0 0 0 65.529-24.913l32.93-29.273v62.186a8 8 0 0 0 13.657 5.657l18.343-18.344z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 113
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m430.824 240.479 8.6-21.507a8 8 0 0 0 -7.424-10.972h-49.167a70.837 70.837 0 0 0 -63.354 39.155l-6.634 13.267a8 8 0 0 0 6.163 11.516l48.262 6.034a60.927 60.927 0 0 0 7.533.469 60.4 60.4 0 0 0 56.021-37.962zm-36.216 17.273a44.211 44.211 0 0 1 -25.354 4.343l-37.041-4.63 1.576-3.154a54.836 54.836 0 0 1 49.044-30.311h37.351l-4.215 10.537a44.34 44.34 0 0 1 -21.361 23.215z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3128
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m232.521 247.156a70.834 70.834 0 0 0 -63.354-39.156h-49.167a8 8 0 0 0 -7.428 10.972l8.6 21.507a60.351 60.351 0 0 0 63.554 37.493l48.262-6.034a8 8 0 0 0 6.163-11.516zm-49.775 14.944a44.384 44.384 0 0 1 -46.715-27.559l-4.215-10.541h37.351a54.832 54.832 0 0 1 49.044 30.312l1.576 3.153z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3508
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m384 288h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3803
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m120 280h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3834
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m152 288h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3865
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m416 280h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3896
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m432 256h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3927
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m104 256h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 3958
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 97
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 257,
    columnNumber: 10
  }, _this);
};

_c = Masksvg;

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
        lineNumber: 261,
        columnNumber: 105
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 289
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 395
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 516
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 67
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 261,
    columnNumber: 7
  }, _this);
};

_c2 = SentSvg;

var SettingsPost = function SettingsPost(props) {
  _s2();

  var _React$useState33 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    state: false,
    text: ""
  }),
      _React$useState34 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState33, 2),
      errorMessage = _React$useState34[0],
      setErrorMessage = _React$useState34[1]; // when state true show  pop up 


  var deleteImageFn = function deleteImageFn() {
    Object(_services_post__WEBPACK_IMPORTED_MODULE_12__["deletePost"])({
      postid: props.postid
    }, props.token).then(function (result) {
      location.reload();
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var closePopUp = function closePopUp() {
    setErrorMessage({
      state: false,
      text: ""
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.containerSettings,
    children: [errorMessage.state == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popUpMessage_popUpMessage__WEBPACK_IMPORTED_MODULE_14__["default"], {
      fnclose: function fnclose() {
        return closePopUp();
      },
      openPopUp: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 42
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.paramsContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Report"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 55
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }, _this), props.ownerid == props.currentUserId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.paramsContainer,
      onClick: function onClick() {
        return deleteImageFn();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 122
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 52
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _publication_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.paramsContainer,
      onClick: function onClick() {
        return props.closeComponenetfn();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 95
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 11
  }, _this);
};

_s2(SettingsPost, "99nIw9vjRF33UpxAdnrEypmF4Pc=");

_c3 = SettingsPost;

var _c, _c2, _c3;

$RefreshReg$(_c, "Masksvg");
$RefreshReg$(_c2, "SentSvg");
$RefreshReg$(_c3, "SettingsPost");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJwdWJsaWNhdGlvbiIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNsaWNlIiwic2V0U2xpY2UiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsIm1hc2siLCJzZXRNYXNrIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VyQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwidGV4dEFyZWFEYXRhIiwic2V0VGV4dEFyZWFEYXRhIiwiY291bnRMZXR0cmVzIiwic2V0Q291bnRMZXR0cmVzIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImNvbW1lbnRzRGF0YSIsInNldENvbW1lbnRzRGF0YSIsInNraXAiLCJzZXRTa2lwIiwiYWRkc09uZVRvQ29tbWVudENvdW50Iiwic2V0YWRkT25lVG9Db21tZW50Q291bnQiLCJsaWtlc01vZGFsIiwic2V0TGlrZXNNb2RhbCIsIm1hc2tSZWYiLCJ1c2VSZWYiLCJtb3JlQ29tbWVudHMiLCJzZXRNb3JlQ29tbWVudHMiLCJjb3VtbWVudE51bWJlciIsInNldENvdW1tZW50TnVtYmVyIiwibGlrZXNOdW1iZXIiLCJzZXRMaWtlc051bWJlciIsInN0YXRlIiwidGV4dCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb3VudFBvc3RMaWtlcyIsInBvc3RpZCIsImlkIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImNvdW50IiwiY291bnRDb21tZW50cyIsImVycm9yIiwiYWxlcnQiLCJjdXJyZW50IiwiYWxsb3dBbm9ueW1lQ29tbWVudHMiLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJmaWxsIiwibGVuZ3RoIiwiZ2V0Q29tbWVudHMiLCJlIiwiY29tcGxldGVUZXh0Iiwib3BlbkNvbW1lbnRzIiwiU2hvd1NldHRpbmdzIiwibWFza09uIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlciIsInRleHRBcmVhSG9sZGVyIiwidGFyZ2V0IiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZWwiLCJ2YWx1ZSIsImFkZEVtb2ppIiwic3ltIiwidW5pZmllZCIsInNwbGl0IiwiY29kZXNBcnJheSIsImZvckVhY2giLCJwdXNoIiwiZW1vamkiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiQWRkQ29tbWVudCIsImFkZENvbW1lbnQiLCJhbm9ueW1lIiwiY29tbWVudFRleHQiLCJtZXNzYWdlIiwiY29tbWVudE93bmVyIiwidXNlck5hbWUiLCJjdXJyZW50SW1hZ2VVcmwiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwiTG9hZE1vcmVDb21tZW50cyIsImFkZExpa2VJblRpbWUiLCJuZXdMaWtlc051bWJlciIsIm9wZW5zaG93TGlrZXNVc2VyTmFtZXMiLCJjbG9zZUNvbXBvbmVuZXQiLCJmaXJzdENsaWNrIiwiZGVsZXRlQ29tbWVudEluQ3VycmVudFRpbWVmbiIsImNvbW1lbnRJZERlbGV0ZWQiLCJhcnJheU9mQ29tbWVudCIsImZpbHRlciIsImNsb3NlUG9wVXAiLCJTdHlsZXMiLCJjb250YWluZXIiLCJ1c2VySW1hZ2VBbmROYW1lQW5kVGltZUFuZFNldHRpbmdzIiwidXNlckltYWdlIiwib3duZXJPZlBvc3RJbWFnZSIsImJvcmRlciIsIm1pbkhlaWdodCIsIndpZHRoIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIk5hbWUiLCJuYW1laDMiLCJkYXRlIiwib3duZXJpZCIsImltYWdlIiwiaW1hZ2VDb250YWluZXIiLCJ2aWRlbyIsInZpZGVvQ29udGFpbmVyIiwibGlrZXNBbmRDb21tZW50cyIsIkNvbW1lbnRzIiwibGlrZXMiLCJ1c2VyQWRkQ29tbWVudHMiLCJ1c2VySW1hZ2VJbkNvbW1lbnRzIiwidGV4dEFyZWFDb250YWluZXIiLCJ0ZXh0QXJlYSIsImNvdW50TGV0dHJlc0NzcyIsImNvbG9yIiwiZW1vamlBbmRNYXNrQW5kUG9zdCIsIm9wZW5PckNsb3NlRW1vamlQaWNrZXIiLCJlbW9qaUxvZ28iLCJza2luIiwiZW1vamlQaWNrZXJDb250YWluZXIiLCJwb3N0QW5vbnltb3VzbHkiLCJwb3N0QW5kQ291bnRlckNvbnRhaW5lciIsInBvc3RUZXh0IiwiY29tbWVudHNDb250YWluZXIiLCJtYXAiLCJsb2FkTW9yZUNvbW1lbnRzIiwiTWFza3N2ZyIsIlNlbnRTdmciLCJTZXR0aW5nc1Bvc3QiLCJkZWxldGVJbWFnZUZuIiwiZGVsZXRlUG9zdCIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29udGFpbmVyU2V0dGluZ3MiLCJwYXJhbXNDb250YWluZXIiLCJjdXJyZW50VXNlcklkIiwiY2xvc2VDb21wb25lbmV0Zm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDSEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEdBQWYsQ0FERztBQUFBO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSx5QkFFR0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGSDtBQUFBO0FBQUEsTUFFdEJHLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSx5QkFHR0wsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FISDtBQUFBO0FBQUEsTUFHdEJLLFFBSHNCO0FBQUEsTUFHWkMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBUUQsQ0FwQkQ7O0lBQU1SLFk7O01BQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGQyNjM2NDViYmQyNDY4ZjAxNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL3B1YmxpY2F0aW9uLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi9jb21tZW50L2NvbW1lbnQnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQgeyBQaWNrZXIsRW1vamkgIH0gZnJvbSAnZW1vamktbWFydCdcclxuaW1wb3J0IEhlYXJ0IGZyb20gJy4uL2hlYXJ0L2hlYXJ0J1xyXG5pbXBvcnQge2FkZENvbW1lbnQsZ2V0Q29tbWVudHMsY291bnRDb21tZW50c30gZnJvbSAnLi4vLi4vc2VydmljZXMvcG9zdENvbW1lbnRzJ1xyXG5pbXBvcnQge2RlbGV0ZVBvc3R9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bvc3QnXHJcbmltcG9ydCB7Y291bnRQb3N0TGlrZXN9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bvc3RfbGlrZXMnXHJcbmltcG9ydCBQb3BVcE1lc3NhZ2UgZnJvbSAnLi4vcG9wVXBNZXNzYWdlL3BvcFVwTWVzc2FnZSdcclxuaW1wb3J0IFNob3dMaWtlc1VzZXJOYW1lcyBmcm9tICcuLi9zaG93TGlrZXNVc2VyTmFtZXMvc2hvd0xpa2VzVXNlck5hbWVzJ1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJ1xyXG5jb25zdCBwdWJsaWNhdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzbGljZSwgc2V0U2xpY2VdID0gUmVhY3QudXNlU3RhdGUoMTAwKVxyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbWFzaywgc2V0TWFza10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbGFuZ3VhZ2UgLCBzZXRMYW5ndWFnZV09UmVhY3QudXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpXHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICBjb25zdCBbdGV4dEFyZWFEYXRhLHNldFRleHRBcmVhRGF0YV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbY291bnRMZXR0cmVzLHNldENvdW50TGV0dHJlc109UmVhY3QudXNlU3RhdGUoMClcclxuICBjb25zdCBbY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlLHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgY29uc3QgW2NvbW1lbnRzRGF0YSxzZXRDb21tZW50c0RhdGFdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2FkZHNPbmVUb0NvbW1lbnRDb3VudCxzZXRhZGRPbmVUb0NvbW1lbnRDb3VudF09UmVhY3QudXNlU3RhdGUoMClcclxuICBjb25zdCBbbGlrZXNNb2RhbCxzZXRMaWtlc01vZGFsXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBtYXNrUmVmPVJlYWN0LnVzZVJlZihudWxsKVxyXG4gIGNvbnN0IFttb3JlQ29tbWVudHMsc2V0TW9yZUNvbW1lbnRzXT1SZWFjdC51c2VTdGF0ZShmYWxzZSkgLy9zaG93IG1vcmUgY29tbWVudCBmZXRjaCAgd2l0aCAzIGJ5IDNcclxuICBjb25zdCBbY291bW1lbnROdW1iZXIsc2V0Q291bW1lbnROdW1iZXJdPVJlYWN0LnVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2xpa2VzTnVtYmVyLHNldExpa2VzTnVtYmVyXT1SZWFjdC51c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2Usc2V0RXJyb3JNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZSh7c3RhdGU6ZmFsc2UsdGV4dDpcIlwifSkvLyB3aGVuIHN0YXRlIHRydWUgc2hvdyAgcG9wIHVwIFxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyBcclxuICAgXHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aD41MDApe1xyXG4gICAgICBzZXRFbW9qaUNvbnRhaW5lckhlaWdodCg5KSBcclxuICAgIH1lbHNle1xyXG4gICAgICBzZXRFbW9qaUNvbnRhaW5lckhlaWdodCg4KSBcclxuICAgIH1cclxuICAgICAgY291bnRQb3N0TGlrZXMoe3Bvc3RpZDpwcm9wcy5pZH0sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICBzZXRMaWtlc051bWJlcihyZXN1bHQuZGF0YS5jb3VudClcclxuICAgICAgfSlcclxuICAgIFxyXG5cclxuICAgIGNvdW50Q29tbWVudHMoe3Bvc3RpZDpwcm9wcy5pZH0sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgc2V0Q291bW1lbnROdW1iZXIocmVzdWx0LmRhdGEuY291bnQpXHJcbiAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgYWxlcnQoZXJyb3IpXHJcblxyXG4gIH0pXHJcbiAgfSxbXSk7XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKmlmIG1hc2sgb24gaXQgd2lsbCB0dXJuIGludG8gYmx1ZSoqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobWFza1JlZi5jdXJyZW50IT1udWxsKXtcclxuICAgICAgaWYocHJvcHMuYWxsb3dBbm9ueW1lQ29tbWVudHMpe1xyXG4gICAgICAgIGlmIChtYXNrKSB7XHJcbiAgICAgICAgICBtYXNrUmVmLmN1cnJlbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmZpbGwgPSBcIiMxODc2ZjNcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtYXNrUmVmLmN1cnJlbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmZpbGwgPSBcImJsYWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbbWFza10pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0Q291bnRMZXR0cmVzKHRleHRBcmVhRGF0YS5sZW5ndGgpXHJcbiAgfSxbdGV4dEFyZWFEYXRhXSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGdldENvbW1lbnRzKHtwb3N0aWQ6cHJvcHMuaWQsc2tpcDpza2lwfSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICBzZXRDb21tZW50cyh0cnVlKVxyXG4gICAgICBpZihyZXN1bHQuZGF0YS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgIHNldE1vcmVDb21tZW50cyh0cnVlKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIHNldE1vcmVDb21tZW50cyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgICBzZXRDb21tZW50c0RhdGEoZT0+Wy4uLmUsLi4ucmVzdWx0LmRhdGEuZGF0YV0pXHJcblxyXG4gICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICBhbGVydChlcnJvcilcclxuICAgIH0pXHJcbiAgfSxbc2tpcF0pXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKndoZW4gbG9hZCBwdWJsaWNhdGlvbm4gdGhhdCBoYWQgbW9yZSB0aGVuIDEwMCBjYXJcclxuICAvKnNsaWNlIGFueXRoaW5nIGFmdGVyIDEwMCB0aGUgc2hvdyBpdCBsYXRlciBcclxuICAvKndoZW4gdXNlciBjbGlrYyBpbiB0aGUgMyBkb3RzXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBjb21wbGV0ZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2xpY2UoZSlcclxuICB9XHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKnRoaXMgd2lsbCBsb2FkIGxpc3Qgb2YgY29tbWVudHMqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBvcGVuQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHNldENvbW1lbnRzKGUgPT4gIWUpXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKndoZW4gY2xpY2sgaW4gdGhlIDNkb3RzIGl0IHdpbGwgZGlzcGxheSoqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKipsaXN0IG9mIHNldGluZ3MgbGlrZSByZXBvcnRzIGFuZCByZXBvcnQqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3QgU2hvd1NldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgc2V0U2V0dGluZ3MoZSA9PiAhZSlcclxuICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKndoZW4gbWFzayBvbiB1c2VyIHBvc3QgYW5ub255bW9zbHkqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBtYXNrT24gPSAoKSA9PiB7XHJcbiAgICBzZXRNYXNrKGUgPT4gIWUpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlKGU9PiFlKVxyXG4gIH1cclxuICBjb25zdCB0ZXh0QXJlYUhvbGRlcj0oZSk9PntcclxuICAgIGUudGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMTZweFwiO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuaGVpZ2h0ID0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCkrXCJweFwiO1xyXG4gICAgc2V0VGV4dEFyZWFEYXRhKGVsPT57XHJcbiAgICAgIGlmKGVsLmxlbmd0aDw9MTAwMCl7XHJcbiAgICAgICAgcmV0dXJuIGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgcmV0dXJuIGVsLnNsaWNlKDAsMTAwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgYWRkRW1vamk9KGUpPT57XHJcbiAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgIHN5bS5mb3JFYWNoKGVsID0+IGNvZGVzQXJyYXkucHVzaCgnMHgnICsgZWwpKVxyXG4gICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgIHNldFRleHRBcmVhRGF0YShlbD0+e1xyXG4gICAgICBpZihlbC5sZW5ndGg8PTEwMDApe1xyXG4gICAgICAgIHJldHVybiBlbCtlbW9qaVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZWwuc2xpY2UoMCwxMDAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IEFkZENvbW1lbnQ9KCk9PntcclxuXHJcbiAgICBhZGRDb21tZW50KHtwb3N0aWQ6cHJvcHMuaWQsYW5vbnltZTptYXNrLGNvbW1lbnRUZXh0OnRleHRBcmVhRGF0YX0sdXNlci50b2tlbikudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICBpZihyZXN1bHQuZGF0YS5tZXNzYWdlPT1cInlvdSBoYXZlIGFscmVhZHkgYW5vbnltIGNvbW1lbnRcIil7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKHsgc3RhdGU6dHJ1ZSx0ZXh0OnJlc3VsdC5kYXRhLm1lc3NhZ2UgfSlcclxuXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHNldENvbW1lbnRzRGF0YShlPT5bey4uLnJlc3VsdC5kYXRhLmRhdGEsY29tbWVudE93bmVyOnt1c2VyTmFtZTp1c2VyLnVzZXJOYW1lLGN1cnJlbnRJbWFnZVVybDp1c2VyLmN1cnJlbnRJbWFnZVVybCxfaWQ6dXNlci5faWR9fSwuLi5lXSlcclxuICAgICAgICBzZXRDb21tZW50cyh0cnVlKVxyXG4gICAgICAgIHNldGFkZE9uZVRvQ29tbWVudENvdW50KGU9PmUrMSlcclxuICAgICAgICBzZXRUZXh0QXJlYURhdGEoXCJcIilcclxuICAgICAgICBzZXRNYXNrKGZhbHNlKVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0pLmNhdGNoKGU9PntcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG5jb25zdCBMb2FkTW9yZUNvbW1lbnRzPSgpPT57XHJcbiAgc2V0U2tpcChlPT5lKzMpXHJcbn1cclxuXHJcblxyXG5jb25zdCBhZGRMaWtlSW5UaW1lPShuZXdMaWtlc051bWJlcik9PntcclxuICBcclxuICBzZXRMaWtlc051bWJlcihlPT5lK25ld0xpa2VzTnVtYmVyKVxyXG59XHJcbmNvbnN0IG9wZW5zaG93TGlrZXNVc2VyTmFtZXM9KCk9PntcclxuICBzZXRMaWtlc01vZGFsKGU9PiFlKVxyXG59XHJcbmNvbnN0IGNsb3NlQ29tcG9uZW5ldD0oKT0+e1xyXG5zZXRTZXR0aW5ncyh7c3RhdGU6ZmFsc2UsZmlyc3RDbGljazpmYWxzZX0pXHJcblxyXG59XHJcbmNvbnN0IGRlbGV0ZUNvbW1lbnRJbkN1cnJlbnRUaW1lZm49KGNvbW1lbnRJZERlbGV0ZWQpPT57XHJcbiAgc2V0Q29tbWVudHNEYXRhKGFycmF5T2ZDb21tZW50PT57XHJcbiAgIHJldHVybiBbLi4uYXJyYXlPZkNvbW1lbnQuZmlsdGVyKGU9PntcclxuICAgICByZXR1cm4gZS5faWQhPWNvbW1lbnRJZERlbGV0ZWRcclxuICAgfSldXHJcbiAgfSlcclxufVxyXG5jb25zdCBjbG9zZVBvcFVwPSgpPT57XHJcbiAgc2V0RXJyb3JNZXNzYWdlKHtzdGF0ZTpmYWxzZSx0ZXh0OlwiXCJ9KVxyXG59XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZS5zdGF0ZT09dHJ1ZSYmPFBvcFVwTWVzc2FnZSBmbmNsb3NlPXtjbG9zZVBvcFVwfSBvcGVuUG9wVXA9e2Vycm9yTWVzc2FnZX0+PC9Qb3BVcE1lc3NhZ2U+fVxyXG5cclxuICAgICAge2xpa2VzTW9kYWwmJjxTaG93TGlrZXNVc2VyTmFtZXMgY2xvc2Vwb3BVcD17b3BlbnNob3dMaWtlc1VzZXJOYW1lc30gcG9zdGlkPXtwcm9wcy5pZH0+PC9TaG93TGlrZXNVc2VyTmFtZXM+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnVzZXJJbWFnZUFuZE5hbWVBbmRUaW1lQW5kU2V0dGluZ3N9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnVzZXJJbWFnZX0gc3R5bGU9e3Byb3BzLm93bmVyT2ZQb3N0SW1hZ2U9PVwiYW5vbnltXCI/e2JvcmRlcjpcIm5vbmVcIn06e319PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHtwcm9wcy5vd25lck9mUG9zdEltYWdlIT1cImFub255bVwiPyA8aW1nIHNyYz17cHJvcHMub3duZXJPZlBvc3RJbWFnZSB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+OjxpbWcgc3R5bGU9e3ttaW5IZWlnaHQ6XCIwXCIsd2lkdGg6XCI3NSVcIixoZWlnaHQ6XCI3NSVcIix0b3A6XCI1MCVcIixsZWZ0OlwiNTAlXCIsdHJhbnNmb3JtOlwidHJhbnNsYXRlKC01MCUsLTUwJSlcIn19IHNyYz17XCIvYW5vbnltb3VzLnBuZ1wifSBhbHQ9XCJhbm9ueW1vdXNcIi8+fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Lyo8aW1nIHNyYz17cHJvcHMub3duZXJPZlBvc3RJbWFnZXx8XCIvYXZhdGFyLnBuZ1wifSBhbHQ9e3VzZXIudXNlck5hbWUgfHwgXCJcIn0vPiovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5OYW1lfT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtTdHlsZXMubmFtZWgzfT57cHJvcHMudXNlck5hbWV9PC9oMz5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtTdHlsZXMuZGF0ZX0+e3Byb3BzLmRhdGUuc2xpY2UoMCwxMCl9IHtwcm9wcy5kYXRlLnNsaWNlKDExLDE2KX08L2gzPlxyXG4gICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc2V0dGluZ3N9IG9uQ2xpY2s9eygpID0+IFNob3dTZXR0aW5ncygpfT57c2V0dGluZ3MgJiYgPFNldHRpbmdzUG9zdCBjbG9zZUNvbXBvbmVuZXRmbj17Y2xvc2VDb21wb25lbmV0fSBjdXJyZW50VXNlcklkPXt1c2VyLl9pZH0gb3duZXJpZD17cHJvcHMub3duZXJpZH0gdG9rZW49e3VzZXIudG9rZW59IHBvc3RpZD17cHJvcHMuaWR9PjwvU2V0dGluZ3NQb3N0Pn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy50ZXh0Lmxlbmd0aCA8IDUwICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudGV4dH0+PHA+e3Byb3BzLnRleHR9PC9wPjwvZGl2Pn1cclxuICAgICAge3Byb3BzLnRleHQubGVuZ3RoID4gNTAgJiYgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50ZXh0fT48cD57cHJvcHMudGV4dC5zbGljZSgwLCBzbGljZSl9e3NsaWNlICE9IC0xICYmIDxzcGFuIG9uQ2xpY2s9eygpID0+IGNvbXBsZXRlVGV4dCgtMSl9Pi4uLjwvc3Bhbj59PC9wPjwvZGl2Pn1cclxuICAgICAge3Byb3BzLmltYWdlICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gLz48L2Rpdj59XHJcbiAgICAgIHtwcm9wcy52aWRlbyAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnZpZGVvQ29udGFpbmVyfT48UmVhY3RQbGF5ZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNvbnRyb2xzPXt0cnVlfSB1cmw9e3Byb3BzLnZpZGVvfSAvPjwvZGl2Pn1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGlrZXNBbmRDb21tZW50c30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Db21tZW50c30gb25DbGljaz17KCkgPT4gb3BlbkNvbW1lbnRzKCl9IGNvbW1lbnRzbnVtYmVycz17Y291bW1lbnROdW1iZXIrYWRkc09uZVRvQ29tbWVudENvdW50fT48c3ZnIHdpZHRoPVwiNjlcIiBoZWlnaHQ9XCI2OVwiIHZpZXdCb3g9XCIwIDAgNjkgNjlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTQ5LjgzMzMgMjQuNjQyOUM0OS44MzMzIDExLjAyNzcgMzguNjgwNyAwIDI0LjkxNjcgMEMxMS4xNTI2IDAgMCAxMS4wMjc3IDAgMjQuNjQyOUMwIDI5LjkyNTcgMS42ODkwNiAzNC43OTI2IDQuNTUyMDggMzguODEyNUMyLjk0Njg4IDQzLjQ2MzggMC4yOTk0NzkgNDcuMTYwMyAwLjI2MzU0MiA0Ny4yMDY1QzAgNDcuNTYwNyAtMC4wNzE4NzUgNDguMDg0NCAwLjA4Mzg1NDIgNDguNTQ2NEMwLjIzOTU4MyA0OS4wMDg1IDAuNTc1IDQ5LjI4NTcgMC45NTgzMzMgNDkuMjg1N0M1LjM0MjcxIDQ5LjI4NTcgOC45NzIzOSA0Ny4zOTEzIDExLjU4MzkgNDUuNDM1M0MxNS40NDExIDQ3Ljg1MzMgMjAuMDA1MiA0OS4yODU3IDI0LjkxNjcgNDkuMjg1N0MzOC42ODA3IDQ5LjI4NTcgNDkuODMzMyAzOC4yNTggNDkuODMzMyAyNC42NDI5Wk02NC40NDc5IDU4LjUyNjhDNjcuMzEwOSA1NC41MjIzIDY5IDQ5LjY0IDY5IDQ0LjM1NzFDNjkgMzQuMDUzMyA2Mi41OTExIDI1LjIyODEgNTMuNTEwOSAyMS41NDcxQzUzLjYxODggMjIuNTYzNiA1My42NjY3IDIzLjU5NTUgNTMuNjY2NyAyNC42NDI5QzUzLjY2NjcgNDAuOTUzMyA0MC43NjUxIDU0LjIxNDMgMjQuOTE2NyA1NC4yMTQzQzIzLjYyMjkgNTQuMjE0MyAyMi4zNjUxIDU0LjA5MTEgMjEuMTE5MyA1My45MjE2QzI0Ljg5MjcgNjIuNzc3NyAzMy43NTczIDY5IDQ0LjA4MzMgNjlDNDguOTk0OCA2OSA1My41NTg5IDY3LjU4MyA1Ny40MTYxIDY1LjE0OTZDNjAuMDI3NiA2Ny4xMDU2IDYzLjY1NzMgNjkgNjguMDQxNyA2OUM2OC40MjUgNjkgNjguNzcyNCA2OC43MDc0IDY4LjkxNjEgNjguMjYwN0M2OS4wNzE5IDY3LjgxNDEgNjkgNjcuMjkwNCA2OC43MzY1IDY2LjkyMDhDNjguNzAwNSA2Ni44NzQ1IDY2LjA1MzEgNjMuMTkzNSA2NC40NDc5IDU4LjUyNjhaXCIgZmlsbD1cIiMyMTIxMjFcIiAvPjwvc3ZnPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGlrZXN9ICA+XHJcbiAgICAgICAgICAgIDxIZWFydCAgYWRkTGlrZUluVGltZT17KGUpPT5hZGRMaWtlSW5UaW1lKGUpfSB0b2tlbj17dXNlci50b2tlbn0gcG9zdGlkPXtwcm9wcy5pZH0+PC9IZWFydD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZXMubGlrZXNOdW1iZXJ9IG9uQ2xpY2s9eygpPT5vcGVuc2hvd0xpa2VzVXNlck5hbWVzKCl9PntsaWtlc051bWJlcn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHt1c2VyLnRva2VuIT1mYWxzZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy51c2VyQWRkQ29tbWVudHN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudXNlckltYWdlSW5Db21tZW50c30+XHJcblxyXG4gICAgICAgICAgezxpbWcgc3JjPXt1c2VyLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudGV4dEFyZWFDb250YWluZXJ9PlxyXG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj17XCJzYXkgc29tdGhpbmdcIn0gIG9uQ2hhbmdlPXsoZSk9PnRleHRBcmVhSG9sZGVyKGUpfSB2YWx1ZT17dGV4dEFyZWFEYXRhfSBjbGFzc05hbWU9e1N0eWxlcy50ZXh0QXJlYX0vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY291bnRMZXR0cmVzfT48c3BhbiBjbGFzc05hbWU9e1N0eWxlcy5jb3VudExldHRyZXNDc3N9IHN0eWxlPXtjb3VudExldHRyZXM+PTEwMDA/e2NvbG9yOlwicmVkXCJ9Ont9fT57Y291bnRMZXR0cmVzfSA6IDEwMDA8L3NwYW4+PC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZW1vamlBbmRNYXNrQW5kUG9zdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5vcGVuT3JDbG9zZUVtb2ppUGlja2VyfSBvbkNsaWNrPXsoKT0+Y2xvc2VPck9wZW5FbW9qaVBpY2tlcigpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICB7Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyICBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gIG9uU2VsZWN0PXsoZSk9PmFkZEVtb2ppKGUpfSAvPjwvZGl2Pn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLmFsbG93QW5vbnltZUNvbW1lbnRzJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm1hc2t9IHJlZj17bWFza1JlZn0gcG9zdGFub255bW91c2x5PXtsYW5ndWFnZS5wb3N0QW5vbnltb3VzbHl9IG9uQ2xpY2s9eygpID0+IG1hc2tPbigpfT48TWFza3N2Zz48L01hc2tzdmc+PC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdEFuZENvdW50ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLnBvc3RUZXh0fSBvbkNsaWNrPXsoKT0+e0FkZENvbW1lbnQoKX19PjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICB7Y29tbWVudHMgJiYgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb21tZW50c0NvbnRhaW5lcn0+XHJcbiAgICAgICAge2NvbW1lbnRzRGF0YS5tYXAoZT0+PENvbW1lbnQgY3VycmVudFVzZXJJZD17dXNlci5faWR9IG93bmVyaWQ9e2UuY29tbWVudE93bmVyfSBkZWxldGVDb21tZW50SW5DdXJyZW50VGltZT17ZGVsZXRlQ29tbWVudEluQ3VycmVudFRpbWVmbn0gcG9zdGlkPXtwcm9wcy5pZH0gcHVibGljYXRpb249e3RydWV9IGxpa2VzTnVtYmVyPXtlLmxpa2VzfSB0b2tlbj17dXNlci50b2tlbn0gZGF0ZT17ZS5kYXRlfSBjb21tZW50aWQ9e2UuX2lkfSBrZXk9e2UuX2lkfSB0ZXh0PXtlLmNvbW1lbnRUZXh0fSBuYW1lPXtlLmNvbW1lbnRPd25lci51c2VyTmFtZX0gdXNlclByb2ZpbGVJbWFnZVVybD17ZS5jb21tZW50T3duZXIuY3VycmVudEltYWdlVXJsfT48L0NvbW1lbnQ+KX1cclxuICAgICAgICB7bW9yZUNvbW1lbnRzJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmxvYWRNb3JlQ29tbWVudHN9IG9uQ2xpY2s9eygpPT5Mb2FkTW9yZUNvbW1lbnRzKCl9PjxwPlZpZXcgbW9yZSBjb21tZW50czwvcD48L2Rpdj59XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcHVibGljYXRpb25cclxuY29uc3QgTWFza3N2Zz0oKT0+e1xyXG4gIHJldHVybiA8c3ZnIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwib3V0bGluZVwiPjxwYXRoIGQ9XCJtNDkxLjA2MiAxMzYuNjA5YTggOCAwIDAgMCAtOC43MTkgMS43MzRsLTE4LjM0MyAxOC4zNDR2LTYwLjY4N2E4IDggMCAwIDAgLTEzLjMxNC01Ljk3OWwtNDYuMjQ2IDQxLjEwN2E4Mi41NDkgODIuNTQ5IDAgMCAxIC01NC44OTkgMjAuODcyIDk3Ljk4OSA5Ny45ODkgMCAwIDAgLTY5Ljc0MSAyOC44ODlsLTcuOCA3LjgtNS44MDUtNS44MDZhMTA0Ljc0NSAxMDQuNzQ1IDAgMCAwIC03NC41NTQtMzAuODgzIDc1LjA4OCA3NS4wODggMCAwIDEgLTM4LjUtMTAuNjExbDEwLjU1OS0zNS4yMjdhMTAyLjQzOSAxMDIuNDM5IDAgMCAwIC0xMC4yNTMtODEuOTYybC0yLjU4Ny00LjMxMmE4IDggMCAwIDAgLTExLjY2LTIuMjg4IDEwMi43NDkgMTAyLjc0OSAwIDAgMCAtNDAuMSA2OS4xbC0uOTUzIDcuNjE4LTQuODM0LTQuM2E3Ljk5IDcuOTkgMCAwIDAgLTEyLjYxMyAyLjcyNSA4OC40NTUgODguNDU1IDAgMCAwIC01Ni43LTIwLjc0MyA4IDggMCAwIDAgLTggOHYxNmE4OC40NTEgODguNDUxIDAgMCAwIDMyIDY3Ljg2OHYxMC4xOTFhMzIgMzIgMCAwIDAgLTIyLjYyOCA1NC42MjhsNi4yIDYuMi0xNS41MSAxMjQuMTIxYTcuOTkxIDcuOTkxIDAgMCAwIDEuMjgyIDUuNDNsMTYgMjRhOCA4IDAgMCAwIDExLjA5NCAyLjIxOGwzLjU2Mi0yLjM3NXY0My43MTlhOCA4IDAgMCAwIDIuMzQzIDUuNjU3bDI0IDI0YTggOCAwIDAgMCAxMS4zMTQgMGwyNC0yNGE4IDggMCAwIDAgMi4zMTYtNi4zMjFsLTcuNS04OS45NzFhNzYuNjM3IDc2LjYzNyAwIDAgMCAxOS44MTEgMi42MzVoMzEuNDMyYTc1Ljc4NSA3NS43ODUgMCAwIDAgNTMuOTQxLTIyLjM0M2wuNjg3LS42ODZhMzAuNjI0IDMwLjYyNCAwIDAgMSA0My4zMTIgMGwxMi42ODcgMTIuNjg2YTggOCAwIDAgMCAxMS4zMTQgMGwxMi42ODctMTIuNjg2YTMwLjYyNCAzMC42MjQgMCAwIDEgNDMuMzEyIDBsLjY4Ny42ODZhNzUuNzg1IDc1Ljc4NSAwIDAgMCA1My45NDEgMjIuMzQzaDE5LjcxNnYxNDRhOCA4IDAgMCAwIDggOGgzMmE4IDggMCAwIDAgOC04di0xNTMuMTUxYTc2LjQ1MiA3Ni40NTIgMCAwIDAgNDAtNjcuMTMzdi0xMjMuNzE2YTggOCAwIDAgMCAtNC45MzgtNy4zOTF6bS0zNjkuNjg5IDQ1LjQ1LTI3LjMxNC0yNy4zMTV2LTEwLjc0NGExNiAxNiAwIDAgMSAyNy4zMTMtMTEuMzEzbDIyLjA1OSAyMi4wNThhMTYgMTYgMCAwIDEgLTExLjMxMyAyNy4zMTR6bS0yNy4zMTQgMjAuNjg2LTIwLjY4Ny0yMC42ODYgMTIuNjg3LTEyLjY4NyAyMC42ODYgMjAuNjg3em0yOC43NjctMTQwLjYgNy41MTcgNy41MTZhOCA4IDAgMCAwIDguMTg3IDEuOTMzbDEyLjkyNC00LjMwOGE4Ni40ODYgODYuNDg2IDAgMCAxIC4zODYgMTQuNTEybC0yMS4zODYgNS4zNDctMTIuNDkxLTEyLjQ5NmE4Ni43NDUgODYuNzQ1IDAgMCAxIDQuODYzLTEyLjUwOHptMTkuMDM4LTI1Ljk0NWE4Ni4wNCA4Ni4wNCAwIDAgMSA2LjM0IDE1LjNsLTEwLjA0MyAzLjM0OC02LjgyOC02LjgyOGE4Ni4yOTEgODYuMjkxIDAgMCAxIDEwLjUzMS0xMS44MnptLTI3LjUxIDU3LjQ2NSA3Ljk4OSA3Ljk4OGE4IDggMCAwIDAgNy42IDIuMWwxOS4xNDUtNC43ODZjLS4yMy44NjQtLjQ0OSAxLjczLS43MDcgMi41ODlsLTguMTkyIDI3LjMwNy03LjUtNy41YTMxLjgwOCAzMS44MDggMCAwIDAgLTEyLjk0LTcuODU2bC03LjA4Ni02LjN6bS0xNy4yODYgMjEuMXEtLjUzNy4yMzktMS4wNjguNXYtMS40NDh6bS02NS4wNjgtMjYuMzEzYTcyIDcyIDAgMCAxIDE2IDMuNzI2djE5LjgyMmgtMTQuMTcyYTcxLjQgNzEuNCAwIDAgMSAtMS44MjgtMTZ6bTcuNTUgMzkuNTQ4aDE2LjQ1YTggOCAwIDAgMCA4LTh2LTE5LjhhNzEuNzcgNzEuNzcgMCAwIDEgMTYgMTQuNTh2MTguMjA5YTMyIDMyIDAgMCAwIC0xLjk0MSAxMS4wMTF2MTAuNzQ0bC0xNi40LTE2LjRhOCA4IDAgMCAwIC0xMy4zIDMuMyA3Mi42IDcyLjYgMCAwIDEgLTguODA5LTEzLjY0NHptMjcuMTk0IDM4LjA1OC0yLjc0NCAyLjc0MnYtNS40OXptLTMwLjA1OCAyOC42ODdhMTUuOSAxNS45IDAgMCAxIDExLjMxNC00LjY4NmgxMC43NDRsMjcuMzE1IDI3LjMxNHYxMC43NDVhMTYgMTYgMCAwIDEgLTI3LjMxNCAxMS4zMTNsLTIyLjA1OC0yMi4wNTlhMTYuMDE3IDE2LjAxNyAwIDAgMSAtLjAwMS0yMi42Mjd6bTUuNTMzIDE3OC4xNjEtOS45MTEtMTQuODY3IDEzLjYtMTA4LjgxNSAxLjUyMiAxLjUyMWEzMi4wMjkgMzIuMDI5IDAgMCAwIDguNTcgNi4xMjl2MTA2Ljg0NXptMzcuNzgxIDcxLjc4MS0xNi0xNnYtNTEuMDcybDQuNDM4LTIuOTU5YTggOCAwIDAgMCAzLjU2Mi02LjY1NnYtMTA3Ljk0NmEzMS44NTIgMzEuODUyIDAgMCAwIDkuNDc0LTIuMDMzbDE0LjI0NiAxNzAuOTQ2em0zNjAgMzUuMzEzaC0xNnYtMTM2LjEyOGE3Ni4zIDc2LjMgMCAwIDAgMTYtMi42MDd6bTQwLTIxMi4yODRhNjAuMjg1IDYwLjI4NSAwIDAgMSAtNjAuMjg0IDYwLjI4NGgtMzEuNDMyYTU5Ljg5IDU5Ljg5IDAgMCAxIC00Mi42MjctMTcuNjU3bC0uNjg2LS42ODdhNDYuNjMxIDQ2LjYzMSAwIDAgMCAtNjUuOTQyIDBsLTcuMDI5IDcuMDMxLTcuMDI5LTcuMDMxYTQ2LjYzMSA0Ni42MzEgMCAwIDAgLTY1Ljk0MiAwbC0uNjg2LjY4N2E1OS44OSA1OS44OSAwIDAgMSAtNDIuNjI3IDE3LjY1N2gtMzEuNDMyYTYwLjcxIDYwLjcxIDAgMCAxIC0yMS4yNDctMy44OTVsLTYuNS03OC4wMTFhMzEuNzYyIDMxLjc2MiAwIDAgMCA1LjUyMy0xNy45NzZ2LTEwLjc0NWwxOS4zMTQtMTkuMzE0aDEwLjc0NWEzMiAzMiAwIDAgMCAzMi0zMmMwLS43ODgtLjAzOC0xLjU2OS0uMDk0LTIuMzQ2YTkxLjE1MiA5MS4xNTIgMCAwIDAgMjcuNjE2IDQuMjg3IDg4Ljg0OSA4OC44NDkgMCAwIDEgNjMuMjQgMjYuMTk1bDExLjQ2MiAxMS40NjJhOCA4IDAgMCAwIDExLjMxNCAwbDEzLjQ1NC0xMy40NTdhODIuMDk0IDgyLjA5NCAwIDAgMSA1OC40My0yNC4yIDk4LjU0MSA5OC41NDEgMCAwIDAgNjUuNTI5LTI0LjkxM2wzMi45My0yOS4yNzN2NjIuMTg2YTggOCAwIDAgMCAxMy42NTcgNS42NTdsMTguMzQzLTE4LjM0NHpcIi8+PHBhdGggZD1cIm00MzAuODI0IDI0MC40NzkgOC42LTIxLjUwN2E4IDggMCAwIDAgLTcuNDI0LTEwLjk3MmgtNDkuMTY3YTcwLjgzNyA3MC44MzcgMCAwIDAgLTYzLjM1NCAzOS4xNTVsLTYuNjM0IDEzLjI2N2E4IDggMCAwIDAgNi4xNjMgMTEuNTE2bDQ4LjI2MiA2LjAzNGE2MC45MjcgNjAuOTI3IDAgMCAwIDcuNTMzLjQ2OSA2MC40IDYwLjQgMCAwIDAgNTYuMDIxLTM3Ljk2MnptLTM2LjIxNiAxNy4yNzNhNDQuMjExIDQ0LjIxMSAwIDAgMSAtMjUuMzU0IDQuMzQzbC0zNy4wNDEtNC42MyAxLjU3Ni0zLjE1NGE1NC44MzYgNTQuODM2IDAgMCAxIDQ5LjA0NC0zMC4zMTFoMzcuMzUxbC00LjIxNSAxMC41MzdhNDQuMzQgNDQuMzQgMCAwIDEgLTIxLjM2MSAyMy4yMTV6XCIvPjxwYXRoIGQ9XCJtMjMyLjUyMSAyNDcuMTU2YTcwLjgzNCA3MC44MzQgMCAwIDAgLTYzLjM1NC0zOS4xNTZoLTQ5LjE2N2E4IDggMCAwIDAgLTcuNDI4IDEwLjk3Mmw4LjYgMjEuNTA3YTYwLjM1MSA2MC4zNTEgMCAwIDAgNjMuNTU0IDM3LjQ5M2w0OC4yNjItNi4wMzRhOCA4IDAgMCAwIDYuMTYzLTExLjUxNnptLTQ5Ljc3NSAxNC45NDRhNDQuMzg0IDQ0LjM4NCAwIDAgMSAtNDYuNzE1LTI3LjU1OWwtNC4yMTUtMTAuNTQxaDM3LjM1MWE1NC44MzIgNTQuODMyIDAgMCAxIDQ5LjA0NCAzMC4zMTJsMS41NzYgMy4xNTN6XCIvPjxwYXRoIGQ9XCJtMzg0IDI4OGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtMTIwIDI4MGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtMTUyIDI4OGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtNDE2IDI4MGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtNDMyIDI1NmgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtMTA0IDI1NmgxNnYxNmgtMTZ6XCIvPjwvZz48L3N2Zz5cclxufVxyXG5jb25zdCBTZW50U3ZnPSgpPT57XHJcbiAgcmV0dXJuIChcclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgKVxyXG59XHJcbmNvbnN0IFNldHRpbmdzUG9zdD0ocHJvcHMpPT57XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSxzZXRFcnJvck1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKHtzdGF0ZTpmYWxzZSx0ZXh0OlwiXCJ9KS8vIHdoZW4gc3RhdGUgdHJ1ZSBzaG93ICBwb3AgdXAgXHJcbiBjb25zdCBkZWxldGVJbWFnZUZuPSgpPT57XHJcbiAgICAgZGVsZXRlUG9zdCh7cG9zdGlkOnByb3BzLnBvc3RpZH0scHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlUG9wVXA9KCk9PntcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKHtzdGF0ZTpmYWxzZSx0ZXh0OlwiXCJ9KVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lclNldHRpbmdzfT5cclxuICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlLnN0YXRlPT10cnVlJiY8UG9wVXBNZXNzYWdlIGZuY2xvc2U9eygpPT5jbG9zZVBvcFVwKCl9IG9wZW5Qb3BVcD17ZXJyb3JNZXNzYWdlfT48L1BvcFVwTWVzc2FnZT59XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wYXJhbXNDb250YWluZXJ9PjxoMz5SZXBvcnQ8L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5vd25lcmlkPT1wcm9wcy5jdXJyZW50VXNlcklkJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBhcmFtc0NvbnRhaW5lcn0gb25DbGljaz17KCk9PmRlbGV0ZUltYWdlRm4oKX0+PGgzPkRlbGV0ZTwvaDM+PC9kaXY+fVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucGFyYW1zQ29udGFpbmVyfSBvbkNsaWNrPXsoKT0+cHJvcHMuY2xvc2VDb21wb25lbmV0Zm4oKX0+PGgzPkNsb3NlPC9oMz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==