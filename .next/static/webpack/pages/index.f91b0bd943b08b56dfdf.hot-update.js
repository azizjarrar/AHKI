webpackHotUpdate_N_E("pages/index",{

/***/ "./components/postTodayTopic/postTodayTopic.js":
/*!*****************************************************!*\
  !*** ./components/postTodayTopic/postTodayTopic.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodayTopic.module.scss */ "./components/postTodayTopic/TodayTopic.module.scss");
/* harmony import */ var _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emoji-mart */ "./node_modules/emoji-mart/dist-es/index.js");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");
/* harmony import */ var _services_todayTopic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/todayTopic */ "./services/todayTopic.js");
/* harmony import */ var _switch_switchCom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../switch/switchCom */ "./components/switch/switchCom.js");
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/post */ "./services/post.js");



var _jsxFileName = "F:\\AHKI\\components\\postTodayTopic\\postTodayTopic.js",
    _this = undefined,
    _s = $RefreshSig$();










var PostTodayTopic = function PostTodayTopic(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      imageOrVideo = _React$useState2[0],
      setImageOrVideo = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      mask = _React$useState4[0],
      setMask = _React$useState4[1];

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      _React$useContext2 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useContext, 2),
      language = _React$useContext2[0],
      setLanguage = _React$useContext2[1];

  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      _React$useContext4 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useContext3, 2),
      user = _React$useContext4[0],
      setUser = _React$useContext4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      closeOrOpenEmojiPickerState = _React$useState6[0],
      setcloseOrOpenEmojiPickerState = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState8 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      textAreaData = _React$useState8[0],
      setTextAreaData = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState10 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      countLettres = _React$useState10[0],
      setCountLettres = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(9),
      _React$useState12 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 2),
      EmojiContainerHeight = _React$useState12[0],
      setEmojiContainerHeight = _React$useState12[1]; //responsive handler


  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState14 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState13, 2),
      enableCommentAnnonymState = _React$useState14[0],
      setEnableCommentAnnonymState = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState16 = Object(F_AHKI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState15, 2),
      todayTopicData = _React$useState16[0],
      setTodayTopicData = _React$useState16[1];

  var PublishPost = function PublishPost() {
    var formData = new FormData();
    formData.append("postText", textAreaData);
    formData.append("anonyme", mask);
    formData.append("allowAnonymeComments", enableCommentAnnonymState);
    formData.append("DailyTopicid", todayTopicData._id);
    Object(_services_post__WEBPACK_IMPORTED_MODULE_9__["addDailyTopicPost"])(formData, user.token).then(function (result) {
      setTextAreaData("");
      setImageOrVideo(false);
      props.refrechData();
    })["catch"](function (error) {
      alert(error);
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    console.log(props.idTopic);

    if (props.idTopic != undefined) {
      Object(_services_todayTopic__WEBPACK_IMPORTED_MODULE_7__["getSpecificTopic"])({
        idTopic: props.idTopic
      }).then(function (result) {
        setTodayTopicData(result.data.data[0]);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, [props.idTopic]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (window.innerWidth > 500) {
      setEmojiContainerHeight(9);
    } else {
      setEmojiContainerHeight(8);
    }

    Object(_services_todayTopic__WEBPACK_IMPORTED_MODULE_7__["getLastTopic"])().then(function (result) {
      setTodayTopicData(result.data.data[0]);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  /****************************************/

  /**********save image in var ************/

  /****************************************/

  /****************************************/

  /************remove image****************/

  /****************************************/

  /******************************************************/

  /********when mask on user post annonymosly************/

  /******************************************************/

  var maskOn = function maskOn() {
    setMask(function (e) {
      return !e;
    });
  };
  /*************************************************************/

  /****************if mask on it will turn into blue************/

  /*************************************************************/


  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (props.logedOrNot != false) {
      if (mask) {
        document.getElementsByClassName(_TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mask)[0].childNodes[0].childNodes[0].style.fill = "#1876f3";
      } else {
        document.getElementsByClassName(_TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mask)[0].childNodes[0].childNodes[0].style.fill = "black";
      }
    }
  }, [mask]);

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

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setCountLettres(textAreaData.length);
  }, [textAreaData]);

  var _changestateOfCommentAnnonym = function changestateOfCommentAnnonym(state) {
    setEnableCommentAnnonymState(state);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.topic,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Today Topic\u27A8 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this), todayTopicData ? todayTopicData.topic : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this), props.logedOrNot != false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_switch_switchCom__WEBPACK_IMPORTED_MODULE_8__["default"], {
        changestateOfCommentAnnonym: function changestateOfCommentAnnonym(e) {
          return _changestateOfCommentAnnonym(e);
        },
        text: "allow hidden Comments",
        state: enableCommentAnnonymState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 40
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this), props.logedOrNot != false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userTopicContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: user.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 41
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.postTopic,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textAreaContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            placeholder: "say somthing",
            onChange: function onChange(e) {
              return textAreaHolder(e);
            },
            value: textAreaData,
            className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textArea
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.countLettres,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.countLettresCss,
              style: countLettres >= 1000 ? {
                color: "red"
              } : {},
              children: [countLettres, " : 1000"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 48
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.postText,
              onClick: function onClick() {
                return PublishPost();
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SentSvg, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 73
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.maskEmojiAndUploadImageContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.openOrCloseEmojiPicker,
            onClick: function onClick() {
              return closeOrOpenEmojiPicker();
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emojiLogo,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_4__["Emoji"], {
                emoji: {
                  id: 'smiling_face_with_3_hearts',
                  skin: 3
                },
                size: 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 51
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, _this), closeOrOpenEmojiPickerState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emojiPickerContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_4__["Picker"], {
                perLine: EmojiContainerHeight,
                onSelect: function onSelect(e) {
                  return addEmoji(e);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 92
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 47
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _TodayTopic_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mask,
            postanonymously: language.postAnonymously,
            onClick: function onClick() {
              return maskOn();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Masksvg, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 112
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 34
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(PostTodayTopic, "iw0qMJv9zSUK0gQGbE6ZITue10s=");

_c = PostTodayTopic;
/* harmony default export */ __webpack_exports__["default"] = (PostTodayTopic);

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
        lineNumber: 153,
        columnNumber: 113
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m430.824 240.479 8.6-21.507a8 8 0 0 0 -7.424-10.972h-49.167a70.837 70.837 0 0 0 -63.354 39.155l-6.634 13.267a8 8 0 0 0 6.163 11.516l48.262 6.034a60.927 60.927 0 0 0 7.533.469 60.4 60.4 0 0 0 56.021-37.962zm-36.216 17.273a44.211 44.211 0 0 1 -25.354 4.343l-37.041-4.63 1.576-3.154a54.836 54.836 0 0 1 49.044-30.311h37.351l-4.215 10.537a44.34 44.34 0 0 1 -21.361 23.215z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3128
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m232.521 247.156a70.834 70.834 0 0 0 -63.354-39.156h-49.167a8 8 0 0 0 -7.428 10.972l8.6 21.507a60.351 60.351 0 0 0 63.554 37.493l48.262-6.034a8 8 0 0 0 6.163-11.516zm-49.775 14.944a44.384 44.384 0 0 1 -46.715-27.559l-4.215-10.541h37.351a54.832 54.832 0 0 1 49.044 30.312l1.576 3.153z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3508
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m384 288h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3803
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m120 280h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3834
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m152 288h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3865
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m416 280h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3896
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m432 256h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3927
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m104 256h16v16h-16z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 3958
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 97
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 10
  }, _this);
};

_c2 = Masksvg;

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
        lineNumber: 157,
        columnNumber: 105
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 289
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 395
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 516
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 67
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 7
  }, _this);
};

_c3 = SentSvg;

var _c, _c2, _c3;

$RefreshReg$(_c, "PostTodayTopic");
$RefreshReg$(_c2, "Masksvg");
$RefreshReg$(_c3, "SentSvg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0VG9kYXlUb3BpYy9wb3N0VG9kYXlUb3BpYy5qcyJdLCJuYW1lcyI6WyJQb3N0VG9kYXlUb3BpYyIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImltYWdlT3JWaWRlbyIsInNldEltYWdlT3JWaWRlbyIsIm1hc2siLCJzZXRNYXNrIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VyQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwidGV4dEFyZWFEYXRhIiwic2V0VGV4dEFyZWFEYXRhIiwiY291bnRMZXR0cmVzIiwic2V0Q291bnRMZXR0cmVzIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGUiLCJzZXRFbmFibGVDb21tZW50QW5ub255bVN0YXRlIiwidG9kYXlUb3BpY0RhdGEiLCJzZXRUb2RheVRvcGljRGF0YSIsIlB1Ymxpc2hQb3N0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIl9pZCIsImFkZERhaWx5VG9waWNQb3N0IiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwicmVmcmVjaERhdGEiLCJlcnJvciIsImFsZXJ0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImlkVG9waWMiLCJ1bmRlZmluZWQiLCJnZXRTcGVjaWZpY1RvcGljIiwiZGF0YSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnZXRMYXN0VG9waWMiLCJtYXNrT24iLCJlIiwibG9nZWRPck5vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlcyIsImNoaWxkTm9kZXMiLCJzdHlsZSIsImZpbGwiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyIiwidGV4dEFyZWFIb2xkZXIiLCJ0YXJnZXQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJlbCIsImxlbmd0aCIsInZhbHVlIiwic2xpY2UiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwicHVzaCIsImVtb2ppIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNoYW5nZXN0YXRlT2ZDb21tZW50QW5ub255bSIsInN0YXRlIiwiY29udGFpbmVyIiwidG9waWMiLCJ1c2VyVG9waWNDb250YWluZXIiLCJ1c2VySW1hZ2UiLCJjdXJyZW50SW1hZ2VVcmwiLCJwb3N0VG9waWMiLCJ0ZXh0QXJlYUNvbnRhaW5lciIsInRleHRBcmVhIiwiY291bnRMZXR0cmVzQ3NzIiwiY29sb3IiLCJwb3N0VGV4dCIsIm1hc2tFbW9qaUFuZFVwbG9hZEltYWdlQ29udGFpbmVyIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwicG9zdEFub255bW91c2x5IiwiTWFza3N2ZyIsIlNlbnRTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRFI7QUFBQTtBQUFBLE1BQ3pCQyxZQUR5QjtBQUFBLE1BQ1hDLGVBRFc7O0FBQUEseUJBRVJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRlE7QUFBQTtBQUFBLE1BRXpCRyxJQUZ5QjtBQUFBLE1BRW5CQyxPQUZtQjs7QUFBQSwwQkFHREwsNENBQUssQ0FBQ00sVUFBTixDQUFpQkMsZ0VBQWpCLENBSEM7QUFBQTtBQUFBLE1BR3pC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QUFVLFVBQTNCO0FBQUEsOEJBQXNDO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0QyxlQUE4TjtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBOU4sZUFBd1U7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXhVLGVBQWljO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFqYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBR0QsQ0FKRDs7TUFBTUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOTFiMGJkOTQzYjA4YjU2ZGZkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vVG9kYXlUb3BpYy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgUGlja2VyLEVtb2ppICB9IGZyb20gJ2Vtb2ppLW1hcnQnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCB1c2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQge2dldExhc3RUb3BpYyxnZXRTcGVjaWZpY1RvcGljfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2RheVRvcGljJ1xyXG5pbXBvcnQgU3dpdGNoQ29tIGZyb20gJy4uL3N3aXRjaC9zd2l0Y2hDb20nXHJcbmltcG9ydCB7YWRkRGFpbHlUb3BpY1Bvc3R9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bvc3QnXHJcblxyXG5jb25zdCBQb3N0VG9kYXlUb3BpYyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZU9yVmlkZW8sIHNldEltYWdlT3JWaWRlb10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbWFzaywgc2V0TWFza10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbGFuZ3VhZ2UgLCBzZXRMYW5ndWFnZV09UmVhY3QudXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpXHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl09UmVhY3QudXNlQ29udGV4dCh1c2VyQ29udGV4dClcclxuICBjb25zdCBbY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlLHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RleHRBcmVhRGF0YSxzZXRUZXh0QXJlYURhdGFdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2NvdW50TGV0dHJlcyxzZXRDb3VudExldHRyZXNdPVJlYWN0LnVzZVN0YXRlKDApXHJcbiAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgY29uc3QgW2VuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGUsc2V0RW5hYmxlQ29tbWVudEFubm9ueW1TdGF0ZV09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvZGF5VG9waWNEYXRhLHNldFRvZGF5VG9waWNEYXRhXT1SZWFjdC51c2VTdGF0ZSgpXHJcbiAgY29uc3QgUHVibGlzaFBvc3Q9KCk9PntcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwb3N0VGV4dFwiLHRleHRBcmVhRGF0YSlcclxuICAgXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJhbm9ueW1lXCIsbWFzaylcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImFsbG93QW5vbnltZUNvbW1lbnRzXCIsZW5hYmxlQ29tbWVudEFubm9ueW1TdGF0ZSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIkRhaWx5VG9waWNpZFwiLHRvZGF5VG9waWNEYXRhLl9pZClcclxuICAgIGFkZERhaWx5VG9waWNQb3N0KGZvcm1EYXRhLHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgIHNldFRleHRBcmVhRGF0YShcIlwiKVxyXG4gICAgICBzZXRJbWFnZU9yVmlkZW8oZmFsc2UpXHJcbiAgICAgIHByb3BzLnJlZnJlY2hEYXRhKClcclxuICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgfSlcclxuICB9XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5pZFRvcGljKVxyXG4gICAgaWYocHJvcHMuaWRUb3BpYyE9dW5kZWZpbmVkKXtcclxuICAgICAgXHJcbiAgICAgIGdldFNwZWNpZmljVG9waWMoe2lkVG9waWM6cHJvcHMuaWRUb3BpY30pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgc2V0VG9kYXlUb3BpY0RhdGEocmVzdWx0LmRhdGEuZGF0YVswXSlcclxuICAgICBcclxuICAgICAgfSkuY2F0Y2goZXJyb3I9PmNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuICB9LFtwcm9wcy5pZFRvcGljXSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyBcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoPjUwMCl7XHJcbiAgICAgIHNldEVtb2ppQ29udGFpbmVySGVpZ2h0KDkpIFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNldEVtb2ppQ29udGFpbmVySGVpZ2h0KDgpIFxyXG4gICAgfVxyXG4gICAgZ2V0TGFzdFRvcGljKCkudGhlbihyZXN1bHQ9PntcclxuICAgICAgc2V0VG9kYXlUb3BpY0RhdGEocmVzdWx0LmRhdGEuZGF0YVswXSlcclxuICAgXHJcbiAgICB9KS5jYXRjaChlcnJvcj0+Y29uc29sZS5sb2coZXJyb3IpKVxyXG4gIH0sW10pO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKnNhdmUgaW1hZ2UgaW4gdmFyICoqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKnJlbW92ZSBpbWFnZSoqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqd2hlbiBtYXNrIG9uIHVzZXIgcG9zdCBhbm5vbnltb3NseSoqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNvbnN0IG1hc2tPbiA9ICgpID0+IHtcclxuICAgIHNldE1hc2soZSA9PiAhZSlcclxuICB9XHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKippZiBtYXNrIG9uIGl0IHdpbGwgdHVybiBpbnRvIGJsdWUqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHByb3BzLmxvZ2VkT3JOb3QhPWZhbHNlKXtcclxuICAgICAgaWYgKG1hc2spIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlcy5tYXNrKVswXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uc3R5bGUuZmlsbCA9IFwiIzE4NzZmM1wiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZXMubWFzaylbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmZpbGwgPSBcImJsYWNrXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9LCBbbWFza10pXHJcblxyXG4gIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgIHNldGNsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZShlPT4hZSlcclxuICB9XHJcbiAgY29uc3QgdGV4dEFyZWFIb2xkZXI9KGUpPT57XHJcbiAgICBlLnRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjE2cHhcIjtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmhlaWdodCA9IChlLnRhcmdldC5zY3JvbGxIZWlnaHQpK1wicHhcIjtcclxuICAgIHNldFRleHRBcmVhRGF0YShlbD0+e1xyXG4gICAgICBpZihlbC5sZW5ndGg8PTEwMDApe1xyXG4gICAgICAgIHJldHVybiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgIHJldHVybiBlbC5zbGljZSgwLDEwMDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGFkZEVtb2ppPShlKT0+e1xyXG4gICAgbGV0IHN5bSA9IGUudW5pZmllZC5zcGxpdCgnLScpXHJcbiAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICBzeW0uZm9yRWFjaChlbCA9PiBjb2Rlc0FycmF5LnB1c2goJzB4JyArIGVsKSlcclxuICAgIGxldCBlbW9qaSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVzQXJyYXkpXHJcbiAgICBzZXRUZXh0QXJlYURhdGEoZWw9PntcclxuICAgICAgaWYoZWwubGVuZ3RoPD0xMDAwKXtcclxuICAgICAgICByZXR1cm4gZWwrZW1vamlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGVsLnNsaWNlKDAsMTAwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9O1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0Q291bnRMZXR0cmVzKHRleHRBcmVhRGF0YS5sZW5ndGgpXHJcbiAgfSxbdGV4dEFyZWFEYXRhXSlcclxuICBjb25zdCBjaGFuZ2VzdGF0ZU9mQ29tbWVudEFubm9ueW09KHN0YXRlKT0+e1xyXG4gICAgc2V0RW5hYmxlQ29tbWVudEFubm9ueW1TdGF0ZShzdGF0ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BpY30+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgPHNwYW4+VG9kYXkgVG9waWMmIzEwMTUyOyA8L3NwYW4+XHJcbiAgICAgICAgICAgIHt0b2RheVRvcGljRGF0YT90b2RheVRvcGljRGF0YS50b3BpYzpcIlwifVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICB7cHJvcHMubG9nZWRPck5vdCE9ZmFsc2UgJiY8U3dpdGNoQ29tIGNoYW5nZXN0YXRlT2ZDb21tZW50QW5ub255bT17KGUpPT5jaGFuZ2VzdGF0ZU9mQ29tbWVudEFubm9ueW0oZSl9IHRleHQ9e1wiYWxsb3cgaGlkZGVuIENvbW1lbnRzXCJ9IHN0YXRlPXtlbmFibGVDb21tZW50QW5ub255bVN0YXRlfT48L1N3aXRjaENvbT59IFxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwcm9wcy5sb2dlZE9yTm90IT1mYWxzZSAmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudXNlclRvcGljQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy51c2VySW1hZ2V9PjxpbWcgc3JjPXt1c2VyLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0VG9waWN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50ZXh0QXJlYUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9e1wic2F5IHNvbXRoaW5nXCJ9ICBvbkNoYW5nZT17KGUpPT50ZXh0QXJlYUhvbGRlcihlKX0gdmFsdWU9e3RleHRBcmVhRGF0YX0gY2xhc3NOYW1lPXtTdHlsZXMudGV4dEFyZWF9Lz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY291bnRMZXR0cmVzfT48c3BhbiBjbGFzc05hbWU9e1N0eWxlcy5jb3VudExldHRyZXNDc3N9IHN0eWxlPXtjb3VudExldHRyZXM+PTEwMDA/e2NvbG9yOlwicmVkXCJ9Ont9fT57Y291bnRMZXR0cmVzfSA6IDEwMDA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlcy5wb3N0VGV4dH0gb25DbGljaz17KCk9PlB1Ymxpc2hQb3N0KCl9PjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5tYXNrRW1vamlBbmRVcGxvYWRJbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5vcGVuT3JDbG9zZUVtb2ppUGlja2VyfSBvbkNsaWNrPXsoKT0+Y2xvc2VPck9wZW5FbW9qaVBpY2tlcigpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZW1vamlMb2dvfT48RW1vamkgZW1vamk9e3sgaWQ6ICdzbWlsaW5nX2ZhY2Vfd2l0aF8zX2hlYXJ0cycsIHNraW46IDMgfX0gc2l6ZT17MTZ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5tYXNrfSBwb3N0YW5vbnltb3VzbHk9e2xhbmd1YWdlLnBvc3RBbm9ueW1vdXNseX0gb25DbGljaz17KCkgPT4gbWFza09uKCl9PjxNYXNrc3ZnPjwvTWFza3N2Zz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RUb2RheVRvcGljXHJcbmNvbnN0IE1hc2tzdmc9KCk9PntcclxuICByZXR1cm4gPHN2ZyBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBpZD1cIm91dGxpbmVcIj48cGF0aCBkPVwibTQ5MS4wNjIgMTM2LjYwOWE4IDggMCAwIDAgLTguNzE5IDEuNzM0bC0xOC4zNDMgMTguMzQ0di02MC42ODdhOCA4IDAgMCAwIC0xMy4zMTQtNS45NzlsLTQ2LjI0NiA0MS4xMDdhODIuNTQ5IDgyLjU0OSAwIDAgMSAtNTQuODk5IDIwLjg3MiA5Ny45ODkgOTcuOTg5IDAgMCAwIC02OS43NDEgMjguODg5bC03LjggNy44LTUuODA1LTUuODA2YTEwNC43NDUgMTA0Ljc0NSAwIDAgMCAtNzQuNTU0LTMwLjg4MyA3NS4wODggNzUuMDg4IDAgMCAxIC0zOC41LTEwLjYxMWwxMC41NTktMzUuMjI3YTEwMi40MzkgMTAyLjQzOSAwIDAgMCAtMTAuMjUzLTgxLjk2MmwtMi41ODctNC4zMTJhOCA4IDAgMCAwIC0xMS42Ni0yLjI4OCAxMDIuNzQ5IDEwMi43NDkgMCAwIDAgLTQwLjEgNjkuMWwtLjk1MyA3LjYxOC00LjgzNC00LjNhNy45OSA3Ljk5IDAgMCAwIC0xMi42MTMgMi43MjUgODguNDU1IDg4LjQ1NSAwIDAgMCAtNTYuNy0yMC43NDMgOCA4IDAgMCAwIC04IDh2MTZhODguNDUxIDg4LjQ1MSAwIDAgMCAzMiA2Ny44Njh2MTAuMTkxYTMyIDMyIDAgMCAwIC0yMi42MjggNTQuNjI4bDYuMiA2LjItMTUuNTEgMTI0LjEyMWE3Ljk5MSA3Ljk5MSAwIDAgMCAxLjI4MiA1LjQzbDE2IDI0YTggOCAwIDAgMCAxMS4wOTQgMi4yMThsMy41NjItMi4zNzV2NDMuNzE5YTggOCAwIDAgMCAyLjM0MyA1LjY1N2wyNCAyNGE4IDggMCAwIDAgMTEuMzE0IDBsMjQtMjRhOCA4IDAgMCAwIDIuMzE2LTYuMzIxbC03LjUtODkuOTcxYTc2LjYzNyA3Ni42MzcgMCAwIDAgMTkuODExIDIuNjM1aDMxLjQzMmE3NS43ODUgNzUuNzg1IDAgMCAwIDUzLjk0MS0yMi4zNDNsLjY4Ny0uNjg2YTMwLjYyNCAzMC42MjQgMCAwIDEgNDMuMzEyIDBsMTIuNjg3IDEyLjY4NmE4IDggMCAwIDAgMTEuMzE0IDBsMTIuNjg3LTEyLjY4NmEzMC42MjQgMzAuNjI0IDAgMCAxIDQzLjMxMiAwbC42ODcuNjg2YTc1Ljc4NSA3NS43ODUgMCAwIDAgNTMuOTQxIDIyLjM0M2gxOS43MTZ2MTQ0YTggOCAwIDAgMCA4IDhoMzJhOCA4IDAgMCAwIDgtOHYtMTUzLjE1MWE3Ni40NTIgNzYuNDUyIDAgMCAwIDQwLTY3LjEzM3YtMTIzLjcxNmE4IDggMCAwIDAgLTQuOTM4LTcuMzkxem0tMzY5LjY4OSA0NS40NS0yNy4zMTQtMjcuMzE1di0xMC43NDRhMTYgMTYgMCAwIDEgMjcuMzEzLTExLjMxM2wyMi4wNTkgMjIuMDU4YTE2IDE2IDAgMCAxIC0xMS4zMTMgMjcuMzE0em0tMjcuMzE0IDIwLjY4Ni0yMC42ODctMjAuNjg2IDEyLjY4Ny0xMi42ODcgMjAuNjg2IDIwLjY4N3ptMjguNzY3LTE0MC42IDcuNTE3IDcuNTE2YTggOCAwIDAgMCA4LjE4NyAxLjkzM2wxMi45MjQtNC4zMDhhODYuNDg2IDg2LjQ4NiAwIDAgMSAuMzg2IDE0LjUxMmwtMjEuMzg2IDUuMzQ3LTEyLjQ5MS0xMi40OTZhODYuNzQ1IDg2Ljc0NSAwIDAgMSA0Ljg2My0xMi41MDh6bTE5LjAzOC0yNS45NDVhODYuMDQgODYuMDQgMCAwIDEgNi4zNCAxNS4zbC0xMC4wNDMgMy4zNDgtNi44MjgtNi44MjhhODYuMjkxIDg2LjI5MSAwIDAgMSAxMC41MzEtMTEuODJ6bS0yNy41MSA1Ny40NjUgNy45ODkgNy45ODhhOCA4IDAgMCAwIDcuNiAyLjFsMTkuMTQ1LTQuNzg2Yy0uMjMuODY0LS40NDkgMS43My0uNzA3IDIuNTg5bC04LjE5MiAyNy4zMDctNy41LTcuNWEzMS44MDggMzEuODA4IDAgMCAwIC0xMi45NC03Ljg1NmwtNy4wODYtNi4zem0tMTcuMjg2IDIxLjFxLS41MzcuMjM5LTEuMDY4LjV2LTEuNDQ4em0tNjUuMDY4LTI2LjMxM2E3MiA3MiAwIDAgMSAxNiAzLjcyNnYxOS44MjJoLTE0LjE3MmE3MS40IDcxLjQgMCAwIDEgLTEuODI4LTE2em03LjU1IDM5LjU0OGgxNi40NWE4IDggMCAwIDAgOC04di0xOS44YTcxLjc3IDcxLjc3IDAgMCAxIDE2IDE0LjU4djE4LjIwOWEzMiAzMiAwIDAgMCAtMS45NDEgMTEuMDExdjEwLjc0NGwtMTYuNC0xNi40YTggOCAwIDAgMCAtMTMuMyAzLjMgNzIuNiA3Mi42IDAgMCAxIC04LjgwOS0xMy42NDR6bTI3LjE5NCAzOC4wNTgtMi43NDQgMi43NDJ2LTUuNDl6bS0zMC4wNTggMjguNjg3YTE1LjkgMTUuOSAwIDAgMSAxMS4zMTQtNC42ODZoMTAuNzQ0bDI3LjMxNSAyNy4zMTR2MTAuNzQ1YTE2IDE2IDAgMCAxIC0yNy4zMTQgMTEuMzEzbC0yMi4wNTgtMjIuMDU5YTE2LjAxNyAxNi4wMTcgMCAwIDEgLS4wMDEtMjIuNjI3em01LjUzMyAxNzguMTYxLTkuOTExLTE0Ljg2NyAxMy42LTEwOC44MTUgMS41MjIgMS41MjFhMzIuMDI5IDMyLjAyOSAwIDAgMCA4LjU3IDYuMTI5djEwNi44NDV6bTM3Ljc4MSA3MS43ODEtMTYtMTZ2LTUxLjA3Mmw0LjQzOC0yLjk1OWE4IDggMCAwIDAgMy41NjItNi42NTZ2LTEwNy45NDZhMzEuODUyIDMxLjg1MiAwIDAgMCA5LjQ3NC0yLjAzM2wxNC4yNDYgMTcwLjk0NnptMzYwIDM1LjMxM2gtMTZ2LTEzNi4xMjhhNzYuMyA3Ni4zIDAgMCAwIDE2LTIuNjA3em00MC0yMTIuMjg0YTYwLjI4NSA2MC4yODUgMCAwIDEgLTYwLjI4NCA2MC4yODRoLTMxLjQzMmE1OS44OSA1OS44OSAwIDAgMSAtNDIuNjI3LTE3LjY1N2wtLjY4Ni0uNjg3YTQ2LjYzMSA0Ni42MzEgMCAwIDAgLTY1Ljk0MiAwbC03LjAyOSA3LjAzMS03LjAyOS03LjAzMWE0Ni42MzEgNDYuNjMxIDAgMCAwIC02NS45NDIgMGwtLjY4Ni42ODdhNTkuODkgNTkuODkgMCAwIDEgLTQyLjYyNyAxNy42NTdoLTMxLjQzMmE2MC43MSA2MC43MSAwIDAgMSAtMjEuMjQ3LTMuODk1bC02LjUtNzguMDExYTMxLjc2MiAzMS43NjIgMCAwIDAgNS41MjMtMTcuOTc2di0xMC43NDVsMTkuMzE0LTE5LjMxNGgxMC43NDVhMzIgMzIgMCAwIDAgMzItMzJjMC0uNzg4LS4wMzgtMS41NjktLjA5NC0yLjM0NmE5MS4xNTIgOTEuMTUyIDAgMCAwIDI3LjYxNiA0LjI4NyA4OC44NDkgODguODQ5IDAgMCAxIDYzLjI0IDI2LjE5NWwxMS40NjIgMTEuNDYyYTggOCAwIDAgMCAxMS4zMTQgMGwxMy40NTQtMTMuNDU3YTgyLjA5NCA4Mi4wOTQgMCAwIDEgNTguNDMtMjQuMiA5OC41NDEgOTguNTQxIDAgMCAwIDY1LjUyOS0yNC45MTNsMzIuOTMtMjkuMjczdjYyLjE4NmE4IDggMCAwIDAgMTMuNjU3IDUuNjU3bDE4LjM0My0xOC4zNDR6XCIvPjxwYXRoIGQ9XCJtNDMwLjgyNCAyNDAuNDc5IDguNi0yMS41MDdhOCA4IDAgMCAwIC03LjQyNC0xMC45NzJoLTQ5LjE2N2E3MC44MzcgNzAuODM3IDAgMCAwIC02My4zNTQgMzkuMTU1bC02LjYzNCAxMy4yNjdhOCA4IDAgMCAwIDYuMTYzIDExLjUxNmw0OC4yNjIgNi4wMzRhNjAuOTI3IDYwLjkyNyAwIDAgMCA3LjUzMy40NjkgNjAuNCA2MC40IDAgMCAwIDU2LjAyMS0zNy45NjJ6bS0zNi4yMTYgMTcuMjczYTQ0LjIxMSA0NC4yMTEgMCAwIDEgLTI1LjM1NCA0LjM0M2wtMzcuMDQxLTQuNjMgMS41NzYtMy4xNTRhNTQuODM2IDU0LjgzNiAwIDAgMSA0OS4wNDQtMzAuMzExaDM3LjM1MWwtNC4yMTUgMTAuNTM3YTQ0LjM0IDQ0LjM0IDAgMCAxIC0yMS4zNjEgMjMuMjE1elwiLz48cGF0aCBkPVwibTIzMi41MjEgMjQ3LjE1NmE3MC44MzQgNzAuODM0IDAgMCAwIC02My4zNTQtMzkuMTU2aC00OS4xNjdhOCA4IDAgMCAwIC03LjQyOCAxMC45NzJsOC42IDIxLjUwN2E2MC4zNTEgNjAuMzUxIDAgMCAwIDYzLjU1NCAzNy40OTNsNDguMjYyLTYuMDM0YTggOCAwIDAgMCA2LjE2My0xMS41MTZ6bS00OS43NzUgMTQuOTQ0YTQ0LjM4NCA0NC4zODQgMCAwIDEgLTQ2LjcxNS0yNy41NTlsLTQuMjE1LTEwLjU0MWgzNy4zNTFhNTQuODMyIDU0LjgzMiAwIDAgMSA0OS4wNDQgMzAuMzEybDEuNTc2IDMuMTUzelwiLz48cGF0aCBkPVwibTM4NCAyODhoMTZ2MTZoLTE2elwiLz48cGF0aCBkPVwibTEyMCAyODBoMTZ2MTZoLTE2elwiLz48cGF0aCBkPVwibTE1MiAyODhoMTZ2MTZoLTE2elwiLz48cGF0aCBkPVwibTQxNiAyODBoMTZ2MTZoLTE2elwiLz48cGF0aCBkPVwibTQzMiAyNTZoMTZ2MTZoLTE2elwiLz48cGF0aCBkPVwibTEwNCAyNTZoMTZ2MTZoLTE2elwiLz48L2c+PC9zdmc+XHJcbn1cclxuY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj48ZyBpZD1cIkxheWVyXzk1XCIgZGF0YS1uYW1lPVwiTGF5ZXIgOTVcIj48cGF0aCBkPVwiTTUzLjA2LDEwLjk0YTEuNSwxLjUsMCwwLDAtMS41My0uMzZsLTQwLDEzLjMzYTEuNTEsMS41MSwwLDAsMC0uMDYsMi44M2wxOC43LDcuMDksNy4wOSwxOC43YTEuNTEsMS41MSwwLDAsMCwxLjQ0LDEsMS40OSwxLjQ5LDAsMCwwLDEuMzktMWwxMy4zMy00MEExLjUsMS41LDAsMCwwLDUzLjA2LDEwLjk0WlwiLz48cGF0aCBkPVwiTTIwLjIyLDM1LjQ4YTEuNSwxLjUsMCwwLDAtMi4xMi0yLjEybC00LjQ4LDQuNDhhMS41MSwxLjUxLDAsMCwwLDAsMi4xMiwxLjQ5LDEuNDksMCwwLDAsMi4xMiwwWlwiLz48cGF0aCBkPVwiTTIzLjg4LDQwLjEyYTEuNDksMS40OSwwLDAsMC0yLjEyLDBMMTYuMDgsNDUuOGExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw1LjY4LTUuNjhBMS40OSwxLjQ5LDAsMCwwLDIzLjg4LDQwLjEyWlwiLz48cGF0aCBkPVwiTTI4LjUyLDQzLjc4LDI0LDQ4LjI2YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDQuNDgtNC40OEExLjUsMS41LDAsMCwwLDI4LjUyLDQzLjc4WlwiLz48L2c+PC9zdmc+XHJcbiAgICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=