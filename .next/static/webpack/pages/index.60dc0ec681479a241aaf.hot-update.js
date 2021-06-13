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
      console.log(result);
      setTextAreaData("");
      setImageOrVideo(false);
      props.refrechData();
    })["catch"](function (error) {
      alert(error);
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0VG9kYXlUb3BpYy9wb3N0VG9kYXlUb3BpYy5qcyJdLCJuYW1lcyI6WyJQb3N0VG9kYXlUb3BpYyIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImltYWdlT3JWaWRlbyIsInNldEltYWdlT3JWaWRlbyIsIm1hc2siLCJzZXRNYXNrIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VyQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwidGV4dEFyZWFEYXRhIiwic2V0VGV4dEFyZWFEYXRhIiwiY291bnRMZXR0cmVzIiwic2V0Q291bnRMZXR0cmVzIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGUiLCJzZXRFbmFibGVDb21tZW50QW5ub255bVN0YXRlIiwidG9kYXlUb3BpY0RhdGEiLCJzZXRUb2RheVRvcGljRGF0YSIsIlB1Ymxpc2hQb3N0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIl9pZCIsImFkZERhaWx5VG9waWNQb3N0IiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInJlZnJlY2hEYXRhIiwiZXJyb3IiLCJhbGVydCIsInVzZUVmZmVjdCIsImlkVG9waWMiLCJ1bmRlZmluZWQiLCJnZXRTcGVjaWZpY1RvcGljIiwiZGF0YSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnZXRMYXN0VG9waWMiLCJtYXNrT24iLCJlIiwibG9nZWRPck5vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlcyIsImNoaWxkTm9kZXMiLCJzdHlsZSIsImZpbGwiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyIiwidGV4dEFyZWFIb2xkZXIiLCJ0YXJnZXQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJlbCIsImxlbmd0aCIsInZhbHVlIiwic2xpY2UiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwicHVzaCIsImVtb2ppIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNoYW5nZXN0YXRlT2ZDb21tZW50QW5ub255bSIsInN0YXRlIiwiY29udGFpbmVyIiwidG9waWMiLCJ1c2VyVG9waWNDb250YWluZXIiLCJ1c2VySW1hZ2UiLCJjdXJyZW50SW1hZ2VVcmwiLCJwb3N0VG9waWMiLCJ0ZXh0QXJlYUNvbnRhaW5lciIsInRleHRBcmVhIiwiY291bnRMZXR0cmVzQ3NzIiwiY29sb3IiLCJwb3N0VGV4dCIsIm1hc2tFbW9qaUFuZFVwbG9hZEltYWdlQ29udGFpbmVyIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwicG9zdEFub255bW91c2x5IiwiTWFza3N2ZyIsIlNlbnRTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRFI7QUFBQTtBQUFBLE1BQ3pCQyxZQUR5QjtBQUFBLE1BQ1hDLGVBRFc7O0FBQUEseUJBRVJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRlE7QUFBQTtBQUFBLE1BRXpCRyxJQUZ5QjtBQUFBLE1BRW5CQyxPQUZtQjs7QUFBQSwwQkFHREwsNENBQUssQ0FBQ00sVUFBTixDQUFpQkMsZ0VBQWpCLENBSEM7QUFBQTtBQUFBLE1BR3pC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LDhCQUFzQztBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdEMsZUFBOE47QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlOLGVBQXdVO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4VSxlQUFpYztBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBamM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUdELENBSkQ7O01BQU1BLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjBkYzBlYzY4MTQ3OWEyNDFhYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL1RvZGF5VG9waWMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IHtnZXRMYXN0VG9waWMsZ2V0U3BlY2lmaWNUb3BpY30gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9kYXlUb3BpYydcclxuaW1wb3J0IFN3aXRjaENvbSBmcm9tICcuLi9zd2l0Y2gvc3dpdGNoQ29tJ1xyXG5pbXBvcnQge2FkZERhaWx5VG9waWNQb3N0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3N0J1xyXG5cclxuY29uc3QgUG9zdFRvZGF5VG9waWMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaW1hZ2VPclZpZGVvLCBzZXRJbWFnZU9yVmlkZW9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21hc2ssIHNldE1hc2tdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xhbmd1YWdlICwgc2V0TGFuZ3VhZ2VdPVJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KVxyXG4gIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0ZXh0QXJlYURhdGEsc2V0VGV4dEFyZWFEYXRhXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtjb3VudExldHRyZXMsc2V0Q291bnRMZXR0cmVzXT1SZWFjdC51c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtFbW9qaUNvbnRhaW5lckhlaWdodCwgc2V0RW1vamlDb250YWluZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoOSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gIGNvbnN0IFtlbmFibGVDb21tZW50QW5ub255bVN0YXRlLHNldEVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b2RheVRvcGljRGF0YSxzZXRUb2RheVRvcGljRGF0YV09UmVhY3QudXNlU3RhdGUoKVxyXG4gIGNvbnN0IFB1Ymxpc2hQb3N0PSgpPT57XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwicG9zdFRleHRcIix0ZXh0QXJlYURhdGEpXHJcbiAgIFxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYW5vbnltZVwiLG1hc2spXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJhbGxvd0Fub255bWVDb21tZW50c1wiLGVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGUpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJEYWlseVRvcGljaWRcIix0b2RheVRvcGljRGF0YS5faWQpXHJcbiAgICBhZGREYWlseVRvcGljUG9zdChmb3JtRGF0YSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgIHNldFRleHRBcmVhRGF0YShcIlwiKVxyXG4gICAgICBzZXRJbWFnZU9yVmlkZW8oZmFsc2UpXHJcbiAgICAgIHByb3BzLnJlZnJlY2hEYXRhKClcclxuICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgfSlcclxuICB9XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihwcm9wcy5pZFRvcGljIT11bmRlZmluZWQpe1xyXG4gICAgICBcclxuICAgICAgZ2V0U3BlY2lmaWNUb3BpYyh7aWRUb3BpYzpwcm9wcy5pZFRvcGljfSkudGhlbihyZXN1bHQ9PntcclxuICAgICAgICBzZXRUb2RheVRvcGljRGF0YShyZXN1bHQuZGF0YS5kYXRhWzBdKVxyXG4gICAgIFxyXG4gICAgICB9KS5jYXRjaChlcnJvcj0+Y29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG4gIH0sW3Byb3BzLmlkVG9waWNdKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGg+NTAwKXtcclxuICAgICAgc2V0RW1vamlDb250YWluZXJIZWlnaHQoOSkgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgc2V0RW1vamlDb250YWluZXJIZWlnaHQoOCkgXHJcbiAgICB9XHJcbiAgICBnZXRMYXN0VG9waWMoKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICBzZXRUb2RheVRvcGljRGF0YShyZXN1bHQuZGF0YS5kYXRhWzBdKVxyXG4gICBcclxuICAgIH0pLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgfSxbXSk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqc2F2ZSBpbWFnZSBpbiB2YXIgKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqcmVtb3ZlIGltYWdlKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKip3aGVuIG1hc2sgb24gdXNlciBwb3N0IGFubm9ueW1vc2x5KioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3QgbWFza09uID0gKCkgPT4ge1xyXG4gICAgc2V0TWFzayhlID0+ICFlKVxyXG4gIH1cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKmlmIG1hc2sgb24gaXQgd2lsbCB0dXJuIGludG8gYmx1ZSoqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYocHJvcHMubG9nZWRPck5vdCE9ZmFsc2Upe1xyXG4gICAgICBpZiAobWFzaykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGVzLm1hc2spWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5zdHlsZS5maWxsID0gXCIjMTg3NmYzXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFN0eWxlcy5tYXNrKVswXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uc3R5bGUuZmlsbCA9IFwiYmxhY2tcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0sIFttYXNrXSlcclxuXHJcbiAgY29uc3QgY2xvc2VPck9wZW5FbW9qaVBpY2tlcj0oKT0+e1xyXG4gICAgc2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlKGU9PiFlKVxyXG4gIH1cclxuICBjb25zdCB0ZXh0QXJlYUhvbGRlcj0oZSk9PntcclxuICAgIGUudGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMTZweFwiO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuaGVpZ2h0ID0gKGUudGFyZ2V0LnNjcm9sbEhlaWdodCkrXCJweFwiO1xyXG4gICAgc2V0VGV4dEFyZWFEYXRhKGVsPT57XHJcbiAgICAgIGlmKGVsLmxlbmd0aDw9MTAwMCl7XHJcbiAgICAgICAgcmV0dXJuIGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgcmV0dXJuIGVsLnNsaWNlKDAsMTAwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgYWRkRW1vamk9KGUpPT57XHJcbiAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgIGxldCBjb2Rlc0FycmF5ID0gW11cclxuICAgIHN5bS5mb3JFYWNoKGVsID0+IGNvZGVzQXJyYXkucHVzaCgnMHgnICsgZWwpKVxyXG4gICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgIHNldFRleHRBcmVhRGF0YShlbD0+e1xyXG4gICAgICBpZihlbC5sZW5ndGg8PTEwMDApe1xyXG4gICAgICAgIHJldHVybiBlbCtlbW9qaVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZWwuc2xpY2UoMCwxMDAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH07XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRDb3VudExldHRyZXModGV4dEFyZWFEYXRhLmxlbmd0aClcclxuICB9LFt0ZXh0QXJlYURhdGFdKVxyXG4gIGNvbnN0IGNoYW5nZXN0YXRlT2ZDb21tZW50QW5ub255bT0oc3RhdGUpPT57XHJcbiAgICBzZXRFbmFibGVDb21tZW50QW5ub255bVN0YXRlKHN0YXRlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRvcGljfT5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICA8c3Bhbj5Ub2RheSBUb3BpYyYjMTAxNTI7IDwvc3Bhbj5cclxuICAgICAgICAgICAge3RvZGF5VG9waWNEYXRhP3RvZGF5VG9waWNEYXRhLnRvcGljOlwiXCJ9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIHtwcm9wcy5sb2dlZE9yTm90IT1mYWxzZSAmJjxTd2l0Y2hDb20gY2hhbmdlc3RhdGVPZkNvbW1lbnRBbm5vbnltPXsoZSk9PmNoYW5nZXN0YXRlT2ZDb21tZW50QW5ub255bShlKX0gdGV4dD17XCJhbGxvdyBoaWRkZW4gQ29tbWVudHNcIn0gc3RhdGU9e2VuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGV9PjwvU3dpdGNoQ29tPn0gXHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLmxvZ2VkT3JOb3QhPWZhbHNlICYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy51c2VyVG9waWNDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnVzZXJJbWFnZX0+PGltZyBzcmM9e3VzZXIuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBvc3RUb3BpY30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRleHRBcmVhQ29udGFpbmVyfT5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj17XCJzYXkgc29tdGhpbmdcIn0gIG9uQ2hhbmdlPXsoZSk9PnRleHRBcmVhSG9sZGVyKGUpfSB2YWx1ZT17dGV4dEFyZWFEYXRhfSBjbGFzc05hbWU9e1N0eWxlcy50ZXh0QXJlYX0vPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb3VudExldHRyZXN9PjxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLmNvdW50TGV0dHJlc0Nzc30gc3R5bGU9e2NvdW50TGV0dHJlcz49MTAwMD97Y29sb3I6XCJyZWRcIn06e319Pntjb3VudExldHRyZXN9IDogMTAwMDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLnBvc3RUZXh0fSBvbkNsaWNrPXsoKT0+UHVibGlzaFBvc3QoKX0+PFNlbnRTdmc+PC9TZW50U3ZnPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm1hc2tFbW9qaUFuZFVwbG9hZEltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm9wZW5PckNsb3NlRW1vamlQaWNrZXJ9IG9uQ2xpY2s9eygpPT5jbG9zZU9yT3BlbkVtb2ppUGlja2VyKCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZW1vamlQaWNrZXJDb250YWluZXJ9PjxQaWNrZXIgcGVyTGluZT17RW1vamlDb250YWluZXJIZWlnaHR9IG9uU2VsZWN0PXsoZSk9PmFkZEVtb2ppKGUpfSAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm1hc2t9IHBvc3Rhbm9ueW1vdXNseT17bGFuZ3VhZ2UucG9zdEFub255bW91c2x5fSBvbkNsaWNrPXsoKSA9PiBtYXNrT24oKX0+PE1hc2tzdmc+PC9NYXNrc3ZnPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFRvZGF5VG9waWNcclxuY29uc3QgTWFza3N2Zz0oKT0+e1xyXG4gIHJldHVybiA8c3ZnIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwib3V0bGluZVwiPjxwYXRoIGQ9XCJtNDkxLjA2MiAxMzYuNjA5YTggOCAwIDAgMCAtOC43MTkgMS43MzRsLTE4LjM0MyAxOC4zNDR2LTYwLjY4N2E4IDggMCAwIDAgLTEzLjMxNC01Ljk3OWwtNDYuMjQ2IDQxLjEwN2E4Mi41NDkgODIuNTQ5IDAgMCAxIC01NC44OTkgMjAuODcyIDk3Ljk4OSA5Ny45ODkgMCAwIDAgLTY5Ljc0MSAyOC44ODlsLTcuOCA3LjgtNS44MDUtNS44MDZhMTA0Ljc0NSAxMDQuNzQ1IDAgMCAwIC03NC41NTQtMzAuODgzIDc1LjA4OCA3NS4wODggMCAwIDEgLTM4LjUtMTAuNjExbDEwLjU1OS0zNS4yMjdhMTAyLjQzOSAxMDIuNDM5IDAgMCAwIC0xMC4yNTMtODEuOTYybC0yLjU4Ny00LjMxMmE4IDggMCAwIDAgLTExLjY2LTIuMjg4IDEwMi43NDkgMTAyLjc0OSAwIDAgMCAtNDAuMSA2OS4xbC0uOTUzIDcuNjE4LTQuODM0LTQuM2E3Ljk5IDcuOTkgMCAwIDAgLTEyLjYxMyAyLjcyNSA4OC40NTUgODguNDU1IDAgMCAwIC01Ni43LTIwLjc0MyA4IDggMCAwIDAgLTggOHYxNmE4OC40NTEgODguNDUxIDAgMCAwIDMyIDY3Ljg2OHYxMC4xOTFhMzIgMzIgMCAwIDAgLTIyLjYyOCA1NC42MjhsNi4yIDYuMi0xNS41MSAxMjQuMTIxYTcuOTkxIDcuOTkxIDAgMCAwIDEuMjgyIDUuNDNsMTYgMjRhOCA4IDAgMCAwIDExLjA5NCAyLjIxOGwzLjU2Mi0yLjM3NXY0My43MTlhOCA4IDAgMCAwIDIuMzQzIDUuNjU3bDI0IDI0YTggOCAwIDAgMCAxMS4zMTQgMGwyNC0yNGE4IDggMCAwIDAgMi4zMTYtNi4zMjFsLTcuNS04OS45NzFhNzYuNjM3IDc2LjYzNyAwIDAgMCAxOS44MTEgMi42MzVoMzEuNDMyYTc1Ljc4NSA3NS43ODUgMCAwIDAgNTMuOTQxLTIyLjM0M2wuNjg3LS42ODZhMzAuNjI0IDMwLjYyNCAwIDAgMSA0My4zMTIgMGwxMi42ODcgMTIuNjg2YTggOCAwIDAgMCAxMS4zMTQgMGwxMi42ODctMTIuNjg2YTMwLjYyNCAzMC42MjQgMCAwIDEgNDMuMzEyIDBsLjY4Ny42ODZhNzUuNzg1IDc1Ljc4NSAwIDAgMCA1My45NDEgMjIuMzQzaDE5LjcxNnYxNDRhOCA4IDAgMCAwIDggOGgzMmE4IDggMCAwIDAgOC04di0xNTMuMTUxYTc2LjQ1MiA3Ni40NTIgMCAwIDAgNDAtNjcuMTMzdi0xMjMuNzE2YTggOCAwIDAgMCAtNC45MzgtNy4zOTF6bS0zNjkuNjg5IDQ1LjQ1LTI3LjMxNC0yNy4zMTV2LTEwLjc0NGExNiAxNiAwIDAgMSAyNy4zMTMtMTEuMzEzbDIyLjA1OSAyMi4wNThhMTYgMTYgMCAwIDEgLTExLjMxMyAyNy4zMTR6bS0yNy4zMTQgMjAuNjg2LTIwLjY4Ny0yMC42ODYgMTIuNjg3LTEyLjY4NyAyMC42ODYgMjAuNjg3em0yOC43NjctMTQwLjYgNy41MTcgNy41MTZhOCA4IDAgMCAwIDguMTg3IDEuOTMzbDEyLjkyNC00LjMwOGE4Ni40ODYgODYuNDg2IDAgMCAxIC4zODYgMTQuNTEybC0yMS4zODYgNS4zNDctMTIuNDkxLTEyLjQ5NmE4Ni43NDUgODYuNzQ1IDAgMCAxIDQuODYzLTEyLjUwOHptMTkuMDM4LTI1Ljk0NWE4Ni4wNCA4Ni4wNCAwIDAgMSA2LjM0IDE1LjNsLTEwLjA0MyAzLjM0OC02LjgyOC02LjgyOGE4Ni4yOTEgODYuMjkxIDAgMCAxIDEwLjUzMS0xMS44MnptLTI3LjUxIDU3LjQ2NSA3Ljk4OSA3Ljk4OGE4IDggMCAwIDAgNy42IDIuMWwxOS4xNDUtNC43ODZjLS4yMy44NjQtLjQ0OSAxLjczLS43MDcgMi41ODlsLTguMTkyIDI3LjMwNy03LjUtNy41YTMxLjgwOCAzMS44MDggMCAwIDAgLTEyLjk0LTcuODU2bC03LjA4Ni02LjN6bS0xNy4yODYgMjEuMXEtLjUzNy4yMzktMS4wNjguNXYtMS40NDh6bS02NS4wNjgtMjYuMzEzYTcyIDcyIDAgMCAxIDE2IDMuNzI2djE5LjgyMmgtMTQuMTcyYTcxLjQgNzEuNCAwIDAgMSAtMS44MjgtMTZ6bTcuNTUgMzkuNTQ4aDE2LjQ1YTggOCAwIDAgMCA4LTh2LTE5LjhhNzEuNzcgNzEuNzcgMCAwIDEgMTYgMTQuNTh2MTguMjA5YTMyIDMyIDAgMCAwIC0xLjk0MSAxMS4wMTF2MTAuNzQ0bC0xNi40LTE2LjRhOCA4IDAgMCAwIC0xMy4zIDMuMyA3Mi42IDcyLjYgMCAwIDEgLTguODA5LTEzLjY0NHptMjcuMTk0IDM4LjA1OC0yLjc0NCAyLjc0MnYtNS40OXptLTMwLjA1OCAyOC42ODdhMTUuOSAxNS45IDAgMCAxIDExLjMxNC00LjY4NmgxMC43NDRsMjcuMzE1IDI3LjMxNHYxMC43NDVhMTYgMTYgMCAwIDEgLTI3LjMxNCAxMS4zMTNsLTIyLjA1OC0yMi4wNTlhMTYuMDE3IDE2LjAxNyAwIDAgMSAtLjAwMS0yMi42Mjd6bTUuNTMzIDE3OC4xNjEtOS45MTEtMTQuODY3IDEzLjYtMTA4LjgxNSAxLjUyMiAxLjUyMWEzMi4wMjkgMzIuMDI5IDAgMCAwIDguNTcgNi4xMjl2MTA2Ljg0NXptMzcuNzgxIDcxLjc4MS0xNi0xNnYtNTEuMDcybDQuNDM4LTIuOTU5YTggOCAwIDAgMCAzLjU2Mi02LjY1NnYtMTA3Ljk0NmEzMS44NTIgMzEuODUyIDAgMCAwIDkuNDc0LTIuMDMzbDE0LjI0NiAxNzAuOTQ2em0zNjAgMzUuMzEzaC0xNnYtMTM2LjEyOGE3Ni4zIDc2LjMgMCAwIDAgMTYtMi42MDd6bTQwLTIxMi4yODRhNjAuMjg1IDYwLjI4NSAwIDAgMSAtNjAuMjg0IDYwLjI4NGgtMzEuNDMyYTU5Ljg5IDU5Ljg5IDAgMCAxIC00Mi42MjctMTcuNjU3bC0uNjg2LS42ODdhNDYuNjMxIDQ2LjYzMSAwIDAgMCAtNjUuOTQyIDBsLTcuMDI5IDcuMDMxLTcuMDI5LTcuMDMxYTQ2LjYzMSA0Ni42MzEgMCAwIDAgLTY1Ljk0MiAwbC0uNjg2LjY4N2E1OS44OSA1OS44OSAwIDAgMSAtNDIuNjI3IDE3LjY1N2gtMzEuNDMyYTYwLjcxIDYwLjcxIDAgMCAxIC0yMS4yNDctMy44OTVsLTYuNS03OC4wMTFhMzEuNzYyIDMxLjc2MiAwIDAgMCA1LjUyMy0xNy45NzZ2LTEwLjc0NWwxOS4zMTQtMTkuMzE0aDEwLjc0NWEzMiAzMiAwIDAgMCAzMi0zMmMwLS43ODgtLjAzOC0xLjU2OS0uMDk0LTIuMzQ2YTkxLjE1MiA5MS4xNTIgMCAwIDAgMjcuNjE2IDQuMjg3IDg4Ljg0OSA4OC44NDkgMCAwIDEgNjMuMjQgMjYuMTk1bDExLjQ2MiAxMS40NjJhOCA4IDAgMCAwIDExLjMxNCAwbDEzLjQ1NC0xMy40NTdhODIuMDk0IDgyLjA5NCAwIDAgMSA1OC40My0yNC4yIDk4LjU0MSA5OC41NDEgMCAwIDAgNjUuNTI5LTI0LjkxM2wzMi45My0yOS4yNzN2NjIuMTg2YTggOCAwIDAgMCAxMy42NTcgNS42NTdsMTguMzQzLTE4LjM0NHpcIi8+PHBhdGggZD1cIm00MzAuODI0IDI0MC40NzkgOC42LTIxLjUwN2E4IDggMCAwIDAgLTcuNDI0LTEwLjk3MmgtNDkuMTY3YTcwLjgzNyA3MC44MzcgMCAwIDAgLTYzLjM1NCAzOS4xNTVsLTYuNjM0IDEzLjI2N2E4IDggMCAwIDAgNi4xNjMgMTEuNTE2bDQ4LjI2MiA2LjAzNGE2MC45MjcgNjAuOTI3IDAgMCAwIDcuNTMzLjQ2OSA2MC40IDYwLjQgMCAwIDAgNTYuMDIxLTM3Ljk2MnptLTM2LjIxNiAxNy4yNzNhNDQuMjExIDQ0LjIxMSAwIDAgMSAtMjUuMzU0IDQuMzQzbC0zNy4wNDEtNC42MyAxLjU3Ni0zLjE1NGE1NC44MzYgNTQuODM2IDAgMCAxIDQ5LjA0NC0zMC4zMTFoMzcuMzUxbC00LjIxNSAxMC41MzdhNDQuMzQgNDQuMzQgMCAwIDEgLTIxLjM2MSAyMy4yMTV6XCIvPjxwYXRoIGQ9XCJtMjMyLjUyMSAyNDcuMTU2YTcwLjgzNCA3MC44MzQgMCAwIDAgLTYzLjM1NC0zOS4xNTZoLTQ5LjE2N2E4IDggMCAwIDAgLTcuNDI4IDEwLjk3Mmw4LjYgMjEuNTA3YTYwLjM1MSA2MC4zNTEgMCAwIDAgNjMuNTU0IDM3LjQ5M2w0OC4yNjItNi4wMzRhOCA4IDAgMCAwIDYuMTYzLTExLjUxNnptLTQ5Ljc3NSAxNC45NDRhNDQuMzg0IDQ0LjM4NCAwIDAgMSAtNDYuNzE1LTI3LjU1OWwtNC4yMTUtMTAuNTQxaDM3LjM1MWE1NC44MzIgNTQuODMyIDAgMCAxIDQ5LjA0NCAzMC4zMTJsMS41NzYgMy4xNTN6XCIvPjxwYXRoIGQ9XCJtMzg0IDI4OGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtMTIwIDI4MGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtMTUyIDI4OGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtNDE2IDI4MGgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtNDMyIDI1NmgxNnYxNmgtMTZ6XCIvPjxwYXRoIGQ9XCJtMTA0IDI1NmgxNnYxNmgtMTZ6XCIvPjwvZz48L3N2Zz5cclxufVxyXG5jb25zdCBTZW50U3ZnPSgpPT57XHJcbiAgcmV0dXJuIChcclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPjxnIGlkPVwiTGF5ZXJfOTVcIiBkYXRhLW5hbWU9XCJMYXllciA5NVwiPjxwYXRoIGQ9XCJNNTMuMDYsMTAuOTRhMS41LDEuNSwwLDAsMC0xLjUzLS4zNmwtNDAsMTMuMzNhMS41MSwxLjUxLDAsMCwwLS4wNiwyLjgzbDE4LjcsNy4wOSw3LjA5LDE4LjdhMS41MSwxLjUxLDAsMCwwLDEuNDQsMSwxLjQ5LDEuNDksMCwwLDAsMS4zOS0xbDEzLjMzLTQwQTEuNSwxLjUsMCwwLDAsNTMuMDYsMTAuOTRaXCIvPjxwYXRoIGQ9XCJNMjAuMjIsMzUuNDhhMS41LDEuNSwwLDAsMC0yLjEyLTIuMTJsLTQuNDgsNC40OGExLjUxLDEuNTEsMCwwLDAsMCwyLjEyLDEuNDksMS40OSwwLDAsMCwyLjEyLDBaXCIvPjxwYXRoIGQ9XCJNMjMuODgsNDAuMTJhMS40OSwxLjQ5LDAsMCwwLTIuMTIsMEwxNi4wOCw0NS44YTEuNSwxLjUsMCwwLDAsMi4xMiwyLjEybDUuNjgtNS42OEExLjQ5LDEuNDksMCwwLDAsMjMuODgsNDAuMTJaXCIvPjxwYXRoIGQ9XCJNMjguNTIsNDMuNzgsMjQsNDguMjZhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNC40OC00LjQ4QTEuNSwxLjUsMCwwLDAsMjguNTIsNDMuNzhaXCIvPjwvZz48L3N2Zz5cclxuICAgICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==