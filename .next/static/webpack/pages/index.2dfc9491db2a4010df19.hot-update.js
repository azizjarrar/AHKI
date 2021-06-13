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
      console.log(result.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0VG9kYXlUb3BpYy9wb3N0VG9kYXlUb3BpYy5qcyJdLCJuYW1lcyI6WyJQb3N0VG9kYXlUb3BpYyIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImltYWdlT3JWaWRlbyIsInNldEltYWdlT3JWaWRlbyIsIm1hc2siLCJzZXRNYXNrIiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VyQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwiY2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwic2V0Y2xvc2VPck9wZW5FbW9qaVBpY2tlclN0YXRlIiwidGV4dEFyZWFEYXRhIiwic2V0VGV4dEFyZWFEYXRhIiwiY291bnRMZXR0cmVzIiwic2V0Q291bnRMZXR0cmVzIiwiRW1vamlDb250YWluZXJIZWlnaHQiLCJzZXRFbW9qaUNvbnRhaW5lckhlaWdodCIsImVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGUiLCJzZXRFbmFibGVDb21tZW50QW5ub255bVN0YXRlIiwidG9kYXlUb3BpY0RhdGEiLCJzZXRUb2RheVRvcGljRGF0YSIsIlB1Ymxpc2hQb3N0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIl9pZCIsImFkZERhaWx5VG9waWNQb3N0IiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZWZyZWNoRGF0YSIsImVycm9yIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJpZFRvcGljIiwidW5kZWZpbmVkIiwiZ2V0U3BlY2lmaWNUb3BpYyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnZXRMYXN0VG9waWMiLCJtYXNrT24iLCJlIiwibG9nZWRPck5vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlN0eWxlcyIsImNoaWxkTm9kZXMiLCJzdHlsZSIsImZpbGwiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyIiwidGV4dEFyZWFIb2xkZXIiLCJ0YXJnZXQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJlbCIsImxlbmd0aCIsInZhbHVlIiwic2xpY2UiLCJhZGRFbW9qaSIsInN5bSIsInVuaWZpZWQiLCJzcGxpdCIsImNvZGVzQXJyYXkiLCJmb3JFYWNoIiwicHVzaCIsImVtb2ppIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNoYW5nZXN0YXRlT2ZDb21tZW50QW5ub255bSIsInN0YXRlIiwiY29udGFpbmVyIiwidG9waWMiLCJ1c2VyVG9waWNDb250YWluZXIiLCJ1c2VySW1hZ2UiLCJjdXJyZW50SW1hZ2VVcmwiLCJwb3N0VG9waWMiLCJ0ZXh0QXJlYUNvbnRhaW5lciIsInRleHRBcmVhIiwiY291bnRMZXR0cmVzQ3NzIiwiY29sb3IiLCJwb3N0VGV4dCIsIm1hc2tFbW9qaUFuZFVwbG9hZEltYWdlQ29udGFpbmVyIiwib3Blbk9yQ2xvc2VFbW9qaVBpY2tlciIsImVtb2ppTG9nbyIsImlkIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwicG9zdEFub255bW91c2x5IiwiTWFza3N2ZyIsIlNlbnRTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRFI7QUFBQTtBQUFBLE1BQ3pCQyxZQUR5QjtBQUFBLE1BQ1hDLGVBRFc7O0FBQUEseUJBRVJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRlE7QUFBQTtBQUFBLE1BRXpCRyxJQUZ5QjtBQUFBLE1BRW5CQyxPQUZtQjs7QUFBQSwwQkFHREwsNENBQUssQ0FBQ00sVUFBTixDQUFpQkMsZ0VBQWpCLENBSEM7QUFBQTtBQUFBLE1BR3pCQyxRQUh5QjtBQUFBLE1BR2RDLFdBSGM7O0FBQUEsMkJBSVhULDRDQUFLLENBQUNNLFVBQU4sQ0FBaUJJLDREQUFqQixDQUpXO0FBQUE7QUFBQSxNQUl6QkMsSUFKeUI7QUFBQSxNQUlwQkMsT0FKb0I7O0FBQUEseUJBS21DWiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUxuQztBQUFBO0FBQUEsTUFLekJZLDJCQUx5QjtBQUFBLE1BS0dDLDhCQUxIOztBQUFBLHlCQU1LZCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5MO0FBQUE7QUFBQSxNQU16QmMsWUFOeUI7QUFBQSxNQU1aQyxlQU5ZOztBQUFBLHlCQU9LaEIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FQTDtBQUFBO0FBQUEsTUFPekJnQixZQVB5QjtBQUFBLE1BT1pDLGVBUFk7O0FBQUEsMEJBUXdCbEIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FSeEI7QUFBQTtBQUFBLE1BUXpCa0Isb0JBUnlCO0FBQUEsTUFRSEMsdUJBUkcseUJBUXlDOzs7QUFSekMsMEJBUytCcEIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FUL0I7QUFBQTtBQUFBLE1BU3pCb0IseUJBVHlCO0FBQUEsTUFTQ0MsNEJBVEQ7O0FBQUEsMEJBVVN0Qiw0Q0FBSyxDQUFDQyxRQUFOLEVBVlQ7QUFBQTtBQUFBLE1BVXpCc0IsY0FWeUI7QUFBQSxNQVVWQyxpQkFWVTs7QUFXaEMsTUFBTUMsV0FBVyxHQUFDLFNBQVpBLFdBQVksR0FBSTtBQUNwQixRQUFJQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFmO0FBQ0FELFlBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFoQixFQUEyQmIsWUFBM0I7QUFFQVcsWUFBUSxDQUFDRSxNQUFULENBQWdCLFNBQWhCLEVBQTBCeEIsSUFBMUI7QUFDQXNCLFlBQVEsQ0FBQ0UsTUFBVCxDQUFnQixzQkFBaEIsRUFBdUNQLHlCQUF2QztBQUNBSyxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBK0JMLGNBQWMsQ0FBQ00sR0FBOUM7QUFDQUMsNEVBQWlCLENBQUNKLFFBQUQsRUFBVWYsSUFBSSxDQUFDb0IsS0FBZixDQUFqQixDQUF1Q0MsSUFBdkMsQ0FBNEMsVUFBQUMsTUFBTSxFQUFFO0FBQ2xEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDRyxJQUFuQjtBQUNBcEIscUJBQWUsQ0FBQyxFQUFELENBQWY7QUFDQWIscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUosV0FBSyxDQUFDc0MsV0FBTjtBQUNELEtBTEQsV0FLUyxVQUFBQyxLQUFLLEVBQUU7QUFDZEMsV0FBSyxDQUFDRCxLQUFELENBQUw7QUFDRCxLQVBEO0FBUUQsR0FmRDs7QUFnQkF0Qyw4Q0FBSyxDQUFDd0MsU0FBTixDQUFnQixZQUFJO0FBQ2xCLFFBQUd6QyxLQUFLLENBQUMwQyxPQUFOLElBQWVDLFNBQWxCLEVBQTRCO0FBRTFCQyxtRkFBZ0IsQ0FBQztBQUFDRixlQUFPLEVBQUMxQyxLQUFLLENBQUMwQztBQUFmLE9BQUQsQ0FBaEIsQ0FBMENULElBQTFDLENBQStDLFVBQUFDLE1BQU0sRUFBRTtBQUNyRFQseUJBQWlCLENBQUNTLE1BQU0sQ0FBQ0csSUFBUCxDQUFZQSxJQUFaLENBQWlCLENBQWpCLENBQUQsQ0FBakI7QUFFRCxPQUhELFdBR1MsVUFBQUUsS0FBSztBQUFBLGVBQUVKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaLENBQUY7QUFBQSxPQUhkO0FBSUQ7QUFDRixHQVJELEVBUUUsQ0FBQ3ZDLEtBQUssQ0FBQzBDLE9BQVAsQ0FSRjtBQVNBekMsOENBQUssQ0FBQ3dDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFHSSxNQUFNLENBQUNDLFVBQVAsR0FBa0IsR0FBckIsRUFBeUI7QUFDdkJ6Qiw2QkFBdUIsQ0FBQyxDQUFELENBQXZCO0FBQ0QsS0FGRCxNQUVLO0FBQ0hBLDZCQUF1QixDQUFDLENBQUQsQ0FBdkI7QUFDRDs7QUFDRDBCLDZFQUFZLEdBQUdkLElBQWYsQ0FBb0IsVUFBQUMsTUFBTSxFQUFFO0FBQzFCVCx1QkFBaUIsQ0FBQ1MsTUFBTSxDQUFDRyxJQUFQLENBQVlBLElBQVosQ0FBaUIsQ0FBakIsQ0FBRCxDQUFqQjtBQUVELEtBSEQsV0FHUyxVQUFBRSxLQUFLO0FBQUEsYUFBRUosT0FBTyxDQUFDQyxHQUFSLENBQVlHLEtBQVosQ0FBRjtBQUFBLEtBSGQ7QUFJRCxHQVZELEVBVUUsRUFWRjtBQVlBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBLE1BQU1TLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIxQyxXQUFPLENBQUMsVUFBQTJDLENBQUM7QUFBQSxhQUFJLENBQUNBLENBQUw7QUFBQSxLQUFGLENBQVA7QUFDRCxHQUZEO0FBR0E7O0FBQ0E7O0FBQ0E7OztBQUNBaEQsOENBQUssQ0FBQ3dDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFHekMsS0FBSyxDQUFDa0QsVUFBTixJQUFrQixLQUFyQixFQUEyQjtBQUN6QixVQUFJN0MsSUFBSixFQUFVO0FBQ1I4QyxnQkFBUSxDQUFDQyxzQkFBVCxDQUFnQ0MsOERBQU0sQ0FBQ2hELElBQXZDLEVBQTZDLENBQTdDLEVBQWdEaUQsVUFBaEQsQ0FBMkQsQ0FBM0QsRUFBOERBLFVBQTlELENBQXlFLENBQXpFLEVBQTRFQyxLQUE1RSxDQUFrRkMsSUFBbEYsR0FBeUYsU0FBekY7QUFDRCxPQUZELE1BRU87QUFDTEwsZ0JBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NDLDhEQUFNLENBQUNoRCxJQUF2QyxFQUE2QyxDQUE3QyxFQUFnRGlELFVBQWhELENBQTJELENBQTNELEVBQThEQSxVQUE5RCxDQUF5RSxDQUF6RSxFQUE0RUMsS0FBNUUsQ0FBa0ZDLElBQWxGLEdBQXlGLE9BQXpGO0FBQ0Q7QUFDRjtBQUVGLEdBVEQsRUFTRyxDQUFDbkQsSUFBRCxDQVRIOztBQVdBLE1BQU1vRCxzQkFBc0IsR0FBQyxTQUF2QkEsc0JBQXVCLEdBQUk7QUFDL0IxQyxrQ0FBOEIsQ0FBQyxVQUFBa0MsQ0FBQztBQUFBLGFBQUUsQ0FBQ0EsQ0FBSDtBQUFBLEtBQUYsQ0FBOUI7QUFDRCxHQUZEOztBQUdBLE1BQU1TLGNBQWMsR0FBQyxTQUFmQSxjQUFlLENBQUNULENBQUQsRUFBSztBQUN4QkEsS0FBQyxDQUFDVSxNQUFGLENBQVNKLEtBQVQsQ0FBZUssTUFBZixHQUF3QixNQUF4QjtBQUNBWCxLQUFDLENBQUNVLE1BQUYsQ0FBU0osS0FBVCxDQUFlSyxNQUFmLEdBQXlCWCxDQUFDLENBQUNVLE1BQUYsQ0FBU0UsWUFBVixHQUF3QixJQUFoRDtBQUNBNUMsbUJBQWUsQ0FBQyxVQUFBNkMsRUFBRSxFQUFFO0FBQ2xCLFVBQUdBLEVBQUUsQ0FBQ0MsTUFBSCxJQUFXLElBQWQsRUFBbUI7QUFDakIsZUFBT2QsQ0FBQyxDQUFDVSxNQUFGLENBQVNLLEtBQWhCO0FBQ0QsT0FGRCxNQUVLO0FBQ0osZUFBT0YsRUFBRSxDQUFDRyxLQUFILENBQVMsQ0FBVCxFQUFXLElBQVgsQ0FBUDtBQUNBO0FBQ0YsS0FOYyxDQUFmO0FBT0QsR0FWRDs7QUFXQSxNQUFNQyxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDakIsQ0FBRCxFQUFLO0FBQ2xCLFFBQUlrQixHQUFHLEdBQUdsQixDQUFDLENBQUNtQixPQUFGLENBQVVDLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBSCxPQUFHLENBQUNJLE9BQUosQ0FBWSxVQUFBVCxFQUFFO0FBQUEsYUFBSVEsVUFBVSxDQUFDRSxJQUFYLENBQWdCLE9BQU9WLEVBQXZCLENBQUo7QUFBQSxLQUFkO0FBQ0EsUUFBSVcsS0FBSyxHQUFHQyxNQUFNLENBQUNDLGFBQVAsT0FBQUQsTUFBTSxFQUFrQkosVUFBbEIsQ0FBbEI7QUFDQXJELG1CQUFlLENBQUMsVUFBQTZDLEVBQUUsRUFBRTtBQUNsQixVQUFHQSxFQUFFLENBQUNDLE1BQUgsSUFBVyxJQUFkLEVBQW1CO0FBQ2pCLGVBQU9ELEVBQUUsR0FBQ1csS0FBVjtBQUNELE9BRkQsTUFFSztBQUNILGVBQU9YLEVBQUUsQ0FBQ0csS0FBSCxDQUFTLENBQVQsRUFBVyxJQUFYLENBQVA7QUFDRDtBQUNGLEtBTmMsQ0FBZjtBQU9ELEdBWkQ7O0FBYUFoRSw4Q0FBSyxDQUFDd0MsU0FBTixDQUFnQixZQUFJO0FBQ2xCdEIsbUJBQWUsQ0FBQ0gsWUFBWSxDQUFDK0MsTUFBZCxDQUFmO0FBQ0QsR0FGRCxFQUVFLENBQUMvQyxZQUFELENBRkY7O0FBR0EsTUFBTTRELDRCQUEyQixHQUFDLFNBQTVCQSwyQkFBNEIsQ0FBQ0MsS0FBRCxFQUFTO0FBQ3pDdEQsZ0NBQTRCLENBQUNzRCxLQUFELENBQTVCO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXhCLDhEQUFNLENBQUN5QixTQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFekIsOERBQU0sQ0FBQzBCLEtBQXZCO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVLdkQsY0FBYyxHQUFDQSxjQUFjLENBQUN1RCxLQUFoQixHQUFzQixFQUZ6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUtPL0UsS0FBSyxDQUFDa0QsVUFBTixJQUFrQixLQUFsQixpQkFBMEIscUVBQUMseURBQUQ7QUFBVyxtQ0FBMkIsRUFBRSxxQ0FBQ0QsQ0FBRDtBQUFBLGlCQUFLMkIsNEJBQTJCLENBQUMzQixDQUFELENBQWhDO0FBQUEsU0FBeEM7QUFBNkUsWUFBSSxFQUFFLHVCQUFuRjtBQUE0RyxhQUFLLEVBQUUzQjtBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBU0d0QixLQUFLLENBQUNrRCxVQUFOLElBQWtCLEtBQWxCLGlCQUEwQjtBQUFLLGVBQVMsRUFBRUcsOERBQU0sQ0FBQzJCLGtCQUF2QjtBQUFBLDhCQUMzQjtBQUFLLGlCQUFTLEVBQUUzQiw4REFBTSxDQUFDNEIsU0FBdkI7QUFBQSwrQkFBa0M7QUFBSyxhQUFHLEVBQUVyRSxJQUFJLENBQUNzRSxlQUFMLElBQXdCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUQyQixlQUV6QjtBQUFLLGlCQUFTLEVBQUU3Qiw4REFBTSxDQUFDOEIsU0FBdkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUU5Qiw4REFBTSxDQUFDK0IsaUJBQXZCO0FBQUEsa0NBQ0E7QUFBVSx1QkFBVyxFQUFFLGNBQXZCO0FBQXdDLG9CQUFRLEVBQUUsa0JBQUNuQyxDQUFEO0FBQUEscUJBQUtTLGNBQWMsQ0FBQ1QsQ0FBRCxDQUFuQjtBQUFBLGFBQWxEO0FBQTBFLGlCQUFLLEVBQUVqQyxZQUFqRjtBQUErRixxQkFBUyxFQUFFcUMsOERBQU0sQ0FBQ2dDO0FBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFLLHFCQUFTLEVBQUVoQyw4REFBTSxDQUFDbkMsWUFBdkI7QUFBQSxvQ0FBcUM7QUFBTSx1QkFBUyxFQUFFbUMsOERBQU0sQ0FBQ2lDLGVBQXhCO0FBQXlDLG1CQUFLLEVBQUVwRSxZQUFZLElBQUUsSUFBZCxHQUFtQjtBQUFDcUUscUJBQUssRUFBQztBQUFQLGVBQW5CLEdBQWlDLEVBQWpGO0FBQUEseUJBQXNGckUsWUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFyQyxlQUNBO0FBQU0sdUJBQVMsRUFBRW1DLDhEQUFNLENBQUNtQyxRQUF4QjtBQUFrQyxxQkFBTyxFQUFFO0FBQUEsdUJBQUk5RCxXQUFXLEVBQWY7QUFBQSxlQUEzQztBQUFBLHFDQUE4RCxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUk7QUFBSyxtQkFBUyxFQUFFMkIsOERBQU0sQ0FBQ29DLGdDQUF2QjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRXBDLDhEQUFNLENBQUNxQyxzQkFBdkI7QUFBK0MsbUJBQU8sRUFBRTtBQUFBLHFCQUFJakMsc0JBQXNCLEVBQTFCO0FBQUEsYUFBeEQ7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVKLDhEQUFNLENBQUNzQyxTQUF2QjtBQUFBLHFDQUFrQyxxRUFBQyxnREFBRDtBQUFPLHFCQUFLLEVBQUU7QUFBRUMsb0JBQUUsRUFBRSw0QkFBTjtBQUFvQ0Msc0JBQUksRUFBRTtBQUExQyxpQkFBZDtBQUE2RCxvQkFBSSxFQUFFO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHL0UsMkJBQTJCLGlCQUFFO0FBQUssdUJBQVMsRUFBRXVDLDhEQUFNLENBQUN5QyxvQkFBdkI7QUFBQSxxQ0FBNkMscUVBQUMsaURBQUQ7QUFBUSx1QkFBTyxFQUFFMUUsb0JBQWpCO0FBQXVDLHdCQUFRLEVBQUUsa0JBQUM2QixDQUFEO0FBQUEseUJBQUtpQixRQUFRLENBQUNqQixDQUFELENBQWI7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBRUksOERBQU0sQ0FBQ2hELElBQXZCO0FBQTZCLDJCQUFlLEVBQUVJLFFBQVEsQ0FBQ3NGLGVBQXZEO0FBQXdFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTS9DLE1BQU0sRUFBWjtBQUFBLGFBQWpGO0FBQUEsbUNBQWlHLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBM0lEOztHQUFNakQsYzs7S0FBQUEsYztBQTZJU0EsNkVBQWY7O0FBQ0EsSUFBTWlHLE9BQU8sR0FBQyxTQUFSQSxPQUFRLEdBQUk7QUFDaEIsc0JBQU87QUFBSyxVQUFNLEVBQUMsS0FBWjtBQUFrQixXQUFPLEVBQUMsYUFBMUI7QUFBd0MsU0FBSyxFQUFDLEtBQTlDO0FBQW9ELFNBQUssRUFBQyw0QkFBMUQ7QUFBQSwyQkFBdUY7QUFBRyxRQUFFLEVBQUMsU0FBTjtBQUFBLDhCQUFnQjtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaEIsZUFBdTlGO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF2OUYsZUFBbTFHO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFuMUcsZUFBMG5IO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUExbkgsZUFBeXBIO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6cEgsZUFBd3JIO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4ckgsZUFBdXRIO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF2dEgsZUFBc3ZIO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF0dkgsZUFBcXhIO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyeEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O01BQU1BLE87O0FBR04sSUFBTUMsT0FBTyxHQUFDLFNBQVJBLE9BQVEsR0FBSTtBQUNoQixzQkFDSTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUMsV0FBaEQ7QUFBQSwyQkFBNEQ7QUFBRyxRQUFFLEVBQUMsVUFBTjtBQUFpQixtQkFBVSxVQUEzQjtBQUFBLDhCQUFzQztBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdEMsZUFBOE47QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlOLGVBQXdVO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4VSxlQUFpYztBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBamM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUdELENBSkQ7O01BQU1BLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmRmYzk0OTFkYjJhNDAxMGRmMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL1RvZGF5VG9waWMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0J1xyXG5pbXBvcnQgdXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IHtnZXRMYXN0VG9waWMsZ2V0U3BlY2lmaWNUb3BpY30gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9kYXlUb3BpYydcclxuaW1wb3J0IFN3aXRjaENvbSBmcm9tICcuLi9zd2l0Y2gvc3dpdGNoQ29tJ1xyXG5pbXBvcnQge2FkZERhaWx5VG9waWNQb3N0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3N0J1xyXG5cclxuY29uc3QgUG9zdFRvZGF5VG9waWMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaW1hZ2VPclZpZGVvLCBzZXRJbWFnZU9yVmlkZW9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21hc2ssIHNldE1hc2tdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xhbmd1YWdlICwgc2V0TGFuZ3VhZ2VdPVJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KVxyXG4gIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQodXNlckNvbnRleHQpXHJcbiAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0ZXh0QXJlYURhdGEsc2V0VGV4dEFyZWFEYXRhXT1SZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtjb3VudExldHRyZXMsc2V0Q291bnRMZXR0cmVzXT1SZWFjdC51c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtFbW9qaUNvbnRhaW5lckhlaWdodCwgc2V0RW1vamlDb250YWluZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoOSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gIGNvbnN0IFtlbmFibGVDb21tZW50QW5ub255bVN0YXRlLHNldEVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b2RheVRvcGljRGF0YSxzZXRUb2RheVRvcGljRGF0YV09UmVhY3QudXNlU3RhdGUoKVxyXG4gIGNvbnN0IFB1Ymxpc2hQb3N0PSgpPT57XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwicG9zdFRleHRcIix0ZXh0QXJlYURhdGEpXHJcbiAgIFxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYW5vbnltZVwiLG1hc2spXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJhbGxvd0Fub255bWVDb21tZW50c1wiLGVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGUpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJEYWlseVRvcGljaWRcIix0b2RheVRvcGljRGF0YS5faWQpXHJcbiAgICBhZGREYWlseVRvcGljUG9zdChmb3JtRGF0YSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgICAgc2V0VGV4dEFyZWFEYXRhKFwiXCIpXHJcbiAgICAgIHNldEltYWdlT3JWaWRlbyhmYWxzZSlcclxuICAgICAgcHJvcHMucmVmcmVjaERhdGEoKVxyXG4gICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgYWxlcnQoZXJyb3IpXHJcbiAgICB9KVxyXG4gIH1cclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKHByb3BzLmlkVG9waWMhPXVuZGVmaW5lZCl7XHJcbiAgICAgIFxyXG4gICAgICBnZXRTcGVjaWZpY1RvcGljKHtpZFRvcGljOnByb3BzLmlkVG9waWN9KS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgIHNldFRvZGF5VG9waWNEYXRhKHJlc3VsdC5kYXRhLmRhdGFbMF0pXHJcbiAgICAgXHJcbiAgICAgIH0pLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgfSxbcHJvcHMuaWRUb3BpY10pXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aD41MDApe1xyXG4gICAgICBzZXRFbW9qaUNvbnRhaW5lckhlaWdodCg5KSBcclxuICAgIH1lbHNle1xyXG4gICAgICBzZXRFbW9qaUNvbnRhaW5lckhlaWdodCg4KSBcclxuICAgIH1cclxuICAgIGdldExhc3RUb3BpYygpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgIHNldFRvZGF5VG9waWNEYXRhKHJlc3VsdC5kYXRhLmRhdGFbMF0pXHJcbiAgIFxyXG4gICAgfSkuY2F0Y2goZXJyb3I9PmNvbnNvbGUubG9nKGVycm9yKSlcclxuICB9LFtdKTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKipzYXZlIGltYWdlIGluIHZhciAqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKipyZW1vdmUgaW1hZ2UqKioqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKndoZW4gbWFzayBvbiB1c2VyIHBvc3QgYW5ub255bW9zbHkqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBtYXNrT24gPSAoKSA9PiB7XHJcbiAgICBzZXRNYXNrKGUgPT4gIWUpXHJcbiAgfVxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqaWYgbWFzayBvbiBpdCB3aWxsIHR1cm4gaW50byBibHVlKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihwcm9wcy5sb2dlZE9yTm90IT1mYWxzZSl7XHJcbiAgICAgIGlmIChtYXNrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZXMubWFzaylbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmZpbGwgPSBcIiMxODc2ZjNcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGVzLm1hc2spWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5zdHlsZS5maWxsID0gXCJibGFja1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSwgW21hc2tdKVxyXG5cclxuICBjb25zdCBjbG9zZU9yT3BlbkVtb2ppUGlja2VyPSgpPT57XHJcbiAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgfVxyXG4gIGNvbnN0IHRleHRBcmVhSG9sZGVyPShlKT0+e1xyXG4gICAgZS50YXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCIxNnB4XCI7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5oZWlnaHQgPSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0KStcInB4XCI7XHJcbiAgICBzZXRUZXh0QXJlYURhdGEoZWw9PntcclxuICAgICAgaWYoZWwubGVuZ3RoPD0xMDAwKXtcclxuICAgICAgICByZXR1cm4gZS50YXJnZXQudmFsdWVcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICByZXR1cm4gZWwuc2xpY2UoMCwxMDAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgIGxldCBzeW0gPSBlLnVuaWZpZWQuc3BsaXQoJy0nKVxyXG4gICAgbGV0IGNvZGVzQXJyYXkgPSBbXVxyXG4gICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICBsZXQgZW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2Rlc0FycmF5KVxyXG4gICAgc2V0VGV4dEFyZWFEYXRhKGVsPT57XHJcbiAgICAgIGlmKGVsLmxlbmd0aDw9MTAwMCl7XHJcbiAgICAgICAgcmV0dXJuIGVsK2Vtb2ppXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBlbC5zbGljZSgwLDEwMDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIHNldENvdW50TGV0dHJlcyh0ZXh0QXJlYURhdGEubGVuZ3RoKVxyXG4gIH0sW3RleHRBcmVhRGF0YV0pXHJcbiAgY29uc3QgY2hhbmdlc3RhdGVPZkNvbW1lbnRBbm5vbnltPShzdGF0ZSk9PntcclxuICAgIHNldEVuYWJsZUNvbW1lbnRBbm5vbnltU3RhdGUoc3RhdGUpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9waWN9PlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIDxzcGFuPlRvZGF5IFRvcGljJiMxMDE1MjsgPC9zcGFuPlxyXG4gICAgICAgICAgICB7dG9kYXlUb3BpY0RhdGE/dG9kYXlUb3BpY0RhdGEudG9waWM6XCJcIn1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAge3Byb3BzLmxvZ2VkT3JOb3QhPWZhbHNlICYmPFN3aXRjaENvbSBjaGFuZ2VzdGF0ZU9mQ29tbWVudEFubm9ueW09eyhlKT0+Y2hhbmdlc3RhdGVPZkNvbW1lbnRBbm5vbnltKGUpfSB0ZXh0PXtcImFsbG93IGhpZGRlbiBDb21tZW50c1wifSBzdGF0ZT17ZW5hYmxlQ29tbWVudEFubm9ueW1TdGF0ZX0+PC9Td2l0Y2hDb20+fSBcclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cHJvcHMubG9nZWRPck5vdCE9ZmFsc2UgJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnVzZXJUb3BpY0NvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudXNlckltYWdlfT48aW1nIHNyYz17dXNlci5jdXJyZW50SW1hZ2VVcmwgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucG9zdFRvcGljfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudGV4dEFyZWFDb250YWluZXJ9PlxyXG4gICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPXtcInNheSBzb210aGluZ1wifSAgb25DaGFuZ2U9eyhlKT0+dGV4dEFyZWFIb2xkZXIoZSl9IHZhbHVlPXt0ZXh0QXJlYURhdGF9IGNsYXNzTmFtZT17U3R5bGVzLnRleHRBcmVhfS8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvdW50TGV0dHJlc30+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZXMuY291bnRMZXR0cmVzQ3NzfSBzdHlsZT17Y291bnRMZXR0cmVzPj0xMDAwP3tjb2xvcjpcInJlZFwifTp7fX0+e2NvdW50TGV0dHJlc30gOiAxMDAwPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtTdHlsZXMucG9zdFRleHR9IG9uQ2xpY2s9eygpPT5QdWJsaXNoUG9zdCgpfT48U2VudFN2Zz48L1NlbnRTdmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubWFza0Vtb2ppQW5kVXBsb2FkSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmVtb2ppTG9nb30+PEVtb2ppIGVtb2ppPXt7IGlkOiAnc21pbGluZ19mYWNlX3dpdGhfM19oZWFydHMnLCBza2luOiAzIH19IHNpemU9ezE2fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5lbW9qaVBpY2tlckNvbnRhaW5lcn0+PFBpY2tlciBwZXJMaW5lPXtFbW9qaUNvbnRhaW5lckhlaWdodH0gb25TZWxlY3Q9eyhlKT0+YWRkRW1vamkoZSl9IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubWFza30gcG9zdGFub255bW91c2x5PXtsYW5ndWFnZS5wb3N0QW5vbnltb3VzbHl9IG9uQ2xpY2s9eygpID0+IG1hc2tPbigpfT48TWFza3N2Zz48L01hc2tzdmc+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0VG9kYXlUb3BpY1xyXG5jb25zdCBNYXNrc3ZnPSgpPT57XHJcbiAgcmV0dXJuIDxzdmcgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgaWQ9XCJvdXRsaW5lXCI+PHBhdGggZD1cIm00OTEuMDYyIDEzNi42MDlhOCA4IDAgMCAwIC04LjcxOSAxLjczNGwtMTguMzQzIDE4LjM0NHYtNjAuNjg3YTggOCAwIDAgMCAtMTMuMzE0LTUuOTc5bC00Ni4yNDYgNDEuMTA3YTgyLjU0OSA4Mi41NDkgMCAwIDEgLTU0Ljg5OSAyMC44NzIgOTcuOTg5IDk3Ljk4OSAwIDAgMCAtNjkuNzQxIDI4Ljg4OWwtNy44IDcuOC01LjgwNS01LjgwNmExMDQuNzQ1IDEwNC43NDUgMCAwIDAgLTc0LjU1NC0zMC44ODMgNzUuMDg4IDc1LjA4OCAwIDAgMSAtMzguNS0xMC42MTFsMTAuNTU5LTM1LjIyN2ExMDIuNDM5IDEwMi40MzkgMCAwIDAgLTEwLjI1My04MS45NjJsLTIuNTg3LTQuMzEyYTggOCAwIDAgMCAtMTEuNjYtMi4yODggMTAyLjc0OSAxMDIuNzQ5IDAgMCAwIC00MC4xIDY5LjFsLS45NTMgNy42MTgtNC44MzQtNC4zYTcuOTkgNy45OSAwIDAgMCAtMTIuNjEzIDIuNzI1IDg4LjQ1NSA4OC40NTUgMCAwIDAgLTU2LjctMjAuNzQzIDggOCAwIDAgMCAtOCA4djE2YTg4LjQ1MSA4OC40NTEgMCAwIDAgMzIgNjcuODY4djEwLjE5MWEzMiAzMiAwIDAgMCAtMjIuNjI4IDU0LjYyOGw2LjIgNi4yLTE1LjUxIDEyNC4xMjFhNy45OTEgNy45OTEgMCAwIDAgMS4yODIgNS40M2wxNiAyNGE4IDggMCAwIDAgMTEuMDk0IDIuMjE4bDMuNTYyLTIuMzc1djQzLjcxOWE4IDggMCAwIDAgMi4zNDMgNS42NTdsMjQgMjRhOCA4IDAgMCAwIDExLjMxNCAwbDI0LTI0YTggOCAwIDAgMCAyLjMxNi02LjMyMWwtNy41LTg5Ljk3MWE3Ni42MzcgNzYuNjM3IDAgMCAwIDE5LjgxMSAyLjYzNWgzMS40MzJhNzUuNzg1IDc1Ljc4NSAwIDAgMCA1My45NDEtMjIuMzQzbC42ODctLjY4NmEzMC42MjQgMzAuNjI0IDAgMCAxIDQzLjMxMiAwbDEyLjY4NyAxMi42ODZhOCA4IDAgMCAwIDExLjMxNCAwbDEyLjY4Ny0xMi42ODZhMzAuNjI0IDMwLjYyNCAwIDAgMSA0My4zMTIgMGwuNjg3LjY4NmE3NS43ODUgNzUuNzg1IDAgMCAwIDUzLjk0MSAyMi4zNDNoMTkuNzE2djE0NGE4IDggMCAwIDAgOCA4aDMyYTggOCAwIDAgMCA4LTh2LTE1My4xNTFhNzYuNDUyIDc2LjQ1MiAwIDAgMCA0MC02Ny4xMzN2LTEyMy43MTZhOCA4IDAgMCAwIC00LjkzOC03LjM5MXptLTM2OS42ODkgNDUuNDUtMjcuMzE0LTI3LjMxNXYtMTAuNzQ0YTE2IDE2IDAgMCAxIDI3LjMxMy0xMS4zMTNsMjIuMDU5IDIyLjA1OGExNiAxNiAwIDAgMSAtMTEuMzEzIDI3LjMxNHptLTI3LjMxNCAyMC42ODYtMjAuNjg3LTIwLjY4NiAxMi42ODctMTIuNjg3IDIwLjY4NiAyMC42ODd6bTI4Ljc2Ny0xNDAuNiA3LjUxNyA3LjUxNmE4IDggMCAwIDAgOC4xODcgMS45MzNsMTIuOTI0LTQuMzA4YTg2LjQ4NiA4Ni40ODYgMCAwIDEgLjM4NiAxNC41MTJsLTIxLjM4NiA1LjM0Ny0xMi40OTEtMTIuNDk2YTg2Ljc0NSA4Ni43NDUgMCAwIDEgNC44NjMtMTIuNTA4em0xOS4wMzgtMjUuOTQ1YTg2LjA0IDg2LjA0IDAgMCAxIDYuMzQgMTUuM2wtMTAuMDQzIDMuMzQ4LTYuODI4LTYuODI4YTg2LjI5MSA4Ni4yOTEgMCAwIDEgMTAuNTMxLTExLjgyem0tMjcuNTEgNTcuNDY1IDcuOTg5IDcuOTg4YTggOCAwIDAgMCA3LjYgMi4xbDE5LjE0NS00Ljc4NmMtLjIzLjg2NC0uNDQ5IDEuNzMtLjcwNyAyLjU4OWwtOC4xOTIgMjcuMzA3LTcuNS03LjVhMzEuODA4IDMxLjgwOCAwIDAgMCAtMTIuOTQtNy44NTZsLTcuMDg2LTYuM3ptLTE3LjI4NiAyMS4xcS0uNTM3LjIzOS0xLjA2OC41di0xLjQ0OHptLTY1LjA2OC0yNi4zMTNhNzIgNzIgMCAwIDEgMTYgMy43MjZ2MTkuODIyaC0xNC4xNzJhNzEuNCA3MS40IDAgMCAxIC0xLjgyOC0xNnptNy41NSAzOS41NDhoMTYuNDVhOCA4IDAgMCAwIDgtOHYtMTkuOGE3MS43NyA3MS43NyAwIDAgMSAxNiAxNC41OHYxOC4yMDlhMzIgMzIgMCAwIDAgLTEuOTQxIDExLjAxMXYxMC43NDRsLTE2LjQtMTYuNGE4IDggMCAwIDAgLTEzLjMgMy4zIDcyLjYgNzIuNiAwIDAgMSAtOC44MDktMTMuNjQ0em0yNy4xOTQgMzguMDU4LTIuNzQ0IDIuNzQydi01LjQ5em0tMzAuMDU4IDI4LjY4N2ExNS45IDE1LjkgMCAwIDEgMTEuMzE0LTQuNjg2aDEwLjc0NGwyNy4zMTUgMjcuMzE0djEwLjc0NWExNiAxNiAwIDAgMSAtMjcuMzE0IDExLjMxM2wtMjIuMDU4LTIyLjA1OWExNi4wMTcgMTYuMDE3IDAgMCAxIC0uMDAxLTIyLjYyN3ptNS41MzMgMTc4LjE2MS05LjkxMS0xNC44NjcgMTMuNi0xMDguODE1IDEuNTIyIDEuNTIxYTMyLjAyOSAzMi4wMjkgMCAwIDAgOC41NyA2LjEyOXYxMDYuODQ1em0zNy43ODEgNzEuNzgxLTE2LTE2di01MS4wNzJsNC40MzgtMi45NTlhOCA4IDAgMCAwIDMuNTYyLTYuNjU2di0xMDcuOTQ2YTMxLjg1MiAzMS44NTIgMCAwIDAgOS40NzQtMi4wMzNsMTQuMjQ2IDE3MC45NDZ6bTM2MCAzNS4zMTNoLTE2di0xMzYuMTI4YTc2LjMgNzYuMyAwIDAgMCAxNi0yLjYwN3ptNDAtMjEyLjI4NGE2MC4yODUgNjAuMjg1IDAgMCAxIC02MC4yODQgNjAuMjg0aC0zMS40MzJhNTkuODkgNTkuODkgMCAwIDEgLTQyLjYyNy0xNy42NTdsLS42ODYtLjY4N2E0Ni42MzEgNDYuNjMxIDAgMCAwIC02NS45NDIgMGwtNy4wMjkgNy4wMzEtNy4wMjktNy4wMzFhNDYuNjMxIDQ2LjYzMSAwIDAgMCAtNjUuOTQyIDBsLS42ODYuNjg3YTU5Ljg5IDU5Ljg5IDAgMCAxIC00Mi42MjcgMTcuNjU3aC0zMS40MzJhNjAuNzEgNjAuNzEgMCAwIDEgLTIxLjI0Ny0zLjg5NWwtNi41LTc4LjAxMWEzMS43NjIgMzEuNzYyIDAgMCAwIDUuNTIzLTE3Ljk3NnYtMTAuNzQ1bDE5LjMxNC0xOS4zMTRoMTAuNzQ1YTMyIDMyIDAgMCAwIDMyLTMyYzAtLjc4OC0uMDM4LTEuNTY5LS4wOTQtMi4zNDZhOTEuMTUyIDkxLjE1MiAwIDAgMCAyNy42MTYgNC4yODcgODguODQ5IDg4Ljg0OSAwIDAgMSA2My4yNCAyNi4xOTVsMTEuNDYyIDExLjQ2MmE4IDggMCAwIDAgMTEuMzE0IDBsMTMuNDU0LTEzLjQ1N2E4Mi4wOTQgODIuMDk0IDAgMCAxIDU4LjQzLTI0LjIgOTguNTQxIDk4LjU0MSAwIDAgMCA2NS41MjktMjQuOTEzbDMyLjkzLTI5LjI3M3Y2Mi4xODZhOCA4IDAgMCAwIDEzLjY1NyA1LjY1N2wxOC4zNDMtMTguMzQ0elwiLz48cGF0aCBkPVwibTQzMC44MjQgMjQwLjQ3OSA4LjYtMjEuNTA3YTggOCAwIDAgMCAtNy40MjQtMTAuOTcyaC00OS4xNjdhNzAuODM3IDcwLjgzNyAwIDAgMCAtNjMuMzU0IDM5LjE1NWwtNi42MzQgMTMuMjY3YTggOCAwIDAgMCA2LjE2MyAxMS41MTZsNDguMjYyIDYuMDM0YTYwLjkyNyA2MC45MjcgMCAwIDAgNy41MzMuNDY5IDYwLjQgNjAuNCAwIDAgMCA1Ni4wMjEtMzcuOTYyem0tMzYuMjE2IDE3LjI3M2E0NC4yMTEgNDQuMjExIDAgMCAxIC0yNS4zNTQgNC4zNDNsLTM3LjA0MS00LjYzIDEuNTc2LTMuMTU0YTU0LjgzNiA1NC44MzYgMCAwIDEgNDkuMDQ0LTMwLjMxMWgzNy4zNTFsLTQuMjE1IDEwLjUzN2E0NC4zNCA0NC4zNCAwIDAgMSAtMjEuMzYxIDIzLjIxNXpcIi8+PHBhdGggZD1cIm0yMzIuNTIxIDI0Ny4xNTZhNzAuODM0IDcwLjgzNCAwIDAgMCAtNjMuMzU0LTM5LjE1NmgtNDkuMTY3YTggOCAwIDAgMCAtNy40MjggMTAuOTcybDguNiAyMS41MDdhNjAuMzUxIDYwLjM1MSAwIDAgMCA2My41NTQgMzcuNDkzbDQ4LjI2Mi02LjAzNGE4IDggMCAwIDAgNi4xNjMtMTEuNTE2em0tNDkuNzc1IDE0Ljk0NGE0NC4zODQgNDQuMzg0IDAgMCAxIC00Ni43MTUtMjcuNTU5bC00LjIxNS0xMC41NDFoMzcuMzUxYTU0LjgzMiA1NC44MzIgMCAwIDEgNDkuMDQ0IDMwLjMxMmwxLjU3NiAzLjE1M3pcIi8+PHBhdGggZD1cIm0zODQgMjg4aDE2djE2aC0xNnpcIi8+PHBhdGggZD1cIm0xMjAgMjgwaDE2djE2aC0xNnpcIi8+PHBhdGggZD1cIm0xNTIgMjg4aDE2djE2aC0xNnpcIi8+PHBhdGggZD1cIm00MTYgMjgwaDE2djE2aC0xNnpcIi8+PHBhdGggZD1cIm00MzIgMjU2aDE2djE2aC0xNnpcIi8+PHBhdGggZD1cIm0xMDQgMjU2aDE2djE2aC0xNnpcIi8+PC9nPjwvc3ZnPlxyXG59XHJcbmNvbnN0IFNlbnRTdmc9KCk9PntcclxuICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9