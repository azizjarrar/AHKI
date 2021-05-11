module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/settings/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/Toast/Toast.js":
/*!***********************************!*\
  !*** ./components/Toast/Toast.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toast_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast.module.scss */ "./components/Toast/Toast.module.scss");
/* harmony import */ var _Toast_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Toast_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\AHKI\\components\\Toast\\Toast.js";



const Toast = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `${_Toast_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container}`,
    style: props.color != undefined ? {
      backgroundColor: props.color
    } : {},
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./components/Toast/Toast.module.scss":
/*!********************************************!*\
  !*** ./components/Toast/Toast.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Toast_container__1ZdGs",
	"downtoUp": "Toast_downtoUp__rc00h"
};


/***/ }),

/***/ "./components/changeLanguage/changeLanguage.js":
/*!*****************************************************!*\
  !*** ./components/changeLanguage/changeLanguage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeLanguage.module.scss */ "./components/changeLanguage/changeLanguage.module.scss");
/* harmony import */ var _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/initLanguage/initLanguage */ "./components/initLanguage/initLanguage.js");

var _jsxFileName = "F:\\AHKI\\components\\changeLanguage\\changeLanguage.js";





const changeLanguage = () => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false); // open box to choice lang

  const [displayLang, setDisplay] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false); // hide change lang box if true

  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_3__["default"]);

  const openLang = () => {
    setOpen(e => !e);
  };

  const changeLanguage = e => {
    localStorage.setItem("language", e);
    setLanguage(Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_4__["default"])(localStorage.getItem('language') || "eng"));
  };

  const RemoveChangeLang = () => {
    setDisplay(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    style: displayLang ? {
      display: "none"
    } : {},
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.closeLangChange,
      onClick: () => RemoveChangeLang()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: () => openLang(),
      className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.svgContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "language",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          fill: "currentColor",
          d: "M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 226
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 77
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), open && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _changeLanguage_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changeLang,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        onClick: () => changeLanguage("arabic"),
        children: "\u0639\u0631\u0628\u064A\u0629"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        onClick: () => changeLanguage("eng"),
        children: "english"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        onClick: () => changeLanguage("fr"),
        children: "france"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 22
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (changeLanguage);

/***/ }),

/***/ "./components/changeLanguage/changeLanguage.module.scss":
/*!**************************************************************!*\
  !*** ./components/changeLanguage/changeLanguage.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "changeLanguage_container__2A91f",
	"closeLangChange": "changeLanguage_closeLangChange__2eUYS",
	"svgContainer": "changeLanguage_svgContainer__1LLZg",
	"changeLang": "changeLanguage_changeLang__3DFUd"
};


/***/ }),

/***/ "./components/facebookLogIn/facebookLogIn.js":
/*!***************************************************!*\
  !*** ./components/facebookLogIn/facebookLogIn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _facebookLogIn_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facebookLogIn.module.scss */ "./components/facebookLogIn/facebookLogIn.module.scss");
/* harmony import */ var _facebookLogIn_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_facebookLogIn_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user */ "./services/user.js");

var _jsxFileName = "F:\\AHKI\\components\\facebookLogIn\\facebookLogIn.js";





const FacebookLoginFn = () => {
  const responseFacebook = e => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["LoginFacebook"])({
      expiresIn: e.expiresIn,
      accessToken: e.accessToken,
      id: e.id,
      urlImage: e.picture.data.url
    }).then(res => {
      if (res.data.state == false) {
        alert(res.data.message);
      } else {
        fetch("api/setToken", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: res.data.token
          })
        }).then(data => {
          localStorage.setItem("ref_token", res.data.ref_token);
          location.reload();
          props.openOrcloseModal();
        });
      }
    }).catch(e => {
      console.log(e);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _facebookLogIn_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_facebook_login__WEBPACK_IMPORTED_MODULE_2___default.a, {
      appId: "428158131820092",
      autoLoad: false,
      fields: "name,email,picture",
      callback: responseFacebook
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FacebookLoginFn);

/***/ }),

/***/ "./components/facebookLogIn/facebookLogIn.module.scss":
/*!************************************************************!*\
  !*** ./components/facebookLogIn/facebookLogIn.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Container": "facebookLogIn_Container__2RYXQ"
};


/***/ }),

/***/ "./components/initLanguage/initLanguage.js":
/*!*************************************************!*\
  !*** ./components/initLanguage/initLanguage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initLanguage = e => {
  var lang = {};

  switch (e) {
    case "eng":
      lang = {
        postAnonymously: "post Anonymously",
        Uploadphotowithyourpost: "Upload photo with your post",
        ForgotPassword: "Forgot Password?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "create a profile follow other accounts talk about your own experience and more",
        telephoneoremail: "telephone or email",
        cancel: "cancel",
        update: "update",
        putyournewEmail: "put your new Email here",
        UpdateYourEmail: "Update Your Email",
        ConfermationCode: "Confermation Code",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "You Will recive confermation Code put it here And Click Update",
        putyournewphonenumberhere: "put your new phone number here",
        UpdateYourPhoneNumber: "Update Your PhoneNumber",
        newpasswordneedtobeatleastlength: "new password need to be at least 8 length",
        Itsagoodideatouseastrongpasswordthatyou: "It's a good idea to use a strong password that you're not using elsewhere",
        newPassword: "new Password",
        oldPassword: "old Password",
        AccountSetting: "Account Setting",
        UpdateYourPassword: "Update Your Password",
        birthday: "birth day",
        topic: '',
        todayTopic: 'today Topic',
        FriendsPosts: 'friends publication',
        Following: 'following',
        Followers: 'Followers',
        UpdateProfile: 'Update Profile',
        YourPosts: 'Your Posts',
        Likes: 'Likes',
        Posts: 'Posts',
        radioboxDelteAccount: 'radioboxDelteAccount',
        DeleteAccountHeader: 'DeleteAccountHeader',
        savechange: 'savechange',
        changePassword: 'changePassword',
        Deactivating: 'Deactivating',
        Deleting: 'Deleting',
        username: 'username',
        firstname: 'firstname',
        lastname: 'lastname',
        biography: 'biography',
        phone: 'phone',
        email: 'email',
        password: 'password',
        day: 'day',
        month: 'month',
        year: 'year',
        confirmpassword: 'confirmpassword',
        placeholderInput: 'say somthing',
        Upload_photo_with_your_post_Hover: 'Upload photo with your post',
        post_Anonymously_hover: 'post_Anonymously',
        signin: 'sign in',
        signup: 'sign up',
        AlreadyHaveAccount: 'Already Have Account',
        YoudonthaveaccountClickhereto: 'You dont have account Click here to',
        verificationcode: "verification code",
        send: "send"
      };
      break;

    case "fr":
      lang = {
        postAnonymously: "publier de manière anonyme",
        Uploadphotowithyourpost: "Télécharger une photo avec votre message",
        ForgotPassword: "Mot de passe oublié?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "créer un profil suivre d'autres comptes parler de votre propre expérience et plus",
        telephoneoremail: "téléphone ou email",
        cancel: "Annuler",
        update: "mettre à jour",
        putyournewEmail: "mettez votre nouveau courriel ici",
        UpdateYourEmail: "Mettez à jour votre e-mail",
        ConfermationCode: "Code de confermation",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "Vous recevrez le code de confermation, mettez-le ici et cliquez sur Mettre à jour",
        putyournewphonenumberhere: "mettez votre nouveau numéro de téléphone ici",
        UpdateYourPhoneNumber: "Mettez à jour votre numéro de téléphone",
        newpasswordneedtobeatleastlength: "le nouveau mot de passe doit avoir une longueur d'au moins 8",
        Itsagoodideatouseastrongpasswordthatyou: "C'est une bonne idée d'utiliser un mot de passe fort que vous n'utilisez pas ailleurs",
        newPassword: "nouveau mot de passe",
        oldPassword: "ancien mot de passe",
        AccountSetting: "Paramètre du compte",
        UpdateYourPassword: "Mettez à jour votre mot de passe",
        birthday: "date d'anniversairey",
        topic: '',
        todayTopic: "Sujet d'aujourd 'hui",
        FriendsPosts: "publication d'amis",
        Following: 'suivante',
        Followers: 'Suiveurs',
        UpdateProfile: 'Mettre à jour le profil',
        YourPosts: 'Vos publications',
        Likes: "j'aimes",
        Posts: 'des postes',
        radioboxDelteAccount: 'Suppression',
        DeleteAccountHeader: 'Supprimer le compte',
        savechange: 'sauvegarder les modifications',
        changePassword: 'changer le mot de passe',
        Deactivating: 'Ceci est permanent.Lorsque vous supprimez votre compte, vous ne pourrez pas récupérer le contenu ou les informations que vous avez partagés sur l application.',
        Deleting: 'supprime',
        username: "Nom d'utilisateur",
        firstname: 'Prénom',
        lastname: 'nom de famille',
        biography: 'Biographie',
        phone: 'téléphone',
        email: 'email',
        password: 'mot de passe',
        day: 'jour',
        month: 'month',
        year: 'year',
        confirmpassword: 'Confirmez le mot de passe',
        placeholderInput: 'à quoi penses-tu',
        Upload_photo_with_your_pos_tHover: 'Télécharger une photo avec votre message',
        post_Anonymously_hover: 'publier de manière anonyme',
        signin: "s'identifier",
        signup: "S'inscrire",
        AlreadyHaveAccount: 'Vous avez déjà un compte',
        YoudonthaveaccountClickhereto: "Vous n'avez pas de compte Cliquez ici pour",
        verificationcode: "code de vérification",
        send: "envoyer"
      };
      break;

    case "arabic":
      lang = {
        postAnonymously: "نشر مجهول",
        Uploadphotowithyourpost: "تحميل الصورة مع منشورك",
        ForgotPassword: "هل نسيت كلمة السر?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "إنشاء حساب  تابع حسابات أخرى تحدث عن تجربتك الخاصة والمزيد",
        telephoneoremail: "الهاتف أو البريد الإلكتروني",
        cancel: "إلغاء",
        update: "تحديث",
        putyournewEmail: "ضع بريدك الإلكتروني الجديد هنا",
        UpdateYourEmail: "قم بتحديث بريدك الإلكتروني",
        ConfermationCode: "كود التأكيد",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "سوف تتلقى رمز التأكيد وضعه هنا وانقر فوق تحديث",
        putyournewphonenumberhere: "ضع رقم هاتفك الجديد هنا",
        UpdateYourPhoneNumber: "قم بتحديث رقم هاتفك",
        newpasswordneedtobeatleastlength: "يجب ألا يقل طول كلمة المرور الجديدة عن 8",
        Itsagoodideatouseastrongpasswordthatyou: "من الجيد استخدام كلمة مرور قوية لا تستخدمها في أي مكان آخر",
        newPassword: "كلمة السر الجديدة",
        oldPassword: "كلمة المرور القديمة",
        birthday: "عيد الميلاد",
        AccountSetting: "إعدادات الحساب",
        topic: '',
        UpdateYourPassword: "قم بتحديث كلمة المرور الخاصة بك",
        arabic: "موضوع اليوم",
        todayTopic: 'نشر الأصدقاء',
        FriendsPosts: 'الأصدقاء',
        Following: 'متابعهم',
        Followers: 'المتابعين',
        UpdateProfile: 'تحديث البينات',
        YourPosts: 'منشوراتك',
        Likes: 'اعجبتاك',
        Posts: 'المشاركات',
        radioboxDelteAccount: 'حذف',
        DeleteAccountHeader: 'حذف الحساب',
        savechange: 'حفظ التغيير',
        changePassword: 'تغير كلمة السر',
        Deactivating: "اسم الشهرةهذا دائم ، عندما تحذف حسابك ، لن تتمكن من استرداد المحتوى أو المعلومات التي شاركتها على التطبيق.",
        Deleting: 'شطب',
        username: 'اسم الشهرة',
        firstname: 'الاسم',
        lastname: 'اللقب',
        biography: 'سيرة شخصية',
        phone: 'هاتف',
        email: 'البريد',
        password: "كلمه السر",
        day: 'يوم',
        month: 'الشهر',
        year: 'العام',
        confirmpassword: 'تاكيد كلمة المرور',
        placeholderInput: 'بماذا تفكر',
        Upload_photo_with_your_pos_tHover: 'تحميل الصورة مع منشورك',
        post_Anonymously_hover: 'نشر مجهول',
        signin: 'تسجيل الدخول',
        signup: 'اشتراك',
        AlreadyHaveAccount: 'لديك حساب بالفعل',
        YoudonthaveaccountClickhereto: 'ليس لديك حساب انقر هنا',
        verificationcode: "رمز التحقق",
        send: "إرسال"
      };
      break;

    default:
      lang = {
        postAnonymously: "post Anonymously",
        Uploadphotowithyourpost: "Upload photo with your post",
        ForgotPassword: "Forgot Password?",
        createaprofilefollowotheraccountstalkaboutyourownexperienceandmore: "create a profile follow other accounts talk about your own experience and more",
        telephoneoremail: "telephone or email",
        cancel: "cancel",
        update: "update",
        putyournewEmail: "put your new Email here",
        UpdateYourEmail: "Update Your Email",
        ConfermationCode: "Confermation Code",
        YouWillreciveconfermationCodeputithereAndClickUpdate: "You Will recive confermation Code put it here And Click Update",
        putyournewphonenumberhere: "put your new phone number here",
        UpdateYourPhoneNumber: "Update Your PhoneNumber",
        newpasswordneedtobeatleastlength: "new password need to be at least 8 length",
        Itsagoodideatouseastrongpasswordthatyou: "It's a good idea to use a strong password that you're not using elsewhere",
        newPassword: "new Password",
        topic: '',
        oldPassword: "old Password",
        UpdateYourPassword: "Update Your Password",
        AccountSetting: "Account Setting",
        birthday: "birth day",
        todayTopic: 'today Topic',
        FriendsPosts: 'friends publication',
        Following: 'following',
        Followers: 'Followers',
        UpdateProfile: 'Update Profile',
        YourPosts: 'Your Posts',
        Likes: 'Likes',
        Posts: 'Posts',
        radioboxDelteAccount: 'radioboxDelteAccount',
        DeleteAccountHeader: 'DeleteAccountHeader',
        savechange: 'savechange',
        changePassword: 'changePassword',
        Deactivating: 'Deactivating',
        Deleting: 'Deleting',
        username: 'username',
        firstname: 'firstname',
        lastname: 'lastname',
        biography: 'biography',
        phone: 'phone',
        email: 'email',
        password: 'password',
        day: 'day',
        month: 'month',
        year: 'year',
        confirmpassword: 'confirmpassword',
        placeholderInput: 'say Somthing',
        Upload_photo_with_your_post_Hover: 'Upload photo with your post',
        post_Anonymously_hover: 'post_Anonymously',
        signin: 'sign in',
        signup: 'sign up',
        AlreadyHaveAccount: 'Already Have Account',
        YoudonthaveaccountClickhereto: 'You dont have account Click here to',
        verificationcode: "verification code",
        send: "send"
      };
  }

  return lang;
};

/* harmony default export */ __webpack_exports__["default"] = (initLanguage);

/***/ }),

/***/ "./components/modalSingInSingUp/ModalSingInSingUp.js":
/*!***********************************************************!*\
  !*** ./components/modalSingInSingUp/ModalSingInSingUp.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalSingInSingUp.module.scss */ "./components/modalSingInSingUp/ModalSingInSingUp.module.scss");
/* harmony import */ var _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_input_2_lib_material_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2/lib/material.css */ "./node_modules/react-phone-input-2/lib/material.css");
/* harmony import */ var react_phone_input_2_lib_material_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_material_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popUpMessage_popUpMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popUpMessage/popUpMessage */ "./components/popUpMessage/popUpMessage.js");
/* harmony import */ var _singIn_singIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singIn/singIn */ "./components/modalSingInSingUp/singIn/singIn.js");
/* harmony import */ var _singUp_singUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singUp/singUp */ "./components/modalSingInSingUp/singUp/singUp.js");
/* harmony import */ var _verifyAccount_verifyAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../verifyAccount/verifyAccount */ "./components/verifyAccount/verifyAccount.js");
/* harmony import */ var _changeLanguage_changeLanguage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../changeLanguage/changeLanguage */ "./components/changeLanguage/changeLanguage.js");

var _jsxFileName = "F:\\AHKI\\components\\modalSingInSingUp\\ModalSingInSingUp.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ModalSingInSingUp = props => {
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    state: false,
    text: ""
  }); // when state true show  pop up 

  const {
    0: showSingIn_Or_SHowSingUp,
    1: setShowSingIn_Or_SHowSingUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  /*change between sing in and sing up */

  const {
    0: verifiedAccountModal,
    1: setverifiedAccountModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); //when trye open modal to put the code

  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const fnsetShowSingIn_Or_SHowSingUp = () => {
    setShowSingIn_Or_SHowSingUp(e => !e);
  };

  const closeModal = () => {
    props.openOrcloseModal();
  };

  const closePopUp = () => {
    setErrorMessage({
      state: false,
      text: ""
    });
  };

  const setErrorMessagefn = e => {
    setErrorMessage(_objectSpread({}, e));
  };

  const openVerifieAccountModalfn = userid => {
    setUserId(userid);
    setverifiedAccountModal(e => !e);
  };
  /***test */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contrainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.waveContainer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), errorMessage.state == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_popUpMessage_popUpMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      fnclose: closePopUp,
      openPopUp: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 38
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changelang,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_changeLanguage_changeLanguage__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 41
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formContainer,
      children: [verifiedAccountModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_verifyAccount_verifyAccount__WEBPACK_IMPORTED_MODULE_7__["default"], {
        setErrorMessageProps: setErrorMessagefn,
        userId: userId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 30
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.closebtn,
        onClick: () => closeModal()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formsContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_singIn_singIn__WEBPACK_IMPORTED_MODULE_5__["default"], {
          openVerifieAccountModal: openVerifieAccountModalfn,
          setErrorMessageProps: setErrorMessagefn,
          showSingIn_Or_SHowSingUp: showSingIn_Or_SHowSingUp,
          fnshowSingInOrSingUp: fnsetShowSingIn_Or_SHowSingUp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_singUp_singUp__WEBPACK_IMPORTED_MODULE_6__["default"], {
          openVerifieAccountModal: openVerifieAccountModalfn,
          setErrorMessageProps: setErrorMessagefn,
          showSingIn_Or_SHowSingUp: showSingIn_Or_SHowSingUp,
          fnshowSingInOrSingUp: fnsetShowSingIn_Or_SHowSingUp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalSingInSingUp);

/***/ }),

/***/ "./components/modalSingInSingUp/ModalSingInSingUp.module.scss":
/*!********************************************************************!*\
  !*** ./components/modalSingInSingUp/ModalSingInSingUp.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./components/modalSingInSingUp/singIn/singIn.js":
/*!*******************************************************!*\
  !*** ./components/modalSingInSingUp/singIn/singIn.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModalSingInSingUp.module.scss */ "./components/modalSingInSingUp/ModalSingInSingUp.module.scss");
/* harmony import */ var _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/apiIsLoadingContext */ "./context/apiIsLoadingContext.js");
/* harmony import */ var _facebookLogIn_facebookLogIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../facebookLogIn/facebookLogIn */ "./components/facebookLogIn/facebookLogIn.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user */ "./services/user.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "F:\\AHKI\\components\\modalSingInSingUp\\singIn\\singIn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const singIn = props => {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const [loginState, setLoginState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});

  const singIn = () => {
    setIsLoading(true);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_6__["Login"])(loginState).then(res => {
      if (res.data.state == false) {
        props.setErrorMessageProps({
          state: true,
          text: res.data.message
        });
        setIsLoading(false);
      } else if (res.data.verified == false) {
        props.openVerifieAccountModal(res.data.userid);
        setIsLoading(false);
      } else {
        fetch("/api/setToken", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: res.data.token
          })
        }).then(() => {
          localStorage.setItem("ref_token", res.data.ref_token);
          setIsLoading(false);
          location.reload();
        });
      }
    }).catch(e => {
      setIsLoading(false);
      props.setErrorMessageProps({
        state: true,
        text: e.message
      });
    });
  };

  const setLoginData = e => {
    const {
      name,
      value
    } = e.target;
    setLoginState(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  }; //onKeyUp={(e)=>e.target.value=e.target.value.replace(/[^\d]/,'')}  


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.singIn,
    style: props.showSingIn_Or_SHowSingUp ? {
      left: '0%'
    } : {
      left: '100%'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form,
      onSubmit: e => {
        e.preventDefault();
      },
      autoComplete: "new-password",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pageHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Log in to NOZZLA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 55
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.descriptionHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: language.createaprofilefollowotheraccountstalkaboutyourownexperienceandmore
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 62
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "",
        value: "",
        readOnly: true,
        style: {
          display: "none"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => setLoginData(e),
          defaultValue: "",
          name: "identity",
          type: "text",
          className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 53
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.labelspan,
            children: language.telephoneoremail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 188
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 181
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => setLoginData(e),
          defaultValue: "",
          name: "password",
          type: "password",
          className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 53
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.labelspan,
            children: language.password
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 192
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 185
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        onClick: () => singIn(),
        children: language.signin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message,
        children: [language.YoudonthaveaccountClickhereto, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clickHere,
          onClick: () => props.fnshowSingInOrSingUp(),
          children: language.signup
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 85
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 188
        }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/forgetPassword",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.forgetPassword,
            children: language.ForgotPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 224
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 195
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (singIn);

/***/ }),

/***/ "./components/modalSingInSingUp/singUp/singUp.js":
/*!*******************************************************!*\
  !*** ./components/modalSingInSingUp/singUp/singUp.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2 */ "react-phone-input-2");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user */ "./services/user.js");
/* harmony import */ var _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ModalSingInSingUp.module.scss */ "./components/modalSingInSingUp/ModalSingInSingUp.module.scss");
/* harmony import */ var _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_rainbow_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-rainbow-components */ "react-rainbow-components");
/* harmony import */ var react_rainbow_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_rainbow_components__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "F:\\AHKI\\components\\modalSingInSingUp\\singUp\\singUp.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const singUp = props => {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [confirmRegisterForm, setConfirmRegisterForm] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false); //enable and disable sing up button if the from is not complete

  const [errorData, setErrorData] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    userName: {
      state: 'false',
      msg: ''
    },
    password: {
      state: 'false',
      msg: ''
    },
    email: {
      state: 'false',
      msg: ''
    }
  }); //error messages

  const [registerState, setregisterState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    userName: "",
    tel: "",
    password: "",
    email: "",
    birthDay: "2000-01-01T23:00:00.000Z",
    dialCode: ""
  }); //user register data

  const [changeEmailOrTelinit, setChangeEmailOrTel] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("email");
  var userName = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  var password = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setTimeout(() => {
      userName.current.value = "";
      password.current.value = "";
    }, 1000);
  }, []);

  const singUp = () => {
    if (changeEmailOrTelinit == "email") {
      delete registerState["tel"];
    } else {
      delete registerState["email"];
    }

    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["Register"])(registerState).then(res => {
      if (res.data == undefined) {} else if (res.data.state == false) {
        props.setErrorMessageProps({
          state: true,
          text: res.data.message
        });
      } else {
        props.openVerifieAccountModal(res.data.userid);
        props.fnshowSingInOrSingUp();
      }
    }).catch(e => {
      props.setErrorMessageProps({
        state: true,
        text: e.message
      });
    });
  };

  const formValidation = e => {
    let tel = "";
    let email = "";

    if (e.target.form != null) {
      let userName = e.target.form[0].value || "";

      if (e.target.form[1].name == "phone") {
        tel = e.target.form[1].value;
        email = "";
      } else {
        tel = "";
        email = e.target.form[1].value;
      }

      let password = e.target.form[2].value || "";
      let confirmPassword = e.target.form[3].value || "";
      let birdhDay = e.target.form[4].value || "";

      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      if (email.length > 0) {
        if (validateEmail(email.toLowerCase())) {
          e.target.form[1].style.border = "1px solid rgba(22, 24, 35, 0.12) ";
          setErrorData(e => {
            return _objectSpread(_objectSpread({}, e), {}, {
              email: {
                state: 'false',
                msg: ''
              }
            });
          });
        } else {
          e.target.form[1].style.border = "1px solid red ";
          setErrorData(e => {
            return _objectSpread(_objectSpread({}, e), {}, {
              email: {
                state: 'true',
                msg: 'Enter a valid email address'
              }
            });
          });
        }
      }

      if (confirmPassword.length > 1) {
        if (password != confirmPassword) {
          document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid red";
          document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid red";
          setErrorData(e => {
            return _objectSpread(_objectSpread({}, e), {}, {
              password: {
                state: 'true',
                msg: 'the 2 password are not the same'
              }
            });
          });
        } else {
          if (password.length < 8) {
            setErrorData(e => {
              return _objectSpread(_objectSpread({}, e), {}, {
                password: {
                  state: 'true',
                  msg: 'your browser must contain more than 8 letters'
                }
              });
            });
          } else {
            setErrorData(e => {
              return _objectSpread(_objectSpread({}, e), {}, {
                password: {
                  state: 'false',
                  msg: 'your browser must contain more than 8 letters'
                }
              });
            });
            document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid rgba(22, 24, 35, 0.12)";
            document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid rgba(22, 24, 35, 0.12)";
          }
        }
      } else {
        document.getElementsByClassName(e.target.form[3].classList[1])[0].style.border = "1px solid rgba(22, 24, 35, 0.12)";
        document.getElementsByClassName(e.target.form[3].classList[1])[1].style.border = "1px solid rgba(22, 24, 35, 0.12)";
      }

      if (userName.length > 0 && password.length > 0 && confirmPassword.length > 0 && (validateEmail(email) || tel.length > 6)) {
        if (password == confirmPassword) {
          setConfirmRegisterForm(true);
          return true;
        } else {
          setConfirmRegisterForm(false);
          return false;
        }
      } else {
        setConfirmRegisterForm(false);
        return false;
      }
    }
  };
  /****************************************/

  /************Set Phone Number************/

  /****************************************/


  const onChangeHandlerRegisterPhone = (data, country) => {
    setregisterState(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        "dialCode": country.dialCode,
        'tel': data
      });
    });
  };
  /****************************************/

  /********Set User Name and Password******/

  /****************************************/


  const userName_Password_Handler = e => {
    const {
      name,
      value
    } = e.target;
    setregisterState(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const changeEmailOrTel = () => {
    setChangeEmailOrTel(e => {
      if (e == "email") {
        setregisterState(e => {
          return _objectSpread(_objectSpread({}, e), {}, {
            email: ""
          });
        });
        setConfirmRegisterForm(false);
        return "tel";
      } else {
        setregisterState(e => {
          return _objectSpread(_objectSpread({}, e), {}, {
            tel: ""
          });
        });
        setConfirmRegisterForm(false);
        return "email";
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.singUp,
    style: props.showSingIn_Or_SHowSingUp ? {
      left: '0%'
    } : {
      left: '-100%'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.form,
      onSubmit: e => {
        e.preventDefault();
      },
      onChange: e => {
        formValidation(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.pageHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Sing up For NOZZLA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.descriptionHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: language.createaprofilefollowotheraccountstalkaboutyourownexperienceandmore
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: userName,
          name: "userName",
          type: "text",
          className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
          onChange: e => userName_Password_Handler(e),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelspan,
            children: language.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined), errorData.userName.state == "true" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.errorMessage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: errorData.userName.msg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 84
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 48
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.telOrEmail,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelEmailOrPassword,
            onClick: () => changeEmailOrTel(),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["change to ", changeEmailOrTelinit]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, undefined), changeEmailOrTelinit == "tel" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tel,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default.a, {
              name: "tel",
              specialLabel: language.phone,
              country: 'tn',
              inputProps: {
                name: 'phone',
                required: true,
                autoFocus: true
              },
              value: registerState.tel,
              onChange: (e, country) => onChangeHandlerRegisterPhone(e, country)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 79
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 52
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.email,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "email",
              type: "text",
              onChange: e => {
                userName_Password_Handler(e);
              },
              className: `${_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input} `,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 346
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelspan,
                children: language.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 477
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 470
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 317
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), errorData.email.state == "true" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.errorMessage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: errorData.email.msg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 81
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 45
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: password,
          name: "password",
          type: "password",
          onChange: e => {
            userName_Password_Handler(e);
          },
          className: `${_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ConfirmPassword} ${_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input} `,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelspan,
            children: language.password
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined), errorData.password.state == "true" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.errorMessage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: errorData.password.msg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 84
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 48
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: `${_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input} ${_ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ConfirmPassword}`,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelspan,
            children: language.confirmpassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_rainbow_components__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
          value: registerState.birthDay,
          onChange: value => setregisterState(e => {
            return _objectSpread(_objectSpread({}, e), {}, {
              "birthDay": value
            });
          }),
          label: "birth Day",
          formatStyle: "large",
          locale: language.age
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined), confirmRegisterForm == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
        onClick: () => singUp(),
        children: language.signup
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 41
      }, undefined), confirmRegisterForm == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
        disabled: true,
        style: {
          opacity: 0.2,
          cursor: 'default'
        },
        children: language.signup
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 42
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.message,
        children: [language.AlreadyHaveAccount, "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ModalSingInSingUp_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.clickHere,
          onClick: () => props.fnshowSingInOrSingUp(),
          children: language.signin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 69
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (singUp);

/***/ }),

/***/ "./components/navBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/navBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.module.scss */ "./components/navBar/NavBar.module.scss");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modalSingInSingUp_ModalSingInSingUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modalSingInSingUp/ModalSingInSingUp */ "./components/modalSingInSingUp/ModalSingInSingUp.js");
/* harmony import */ var _profileMenu_profileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profileMenu/profileMenu */ "./components/profileMenu/profileMenu.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");
/* harmony import */ var _components_searchUser_searchUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/searchUser/searchUser */ "./components/searchUser/searchUser.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_notification_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/notification/notification */ "./components/notification/notification.js");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/chat */ "./services/chat.js");
/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/socketContext */ "./context/socketContext.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/user */ "./services/user.js");

var _jsxFileName = "F:\\AHKI\\components\\navBar\\NavBar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const NavBar = ({
  token
}) => {
  const {
    0: modalSingInSingUp,
    1: setModalSingInSingUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); //open modal

  const [heightAndWidthOfWindow, setHeightAndWidthOfWindow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    width: '',
    height: ''
  }); //responsive handler

  const {
    0: openMenuProfileState,
    1: setOpenMenuProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); //on hover profile pic open menu

  const [disyplaySearch, setDisplaySearch] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    state: false,
    userName: ""
  });
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const [numberOfChatsNotRead, setNumberOfChatsNotRead] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const [socket, setSocket] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_socketContext__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const [popUpUser, setPopUpUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [popUpNotif, setpopUpNotif] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(() => 0);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    async function chatHandler(data) {
      let audio = new Audio("./msgSound.mp3");
      audio.play();

      if (router.pathname != "/chat") {
        Object(_services_user__WEBPACK_IMPORTED_MODULE_12__["GetOtherUsersData"])(data.senderId, token).then(result => {
          setPopUpUser(_objectSpread({}, result.data.data[0]));
        }).catch(error => {
          alert(error);
        });
      }
    }

    async function notifHandler(data) {
      if (data.notif == 1) {
        setpopUpNotif(e => e + 1);
      }
    }

    if (socket != undefined && socket != null) {
      socket.on("getMessageFromUserToUser", chatHandler);
      socket.on("getNotificationFromUserToUser", notifHandler);
    }

    return () => {
      if (socket != undefined && socket != null) {
        socket.off('getMessageFromUserToUser', chatHandler);
        socket.off('getNotificationFromUserToUser', notifHandler);
      }
    };
  });
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (token != undefined && token != null && token != false) {
      setHeightAndWidthOfWindow({
        height: window.innerHeight,
        width: window.innerWidth
      });
      Object(_services_chat__WEBPACK_IMPORTED_MODULE_10__["getUnreadUsersChatsNumber"])({}, token).then(data => {
        setNumberOfChatsNotRead(data.data.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }, []);
  const [openOrCloseNotif, setOpenOrCloseNotif] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const openMenuProfile = () => {
    setOpenMenuProfile(true);
  };

  const closeMenuProfile = () => {
    setOpenMenuProfile(false);
  };

  const openMenuProfileonClick = () => {
    setOpenMenuProfile(e => !e);
  };

  const OpensearchUsers = e => {
    setDisplaySearch({
      state: true,
      userName: ""
    }); //
  };

  const SearchUserFn = e => {
    setDisplaySearch({
      state: true,
      userName: e.target.value
    });
  };

  const closeSearchUser = e => {
    setTimeout(() => {
      setDisplaySearch({
        state: false,
        userName: ""
      });
    }, 300);
  };

  const openOrCloseNotifications = () => {
    setOpenOrCloseNotif(e => !e);
  };

  if (heightAndWidthOfWindow.width > heightAndWidthOfWindow.height) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Logo,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "SPAKSI"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 64
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Search,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexItems,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onBlur: () => closeSearchUser(),
              onFocus: e => OpensearchUsers(e),
              children: [disyplaySearch.state && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_searchUser_searchUser__WEBPACK_IMPORTED_MODULE_7__["default"], {
                token: token,
                searchUserName: disyplaySearch.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 56
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                name: "search",
                type: "text",
                placeholder: "Search accounts",
                autoComplete: "off",
                onChange: e => SearchUserFn(e)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.searchImg,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 28 38",
                  fill: "#1876f3",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z",
                    fill: "#b0b0b5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), token && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.authenticated,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chat, {
            popUpUser: popUpUser,
            numberOfChatsNotRead: numberOfChatsNotRead
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.notification,
            onClick: () => openOrCloseNotifications(),
            children: [openOrCloseNotif && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_notification_notification__WEBPACK_IMPORTED_MODULE_9__["default"], {
              token: token
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 48
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.numberOfNotificationNotReadlocal,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: popUpNotif
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 85
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              width: "35",
              height: "35",
              viewBox: "0 0 50 50",
              fill: "#1876f3",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z",
                fill: "#1876f3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile,
            onClick: () => openMenuProfileonClick(),
            onMouseLeave: () => closeMenuProfile(),
            onMouseEnter: () => openMenuProfile(),
            children: [user != null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navBarImageContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: user.currentImageUrl || "/avatar.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 237
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 193
            }, undefined), openMenuProfileState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profileMenu_profileMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 321
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 31
        }, undefined), !token && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Nonauthenticated,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/signin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Log In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 53
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 44
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 32
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, undefined);
  } else
    /*mobile */
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Search,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flexItems,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onBlur: () => closeSearchUser(),
              onFocus: e => OpensearchUsers(e),
              children: [disyplaySearch.state && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_searchUser_searchUser__WEBPACK_IMPORTED_MODULE_7__["default"], {
                token: token,
                searchUserName: disyplaySearch.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 56
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                name: "search",
                type: "text",
                autoComplete: "off",
                placeholder: "Search accounts",
                onChange: e => SearchUserFn(e)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.searchImg,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 28 38",
                  fill: "#1876f3",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M27.6192 32.3156L22.1665 25.0378C21.9204 24.7094 21.5867 24.5269 21.2367 24.5269H20.3452C21.8547 21.9501 22.7517 18.709 22.7517 15.1833C22.7517 6.79599 17.6599 0 11.3758 0C5.09178 0 0 6.79599 0 15.1833C0 23.5706 5.09178 30.3666 11.3758 30.3666C14.0174 30.3666 16.4457 29.1695 18.3763 27.1547V28.3446C18.3763 28.8118 18.5131 29.2571 18.7592 29.5855L24.2119 36.8633C24.726 37.5495 25.5573 37.5495 26.066 36.8633L27.6137 34.7975C28.1278 34.1113 28.1278 33.0018 27.6192 32.3156ZM11.3758 24.5269C7.50914 24.5269 4.37532 20.3515 4.37532 15.1833C4.37532 10.0224 7.50367 5.83973 11.3758 5.83973C15.2425 5.83973 18.3763 10.0151 18.3763 15.1833C18.3763 20.3442 15.248 24.5269 11.3758 24.5269Z",
                    fill: "#1876f3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, undefined), token && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.authenticated,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.notification,
            onClick: () => openOrCloseNotifications(),
            children: [openOrCloseNotif && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_notification_notification__WEBPACK_IMPORTED_MODULE_9__["default"], {
              token: token
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 44
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              width: "35",
              height: "35",
              viewBox: "0 0 50 50",
              fill: "#1876f3",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M43.75 0H6.25C2.80273 0 0 2.80273 0 6.25V34.375C0 37.8223 2.80273 40.625 6.25 40.625H15.625V48.8281C15.625 49.5215 16.1914 50 16.7969 50C17.0312 50 17.2754 49.9316 17.4902 49.7656L29.6875 40.625H43.75C47.1973 40.625 50 37.8223 50 34.375V6.25C50 2.80273 47.1973 0 43.75 0ZM45.3125 34.375C45.3125 35.2344 44.6094 35.9375 43.75 35.9375H28.125L26.875 36.875L20.3125 41.7969V35.9375H6.25C5.39062 35.9375 4.6875 35.2344 4.6875 34.375V6.25C4.6875 5.39062 5.39062 4.6875 6.25 4.6875H43.75C44.6094 4.6875 45.3125 5.39062 45.3125 6.25V34.375Z",
                fill: "#1876f3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile,
            onClick: () => openMenuProfileonClick(),
            onMouseLeave: () => closeMenuProfile(),
            onMouseEnter: () => openMenuProfile(),
            children: [openMenuProfileState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profileMenu_profileMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 197
            }, undefined), " ", user != null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navBarImageContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: user.currentImageUrl || "/avatar.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 287
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 243
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 31
        }, undefined), !token && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Nonauthenticated,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/signin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Log In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 57
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 48
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 32
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

const Chat = props => {
  const [numberOfChatsNotReadlocal, setNumberOfChatsNotRead] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const [userWhoSentYouImage, setUserWhoSentYouImage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setNumberOfChatsNotRead(props.numberOfChatsNotRead);
  }, [props.numberOfChatsNotRead]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (props.popUpUser != undefined) {
      setTimeout(() => {
        setUserWhoSentYouImage(null);
      }, 2000);
      setUserWhoSentYouImage(props.popUpUser.currentImageUrl);
    }
  }, [props]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/chat",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.chatSvg,
      children: [userWhoSentYouImage != null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.showTemImageOfUserWhoSentYouMessage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: userWhoSentYouImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 96
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 37
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.numberOfChatsNotReadlocal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: numberOfChatsNotReadlocal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 58
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "Capa_1",
        "enable-background": "new 0 0 479.058 479.058",
        fill: "#1876f3",
        height: "512",
        viewBox: "0 0 479.058 479.058",
        width: "512",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 175
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 31
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./components/navBar/NavBar.module.scss":
/*!**********************************************!*\
  !*** ./components/navBar/NavBar.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "NavBar_container__PqDJM",
	"nav": "NavBar_nav__zEzq2",
	"Logo": "NavBar_Logo__3TCwx",
	"Search": "NavBar_Search__2DtTD",
	"flexItems": "NavBar_flexItems__26Wt6",
	"searchImg": "NavBar_searchImg__AAY-7",
	"Nonauthenticated": "NavBar_Nonauthenticated__2a_17",
	"authenticated": "NavBar_authenticated__2MYd8",
	"notification": "NavBar_notification__3XRuG",
	"upload": "NavBar_upload__30HO_",
	"profile": "NavBar_profile__3Hvcd",
	"navBarImageContainer": "NavBar_navBarImageContainer__3nQy9",
	"SideNavBarContainer": "NavBar_SideNavBarContainer__3Y1g8",
	"SideNavBarIconMenu": "NavBar_SideNavBarIconMenu__2t8jt",
	"icon": "NavBar_icon__13wI1",
	"iconbar1": "NavBar_iconbar1__32TCU",
	"iconbar2": "NavBar_iconbar2__28YWi",
	"iconbar3": "NavBar_iconbar3__WsW9q",
	"openClose": "NavBar_openClose__2YiZd",
	"chatSvg": "NavBar_chatSvg__2bzza",
	"numberOfChatsNotReadlocal": "NavBar_numberOfChatsNotReadlocal__3kP0-",
	"numberOfNotificationNotReadlocal": "NavBar_numberOfNotificationNotReadlocal__3VTiL",
	"showTemImageOfUserWhoSentYouMessage": "NavBar_showTemImageOfUserWhoSentYouMessage__24h52",
	"showImage": "NavBar_showImage__2RARv"
};


/***/ }),

/***/ "./components/notification/notification.js":
/*!*************************************************!*\
  !*** ./components/notification/notification.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notification_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.module.scss */ "./components/notification/notification.module.scss");
/* harmony import */ var _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification */ "./services/notification.js");
/* harmony import */ var _services_following__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/following */ "./services/following.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");

var _jsxFileName = "F:\\AHKI\\components\\notification\\notification.js";






const notification = props => {
  const [notifications, setnotifications] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [Loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    Object(_services_notification__WEBPACK_IMPORTED_MODULE_3__["getnotifications"])({}, props.token).then(result => {
      console.log(result.data.data);
      setnotifications(result.data.data);
    }).catch(error => {});
  }, []);

  const deniedfollowfn = (theOtherPersonId, idComponent) => {
    setLoading(true);
    Object(_services_following__WEBPACK_IMPORTED_MODULE_4__["deniedfollow"])(theOtherPersonId, idComponent, props.token).then(result => {
      setLoading(false);
      setnotifications(e => {
        return [...e.filter(e => e._id != idComponent)];
      });
    }).catch(error => {});
  };

  const acceptfollowfn = (theOtherPersonId, idComponent) => {
    setLoading(true);
    Object(_services_following__WEBPACK_IMPORTED_MODULE_4__["acceptfollow"])(theOtherPersonId, idComponent, props.token).then(result => {
      setLoading(false);
      setnotifications(e => {
        return [...e.filter(e => e._id != idComponent)];
      });
    }).catch(error => {});
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Notifcation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 43
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), notifications.map(notif => {
      if (notif.type == "follow") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.notif,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userImageContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: notif.from.currentImageUrl
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: notif.from.userName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "want to follow you"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btns,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: () => deniedfollowfn(notif.from._id, notif._id),
                children: Loading == false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "reject"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 112
                }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ldsring,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 157
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 168
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 179
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 190
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 126
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: () => acceptfollowfn(notif.from._id, notif._id),
                children: Loading == false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "aprove"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 112
                }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ldsring,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 157
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 168
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 179
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 190
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 126
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }, undefined);
      } else if (notif.type == "follow directly") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.notif,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userImageContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: notif.from.currentImageUrl
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _notification_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: notif.from.userName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " followd you"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }, undefined);
      }
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (notification);

/***/ }),

/***/ "./components/notification/notification.module.scss":
/*!**********************************************************!*\
  !*** ./components/notification/notification.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "notification_container__t5CmH",
	"showNotif": "notification_showNotif__343LN",
	"header": "notification_header__Q9BdH",
	"notif": "notification_notif__1lEfY",
	"user": "notification_user__1qdYr",
	"userImageContainer": "notification_userImageContainer__157FZ",
	"text": "notification_text__2XCh0",
	"btns": "notification_btns__3cd0w",
	"ldsring": "notification_ldsring__1OSyz"
};


/***/ }),

/***/ "./components/popUpMessage/popUpMessage.js":
/*!*************************************************!*\
  !*** ./components/popUpMessage/popUpMessage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popUpMessage.module.scss */ "./components/popUpMessage/popUpMessage.module.scss");
/* harmony import */ var _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "F:\\AHKI\\components\\popUpMessage\\popUpMessage.js";









const popUpMessage = props => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);

  const handleClose = () => {
    props.fnclose();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "alert-dialog-title",
        children: "Nozzla"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "alert-dialog-description",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.errorText,
            children: props.openPopUp.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
          onClick: handleClose,
          color: "primary",
          autoFocus: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _popUpMessage_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.errorBtns,
            children: "Agree"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (popUpMessage);

/***/ }),

/***/ "./components/popUpMessage/popUpMessage.module.scss":
/*!**********************************************************!*\
  !*** ./components/popUpMessage/popUpMessage.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "popUpMessage_container__1ZRYl",
	"errorHeader": "popUpMessage_errorHeader__1mHGb",
	"errorText": "popUpMessage_errorText__1ZfgF",
	"errorBtns": "popUpMessage_errorBtns__3DU7o"
};


/***/ }),

/***/ "./components/profileMenu/profileMenu.js":
/*!***********************************************!*\
  !*** ./components/profileMenu/profileMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileMenu.module.scss */ "./components/profileMenu/profileMenu.module.scss");
/* harmony import */ var _profileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user */ "./services/user.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/userContext */ "./context/userContext.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "F:\\AHKI\\components\\profileMenu\\profileMenu.js";







const removeCookie = userid => {
  fetch("/api/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["removeToken"])(userid).then();
    location.reload();
  });
};

const profileMenu = props => {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _profileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hoverHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _profileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linksContainers,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 76
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 53
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _profileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linksContainers,
        onClick: () => removeCookie(user._id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Log out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 113
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 90
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (profileMenu);

/***/ }),

/***/ "./components/profileMenu/profileMenu.module.scss":
/*!********************************************************!*\
  !*** ./components/profileMenu/profileMenu.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "profileMenu_container__oVKjI",
	"showfaded": "profileMenu_showfaded__18vK2",
	"hoverHandler": "profileMenu_hoverHandler__Qncjx",
	"linksContainers": "profileMenu_linksContainers__2l1of",
	"settings": "profileMenu_settings__tnt2T"
};


/***/ }),

/***/ "./components/profileSettings/Account/Account.js":
/*!*******************************************************!*\
  !*** ./components/profileSettings/Account/Account.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Account_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Account.module.scss */ "./components/profileSettings/Account/Account.module.scss");
/* harmony import */ var _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Account_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/userContext */ "./context/userContext.js");
/* harmony import */ var react_rainbow_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rainbow-components */ "react-rainbow-components");
/* harmony import */ var react_rainbow_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_rainbow_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user */ "./services/user.js");
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/apiIsLoadingContext */ "./context/apiIsLoadingContext.js");
/* harmony import */ var _Toast_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Toast/Toast */ "./components/Toast/Toast.js");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "F:\\AHKI\\components\\profileSettings\\Account\\Account.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Account = () => {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const [newUserData, setNewUserData] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [toastMessage, setToastMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    state: false,
    message: ""
  });
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_8__["default"]);

  const changeHandler = e => {
    const {
      name,
      value
    } = e.target;
    setNewUserData(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const UpdateData = () => {
    setIsLoading(true);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_5__["updateProfileInfo"])(newUserData, user.token).then(result => {
      setToastMessage({
        state: true,
        message: "rak kamel amalt update mte3ek"
      });
      setIsLoading(false);
    }).catch(error => {
      setToastMessage({
        state: true,
        message: error.message
      });
      setIsLoading(false);
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (toastMessage.state == true) {
      setTimeout(() => {
        setToastMessage({
          state: false,
          message: ""
        });
      }, 6000);
    }
  }, [toastMessage]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [toastMessage.state && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__["default"], {
      text: toastMessage.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 34
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: language.AccountSetting
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 43
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: e => changeHandler(e),
          defaultValue: user.userName,
          name: "userName"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 55
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 154
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: e => changeHandler(e),
          defaultValue: user.firstname,
          name: "firstname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 55
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.firstname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 156
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: e => changeHandler(e),
          defaultValue: user.lastname,
          name: "lastname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 55
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.lastname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 154
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_rainbow_components__WEBPACK_IMPORTED_MODULE_4__["DatePicker"], {
          value: newUserData.age || user.age,
          onChange: value => setNewUserData(e => {
            return _objectSpread(_objectSpread({}, e), {}, {
              "age": value
            });
          }),
          formatStyle: "large" //locale={language.age}

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.birthday
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `${_Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer} ${_Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bigInput}`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          onChange: e => changeHandler(e),
          defaultValue: user.biography,
          maxLength: "150",
          type: "text",
          name: "biography"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 78
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.biography
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 198
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Account_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => UpdateData(),
        children: language.update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 41
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: language.cancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 124
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 102
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Account);
/**

 */

/***/ }),

/***/ "./components/profileSettings/Account/Account.module.scss":
/*!****************************************************************!*\
  !*** ./components/profileSettings/Account/Account.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Account_container__PaDqn",
	"header": "Account_header__18uC0",
	"inputsContainer": "Account_inputsContainer___PS2k",
	"bigInput": "Account_bigInput__3aRex",
	"inputContainer": "Account_inputContainer__1Ucr4",
	"btn": "Account_btn__2unzh"
};


/***/ }),

/***/ "./components/profileSettings/Email/Email.js":
/*!***************************************************!*\
  !*** ./components/profileSettings/Email/Email.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Email_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Email.module.scss */ "./components/profileSettings/Email/Email.module.scss");
/* harmony import */ var _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Email_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Toast_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Toast/Toast */ "./components/Toast/Toast.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user */ "./services/user.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/userContext */ "./context/userContext.js");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "F:\\AHKI\\components\\profileSettings\\Email\\Email.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Email = () => {
  const [toastMessage, setToastMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    state: false,
    message: ""
  });
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const [changeEamilData, setChangeEamilData] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (toastMessage.state == true) {
      setTimeout(() => {
        setToastMessage({
          state: false,
          message: ""
        });
      }, 6000);
    }
  }, [toastMessage]);

  const changeHandlerNewEamilAndCode = e => {
    const {
      name,
      value
    } = e.target;
    setChangeEamilData(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const sendCode = () => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["updateEmailSendCode"])(changeEamilData.email, user.token).then(result => {
      setToastMessage({
        state: true,
        message: "ab3eth sex"
      });
    });
  };

  const updateEmail = () => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["updateEmailApi"])(changeEamilData.email, changeEamilData.code, user.token).then(result => {
      if (result.data.typeError == "incorectCode") {
        setToastMessage({
          state: true,
          message: "ab3eth sex"
        });
      } else if (result.data.typeError == "codeInvalid") {
        setToastMessage({
          state: true,
          message: "ab3eth sex"
        });
      } else if (result.data.typeError == "done") {
        setToastMessage({
          state: true,
          message: "ab3eth sex"
        });
      }
    }).catch(error => {
      setToastMessage({
        state: true,
        message: error.message
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [toastMessage.state && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Toast_Toast__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: toastMessage.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 34
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: language.UpdateYourEmail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 43
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.centerInputs,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.warningText,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: language.putyournewEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 52
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.emailContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            onChange: e => changeHandlerNewEamilAndCode(e),
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 93
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: language.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 176
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 55
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => sendCode(),
          children: language.send
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 213
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.warningText,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: language.YouWillreciveconfermationCodeputithereAndClickUpdate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 52
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: e => changeHandlerNewEamilAndCode(e),
          name: "code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 55
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.ConfermationCode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 136
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Email_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => updateEmail(),
        children: language.update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 40
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: language.cancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 124
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 102
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Email);

/***/ }),

/***/ "./components/profileSettings/Email/Email.module.scss":
/*!************************************************************!*\
  !*** ./components/profileSettings/Email/Email.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Email_container__2b6oa",
	"warningText": "Email_warningText__1HeHg",
	"header": "Email_header__2ktcx",
	"inputContainer": "Email_inputContainer__3P-Yb",
	"centerInputs": "Email_centerInputs__3gXnP",
	"btn": "Email_btn__37tHl",
	"emailContainer": "Email_emailContainer__1rBB2"
};


/***/ }),

/***/ "./components/profileSettings/Password/Password.js":
/*!*********************************************************!*\
  !*** ./components/profileSettings/Password/Password.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Password_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Password.module.scss */ "./components/profileSettings/Password/Password.module.scss");
/* harmony import */ var _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Password_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user */ "./services/user.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/userContext */ "./context/userContext.js");
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/apiIsLoadingContext */ "./context/apiIsLoadingContext.js");
/* harmony import */ var _Toast_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Toast/Toast */ "./components/Toast/Toast.js");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "F:\\AHKI\\components\\profileSettings\\Password\\Password.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Password = () => {
  const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const [toastMessage, setToastMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    state: false,
    message: ""
  });
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_7__["default"]);

  const changeHandler = e => {
    const {
      name,
      value
    } = e.target;
    setPassword(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        [name]: value
      });
    });
  };

  const UpdatePassword = () => {
    if (password.newPassword == undefined) {
      setToastMessage({
        state: true,
        message: "hot mod pass mte3eke",
        color: "#ff2f2f"
      });
    } else if (password.newPassword.length < 8) {
      setToastMessage({
        state: true,
        message: "a9al min 8 raw",
        color: "#ff2f2f"
      });
    } else {
      setIsLoading(true);
      Object(_services_user__WEBPACK_IMPORTED_MODULE_3__["changePassword"])(password, user.token).then(result => {
        if (result.data.passwordincorrect == true) {
          setToastMessage({
            state: true,
            message: "mot pass mte3ek le9dim 8ale",
            color: "#ff2f2f"
          });
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setToastMessage({
            state: true,
            message: "raw tbadel"
          });
        }
      }).catch(error => {
        alert(error.message);
      });
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (toastMessage.state == true) {
      setTimeout(() => {
        setToastMessage({
          state: false,
          message: ""
        });
      }, 6000);
    }
  }, [toastMessage]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [toastMessage.state && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Toast_Toast__WEBPACK_IMPORTED_MODULE_6__["default"], {
      text: toastMessage.message,
      color: toastMessage.color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 34
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: language.UpdateYourPassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 43
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.centerInputs,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.warningText,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: language.Itsagoodideatouseastrongpasswordthatyou
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => changeHandler(e),
          type: "password",
          name: "oldPassword"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 51
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.oldPassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 128
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.warningText,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: language.newpasswordneedtobeatleastlength
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => changeHandler(e),
          type: "password",
          name: "newPassword"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 51
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.newPassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 128
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Password_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => UpdatePassword(),
        children: language.update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 40
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: language.cancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 128
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 106
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Password);

/***/ }),

/***/ "./components/profileSettings/Password/Password.module.scss":
/*!******************************************************************!*\
  !*** ./components/profileSettings/Password/Password.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Password_container__3jlg7",
	"warningText": "Password_warningText__1VrhV",
	"header": "Password_header__wODkb",
	"inputContainer": "Password_inputContainer__7LnSf",
	"centerInputs": "Password_centerInputs__2ZmgN",
	"btn": "Password_btn__diQIY"
};


/***/ }),

/***/ "./components/profileSettings/Telephone/Telephone.js":
/*!***********************************************************!*\
  !*** ./components/profileSettings/Telephone/Telephone.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Telephone.module.scss */ "./components/profileSettings/Telephone/Telephone.module.scss");
/* harmony import */ var _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2 */ "react-phone-input-2");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "F:\\AHKI\\components\\profileSettings\\Telephone\\Telephone.js";






const Telephone = () => {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  /*  setToastMessage({state:true,message:"error.message"})
      React.useEffect(()=>{
     if(toastMessage.state==true){
         setTimeout(() => {
             setToastMessage({state:false,message:""})
         }, 6000);
  
     }
    },[toastMessage])
   import Toast from '../../Toast/Toast'
  
    const [toastMessage,setToastMessage]=React.useState({state:false,message:""})
  
    {toastMessage.state&&<Toast text={toastMessage.message} ></Toast>}
    const onChangeHandlerRegisterPhone=()=>{
      }*/

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: language.UpdateYourPhoneNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 43
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.centerInputs,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.warningText,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: language.putyournewphonenumberhere
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 52
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.phoneContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default.a, {
          name: "tel",
          country: 'tn',
          specialLabel: language.phone,
          inputProps: {
            name: 'phone',
            required: true,
            autoFocus: true
          },
          onChange: (e, country) => onChangeHandlerRegisterPhone(e, country)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 55
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: language.send
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 260
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.warningText,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: language.YouWillreciveconfermationCodeputithereAndClickUpdate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 52
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          name: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 55
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: language.ConfermationCode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 96
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Telephone_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: language.update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 40
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: language.cancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 96
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 74
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Telephone);

/***/ }),

/***/ "./components/profileSettings/Telephone/Telephone.module.scss":
/*!********************************************************************!*\
  !*** ./components/profileSettings/Telephone/Telephone.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Telephone_container__1U-lN",
	"warningText": "Telephone_warningText__2bGvy",
	"header": "Telephone_header__ajcnL",
	"inputContainer": "Telephone_inputContainer__3JmqC",
	"centerInputs": "Telephone_centerInputs__1p9JC",
	"btn": "Telephone_btn__2WkKZ",
	"phoneContainer": "Telephone_phoneContainer__1HX2A"
};


/***/ }),

/***/ "./components/profileSettings/privacy/Privacy.module.scss":
/*!****************************************************************!*\
  !*** ./components/profileSettings/privacy/Privacy.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Privacy_container__1LHAi",
	"header": "Privacy_header__-qg0b",
	"radioContainer": "Privacy_radioContainer__3mcG1",
	"radioInputContainer": "Privacy_radioInputContainer__3F93D",
	"private": "Privacy_private__4eM0j",
	"public": "Privacy_public__3cYKF",
	"text": "Privacy_text__1aAt8"
};


/***/ }),

/***/ "./components/profileSettings/privacy/privacy.js":
/*!*******************************************************!*\
  !*** ./components/profileSettings/privacy/privacy.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Privacy.module.scss */ "./components/profileSettings/privacy/Privacy.module.scss");
/* harmony import */ var _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user */ "./services/user.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/userContext */ "./context/userContext.js");

var _jsxFileName = "F:\\AHKI\\components\\profileSettings\\privacy\\privacy.js";





const Privacy = () => {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const [privacystate, setPrivacystate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("private");
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_3__["getPrivacy"])(user.token).then(result => {
      console.log(result.data.data.privacy);
      setPrivacystate(result.data.data.privacy);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const RadioBoxChangeHandler = e => {
    const {
      value
    } = e.target;
    Object(_services_user__WEBPACK_IMPORTED_MODULE_3__["updatePrivacy"])({
      privacy: value
    }, user.token).then(result => {
      setPrivacystate(value);
    }).catch(error => {
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Privacy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 47
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.radioContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Setting your profile Private will only late accepted users to view your profile (comment likes)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 49
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.radioInputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "private:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 64
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => RadioBoxChangeHandler(e),
          checked: privacystate == "private",
          className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.private,
          name: "privacy",
          type: "radio",
          value: "private"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 81
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Setting your profile Public will allow Follower to like or comment your posts and images "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 49
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.radioInputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "public:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 64
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => RadioBoxChangeHandler(e),
          checked: privacystate == "public",
          className: _Privacy_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.public,
          name: "privacy",
          type: "radio",
          value: "public"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 80
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "./components/profileSettings/sideNavBar/sideNavBar.js":
/*!*************************************************************!*\
  !*** ./components/profileSettings/sideNavBar/sideNavBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideNavBar.module.scss */ "./components/profileSettings/sideNavBar/sideNavBar.module.scss");
/* harmony import */ var _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user */ "./services/user.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/userContext */ "./context/userContext.js");

var _jsxFileName = "F:\\AHKI\\components\\profileSettings\\sideNavBar\\sideNavBar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const sideNavBar = props => {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("account");

  const changeFile = e => {
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_3__["ChangeProfileImage"])(formData, user.token).then(data => {
      setUser(e => {
        return _objectSpread(_objectSpread({}, e), {}, {
          userProfileImageUrl: data.data.Picurl
        });
      });
    });
  };

  const changePageTo = e => {
    props.changePage(e);
    setPage(e);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imageContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userImage,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: user.currentImageUrl || "/avatar.png",
            alt: user.userName || ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 50
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.camera,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            onChange: e => changeFile(e),
            type: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 47
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "camera",
            role: "img",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fill: "currentColor",
              d: "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 246
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 98
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "aziz jarrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 41
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pages,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: page == "account" ? _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Focused : "chay",
          id: "account",
          onClick: () => changePageTo("account"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "home",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fill: "currentColor",
              d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 226
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 126
          }, undefined), "Account"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: page == "password" ? _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Focused : "chay",
          id: "password",
          onClick: () => changePageTo("password"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "key",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fill: "currentColor",
              d: "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 274
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 129
          }, undefined), "Password"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: page == "Telephone" ? _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Focused : "chay",
          id: "Telephone",
          onClick: () => changePageTo("Telephone"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "phone-square-alt",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fill: "currentColor",
              d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 290
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 132
          }, undefined), "Telephone"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: page == "Email" ? _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Focused : "chay",
          id: "Email",
          onClick: () => changePageTo("email"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "envelope-square",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fill: "currentColor",
              d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 277
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 120
          }, undefined), "Email"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: page == "Privacy" ? _sideNavBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Focused : "chay",
          id: "Email",
          onClick: () => changePageTo("Privacy"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "envelope-square",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fill: "currentColor",
              d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 281
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 124
          }, undefined), "Privacy"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (sideNavBar);

/***/ }),

/***/ "./components/profileSettings/sideNavBar/sideNavBar.module.scss":
/*!**********************************************************************!*\
  !*** ./components/profileSettings/sideNavBar/sideNavBar.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Container": "sideNavBar_Container__2XhI2",
	"image": "sideNavBar_image__3SlEX",
	"userImage": "sideNavBar_userImage__3JQLr",
	"imageContainer": "sideNavBar_imageContainer__3wS2Y",
	"name": "sideNavBar_name__2fkzr",
	"pages": "sideNavBar_pages__c6Y5G",
	"camera": "sideNavBar_camera__wRVp8",
	"Focused": "sideNavBar_Focused__3NNo5"
};


/***/ }),

/***/ "./components/searchUser/searchUser.js":
/*!*********************************************!*\
  !*** ./components/searchUser/searchUser.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _searchUser_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchUser.module.scss */ "./components/searchUser/searchUser.module.scss");
/* harmony import */ var _searchUser_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_searchUser_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user */ "./services/user.js");

var _jsxFileName = "F:\\AHKI\\components\\searchUser\\searchUser.js";




const searchUser = props => {
  const [listOfUsers, setListOfUsers] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (props.searchUserName != undefined && props.searchUserName.length > 0) {
      Object(_services_user__WEBPACK_IMPORTED_MODULE_3__["searchUserNameApi"])(props.searchUserName, props.token).then(result => {
        if (result.data.data != undefined) {
          setListOfUsers(e => {
            return [...result.data.data];
          });
        }
      });
    }
  }, [props.searchUserName]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _searchUser_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: listOfUsers.map(e => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
      userData: e
    }, e._id, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (searchUser);

const Users = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: `/profile/${props.userData._id}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _searchUser_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _searchUser_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 54
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _searchUser_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 50
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 52
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/searchUser/searchUser.module.scss":
/*!******************************************************!*\
  !*** ./components/searchUser/searchUser.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "searchUser_container__1Gd-l",
	"userContainer": "searchUser_userContainer__1UKll",
	"imgContainer": "searchUser_imgContainer__22fF7",
	"userName": "searchUser_userName__2_vRZ",
	"FollowAndUnfollowContainer": "searchUser_FollowAndUnfollowContainer__2TWju"
};


/***/ }),

/***/ "./components/verifyAccount/verifyAccount.js":
/*!***************************************************!*\
  !*** ./components/verifyAccount/verifyAccount.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verifyAccount.module.scss */ "./components/verifyAccount/verifyAccount.module.scss");
/* harmony import */ var _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user */ "./services/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/apiIsLoadingContext */ "./context/apiIsLoadingContext.js");

var _jsxFileName = "F:\\AHKI\\components\\verifyAccount\\verifyAccount.js";







const verifyAccount = props => {
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_languageContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_6__["default"]);

  const reSendCode = () => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["reSendVerificationCode"])(props.userId, code.verificationCode).then(result => {});
  };

  const verifyUserAccount = () => {
    setIsLoading(true);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["activeAccount"])(props.userId, code.verificationCode).then(result => {
      if (result.data.state == false) {
        props.setErrorMessageProps({
          state: true,
          text: result.data.message
        });
      } else {
        fetch("/api/setToken", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: result.data.token
          })
        }).then(() => {
          localStorage.setItem("ref_token", result.data.ref_token);
          setIsLoading(false);
          router.push({
            pathname: "/",
            query: {
              refrech: true
            }
          });
        });
      }
    });
  };

  const codeHandler = e => {
    setCode({
      verificationCode: e.target.value
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ContainerVerification,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.VerificationHeader,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Smoufy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 63
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.discrption,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "verification code is sent to your email ou telefone type it here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 55
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form,
      onSubmit: e => {
        e.preventDefault();
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "userName",
          type: "text",
          placeholder: language.verificationcode,
          className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
          onChange: e => codeHandler(e),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 59
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Resendcode,
        onClick: () => reSendCode(),
        children: "Resend code"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => verifyUserAccount(),
        className: _verifyAccount_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        children: language.send
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (verifyAccount);

/***/ }),

/***/ "./components/verifyAccount/verifyAccount.module.scss":
/*!************************************************************!*\
  !*** ./components/verifyAccount/verifyAccount.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ContainerVerification": "verifyAccount_ContainerVerification__1q8WT",
	"discrption": "verifyAccount_discrption__1b3lU",
	"VerificationHeader": "verifyAccount_VerificationHeader__1tMyx",
	"inputContainer": "verifyAccount_inputContainer__3WDvJ",
	"Resendcode": "verifyAccount_Resendcode__3Bnxe",
	"btn": "verifyAccount_btn__3xRFl",
	"input": "verifyAccount_input__1Me4S",
	"labelspan": "verifyAccount_labelspan__3rOx-"
};


/***/ }),

/***/ "./context/apiIsLoadingContext.js":
/*!****************************************!*\
  !*** ./context/apiIsLoadingContext.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const apiIsLoadingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("eng");
/* harmony default export */ __webpack_exports__["default"] = (apiIsLoadingContext);

/***/ }),

/***/ "./context/languageContext.js":
/*!************************************!*\
  !*** ./context/languageContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LanguageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("eng");
/* harmony default export */ __webpack_exports__["default"] = (LanguageContext);

/***/ }),

/***/ "./context/socketContext.js":
/*!**********************************!*\
  !*** ./context/socketContext.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const socket = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ "./context/userContext.js":
/*!********************************!*\
  !*** ./context/userContext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ "./interceptor/interceptor.js":
/*!************************************!*\
  !*** ./interceptor/interceptor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_refreshAccessToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/refreshAccessToken */ "./services/refreshAccessToken.js");


const axiosApiInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  //baseURL: 'http://127.0.0.1:5010/',
  baseURL: 'http://127.0.0.1:5010/',
  withCredentials: true
});
axiosApiInstance.defaults.withCredentials = true; //axiosApiInstance.defaults.baseURL = 'http://127.0.0.1:5010/' // set default url

axiosApiInstance.interceptors.request.use(async config => {
  return config;
}, error => {
  Promise.reject(error);
});
axiosApiInstance.interceptors.response.use(response => {
  return response;
}, async function (error) {
  console.log(error);
  const originalRequest = error.config;

  if (error.message == "Network Error") {
    // localStorage.removeItem('ref_token');
    // await axios.post("api/logout") // change token in cookies to the bew one
    alert(error.message); //location.reload();

    return;
  }

  if (error.response.status === 401) {
    localStorage.removeItem('ref_token');
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("api/logout"); // change token in cookies to the bew one

    window.reload();
    return;
  }

  if (error.response.status === 404) {
    return;
  }

  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await Object(_services_refreshAccessToken__WEBPACK_IMPORTED_MODULE_1__["refreshAccessToken"])(localStorage.getItem("ref_token"));
    Object(_services_refreshAccessToken__WEBPACK_IMPORTED_MODULE_1__["deleteRefrechTokenOldOne"])(localStorage.getItem("ref_token")); // send the ref token and get new token

    originalRequest.headers.Authorization = 'Bearer ' + access_token.data.token;
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("api/setToken", {
      token: access_token.data.token
    }); // change token in cookies to the bew one

    localStorage.setItem("ref_token", access_token.data.ref_token); // save the new ref_token

    return axiosApiInstance(originalRequest); // return new  request with the new token
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (axiosApiInstance);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-phone-input-2/lib/material.css":
/*!***********************************************************!*\
  !*** ./node_modules/react-phone-input-2/lib/material.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/settings/index.js":
/*!*********************************!*\
  !*** ./pages/settings/index.js ***!
  \*********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_settings_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/settings.module.scss */ "./styles/settings.module.scss");
/* harmony import */ var _styles_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_settings_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navBar/NavBar */ "./components/navBar/NavBar.js");
/* harmony import */ var _components_profileSettings_sideNavBar_sideNavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/profileSettings/sideNavBar/sideNavBar */ "./components/profileSettings/sideNavBar/sideNavBar.js");
/* harmony import */ var _components_profileSettings_Account_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profileSettings/Account/Account */ "./components/profileSettings/Account/Account.js");
/* harmony import */ var _components_profileSettings_Email_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profileSettings/Email/Email */ "./components/profileSettings/Email/Email.js");
/* harmony import */ var _components_profileSettings_Password_Password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profileSettings/Password/Password */ "./components/profileSettings/Password/Password.js");
/* harmony import */ var _components_profileSettings_Telephone_Telephone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/profileSettings/Telephone/Telephone */ "./components/profileSettings/Telephone/Telephone.js");
/* harmony import */ var _components_profileSettings_privacy_privacy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/profileSettings/privacy/privacy */ "./components/profileSettings/privacy/privacy.js");

var _jsxFileName = "F:\\AHKI\\pages\\settings\\index.js";










const ProfileSettings = props => {
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("account");

  const changePage = e => {
    setPage(e);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.settingsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sideNavBar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profileSettings_sideNavBar_sideNavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
          changePage: changePage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profileSettings,
        children: [page == "account" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profileSettings_Account_Account__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 31
        }, undefined), page == "email" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profileSettings_Email_Email__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 31
        }, undefined), page == "password" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profileSettings_Password_Password__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 34
        }, undefined), page == "Telephone" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profileSettings_Telephone_Telephone__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 35
        }, undefined), page == "Privacy" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profileSettings_privacy_privacy__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 33
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileSettings);
async function getServerSideProps({
  req,
  res
}) {
  return req.cookies.token ? {
    props: {
      token: req.cookies.token
    }
  } : {
    redirect: {
      destination: '/',
      permanent: false
    }
  };
}

/***/ }),

/***/ "./services/chat.js":
/*!**************************!*\
  !*** ./services/chat.js ***!
  \**************************/
/*! exports provided: getUnreadUsersChatsNumber, addMessage, getMessagesOfCurrentconversation, getUserWhoChatWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnreadUsersChatsNumber", function() { return getUnreadUsersChatsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessagesOfCurrentconversation", function() { return getMessagesOfCurrentconversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserWhoChatWith", function() { return getUserWhoChatWith; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptor/interceptor */ "./interceptor/interceptor.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const addMessage = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/chat/addMessage", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getMessagesOfCurrentconversation = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/chat/getMessagesOfCurrentconversation", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getUserWhoChatWith = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/chat/getUserWhoChatWith", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getUnreadUsersChatsNumber = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/chat/getUnreadUsersChatsNumber", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "./services/following.js":
/*!*******************************!*\
  !*** ./services/following.js ***!
  \*******************************/
/*! exports provided: countFollowingOfUser, deniedfollow, acceptfollow, removeFollowPending, checkIffollowApi, followUserApi, unfollowUserApi, getFollowingOfUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countFollowingOfUser", function() { return countFollowingOfUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deniedfollow", function() { return deniedfollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptfollow", function() { return acceptfollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFollowPending", function() { return removeFollowPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIffollowApi", function() { return checkIffollowApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUserApi", function() { return followUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUserApi", function() { return unfollowUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingOfUser", function() { return getFollowingOfUser; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptor/interceptor */ "./interceptor/interceptor.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getFollowingOfUser = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/getFollowingOfUser", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const unfollowUserApi = async (followingid, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/unfollowUser", {
    followingid: followingid
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const followUserApi = async (userToFollow, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/followUser", {
    followingid: userToFollow
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const checkIffollowApi = async (theOtherPersonId, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/checkIffollow", {
    followingid: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const removeFollowPending = async (theOtherPersonId, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/removeFollowPending", {
    followingid: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const acceptfollow = async (theOtherPersonId, idNotif, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/acceptfollow", {
    idNotif: idNotif,
    theOtherPersonId: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const deniedfollow = async (theOtherPersonId, idNotif, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/deniedfollow", {
    idNotif: idNotif,
    followingid: theOtherPersonId
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const countFollowingOfUser = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/following/countFollowingOfUser", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "./services/notification.js":
/*!**********************************!*\
  !*** ./services/notification.js ***!
  \**********************************/
/*! exports provided: getnotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getnotifications", function() { return getnotifications; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptor/interceptor */ "./interceptor/interceptor.js");


const getnotifications = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post('/notification/getnotifications', {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "./services/refreshAccessToken.js":
/*!****************************************!*\
  !*** ./services/refreshAccessToken.js ***!
  \****************************************/
/*! exports provided: refreshAccessToken, deleteRefrechTokenOldOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshAccessToken", function() { return refreshAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRefrechTokenOldOne", function() { return deleteRefrechTokenOldOne; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptor/interceptor */ "./interceptor/interceptor.js");
 // send ref token and get new token

const refreshAccessToken = async token => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/token/getRefreshAccessToken", {
    ref_token: token
  });
};

const deleteRefrechTokenOldOne = async RefreshAccessToken => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/token/deleteRefrechTokenOldOne", {
    RefreshAccessToken: RefreshAccessToken
  });
};



/***/ }),

/***/ "./services/user.js":
/*!**************************!*\
  !*** ./services/user.js ***!
  \**************************/
/*! exports provided: updatePrivacy, getPrivacy, searchUserNameApi, getrandomUsersApi, updateEmailApi, updateEmailSendCode, SetNewPasswordApi, resetPasswordApi, searchAccountToForgetPassword, changePassword, updateProfileInfo, Login, removeToken, Register, LoginFacebook, GetUserData, ChangeProfileImage, GetOtherUsersData, reSendVerificationCode, activeAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePrivacy", function() { return updatePrivacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrivacy", function() { return getPrivacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUserNameApi", function() { return searchUserNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getrandomUsersApi", function() { return getrandomUsersApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmailApi", function() { return updateEmailApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmailSendCode", function() { return updateEmailSendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNewPasswordApi", function() { return SetNewPasswordApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPasswordApi", function() { return resetPasswordApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAccountToForgetPassword", function() { return searchAccountToForgetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileInfo", function() { return updateProfileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeToken", function() { return removeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFacebook", function() { return LoginFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserData", function() { return GetUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfileImage", function() { return ChangeProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOtherUsersData", function() { return GetOtherUsersData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reSendVerificationCode", function() { return reSendVerificationCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeAccount", function() { return activeAccount; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptor/interceptor */ "./interceptor/interceptor.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Login = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post('/user/login', _objectSpread({}, data));
};

const LoginFacebook = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post('/user/loginfacebook', _objectSpread({}, data));
};

const Register = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post('/user/register', _objectSpread({}, data));
};

const GetUserData = async token => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get('/user/GetUserData', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const ChangeProfileImage = async (file, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/changeprofileimage", file, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const GetOtherUsersData = async (id, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/getotherUsersData/" + id, {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const activeAccount = async (userid, verificationCode) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/activeAccount", {
    userid,
    verificationCode
  });
};

const reSendVerificationCode = async (userid, verificationCode) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/reSendVerificationCode", {
    userid,
    verificationCode
  });
};

const removeToken = async userid => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/removeToken", {
    userid
  });
};

const updateProfileInfo = async (newUserData, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/updateProfileInfo", _objectSpread({}, newUserData), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const changePassword = async (passwordChange, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/changePassword", _objectSpread({}, passwordChange), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const searchAccountToForgetPassword = async identity => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/searchAccountToForgetPassword", _objectSpread({}, identity));
};

const resetPasswordApi = async dataResetPassword => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/resetPassword", _objectSpread({}, dataResetPassword));
};

const SetNewPasswordApi = async newPasswordAndTokenAndTelOrEmail => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/SetNewPassword", _objectSpread({}, newPasswordAndTokenAndTelOrEmail));
};

const updateEmailSendCode = async (email, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/updateEmailSendCode", {
    email: email
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const updateEmailApi = async (email, code, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/updateEmail", {
    email: email,
    code: code
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getrandomUsersApi = async (token, randomusers) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/getrandomUsers", _objectSpread({}, randomusers), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const searchUserNameApi = async (searchUserName, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/SearchUserByUserName", {
    searchUserName: searchUserName
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getPrivacy = async token => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/getPrivacy", {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const updatePrivacy = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/updatePrivacy", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "./styles/settings.module.scss":
/*!*************************************!*\
  !*** ./styles/settings.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "settings_container__1AuX4",
	"settingsContainer": "settings_settingsContainer__1aEFy",
	"sideNavBar": "settings_sideNavBar__3_hlR",
	"profileSettings": "settings_profileSettings__3nbls"
};


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-phone-input-2":
/*!**************************************!*\
  !*** external "react-phone-input-2" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ "react-rainbow-components":
/*!*******************************************!*\
  !*** external "react-rainbow-components" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rainbow-components");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9hc3QvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2FzdC9Ub2FzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYW5nZUxhbmd1YWdlL2NoYW5nZUxhbmd1YWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hhbmdlTGFuZ3VhZ2UvY2hhbmdlTGFuZ3VhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mYWNlYm9va0xvZ0luL2ZhY2Vib29rTG9nSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mYWNlYm9va0xvZ0luL2ZhY2Vib29rTG9nSW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbml0TGFuZ3VhZ2UvaW5pdExhbmd1YWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWxTaW5nSW5TaW5nVXAvTW9kYWxTaW5nSW5TaW5nVXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbFNpbmdJblNpbmdVcC9Nb2RhbFNpbmdJblNpbmdVcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsU2luZ0luU2luZ1VwL3NpbmdJbi9zaW5nSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbFNpbmdJblNpbmdVcC9zaW5nVXAvc2luZ1VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2QmFyL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BvcFVwTWVzc2FnZS9wb3BVcE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3BVcE1lc3NhZ2UvcG9wVXBNZXNzYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZU1lbnUvcHJvZmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlTWVudS9wcm9maWxlTWVudS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGVTZXR0aW5ncy9BY2NvdW50L0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlU2V0dGluZ3MvQWNjb3VudC9BY2NvdW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL0VtYWlsL0VtYWlsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL0VtYWlsL0VtYWlsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL1Bhc3N3b3JkL1Bhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL1Bhc3N3b3JkL1Bhc3N3b3JkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL1RlbGVwaG9uZS9UZWxlcGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlU2V0dGluZ3MvVGVsZXBob25lL1RlbGVwaG9uZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGVTZXR0aW5ncy9wcml2YWN5L1ByaXZhY3kubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlU2V0dGluZ3MvcHJpdmFjeS9wcml2YWN5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL3NpZGVOYXZCYXIvc2lkZU5hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGVTZXR0aW5ncy9zaWRlTmF2QmFyL3NpZGVOYXZCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWFyY2hVc2VyL3NlYXJjaFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWFyY2hVc2VyL3NlYXJjaFVzZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92ZXJpZnlBY2NvdW50L3ZlcmlmeUFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92ZXJpZnlBY2NvdW50L3ZlcmlmeUFjY291bnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcGlJc0xvYWRpbmdDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvc29ja2V0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3VzZXJDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9mb2xsb3dpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3JlZnJlc2hBY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zZXR0aW5ncy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGhvbmUtaW5wdXQtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJhaW5ib3ctY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlRvYXN0IiwicHJvcHMiLCJTdHlsZSIsImNvbnRhaW5lciIsImNvbG9yIiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dCIsImNoYW5nZUxhbmd1YWdlIiwib3BlbiIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiZGlzcGxheUxhbmciLCJzZXREaXNwbGF5IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInVzZUNvbnRleHQiLCJMYW5ndWFnZUNvbnRleHQiLCJvcGVuTGFuZyIsImUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaW5pdExhbmd1YWdlIiwiZ2V0SXRlbSIsIlJlbW92ZUNoYW5nZUxhbmciLCJTdHlsZXMiLCJkaXNwbGF5IiwiY2xvc2VMYW5nQ2hhbmdlIiwic3ZnQ29udGFpbmVyIiwiY2hhbmdlTGFuZyIsIkZhY2Vib29rTG9naW5GbiIsInJlc3BvbnNlRmFjZWJvb2siLCJMb2dpbkZhY2Vib29rIiwiZXhwaXJlc0luIiwiYWNjZXNzVG9rZW4iLCJpZCIsInVybEltYWdlIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJ0aGVuIiwicmVzIiwic3RhdGUiLCJhbGVydCIsIm1lc3NhZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwicmVmX3Rva2VuIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvcGVuT3JjbG9zZU1vZGFsIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiQ29udGFpbmVyIiwibGFuZyIsInBvc3RBbm9ueW1vdXNseSIsIlVwbG9hZHBob3Rvd2l0aHlvdXJwb3N0IiwiRm9yZ290UGFzc3dvcmQiLCJjcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmUiLCJ0ZWxlcGhvbmVvcmVtYWlsIiwiY2FuY2VsIiwidXBkYXRlIiwicHV0eW91cm5ld0VtYWlsIiwiVXBkYXRlWW91ckVtYWlsIiwiQ29uZmVybWF0aW9uQ29kZSIsIllvdVdpbGxyZWNpdmVjb25mZXJtYXRpb25Db2RlcHV0aXRoZXJlQW5kQ2xpY2tVcGRhdGUiLCJwdXR5b3VybmV3cGhvbmVudW1iZXJoZXJlIiwiVXBkYXRlWW91clBob25lTnVtYmVyIiwibmV3cGFzc3dvcmRuZWVkdG9iZWF0bGVhc3RsZW5ndGgiLCJJdHNhZ29vZGlkZWF0b3VzZWFzdHJvbmdwYXNzd29yZHRoYXR5b3UiLCJuZXdQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiQWNjb3VudFNldHRpbmciLCJVcGRhdGVZb3VyUGFzc3dvcmQiLCJiaXJ0aGRheSIsInRvcGljIiwidG9kYXlUb3BpYyIsIkZyaWVuZHNQb3N0cyIsIkZvbGxvd2luZyIsIkZvbGxvd2VycyIsIlVwZGF0ZVByb2ZpbGUiLCJZb3VyUG9zdHMiLCJMaWtlcyIsIlBvc3RzIiwicmFkaW9ib3hEZWx0ZUFjY291bnQiLCJEZWxldGVBY2NvdW50SGVhZGVyIiwic2F2ZWNoYW5nZSIsImNoYW5nZVBhc3N3b3JkIiwiRGVhY3RpdmF0aW5nIiwiRGVsZXRpbmciLCJ1c2VybmFtZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiYmlvZ3JhcGh5IiwicGhvbmUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiY29uZmlybXBhc3N3b3JkIiwicGxhY2Vob2xkZXJJbnB1dCIsIlVwbG9hZF9waG90b193aXRoX3lvdXJfcG9zdF9Ib3ZlciIsInBvc3RfQW5vbnltb3VzbHlfaG92ZXIiLCJzaWduaW4iLCJzaWdudXAiLCJBbHJlYWR5SGF2ZUFjY291bnQiLCJZb3Vkb250aGF2ZWFjY291bnRDbGlja2hlcmV0byIsInZlcmlmaWNhdGlvbmNvZGUiLCJzZW5kIiwiVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3NfdEhvdmVyIiwiYXJhYmljIiwiTW9kYWxTaW5nSW5TaW5nVXAiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzaG93U2luZ0luX09yX1NIb3dTaW5nVXAiLCJzZXRTaG93U2luZ0luX09yX1NIb3dTaW5nVXAiLCJ2ZXJpZmllZEFjY291bnRNb2RhbCIsInNldHZlcmlmaWVkQWNjb3VudE1vZGFsIiwidXNlcklkIiwic2V0VXNlcklkIiwiZm5zZXRTaG93U2luZ0luX09yX1NIb3dTaW5nVXAiLCJjbG9zZU1vZGFsIiwiY2xvc2VQb3BVcCIsInNldEVycm9yTWVzc2FnZWZuIiwib3BlblZlcmlmaWVBY2NvdW50TW9kYWxmbiIsInVzZXJpZCIsImNvbnRyYWluZXIiLCJ3YXZlQ29udGFpbmVyIiwiY2hhbmdlbGFuZyIsImZvcm1Db250YWluZXIiLCJjbG9zZWJ0biIsImZvcm1zQ29udGFpbmVyIiwic2luZ0luIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiQXBpSXNMb2FkaW5nQ29udGV4dCIsImxvZ2luU3RhdGUiLCJzZXRMb2dpblN0YXRlIiwiTG9naW4iLCJzZXRFcnJvck1lc3NhZ2VQcm9wcyIsInZlcmlmaWVkIiwib3BlblZlcmlmaWVBY2NvdW50TW9kYWwiLCJzZXRMb2dpbkRhdGEiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsZWZ0IiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwicGFnZUhlYWRlciIsImRlc2NyaXB0aW9uSGVhZGVyIiwiaW5wdXRDb250YWluZXIiLCJpbnB1dCIsImxhYmVsc3BhbiIsImJ0biIsImNsaWNrSGVyZSIsImZuc2hvd1NpbmdJbk9yU2luZ1VwIiwiZm9yZ2V0UGFzc3dvcmQiLCJzaW5nVXAiLCJjb25maXJtUmVnaXN0ZXJGb3JtIiwic2V0Q29uZmlybVJlZ2lzdGVyRm9ybSIsImVycm9yRGF0YSIsInNldEVycm9yRGF0YSIsInVzZXJOYW1lIiwibXNnIiwicmVnaXN0ZXJTdGF0ZSIsInNldHJlZ2lzdGVyU3RhdGUiLCJ0ZWwiLCJiaXJ0aERheSIsImRpYWxDb2RlIiwiY2hhbmdlRW1haWxPclRlbGluaXQiLCJzZXRDaGFuZ2VFbWFpbE9yVGVsIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJSZWdpc3RlciIsImZvcm1WYWxpZGF0aW9uIiwiY29uZmlybVBhc3N3b3JkIiwiYmlyZGhEYXkiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0IiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJzdHlsZSIsImJvcmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsIm9uQ2hhbmdlSGFuZGxlclJlZ2lzdGVyUGhvbmUiLCJjb3VudHJ5IiwidXNlck5hbWVfUGFzc3dvcmRfSGFuZGxlciIsImNoYW5nZUVtYWlsT3JUZWwiLCJ0ZWxPckVtYWlsIiwibGFiZWxFbWFpbE9yUGFzc3dvcmQiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsIkNvbmZpcm1QYXNzd29yZCIsImFnZSIsIm9wYWNpdHkiLCJjdXJzb3IiLCJOYXZCYXIiLCJtb2RhbFNpbmdJblNpbmdVcCIsInNldE1vZGFsU2luZ0luU2luZ1VwIiwiaGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsInNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIm9wZW5NZW51UHJvZmlsZVN0YXRlIiwic2V0T3Blbk1lbnVQcm9maWxlIiwiZGlzeXBsYXlTZWFyY2giLCJzZXREaXNwbGF5U2VhcmNoIiwidXNlciIsInNldFVzZXIiLCJVc2VyQ29udGV4dCIsIm51bWJlck9mQ2hhdHNOb3RSZWFkIiwic2V0TnVtYmVyT2ZDaGF0c05vdFJlYWQiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJzb2NrZXRDb250ZXh0IiwicG9wVXBVc2VyIiwic2V0UG9wVXBVc2VyIiwicG9wVXBOb3RpZiIsInNldHBvcFVwTm90aWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGF0SGFuZGxlciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwicGF0aG5hbWUiLCJHZXRPdGhlclVzZXJzRGF0YSIsInNlbmRlcklkIiwicmVzdWx0IiwiZXJyb3IiLCJub3RpZkhhbmRsZXIiLCJub3RpZiIsIm9uIiwib2ZmIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0VW5yZWFkVXNlcnNDaGF0c051bWJlciIsIm9wZW5PckNsb3NlTm90aWYiLCJzZXRPcGVuT3JDbG9zZU5vdGlmIiwib3Blbk1lbnVQcm9maWxlIiwiY2xvc2VNZW51UHJvZmlsZSIsIm9wZW5NZW51UHJvZmlsZW9uQ2xpY2siLCJPcGVuc2VhcmNoVXNlcnMiLCJTZWFyY2hVc2VyRm4iLCJjbG9zZVNlYXJjaFVzZXIiLCJvcGVuT3JDbG9zZU5vdGlmaWNhdGlvbnMiLCJuYXYiLCJMb2dvIiwiU2VhcmNoIiwiZmxleEl0ZW1zIiwic2VhcmNoSW1nIiwiYXV0aGVudGljYXRlZCIsIm5vdGlmaWNhdGlvbiIsIm51bWJlck9mTm90aWZpY2F0aW9uTm90UmVhZGxvY2FsIiwicHJvZmlsZSIsIm5hdkJhckltYWdlQ29udGFpbmVyIiwiY3VycmVudEltYWdlVXJsIiwiTm9uYXV0aGVudGljYXRlZCIsIkNoYXQiLCJudW1iZXJPZkNoYXRzTm90UmVhZGxvY2FsIiwidXNlcldob1NlbnRZb3VJbWFnZSIsInNldFVzZXJXaG9TZW50WW91SW1hZ2UiLCJjaGF0U3ZnIiwic2hvd1RlbUltYWdlT2ZVc2VyV2hvU2VudFlvdU1lc3NhZ2UiLCJub3RpZmljYXRpb25zIiwic2V0bm90aWZpY2F0aW9ucyIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0bm90aWZpY2F0aW9ucyIsImRlbmllZGZvbGxvd2ZuIiwidGhlT3RoZXJQZXJzb25JZCIsImlkQ29tcG9uZW50IiwiZGVuaWVkZm9sbG93IiwiZmlsdGVyIiwiX2lkIiwiYWNjZXB0Zm9sbG93Zm4iLCJhY2NlcHRmb2xsb3ciLCJoZWFkZXIiLCJtYXAiLCJ0eXBlIiwidXNlckltYWdlQ29udGFpbmVyIiwiZnJvbSIsImJ0bnMiLCJsZHNyaW5nIiwicG9wVXBNZXNzYWdlIiwiaGFuZGxlQ2xvc2UiLCJmbmNsb3NlIiwiZXJyb3JUZXh0Iiwib3BlblBvcFVwIiwiZXJyb3JCdG5zIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlVG9rZW4iLCJwcm9maWxlTWVudSIsImhvdmVySGFuZGxlciIsImxpbmtzQ29udGFpbmVycyIsIkFjY291bnQiLCJuZXdVc2VyRGF0YSIsInNldE5ld1VzZXJEYXRhIiwidG9hc3RNZXNzYWdlIiwic2V0VG9hc3RNZXNzYWdlIiwiY2hhbmdlSGFuZGxlciIsIlVwZGF0ZURhdGEiLCJ1cGRhdGVQcm9maWxlSW5mbyIsImlucHV0c0NvbnRhaW5lciIsImJpZ0lucHV0IiwiRW1haWwiLCJjaGFuZ2VFYW1pbERhdGEiLCJzZXRDaGFuZ2VFYW1pbERhdGEiLCJjaGFuZ2VIYW5kbGVyTmV3RWFtaWxBbmRDb2RlIiwic2VuZENvZGUiLCJ1cGRhdGVFbWFpbFNlbmRDb2RlIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVFbWFpbEFwaSIsImNvZGUiLCJ0eXBlRXJyb3IiLCJjZW50ZXJJbnB1dHMiLCJ3YXJuaW5nVGV4dCIsImVtYWlsQ29udGFpbmVyIiwiUGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIlVwZGF0ZVBhc3N3b3JkIiwicGFzc3dvcmRpbmNvcnJlY3QiLCJUZWxlcGhvbmUiLCJwaG9uZUNvbnRhaW5lciIsIlByaXZhY3kiLCJwcml2YWN5c3RhdGUiLCJzZXRQcml2YWN5c3RhdGUiLCJnZXRQcml2YWN5IiwicHJpdmFjeSIsIlJhZGlvQm94Q2hhbmdlSGFuZGxlciIsInVwZGF0ZVByaXZhY3kiLCJyYWRpb0NvbnRhaW5lciIsInJhZGlvSW5wdXRDb250YWluZXIiLCJwcml2YXRlIiwicHVibGljIiwic2lkZU5hdkJhciIsInBhZ2UiLCJzZXRQYWdlIiwiY2hhbmdlRmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlcyIsIkNoYW5nZVByb2ZpbGVJbWFnZSIsInVzZXJQcm9maWxlSW1hZ2VVcmwiLCJQaWN1cmwiLCJjaGFuZ2VQYWdlVG8iLCJjaGFuZ2VQYWdlIiwiaW1hZ2UiLCJpbWFnZUNvbnRhaW5lciIsInVzZXJJbWFnZSIsImNhbWVyYSIsInBhZ2VzIiwiRm9jdXNlZCIsInNlYXJjaFVzZXIiLCJsaXN0T2ZVc2VycyIsInNldExpc3RPZlVzZXJzIiwic2VhcmNoVXNlck5hbWUiLCJzZWFyY2hVc2VyTmFtZUFwaSIsIlVzZXJzIiwidXNlckRhdGEiLCJ1c2VyQ29udGFpbmVyIiwiaW1nQ29udGFpbmVyIiwidmVyaWZ5QWNjb3VudCIsInNldENvZGUiLCJyZVNlbmRDb2RlIiwicmVTZW5kVmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvbkNvZGUiLCJ2ZXJpZnlVc2VyQWNjb3VudCIsImFjdGl2ZUFjY291bnQiLCJwdXNoIiwicXVlcnkiLCJyZWZyZWNoIiwiY29kZUhhbmRsZXIiLCJDb250YWluZXJWZXJpZmljYXRpb24iLCJWZXJpZmljYXRpb25IZWFkZXIiLCJkaXNjcnB0aW9uIiwiUmVzZW5kY29kZSIsImFwaUlzTG9hZGluZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXhpb3NBcGlJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImRlZmF1bHRzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsIm9yaWdpbmFsUmVxdWVzdCIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJwb3N0IiwiX3JldHJ5IiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwiZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lIiwiQXV0aG9yaXphdGlvbiIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3IiwicCIsInNyY1NldCIsInNpemVzIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyYyIsImkiLCJwYXJzZUludCIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwibWFya0Fzc2V0RXJyb3IiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlByb2ZpbGVTZXR0aW5ncyIsInNldHRpbmdzQ29udGFpbmVyIiwicHJvZmlsZVNldHRpbmdzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwiY29va2llcyIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiYWRkTWVzc2FnZSIsImdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uIiwiZ2V0VXNlcldob0NoYXRXaXRoIiwiZ2V0Rm9sbG93aW5nT2ZVc2VyIiwidW5mb2xsb3dVc2VyQXBpIiwiZm9sbG93aW5naWQiLCJmb2xsb3dVc2VyQXBpIiwidXNlclRvRm9sbG93IiwiY2hlY2tJZmZvbGxvd0FwaSIsInJlbW92ZUZvbGxvd1BlbmRpbmciLCJpZE5vdGlmIiwiY291bnRGb2xsb3dpbmdPZlVzZXIiLCJSZWZyZXNoQWNjZXNzVG9rZW4iLCJHZXRVc2VyRGF0YSIsImZpbGUiLCJwYXNzd29yZENoYW5nZSIsInNlYXJjaEFjY291bnRUb0ZvcmdldFBhc3N3b3JkIiwiaWRlbnRpdHkiLCJyZXNldFBhc3N3b3JkQXBpIiwiZGF0YVJlc2V0UGFzc3dvcmQiLCJTZXROZXdQYXNzd29yZEFwaSIsIm5ld1Bhc3N3b3JkQW5kVG9rZW5BbmRUZWxPckVtYWlsIiwiZ2V0cmFuZG9tVXNlcnNBcGkiLCJyYW5kb211c2VycyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q0E7QUFBaEIsR0FBbkQsRUFBbUY7QUFBRXBVLFdBQU8sRUFBRTtBQUFDZ1gsbUJBQWEsRUFBRSxZQUFZNVc7QUFBNUI7QUFBWCxHQUFuRixDQUFQO0FBQ0QsQ0FGRDs7QUFLQSxNQUFNa1MsVUFBVSxHQUFDLE1BQU1sUyxLQUFOLElBQWM7QUFDN0IsU0FBT3VWLGdFQUFnQixDQUFDZ0IsSUFBakIsQ0FBc0Isa0JBQXRCLEVBQXlDLEVBQXpDLEVBQTRDO0FBQUUzVyxXQUFPLEVBQUU7QUFBQ2dYLG1CQUFhLEVBQUUsWUFBWTVXO0FBQTVCO0FBQVgsR0FBNUMsQ0FBUDtBQUNELENBRkQ7O0FBR0EsTUFBTXFTLGFBQWEsR0FBQyxPQUFNbFQsSUFBTixFQUFXYSxLQUFYLEtBQW1CO0FBQ3JDLFNBQU91VixnRUFBZ0IsQ0FBQ2dCLElBQWpCLENBQXNCLHFCQUF0QixvQkFBZ0RwWCxJQUFoRCxHQUFzRDtBQUFFUyxXQUFPLEVBQUU7QUFBQ2dYLG1CQUFhLEVBQUUsWUFBWTVXO0FBQTVCO0FBQVgsR0FBdEQsQ0FBUDtBQUNELENBRkQ7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZXR0aW5ncy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vVG9hc3QubW9kdWxlLnNjc3MnXHJcbmNvbnN0IFRvYXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17YCR7U3R5bGUuY29udGFpbmVyfWB9IHN0eWxlPXtwcm9wcy5jb2xvciE9dW5kZWZpbmVkP3tiYWNrZ3JvdW5kQ29sb3I6cHJvcHMuY29sb3J9Ont9fSA+XHJcbiAgICAgICAgICAgIDxoMT57cHJvcHMudGV4dH08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJUb2FzdF9jb250YWluZXJfXzFaZEdzXCIsXG5cdFwiZG93bnRvVXBcIjogXCJUb2FzdF9kb3dudG9VcF9fcmMwMGhcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2NoYW5nZUxhbmd1YWdlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0J1xyXG5pbXBvcnQgaW5pdExhbmd1YWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5pdExhbmd1YWdlL2luaXRMYW5ndWFnZSdcclxuY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSkgLy8gb3BlbiBib3ggdG8gY2hvaWNlIGxhbmdcclxuICAgIGNvbnN0IFtkaXNwbGF5TGFuZywgc2V0RGlzcGxheV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSkgLy8gaGlkZSBjaGFuZ2UgbGFuZyBib3ggaWYgdHJ1ZVxyXG4gICAgY29uc3QgW2xhbmd1YWdlICwgc2V0TGFuZ3VhZ2VdPVJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IG9wZW5MYW5nID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oZSA9PiAhZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gKGUpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhbmd1YWdlXCIsIGUpXHJcbiAgICAgICAgc2V0TGFuZ3VhZ2UoaW5pdExhbmd1YWdlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpfHxcImVuZ1wiKSlcclxuICAgIH1cclxuICAgIGNvbnN0IFJlbW92ZUNoYW5nZUxhbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RGlzcGxheSh0cnVlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e2Rpc3BsYXlMYW5nID8geyBkaXNwbGF5OiBcIm5vbmVcIiB9IDoge319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNsb3NlTGFuZ0NoYW5nZX0gb25DbGljaz17KCkgPT4gUmVtb3ZlQ2hhbmdlTGFuZygpfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvcGVuTGFuZygpfSBjbGFzc05hbWU9e1N0eWxlcy5zdmdDb250YWluZXJ9PjxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImxhbmd1YWdlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0MCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNTIuMSAyMzYuMmMtMy41LTEyLjEtNy44LTMzLjItNy44LTMzLjJoLS41cy00LjMgMjEuMS03LjggMzMuMmwtMTEuMSAzNy41SDE2M3pNNjE2IDk2SDMzNnYzMjBoMjgwYzEzLjMgMCAyNC0xMC43IDI0LTI0VjEyMGMwLTEzLjMtMTAuNy0yNC0yNC0yNHptLTI0IDEyMGMwIDYuNi01LjQgMTItMTIgMTJoLTExLjRjLTYuOSAyMy42LTIxLjcgNDcuNC00Mi43IDY5LjkgOC40IDYuNCAxNy4xIDEyLjUgMjYuMSAxOCA1LjUgMy40IDcuMyAxMC41IDQuMSAxNi4ybC03LjkgMTMuOWMtMy40IDUuOS0xMC45IDcuOC0xNi43IDQuMy0xMi42LTcuOC0yNC41LTE2LjEtMzUuNC0yNC45LTEwLjkgOC43LTIyLjcgMTcuMS0zNS40IDI0LjktNS44IDMuNS0xMy4zIDEuNi0xNi43LTQuM2wtNy45LTEzLjljLTMuMi01LjYtMS40LTEyLjggNC4yLTE2LjIgOS4zLTUuNyAxOC0xMS43IDI2LjEtMTgtNy45LTguNC0xNC45LTE3LTIxLTI1LjctNC01LjctMi4yLTEzLjYgMy43LTE3LjFsNi41LTMuOSA3LjMtNC4zYzUuNC0zLjIgMTIuNC0xLjcgMTYgMy40IDUgNyAxMC44IDE0IDE3LjQgMjAuOSAxMy41LTE0LjIgMjMuOC0yOC45IDMwLTQzLjJINDEyYy02LjYgMC0xMi01LjQtMTItMTJ2LTE2YzAtNi42IDUuNC0xMiAxMi0xMmg2NHYtMTZjMC02LjYgNS40LTEyIDEyLTEyaDE2YzYuNiAwIDEyIDUuNCAxMiAxMnYxNmg2NGM2LjYgMCAxMiA1LjQgMTIgMTJ6TTAgMTIwdjI3MmMwIDEzLjMgMTAuNyAyNCAyNCAyNGgyODBWOTZIMjRjLTEzLjMgMC0yNCAxMC43LTI0IDI0em01OC45IDIxNi4xTDExNi40IDE2N2MxLjctNC45IDYuMi04LjEgMTEuNC04LjFoMzIuNWM1LjEgMCA5LjcgMy4zIDExLjQgOC4xbDU3LjUgMTY5LjFjMi42IDcuOC0zLjEgMTUuOS0xMS40IDE1LjloLTIyLjlhMTIgMTIgMCAwIDEtMTEuNS04LjZsLTkuNC0zMS45aC02MC4ybC05LjEgMzEuOGMtMS41IDUuMS02LjIgOC43LTExLjUgOC43SDcwLjNjLTguMiAwLTE0LTguMS0xMS40LTE1Ljl6XCI+PC9wYXRoPjwvc3ZnPjwvZGl2PlxyXG4gICAgICAgICAgICB7b3BlbiAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNoYW5nZUxhbmd9PlxyXG4gICAgICAgICAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IGNoYW5nZUxhbmd1YWdlKFwiYXJhYmljXCIpfT7Yudix2KjZitipPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZShcImVuZ1wiKX0+ZW5nbGlzaDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDIgb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UoXCJmclwiKX0+ZnJhbmNlPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VMYW5ndWFnZVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjaGFuZ2VMYW5ndWFnZV9jb250YWluZXJfXzJBOTFmXCIsXG5cdFwiY2xvc2VMYW5nQ2hhbmdlXCI6IFwiY2hhbmdlTGFuZ3VhZ2VfY2xvc2VMYW5nQ2hhbmdlX18yZVVZU1wiLFxuXHRcInN2Z0NvbnRhaW5lclwiOiBcImNoYW5nZUxhbmd1YWdlX3N2Z0NvbnRhaW5lcl9fMUxMWmdcIixcblx0XCJjaGFuZ2VMYW5nXCI6IFwiY2hhbmdlTGFuZ3VhZ2VfY2hhbmdlTGFuZ19fM0RGVWRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4nO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vZmFjZWJvb2tMb2dJbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgTG9naW5GYWNlYm9vayB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXInXHJcblxyXG5jb25zdCBGYWNlYm9va0xvZ2luRm4gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2VGYWNlYm9vayA9IChlKSA9PiB7XHJcbiAgICBMb2dpbkZhY2Vib29rKHsgZXhwaXJlc0luOiBlLmV4cGlyZXNJbiwgYWNjZXNzVG9rZW46IGUuYWNjZXNzVG9rZW4sIGlkOiBlLmlkLCB1cmxJbWFnZTogZS5waWN0dXJlLmRhdGEudXJsIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnN0YXRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgYWxlcnQocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmZXRjaChcImFwaS9zZXRUb2tlblwiLCB7IG1ldGhvZDogXCJwb3N0XCIsIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSwgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b2tlbjogcmVzLmRhdGEudG9rZW4gfSkgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZfdG9rZW5cIiwgcmVzLmRhdGEucmVmX3Rva2VuKVxyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICBwcm9wcy5vcGVuT3JjbG9zZU1vZGFsKClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaChlID0+IHsgY29uc29sZS5sb2coZSkgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuQ29udGFpbmVyfT5cclxuICAgICAgezxGYWNlYm9va0xvZ2luIGFwcElkPVwiNDI4MTU4MTMxODIwMDkyXCIgYXV0b0xvYWQ9e2ZhbHNlfSBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIiBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va30gLz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkZuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29udGFpbmVyXCI6IFwiZmFjZWJvb2tMb2dJbl9Db250YWluZXJfXzJSWVhRXCJcbn07XG4iLCJcclxuY29uc3QgaW5pdExhbmd1YWdlPShlKT0+e1xyXG4gICAgdmFyIGxhbmc9e31cclxuICAgIHN3aXRjaChlKSB7XHJcbiAgICAgICAgY2FzZSBcImVuZ1wiOlxyXG4gICAgICAgICAgICBsYW5nPXtcclxuICAgICAgICAgICAgICAgIHBvc3RBbm9ueW1vdXNseTpcInBvc3QgQW5vbnltb3VzbHlcIixcclxuICAgICAgICAgICAgICAgIFVwbG9hZHBob3Rvd2l0aHlvdXJwb3N0OlwiVXBsb2FkIHBob3RvIHdpdGggeW91ciBwb3N0XCIsXHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZDpcIkZvcmdvdCBQYXNzd29yZD9cIixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZTpcImNyZWF0ZSBhIHByb2ZpbGUgZm9sbG93IG90aGVyIGFjY291bnRzIHRhbGsgYWJvdXQgeW91ciBvd24gZXhwZXJpZW5jZSBhbmQgbW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgdGVsZXBob25lb3JlbWFpbDpcInRlbGVwaG9uZSBvciBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOlwiY2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6XCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdFbWFpbDpcInB1dCB5b3VyIG5ldyBFbWFpbCBoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyRW1haWw6XCJVcGRhdGUgWW91ciBFbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgQ29uZmVybWF0aW9uQ29kZTpcIkNvbmZlcm1hdGlvbiBDb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBZb3VXaWxscmVjaXZlY29uZmVybWF0aW9uQ29kZXB1dGl0aGVyZUFuZENsaWNrVXBkYXRlOlwiWW91IFdpbGwgcmVjaXZlIGNvbmZlcm1hdGlvbiBDb2RlIHB1dCBpdCBoZXJlIEFuZCBDbGljayBVcGRhdGVcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmU6XCJwdXQgeW91ciBuZXcgcGhvbmUgbnVtYmVyIGhlcmVcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQaG9uZU51bWJlcjpcIlVwZGF0ZSBZb3VyIFBob25lTnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aDpcIm5ldyBwYXNzd29yZCBuZWVkIHRvIGJlIGF0IGxlYXN0IDggbGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBJdHNhZ29vZGlkZWF0b3VzZWFzdHJvbmdwYXNzd29yZHRoYXR5b3U6XCJJdCdzIGEgZ29vZCBpZGVhIHRvIHVzZSBhIHN0cm9uZyBwYXNzd29yZCB0aGF0IHlvdSdyZSBub3QgdXNpbmcgZWxzZXdoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdQYXNzd29yZDpcIm5ldyBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgb2xkUGFzc3dvcmQ6XCJvbGQgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIEFjY291bnRTZXR0aW5nOlwiQWNjb3VudCBTZXR0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGFzc3dvcmQ6XCJVcGRhdGUgWW91ciBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6XCJiaXJ0aCBkYXlcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOicnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXlUb3BpYzondG9kYXkgVG9waWMnLFxyXG4gICAgICAgICAgICAgICAgRnJpZW5kc1Bvc3RzOidmcmllbmRzIHB1YmxpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2luZzonZm9sbG93aW5nJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VyczonRm9sbG93ZXJzJyxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVByb2ZpbGU6J1VwZGF0ZSBQcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIFlvdXJQb3N0czonWW91ciBQb3N0cycsXHJcbiAgICAgICAgICAgICAgICBMaWtlczonTGlrZXMnLFxyXG4gICAgICAgICAgICAgICAgUG9zdHM6J1Bvc3RzJyxcclxuICAgICAgICAgICAgICAgIHJhZGlvYm94RGVsdGVBY2NvdW50OidyYWRpb2JveERlbHRlQWNjb3VudCcsXHJcbiAgICAgICAgICAgICAgICBEZWxldGVBY2NvdW50SGVhZGVyOidEZWxldGVBY2NvdW50SGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIHNhdmVjaGFuZ2U6J3NhdmVjaGFuZ2UnLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGFzc3dvcmQ6J2NoYW5nZVBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIERlYWN0aXZhdGluZzonRGVhY3RpdmF0aW5nJyxcclxuICAgICAgICAgICAgICAgIERlbGV0aW5nOidEZWxldGluZycsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTondXNlcm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOidmaXJzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6J2xhc3RuYW1lJyxcclxuICAgICAgICAgICAgICAgIGJpb2dyYXBoeTonYmlvZ3JhcGh5JyxcclxuICAgICAgICAgICAgICAgIHBob25lOidwaG9uZScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDonZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6J3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIGRheTonZGF5JyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOidtb250aCcsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOid5ZWFyJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1wYXNzd29yZDonY29uZmlybXBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVySW5wdXQ6J3NheSBzb210aGluZycsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc3RfSG92ZXI6J1VwbG9hZCBwaG90byB3aXRoIHlvdXIgcG9zdCcsXHJcbiAgICAgICAgICAgICAgICBwb3N0X0Fub255bW91c2x5X2hvdmVyOidwb3N0X0Fub255bW91c2x5JyxcclxuICAgICAgICAgICAgICAgIHNpZ25pbjonc2lnbiBpbicsXHJcbiAgICAgICAgICAgICAgICBzaWdudXA6J3NpZ24gdXAnLFxyXG4gICAgICAgICAgICAgICAgQWxyZWFkeUhhdmVBY2NvdW50OidBbHJlYWR5IEhhdmUgQWNjb3VudCcsXHJcbiAgICAgICAgICAgICAgICBZb3Vkb250aGF2ZWFjY291bnRDbGlja2hlcmV0bzonWW91IGRvbnQgaGF2ZSBhY2NvdW50IENsaWNrIGhlcmUgdG8nLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uY29kZTpcInZlcmlmaWNhdGlvbiBjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBzZW5kOlwic2VuZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmclwiOlxyXG4gICAgICAgICAgICBsYW5nPXtcclxuICAgICAgICAgICAgICAgIHBvc3RBbm9ueW1vdXNseTpcInB1YmxpZXIgZGUgbWFuacOocmUgYW5vbnltZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkcGhvdG93aXRoeW91cnBvc3Q6XCJUw6lsw6ljaGFyZ2VyIHVuZSBwaG90byBhdmVjIHZvdHJlIG1lc3NhZ2VcIixcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkOlwiTW90IGRlIHBhc3NlIG91Ymxpw6k/XCIsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmU6XCJjcsOpZXIgdW4gcHJvZmlsIHN1aXZyZSBkJ2F1dHJlcyBjb21wdGVzIHBhcmxlciBkZSB2b3RyZSBwcm9wcmUgZXhww6lyaWVuY2UgZXQgcGx1c1wiLFxyXG4gICAgICAgICAgICAgICAgdGVsZXBob25lb3JlbWFpbDpcInTDqWzDqXBob25lIG91IGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6XCJBbm51bGVyXCIsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6XCJtZXR0cmUgw6Agam91clwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld0VtYWlsOlwibWV0dGV6IHZvdHJlIG5vdXZlYXUgY291cnJpZWwgaWNpXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyRW1haWw6XCJNZXR0ZXogw6Agam91ciB2b3RyZSBlLW1haWxcIixcclxuICAgICAgICAgICAgICAgIENvbmZlcm1hdGlvbkNvZGU6XCJDb2RlIGRlIGNvbmZlcm1hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZTpcIlZvdXMgcmVjZXZyZXogbGUgY29kZSBkZSBjb25mZXJtYXRpb24sIG1ldHRlei1sZSBpY2kgZXQgY2xpcXVleiBzdXIgTWV0dHJlIMOgIGpvdXJcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmU6XCJtZXR0ZXogdm90cmUgbm91dmVhdSBudW3DqXJvIGRlIHTDqWzDqXBob25lIGljaVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBob25lTnVtYmVyOlwiTWV0dGV6IMOgIGpvdXIgdm90cmUgbnVtw6lybyBkZSB0w6lsw6lwaG9uZVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3cGFzc3dvcmRuZWVkdG9iZWF0bGVhc3RsZW5ndGg6XCJsZSBub3V2ZWF1IG1vdCBkZSBwYXNzZSBkb2l0IGF2b2lyIHVuZSBsb25ndWV1ciBkJ2F1IG1vaW5zIDhcIixcclxuICAgICAgICAgICAgICAgIEl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdTpcIkMnZXN0IHVuZSBib25uZSBpZMOpZSBkJ3V0aWxpc2VyIHVuIG1vdCBkZSBwYXNzZSBmb3J0IHF1ZSB2b3VzIG4ndXRpbGlzZXogcGFzIGFpbGxldXJzXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdQYXNzd29yZDpcIm5vdXZlYXUgbW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBvbGRQYXNzd29yZDpcImFuY2llbiBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICAgICAgICAgIEFjY291bnRTZXR0aW5nOlwiUGFyYW3DqHRyZSBkdSBjb21wdGVcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQYXNzd29yZDpcIk1ldHRleiDDoCBqb3VyIHZvdHJlIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6XCJkYXRlIGQnYW5uaXZlcnNhaXJleVwiLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6JycsXHJcbiAgICAgICAgICAgICAgICB0b2RheVRvcGljOlwiU3VqZXQgZCdhdWpvdXJkICdodWlcIixcclxuICAgICAgICAgICAgICAgIEZyaWVuZHNQb3N0czpcInB1YmxpY2F0aW9uIGQnYW1pc1wiLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93aW5nOidzdWl2YW50ZScsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlcnM6J1N1aXZldXJzJyxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVByb2ZpbGU6J01ldHRyZSDDoCBqb3VyIGxlIHByb2ZpbCcsXHJcbiAgICAgICAgICAgICAgICBZb3VyUG9zdHM6J1ZvcyBwdWJsaWNhdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgTGlrZXM6XCJqJ2FpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICBQb3N0czonZGVzIHBvc3RlcycsXHJcbiAgICAgICAgICAgICAgICByYWRpb2JveERlbHRlQWNjb3VudDonU3VwcHJlc3Npb24nLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRlQWNjb3VudEhlYWRlcjonU3VwcHJpbWVyIGxlIGNvbXB0ZScsXHJcbiAgICAgICAgICAgICAgICBzYXZlY2hhbmdlOidzYXV2ZWdhcmRlciBsZXMgbW9kaWZpY2F0aW9ucycsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXNzd29yZDonY2hhbmdlciBsZSBtb3QgZGUgcGFzc2UnLFxyXG4gICAgICAgICAgICAgICAgRGVhY3RpdmF0aW5nOidDZWNpIGVzdCBwZXJtYW5lbnQuTG9yc3F1ZSB2b3VzIHN1cHByaW1leiB2b3RyZSBjb21wdGUsIHZvdXMgbmUgcG91cnJleiBwYXMgcsOpY3Vww6lyZXIgbGUgY29udGVudSBvdSBsZXMgaW5mb3JtYXRpb25zIHF1ZSB2b3VzIGF2ZXogcGFydGFnw6lzIHN1ciBsIGFwcGxpY2F0aW9uLicsXHJcbiAgICAgICAgICAgICAgICBEZWxldGluZzonc3VwcHJpbWUnLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6XCJOb20gZCd1dGlsaXNhdGV1clwiLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOidQcsOpbm9tJyxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOidub20gZGUgZmFtaWxsZScsXHJcbiAgICAgICAgICAgICAgICBiaW9ncmFwaHk6J0Jpb2dyYXBoaWUnLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6J3TDqWzDqXBob25lJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOidlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDonbW90IGRlIHBhc3NlJyxcclxuICAgICAgICAgICAgICAgIGRheTonam91cicsXHJcbiAgICAgICAgICAgICAgICBtb250aDonbW9udGgnLFxyXG4gICAgICAgICAgICAgICAgeWVhcjoneWVhcicsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6J0NvbmZpcm1leiBsZSBtb3QgZGUgcGFzc2UnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJJbnB1dDonw6AgcXVvaSBwZW5zZXMtdHUnLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3NfdEhvdmVyOidUw6lsw6ljaGFyZ2VyIHVuZSBwaG90byBhdmVjIHZvdHJlIG1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgcG9zdF9Bbm9ueW1vdXNseV9ob3ZlcjoncHVibGllciBkZSBtYW5pw6hyZSBhbm9ueW1lJyxcclxuICAgICAgICAgICAgICAgIHNpZ25pbjpcInMnaWRlbnRpZmllclwiLFxyXG4gICAgICAgICAgICAgICAgc2lnbnVwOlwiUydpbnNjcmlyZVwiLFxyXG4gICAgICAgICAgICAgICAgQWxyZWFkeUhhdmVBY2NvdW50OidWb3VzIGF2ZXogZMOpasOgIHVuIGNvbXB0ZScsXHJcbiAgICAgICAgICAgICAgICBZb3Vkb250aGF2ZWFjY291bnRDbGlja2hlcmV0bzpcIlZvdXMgbidhdmV6IHBhcyBkZSBjb21wdGUgQ2xpcXVleiBpY2kgcG91clwiLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uY29kZTpcImNvZGUgZGUgdsOpcmlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgc2VuZDpcImVudm95ZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJhcmFiaWNcIjpcclxuICAgICAgICAgICAgbGFuZz17XHJcbiAgICAgICAgICAgICAgICBwb3N0QW5vbnltb3VzbHk6XCLZhti02LEg2YXYrNmH2YjZhFwiLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkcGhvdG93aXRoeW91cnBvc3Q6XCLYqtit2YXZitmEINin2YTYtdmI2LHYqSDZhdi5INmF2YbYtNmI2LHZg1wiLFxyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmQ6XCLZh9mEINmG2LPZitiqINmD2YTZhdipINin2YTYs9ixP1wiLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlYXByb2ZpbGVmb2xsb3dvdGhlcmFjY291bnRzdGFsa2Fib3V0eW91cm93bmV4cGVyaWVuY2VhbmRtb3JlOlwi2KXZhti02KfYoSDYrdiz2KfYqCAg2KrYp9io2Lkg2K3Ys9in2KjYp9iqINij2K7YsdmJINiq2K3Yr9irINi52YYg2KrYrNix2KjYqtmDINin2YTYrtin2LXYqSDZiNin2YTZhdiy2YrYr1wiLFxyXG4gICAgICAgICAgICAgICAgdGVsZXBob25lb3JlbWFpbDpcItin2YTZh9in2KrZgSDYo9mIINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZilwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOlwi2KXZhNi62KfYoVwiLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOlwi2KrYrdiv2YrYq1wiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld0VtYWlsOlwi2LbYuSDYqNix2YrYr9mDINin2YTYpdmE2YPYqtix2YjZhtmKINin2YTYrNiv2YrYryDZh9mG2KdcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJFbWFpbDpcItmC2YUg2KjYqtit2K/ZitirINio2LHZitiv2YMg2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICAgICAgICAgIENvbmZlcm1hdGlvbkNvZGU6XCLZg9mI2K8g2KfZhNiq2KPZg9mK2K9cIixcclxuICAgICAgICAgICAgICAgIFlvdVdpbGxyZWNpdmVjb25mZXJtYXRpb25Db2RlcHV0aXRoZXJlQW5kQ2xpY2tVcGRhdGU6XCLYs9mI2YEg2KrYqtmE2YLZiSDYsdmF2LIg2KfZhNiq2KPZg9mK2K8g2YjYtti52Ycg2YfZhtinINmI2KfZhtmC2LEg2YHZiNmCINiq2K3Yr9mK2KtcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmU6XCLYtti5INix2YLZhSDZh9in2KrZgdmDINin2YTYrNiv2YrYryDZh9mG2KdcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQaG9uZU51bWJlcjpcItmC2YUg2KjYqtit2K/ZitirINix2YLZhSDZh9in2KrZgdmDXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aDpcItmK2KzYqCDYo9mE2Kcg2YrZgtmEINi32YjZhCDZg9mE2YXYqSDYp9mE2YXYsdmI2LEg2KfZhNis2K/Zitiv2Kkg2LnZhiA4XCIsXHJcbiAgICAgICAgICAgICAgICBJdHNhZ29vZGlkZWF0b3VzZWFzdHJvbmdwYXNzd29yZHRoYXR5b3U6XCLZhdmGINin2YTYrNmK2K8g2KfYs9iq2K7Yr9in2YUg2YPZhNmF2Kkg2YXYsdmI2LEg2YLZiNmK2Kkg2YTYpyDYqtiz2KrYrtiv2YXZh9inINmB2Yog2KPZiiDZhdmD2KfZhiDYotiu2LFcIixcclxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkOlwi2YPZhNmF2Kkg2KfZhNiz2LEg2KfZhNis2K/Zitiv2KlcIixcclxuICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkOlwi2YPZhNmF2Kkg2KfZhNmF2LHZiNixINin2YTZgtiv2YrZhdipXCIsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTpcIti52YrYryDYp9mE2YXZitmE2KfYr1wiLFxyXG4gICAgICAgICAgICAgICAgQWNjb3VudFNldHRpbmc6XCLYpdi52K/Yp9iv2KfYqiDYp9mE2K3Ys9in2KhcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOicnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBhc3N3b3JkOlwi2YLZhSDYqNiq2K3Yr9mK2Ksg2YPZhNmF2Kkg2KfZhNmF2LHZiNixINin2YTYrtin2LXYqSDYqNmDXCIsXHJcbiAgICAgICAgICAgICAgICBhcmFiaWM6XCLZhdmI2LbZiNi5INin2YTZitmI2YVcIixcclxuICAgICAgICAgICAgICAgIHRvZGF5VG9waWM6J9mG2LTYsSDYp9mE2KPYtdiv2YLYp9ihJyxcclxuICAgICAgICAgICAgICAgIEZyaWVuZHNQb3N0czon2KfZhNij2LXYr9mC2KfYoScsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dpbmc6J9mF2KrYp9io2LnZh9mFJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2Vyczon2KfZhNmF2KrYp9io2LnZitmGJyxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVByb2ZpbGU6J9iq2K3Yr9mK2Ksg2KfZhNio2YrZhtin2KonLFxyXG4gICAgICAgICAgICAgICAgWW91clBvc3RzOifZhdmG2LTZiNix2KfYqtmDJyxcclxuICAgICAgICAgICAgICAgIExpa2VzOifYp9i52KzYqNiq2KfZgycsXHJcbiAgICAgICAgICAgICAgICBQb3N0czon2KfZhNmF2LTYp9ix2YPYp9iqJyxcclxuICAgICAgICAgICAgICAgIHJhZGlvYm94RGVsdGVBY2NvdW50OifYrdiw2YEnLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRlQWNjb3VudEhlYWRlcjon2K3YsNmBINin2YTYrdiz2KfYqCcsXHJcbiAgICAgICAgICAgICAgICBzYXZlY2hhbmdlOifYrdmB2Lgg2KfZhNiq2LrZitmK2LEnLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGFzc3dvcmQ6J9iq2LrZitixINmD2YTZhdipINin2YTYs9ixJyxcclxuICAgICAgICAgICAgICAgIERlYWN0aXZhdGluZzpcItin2LPZhSDYp9mE2LTZh9ix2KnZh9iw2Kcg2K/Yp9im2YUg2Iwg2LnZhtiv2YXYpyDYqtit2LDZgSDYrdiz2KfYqNmDINiMINmE2YYg2KrYqtmF2YPZhiDZhdmGINin2LPYqtix2K/Yp9ivINin2YTZhdit2KrZiNmJINij2Ygg2KfZhNmF2LnZhNmI2YXYp9iqINin2YTYqtmKINi02KfYsdmD2KrZh9inINi52YTZiSDYp9mE2KrYt9io2YrZgi5cIixcclxuICAgICAgICAgICAgICAgIERlbGV0aW5nOifYtNi32KgnLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6J9in2LPZhSDYp9mE2LTZh9ix2KknLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOifYp9mE2KfYs9mFJyxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOifYp9mE2YTZgtioJyxcclxuICAgICAgICAgICAgICAgIGJpb2dyYXBoeTon2LPZitix2Kkg2LTYrti12YrYqScsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTon2YfYp9iq2YEnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6J9in2YTYqNix2YrYrycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDpcItmD2YTZhdmHINin2YTYs9ixXCIsXHJcbiAgICAgICAgICAgICAgICBkYXk6J9mK2YjZhScsXHJcbiAgICAgICAgICAgICAgICBtb250aDon2KfZhNi02YfYsScsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOifYp9mE2LnYp9mFJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1wYXNzd29yZDon2KrYp9mD2YrYryDZg9mE2YXYqSDYp9mE2YXYsdmI2LEnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJJbnB1dDon2KjZhdin2LDYpyDYqtmB2YPYsScsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc190SG92ZXI6J9iq2K3ZhdmK2YQg2KfZhNi12YjYsdipINmF2Lkg2YXZhti02YjYsdmDJyxcclxuICAgICAgICAgICAgICAgIHBvc3RfQW5vbnltb3VzbHlfaG92ZXI6J9mG2LTYsSDZhdis2YfZiNmEJyxcclxuICAgICAgICAgICAgICAgIHNpZ25pbjon2KrYs9is2YrZhCDYp9mE2K/YrtmI2YQnLFxyXG4gICAgICAgICAgICAgICAgc2lnbnVwOifYp9i02KrYsdin2YMnLFxyXG4gICAgICAgICAgICAgICAgQWxyZWFkeUhhdmVBY2NvdW50OifZhNiv2YrZgyDYrdiz2KfYqCDYqNin2YTZgdi52YQnLFxyXG4gICAgICAgICAgICAgICAgWW91ZG9udGhhdmVhY2NvdW50Q2xpY2toZXJldG86J9mE2YrYsyDZhNiv2YrZgyDYrdiz2KfYqCDYp9mG2YLYsSDZh9mG2KcnLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uY29kZTpcItix2YXYsiDYp9mE2KrYrdmC2YJcIixcclxuICAgICAgICAgICAgICAgIHNlbmQ6XCLYpdix2LPYp9mEXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGxhbmc9e1xyXG4gICAgICAgICAgICAgICAgcG9zdEFub255bW91c2x5OlwicG9zdCBBbm9ueW1vdXNseVwiLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkcGhvdG93aXRoeW91cnBvc3Q6XCJVcGxvYWQgcGhvdG8gd2l0aCB5b3VyIHBvc3RcIixcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkOlwiRm9yZ290IFBhc3N3b3JkP1wiLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlYXByb2ZpbGVmb2xsb3dvdGhlcmFjY291bnRzdGFsa2Fib3V0eW91cm93bmV4cGVyaWVuY2VhbmRtb3JlOlwiY3JlYXRlIGEgcHJvZmlsZSBmb2xsb3cgb3RoZXIgYWNjb3VudHMgdGFsayBhYm91dCB5b3VyIG93biBleHBlcmllbmNlIGFuZCBtb3JlXCIsXHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVvcmVtYWlsOlwidGVsZXBob25lIG9yIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6XCJjYW5jZWxcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTpcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld0VtYWlsOlwicHV0IHlvdXIgbmV3IEVtYWlsIGhlcmVcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJFbWFpbDpcIlVwZGF0ZSBZb3VyIEVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBDb25mZXJtYXRpb25Db2RlOlwiQ29uZmVybWF0aW9uIENvZGVcIixcclxuICAgICAgICAgICAgICAgIFlvdVdpbGxyZWNpdmVjb25mZXJtYXRpb25Db2RlcHV0aXRoZXJlQW5kQ2xpY2tVcGRhdGU6XCJZb3UgV2lsbCByZWNpdmUgY29uZmVybWF0aW9uIENvZGUgcHV0IGl0IGhlcmUgQW5kIENsaWNrIFVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld3Bob25lbnVtYmVyaGVyZTpcInB1dCB5b3VyIG5ldyBwaG9uZSBudW1iZXIgaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBob25lTnVtYmVyOlwiVXBkYXRlIFlvdXIgUGhvbmVOdW1iZXJcIixcclxuICAgICAgICAgICAgICAgIG5ld3Bhc3N3b3JkbmVlZHRvYmVhdGxlYXN0bGVuZ3RoOlwibmV3IHBhc3N3b3JkIG5lZWQgdG8gYmUgYXQgbGVhc3QgOCBsZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIEl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdTpcIkl0J3MgYSBnb29kIGlkZWEgdG8gdXNlIGEgc3Ryb25nIHBhc3N3b3JkIHRoYXQgeW91J3JlIG5vdCB1c2luZyBlbHNld2hlcmVcIixcclxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkOlwibmV3IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzonJyxcclxuICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkOlwib2xkIFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGFzc3dvcmQ6XCJVcGRhdGUgWW91ciBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgQWNjb3VudFNldHRpbmc6XCJBY2NvdW50IFNldHRpbmdcIixcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5OlwiYmlydGggZGF5XCIsXHJcbiAgICAgICAgICAgICAgICB0b2RheVRvcGljOid0b2RheSBUb3BpYycsXHJcbiAgICAgICAgICAgICAgICBGcmllbmRzUG9zdHM6J2ZyaWVuZHMgcHVibGljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93aW5nOidmb2xsb3dpbmcnLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJzOidGb2xsb3dlcnMnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvZmlsZTonVXBkYXRlIFByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgWW91clBvc3RzOidZb3VyIFBvc3RzJyxcclxuICAgICAgICAgICAgICAgIExpa2VzOidMaWtlcycsXHJcbiAgICAgICAgICAgICAgICBQb3N0czonUG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9ib3hEZWx0ZUFjY291bnQ6J3JhZGlvYm94RGVsdGVBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgIERlbGV0ZUFjY291bnRIZWFkZXI6J0RlbGV0ZUFjY291bnRIZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWNoYW5nZTonc2F2ZWNoYW5nZScsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXNzd29yZDonY2hhbmdlUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgRGVhY3RpdmF0aW5nOidEZWFjdGl2YXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRpbmc6J0RlbGV0aW5nJyxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOid1c2VybmFtZScsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6J2ZpcnN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTonbGFzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgYmlvZ3JhcGh5OidiaW9ncmFwaHknLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6J3Bob25lJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOidlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDoncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgZGF5OidkYXknLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6J21vbnRoJyxcclxuICAgICAgICAgICAgICAgIHllYXI6J3llYXInLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybXBhc3N3b3JkOidjb25maXJtcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJJbnB1dDonc2F5IFNvbXRoaW5nJyxcclxuICAgICAgICAgICAgICAgIFVwbG9hZF9waG90b193aXRoX3lvdXJfcG9zdF9Ib3ZlcjonVXBsb2FkIHBob3RvIHdpdGggeW91ciBwb3N0JyxcclxuICAgICAgICAgICAgICAgIHBvc3RfQW5vbnltb3VzbHlfaG92ZXI6J3Bvc3RfQW5vbnltb3VzbHknLFxyXG4gICAgICAgICAgICAgICAgc2lnbmluOidzaWduIGluJyxcclxuICAgICAgICAgICAgICAgIHNpZ251cDonc2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5SGF2ZUFjY291bnQ6J0FscmVhZHkgSGF2ZSBBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgIFlvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvOidZb3UgZG9udCBoYXZlIGFjY291bnQgQ2xpY2sgaGVyZSB0bycsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25jb2RlOlwidmVyaWZpY2F0aW9uIGNvZGVcIixcclxuICAgICAgICAgICAgICAgIHNlbmQ6XCJzZW5kXCJcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGFuZ1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGluaXRMYW5ndWFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vTW9kYWxTaW5nSW5TaW5nVXAubW9kdWxlLnNjc3MnXHJcbmltcG9ydCAncmVhY3QtcGhvbmUtaW5wdXQtMi9saWIvbWF0ZXJpYWwuY3NzJ1xyXG5pbXBvcnQgUG9wVXBNZXNzYWdlIGZyb20gJy4uL3BvcFVwTWVzc2FnZS9wb3BVcE1lc3NhZ2UnXHJcbmltcG9ydCBTaW5nSW4gZnJvbSAnLi9zaW5nSW4vc2luZ0luJ1xyXG5pbXBvcnQgU2luZ1VwIGZyb20gJy4vc2luZ1VwL3NpbmdVcCdcclxuaW1wb3J0IFZlcmlmeUFjY291bnQgZnJvbSAnLi4vdmVyaWZ5QWNjb3VudC92ZXJpZnlBY2NvdW50J1xyXG5pbXBvcnQgQ2hhbmdlTGFuZ3VhZ2UgZnJvbSAnLi4vY2hhbmdlTGFuZ3VhZ2UvY2hhbmdlTGFuZ3VhZ2UnXHJcblxyXG5jb25zdCBNb2RhbFNpbmdJblNpbmdVcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2Usc2V0RXJyb3JNZXNzYWdlXT11c2VTdGF0ZSh7c3RhdGU6ZmFsc2UsdGV4dDpcIlwifSkvLyB3aGVuIHN0YXRlIHRydWUgc2hvdyAgcG9wIHVwIFxyXG4gIGNvbnN0IFtzaG93U2luZ0luX09yX1NIb3dTaW5nVXAsIHNldFNob3dTaW5nSW5fT3JfU0hvd1NpbmdVcF0gPSB1c2VTdGF0ZSh0cnVlKS8qY2hhbmdlIGJldHdlZW4gc2luZyBpbiBhbmQgc2luZyB1cCAqL1xyXG4gIGNvbnN0IFt2ZXJpZmllZEFjY291bnRNb2RhbCxzZXR2ZXJpZmllZEFjY291bnRNb2RhbF09dXNlU3RhdGUoZmFsc2UpLy93aGVuIHRyeWUgb3BlbiBtb2RhbCB0byBwdXQgdGhlIGNvZGVcclxuICBjb25zdCBbdXNlcklkLHNldFVzZXJJZF09dXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBmbnNldFNob3dTaW5nSW5fT3JfU0hvd1NpbmdVcD0oKT0+e1xyXG4gICAgc2V0U2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwKGU9PiFlKVxyXG4gIH1cclxuICBjb25zdCBjbG9zZU1vZGFsPSgpPT57XHJcbiAgICBwcm9wcy5vcGVuT3JjbG9zZU1vZGFsKClcclxuICB9XHJcbiAgY29uc3QgY2xvc2VQb3BVcD0oKT0+e1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKHtzdGF0ZTpmYWxzZSx0ZXh0OlwiXCJ9KVxyXG4gIH1cclxuICBjb25zdCBzZXRFcnJvck1lc3NhZ2Vmbj0oZSk9PntcclxuICAgIHNldEVycm9yTWVzc2FnZSh7Li4uZX0pXHJcbiAgfVxyXG4gIGNvbnN0IG9wZW5WZXJpZmllQWNjb3VudE1vZGFsZm49KHVzZXJpZCk9PntcclxuICAgIHNldFVzZXJJZCh1c2VyaWQpXHJcbiAgICBzZXR2ZXJpZmllZEFjY291bnRNb2RhbChlPT4hZSlcclxuICB9XHJcbiAgLyoqKnRlc3QgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRyYWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUud2F2ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgey8qc2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwJiY8aDEgY2xhc3NOYW1lPXtTdHlsZS5sb2dvfT5OT1paTEE8L2gxPiovfVxyXG57ICAgICAvKjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQ0MCAzMjBcIj5cclxuICAgICAgICA8cGF0aCBmaWxsPVwiIzE4NzZmM1wiIGZpbGwtb3BhY2l0eT1cIjFcIiBkPVwiTTAsMTI4TDQ4LDExNy4zQzk2LDEwNywxOTIsODUsMjg4LDExNy4zQzM4NCwxNDksNDgwLDIzNSw1NzYsMjYxLjNDNjcyLDI4OCw3NjgsMjU2LDg2NCwyMjkuM0M5NjAsMjAzLDEwNTYsMTgxLDExNTIsMTQ0QzEyNDgsMTA3LDEzNDQsNTMsMTM5MiwyNi43TDE0NDAsMEwxNDQwLDMyMEwxMzkyLDMyMEMxMzQ0LDMyMCwxMjQ4LDMyMCwxMTUyLDMyMEMxMDU2LDMyMCw5NjAsMzIwLDg2NCwzMjBDNzY4LDMyMCw2NzIsMzIwLDU3NiwzMjBDNDgwLDMyMCwzODQsMzIwLDI4OCwzMjBDMTkyLDMyMCw5NiwzMjAsNDgsMzIwTDAsMzIwWlwiPjwvcGF0aD5cclxuICA8L3N2Zz4qL31cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2Uuc3RhdGU9PXRydWUmJjxQb3BVcE1lc3NhZ2UgZm5jbG9zZT17Y2xvc2VQb3BVcH0gb3BlblBvcFVwPXtlcnJvck1lc3NhZ2V9PjwvUG9wVXBNZXNzYWdlPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYW5nZWxhbmd9PjxDaGFuZ2VMYW5ndWFnZT48L0NoYW5nZUxhbmd1YWdlPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgIHt2ZXJpZmllZEFjY291bnRNb2RhbCYmPFZlcmlmeUFjY291bnQgc2V0RXJyb3JNZXNzYWdlUHJvcHM9e3NldEVycm9yTWVzc2FnZWZufSB1c2VySWQ9e3VzZXJJZH0+PC9WZXJpZnlBY2NvdW50Pn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2xvc2VidG59IG9uQ2xpY2s9eygpPT5jbG9zZU1vZGFsKCl9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5mb3Jtc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8U2luZ0luIG9wZW5WZXJpZmllQWNjb3VudE1vZGFsPXtvcGVuVmVyaWZpZUFjY291bnRNb2RhbGZufSBzZXRFcnJvck1lc3NhZ2VQcm9wcz17c2V0RXJyb3JNZXNzYWdlZm59c2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwPXtzaG93U2luZ0luX09yX1NIb3dTaW5nVXB9IGZuc2hvd1NpbmdJbk9yU2luZ1VwPXtmbnNldFNob3dTaW5nSW5fT3JfU0hvd1NpbmdVcH0+PC9TaW5nSW4+XHJcbiAgICAgICAgICA8U2luZ1VwIG9wZW5WZXJpZmllQWNjb3VudE1vZGFsPXtvcGVuVmVyaWZpZUFjY291bnRNb2RhbGZufSBzZXRFcnJvck1lc3NhZ2VQcm9wcz17c2V0RXJyb3JNZXNzYWdlZm59c2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwPXtzaG93U2luZ0luX09yX1NIb3dTaW5nVXB9IGZuc2hvd1NpbmdJbk9yU2luZ1VwPXtmbnNldFNob3dTaW5nSW5fT3JfU0hvd1NpbmdVcH0+PC9TaW5nVXA+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTaW5nSW5TaW5nVXBcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9Nb2RhbFNpbmdJblNpbmdVcC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2xhbmd1YWdlQ29udGV4dCdcclxuaW1wb3J0IEFwaUlzTG9hZGluZ0NvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dC9hcGlJc0xvYWRpbmdDb250ZXh0J1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dJbiBmcm9tICcuLi8uLi9mYWNlYm9va0xvZ0luL2ZhY2Vib29rTG9nSW4nXHJcbmltcG9ydCB7TG9naW59IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IHNpbmdJbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZUNvbnRleHQoQXBpSXNMb2FkaW5nQ29udGV4dClcclxuICBjb25zdCBbbG9naW5TdGF0ZSxzZXRMb2dpblN0YXRlXT1SZWFjdC51c2VTdGF0ZSh7fSlcclxuXHJcbiAgICBjb25zdCBzaW5nSW49KCk9PntcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgTG9naW4obG9naW5TdGF0ZSkudGhlbihyZXM9PntcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN0YXRlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEVycm9yTWVzc2FnZVByb3BzKHtzdGF0ZTp0cnVlLHRleHQ6cmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIH1lbHNlIGlmKHJlcy5kYXRhLnZlcmlmaWVkPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHByb3BzLm9wZW5WZXJpZmllQWNjb3VudE1vZGFsKHJlcy5kYXRhLnVzZXJpZClcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZldGNoKFwiL2FwaS9zZXRUb2tlblwiLHttZXRob2Q6XCJwb3N0XCIsaGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sYm9keTpKU09OLnN0cmluZ2lmeSh7dG9rZW46cmVzLmRhdGEudG9rZW59KX0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZl90b2tlblwiLHJlcy5kYXRhLnJlZl90b2tlbilcclxuICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlPT57XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBwcm9wcy5zZXRFcnJvck1lc3NhZ2VQcm9wcyh7c3RhdGU6dHJ1ZSx0ZXh0OmUubWVzc2FnZX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZXRMb2dpbkRhdGE9KGUpPT57XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgICAgICAgICAgc2V0TG9naW5TdGF0ZShlID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmUsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgLy9vbktleVVwPXsoZSk9PmUudGFyZ2V0LnZhbHVlPWUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teXFxkXS8sJycpfSAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zaW5nSW59IHN0eWxlPXtwcm9wcy5zaG93U2luZ0luX09yX1NIb3dTaW5nVXAgPyB7IGxlZnQ6ICcwJScgfSA6IHsgbGVmdDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1N0eWxlLmZvcm19IG9uU3VibWl0PXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCk7fX0gIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5wYWdlSGVhZGVyfT48aDI+TG9nIGluIHRvIE5PWlpMQTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmRlc2NyaXB0aW9uSGVhZGVyfT48aDM+e2xhbmd1YWdlLmNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZX08L2gzPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiIHJlYWRPbmx5PXt0cnVlfSBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0vPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0ICAgb25DaGFuZ2U9eyhlKT0+c2V0TG9naW5EYXRhKGUpfSAgZGVmYXVsdFZhbHVlPXtcIlwifSAgIG5hbWU9e1wiaWRlbnRpdHlcIn0gIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dH0gcmVxdWlyZWQgLz48bGFiZWw+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5sYWJlbHNwYW59PntsYW5ndWFnZS50ZWxlcGhvbmVvcmVtYWlsfTwvc3Bhbj48L2xhYmVsPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0ICAgb25DaGFuZ2U9eyhlKT0+c2V0TG9naW5EYXRhKGUpfSAgZGVmYXVsdFZhbHVlPXtcIlwifSAgIG5hbWU9e1wicGFzc3dvcmRcIn0gIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17U3R5bGUuaW5wdXR9IHJlcXVpcmVkIC8+PGxhYmVsPjxzcGFuIGNsYXNzTmFtZT17U3R5bGUubGFiZWxzcGFufT57bGFuZ3VhZ2UucGFzc3dvcmR9PC9zcGFuPjwvbGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLmJ0bn0gb25DbGljaz17KCk9PnNpbmdJbigpfT57bGFuZ3VhZ2Uuc2lnbmlufTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZX0+e2xhbmd1YWdlLllvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvfSA8c3BhbiBjbGFzc05hbWU9e1N0eWxlLmNsaWNrSGVyZX0gb25DbGljaz17KCkgPT4gcHJvcHMuZm5zaG93U2luZ0luT3JTaW5nVXAoKX0+e2xhbmd1YWdlLnNpZ251cH08L3NwYW4+PGJyIC8+IDxMaW5rIGhyZWY9XCIvZm9yZ2V0UGFzc3dvcmRcIj48c3BhbiBjbGFzc05hbWU9e1N0eWxlLmZvcmdldFBhc3N3b3JkfT57bGFuZ3VhZ2UuRm9yZ290UGFzc3dvcmR9PC9zcGFuPjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgey8qPEZhY2Vib29rTG9nSW4+PC9GYWNlYm9va0xvZ0luPiovfVxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpbmdJblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCBQaG9uZUlucHV0IGZyb20gJ3JlYWN0LXBob25lLWlucHV0LTInXHJcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL01vZGFsU2luZ0luU2luZ1VwLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAncmVhY3QtcmFpbmJvdy1jb21wb25lbnRzJztcclxuXHJcblxyXG5jb25zdCBzaW5nVXAgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IFJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KVxyXG4gIGNvbnN0IFtjb25maXJtUmVnaXN0ZXJGb3JtLCBzZXRDb25maXJtUmVnaXN0ZXJGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKS8vZW5hYmxlIGFuZCBkaXNhYmxlIHNpbmcgdXAgYnV0dG9uIGlmIHRoZSBmcm9tIGlzIG5vdCBjb21wbGV0ZVxyXG4gIGNvbnN0IFtlcnJvckRhdGEsIHNldEVycm9yRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7IHVzZXJOYW1lOiB7IHN0YXRlOiAnZmFsc2UnLCBtc2c6ICcnIH0sIHBhc3N3b3JkOiB7IHN0YXRlOiAnZmFsc2UnLCBtc2c6ICcnIH0gLGVtYWlsOntzdGF0ZTonZmFsc2UnLG1zZzonJ319KS8vZXJyb3IgbWVzc2FnZXNcclxuICBjb25zdCBbcmVnaXN0ZXJTdGF0ZSwgc2V0cmVnaXN0ZXJTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7IHVzZXJOYW1lOiBcIlwiLCB0ZWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiLCBlbWFpbDogXCJcIiwgYmlydGhEYXk6IFwiMjAwMC0wMS0wMVQyMzowMDowMC4wMDBaXCIsIGRpYWxDb2RlOiBcIlwiIH0pLy91c2VyIHJlZ2lzdGVyIGRhdGFcclxuICBjb25zdCBbY2hhbmdlRW1haWxPclRlbGluaXQsIHNldENoYW5nZUVtYWlsT3JUZWxdID0gUmVhY3QudXNlU3RhdGUoXCJlbWFpbFwiKVxyXG4gIHZhciB1c2VyTmFtZSA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIHZhciBwYXNzd29yZCA9IFJlYWN0LnVzZVJlZigpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHVzZXJOYW1lLmN1cnJlbnQudmFsdWU9XCJcIlxyXG4gICAgICBwYXNzd29yZC5jdXJyZW50LnZhbHVlPVwiXCJcclxuICAgIH0sIDEwMDApOyBcclxuICB9LFtdKVxyXG4gIGNvbnN0IHNpbmdVcCA9ICgpID0+IHtcclxuICAgIGlmIChjaGFuZ2VFbWFpbE9yVGVsaW5pdCA9PSBcImVtYWlsXCIpIHtcclxuICAgICAgZGVsZXRlIHJlZ2lzdGVyU3RhdGVbXCJ0ZWxcIl1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSByZWdpc3RlclN0YXRlW1wiZW1haWxcIl1cclxuICAgIH1cclxuICAgIFJlZ2lzdGVyKHJlZ2lzdGVyU3RhdGUpLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYocmVzLmRhdGE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgXHJcbiAgICAgIH1lbHNlIGlmIChyZXMuZGF0YS5zdGF0ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgIHByb3BzLnNldEVycm9yTWVzc2FnZVByb3BzKHsgc3RhdGU6IHRydWUsIHRleHQ6IHJlcy5kYXRhLm1lc3NhZ2UgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9wcy5vcGVuVmVyaWZpZUFjY291bnRNb2RhbChyZXMuZGF0YS51c2VyaWQpXHJcbiAgICAgICAgcHJvcHMuZm5zaG93U2luZ0luT3JTaW5nVXAoKVxyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgcHJvcHMuc2V0RXJyb3JNZXNzYWdlUHJvcHMoeyBzdGF0ZTogdHJ1ZSwgdGV4dDogZS5tZXNzYWdlIH0pXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgfVxyXG4gIGNvbnN0IGZvcm1WYWxpZGF0aW9uID0gKGUpID0+IHtcclxuICAgIGxldCB0ZWw9XCJcIlxyXG4gICAgbGV0IGVtYWlsPVwiXCJcclxuICAgIGlmKGUudGFyZ2V0LmZvcm0hPW51bGwpe1xyXG4gICAgICBsZXQgdXNlck5hbWUgPSBlLnRhcmdldC5mb3JtWzBdLnZhbHVlIHx8IFwiXCI7XHJcbiAgICAgIGlmKGUudGFyZ2V0LmZvcm1bMV0ubmFtZT09XCJwaG9uZVwiKXtcclxuICAgICAgICAgdGVsPWUudGFyZ2V0LmZvcm1bMV0udmFsdWU7XHJcbiAgICAgICAgIGVtYWlsPVwiXCJcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGVsPVwiXCI7XHJcbiAgICAgICAgZW1haWw9ZS50YXJnZXQuZm9ybVsxXS52YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBwYXNzd29yZCA9IGUudGFyZ2V0LmZvcm1bMl0udmFsdWUgfHwgXCJcIlxyXG4gICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZS50YXJnZXQuZm9ybVszXS52YWx1ZSB8fCBcIlwiXHJcbiAgICAgIGxldCBiaXJkaERheSA9IGUudGFyZ2V0LmZvcm1bNF0udmFsdWUgfHwgXCJcIlxyXG4gICAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSBcclxuICAgIHtcclxuICAgICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG4gICAgfVxyXG4gICAgICBpZihlbWFpbC5sZW5ndGg+MCl7XHJcbiAgICAgICAgaWYodmFsaWRhdGVFbWFpbChlbWFpbC50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgICBlLnRhcmdldC5mb3JtWzFdLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMjIsIDI0LCAzNSwgMC4xMikgXCJcclxuICAgICAgICAgIHNldEVycm9yRGF0YShlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZSwgZW1haWw6IHsgc3RhdGU6ICdmYWxzZScsIG1zZzogJycgfSB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgZS50YXJnZXQuZm9ybVsxXS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWQgXCJcclxuXHJcbiAgICAgICAgICBzZXRFcnJvckRhdGEoZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmUsIGVtYWlsOiB7IHN0YXRlOiAndHJ1ZScsIG1zZzogJ0VudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycgfSB9XHJcbiAgICAgICAgICB9KSAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbmZpcm1QYXNzd29yZC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlLnRhcmdldC5mb3JtWzNdLmNsYXNzTGlzdFsxXSlbMF0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZS50YXJnZXQuZm9ybVszXS5jbGFzc0xpc3RbMV0pWzFdLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICBzZXRFcnJvckRhdGEoZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmUsIHBhc3N3b3JkOiB7IHN0YXRlOiAndHJ1ZScsIG1zZzogJ3RoZSAyIHBhc3N3b3JkIGFyZSBub3QgdGhlIHNhbWUnIH0gfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JEYXRhKGUgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLmUsIHBhc3N3b3JkOiB7IHN0YXRlOiAndHJ1ZScsIG1zZzogJ3lvdXIgYnJvd3NlciBtdXN0IGNvbnRhaW4gbW9yZSB0aGFuIDggbGV0dGVycycgfSB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvckRhdGEoZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZSwgcGFzc3dvcmQ6IHsgc3RhdGU6ICdmYWxzZScsIG1zZzogJ3lvdXIgYnJvd3NlciBtdXN0IGNvbnRhaW4gbW9yZSB0aGFuIDggbGV0dGVycycgfSB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZS50YXJnZXQuZm9ybVszXS5jbGFzc0xpc3RbMV0pWzBdLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMjIsIDI0LCAzNSwgMC4xMilcIlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUudGFyZ2V0LmZvcm1bM10uY2xhc3NMaXN0WzFdKVsxXS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZ2JhKDIyLCAyNCwgMzUsIDAuMTIpXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlLnRhcmdldC5mb3JtWzNdLmNsYXNzTGlzdFsxXSlbMF0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiYSgyMiwgMjQsIDM1LCAwLjEyKVwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlLnRhcmdldC5mb3JtWzNdLmNsYXNzTGlzdFsxXSlbMV0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiYSgyMiwgMjQsIDM1LCAwLjEyKVwiXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVzZXJOYW1lLmxlbmd0aCA+IDAgJiYgcGFzc3dvcmQubGVuZ3RoID4gMCAmJiBjb25maXJtUGFzc3dvcmQubGVuZ3RoID4gMCAgJiYgKHZhbGlkYXRlRW1haWwoZW1haWwpIHx8IHRlbC5sZW5ndGggPiA2KSkge1xyXG4gICAgICAgIGlmIChwYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc2V0Q29uZmlybVJlZ2lzdGVyRm9ybSh0cnVlKVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0Q29uZmlybVJlZ2lzdGVyRm9ybShmYWxzZSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDb25maXJtUmVnaXN0ZXJGb3JtKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKipTZXQgUGhvbmUgTnVtYmVyKioqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlclJlZ2lzdGVyUGhvbmUgPSAoZGF0YSwgY291bnRyeSkgPT4ge1xyXG4gICAgc2V0cmVnaXN0ZXJTdGF0ZShlID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uZSwgXCJkaWFsQ29kZVwiOiBjb3VudHJ5LmRpYWxDb2RlLCAndGVsJzogZGF0YSB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqU2V0IFVzZXIgTmFtZSBhbmQgUGFzc3dvcmQqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gIGNvbnN0IHVzZXJOYW1lX1Bhc3N3b3JkX0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgIHNldHJlZ2lzdGVyU3RhdGUoZSA9PiB7IHJldHVybiB7IC4uLmUsIFtuYW1lXTogdmFsdWUgfSB9KVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgY29uc3QgY2hhbmdlRW1haWxPclRlbCA9ICgpID0+IHtcclxuXHJcbiAgICBzZXRDaGFuZ2VFbWFpbE9yVGVsKGUgPT4ge1xyXG4gICAgICBpZihlID09IFwiZW1haWxcIil7XHJcbiAgICAgICAgc2V0cmVnaXN0ZXJTdGF0ZShlPT57cmV0dXJuIHsuLi5lLGVtYWlsOlwiXCJ9fSlcclxuICAgICAgICBzZXRDb25maXJtUmVnaXN0ZXJGb3JtKGZhbHNlKVxyXG5cclxuICAgICAgICByZXR1cm4gXCJ0ZWxcIlxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBzZXRyZWdpc3RlclN0YXRlKGU9PntyZXR1cm4gey4uLmUsdGVsOlwiXCJ9fSlcclxuICAgICAgICBzZXRDb25maXJtUmVnaXN0ZXJGb3JtKGZhbHNlKVxyXG5cclxuICAgICAgICByZXR1cm4gXCJlbWFpbFwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2luZ1VwfSBzdHlsZT17cHJvcHMuc2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwID8geyBsZWZ0OiAnMCUnIH0gOiB7IGxlZnQ6ICctMTAwJScgfX0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17U3R5bGUuZm9ybX0gb25TdWJtaXQ9e2UgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH19IG9uQ2hhbmdlPXsoZSkgPT4geyBmb3JtVmFsaWRhdGlvbihlKSB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnBhZ2VIZWFkZXJ9PjxoMj5TaW5nIHVwIEZvciBOT1paTEE8L2gyPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZGVzY3JpcHRpb25IZWFkZXJ9PjxoMz57bGFuZ3VhZ2UuY3JlYXRlYXByb2ZpbGVmb2xsb3dvdGhlcmFjY291bnRzdGFsa2Fib3V0eW91cm93bmV4cGVyaWVuY2VhbmRtb3JlfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxpbnB1dCByZWY9e3VzZXJOYW1lfSBuYW1lPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17U3R5bGUuaW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gdXNlck5hbWVfUGFzc3dvcmRfSGFuZGxlcihlKX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPGxhYmVsPjxzcGFuIGNsYXNzTmFtZT17U3R5bGUubGFiZWxzcGFufT57bGFuZ3VhZ2UudXNlcm5hbWV9PC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2Vycm9yRGF0YS51c2VyTmFtZS5zdGF0ZSA9PSBcInRydWVcIiAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZXJyb3JNZXNzYWdlfT48cD57ZXJyb3JEYXRhLnVzZXJOYW1lLm1zZ308L3A+PC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudGVsT3JFbWFpbH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sYWJlbEVtYWlsT3JQYXNzd29yZH0gb25DbGljaz17KCkgPT4gY2hhbmdlRW1haWxPclRlbCgpfT5cclxuICAgICAgICAgICAgICA8cD5jaGFuZ2UgdG8ge2NoYW5nZUVtYWlsT3JUZWxpbml0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+e2NoYW5nZUVtYWlsT3JUZWxpbml0ID09IFwidGVsXCIgPyA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudGVsfT48UGhvbmVJbnB1dCBuYW1lPXtcInRlbFwifSBzcGVjaWFsTGFiZWw9e2xhbmd1YWdlLnBob25lfSBjb3VudHJ5PXsndG4nfSAgIGlucHV0UHJvcHM9e3sgbmFtZTogJ3Bob25lJyxyZXF1aXJlZDogdHJ1ZSxhdXRvRm9jdXM6IHRydWV9fSB2YWx1ZT17cmVnaXN0ZXJTdGF0ZS50ZWx9IG9uQ2hhbmdlPXsoZSwgY291bnRyeSkgPT4gb25DaGFuZ2VIYW5kbGVyUmVnaXN0ZXJQaG9uZShlLCBjb3VudHJ5KX0gLz48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZW1haWx9PjxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4geyB1c2VyTmFtZV9QYXNzd29yZF9IYW5kbGVyKGUpIH19IGNsYXNzTmFtZT17YCR7U3R5bGUuaW5wdXR9IGB9IHJlcXVpcmVkIC8+PGxhYmVsPjxzcGFuIGNsYXNzTmFtZT17U3R5bGUubGFiZWxzcGFufT57bGFuZ3VhZ2UuZW1haWx9PC9zcGFuPjwvbGFiZWw+PC9kaXY+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2Vycm9yRGF0YS5lbWFpbC5zdGF0ZSA9PSBcInRydWVcIiAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZXJyb3JNZXNzYWdlfT48cD57ZXJyb3JEYXRhLmVtYWlsLm1zZ308L3A+PC9kaXY+fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGlucHV0IHJlZj17cGFzc3dvcmR9IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4geyB1c2VyTmFtZV9QYXNzd29yZF9IYW5kbGVyKGUpIH19IGNsYXNzTmFtZT17YCR7U3R5bGUuQ29uZmlybVBhc3N3b3JkfSAke1N0eWxlLmlucHV0fSBgfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5sYWJlbHNwYW59PntsYW5ndWFnZS5wYXNzd29yZH08L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZXJyb3JEYXRhLnBhc3N3b3JkLnN0YXRlID09IFwidHJ1ZVwiICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lcnJvck1lc3NhZ2V9PjxwPntlcnJvckRhdGEucGFzc3dvcmQubXNnfTwvcD48L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e2Ake1N0eWxlLmlucHV0fSAke1N0eWxlLkNvbmZpcm1QYXNzd29yZH1gfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5sYWJlbHNwYW59PntsYW5ndWFnZS5jb25maXJtcGFzc3dvcmR9PC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtyZWdpc3RlclN0YXRlLmJpcnRoRGF5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0cmVnaXN0ZXJTdGF0ZShlID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5lLCBcImJpcnRoRGF5XCI6IHZhbHVlIH1cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiYmlydGggRGF5XCJcclxuICAgICAgICAgICAgZm9ybWF0U3R5bGU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIGxvY2FsZT17bGFuZ3VhZ2UuYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Y29uZmlybVJlZ2lzdGVyRm9ybSA9PSB0cnVlICYmIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5idG59IG9uQ2xpY2s9eygpID0+IHNpbmdVcCgpfT57bGFuZ3VhZ2Uuc2lnbnVwfTwvYnV0dG9uPn1cclxuXHJcbiAgICAgICAge2NvbmZpcm1SZWdpc3RlckZvcm0gPT0gZmFsc2UgJiYgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLmJ0bn0gZGlzYWJsZWQgc3R5bGU9e3sgb3BhY2l0eTogMC4yLCBjdXJzb3I6ICdkZWZhdWx0JyB9fT57bGFuZ3VhZ2Uuc2lnbnVwfTwvYnV0dG9uPn1cclxuICAgICAgICA8cCBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2V9PntsYW5ndWFnZS5BbHJlYWR5SGF2ZUFjY291bnR9ICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlLmNsaWNrSGVyZX0gb25DbGljaz17KCkgPT4gcHJvcHMuZm5zaG93U2luZ0luT3JTaW5nVXAoKX0+e2xhbmd1YWdlLnNpZ25pbn08L3NwYW4+PC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpbmdVcFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTW9kYWxTaW5nSW5TaW5nVXAgZnJvbSAnLi4vbW9kYWxTaW5nSW5TaW5nVXAvTW9kYWxTaW5nSW5TaW5nVXAnXHJcbmltcG9ydCBQb3JmaWxlTWVudSBmcm9tICcuLi9wcm9maWxlTWVudS9wcm9maWxlTWVudSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWFyY2hVc2VyL3NlYXJjaFVzZXInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbidcclxuaW1wb3J0IHtnZXRVbnJlYWRVc2Vyc0NoYXRzTnVtYmVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGF0J1xyXG5pbXBvcnQgc29ja2V0Q29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCB7R2V0T3RoZXJVc2Vyc0RhdGF9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXInXHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbW9kYWxTaW5nSW5TaW5nVXAsIHNldE1vZGFsU2luZ0luU2luZ1VwXSA9IHVzZVN0YXRlKGZhbHNlKS8vb3BlbiBtb2RhbFxyXG4gICAgY29uc3QgW2hlaWdodEFuZFdpZHRoT2ZXaW5kb3csIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3ddID0gUmVhY3QudXNlU3RhdGUoeyB3aWR0aDogJycsIGhlaWdodDogJycgfSkvL3Jlc3BvbnNpdmUgaGFuZGxlclxyXG4gICAgY29uc3QgW29wZW5NZW51UHJvZmlsZVN0YXRlLCBzZXRPcGVuTWVudVByb2ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpLy9vbiBob3ZlciBwcm9maWxlIHBpYyBvcGVuIG1lbnVcclxuICAgIGNvbnN0IFtkaXN5cGxheVNlYXJjaCxzZXREaXNwbGF5U2VhcmNoXT1SZWFjdC51c2VTdGF0ZSh7c3RhdGU6ZmFsc2UsdXNlck5hbWU6XCJcIn0pXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl09IFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbbnVtYmVyT2ZDaGF0c05vdFJlYWQsc2V0TnVtYmVyT2ZDaGF0c05vdFJlYWRdPVJlYWN0LnVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc29ja2V0LHNldFNvY2tldF09UmVhY3QudXNlQ29udGV4dChzb2NrZXRDb250ZXh0KVxyXG4gICAgY29uc3QgW3BvcFVwVXNlcixzZXRQb3BVcFVzZXJdPVJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcG9wVXBOb3RpZixzZXRwb3BVcE5vdGlmXT1SZWFjdC51c2VTdGF0ZSgoKT0+MClcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBhc3luYyAgZnVuY3Rpb24gIGNoYXRIYW5kbGVyKGRhdGEpe1xyXG4gICAgICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIuL21zZ1NvdW5kLm1wM1wiKVxyXG4gICAgICAgICAgICBhdWRpby5wbGF5KClcclxuICAgICAgICAgICAgaWYocm91dGVyLnBhdGhuYW1lIT1cIi9jaGF0XCIpe1xyXG4gICAgICAgICAgICAgICAgR2V0T3RoZXJVc2Vyc0RhdGEoZGF0YS5zZW5kZXJJZCx0b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3BVcFVzZXIoey4uLnJlc3VsdC5kYXRhLmRhdGFbMF19KVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvcilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gIG5vdGlmSGFuZGxlcihkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YS5ub3RpZj09MSl7XHJcbiAgICAgICAgICAgICAgICBzZXRwb3BVcE5vdGlmKGU9PmUrMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgIHNvY2tldC5vbihcImdldE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLGNoYXRIYW5kbGVyKVxyXG4gICAgICAgIHNvY2tldC5vbihcImdldE5vdGlmaWNhdGlvbkZyb21Vc2VyVG9Vc2VyXCIsbm90aWZIYW5kbGVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYoc29ja2V0IT11bmRlZmluZWQgJiYgc29ja2V0IT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE1lc3NhZ2VGcm9tVXNlclRvVXNlcicsIGNoYXRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE5vdGlmaWNhdGlvbkZyb21Vc2VyVG9Vc2VyJywgbm90aWZIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICAgICAgaWYodG9rZW4hPXVuZGVmaW5lZCAmJiB0b2tlbiE9bnVsbCAmJiB0b2tlbiE9ZmFsc2Upe1xyXG4gICAgICAgICAgICBzZXRIZWlnaHRBbmRXaWR0aE9mV2luZG93KHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KSBcclxuICAgICAgICAgICAgZ2V0VW5yZWFkVXNlcnNDaGF0c051bWJlcih7fSx0b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBzZXROdW1iZXJPZkNoYXRzTm90UmVhZChkYXRhLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBbb3Blbk9yQ2xvc2VOb3RpZixzZXRPcGVuT3JDbG9zZU5vdGlmXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IG9wZW5NZW51UHJvZmlsZSA9ICgpID0+IHsgc2V0T3Blbk1lbnVQcm9maWxlKHRydWUpIH1cclxuICAgIGNvbnN0IGNsb3NlTWVudVByb2ZpbGUgPSAoKSA9PiB7IHNldE9wZW5NZW51UHJvZmlsZShmYWxzZSkgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5NZW51UHJvZmlsZW9uQ2xpY2sgPSAoKSA9PiB7IHNldE9wZW5NZW51UHJvZmlsZShlID0+ICFlKSB9XHJcbiAgICBcclxuICAgIGNvbnN0IE9wZW5zZWFyY2hVc2Vycz0oZSk9PntcclxuICAgICAgICBzZXREaXNwbGF5U2VhcmNoKHtzdGF0ZTp0cnVlLHVzZXJOYW1lOlwiXCJ9KVxyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBjb25zdCBTZWFyY2hVc2VyRm49KGUpPT57XHJcbiAgICAgICAgc2V0RGlzcGxheVNlYXJjaCh7c3RhdGU6dHJ1ZSx1c2VyTmFtZTplLnRhcmdldC52YWx1ZX0pXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xvc2VTZWFyY2hVc2VyPShlKT0+e1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXREaXNwbGF5U2VhcmNoKHtzdGF0ZTpmYWxzZSx1c2VyTmFtZTpcIlwifSlcclxuXHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9wZW5PckNsb3NlTm90aWZpY2F0aW9ucz0oKT0+e1xyXG4gICAgICAgIHNldE9wZW5PckNsb3NlTm90aWYoZT0+IWUpXHJcbiAgICB9XHJcbiAgICBpZiAoaGVpZ2h0QW5kV2lkdGhPZldpbmRvdy53aWR0aCA+IGhlaWdodEFuZFdpZHRoT2ZXaW5kb3cuaGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17U3R5bGUubmF2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Mb2dvfT48aDE+U1BBS1NJPC9oMT48L2Rpdj48L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5TZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZmxleEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uQmx1cj17KCk9PmNsb3NlU2VhcmNoVXNlcigpfSBvbkZvY3VzPXsoZSk9Pk9wZW5zZWFyY2hVc2VycyhlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3lwbGF5U2VhcmNoLnN0YXRlJiY8U2VhcmNoVXNlciB0b2tlbj17dG9rZW59IHNlYXJjaFVzZXJOYW1lPXtkaXN5cGxheVNlYXJjaC51c2VyTmFtZX0+PC9TZWFyY2hVc2VyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWNjb3VudHNcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiAgb25DaGFuZ2U9eyhlKT0+U2VhcmNoVXNlckZuKGUpfSA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaEltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyOCAzOFwiIGZpbGw9XCIjMTg3NmYzXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNy42MTkyIDMyLjMxNTZMMjIuMTY2NSAyNS4wMzc4QzIxLjkyMDQgMjQuNzA5NCAyMS41ODY3IDI0LjUyNjkgMjEuMjM2NyAyNC41MjY5SDIwLjM0NTJDMjEuODU0NyAyMS45NTAxIDIyLjc1MTcgMTguNzA5IDIyLjc1MTcgMTUuMTgzM0MyMi43NTE3IDYuNzk1OTkgMTcuNjU5OSAwIDExLjM3NTggMEM1LjA5MTc4IDAgMCA2Ljc5NTk5IDAgMTUuMTgzM0MwIDIzLjU3MDYgNS4wOTE3OCAzMC4zNjY2IDExLjM3NTggMzAuMzY2NkMxNC4wMTc0IDMwLjM2NjYgMTYuNDQ1NyAyOS4xNjk1IDE4LjM3NjMgMjcuMTU0N1YyOC4zNDQ2QzE4LjM3NjMgMjguODExOCAxOC41MTMxIDI5LjI1NzEgMTguNzU5MiAyOS41ODU1TDI0LjIxMTkgMzYuODYzM0MyNC43MjYgMzcuNTQ5NSAyNS41NTczIDM3LjU0OTUgMjYuMDY2IDM2Ljg2MzNMMjcuNjEzNyAzNC43OTc1QzI4LjEyNzggMzQuMTExMyAyOC4xMjc4IDMzLjAwMTggMjcuNjE5MiAzMi4zMTU2Wk0xMS4zNzU4IDI0LjUyNjlDNy41MDkxNCAyNC41MjY5IDQuMzc1MzIgMjAuMzUxNSA0LjM3NTMyIDE1LjE4MzNDNC4zNzUzMiAxMC4wMjI0IDcuNTAzNjcgNS44Mzk3MyAxMS4zNzU4IDUuODM5NzNDMTUuMjQyNSA1LjgzOTczIDE4LjM3NjMgMTAuMDE1MSAxOC4zNzYzIDE1LjE4MzNDMTguMzc2MyAyMC4zNDQyIDE1LjI0OCAyNC41MjY5IDExLjM3NTggMjQuNTI2OVpcIiBmaWxsPVwiI2IwYjBiNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9rZW4gJiYgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmF1dGhlbnRpY2F0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0IHBvcFVwVXNlcj17cG9wVXBVc2VyfSBudW1iZXJPZkNoYXRzTm90UmVhZD17bnVtYmVyT2ZDaGF0c05vdFJlYWR9PjwvQ2hhdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ub3RpZmljYXRpb259IG9uQ2xpY2s9eygpPT5vcGVuT3JDbG9zZU5vdGlmaWNhdGlvbnMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3Blbk9yQ2xvc2VOb3RpZiYmPE5vdGlmaWNhdGlvbiB0b2tlbj17dG9rZW59PjwvTm90aWZpY2F0aW9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5udW1iZXJPZk5vdGlmaWNhdGlvbk5vdFJlYWRsb2NhbH0+PHNwYW4+e3BvcFVwTm90aWZ9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCIgZmlsbD1cIiMxODc2ZjNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00My43NSAwSDYuMjVDMi44MDI3MyAwIDAgMi44MDI3MyAwIDYuMjVWMzQuMzc1QzAgMzcuODIyMyAyLjgwMjczIDQwLjYyNSA2LjI1IDQwLjYyNUgxNS42MjVWNDguODI4MUMxNS42MjUgNDkuNTIxNSAxNi4xOTE0IDUwIDE2Ljc5NjkgNTBDMTcuMDMxMiA1MCAxNy4yNzU0IDQ5LjkzMTYgMTcuNDkwMiA0OS43NjU2TDI5LjY4NzUgNDAuNjI1SDQzLjc1QzQ3LjE5NzMgNDAuNjI1IDUwIDM3LjgyMjMgNTAgMzQuMzc1VjYuMjVDNTAgMi44MDI3MyA0Ny4xOTczIDAgNDMuNzUgMFpNNDUuMzEyNSAzNC4zNzVDNDUuMzEyNSAzNS4yMzQ0IDQ0LjYwOTQgMzUuOTM3NSA0My43NSAzNS45Mzc1SDI4LjEyNUwyNi44NzUgMzYuODc1TDIwLjMxMjUgNDEuNzk2OVYzNS45Mzc1SDYuMjVDNS4zOTA2MiAzNS45Mzc1IDQuNjg3NSAzNS4yMzQ0IDQuNjg3NSAzNC4zNzVWNi4yNUM0LjY4NzUgNS4zOTA2MiA1LjM5MDYyIDQuNjg3NSA2LjI1IDQuNjg3NUg0My43NUM0NC42MDk0IDQuNjg3NSA0NS4zMTI1IDUuMzkwNjIgNDUuMzEyNSA2LjI1VjM0LjM3NVpcIiBmaWxsPVwiIzE4NzZmM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUucHJvZmlsZX0gb25DbGljaz17KCkgPT4gb3Blbk1lbnVQcm9maWxlb25DbGljaygpfSBvbk1vdXNlTGVhdmU9eygpID0+IGNsb3NlTWVudVByb2ZpbGUoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiBvcGVuTWVudVByb2ZpbGUoKX0+e3VzZXIgIT0gbnVsbCAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubmF2QmFySW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPXt1c2VyLmN1cnJlbnRJbWFnZVVybCAgfHwgXCIvYXZhdGFyLnBuZ1wifSAvPjwvZGl2Pn17b3Blbk1lbnVQcm9maWxlU3RhdGUgJiYgPFBvcmZpbGVNZW51PjwvUG9yZmlsZU1lbnU+fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7IXRva2VuICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Ob25hdXRoZW50aWNhdGVkfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWduaW5cIn0+PGJ1dHRvbiA+PHA+TG9nIEluPC9wPjwvYnV0dG9uPjwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZVxyXG4gICAgICAgIC8qbW9iaWxlICovXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17U3R5bGUubmF2fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmZsZXhJdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvbkJsdXI9eygpPT5jbG9zZVNlYXJjaFVzZXIoKX0gb25Gb2N1cz17KGUpPT5PcGVuc2VhcmNoVXNlcnMoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXN5cGxheVNlYXJjaC5zdGF0ZSYmPFNlYXJjaFVzZXIgdG9rZW49e3Rva2VufSBzZWFyY2hVc2VyTmFtZT17ZGlzeXBsYXlTZWFyY2gudXNlck5hbWV9PjwvU2VhcmNoVXNlcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFjY291bnRzXCIgIG9uQ2hhbmdlPXsoZSk9PlNlYXJjaFVzZXJGbihlKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaEltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyOCAzOFwiIGZpbGw9XCIjMTg3NmYzXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNy42MTkyIDMyLjMxNTZMMjIuMTY2NSAyNS4wMzc4QzIxLjkyMDQgMjQuNzA5NCAyMS41ODY3IDI0LjUyNjkgMjEuMjM2NyAyNC41MjY5SDIwLjM0NTJDMjEuODU0NyAyMS45NTAxIDIyLjc1MTcgMTguNzA5IDIyLjc1MTcgMTUuMTgzM0MyMi43NTE3IDYuNzk1OTkgMTcuNjU5OSAwIDExLjM3NTggMEM1LjA5MTc4IDAgMCA2Ljc5NTk5IDAgMTUuMTgzM0MwIDIzLjU3MDYgNS4wOTE3OCAzMC4zNjY2IDExLjM3NTggMzAuMzY2NkMxNC4wMTc0IDMwLjM2NjYgMTYuNDQ1NyAyOS4xNjk1IDE4LjM3NjMgMjcuMTU0N1YyOC4zNDQ2QzE4LjM3NjMgMjguODExOCAxOC41MTMxIDI5LjI1NzEgMTguNzU5MiAyOS41ODU1TDI0LjIxMTkgMzYuODYzM0MyNC43MjYgMzcuNTQ5NSAyNS41NTczIDM3LjU0OTUgMjYuMDY2IDM2Ljg2MzNMMjcuNjEzNyAzNC43OTc1QzI4LjEyNzggMzQuMTExMyAyOC4xMjc4IDMzLjAwMTggMjcuNjE5MiAzMi4zMTU2Wk0xMS4zNzU4IDI0LjUyNjlDNy41MDkxNCAyNC41MjY5IDQuMzc1MzIgMjAuMzUxNSA0LjM3NTMyIDE1LjE4MzNDNC4zNzUzMiAxMC4wMjI0IDcuNTAzNjcgNS44Mzk3MyAxMS4zNzU4IDUuODM5NzNDMTUuMjQyNSA1LjgzOTczIDE4LjM3NjMgMTAuMDE1MSAxOC4zNzYzIDE1LjE4MzNDMTguMzc2MyAyMC4zNDQyIDE1LjI0OCAyNC41MjY5IDExLjM3NTggMjQuNTI2OVpcIiBmaWxsPVwiIzE4NzZmM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9rZW4gJiYgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmF1dGhlbnRpY2F0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90aWZpY2F0aW9ufSBvbkNsaWNrPXsoKT0+b3Blbk9yQ2xvc2VOb3RpZmljYXRpb25zKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3Blbk9yQ2xvc2VOb3RpZiYmPE5vdGlmaWNhdGlvbiB0b2tlbj17dG9rZW59PjwvTm90aWZpY2F0aW9uPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiBmaWxsPVwiIzE4NzZmM1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQzLjc1IDBINi4yNUMyLjgwMjczIDAgMCAyLjgwMjczIDAgNi4yNVYzNC4zNzVDMCAzNy44MjIzIDIuODAyNzMgNDAuNjI1IDYuMjUgNDAuNjI1SDE1LjYyNVY0OC44MjgxQzE1LjYyNSA0OS41MjE1IDE2LjE5MTQgNTAgMTYuNzk2OSA1MEMxNy4wMzEyIDUwIDE3LjI3NTQgNDkuOTMxNiAxNy40OTAyIDQ5Ljc2NTZMMjkuNjg3NSA0MC42MjVINDMuNzVDNDcuMTk3MyA0MC42MjUgNTAgMzcuODIyMyA1MCAzNC4zNzVWNi4yNUM1MCAyLjgwMjczIDQ3LjE5NzMgMCA0My43NSAwWk00NS4zMTI1IDM0LjM3NUM0NS4zMTI1IDM1LjIzNDQgNDQuNjA5NCAzNS45Mzc1IDQzLjc1IDM1LjkzNzVIMjguMTI1TDI2Ljg3NSAzNi44NzVMMjAuMzEyNSA0MS43OTY5VjM1LjkzNzVINi4yNUM1LjM5MDYyIDM1LjkzNzUgNC42ODc1IDM1LjIzNDQgNC42ODc1IDM0LjM3NVY2LjI1QzQuNjg3NSA1LjM5MDYyIDUuMzkwNjIgNC42ODc1IDYuMjUgNC42ODc1SDQzLjc1QzQ0LjYwOTQgNC42ODc1IDQ1LjMxMjUgNS4zOTA2MiA0NS4zMTI1IDYuMjVWMzQuMzc1WlwiIGZpbGw9XCIjMTg3NmYzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUucHJvZmlsZX0gb25DbGljaz17KCkgPT4gb3Blbk1lbnVQcm9maWxlb25DbGljaygpfSBvbk1vdXNlTGVhdmU9eygpID0+IGNsb3NlTWVudVByb2ZpbGUoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiBvcGVuTWVudVByb2ZpbGUoKX0+e29wZW5NZW51UHJvZmlsZVN0YXRlICYmIDxQb3JmaWxlTWVudT48L1BvcmZpbGVNZW51Pn0ge3VzZXIgIT0gbnVsbCAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubmF2QmFySW1hZ2VDb250YWluZXJ9PjxpbWcgc3JjPXt1c2VyLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7IXRva2VuICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Ob25hdXRoZW50aWNhdGVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2lnbmluXCJ9PjxidXR0b24gPjxwPkxvZyBJbjwvcD48L2J1dHRvbj48L0xpbms+IFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXHJcblxyXG5cclxuY29uc3QgQ2hhdD0ocHJvcHMpPT57XHJcbiAgICBjb25zdCBbbnVtYmVyT2ZDaGF0c05vdFJlYWRsb2NhbCxzZXROdW1iZXJPZkNoYXRzTm90UmVhZF09UmVhY3QudXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt1c2VyV2hvU2VudFlvdUltYWdlLHNldFVzZXJXaG9TZW50WW91SW1hZ2VdPVJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXROdW1iZXJPZkNoYXRzTm90UmVhZChwcm9wcy5udW1iZXJPZkNoYXRzTm90UmVhZClcclxuICAgIH0sW3Byb3BzLm51bWJlck9mQ2hhdHNOb3RSZWFkXSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHByb3BzLnBvcFVwVXNlciE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyV2hvU2VudFlvdUltYWdlKG51bGwpXHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICBzZXRVc2VyV2hvU2VudFlvdUltYWdlKHByb3BzLnBvcFVwVXNlci5jdXJyZW50SW1hZ2VVcmwpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9LFtwcm9wc10pXHJcbiAgICByZXR1cm4oPExpbmsgaHJlZj1cIi9jaGF0XCI+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXRTdmd9PlxyXG4gICAgICAgIHt1c2VyV2hvU2VudFlvdUltYWdlIT1udWxsJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2hvd1RlbUltYWdlT2ZVc2VyV2hvU2VudFlvdU1lc3NhZ2V9PjxpbWcgc3JjPXt1c2VyV2hvU2VudFlvdUltYWdlfS8+PC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5udW1iZXJPZkNoYXRzTm90UmVhZGxvY2FsfT48c3Bhbj57bnVtYmVyT2ZDaGF0c05vdFJlYWRsb2NhbH08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNDc5LjA1OCA0NzkuMDU4XCIgZmlsbD1cIiMxODc2ZjNcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDQ3OS4wNTggNDc5LjA1OFwiIHdpZHRoPVwiNTEyXCI+PHBhdGggZD1cIm00MzQuMTQ2IDU5Ljg4MmgtMzg5LjIzNGMtMjQuNzY2IDAtNDQuOTEyIDIwLjE0Ni00NC45MTIgNDQuOTEydjI2OS40N2MwIDI0Ljc2NiAyMC4xNDYgNDQuOTEyIDQ0LjkxMiA0NC45MTJoMzg5LjIzNGMyNC43NjYgMCA0NC45MTItMjAuMTQ2IDQ0LjkxMi00NC45MTJ2LTI2OS40N2MwLTI0Ljc2Ni0yMC4xNDYtNDQuOTEyLTQ0LjkxMi00NC45MTJ6bTAgMjkuOTQxYzIuMDM0IDAgMy45NjkuNDIyIDUuNzM4IDEuMTU5bC0yMDAuMzU1IDE3My42NDktMjAwLjM1Ni0xNzMuNjQ5YzEuNzY5LS43MzYgMy43MDQtMS4xNTkgNS43MzgtMS4xNTl6bTAgMjk5LjQxMWgtMzg5LjIzNGMtOC4yNiAwLTE0Ljk3MS02LjcxLTE0Ljk3MS0xNC45NzF2LTI1MS42NDhsMTk5Ljc3OCAxNzMuMTQxYzIuODIyIDIuNDQxIDYuMzE2IDMuNjU1IDkuODEgMy42NTVzNi45ODgtMS4yMTMgOS44MS0zLjY1NWwxOTkuNzc4LTE3My4xNDF2MjUxLjY0OWMtLjAwMSA4LjI2LTYuNzExIDE0Ljk3LTE0Ljk3MSAxNC45N3pcIi8+PC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTmF2QmFyX2NvbnRhaW5lcl9fUHFESk1cIixcblx0XCJuYXZcIjogXCJOYXZCYXJfbmF2X196RXpxMlwiLFxuXHRcIkxvZ29cIjogXCJOYXZCYXJfTG9nb19fM1RDd3hcIixcblx0XCJTZWFyY2hcIjogXCJOYXZCYXJfU2VhcmNoX18yRHRURFwiLFxuXHRcImZsZXhJdGVtc1wiOiBcIk5hdkJhcl9mbGV4SXRlbXNfXzI2V3Q2XCIsXG5cdFwic2VhcmNoSW1nXCI6IFwiTmF2QmFyX3NlYXJjaEltZ19fQUFZLTdcIixcblx0XCJOb25hdXRoZW50aWNhdGVkXCI6IFwiTmF2QmFyX05vbmF1dGhlbnRpY2F0ZWRfXzJhXzE3XCIsXG5cdFwiYXV0aGVudGljYXRlZFwiOiBcIk5hdkJhcl9hdXRoZW50aWNhdGVkX18yTVlkOFwiLFxuXHRcIm5vdGlmaWNhdGlvblwiOiBcIk5hdkJhcl9ub3RpZmljYXRpb25fXzNYUnVHXCIsXG5cdFwidXBsb2FkXCI6IFwiTmF2QmFyX3VwbG9hZF9fMzBIT19cIixcblx0XCJwcm9maWxlXCI6IFwiTmF2QmFyX3Byb2ZpbGVfXzNIdmNkXCIsXG5cdFwibmF2QmFySW1hZ2VDb250YWluZXJcIjogXCJOYXZCYXJfbmF2QmFySW1hZ2VDb250YWluZXJfXzNuUXk5XCIsXG5cdFwiU2lkZU5hdkJhckNvbnRhaW5lclwiOiBcIk5hdkJhcl9TaWRlTmF2QmFyQ29udGFpbmVyX18zWTFnOFwiLFxuXHRcIlNpZGVOYXZCYXJJY29uTWVudVwiOiBcIk5hdkJhcl9TaWRlTmF2QmFySWNvbk1lbnVfXzJ0OGp0XCIsXG5cdFwiaWNvblwiOiBcIk5hdkJhcl9pY29uX18xM3dJMVwiLFxuXHRcImljb25iYXIxXCI6IFwiTmF2QmFyX2ljb25iYXIxX18zMlRDVVwiLFxuXHRcImljb25iYXIyXCI6IFwiTmF2QmFyX2ljb25iYXIyX18yOFlXaVwiLFxuXHRcImljb25iYXIzXCI6IFwiTmF2QmFyX2ljb25iYXIzX19Xc1c5cVwiLFxuXHRcIm9wZW5DbG9zZVwiOiBcIk5hdkJhcl9vcGVuQ2xvc2VfXzJZaVpkXCIsXG5cdFwiY2hhdFN2Z1wiOiBcIk5hdkJhcl9jaGF0U3ZnX18yYnp6YVwiLFxuXHRcIm51bWJlck9mQ2hhdHNOb3RSZWFkbG9jYWxcIjogXCJOYXZCYXJfbnVtYmVyT2ZDaGF0c05vdFJlYWRsb2NhbF9fM2tQMC1cIixcblx0XCJudW1iZXJPZk5vdGlmaWNhdGlvbk5vdFJlYWRsb2NhbFwiOiBcIk5hdkJhcl9udW1iZXJPZk5vdGlmaWNhdGlvbk5vdFJlYWRsb2NhbF9fM1ZUaUxcIixcblx0XCJzaG93VGVtSW1hZ2VPZlVzZXJXaG9TZW50WW91TWVzc2FnZVwiOiBcIk5hdkJhcl9zaG93VGVtSW1hZ2VPZlVzZXJXaG9TZW50WW91TWVzc2FnZV9fMjRoNTJcIixcblx0XCJzaG93SW1hZ2VcIjogXCJOYXZCYXJfc2hvd0ltYWdlX18yUkFSdlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7Z2V0bm90aWZpY2F0aW9uc30gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uJ1xyXG5pbXBvcnQge2RlbmllZGZvbGxvdyxhY2NlcHRmb2xsb3d9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZvbGxvd2luZydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5jb25zdCBub3RpZmljYXRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtub3RpZmljYXRpb25zLHNldG5vdGlmaWNhdGlvbnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW0xvYWRpbmcsc2V0TG9hZGluZ109UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0bm90aWZpY2F0aW9ucyh7fSxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgc2V0bm90aWZpY2F0aW9ucyhyZXN1bHQuZGF0YS5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBkZW5pZWRmb2xsb3dmbj0odGhlT3RoZXJQZXJzb25JZCxpZENvbXBvbmVudCk9PntcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgZGVuaWVkZm9sbG93KHRoZU90aGVyUGVyc29uSWQsaWRDb21wb25lbnQscHJvcHMudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldG5vdGlmaWNhdGlvbnMoZT0+e3JldHVybiBbLi4uZS5maWx0ZXIoZT0+IGUuX2lkIT1pZENvbXBvbmVudCldfSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFjY2VwdGZvbGxvd2ZuPSh0aGVPdGhlclBlcnNvbklkLGlkQ29tcG9uZW50KT0+e1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICBhY2NlcHRmb2xsb3codGhlT3RoZXJQZXJzb25JZCxpZENvbXBvbmVudCxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0bm90aWZpY2F0aW9ucyhlPT57cmV0dXJuIFsuLi5lLmZpbHRlcihlPT4gZS5faWQhPWlkQ29tcG9uZW50KV19KVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+PGgxPk5vdGlmY2F0aW9uPC9oMT48L2Rpdj5cclxuICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKG5vdGlmPT57XHJcbiAgICAgICAgICAgICAgICBpZihub3RpZi50eXBlPT1cImZvbGxvd1wiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ub3RpZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VySW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtub3RpZi5mcm9tLmN1cnJlbnRJbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntub3RpZi5mcm9tLnVzZXJOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD53YW50IHRvIGZvbGxvdyB5b3U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ZGVuaWVkZm9sbG93Zm4obm90aWYuZnJvbS5faWQsbm90aWYuX2lkKX0+e0xvYWRpbmc9PWZhbHNlPzxwPnJlamVjdDwvcD46PGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc3Jpbmd9PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmFjY2VwdGZvbGxvd2ZuKG5vdGlmLmZyb20uX2lkLG5vdGlmLl9pZCl9PntMb2FkaW5nPT1mYWxzZT88cD5hcHJvdmU8L3A+OjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5sZHNyaW5nfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2Pn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihub3RpZi50eXBlPT1cImZvbGxvdyBkaXJlY3RseVwiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ub3RpZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS51c2VySW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtub3RpZi5mcm9tLmN1cnJlbnRJbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntub3RpZi5mcm9tLnVzZXJOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gZm9sbG93ZCB5b3U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJub3RpZmljYXRpb25fY29udGFpbmVyX190NUNtSFwiLFxuXHRcInNob3dOb3RpZlwiOiBcIm5vdGlmaWNhdGlvbl9zaG93Tm90aWZfXzM0M0xOXCIsXG5cdFwiaGVhZGVyXCI6IFwibm90aWZpY2F0aW9uX2hlYWRlcl9fUTlCZEhcIixcblx0XCJub3RpZlwiOiBcIm5vdGlmaWNhdGlvbl9ub3RpZl9fMWxFZllcIixcblx0XCJ1c2VyXCI6IFwibm90aWZpY2F0aW9uX3VzZXJfXzFxZFlyXCIsXG5cdFwidXNlckltYWdlQ29udGFpbmVyXCI6IFwibm90aWZpY2F0aW9uX3VzZXJJbWFnZUNvbnRhaW5lcl9fMTU3RlpcIixcblx0XCJ0ZXh0XCI6IFwibm90aWZpY2F0aW9uX3RleHRfXzJYQ2gwXCIsXG5cdFwiYnRuc1wiOiBcIm5vdGlmaWNhdGlvbl9idG5zX18zY2Qwd1wiLFxuXHRcImxkc3JpbmdcIjogXCJub3RpZmljYXRpb25fbGRzcmluZ19fMU9TeXpcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL3BvcFVwTWVzc2FnZS5tb2R1bGUuc2NzcydcclxuY29uc3QgcG9wVXBNZXNzYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5mbmNsb3NlKClcclxuICAgICAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+e1wiTm96emxhXCJ9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlcy5lcnJvclRleHR9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLm9wZW5Qb3BVcC50ZXh0fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIiBhdXRvRm9jdXM+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLmVycm9yQnRuc30+QWdyZWU8L3NwYW4+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3BVcE1lc3NhZ2VcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicG9wVXBNZXNzYWdlX2NvbnRhaW5lcl9fMVpSWWxcIixcblx0XCJlcnJvckhlYWRlclwiOiBcInBvcFVwTWVzc2FnZV9lcnJvckhlYWRlcl9fMW1IR2JcIixcblx0XCJlcnJvclRleHRcIjogXCJwb3BVcE1lc3NhZ2VfZXJyb3JUZXh0X18xWmZnRlwiLFxuXHRcImVycm9yQnRuc1wiOiBcInBvcFVwTWVzc2FnZV9lcnJvckJ0bnNfXzNEVTdvXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9wcm9maWxlTWVudS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3JlbW92ZVRva2VufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCByZW1vdmVDb29raWU9KHVzZXJpZCk9PntcclxuICAgIGZldGNoKFwiL2FwaS9sb2dvdXRcIix7bWV0aG9kOlwicG9zdFwiLGhlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9fSkudGhlbigoKT0+e1xyXG4gICAgICAgIHJlbW92ZVRva2VuKHVzZXJpZCkudGhlbigpXHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IHByb2ZpbGVNZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmhvdmVySGFuZGxlcn0+XHJcbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGlua3NDb250YWluZXJzfT48aW1nIHNyYz1cIi9zdmdpY29ucy9zZXR0aW5ncy5zdmdcIiAvPjxMaW5rICBocmVmPVwiL3Byb2ZpbGVcIj48aDI+UHJvZmlsZTwvaDI+PC9MaW5rPjwvZGl2PiovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmxpbmtzQ29udGFpbmVyc30+PExpbmsgIGhyZWY9XCIvcHJvZmlsZVwiPjxoMj5Qcm9maWxlPC9oMj48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGlua3NDb250YWluZXJzfSBvbkNsaWNrPXsoKT0+cmVtb3ZlQ29va2llKHVzZXIuX2lkKX0+PGltZyBzcmM9XCIvc3ZnaWNvbnMvbG9nLW91dC5zdmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+PExpbmsgIGhyZWY9XCIvcHJvZmlsZVwiPjxoMj5Mb2cgb3V0PC9oMj48L0xpbms+PC9kaXY+Ki99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGlua3NDb250YWluZXJzfSBvbkNsaWNrPXsoKT0+cmVtb3ZlQ29va2llKHVzZXIuX2lkKX0+PExpbmsgIGhyZWY9XCIvcHJvZmlsZVwiPjxoMj5Mb2cgb3V0PC9oMj48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlTWVudVxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicHJvZmlsZU1lbnVfY29udGFpbmVyX19vVktqSVwiLFxuXHRcInNob3dmYWRlZFwiOiBcInByb2ZpbGVNZW51X3Nob3dmYWRlZF9fMTh2SzJcIixcblx0XCJob3ZlckhhbmRsZXJcIjogXCJwcm9maWxlTWVudV9ob3ZlckhhbmRsZXJfX1FuY2p4XCIsXG5cdFwibGlua3NDb250YWluZXJzXCI6IFwicHJvZmlsZU1lbnVfbGlua3NDb250YWluZXJzX18ybDFvZlwiLFxuXHRcInNldHRpbmdzXCI6IFwicHJvZmlsZU1lbnVfc2V0dGluZ3NfX3RudDJUXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL0FjY291bnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi8uLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAncmVhY3QtcmFpbmJvdy1jb21wb25lbnRzJztcclxuaW1wb3J0IHt1cGRhdGVQcm9maWxlSW5mb30gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IEFwaUlzTG9hZGluZ0NvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dC9hcGlJc0xvYWRpbmdDb250ZXh0J1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vVG9hc3QvVG9hc3QnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IEFjY291bnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZUNvbnRleHQoQXBpSXNMb2FkaW5nQ29udGV4dClcclxuICAgIGNvbnN0IFtuZXdVc2VyRGF0YSxzZXROZXdVc2VyRGF0YV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3RvYXN0TWVzc2FnZSxzZXRUb2FzdE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKHtzdGF0ZTpmYWxzZSxtZXNzYWdlOlwiXCJ9KVxyXG4gICAgY29uc3QgW2xhbmd1YWdlICwgc2V0TGFuZ3VhZ2VdPVJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KVxyXG5cclxuICAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLHZhbHVlfT1lLnRhcmdldDtcclxuICAgIHNldE5ld1VzZXJEYXRhKGU9PntcclxuICAgICAgICByZXR1cm4gey4uLmUsW25hbWVdOnZhbHVlfVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjb25zdCBVcGRhdGVEYXRhPSgpPT57XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgIHVwZGF0ZVByb2ZpbGVJbmZvKG5ld1VzZXJEYXRhLHVzZXIudG9rZW4pLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgICBzZXRUb2FzdE1lc3NhZ2Uoe3N0YXRlOnRydWUsbWVzc2FnZTpcInJhayBrYW1lbCBhbWFsdCB1cGRhdGUgbXRlM2VrXCJ9KVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6ZXJyb3IubWVzc2FnZX0pXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKHRvYXN0TWVzc2FnZS5zdGF0ZT09dHJ1ZSl7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRvYXN0TWVzc2FnZSh7c3RhdGU6ZmFsc2UsbWVzc2FnZTpcIlwifSlcclxuICAgICAgICB9LCA2MDAwKTtcclxuXHJcbiAgICB9XHJcbiAgIH0sW3RvYXN0TWVzc2FnZV0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7dG9hc3RNZXNzYWdlLnN0YXRlJiY8VG9hc3QgdGV4dD17dG9hc3RNZXNzYWdlLm1lc3NhZ2V9ID48L1RvYXN0Pn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+PGgxPntsYW5ndWFnZS5BY2NvdW50U2V0dGluZ308L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG9uQ2hhbmdlPXsoZSk9PmNoYW5nZUhhbmRsZXIoZSl9IGRlZmF1bHRWYWx1ZT17dXNlci51c2VyTmFtZX0gbmFtZT1cInVzZXJOYW1lXCIvPjxsYWJlbD57bGFuZ3VhZ2UudXNlcm5hbWV9PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG9uQ2hhbmdlPXsoZSk9PmNoYW5nZUhhbmRsZXIoZSl9IGRlZmF1bHRWYWx1ZT17dXNlci5maXJzdG5hbWV9IG5hbWU9XCJmaXJzdG5hbWVcIi8+PGxhYmVsPntsYW5ndWFnZS5maXJzdG5hbWV9PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG9uQ2hhbmdlPXsoZSk9PmNoYW5nZUhhbmRsZXIoZSl9IGRlZmF1bHRWYWx1ZT17dXNlci5sYXN0bmFtZX0gbmFtZT1cImxhc3RuYW1lXCIvPjxsYWJlbD57bGFuZ3VhZ2UubGFzdG5hbWV9PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtuZXdVc2VyRGF0YS5hZ2V8fHVzZXIuYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0TmV3VXNlckRhdGEoZSA9PiB7cmV0dXJuIHsgLi4uZSwgXCJhZ2VcIjogdmFsdWUgfX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRTdHlsZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9sb2NhbGU9e2xhbmd1YWdlLmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2xhbmd1YWdlLmJpcnRoZGF5fTwvbGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGUuaW5wdXRDb250YWluZXJ9ICR7U3R5bGUuYmlnSW5wdXR9YH0+PHRleHRhcmVhIG9uQ2hhbmdlPXsoZSk9PmNoYW5nZUhhbmRsZXIoZSl9IGRlZmF1bHRWYWx1ZT17dXNlci5iaW9ncmFwaHl9IG1heExlbmd0aD1cIjE1MFwiIHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJiaW9ncmFwaHlcIi8+PGxhYmVsPntsYW5ndWFnZS5iaW9ncmFwaHl9PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuYnRufT48YnV0dG9uIG9uQ2xpY2s9eygpPT5VcGRhdGVEYXRhKCl9PntsYW5ndWFnZS51cGRhdGV9PC9idXR0b24+PExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGJ1dHRvbj57bGFuZ3VhZ2UuY2FuY2VsfTwvYnV0dG9uPjwvTGluaz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFxyXG4vKipcclxuXHJcbiAqLyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkFjY291bnRfY29udGFpbmVyX19QYURxblwiLFxuXHRcImhlYWRlclwiOiBcIkFjY291bnRfaGVhZGVyX18xOHVDMFwiLFxuXHRcImlucHV0c0NvbnRhaW5lclwiOiBcIkFjY291bnRfaW5wdXRzQ29udGFpbmVyX19fUFMya1wiLFxuXHRcImJpZ0lucHV0XCI6IFwiQWNjb3VudF9iaWdJbnB1dF9fM2FSZXhcIixcblx0XCJpbnB1dENvbnRhaW5lclwiOiBcIkFjY291bnRfaW5wdXRDb250YWluZXJfXzFVY3I0XCIsXG5cdFwiYnRuXCI6IFwiQWNjb3VudF9idG5fXzJ1bnpoXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL0VtYWlsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vVG9hc3QvVG9hc3QnXHJcbmltcG9ydCB7dXBkYXRlRW1haWxTZW5kQ29kZSx1cGRhdGVFbWFpbEFwaX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5jb25zdCBFbWFpbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2FzdE1lc3NhZ2Usc2V0VG9hc3RNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZSh7c3RhdGU6ZmFsc2UsbWVzc2FnZTpcIlwifSlcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbY2hhbmdlRWFtaWxEYXRhLHNldENoYW5nZUVhbWlsRGF0YV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtsYW5ndWFnZSAsIHNldExhbmd1YWdlXT1SZWFjdC51c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dClcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgaWYodG9hc3RNZXNzYWdlLnN0YXRlPT10cnVlKXtcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBzZXRUb2FzdE1lc3NhZ2Uoe3N0YXRlOmZhbHNlLG1lc3NhZ2U6XCJcIn0pXHJcbiAgICAgICAgIH0sIDYwMDApO1xyXG4gICAgIH1cclxuICAgIH0sW3RvYXN0TWVzc2FnZV0pXHJcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyTmV3RWFtaWxBbmRDb2RlPShlKT0+e1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLHZhbHVlfT1lLnRhcmdldFxyXG4gICAgICAgIHNldENoYW5nZUVhbWlsRGF0YShlPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uZSxbbmFtZV06dmFsdWV9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRDb2RlPSgpPT57XHJcbiAgICAgICAgdXBkYXRlRW1haWxTZW5kQ29kZShjaGFuZ2VFYW1pbERhdGEuZW1haWwsdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6XCJhYjNldGggc2V4XCJ9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVFbWFpbD0oKT0+e1xyXG4gICAgICAgIHVwZGF0ZUVtYWlsQXBpKGNoYW5nZUVhbWlsRGF0YS5lbWFpbCxjaGFuZ2VFYW1pbERhdGEuY29kZSx1c2VyLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuZGF0YS50eXBlRXJyb3I9PVwiaW5jb3JlY3RDb2RlXCIpe1xyXG4gICAgICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6XCJhYjNldGggc2V4XCJ9KVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHQuZGF0YS50eXBlRXJyb3I9PVwiY29kZUludmFsaWRcIil7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2FzdE1lc3NhZ2Uoe3N0YXRlOnRydWUsbWVzc2FnZTpcImFiM2V0aCBzZXhcIn0pXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdC5kYXRhLnR5cGVFcnJvcj09XCJkb25lXCIpe1xyXG4gICAgICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6XCJhYjNldGggc2V4XCJ9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6ZXJyb3IubWVzc2FnZX0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge3RvYXN0TWVzc2FnZS5zdGF0ZSYmPFRvYXN0IHRleHQ9e3RvYXN0TWVzc2FnZS5tZXNzYWdlfSA+PC9Ub2FzdD59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PjxoMT57bGFuZ3VhZ2UuVXBkYXRlWW91ckVtYWlsfTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jZW50ZXJJbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLndhcm5pbmdUZXh0fT48aDE+e2xhbmd1YWdlLnB1dHlvdXJuZXdFbWFpbH08L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtYWlsQ29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PjxpbnB1dCB0eXBlPVwiZW1haWxcIiAgb25DaGFuZ2U9eyhlKT0+Y2hhbmdlSGFuZGxlck5ld0VhbWlsQW5kQ29kZShlKX0gbmFtZT1cImVtYWlsXCIvPjxsYWJlbD57bGFuZ3VhZ2UuZW1haWx9PC9sYWJlbD48L2Rpdj48YnV0dG9uIG9uQ2xpY2s9eygpPT5zZW5kQ29kZSgpfT57bGFuZ3VhZ2Uuc2VuZH08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS53YXJuaW5nVGV4dH0+PGgxPntsYW5ndWFnZS5Zb3VXaWxscmVjaXZlY29uZmVybWF0aW9uQ29kZXB1dGl0aGVyZUFuZENsaWNrVXBkYXRlfTwvaDE+PC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG9uQ2hhbmdlPXsoZSk9PmNoYW5nZUhhbmRsZXJOZXdFYW1pbEFuZENvZGUoZSl9IG5hbWU9XCJjb2RlXCIvPjxsYWJlbD57bGFuZ3VhZ2UuQ29uZmVybWF0aW9uQ29kZX08L2xhYmVsPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bn0+PGJ1dHRvbiBvbkNsaWNrPXsoKT0+dXBkYXRlRW1haWwoKX0+e2xhbmd1YWdlLnVwZGF0ZX08L2J1dHRvbj48TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YnV0dG9uPntsYW5ndWFnZS5jYW5jZWx9PC9idXR0b24+PC9MaW5rPjwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRW1haWxfY29udGFpbmVyX18yYjZvYVwiLFxuXHRcIndhcm5pbmdUZXh0XCI6IFwiRW1haWxfd2FybmluZ1RleHRfXzFIZUhnXCIsXG5cdFwiaGVhZGVyXCI6IFwiRW1haWxfaGVhZGVyX18ya3RjeFwiLFxuXHRcImlucHV0Q29udGFpbmVyXCI6IFwiRW1haWxfaW5wdXRDb250YWluZXJfXzNQLVliXCIsXG5cdFwiY2VudGVySW5wdXRzXCI6IFwiRW1haWxfY2VudGVySW5wdXRzX18zZ1huUFwiLFxuXHRcImJ0blwiOiBcIkVtYWlsX2J0bl9fMzd0SGxcIixcblx0XCJlbWFpbENvbnRhaW5lclwiOiBcIkVtYWlsX2VtYWlsQ29udGFpbmVyX18xckJCMlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9QYXNzd29yZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHtjaGFuZ2VQYXNzd29yZH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcbmltcG9ydCBBcGlJc0xvYWRpbmdDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvYXBpSXNMb2FkaW5nQ29udGV4dCdcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uLy4uL1RvYXN0L1RvYXN0J1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsc2V0UGFzc3dvcmRdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZUNvbnRleHQoQXBpSXNMb2FkaW5nQ29udGV4dClcclxuICAgIGNvbnN0IFt0b2FzdE1lc3NhZ2Usc2V0VG9hc3RNZXNzYWdlXT1SZWFjdC51c2VTdGF0ZSh7c3RhdGU6ZmFsc2UsbWVzc2FnZTpcIlwifSlcclxuICAgIGNvbnN0IFtsYW5ndWFnZSAsIHNldExhbmd1YWdlXT1SZWFjdC51c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dClcclxuXHJcblxyXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBjb25zdCB7bmFtZSx2YWx1ZX09ZS50YXJnZXQ7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLmUsW25hbWVdOnZhbHVlfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBVcGRhdGVQYXNzd29yZD0oKT0+e1xyXG4gICAgICAgIGlmKHBhc3N3b3JkLm5ld1Bhc3N3b3JkPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBzZXRUb2FzdE1lc3NhZ2Uoe3N0YXRlOnRydWUsbWVzc2FnZTpcImhvdCBtb2QgcGFzcyBtdGUzZWtlXCIsY29sb3I6XCIjZmYyZjJmXCJ9KVxyXG4gICAgICAgIH1lbHNlIGlmKHBhc3N3b3JkLm5ld1Bhc3N3b3JkLmxlbmd0aDw4KXtcclxuICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6XCJhOWFsIG1pbiA4IHJhd1wiLGNvbG9yOlwiI2ZmMmYyZlwifSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkLHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5wYXNzd29yZGluY29ycmVjdD09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6XCJtb3QgcGFzcyBtdGUzZWsgbGU5ZGltIDhhbGVcIixjb2xvcjpcIiNmZjJmMmZcIn0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb2FzdE1lc3NhZ2Uoe3N0YXRlOnRydWUsbWVzc2FnZTpcInJhdyB0YmFkZWxcIn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHRvYXN0TWVzc2FnZS5zdGF0ZT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTpmYWxzZSxtZXNzYWdlOlwiXCJ9KVxyXG4gICAgICAgICAgICB9LCA2MDAwKTtcclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgIH0sW3RvYXN0TWVzc2FnZV0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7dG9hc3RNZXNzYWdlLnN0YXRlJiY8VG9hc3QgdGV4dD17dG9hc3RNZXNzYWdlLm1lc3NhZ2V9IGNvbG9yPXt0b2FzdE1lc3NhZ2UuY29sb3J9PjwvVG9hc3Q+fVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+PGgxPntsYW5ndWFnZS5VcGRhdGVZb3VyUGFzc3dvcmR9PC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNlbnRlcklucHV0c30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS53YXJuaW5nVGV4dH0+PGgxPntsYW5ndWFnZS5JdHNhZ29vZGlkZWF0b3VzZWFzdHJvbmdwYXNzd29yZHRoYXR5b3V9PC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+Y2hhbmdlSGFuZGxlcihlKX0gdHlwZT1cInBhc3N3b3JkXCIgIG5hbWU9XCJvbGRQYXNzd29yZFwiLz48bGFiZWw+e2xhbmd1YWdlLm9sZFBhc3N3b3JkfTwvbGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS53YXJuaW5nVGV4dH0+PGgxPntsYW5ndWFnZS5uZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aH08L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PjxpbnB1dCBvbkNoYW5nZT17KGUpPT5jaGFuZ2VIYW5kbGVyKGUpfSB0eXBlPVwicGFzc3dvcmRcIiAgbmFtZT1cIm5ld1Bhc3N3b3JkXCIvPjxsYWJlbD57bGFuZ3VhZ2UubmV3UGFzc3dvcmR9PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG59PjxidXR0b24gIG9uQ2xpY2s9eygpPT5VcGRhdGVQYXNzd29yZCgpfT57bGFuZ3VhZ2UudXBkYXRlfTwvYnV0dG9uPjxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxidXR0b24+e2xhbmd1YWdlLmNhbmNlbH08L2J1dHRvbj48L0xpbms+PC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQYXNzd29yZF9jb250YWluZXJfXzNqbGc3XCIsXG5cdFwid2FybmluZ1RleHRcIjogXCJQYXNzd29yZF93YXJuaW5nVGV4dF9fMVZyaFZcIixcblx0XCJoZWFkZXJcIjogXCJQYXNzd29yZF9oZWFkZXJfX3dPRGtiXCIsXG5cdFwiaW5wdXRDb250YWluZXJcIjogXCJQYXNzd29yZF9pbnB1dENvbnRhaW5lcl9fN0xuU2ZcIixcblx0XCJjZW50ZXJJbnB1dHNcIjogXCJQYXNzd29yZF9jZW50ZXJJbnB1dHNfXzJabWdOXCIsXG5cdFwiYnRuXCI6IFwiUGFzc3dvcmRfYnRuX19kaVFJWVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9UZWxlcGhvbmUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBQaG9uZUlucHV0IGZyb20gJ3JlYWN0LXBob25lLWlucHV0LTInXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFRlbGVwaG9uZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsYW5ndWFnZSAsIHNldExhbmd1YWdlXT1SZWFjdC51c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dClcclxuICAvKiAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTp0cnVlLG1lc3NhZ2U6XCJlcnJvci5tZXNzYWdlXCJ9KVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgIGlmKHRvYXN0TWVzc2FnZS5zdGF0ZT09dHJ1ZSl7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgc2V0VG9hc3RNZXNzYWdlKHtzdGF0ZTpmYWxzZSxtZXNzYWdlOlwiXCJ9KVxyXG4gICAgICAgICB9LCA2MDAwKTtcclxuIFxyXG4gICAgIH1cclxuICAgIH0sW3RvYXN0TWVzc2FnZV0pXHJcbiAgIGltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi9Ub2FzdC9Ub2FzdCdcclxuIFxyXG4gICAgY29uc3QgW3RvYXN0TWVzc2FnZSxzZXRUb2FzdE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKHtzdGF0ZTpmYWxzZSxtZXNzYWdlOlwiXCJ9KVxyXG4gXHJcbiAgICB7dG9hc3RNZXNzYWdlLnN0YXRlJiY8VG9hc3QgdGV4dD17dG9hc3RNZXNzYWdlLm1lc3NhZ2V9ID48L1RvYXN0Pn1cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlclJlZ2lzdGVyUGhvbmU9KCk9PntcclxuXHJcbiAgICB9Ki9cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PjxoMT57bGFuZ3VhZ2UuVXBkYXRlWW91clBob25lTnVtYmVyfTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jZW50ZXJJbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLndhcm5pbmdUZXh0fT48aDE+e2xhbmd1YWdlLnB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmV9PC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5waG9uZUNvbnRhaW5lcn0+PFBob25lSW5wdXQgbmFtZT17XCJ0ZWxcIn0gIGNvdW50cnk9eyd0bid9ICBzcGVjaWFsTGFiZWw9e2xhbmd1YWdlLnBob25lfSAgaW5wdXRQcm9wcz17eyBuYW1lOiAncGhvbmUnLHJlcXVpcmVkOiB0cnVlLGF1dG9Gb2N1czogdHJ1ZX19ICBvbkNoYW5nZT17KGUsIGNvdW50cnkpID0+IG9uQ2hhbmdlSGFuZGxlclJlZ2lzdGVyUGhvbmUoZSwgY291bnRyeSl9IC8+PGJ1dHRvbj57bGFuZ3VhZ2Uuc2VuZH08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS53YXJuaW5nVGV4dH0+PGgxPntsYW5ndWFnZS5Zb3VXaWxscmVjaXZlY29uZmVybWF0aW9uQ29kZXB1dGl0aGVyZUFuZENsaWNrVXBkYXRlfTwvaDE+PC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiICBuYW1lPVwicGFzc3dvcmRcIi8+PGxhYmVsPntsYW5ndWFnZS5Db25mZXJtYXRpb25Db2RlfTwvbGFiZWw+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bn0+PGJ1dHRvbj57bGFuZ3VhZ2UudXBkYXRlfTwvYnV0dG9uPjxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxidXR0b24+e2xhbmd1YWdlLmNhbmNlbH08L2J1dHRvbj48L0xpbms+PC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWxlcGhvbmVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiVGVsZXBob25lX2NvbnRhaW5lcl9fMVUtbE5cIixcblx0XCJ3YXJuaW5nVGV4dFwiOiBcIlRlbGVwaG9uZV93YXJuaW5nVGV4dF9fMmJHdnlcIixcblx0XCJoZWFkZXJcIjogXCJUZWxlcGhvbmVfaGVhZGVyX19hamNuTFwiLFxuXHRcImlucHV0Q29udGFpbmVyXCI6IFwiVGVsZXBob25lX2lucHV0Q29udGFpbmVyX18zSm1xQ1wiLFxuXHRcImNlbnRlcklucHV0c1wiOiBcIlRlbGVwaG9uZV9jZW50ZXJJbnB1dHNfXzFwOUpDXCIsXG5cdFwiYnRuXCI6IFwiVGVsZXBob25lX2J0bl9fMldrS1pcIixcblx0XCJwaG9uZUNvbnRhaW5lclwiOiBcIlRlbGVwaG9uZV9waG9uZUNvbnRhaW5lcl9fMUhYMkFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByaXZhY3lfY29udGFpbmVyX18xTEhBaVwiLFxuXHRcImhlYWRlclwiOiBcIlByaXZhY3lfaGVhZGVyX18tcWcwYlwiLFxuXHRcInJhZGlvQ29udGFpbmVyXCI6IFwiUHJpdmFjeV9yYWRpb0NvbnRhaW5lcl9fM21jRzFcIixcblx0XCJyYWRpb0lucHV0Q29udGFpbmVyXCI6IFwiUHJpdmFjeV9yYWRpb0lucHV0Q29udGFpbmVyX18zRjkzRFwiLFxuXHRcInByaXZhdGVcIjogXCJQcml2YWN5X3ByaXZhdGVfXzRlTTBqXCIsXG5cdFwicHVibGljXCI6IFwiUHJpdmFjeV9wdWJsaWNfXzNjWUtGXCIsXG5cdFwidGV4dFwiOiBcIlByaXZhY3lfdGV4dF9fMWFBdDhcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vUHJpdmFjeS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHt1cGRhdGVQcml2YWN5LGdldFByaXZhY3l9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi8uLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5cclxuY29uc3QgUHJpdmFjeSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPVJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpXHJcbiAgICBjb25zdCBbcHJpdmFjeXN0YXRlLHNldFByaXZhY3lzdGF0ZV09UmVhY3QudXNlU3RhdGUoXCJwcml2YXRlXCIpXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRQcml2YWN5KHVzZXIudG9rZW4pLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEucHJpdmFjeSlcclxuICAgICAgICAgICAgc2V0UHJpdmFjeXN0YXRlKHJlc3VsdC5kYXRhLmRhdGEucHJpdmFjeSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IFJhZGlvQm94Q2hhbmdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBjb25zdCB7dmFsdWV9PWUudGFyZ2V0XHJcbiAgICAgICAgdXBkYXRlUHJpdmFjeSh7cHJpdmFjeTp2YWx1ZX0sdXNlci50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgc2V0UHJpdmFjeXN0YXRlKHZhbHVlKVxyXG5cclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT48aDE+UHJpdmFjeTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUucmFkaW9Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS50ZXh0fT48aDE+U2V0dGluZyB5b3VyIHByb2ZpbGUgUHJpdmF0ZSB3aWxsIG9ubHkgbGF0ZSBhY2NlcHRlZCB1c2VycyB0byB2aWV3IHlvdXIgcHJvZmlsZSAoY29tbWVudCBsaWtlcyk8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5yYWRpb0lucHV0Q29udGFpbmVyfT48aDI+cHJpdmF0ZTo8L2gyPjxpbnB1dCAgb25DaGFuZ2U9eyhlKT0+UmFkaW9Cb3hDaGFuZ2VIYW5kbGVyKGUpfSBjaGVja2VkPXtwcml2YWN5c3RhdGU9PVwicHJpdmF0ZVwifSBjbGFzc05hbWU9e1N0eWxlLnByaXZhdGV9IG5hbWU9XCJwcml2YWN5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwcml2YXRlXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudGV4dH0+PGgxPlNldHRpbmcgeW91ciBwcm9maWxlIFB1YmxpYyB3aWxsIGFsbG93IEZvbGxvd2VyIHRvIGxpa2Ugb3IgY29tbWVudCB5b3VyIHBvc3RzIGFuZCBpbWFnZXMgPC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUucmFkaW9JbnB1dENvbnRhaW5lcn0+PGgyPnB1YmxpYzo8L2gyPjxpbnB1dCAgIG9uQ2hhbmdlPXsoZSk9PlJhZGlvQm94Q2hhbmdlSGFuZGxlcihlKX0gY2hlY2tlZD17cHJpdmFjeXN0YXRlPT1cInB1YmxpY1wifSAgY2xhc3NOYW1lPXtTdHlsZS5wdWJsaWN9IG5hbWU9XCJwcml2YWN5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwdWJsaWNcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zaWRlTmF2QmFyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQge0NoYW5nZVByb2ZpbGVJbWFnZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5jb25zdCBzaWRlTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtwYWdlLHNldFBhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiYWNjb3VudFwiKVxyXG4gICAgY29uc3QgY2hhbmdlRmlsZT0oZSk9PntcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICBDaGFuZ2VQcm9maWxlSW1hZ2UoZm9ybURhdGEsdXNlci50b2tlbikudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgc2V0VXNlcihlPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZUltYWdlVXJsOmRhdGEuZGF0YS5QaWN1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVBhZ2VUbz0oZSk9PntcclxuICAgICAgICBwcm9wcy5jaGFuZ2VQYWdlKGUpXHJcbiAgICAgICAgc2V0UGFnZShlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZX0+PGltZyBzcmM9e3VzZXIuY3VycmVudEltYWdlVXJsfHxcIi9hdmF0YXIucG5nXCJ9IGFsdD17dXNlci51c2VyTmFtZSB8fCBcIlwifS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2FtZXJhfT48aW5wdXQgb25DaGFuZ2U9e2UgPT4gY2hhbmdlRmlsZShlKX0gdHlwZT1cImZpbGVcIiAvPjxzdmcgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiY2FtZXJhXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUxMiAxNDR2Mjg4YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxNDRjMC0yNi41IDIxLjUtNDggNDgtNDhoODhsMTIuMy0zMi45YzctMTguNyAyNC45LTMxLjEgNDQuOS0zMS4xaDEyNS41YzIwIDAgMzcuOSAxMi40IDQ0LjkgMzEuMUwzNzYgOTZoODhjMjYuNSAwIDQ4IDIxLjUgNDggNDh6TTM3NiAyODhjMC02Ni4yLTUzLjgtMTIwLTEyMC0xMjBzLTEyMCA1My44LTEyMCAxMjAgNTMuOCAxMjAgMTIwIDEyMCAxMjAtNTMuOCAxMjAtMTIwem0tMzIgMGMwIDQ4LjUtMzkuNSA4OC04OCA4OHMtODgtMzkuNS04OC04OCAzOS41LTg4IDg4LTg4IDg4IDM5LjUgODggODh6XCIgLz48L3N2Zz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubmFtZX0+PGgxPmF6aXogamFycmFyPC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnBhZ2VzfT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYWdlPT1cImFjY291bnRcIj9TdHlsZS5Gb2N1c2VkOlwiY2hheVwifSBpZD17XCJhY2NvdW50XCJ9b25DbGljaz17KCk9PmNoYW5nZVBhZ2VUbyhcImFjY291bnRcIil9PjxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImhvbWVcIiAgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjgwLjM3IDE0OC4yNkw5NiAzMDAuMTFWNDY0YTE2IDE2IDAgMCAwIDE2IDE2bDExMi4wNi0uMjlhMTYgMTYgMCAwIDAgMTUuOTItMTZWMzY4YTE2IDE2IDAgMCAxIDE2LTE2aDY0YTE2IDE2IDAgMCAxIDE2IDE2djk1LjY0YTE2IDE2IDAgMCAwIDE2IDE2LjA1TDQ2NCA0ODBhMTYgMTYgMCAwIDAgMTYtMTZWMzAwTDI5NS42NyAxNDguMjZhMTIuMTkgMTIuMTkgMCAwIDAtMTUuMyAwek01NzEuNiAyNTEuNDdMNDg4IDE4Mi41NlY0NC4wNWExMiAxMiAwIDAgMC0xMi0xMmgtNTZhMTIgMTIgMCAwIDAtMTIgMTJ2NzIuNjFMMzE4LjQ3IDQzYTQ4IDQ4IDAgMCAwLTYxIDBMNC4zNCAyNTEuNDdhMTIgMTIgMCAwIDAtMS42IDE2LjlsMjUuNSAzMUExMiAxMiAwIDAgMCA0NS4xNSAzMDFsMjM1LjIyLTE5My43NGExMi4xOSAxMi4xOSAwIDAgMSAxNS4zIDBMNTMwLjkgMzAxYTEyIDEyIDAgMCAwIDE2LjktMS42bDI1LjUtMzFhMTIgMTIgMCAwIDAtMS43LTE2LjkzelwiPjwvcGF0aD48L3N2Zz5BY2NvdW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYWdlPT1cInBhc3N3b3JkXCI/U3R5bGUuRm9jdXNlZDpcImNoYXlcIn0gaWQ9e1wicGFzc3dvcmRcIn1vbkNsaWNrPXsoKT0+Y2hhbmdlUGFnZVRvKFwicGFzc3dvcmRcIil9PjxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImtleVwiICByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUxMiAxNzYuMDAxQzUxMiAyNzMuMjAzIDQzMy4yMDIgMzUyIDMzNiAzNTJjLTExLjIyIDAtMjIuMTktMS4wNjItMzIuODI3LTMuMDY5bC0yNC4wMTIgMjcuMDE0QTIzLjk5OSAyMy45OTkgMCAwIDEgMjYxLjIyMyAzODRIMjI0djQwYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNGgtNDB2NDBjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDI0Yy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjR2LTc4LjA1OWMwLTYuMzY1IDIuNTI5LTEyLjQ3IDcuMDI5LTE2Ljk3MWwxNjEuODAyLTE2MS44MDJDMTYzLjEwOCAyMTMuODE0IDE2MCAxOTUuMjcxIDE2MCAxNzYgMTYwIDc4Ljc5OCAyMzguNzk3LjAwMSAzMzUuOTk5IDAgNDMzLjQ4OC0uMDAxIDUxMiA3OC41MTEgNTEyIDE3Ni4wMDF6TTMzNiAxMjhjMCAyNi41MSAyMS40OSA0OCA0OCA0OHM0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OC00OCAyMS40OS00OCA0OHpcIj48L3BhdGg+PC9zdmc+UGFzc3dvcmQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhZ2U9PVwiVGVsZXBob25lXCI/U3R5bGUuRm9jdXNlZDpcImNoYXlcIn0gaWQ9e1wiVGVsZXBob25lXCJ9b25DbGljaz17KCk9PmNoYW5nZVBhZ2VUbyhcIlRlbGVwaG9uZVwiKX0+PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwicGhvbmUtc3F1YXJlLWFsdFwiICByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMCAzMkg0OEE0OCA0OCAwIDAgMCAwIDgwdjM1MmE0OCA0OCAwIDAgMCA0OCA0OGgzNTJhNDggNDggMCAwIDAgNDgtNDhWODBhNDggNDggMCAwIDAtNDgtNDh6bS0xNi4zOSAzMDcuMzdsLTE1IDY1QTE1IDE1IDAgMCAxIDM1NCA0MTZDMTk0IDQxNiA2NCAyODYuMjkgNjQgMTI2YTE1LjcgMTUuNyAwIDAgMSAxMS42My0xNC42MWw2NS0xNUExOC4yMyAxOC4yMyAwIDAgMSAxNDQgOTZhMTYuMjcgMTYuMjcgMCAwIDEgMTMuNzkgOS4wOWwzMCA3MEExNy45IDE3LjkgMCAwIDEgMTg5IDE4MWExNyAxNyAwIDAgMS01LjUgMTEuNjFsLTM3Ljg5IDMxYTIzMS45MSAyMzEuOTEgMCAwIDAgMTEwLjc4IDExMC43OGwzMS0zNy44OUExNyAxNyAwIDAgMSAyOTkgMjkxYTE3Ljg1IDE3Ljg1IDAgMCAxIDUuOTEgMS4yMWw3MCAzMEExNi4yNSAxNi4yNSAwIDAgMSAzODQgMzM2YTE3LjQxIDE3LjQxIDAgMCAxLS4zOSAzLjM3elwiPjwvcGF0aD48L3N2Zz5UZWxlcGhvbmU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhZ2U9PVwiRW1haWxcIj9TdHlsZS5Gb2N1c2VkOlwiY2hheVwifSBpZD17XCJFbWFpbFwifW9uQ2xpY2s9eygpPT5jaGFuZ2VQYWdlVG8oXCJlbWFpbFwiKX0+PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZW52ZWxvcGUtc3F1YXJlXCIgIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4ek0xNzguMTE3IDI2Mi4xMDRDODcuNDI5IDE5Ni4yODcgODguMzUzIDE5Ni4xMjEgNjQgMTc3LjE2N1YxNTJjMC0xMy4yNTUgMTAuNzQ1LTI0IDI0LTI0aDI3MmMxMy4yNTUgMCAyNCAxMC43NDUgMjQgMjR2MjUuMTY3Yy0yNC4zNzEgMTguOTY5LTIzLjQzNCAxOS4xMjQtMTE0LjExNyA4NC45MzgtMTAuNSA3LjY1NS0zMS4zOTIgMjYuMTItNDUuODgzIDI1Ljg5NC0xNC41MDMuMjE4LTM1LjM2Ny0xOC4yMjctNDUuODgzLTI1Ljg5NXpNMzg0IDIxNy43NzVWMzYwYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEg4OGMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0VjIxNy43NzVjMTMuOTU4IDEwLjc5NCAzMy4zMjkgMjUuMjM2IDk1LjMwMyA3MC4yMTQgMTQuMTYyIDEwLjM0MSAzNy45NzUgMzIuMTQ1IDY0LjY5NCAzMi4wMSAyNi44ODcuMTM0IDUxLjAzNy0yMi4wNDEgNjQuNzItMzIuMDI1IDYxLjk1OC00NC45NjUgODEuMzI1LTU5LjQwNiA5NS4yODMtNzAuMTk5elwiPjwvcGF0aD48L3N2Zz5FbWFpbDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGFnZT09XCJQcml2YWN5XCI/U3R5bGUuRm9jdXNlZDpcImNoYXlcIn0gaWQ9e1wiRW1haWxcIn1vbkNsaWNrPXsoKT0+Y2hhbmdlUGFnZVRvKFwiUHJpdmFjeVwiKX0+PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZW52ZWxvcGUtc3F1YXJlXCIgIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4ek0xNzguMTE3IDI2Mi4xMDRDODcuNDI5IDE5Ni4yODcgODguMzUzIDE5Ni4xMjEgNjQgMTc3LjE2N1YxNTJjMC0xMy4yNTUgMTAuNzQ1LTI0IDI0LTI0aDI3MmMxMy4yNTUgMCAyNCAxMC43NDUgMjQgMjR2MjUuMTY3Yy0yNC4zNzEgMTguOTY5LTIzLjQzNCAxOS4xMjQtMTE0LjExNyA4NC45MzgtMTAuNSA3LjY1NS0zMS4zOTIgMjYuMTItNDUuODgzIDI1Ljg5NC0xNC41MDMuMjE4LTM1LjM2Ny0xOC4yMjctNDUuODgzLTI1Ljg5NXpNMzg0IDIxNy43NzVWMzYwYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEg4OGMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0VjIxNy43NzVjMTMuOTU4IDEwLjc5NCAzMy4zMjkgMjUuMjM2IDk1LjMwMyA3MC4yMTQgMTQuMTYyIDEwLjM0MSAzNy45NzUgMzIuMTQ1IDY0LjY5NCAzMi4wMSAyNi44ODcuMTM0IDUxLjAzNy0yMi4wNDEgNjQuNzItMzIuMDI1IDYxLjk1OC00NC45NjUgODEuMzI1LTU5LjQwNiA5NS4yODMtNzAuMTk5elwiPjwvcGF0aD48L3N2Zz5Qcml2YWN5PC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlTmF2QmFyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNvbnRhaW5lclwiOiBcInNpZGVOYXZCYXJfQ29udGFpbmVyX18yWGhJMlwiLFxuXHRcImltYWdlXCI6IFwic2lkZU5hdkJhcl9pbWFnZV9fM1NsRVhcIixcblx0XCJ1c2VySW1hZ2VcIjogXCJzaWRlTmF2QmFyX3VzZXJJbWFnZV9fM0pRTHJcIixcblx0XCJpbWFnZUNvbnRhaW5lclwiOiBcInNpZGVOYXZCYXJfaW1hZ2VDb250YWluZXJfXzN3UzJZXCIsXG5cdFwibmFtZVwiOiBcInNpZGVOYXZCYXJfbmFtZV9fMmZrenJcIixcblx0XCJwYWdlc1wiOiBcInNpZGVOYXZCYXJfcGFnZXNfX2M2WTVHXCIsXG5cdFwiY2FtZXJhXCI6IFwic2lkZU5hdkJhcl9jYW1lcmFfX3dSVnA4XCIsXG5cdFwiRm9jdXNlZFwiOiBcInNpZGVOYXZCYXJfRm9jdXNlZF9fM05ObzVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vc2VhcmNoVXNlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcidcclxuXHJcblxyXG5jb25zdCBzZWFyY2hVc2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYocHJvcHMuc2VhcmNoVXNlck5hbWUhPXVuZGVmaW5lZCYmIHByb3BzLnNlYXJjaFVzZXJOYW1lLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkocHJvcHMuc2VhcmNoVXNlck5hbWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbcHJvcHMuc2VhcmNoVXNlck5hbWVdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIGtleT17ZS5faWR9IHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFVzZXJcclxuY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhIGhyZWY9e2AvcHJvZmlsZS8ke3Byb3BzLnVzZXJEYXRhLl9pZH1gfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzZWFyY2hVc2VyX2NvbnRhaW5lcl9fMUdkLWxcIixcblx0XCJ1c2VyQ29udGFpbmVyXCI6IFwic2VhcmNoVXNlcl91c2VyQ29udGFpbmVyX18xVUtsbFwiLFxuXHRcImltZ0NvbnRhaW5lclwiOiBcInNlYXJjaFVzZXJfaW1nQ29udGFpbmVyX18yMmZGN1wiLFxuXHRcInVzZXJOYW1lXCI6IFwic2VhcmNoVXNlcl91c2VyTmFtZV9fMl92UlpcIixcblx0XCJGb2xsb3dBbmRVbmZvbGxvd0NvbnRhaW5lclwiOiBcInNlYXJjaFVzZXJfRm9sbG93QW5kVW5mb2xsb3dDb250YWluZXJfXzJUV2p1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL3ZlcmlmeUFjY291bnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCB7YWN0aXZlQWNjb3VudCxyZVNlbmRWZXJpZmljYXRpb25Db2RlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEFwaUlzTG9hZGluZ0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9hcGlJc0xvYWRpbmdDb250ZXh0J1xyXG5jb25zdCB2ZXJpZnlBY2NvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IFJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KVxyXG4gICAgY29uc3QgW2NvZGUsc2V0Q29kZV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlQ29udGV4dChBcGlJc0xvYWRpbmdDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IHJlU2VuZENvZGU9KCk9PntcclxuICAgICAgICByZVNlbmRWZXJpZmljYXRpb25Db2RlKHByb3BzLnVzZXJJZCxjb2RlLnZlcmlmaWNhdGlvbkNvZGUpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHZlcmlmeVVzZXJBY2NvdW50PSgpPT57XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgYWN0aXZlQWNjb3VudChwcm9wcy51c2VySWQsY29kZS52ZXJpZmljYXRpb25Db2RlKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5zdGF0ZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRFcnJvck1lc3NhZ2VQcm9wcyh7IHN0YXRlOiB0cnVlLCB0ZXh0OiByZXN1bHQuZGF0YS5tZXNzYWdlIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3NldFRva2VuXCIse21ldGhvZDpcInBvc3RcIixoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxib2R5OkpTT04uc3RyaW5naWZ5KHt0b2tlbjpyZXN1bHQuZGF0YS50b2tlbn0pfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmX3Rva2VuXCIscmVzdWx0LmRhdGEucmVmX3Rva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7cGF0aG5hbWU6XCIvXCIscXVlcnk6IHsgcmVmcmVjaDogdHJ1ZSB9fSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29kZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgc2V0Q29kZSh7dmVyaWZpY2F0aW9uQ29kZTplLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Db250YWluZXJWZXJpZmljYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5WZXJpZmljYXRpb25IZWFkZXJ9PjxoMT5TbW91Znk8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5kaXNjcnB0aW9ufT48cD52ZXJpZmljYXRpb24gY29kZSBpcyBzZW50IHRvIHlvdXIgZW1haWwgb3UgdGVsZWZvbmUgdHlwZSBpdCBoZXJlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17U3R5bGUuZm9ybX0gb25TdWJtaXQ9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PjxpbnB1dCBuYW1lPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtsYW5ndWFnZS52ZXJpZmljYXRpb25jb2RlfSBjbGFzc05hbWU9e1N0eWxlLmlucHV0fSBvbkNoYW5nZT17KGUpID0+IGNvZGVIYW5kbGVyKGUpfSByZXF1aXJlZCAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e1N0eWxlLlJlc2VuZGNvZGV9IG9uQ2xpY2s9eygpPT5yZVNlbmRDb2RlKCl9PlJlc2VuZCBjb2RlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT52ZXJpZnlVc2VyQWNjb3VudCgpfSAgY2xhc3NOYW1lPXtTdHlsZS5idG59PntsYW5ndWFnZS5zZW5kfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5QWNjb3VudFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250YWluZXJWZXJpZmljYXRpb25cIjogXCJ2ZXJpZnlBY2NvdW50X0NvbnRhaW5lclZlcmlmaWNhdGlvbl9fMXE4V1RcIixcblx0XCJkaXNjcnB0aW9uXCI6IFwidmVyaWZ5QWNjb3VudF9kaXNjcnB0aW9uX18xYjNsVVwiLFxuXHRcIlZlcmlmaWNhdGlvbkhlYWRlclwiOiBcInZlcmlmeUFjY291bnRfVmVyaWZpY2F0aW9uSGVhZGVyX18xdE15eFwiLFxuXHRcImlucHV0Q29udGFpbmVyXCI6IFwidmVyaWZ5QWNjb3VudF9pbnB1dENvbnRhaW5lcl9fM1dEdkpcIixcblx0XCJSZXNlbmRjb2RlXCI6IFwidmVyaWZ5QWNjb3VudF9SZXNlbmRjb2RlX18zQm54ZVwiLFxuXHRcImJ0blwiOiBcInZlcmlmeUFjY291bnRfYnRuX18zeFJGbFwiLFxuXHRcImlucHV0XCI6IFwidmVyaWZ5QWNjb3VudF9pbnB1dF9fMU1lNFNcIixcblx0XCJsYWJlbHNwYW5cIjogXCJ2ZXJpZnlBY2NvdW50X2xhYmVsc3Bhbl9fM3JPeC1cIlxufTtcbiIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBhcGlJc0xvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChcImVuZ1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpSXNMb2FkaW5nQ29udGV4dCIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFwiZW5nXCIpO1xyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZUNvbnRleHQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgc29ja2V0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtyZWZyZXNoQWNjZXNzVG9rZW4sZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWZyZXNoQWNjZXNzVG9rZW4nXHJcbmNvbnN0IGF4aW9zQXBpSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vYmFzZVVSTDogJ2h0dHA6Ly8xMjcuMC4wLjE6NTAxMC8nLFxyXG4gIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjUwMTAvJyxcclxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxufSlcclxuYXhpb3NBcGlJbnN0YW5jZS5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXHJcbi8vYXhpb3NBcGlJbnN0YW5jZS5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAxMC8nIC8vIHNldCBkZWZhdWx0IHVybFxyXG5heGlvc0FwaUluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICBhc3luYyBjb25maWcgPT4ge1xyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0sXHJcbiAgZXJyb3IgPT4ge1xyXG5cclxuICAgIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG59KTtcclxuYXhpb3NBcGlJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXNwb25zZVxyXG59LCBhc3luYyBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICBjb25zb2xlLmxvZyhlcnJvcilcclxuICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWc7XHJcbiAgaWYoZXJyb3IubWVzc2FnZT09XCJOZXR3b3JrIEVycm9yXCIpe1xyXG4gICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmX3Rva2VuJyk7XHJcbiAgIC8vIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvbG9nb3V0XCIpIC8vIGNoYW5nZSB0b2tlbiBpbiBjb29raWVzIHRvIHRoZSBiZXcgb25lXHJcblxyXG4gICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcclxuICAgIC8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PTQwMSl7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmX3Rva2VuJyk7XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL2xvZ291dFwiKSAvLyBjaGFuZ2UgdG9rZW4gaW4gY29va2llcyB0byB0aGUgYmV3IG9uZVxyXG4gICAgd2luZG93LnJlbG9hZCgpXHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KXtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgJiYgIW9yaWdpbmFsUmVxdWVzdC5fcmV0cnkpIHtcclxuICAgICAgb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGF3YWl0IHJlZnJlc2hBY2Nlc3NUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZl90b2tlblwiKSk7IFxyXG4gICAgICBkZWxldGVSZWZyZWNoVG9rZW5PbGRPbmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZfdG9rZW5cIikpXHJcbiAgICAgIC8vIHNlbmQgdGhlIHJlZiB0b2tlbiBhbmQgZ2V0IG5ldyB0b2tlblxyXG4gICAgICBvcmlnaW5hbFJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgYWNjZXNzX3Rva2VuLmRhdGEudG9rZW47XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvc2V0VG9rZW5cIix7dG9rZW46YWNjZXNzX3Rva2VuLmRhdGEudG9rZW59KSAvLyBjaGFuZ2UgdG9rZW4gaW4gY29va2llcyB0byB0aGUgYmV3IG9uZVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZl90b2tlblwiLGFjY2Vzc190b2tlbi5kYXRhLnJlZl90b2tlbikgLy8gc2F2ZSB0aGUgbmV3IHJlZl90b2tlblxyXG4gICAgICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZShvcmlnaW5hbFJlcXVlc3QpOyAvLyByZXR1cm4gbmV3ICByZXF1ZXN0IHdpdGggdGhlIG5ldyB0b2tlblxyXG4gIH1cclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcbmV4cG9ydCAgZGVmYXVsdCBheGlvc0FwaUluc3RhbmNlOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dClcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICBjb25zdCBsb2NhbGVEb21haW4gPSBnZXREb21haW5Mb2NhbGUoXG4gICAgICBhcyxcbiAgICAgIGN1ckxvY2FsZSxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NldHRpbmdzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2QmFyL05hdkJhcidcclxuaW1wb3J0IFNpZGVOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9maWxlU2V0dGluZ3Mvc2lkZU5hdkJhci9zaWRlTmF2QmFyJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGVTZXR0aW5ncy9BY2NvdW50L0FjY291bnQnXHJcbmltcG9ydCBFbWFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGVTZXR0aW5ncy9FbWFpbC9FbWFpbCdcclxuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL1Bhc3N3b3JkL1Bhc3N3b3JkJ1xyXG5pbXBvcnQgVGVsZXBob25lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL1RlbGVwaG9uZS9UZWxlcGhvbmUnXHJcbmltcG9ydCBQcml2YWN5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZVNldHRpbmdzL3ByaXZhY3kvcHJpdmFjeSdcclxuY29uc3QgUHJvZmlsZVNldHRpbmdzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2Usc2V0UGFnZV09UmVhY3QudXNlU3RhdGUoXCJhY2NvdW50XCIpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlUGFnZT0oZSk9PntcclxuICAgICAgc2V0UGFnZShlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc2V0dGluZ3NDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNpZGVOYXZCYXJ9PlxyXG4gICAgICAgICAgICA8U2lkZU5hdkJhciBjaGFuZ2VQYWdlPXtjaGFuZ2VQYWdlfSA+PC9TaWRlTmF2QmFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wcm9maWxlU2V0dGluZ3N9PlxyXG4gICAgICAgICAgICB7cGFnZT09XCJhY2NvdW50XCImJjxBY2NvdW50PjwvQWNjb3VudD59XHJcbiAgICAgICAgICAgICAge3BhZ2U9PVwiZW1haWxcIiYmPEVtYWlsPjwvRW1haWw+fVxyXG4gICAgICAgICAgICAgIHtwYWdlPT1cInBhc3N3b3JkXCImJjxQYXNzd29yZD48L1Bhc3N3b3JkPn1cclxuICAgICAgICAgICAgICB7cGFnZT09XCJUZWxlcGhvbmVcIiYmPFRlbGVwaG9uZT48L1RlbGVwaG9uZT59XHJcbiAgICAgICAgICAgICAge3BhZ2U9PVwiUHJpdmFjeVwiJiY8UHJpdmFjeT48L1ByaXZhY3k+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlU2V0dGluZ3NcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cmVxLHJlc30pIHtcclxuICByZXR1cm4gcmVxLmNvb2tpZXMudG9rZW4gP3twcm9wczoge3Rva2VuOnJlcS5jb29raWVzLnRva2VufX06e3JlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiAnLycsIHBlcm1hbmVudDogZmFsc2UsIH19XHJcbn0iLCJpbXBvcnQgYXhpb3NBcGlJbnN0YW5jZSBmcm9tICcuLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvcidcclxuXHJcbmNvbnN0IGFkZE1lc3NhZ2U9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvY2hhdC9hZGRNZXNzYWdlXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbj1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9jaGF0L2dldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBnZXRVc2VyV2hvQ2hhdFdpdGg9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvY2hhdC9nZXRVc2VyV2hvQ2hhdFdpdGhcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IGdldFVucmVhZFVzZXJzQ2hhdHNOdW1iZXI9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvY2hhdC9nZXRVbnJlYWRVc2Vyc0NoYXRzTnVtYmVyXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5leHBvcnQge2dldFVucmVhZFVzZXJzQ2hhdHNOdW1iZXIsYWRkTWVzc2FnZSxnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbixnZXRVc2VyV2hvQ2hhdFdpdGh9IiwiaW1wb3J0IGF4aW9zQXBpSW5zdGFuY2UgZnJvbSAnLi4vaW50ZXJjZXB0b3IvaW50ZXJjZXB0b3InXHJcblxyXG5jb25zdCBnZXRGb2xsb3dpbmdPZlVzZXI9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL2dldEZvbGxvd2luZ09mVXNlclwiLHsuLi5kYXRhfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbiAgfVxyXG4gIGNvbnN0IHVuZm9sbG93VXNlckFwaT1hc3luYyhmb2xsb3dpbmdpZCx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL3VuZm9sbG93VXNlclwiLHtmb2xsb3dpbmdpZDpmb2xsb3dpbmdpZH0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG4gIH1cclxuICBjb25zdCBmb2xsb3dVc2VyQXBpPWFzeW5jKHVzZXJUb0ZvbGxvdyx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL2ZvbGxvd1VzZXJcIix7Zm9sbG93aW5naWQ6dXNlclRvRm9sbG93fSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbiAgfVxyXG4gIGNvbnN0IGNoZWNrSWZmb2xsb3dBcGk9YXN5bmModGhlT3RoZXJQZXJzb25JZCx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL2NoZWNrSWZmb2xsb3dcIix7Zm9sbG93aW5naWQ6dGhlT3RoZXJQZXJzb25JZH0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG4gIH1cclxuICBjb25zdCByZW1vdmVGb2xsb3dQZW5kaW5nPWFzeW5jKHRoZU90aGVyUGVyc29uSWQsdG9rZW4pPT57XHJcbiAgICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL2ZvbGxvd2luZy9yZW1vdmVGb2xsb3dQZW5kaW5nXCIse2ZvbGxvd2luZ2lkOnRoZU90aGVyUGVyc29uSWR9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxuICB9XHJcbiAgY29uc3QgYWNjZXB0Zm9sbG93PWFzeW5jKHRoZU90aGVyUGVyc29uSWQsaWROb3RpZix0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL2FjY2VwdGZvbGxvd1wiLHtpZE5vdGlmOmlkTm90aWYsdGhlT3RoZXJQZXJzb25JZDp0aGVPdGhlclBlcnNvbklkfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRlbmllZGZvbGxvdz1hc3luYyh0aGVPdGhlclBlcnNvbklkLGlkTm90aWYsdG9rZW4pPT57XHJcbiAgICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL2ZvbGxvd2luZy9kZW5pZWRmb2xsb3dcIix7aWROb3RpZjppZE5vdGlmLGZvbGxvd2luZ2lkOnRoZU90aGVyUGVyc29uSWR9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxuICB9XHJcbiAgY29uc3QgY291bnRGb2xsb3dpbmdPZlVzZXI9YXN5bmMoZGF0YSx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL2NvdW50Rm9sbG93aW5nT2ZVc2VyXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCB7Y291bnRGb2xsb3dpbmdPZlVzZXIsZGVuaWVkZm9sbG93LGFjY2VwdGZvbGxvdyxyZW1vdmVGb2xsb3dQZW5kaW5nLGNoZWNrSWZmb2xsb3dBcGksZm9sbG93VXNlckFwaSx1bmZvbGxvd1VzZXJBcGksZ2V0Rm9sbG93aW5nT2ZVc2VyfSIsImltcG9ydCBheGlvc0FwaUluc3RhbmNlIGZyb20gJy4uL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yJ1xyXG5jb25zdCBnZXRub3RpZmljYXRpb25zID0gYXN5bmMgKGRhdGEsdG9rZW4pID0+IHtcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KCcvbm90aWZpY2F0aW9uL2dldG5vdGlmaWNhdGlvbnMnLHt9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KVxyXG59XHJcbmV4cG9ydCB7Z2V0bm90aWZpY2F0aW9uc30iLCJpbXBvcnQgYXhpb3NBcGlJbnN0YW5jZSBmcm9tICcuLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvcidcclxuLy8gc2VuZCByZWYgdG9rZW4gYW5kIGdldCBuZXcgdG9rZW5cclxuY29uc3QgcmVmcmVzaEFjY2Vzc1Rva2VuPWFzeW5jICh0b2tlbik9PntcclxuICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi90b2tlbi9nZXRSZWZyZXNoQWNjZXNzVG9rZW5cIix7cmVmX3Rva2VuOnRva2VufSlcclxufVxyXG5jb25zdCBkZWxldGVSZWZyZWNoVG9rZW5PbGRPbmU9YXN5bmMgKFJlZnJlc2hBY2Nlc3NUb2tlbik9PntcclxuICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi90b2tlbi9kZWxldGVSZWZyZWNoVG9rZW5PbGRPbmVcIix7UmVmcmVzaEFjY2Vzc1Rva2VuOlJlZnJlc2hBY2Nlc3NUb2tlbn0pXHJcbn1cclxuZXhwb3J0IHsgcmVmcmVzaEFjY2Vzc1Rva2VuICxkZWxldGVSZWZyZWNoVG9rZW5PbGRPbmV9IiwiaW1wb3J0IGF4aW9zQXBpSW5zdGFuY2UgZnJvbSAnLi4vaW50ZXJjZXB0b3IvaW50ZXJjZXB0b3InXHJcbmNvbnN0IExvZ2luID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KCcvdXNlci9sb2dpbicsey4uLmRhdGF9KVxyXG59XHJcbmNvbnN0IExvZ2luRmFjZWJvb2sgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoJy91c2VyL2xvZ2luZmFjZWJvb2snLHsuLi5kYXRhfSlcclxufVxyXG5jb25zdCBSZWdpc3RlciA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdCgnL3VzZXIvcmVnaXN0ZXInLHsuLi5kYXRhfSlcclxufVxyXG5jb25zdCBHZXRVc2VyRGF0YSA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLmdldCgnL3VzZXIvR2V0VXNlckRhdGEnLHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KVxyXG59XHJcbmNvbnN0IENoYW5nZVByb2ZpbGVJbWFnZSA9IGFzeW5jIChmaWxlLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9jaGFuZ2Vwcm9maWxlaW1hZ2VcIixmaWxlLHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KVxyXG59XHJcbmNvbnN0IEdldE90aGVyVXNlcnNEYXRhPWFzeW5jIChpZCx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvZ2V0b3RoZXJVc2Vyc0RhdGEvXCIraWQse30seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IGFjdGl2ZUFjY291bnQ9YXN5bmMgKHVzZXJpZCx2ZXJpZmljYXRpb25Db2RlKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9hY3RpdmVBY2NvdW50XCIse3VzZXJpZCx2ZXJpZmljYXRpb25Db2RlfSk7XHJcbn1cclxuY29uc3QgcmVTZW5kVmVyaWZpY2F0aW9uQ29kZT1hc3luYyAodXNlcmlkLHZlcmlmaWNhdGlvbkNvZGUpPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3JlU2VuZFZlcmlmaWNhdGlvbkNvZGVcIix7dXNlcmlkLHZlcmlmaWNhdGlvbkNvZGV9KTtcclxufVxyXG5jb25zdCByZW1vdmVUb2tlbj1hc3luYyAodXNlcmlkKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9yZW1vdmVUb2tlblwiLHt1c2VyaWR9KTtcclxufVxyXG5jb25zdCB1cGRhdGVQcm9maWxlSW5mbz1hc3luYyAobmV3VXNlckRhdGEsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3VwZGF0ZVByb2ZpbGVJbmZvXCIsey4uLm5ld1VzZXJEYXRhfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgY2hhbmdlUGFzc3dvcmQ9YXN5bmMgKHBhc3N3b3JkQ2hhbmdlLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9jaGFuZ2VQYXNzd29yZFwiLHsuLi5wYXNzd29yZENoYW5nZX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IHNlYXJjaEFjY291bnRUb0ZvcmdldFBhc3N3b3JkPWFzeW5jIChpZGVudGl0eSk9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvc2VhcmNoQWNjb3VudFRvRm9yZ2V0UGFzc3dvcmRcIix7Li4uaWRlbnRpdHl9KTtcclxufVxyXG5jb25zdCByZXNldFBhc3N3b3JkQXBpPWFzeW5jIChkYXRhUmVzZXRQYXNzd29yZCk9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvcmVzZXRQYXNzd29yZFwiLHsuLi5kYXRhUmVzZXRQYXNzd29yZH0pO1xyXG59XHJcbmNvbnN0IFNldE5ld1Bhc3N3b3JkQXBpPWFzeW5jIChuZXdQYXNzd29yZEFuZFRva2VuQW5kVGVsT3JFbWFpbCk9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvU2V0TmV3UGFzc3dvcmRcIix7Li4ubmV3UGFzc3dvcmRBbmRUb2tlbkFuZFRlbE9yRW1haWx9KTtcclxufVxyXG5jb25zdCB1cGRhdGVFbWFpbFNlbmRDb2RlPWFzeW5jIChlbWFpbCx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvdXBkYXRlRW1haWxTZW5kQ29kZVwiLHtlbWFpbDplbWFpbH0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZUVtYWlsQXBpPWFzeW5jKGVtYWlsLGNvZGUsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3VwZGF0ZUVtYWlsXCIse2VtYWlsOmVtYWlsLGNvZGU6Y29kZX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcblxyXG5jb25zdCBnZXRyYW5kb21Vc2Vyc0FwaT1hc3luYyh0b2tlbixyYW5kb211c2Vycyk9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvZ2V0cmFuZG9tVXNlcnNcIix7Li4ucmFuZG9tdXNlcnN9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBzZWFyY2hVc2VyTmFtZUFwaT1hc3luYyhzZWFyY2hVc2VyTmFtZSx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvU2VhcmNoVXNlckJ5VXNlck5hbWVcIix7c2VhcmNoVXNlck5hbWU6c2VhcmNoVXNlck5hbWV9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGdldFByaXZhY3k9YXN5bmModG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2dldFByaXZhY3lcIix7fSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgdXBkYXRlUHJpdmFjeT1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci91cGRhdGVQcml2YWN5XCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5leHBvcnQge3VwZGF0ZVByaXZhY3ksZ2V0UHJpdmFjeSxzZWFyY2hVc2VyTmFtZUFwaSxnZXRyYW5kb21Vc2Vyc0FwaSx1cGRhdGVFbWFpbEFwaSx1cGRhdGVFbWFpbFNlbmRDb2RlLFNldE5ld1Bhc3N3b3JkQXBpLHJlc2V0UGFzc3dvcmRBcGksc2VhcmNoQWNjb3VudFRvRm9yZ2V0UGFzc3dvcmQsY2hhbmdlUGFzc3dvcmQgLHVwZGF0ZVByb2ZpbGVJbmZvLExvZ2luICxyZW1vdmVUb2tlbiwgUmVnaXN0ZXIsTG9naW5GYWNlYm9vayxHZXRVc2VyRGF0YSxDaGFuZ2VQcm9maWxlSW1hZ2UsR2V0T3RoZXJVc2Vyc0RhdGEscmVTZW5kVmVyaWZpY2F0aW9uQ29kZSxhY3RpdmVBY2NvdW50fVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzZXR0aW5nc19jb250YWluZXJfXzFBdVg0XCIsXG5cdFwic2V0dGluZ3NDb250YWluZXJcIjogXCJzZXR0aW5nc19zZXR0aW5nc0NvbnRhaW5lcl9fMWFFRnlcIixcblx0XCJzaWRlTmF2QmFyXCI6IFwic2V0dGluZ3Nfc2lkZU5hdkJhcl9fM19obFJcIixcblx0XCJwcm9maWxlU2V0dGluZ3NcIjogXCJzZXR0aW5nc19wcm9maWxlU2V0dGluZ3NfXzNuYmxzXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1waG9uZS1pbnB1dC0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJhaW5ib3ctY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==