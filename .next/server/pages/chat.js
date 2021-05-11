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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/chat.js");
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

/***/ "./node_modules/emoji-mart/css/emoji-mart.css":
/*!****************************************************!*\
  !*** ./node_modules/emoji-mart/css/emoji-mart.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/chat.module.scss */ "./styles/chat.module.scss");
/* harmony import */ var _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navBar/NavBar */ "./components/navBar/NavBar.js");
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emoji-mart */ "emoji-mart");
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emoji_mart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emoji-mart/css/emoji-mart.css */ "./node_modules/emoji-mart/css/emoji-mart.css");
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user */ "./services/user.js");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/chat */ "./services/chat.js");
/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/socketContext */ "./context/socketContext.js");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/userContext */ "./context/userContext.js");

var _jsxFileName = "F:\\AHKI\\pages\\chat.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const chat = props => {
  const [closeOrOpenEmojiPickerState, setcloseOrOpenEmojiPickerState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [EmojiContainerHeight, setEmojiContainerHeight] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(9); //responsive handler

  const [listOfUsers, setListOfUsers] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [currentUserToChatWith, setCurrentUserToChatWith] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    currentImageUrl: undefined,
    userName: undefined,
    _id: undefined
  });
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [currentChats, setCurrentChats] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const messagesComp = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  const [socket, setSocket] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_socketContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const [skip, setSkip] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(() => 0);
  const [isWritingState, setIsWritingState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [chatColor, setChatColor] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    colorone: "#1876f3",
    colortwo: "#e4e6eb"
  });
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (user._id != undefined && user._id.length > 2) Object(_services_chat__WEBPACK_IMPORTED_MODULE_7__["getUserWhoChatWith"])({}, props.token).then(result => {
      let newUserWhoChatWith = result.data.data.map(e => {
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
      Promise.all(newUserWhoChatWith).then(newarray => {
        setListOfUsers([...newarray]);
      });
    }).catch(e => console.log(e.message));
  }, [user]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (currentUserToChatWith._id != undefined) {
      Object(_services_chat__WEBPACK_IMPORTED_MODULE_7__["getMessagesOfCurrentconversation"])({
        secondUser: currentUserToChatWith._id,
        skip: 0
      }, props.token).then(data => {
        setCurrentChats([...data.data.data.reverse()]);
        messagesComp.current.scrollTop = messagesComp.current.scrollHeight + messagesComp.current.clientHeight;
      }).catch(error => {
        console.log(error);
      });
      socket.emit("vu", {
        state: true,
        otherUserId: currentUserToChatWith._id
      });
    }
  }, [currentUserToChatWith]);

  const addEmoji = e => {
    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach(el => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMessage(el => {
      return el + emoji;
    });
  };

  const closeOrOpenEmojiPicker = () => {
    setcloseOrOpenEmojiPickerState(e => !e);
  };

  const searchForUser = e => {
    Object(_services_user__WEBPACK_IMPORTED_MODULE_6__["searchUserNameApi"])(e.target.value, props.token).then(result => {
      if (result.data.data != undefined) {
        setListOfUsers(e => {
          return [...result.data.data];
        });
      }
    });
  };

  const getUserdataFn = currentUserData => {
    setCurrentUserToChatWith(currentUserData);
  };

  const sendMessage = () => {
    if (message.length > 0 && currentUserToChatWith._id != undefined) {
      Object(_services_chat__WEBPACK_IMPORTED_MODULE_7__["addMessage"])({
        receiver: currentUserToChatWith._id,
        message: message,
        FirstTime: currentChats.length
      }, props.token).then(data => {
        setCurrentChats(e => {
          let r = Math.random().toString(36).substring(7);
          return [...e, {
            users: [user._id],
            message: message,
            _id: r
          }];
        });
        messagesComp.current.scrollTop = messagesComp.current.scrollHeight + messagesComp.current.clientHeight;
        socket.emit("sendMessageFromUserToUser", {
          otherUserId: currentUserToChatWith._id,
          text: message,
          senderId: user._id
        });
        setMessage("");
      }).catch(error => {
        console.log(error);
      });
    }
  };

  const messageHandler = e => {
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
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    async function chatHandler(data) {
      let audio = new Audio("./msgSound.mp3");
      audio.play();
      setIsWritingState(false);
      socket.emit("vu", {
        state: true,
        otherUserId: currentUserToChatWith._id
      });
      /*if(vu==true){
          
          socket.emit("vu",{state:true,otherUserId:currentUserToChatWith._id})
      }*/

      let ListOfUser = await listOfUsers.map(e => {
        if (data.senderId == e._id && currentUserToChatWith._id != e._id) {
          e.notSeenMessageNumber = e.notSeenMessageNumber + 1;
          return Promise.resolve(e);
        } else {
          return Promise.resolve(e);
        }
      });
      Promise.all(ListOfUser).then(data => {
        setListOfUsers(data);
      });

      if (data.senderId == currentUserToChatWith._id) {
        setCurrentChats(e => {
          let r = Math.random().toString(36).substring(7);
          return [...e, {
            users: [data.senderId],
            message: data.text,
            _id: r
          }];
        });
        messagesComp.current.scrollTop = messagesComp.current.scrollHeight + messagesComp.current.clientHeight;
      } else {}
    }

    function isWriting(data) {
      if (data.userWhoReciveWriting == user._id && data.senderid == currentUserToChatWith._id) {
        setIsWritingState(data.isWriting);
      }
    }

    const setvu = data => {
      if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.yourMessageVu).length != 0) {
        for (let i = currentChats.length - 1; i > 0; i--) {
          if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.yourMessageVu)[i] != undefined) {
            if (document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.yourMessageVu)[i].childNodes[1].style.color != "rgb(24, 118, 243)") {
              document.getElementsByClassName(_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.yourMessageVu)[i].childNodes[1].style.color = "rgb(24, 118, 243)";
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

    return () => {
      if (socket != undefined && socket != null) {
        socket.off('getMessageFromUserToUser', chatHandler);
        socket.off("isWritingState", isWriting);
        socket.off("setvu", setvu);
      }
    };
  });

  const scrollfn = e => {
    //if( e.target.scrollTop === (e.target.scrollHeight - e.target.offsetHeight)){
    if (e.target.scrollTop === 0) {
      setSkip(e => e + 20);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    Object(_services_chat__WEBPACK_IMPORTED_MODULE_7__["getMessagesOfCurrentconversation"])({
      secondUser: currentUserToChatWith._id,
      skip: skip
    }, props.token).then(data => {
      setCurrentChats(e => [...data.data.data.reverse(), ...e]);
    }).catch(error => {
      console.log(error);
    });
  }, [skip]);

  const getNewColor = color => {
    setChatColor(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        colorone: color
      });
    });
  };

  const setColorOfChatFn = colorOfChatFromDataBase => {
    setChatColor(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        colorone: colorOfChatFromDataBase
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navBar_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      token: props.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.chatAndRandomOnlineUserContaner,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UserContaner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "contacts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContacs,
          children: listOfUsers.map(e => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Users, {
            setColorOfChat: setColorOfChatFn,
            getUserdata: getUserdataFn,
            userData: e
          }, e._id, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 45
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bottom,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.searchContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputcss,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: e => searchForUser(e),
                type: "text",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 96
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Search users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 172
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 165
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 64
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.chat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Messages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.chatContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.headerOfChatuserNameAndName,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userImageContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: currentUserToChatWith.currentImageUrl || "/avatar.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 71
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userName,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: currentUserToChatWith.userName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 61
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 29
            }, undefined), isWritingState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.isWritingContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ldsellipsis,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 64
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 75
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 86
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 97
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 46
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changeColorContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ColorPicker, {
                receiver: currentUserToChatWith._id,
                token: props.token,
                getNewColorfn: getNewColor,
                chatColor: chatColor
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 73
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onScroll: e => scrollfn(e),
            ref: messagesComp,
            className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.messages,
            children: currentChats.map(e => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.oneMessage,
                children: e.users[0] == currentUserToChatWith._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.messageText,
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : "false",
                  style: {
                    "--i": "0%",
                    float: "left",
                    backgroundColor: "#e4e6eb",
                    color: "black"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: e.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 228
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 37
                }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: `${_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.messageText} ${_styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.yourMessageVu} `,
                  "text-data": e.date != undefined ? e.date.slice(0, 10) + " " + e.date.slice(11, 16) : "false",
                  style: {
                    "--i": "-100%",
                    float: "right",
                    backgroundColor: chatColor.colorone,
                    color: "white"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: e.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 272
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: e.seen == true ? {
                      color: "#1876f3"
                    } : {
                      color: "black"
                    },
                    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.seen,
                    children: "\u2714"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 290
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 37
                }, undefined)
              }, e._id, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 40
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sendMessage,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: e => e.preventDefault(),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputcss,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  value: message,
                  onChange: e => messageHandler(e),
                  type: "text",
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 95
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 189
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 182
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 63
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btns,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.openOrCloseEmojiPicker,
                onClick: () => closeOrOpenEmojiPicker(),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.emojiLogo,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_4__["Emoji"], {
                    emoji: {
                      id: 'smiling_face_with_3_hearts',
                      skin: 3
                    },
                    size: 16
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 58
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 25
                }, undefined), closeOrOpenEmojiPickerState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.emojiPickerContainer,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(emoji_mart__WEBPACK_IMPORTED_MODULE_4__["Picker"], {
                    perLine: EmojiContainerHeight,
                    onSelect: e => addEmoji(e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 99
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 55
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 25
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnsend,
                onClick: () => sendMessage(),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sendMessageBtn,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SentSvg, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 145
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 105
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 211,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (chat);
async function getServerSideProps({
  req,
  res
}) {
  return req.cookies.token ? {
    props: {
      token: req.cookies.token
    }
  } : {
    props: {
      token: false
    }
  };
}

const SentSvg = () => {
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
        lineNumber: 275,
        columnNumber: 107
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 291
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 397
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 518
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 69
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 9
  }, undefined);
};

const Users = props => {
  const [notSeenMessageNumberlocal, setNotSeenMessageNumberlocal] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.userData.notSeenMessageNumber);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setNotSeenMessageNumberlocal(props.userData.notSeenMessageNumber);
  }, [props.userData.notSeenMessageNumber]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userContainer,
      onClick: () => {
        props.getUserdata(props.userData), setNotSeenMessageNumberlocal(0), props.setColorOfChat(props.userData.color);
      },
      children: [notSeenMessageNumberlocal != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.notSeenMessageNumbe,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: notSeenMessageNumberlocal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 91
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 48
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imgContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.userData.currentImageUrl || "/avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 54
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userName,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.userData.userName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 50
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 14
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 9
  }, undefined);
};

const ColorPicker = props => {
  const [openColorPicker, setOpenColorPicker] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const changePrimaryColor = color => {
    props.getNewColorfn(color);
    Object(_services_chat__WEBPACK_IMPORTED_MODULE_7__["updateColorChat"])({
      newColor: color,
      receiver: props.receiver
    }, props.token);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: () => setOpenColorPicker(e => !e),
    className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.chatColor,
    style: {
      backgroundColor: props.chatColor.colorone
    },
    children: openColorPicker && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.colorPicker,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#ff1744"),
        style: {
          backgroundColor: "#ff1744"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#f50057"),
        style: {
          backgroundColor: "#f50057"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#3d5afe"),
        style: {
          backgroundColor: "#3d5afe"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#76ff03"),
        style: {
          backgroundColor: "#76ff03"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#c6ff00"),
        style: {
          backgroundColor: "#c6ff00"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#ff3d00"),
        style: {
          backgroundColor: "#ff3d00"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#651fff"),
        style: {
          backgroundColor: "#651fff"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#ffea00"),
        style: {
          backgroundColor: "#ffea00"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#f50057"),
        style: {
          backgroundColor: "#f50057"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#ff1744"),
        style: {
          backgroundColor: "#ff1744"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#1de9b6"),
        style: {
          backgroundColor: "#1de9b6"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color,
        onClick: () => changePrimaryColor("#03a9f4"),
        style: {
          backgroundColor: "#03a9f4"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 27
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./services/chat.js":
/*!**************************!*\
  !*** ./services/chat.js ***!
  \**************************/
/*! exports provided: updateColorChat, getUnreadUsersChatsNumber, addMessage, getMessagesOfCurrentconversation, getUserWhoChatWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateColorChat", function() { return updateColorChat; });
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

const updateColorChat = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__["default"].post("/chat/updateColorChat", _objectSpread({}, data), {
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

/***/ "./styles/chat.module.scss":
/*!*********************************!*\
  !*** ./styles/chat.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "chat_container__3ZHmO",
	"chatAndRandomOnlineUserContaner": "chat_chatAndRandomOnlineUserContaner__bY7tB",
	"UserContaner": "chat_UserContaner__31eCg",
	"listContacs": "chat_listContacs__16iTn",
	"bottom": "chat_bottom__3CU3k",
	"searchContainer": "chat_searchContainer__2w1wg",
	"inputcss": "chat_inputcss__3AjM4",
	"header": "chat_header__1EszN",
	"chat": "chat_chat__N51MX",
	"chatContainer": "chat_chatContainer__3BkyH",
	"headerOfChatuserNameAndName": "chat_headerOfChatuserNameAndName__2LqfD",
	"userImageContainer": "chat_userImageContainer__2ymDj",
	"userName": "chat_userName__37SK5",
	"messages": "chat_messages__2kX26",
	"oneMessage": "chat_oneMessage__1A4yV",
	"messageText": "chat_messageText__3cXj_",
	"sendMessage": "chat_sendMessage__2c-k6",
	"inputContainer": "chat_inputContainer__uedp2",
	"btns": "chat_btns__2y6XH",
	"sendMessageBtn": "chat_sendMessageBtn__21vJx",
	"openOrCloseEmojiPicker": "chat_openOrCloseEmojiPicker__1m39t",
	"emojiPickerContainer": "chat_emojiPickerContainer__gmNZL",
	"emojiLogo": "chat_emojiLogo__4KSTL",
	"btnsend": "chat_btnsend__a1iAT",
	"userContainer": "chat_userContainer__13jMh",
	"imgContainer": "chat_imgContainer__IpHHZ",
	"FollowAndUnfollowContainer": "chat_FollowAndUnfollowContainer__3Ew5y",
	"notSeenMessageNumbe": "chat_notSeenMessageNumbe__2SBtr",
	"isWritingContainer": "chat_isWritingContainer__e6yTb",
	"ldsellipsis": "chat_ldsellipsis__113dY",
	"ldsellipsis1": "chat_ldsellipsis1__1oeKY",
	"ldsellipsis2": "chat_ldsellipsis2__wi3pK",
	"ldsellipsis3": "chat_ldsellipsis3__KW1Sl",
	"seen": "chat_seen__2sLob",
	"Style": "chat_Style__q-4t3",
	"yourMessageVu": "chat_yourMessageVu__TwFQ2",
	"changeColorContainer": "chat_changeColorContainer__2OoQT",
	"chatColor": "chat_chatColor__a5hxO",
	"colorPicker": "chat_colorPicker__3s1ZE",
	"color": "chat_color__3deXf"
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

/***/ "emoji-mart":
/*!*****************************!*\
  !*** external "emoji-mart" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emoji-mart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hhbmdlTGFuZ3VhZ2UvY2hhbmdlTGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFuZ2VMYW5ndWFnZS9jaGFuZ2VMYW5ndWFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZhY2Vib29rTG9nSW4vZmFjZWJvb2tMb2dJbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZhY2Vib29rTG9nSW4vZmFjZWJvb2tMb2dJbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luaXRMYW5ndWFnZS9pbml0TGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbFNpbmdJblNpbmdVcC9Nb2RhbFNpbmdJblNpbmdVcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsU2luZ0luU2luZ1VwL01vZGFsU2luZ0luU2luZ1VwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWxTaW5nSW5TaW5nVXAvc2luZ0luL3NpbmdJbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsU2luZ0luU2luZ1VwL3NpbmdVcC9zaW5nVXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2QmFyL05hdkJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9wVXBNZXNzYWdlL3BvcFVwTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BvcFVwTWVzc2FnZS9wb3BVcE1lc3NhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlTWVudS9wcm9maWxlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGVNZW51L3Byb2ZpbGVNZW51Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoVXNlci9zZWFyY2hVc2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoVXNlci9zZWFyY2hVc2VyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmVyaWZ5QWNjb3VudC92ZXJpZnlBY2NvdW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmVyaWZ5QWNjb3VudC92ZXJpZnlBY2NvdW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBpSXNMb2FkaW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2xhbmd1YWdlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3NvY2tldENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC91c2VyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9mb2xsb3dpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3JlZnJlc2hBY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9jaGF0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1vamktbWFydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGhvbmUtaW5wdXQtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJhaW5ib3ctY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImNoYW5nZUxhbmd1YWdlIiwib3BlbiIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiZGlzcGxheUxhbmciLCJzZXREaXNwbGF5IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInVzZUNvbnRleHQiLCJMYW5ndWFnZUNvbnRleHQiLCJvcGVuTGFuZyIsImUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaW5pdExhbmd1YWdlIiwiZ2V0SXRlbSIsIlJlbW92ZUNoYW5nZUxhbmciLCJTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiY2xvc2VMYW5nQ2hhbmdlIiwic3ZnQ29udGFpbmVyIiwiY2hhbmdlTGFuZyIsIkZhY2Vib29rTG9naW5GbiIsInJlc3BvbnNlRmFjZWJvb2siLCJMb2dpbkZhY2Vib29rIiwiZXhwaXJlc0luIiwiYWNjZXNzVG9rZW4iLCJpZCIsInVybEltYWdlIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJ0aGVuIiwicmVzIiwic3RhdGUiLCJhbGVydCIsIm1lc3NhZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwicmVmX3Rva2VuIiwibG9jYXRpb24iLCJyZWxvYWQiLCJwcm9wcyIsIm9wZW5PcmNsb3NlTW9kYWwiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJDb250YWluZXIiLCJsYW5nIiwicG9zdEFub255bW91c2x5IiwiVXBsb2FkcGhvdG93aXRoeW91cnBvc3QiLCJGb3Jnb3RQYXNzd29yZCIsImNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZSIsInRlbGVwaG9uZW9yZW1haWwiLCJjYW5jZWwiLCJ1cGRhdGUiLCJwdXR5b3VybmV3RW1haWwiLCJVcGRhdGVZb3VyRW1haWwiLCJDb25mZXJtYXRpb25Db2RlIiwiWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZSIsInB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmUiLCJVcGRhdGVZb3VyUGhvbmVOdW1iZXIiLCJuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aCIsIkl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdSIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJBY2NvdW50U2V0dGluZyIsIlVwZGF0ZVlvdXJQYXNzd29yZCIsImJpcnRoZGF5IiwidG9waWMiLCJ0b2RheVRvcGljIiwiRnJpZW5kc1Bvc3RzIiwiRm9sbG93aW5nIiwiRm9sbG93ZXJzIiwiVXBkYXRlUHJvZmlsZSIsIllvdXJQb3N0cyIsIkxpa2VzIiwiUG9zdHMiLCJyYWRpb2JveERlbHRlQWNjb3VudCIsIkRlbGV0ZUFjY291bnRIZWFkZXIiLCJzYXZlY2hhbmdlIiwiY2hhbmdlUGFzc3dvcmQiLCJEZWFjdGl2YXRpbmciLCJEZWxldGluZyIsInVzZXJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJiaW9ncmFwaHkiLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXkiLCJtb250aCIsInllYXIiLCJjb25maXJtcGFzc3dvcmQiLCJwbGFjZWhvbGRlcklucHV0IiwiVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3N0X0hvdmVyIiwicG9zdF9Bbm9ueW1vdXNseV9ob3ZlciIsInNpZ25pbiIsInNpZ251cCIsIkFscmVhZHlIYXZlQWNjb3VudCIsIllvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvIiwidmVyaWZpY2F0aW9uY29kZSIsInNlbmQiLCJVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc190SG92ZXIiLCJhcmFiaWMiLCJNb2RhbFNpbmdJblNpbmdVcCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInRleHQiLCJzaG93U2luZ0luX09yX1NIb3dTaW5nVXAiLCJzZXRTaG93U2luZ0luX09yX1NIb3dTaW5nVXAiLCJ2ZXJpZmllZEFjY291bnRNb2RhbCIsInNldHZlcmlmaWVkQWNjb3VudE1vZGFsIiwidXNlcklkIiwic2V0VXNlcklkIiwiZm5zZXRTaG93U2luZ0luX09yX1NIb3dTaW5nVXAiLCJjbG9zZU1vZGFsIiwiY2xvc2VQb3BVcCIsInNldEVycm9yTWVzc2FnZWZuIiwib3BlblZlcmlmaWVBY2NvdW50TW9kYWxmbiIsInVzZXJpZCIsIlN0eWxlIiwiY29udHJhaW5lciIsIndhdmVDb250YWluZXIiLCJjaGFuZ2VsYW5nIiwiZm9ybUNvbnRhaW5lciIsImNsb3NlYnRuIiwiZm9ybXNDb250YWluZXIiLCJzaW5nSW4iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJBcGlJc0xvYWRpbmdDb250ZXh0IiwibG9naW5TdGF0ZSIsInNldExvZ2luU3RhdGUiLCJMb2dpbiIsInNldEVycm9yTWVzc2FnZVByb3BzIiwidmVyaWZpZWQiLCJvcGVuVmVyaWZpZUFjY291bnRNb2RhbCIsInNldExvZ2luRGF0YSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImxlZnQiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJwYWdlSGVhZGVyIiwiZGVzY3JpcHRpb25IZWFkZXIiLCJpbnB1dENvbnRhaW5lciIsImlucHV0IiwibGFiZWxzcGFuIiwiYnRuIiwiY2xpY2tIZXJlIiwiZm5zaG93U2luZ0luT3JTaW5nVXAiLCJmb3JnZXRQYXNzd29yZCIsInNpbmdVcCIsImNvbmZpcm1SZWdpc3RlckZvcm0iLCJzZXRDb25maXJtUmVnaXN0ZXJGb3JtIiwiZXJyb3JEYXRhIiwic2V0RXJyb3JEYXRhIiwidXNlck5hbWUiLCJtc2ciLCJyZWdpc3RlclN0YXRlIiwic2V0cmVnaXN0ZXJTdGF0ZSIsInRlbCIsImJpcnRoRGF5IiwiZGlhbENvZGUiLCJjaGFuZ2VFbWFpbE9yVGVsaW5pdCIsInNldENoYW5nZUVtYWlsT3JUZWwiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsIlJlZ2lzdGVyIiwidW5kZWZpbmVkIiwiZm9ybVZhbGlkYXRpb24iLCJjb25maXJtUGFzc3dvcmQiLCJiaXJkaERheSIsInZhbGlkYXRlRW1haWwiLCJyZSIsInRlc3QiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsInN0eWxlIiwiYm9yZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0Iiwib25DaGFuZ2VIYW5kbGVyUmVnaXN0ZXJQaG9uZSIsImNvdW50cnkiLCJ1c2VyTmFtZV9QYXNzd29yZF9IYW5kbGVyIiwiY2hhbmdlRW1haWxPclRlbCIsInRlbE9yRW1haWwiLCJsYWJlbEVtYWlsT3JQYXNzd29yZCIsInJlcXVpcmVkIiwiYXV0b0ZvY3VzIiwiQ29uZmlybVBhc3N3b3JkIiwiYWdlIiwib3BhY2l0eSIsImN1cnNvciIsIk5hdkJhciIsIm1vZGFsU2luZ0luU2luZ1VwIiwic2V0TW9kYWxTaW5nSW5TaW5nVXAiLCJoZWlnaHRBbmRXaWR0aE9mV2luZG93Iiwic2V0SGVpZ2h0QW5kV2lkdGhPZldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwib3Blbk1lbnVQcm9maWxlU3RhdGUiLCJzZXRPcGVuTWVudVByb2ZpbGUiLCJkaXN5cGxheVNlYXJjaCIsInNldERpc3BsYXlTZWFyY2giLCJ1c2VyIiwic2V0VXNlciIsIlVzZXJDb250ZXh0IiwibnVtYmVyT2ZDaGF0c05vdFJlYWQiLCJzZXROdW1iZXJPZkNoYXRzTm90UmVhZCIsInNvY2tldCIsInNldFNvY2tldCIsInNvY2tldENvbnRleHQiLCJwb3BVcFVzZXIiLCJzZXRQb3BVcFVzZXIiLCJwb3BVcE5vdGlmIiwic2V0cG9wVXBOb3RpZiIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYXRIYW5kbGVyIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJwYXRobmFtZSIsIkdldE90aGVyVXNlcnNEYXRhIiwic2VuZGVySWQiLCJyZXN1bHQiLCJlcnJvciIsIm5vdGlmSGFuZGxlciIsIm5vdGlmIiwib24iLCJvZmYiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJnZXRVbnJlYWRVc2Vyc0NoYXRzTnVtYmVyIiwib3Blbk9yQ2xvc2VOb3RpZiIsInNldE9wZW5PckNsb3NlTm90aWYiLCJvcGVuTWVudVByb2ZpbGUiLCJjbG9zZU1lbnVQcm9maWxlIiwib3Blbk1lbnVQcm9maWxlb25DbGljayIsIk9wZW5zZWFyY2hVc2VycyIsIlNlYXJjaFVzZXJGbiIsImNsb3NlU2VhcmNoVXNlciIsIm9wZW5PckNsb3NlTm90aWZpY2F0aW9ucyIsIm5hdiIsIkxvZ28iLCJTZWFyY2giLCJmbGV4SXRlbXMiLCJzZWFyY2hJbWciLCJhdXRoZW50aWNhdGVkIiwibm90aWZpY2F0aW9uIiwibnVtYmVyT2ZOb3RpZmljYXRpb25Ob3RSZWFkbG9jYWwiLCJwcm9maWxlIiwibmF2QmFySW1hZ2VDb250YWluZXIiLCJjdXJyZW50SW1hZ2VVcmwiLCJOb25hdXRoZW50aWNhdGVkIiwiQ2hhdCIsIm51bWJlck9mQ2hhdHNOb3RSZWFkbG9jYWwiLCJ1c2VyV2hvU2VudFlvdUltYWdlIiwic2V0VXNlcldob1NlbnRZb3VJbWFnZSIsImNoYXRTdmciLCJzaG93VGVtSW1hZ2VPZlVzZXJXaG9TZW50WW91TWVzc2FnZSIsIm5vdGlmaWNhdGlvbnMiLCJzZXRub3RpZmljYXRpb25zIiwiTG9hZGluZyIsInNldExvYWRpbmciLCJnZXRub3RpZmljYXRpb25zIiwiZGVuaWVkZm9sbG93Zm4iLCJ0aGVPdGhlclBlcnNvbklkIiwiaWRDb21wb25lbnQiLCJkZW5pZWRmb2xsb3ciLCJmaWx0ZXIiLCJfaWQiLCJhY2NlcHRmb2xsb3dmbiIsImFjY2VwdGZvbGxvdyIsImhlYWRlciIsIm1hcCIsInR5cGUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJmcm9tIiwiYnRucyIsImxkc3JpbmciLCJwb3BVcE1lc3NhZ2UiLCJoYW5kbGVDbG9zZSIsImZuY2xvc2UiLCJlcnJvclRleHQiLCJvcGVuUG9wVXAiLCJlcnJvckJ0bnMiLCJyZW1vdmVDb29raWUiLCJyZW1vdmVUb2tlbiIsInByb2ZpbGVNZW51IiwiaG92ZXJIYW5kbGVyIiwibGlua3NDb250YWluZXJzIiwic2VhcmNoVXNlciIsImxpc3RPZlVzZXJzIiwic2V0TGlzdE9mVXNlcnMiLCJzZWFyY2hVc2VyTmFtZSIsInNlYXJjaFVzZXJOYW1lQXBpIiwiVXNlcnMiLCJ1c2VyRGF0YSIsInVzZXJDb250YWluZXIiLCJpbWdDb250YWluZXIiLCJ2ZXJpZnlBY2NvdW50IiwiY29kZSIsInNldENvZGUiLCJyZVNlbmRDb2RlIiwicmVTZW5kVmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvbkNvZGUiLCJ2ZXJpZnlVc2VyQWNjb3VudCIsImFjdGl2ZUFjY291bnQiLCJwdXNoIiwicXVlcnkiLCJyZWZyZWNoIiwiY29kZUhhbmRsZXIiLCJDb250YWluZXJWZXJpZmljYXRpb24iLCJWZXJpZmljYXRpb25IZWFkZXIiLCJkaXNjcnB0aW9uIiwiUmVzZW5kY29kZSIsImFwaUlzTG9hZGluZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXhpb3NBcGlJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImRlZmF1bHRzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsIm9yaWdpbmFsUmVxdWVzdCIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJwb3N0IiwiX3JldHJ5IiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwiZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lIiwiQXV0aG9yaXphdGlvbiIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3IiwicCIsInNyY1NldCIsInNpemVzIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyYyIsImkiLCJwYXJzZUludCIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwibWFya0Fzc2V0RXJyb3IiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImNoYXQiLCJjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUiLCJzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUiLCJFbW9qaUNvbnRhaW5lckhlaWdodCIsInNldEVtb2ppQ29udGFpbmVySGVpZ2h0IiwiY3VycmVudFVzZXJUb0NoYXRXaXRoIiwic2V0Q3VycmVudFVzZXJUb0NoYXRXaXRoIiwic2V0TWVzc2FnZSIsImN1cnJlbnRDaGF0cyIsInNldEN1cnJlbnRDaGF0cyIsIm1lc3NhZ2VzQ29tcCIsInVzZXJDb250ZXh0Iiwic2tpcCIsInNldFNraXAiLCJpc1dyaXRpbmdTdGF0ZSIsInNldElzV3JpdGluZ1N0YXRlIiwiY2hhdENvbG9yIiwic2V0Q2hhdENvbG9yIiwiY29sb3JvbmUiLCJjb2xvcnR3byIsImdldFVzZXJXaG9DaGF0V2l0aCIsIm5ld1VzZXJXaG9DaGF0V2l0aCIsImZpcnN0VXNlciIsInNlY291bmRVc2VyIiwiY29sb3IiLCJub3RTZWVuTWVzc2FnZU51bWJlciIsIm5ld2FycmF5IiwiZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb24iLCJzZWNvbmRVc2VyIiwicmV2ZXJzZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm90aGVyVXNlcklkIiwiYWRkRW1vamkiLCJzeW0iLCJ1bmlmaWVkIiwic3BsaXQiLCJjb2Rlc0FycmF5IiwiZm9yRWFjaCIsImVtb2ppIiwiZnJvbUNvZGVQb2ludCIsImNsb3NlT3JPcGVuRW1vamlQaWNrZXIiLCJzZWFyY2hGb3JVc2VyIiwiZ2V0VXNlcmRhdGFGbiIsImN1cnJlbnRVc2VyRGF0YSIsInNlbmRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInJlY2VpdmVyIiwiRmlyc3RUaW1lIiwiciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwidXNlcnMiLCJtZXNzYWdlSGFuZGxlciIsImlzV3JpdGluZyIsInNlbmRlcmlkIiwiTGlzdE9mVXNlciIsInVzZXJXaG9SZWNpdmVXcml0aW5nIiwic2V0dnUiLCJ5b3VyTWVzc2FnZVZ1IiwiY2hpbGROb2RlcyIsInNjcm9sbGZuIiwiZ2V0TmV3Q29sb3IiLCJzZXRDb2xvck9mQ2hhdEZuIiwiY29sb3JPZkNoYXRGcm9tRGF0YUJhc2UiLCJjaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyIiwiVXNlckNvbnRhbmVyIiwibGlzdENvbnRhY3MiLCJzZWFyY2hDb250YWluZXIiLCJpbnB1dGNzcyIsImNoYXRDb250YWluZXIiLCJoZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWUiLCJpc1dyaXRpbmdDb250YWluZXIiLCJsZHNlbGxpcHNpcyIsImNoYW5nZUNvbG9yQ29udGFpbmVyIiwibWVzc2FnZXMiLCJvbmVNZXNzYWdlIiwibWVzc2FnZVRleHQiLCJkYXRlIiwic2xpY2UiLCJmbG9hdCIsImJhY2tncm91bmRDb2xvciIsInNlZW4iLCJvcGVuT3JDbG9zZUVtb2ppUGlja2VyIiwiZW1vamlMb2dvIiwic2tpbiIsImVtb2ppUGlja2VyQ29udGFpbmVyIiwiYnRuc2VuZCIsInNlbmRNZXNzYWdlQnRuIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwiY29va2llcyIsIlNlbnRTdmciLCJub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIiwic2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCIsImdldFVzZXJkYXRhIiwic2V0Q29sb3JPZkNoYXQiLCJub3RTZWVuTWVzc2FnZU51bWJlIiwiQ29sb3JQaWNrZXIiLCJvcGVuQ29sb3JQaWNrZXIiLCJzZXRPcGVuQ29sb3JQaWNrZXIiLCJjaGFuZ2VQcmltYXJ5Q29sb3IiLCJnZXROZXdDb2xvcmZuIiwidXBkYXRlQ29sb3JDaGF0IiwibmV3Q29sb3IiLCJjb2xvclBpY2tlciIsImdldEZvbGxvd2luZ09mVXNlciIsInVuZm9sbG93VXNlckFwaSIsImZvbGxvd2luZ2lkIiwiZm9sbG93VXNlckFwaSIsInVzZXJUb0ZvbGxvdyIsImNoZWNrSWZmb2xsb3dBcGkiLCJyZW1vdmVGb2xsb3dQZW5kaW5nIiwiaWROb3RpZiIsImNvdW50Rm9sbG93aW5nT2ZVc2VyIiwiUmVmcmVzaEFjY2Vzc1Rva2VuIiwiR2V0VXNlckRhdGEiLCJDaGFuZ2VQcm9maWxlSW1hZ2UiLCJmaWxlIiwidXBkYXRlUHJvZmlsZUluZm8iLCJuZXdVc2VyRGF0YSIsInBhc3N3b3JkQ2hhbmdlIiwic2VhcmNoQWNjb3VudFRvRm9yZ2V0UGFzc3dvcmQiLCJpZGVudGl0eSIsInJlc2V0UGFzc3dvcmRBcGkiLCJkYXRhUmVzZXRQYXNzd29yZCIsIlNldE5ld1Bhc3N3b3JkQXBpIiwibmV3UGFzc3dvcmRBbmRUb2tlbkFuZFRlbE9yRW1haWwiLCJ1cGRhdGVFbWFpbFNlbmRDb2RlIiwidXBkYXRlRW1haWxBcGkiLCJnZXRyYW5kb21Vc2Vyc0FwaSIsInJhbmRvbXVzZXJzIiwiZ2V0UHJpdmFjeSIsInVwZGF0ZVByaXZhY3kiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFDQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGF0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vY2hhbmdlTGFuZ3VhZ2UubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCBpbml0TGFuZ3VhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbml0TGFuZ3VhZ2UvaW5pdExhbmd1YWdlJ1xyXG5jb25zdCBjaGFuZ2VMYW5ndWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSAvLyBvcGVuIGJveCB0byBjaG9pY2UgbGFuZ1xyXG4gICAgY29uc3QgW2Rpc3BsYXlMYW5nLCBzZXREaXNwbGF5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSAvLyBoaWRlIGNoYW5nZSBsYW5nIGJveCBpZiB0cnVlXHJcbiAgICBjb25zdCBbbGFuZ3VhZ2UgLCBzZXRMYW5ndWFnZV09UmVhY3QudXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpXHJcblxyXG4gICAgY29uc3Qgb3BlbkxhbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihlID0+ICFlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ3VhZ2VcIiwgZSlcclxuICAgICAgICBzZXRMYW5ndWFnZShpbml0TGFuZ3VhZ2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyl8fFwiZW5nXCIpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgUmVtb3ZlQ2hhbmdlTGFuZyA9ICgpID0+IHtcclxuICAgICAgICBzZXREaXNwbGF5KHRydWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfSBzdHlsZT17ZGlzcGxheUxhbmcgPyB7IGRpc3BsYXk6IFwibm9uZVwiIH0gOiB7fX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2xvc2VMYW5nQ2hhbmdlfSBvbkNsaWNrPXsoKSA9PiBSZW1vdmVDaGFuZ2VMYW5nKCl9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9wZW5MYW5nKCl9IGNsYXNzTmFtZT17U3R5bGVzLnN2Z0NvbnRhaW5lcn0+PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwibGFuZ3VhZ2VcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE1Mi4xIDIzNi4yYy0zLjUtMTIuMS03LjgtMzMuMi03LjgtMzMuMmgtLjVzLTQuMyAyMS4xLTcuOCAzMy4ybC0xMS4xIDM3LjVIMTYzek02MTYgOTZIMzM2djMyMGgyODBjMTMuMyAwIDI0LTEwLjcgMjQtMjRWMTIwYzAtMTMuMy0xMC43LTI0LTI0LTI0em0tMjQgMTIwYzAgNi42LTUuNCAxMi0xMiAxMmgtMTEuNGMtNi45IDIzLjYtMjEuNyA0Ny40LTQyLjcgNjkuOSA4LjQgNi40IDE3LjEgMTIuNSAyNi4xIDE4IDUuNSAzLjQgNy4zIDEwLjUgNC4xIDE2LjJsLTcuOSAxMy45Yy0zLjQgNS45LTEwLjkgNy44LTE2LjcgNC4zLTEyLjYtNy44LTI0LjUtMTYuMS0zNS40LTI0LjktMTAuOSA4LjctMjIuNyAxNy4xLTM1LjQgMjQuOS01LjggMy41LTEzLjMgMS42LTE2LjctNC4zbC03LjktMTMuOWMtMy4yLTUuNi0xLjQtMTIuOCA0LjItMTYuMiA5LjMtNS43IDE4LTExLjcgMjYuMS0xOC03LjktOC40LTE0LjktMTctMjEtMjUuNy00LTUuNy0yLjItMTMuNiAzLjctMTcuMWw2LjUtMy45IDcuMy00LjNjNS40LTMuMiAxMi40LTEuNyAxNiAzLjQgNSA3IDEwLjggMTQgMTcuNCAyMC45IDEzLjUtMTQuMiAyMy44LTI4LjkgMzAtNDMuMkg0MTJjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMTZjMC02LjYgNS40LTEyIDEyLTEyaDY0di0xNmMwLTYuNiA1LjQtMTIgMTItMTJoMTZjNi42IDAgMTIgNS40IDEyIDEydjE2aDY0YzYuNiAwIDEyIDUuNCAxMiAxMnpNMCAxMjB2MjcyYzAgMTMuMyAxMC43IDI0IDI0IDI0aDI4MFY5NkgyNGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6bTU4LjkgMjE2LjFMMTE2LjQgMTY3YzEuNy00LjkgNi4yLTguMSAxMS40LTguMWgzMi41YzUuMSAwIDkuNyAzLjMgMTEuNCA4LjFsNTcuNSAxNjkuMWMyLjYgNy44LTMuMSAxNS45LTExLjQgMTUuOWgtMjIuOWExMiAxMiAwIDAgMS0xMS41LTguNmwtOS40LTMxLjloLTYwLjJsLTkuMSAzMS44Yy0xLjUgNS4xLTYuMiA4LjctMTEuNSA4LjdINzAuM2MtOC4yIDAtMTQtOC4xLTExLjQtMTUuOXpcIj48L3BhdGg+PC9zdmc+PC9kaXY+XHJcbiAgICAgICAgICAgIHtvcGVuICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbmdlTGFuZ30+XHJcbiAgICAgICAgICAgICAgICA8aDIgb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UoXCJhcmFiaWNcIil9Pti52LHYqNmK2Kk8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IGNoYW5nZUxhbmd1YWdlKFwiZW5nXCIpfT5lbmdsaXNoPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZShcImZyXCIpfT5mcmFuY2U8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYW5nZUxhbmd1YWdlXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNoYW5nZUxhbmd1YWdlX2NvbnRhaW5lcl9fMkE5MWZcIixcblx0XCJjbG9zZUxhbmdDaGFuZ2VcIjogXCJjaGFuZ2VMYW5ndWFnZV9jbG9zZUxhbmdDaGFuZ2VfXzJlVVlTXCIsXG5cdFwic3ZnQ29udGFpbmVyXCI6IFwiY2hhbmdlTGFuZ3VhZ2Vfc3ZnQ29udGFpbmVyX18xTExaZ1wiLFxuXHRcImNoYW5nZUxhbmdcIjogXCJjaGFuZ2VMYW5ndWFnZV9jaGFuZ2VMYW5nX18zREZVZFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbic7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9mYWNlYm9va0xvZ0luLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBMb2dpbkZhY2Vib29rIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcidcclxuXHJcbmNvbnN0IEZhY2Vib29rTG9naW5GbiA9ICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZUZhY2Vib29rID0gKGUpID0+IHtcclxuICAgIExvZ2luRmFjZWJvb2soeyBleHBpcmVzSW46IGUuZXhwaXJlc0luLCBhY2Nlc3NUb2tlbjogZS5hY2Nlc3NUb2tlbiwgaWQ6IGUuaWQsIHVybEltYWdlOiBlLnBpY3R1cmUuZGF0YS51cmwgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEuc3RhdGUgPT0gZmFsc2UpIHtcclxuICAgICAgICBhbGVydChyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZldGNoKFwiYXBpL3NldFRva2VuXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LCBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRva2VuOiByZXMuZGF0YS50b2tlbiB9KSB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZl90b2tlblwiLCByZXMuZGF0YS5yZWZfdG9rZW4pXHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIHByb3BzLm9wZW5PcmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKGUgPT4geyBjb25zb2xlLmxvZyhlKSB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICB7PEZhY2Vib29rTG9naW4gYXBwSWQ9XCI0MjgxNTgxMzE4MjAwOTJcIiBhdXRvTG9hZD17ZmFsc2V9IGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va0xvZ2luRm4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250YWluZXJcIjogXCJmYWNlYm9va0xvZ0luX0NvbnRhaW5lcl9fMlJZWFFcIlxufTtcbiIsIlxyXG5jb25zdCBpbml0TGFuZ3VhZ2U9KGUpPT57XHJcbiAgICB2YXIgbGFuZz17fVxyXG4gICAgc3dpdGNoKGUpIHtcclxuICAgICAgICBjYXNlIFwiZW5nXCI6XHJcbiAgICAgICAgICAgIGxhbmc9e1xyXG4gICAgICAgICAgICAgICAgcG9zdEFub255bW91c2x5OlwicG9zdCBBbm9ueW1vdXNseVwiLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkcGhvdG93aXRoeW91cnBvc3Q6XCJVcGxvYWQgcGhvdG8gd2l0aCB5b3VyIHBvc3RcIixcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkOlwiRm9yZ290IFBhc3N3b3JkP1wiLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlYXByb2ZpbGVmb2xsb3dvdGhlcmFjY291bnRzdGFsa2Fib3V0eW91cm93bmV4cGVyaWVuY2VhbmRtb3JlOlwiY3JlYXRlIGEgcHJvZmlsZSBmb2xsb3cgb3RoZXIgYWNjb3VudHMgdGFsayBhYm91dCB5b3VyIG93biBleHBlcmllbmNlIGFuZCBtb3JlXCIsXHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVvcmVtYWlsOlwidGVsZXBob25lIG9yIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6XCJjYW5jZWxcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTpcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld0VtYWlsOlwicHV0IHlvdXIgbmV3IEVtYWlsIGhlcmVcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJFbWFpbDpcIlVwZGF0ZSBZb3VyIEVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBDb25mZXJtYXRpb25Db2RlOlwiQ29uZmVybWF0aW9uIENvZGVcIixcclxuICAgICAgICAgICAgICAgIFlvdVdpbGxyZWNpdmVjb25mZXJtYXRpb25Db2RlcHV0aXRoZXJlQW5kQ2xpY2tVcGRhdGU6XCJZb3UgV2lsbCByZWNpdmUgY29uZmVybWF0aW9uIENvZGUgcHV0IGl0IGhlcmUgQW5kIENsaWNrIFVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld3Bob25lbnVtYmVyaGVyZTpcInB1dCB5b3VyIG5ldyBwaG9uZSBudW1iZXIgaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBob25lTnVtYmVyOlwiVXBkYXRlIFlvdXIgUGhvbmVOdW1iZXJcIixcclxuICAgICAgICAgICAgICAgIG5ld3Bhc3N3b3JkbmVlZHRvYmVhdGxlYXN0bGVuZ3RoOlwibmV3IHBhc3N3b3JkIG5lZWQgdG8gYmUgYXQgbGVhc3QgOCBsZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIEl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdTpcIkl0J3MgYSBnb29kIGlkZWEgdG8gdXNlIGEgc3Ryb25nIHBhc3N3b3JkIHRoYXQgeW91J3JlIG5vdCB1c2luZyBlbHNld2hlcmVcIixcclxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkOlwibmV3IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBvbGRQYXNzd29yZDpcIm9sZCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgQWNjb3VudFNldHRpbmc6XCJBY2NvdW50IFNldHRpbmdcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQYXNzd29yZDpcIlVwZGF0ZSBZb3VyIFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTpcImJpcnRoIGRheVwiLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6JycsXHJcbiAgICAgICAgICAgICAgICB0b2RheVRvcGljOid0b2RheSBUb3BpYycsXHJcbiAgICAgICAgICAgICAgICBGcmllbmRzUG9zdHM6J2ZyaWVuZHMgcHVibGljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93aW5nOidmb2xsb3dpbmcnLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJzOidGb2xsb3dlcnMnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvZmlsZTonVXBkYXRlIFByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgWW91clBvc3RzOidZb3VyIFBvc3RzJyxcclxuICAgICAgICAgICAgICAgIExpa2VzOidMaWtlcycsXHJcbiAgICAgICAgICAgICAgICBQb3N0czonUG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9ib3hEZWx0ZUFjY291bnQ6J3JhZGlvYm94RGVsdGVBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgIERlbGV0ZUFjY291bnRIZWFkZXI6J0RlbGV0ZUFjY291bnRIZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWNoYW5nZTonc2F2ZWNoYW5nZScsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXNzd29yZDonY2hhbmdlUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgRGVhY3RpdmF0aW5nOidEZWFjdGl2YXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRpbmc6J0RlbGV0aW5nJyxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOid1c2VybmFtZScsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6J2ZpcnN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTonbGFzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgYmlvZ3JhcGh5OidiaW9ncmFwaHknLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6J3Bob25lJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOidlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDoncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgZGF5OidkYXknLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6J21vbnRoJyxcclxuICAgICAgICAgICAgICAgIHllYXI6J3llYXInLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybXBhc3N3b3JkOidjb25maXJtcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJJbnB1dDonc2F5IHNvbXRoaW5nJyxcclxuICAgICAgICAgICAgICAgIFVwbG9hZF9waG90b193aXRoX3lvdXJfcG9zdF9Ib3ZlcjonVXBsb2FkIHBob3RvIHdpdGggeW91ciBwb3N0JyxcclxuICAgICAgICAgICAgICAgIHBvc3RfQW5vbnltb3VzbHlfaG92ZXI6J3Bvc3RfQW5vbnltb3VzbHknLFxyXG4gICAgICAgICAgICAgICAgc2lnbmluOidzaWduIGluJyxcclxuICAgICAgICAgICAgICAgIHNpZ251cDonc2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5SGF2ZUFjY291bnQ6J0FscmVhZHkgSGF2ZSBBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgIFlvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvOidZb3UgZG9udCBoYXZlIGFjY291bnQgQ2xpY2sgaGVyZSB0bycsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25jb2RlOlwidmVyaWZpY2F0aW9uIGNvZGVcIixcclxuICAgICAgICAgICAgICAgIHNlbmQ6XCJzZW5kXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImZyXCI6XHJcbiAgICAgICAgICAgIGxhbmc9e1xyXG4gICAgICAgICAgICAgICAgcG9zdEFub255bW91c2x5OlwicHVibGllciBkZSBtYW5pw6hyZSBhbm9ueW1lXCIsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRwaG90b3dpdGh5b3VycG9zdDpcIlTDqWzDqWNoYXJnZXIgdW5lIHBob3RvIGF2ZWMgdm90cmUgbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmQ6XCJNb3QgZGUgcGFzc2Ugb3VibGnDqT9cIixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZTpcImNyw6llciB1biBwcm9maWwgc3VpdnJlIGQnYXV0cmVzIGNvbXB0ZXMgcGFybGVyIGRlIHZvdHJlIHByb3ByZSBleHDDqXJpZW5jZSBldCBwbHVzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVvcmVtYWlsOlwidMOpbMOpcGhvbmUgb3UgZW1haWxcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDpcIkFubnVsZXJcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTpcIm1ldHRyZSDDoCBqb3VyXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3RW1haWw6XCJtZXR0ZXogdm90cmUgbm91dmVhdSBjb3VycmllbCBpY2lcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJFbWFpbDpcIk1ldHRleiDDoCBqb3VyIHZvdHJlIGUtbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgQ29uZmVybWF0aW9uQ29kZTpcIkNvZGUgZGUgY29uZmVybWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBZb3VXaWxscmVjaXZlY29uZmVybWF0aW9uQ29kZXB1dGl0aGVyZUFuZENsaWNrVXBkYXRlOlwiVm91cyByZWNldnJleiBsZSBjb2RlIGRlIGNvbmZlcm1hdGlvbiwgbWV0dGV6LWxlIGljaSBldCBjbGlxdWV6IHN1ciBNZXR0cmUgw6Agam91clwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld3Bob25lbnVtYmVyaGVyZTpcIm1ldHRleiB2b3RyZSBub3V2ZWF1IG51bcOpcm8gZGUgdMOpbMOpcGhvbmUgaWNpXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGhvbmVOdW1iZXI6XCJNZXR0ZXogw6Agam91ciB2b3RyZSBudW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aDpcImxlIG5vdXZlYXUgbW90IGRlIHBhc3NlIGRvaXQgYXZvaXIgdW5lIGxvbmd1ZXVyIGQnYXUgbW9pbnMgOFwiLFxyXG4gICAgICAgICAgICAgICAgSXRzYWdvb2RpZGVhdG91c2Vhc3Ryb25ncGFzc3dvcmR0aGF0eW91OlwiQydlc3QgdW5lIGJvbm5lIGlkw6llIGQndXRpbGlzZXIgdW4gbW90IGRlIHBhc3NlIGZvcnQgcXVlIHZvdXMgbid1dGlsaXNleiBwYXMgYWlsbGV1cnNcIixcclxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkOlwibm91dmVhdSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkOlwiYW5jaWVuIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgQWNjb3VudFNldHRpbmc6XCJQYXJhbcOodHJlIGR1IGNvbXB0ZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBhc3N3b3JkOlwiTWV0dGV6IMOgIGpvdXIgdm90cmUgbW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTpcImRhdGUgZCdhbm5pdmVyc2FpcmV5XCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzonJyxcclxuICAgICAgICAgICAgICAgIHRvZGF5VG9waWM6XCJTdWpldCBkJ2F1am91cmQgJ2h1aVwiLFxyXG4gICAgICAgICAgICAgICAgRnJpZW5kc1Bvc3RzOlwicHVibGljYXRpb24gZCdhbWlzXCIsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dpbmc6J3N1aXZhbnRlJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VyczonU3VpdmV1cnMnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvZmlsZTonTWV0dHJlIMOgIGpvdXIgbGUgcHJvZmlsJyxcclxuICAgICAgICAgICAgICAgIFlvdXJQb3N0czonVm9zIHB1YmxpY2F0aW9ucycsXHJcbiAgICAgICAgICAgICAgICBMaWtlczpcImonYWltZXNcIixcclxuICAgICAgICAgICAgICAgIFBvc3RzOidkZXMgcG9zdGVzJyxcclxuICAgICAgICAgICAgICAgIHJhZGlvYm94RGVsdGVBY2NvdW50OidTdXBwcmVzc2lvbicsXHJcbiAgICAgICAgICAgICAgICBEZWxldGVBY2NvdW50SGVhZGVyOidTdXBwcmltZXIgbGUgY29tcHRlJyxcclxuICAgICAgICAgICAgICAgIHNhdmVjaGFuZ2U6J3NhdXZlZ2FyZGVyIGxlcyBtb2RpZmljYXRpb25zJyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkOidjaGFuZ2VyIGxlIG1vdCBkZSBwYXNzZScsXHJcbiAgICAgICAgICAgICAgICBEZWFjdGl2YXRpbmc6J0NlY2kgZXN0IHBlcm1hbmVudC5Mb3JzcXVlIHZvdXMgc3VwcHJpbWV6IHZvdHJlIGNvbXB0ZSwgdm91cyBuZSBwb3VycmV6IHBhcyByw6ljdXDDqXJlciBsZSBjb250ZW51IG91IGxlcyBpbmZvcm1hdGlvbnMgcXVlIHZvdXMgYXZleiBwYXJ0YWfDqXMgc3VyIGwgYXBwbGljYXRpb24uJyxcclxuICAgICAgICAgICAgICAgIERlbGV0aW5nOidzdXBwcmltZScsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTpcIk5vbSBkJ3V0aWxpc2F0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6J1Byw6lub20nLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6J25vbSBkZSBmYW1pbGxlJyxcclxuICAgICAgICAgICAgICAgIGJpb2dyYXBoeTonQmlvZ3JhcGhpZScsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTondMOpbMOpcGhvbmUnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6J2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOidtb3QgZGUgcGFzc2UnLFxyXG4gICAgICAgICAgICAgICAgZGF5Oidqb3VyJyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOidtb250aCcsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOid5ZWFyJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1wYXNzd29yZDonQ29uZmlybWV6IGxlIG1vdCBkZSBwYXNzZScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcklucHV0OifDoCBxdW9pIHBlbnNlcy10dScsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc190SG92ZXI6J1TDqWzDqWNoYXJnZXIgdW5lIHBob3RvIGF2ZWMgdm90cmUgbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICBwb3N0X0Fub255bW91c2x5X2hvdmVyOidwdWJsaWVyIGRlIG1hbmnDqHJlIGFub255bWUnLFxyXG4gICAgICAgICAgICAgICAgc2lnbmluOlwicydpZGVudGlmaWVyXCIsXHJcbiAgICAgICAgICAgICAgICBzaWdudXA6XCJTJ2luc2NyaXJlXCIsXHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5SGF2ZUFjY291bnQ6J1ZvdXMgYXZleiBkw6lqw6AgdW4gY29tcHRlJyxcclxuICAgICAgICAgICAgICAgIFlvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvOlwiVm91cyBuJ2F2ZXogcGFzIGRlIGNvbXB0ZSBDbGlxdWV6IGljaSBwb3VyXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25jb2RlOlwiY29kZSBkZSB2w6lyaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBzZW5kOlwiZW52b3llclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImFyYWJpY1wiOlxyXG4gICAgICAgICAgICBsYW5nPXtcclxuICAgICAgICAgICAgICAgIHBvc3RBbm9ueW1vdXNseTpcItmG2LTYsSDZhdis2YfZiNmEXCIsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRwaG90b3dpdGh5b3VycG9zdDpcItiq2K3ZhdmK2YQg2KfZhNi12YjYsdipINmF2Lkg2YXZhti02YjYsdmDXCIsXHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZDpcItmH2YQg2YbYs9mK2Kog2YPZhNmF2Kkg2KfZhNiz2LE/XCIsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmU6XCLYpdmG2LTYp9ihINit2LPYp9ioICDYqtin2KjYuSDYrdiz2KfYqNin2Kog2KPYrtix2Ykg2KrYrdiv2Ksg2LnZhiDYqtis2LHYqNiq2YMg2KfZhNiu2KfYtdipINmI2KfZhNmF2LLZitivXCIsXHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVvcmVtYWlsOlwi2KfZhNmH2KfYqtmBINij2Ygg2KfZhNio2LHZitivINin2YTYpdmE2YPYqtix2YjZhtmKXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6XCLYpdmE2LrYp9ihXCIsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6XCLYqtit2K/ZitirXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3RW1haWw6XCLYtti5INio2LHZitiv2YMg2KfZhNil2YTZg9iq2LHZiNmG2Yog2KfZhNis2K/ZitivINmH2YbYp1wiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91ckVtYWlsOlwi2YLZhSDYqNiq2K3Yr9mK2Ksg2KjYsdmK2K/ZgyDYp9mE2KXZhNmD2KrYsdmI2YbZilwiLFxyXG4gICAgICAgICAgICAgICAgQ29uZmVybWF0aW9uQ29kZTpcItmD2YjYryDYp9mE2KrYo9mD2YrYr1wiLFxyXG4gICAgICAgICAgICAgICAgWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZTpcItiz2YjZgSDYqtiq2YTZgtmJINix2YXYsiDYp9mE2KrYo9mD2YrYryDZiNi22LnZhyDZh9mG2Kcg2YjYp9mG2YLYsSDZgdmI2YIg2KrYrdiv2YrYq1wiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld3Bob25lbnVtYmVyaGVyZTpcIti22Lkg2LHZgtmFINmH2KfYqtmB2YMg2KfZhNis2K/ZitivINmH2YbYp1wiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBob25lTnVtYmVyOlwi2YLZhSDYqNiq2K3Yr9mK2Ksg2LHZgtmFINmH2KfYqtmB2YNcIixcclxuICAgICAgICAgICAgICAgIG5ld3Bhc3N3b3JkbmVlZHRvYmVhdGxlYXN0bGVuZ3RoOlwi2YrYrNioINij2YTYpyDZitmC2YQg2LfZiNmEINmD2YTZhdipINin2YTZhdix2YjYsSDYp9mE2KzYr9mK2K/YqSDYudmGIDhcIixcclxuICAgICAgICAgICAgICAgIEl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdTpcItmF2YYg2KfZhNis2YrYryDYp9iz2KrYrtiv2KfZhSDZg9mE2YXYqSDZhdix2YjYsSDZgtmI2YrYqSDZhNinINiq2LPYqtiu2K/ZhdmH2Kcg2YHZiiDYo9mKINmF2YPYp9mGINii2K7YsVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ6XCLZg9mE2YXYqSDYp9mE2LPYsSDYp9mE2KzYr9mK2K/YqVwiLFxyXG4gICAgICAgICAgICAgICAgb2xkUGFzc3dvcmQ6XCLZg9mE2YXYqSDYp9mE2YXYsdmI2LEg2KfZhNmC2K/ZitmF2KlcIixcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5Olwi2LnZitivINin2YTZhdmK2YTYp9ivXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NvdW50U2V0dGluZzpcItil2LnYr9in2K/Yp9iqINin2YTYrdiz2KfYqFwiLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6JycsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGFzc3dvcmQ6XCLZgtmFINio2KrYrdiv2YrYqyDZg9mE2YXYqSDYp9mE2YXYsdmI2LEg2KfZhNiu2KfYtdipINio2YNcIixcclxuICAgICAgICAgICAgICAgIGFyYWJpYzpcItmF2YjYttmI2Lkg2KfZhNmK2YjZhVwiLFxyXG4gICAgICAgICAgICAgICAgdG9kYXlUb3BpYzon2YbYtNixINin2YTYo9i12K/Zgtin2KEnLFxyXG4gICAgICAgICAgICAgICAgRnJpZW5kc1Bvc3RzOifYp9mE2KPYtdiv2YLYp9ihJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2luZzon2YXYqtin2KjYudmH2YUnLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJzOifYp9mE2YXYqtin2KjYudmK2YYnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvZmlsZTon2KrYrdiv2YrYqyDYp9mE2KjZitmG2KfYqicsXHJcbiAgICAgICAgICAgICAgICBZb3VyUG9zdHM6J9mF2YbYtNmI2LHYp9iq2YMnLFxyXG4gICAgICAgICAgICAgICAgTGlrZXM6J9in2LnYrNio2KrYp9mDJyxcclxuICAgICAgICAgICAgICAgIFBvc3RzOifYp9mE2YXYtNin2LHZg9in2KonLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9ib3hEZWx0ZUFjY291bnQ6J9it2LDZgScsXHJcbiAgICAgICAgICAgICAgICBEZWxldGVBY2NvdW50SGVhZGVyOifYrdiw2YEg2KfZhNit2LPYp9ioJyxcclxuICAgICAgICAgICAgICAgIHNhdmVjaGFuZ2U6J9it2YHYuCDYp9mE2KrYutmK2YrYsScsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXNzd29yZDon2KrYutmK2LEg2YPZhNmF2Kkg2KfZhNiz2LEnLFxyXG4gICAgICAgICAgICAgICAgRGVhY3RpdmF0aW5nOlwi2KfYs9mFINin2YTYtNmH2LHYqdmH2LDYpyDYr9in2KbZhSDYjCDYudmG2K/ZhdinINiq2K3YsNmBINit2LPYp9io2YMg2Iwg2YTZhiDYqtiq2YXZg9mGINmF2YYg2KfYs9iq2LHYr9in2K8g2KfZhNmF2K3YqtmI2Ykg2KPZiCDYp9mE2YXYudmE2YjZhdin2Kog2KfZhNiq2Yog2LTYp9ix2YPYqtmH2Kcg2LnZhNmJINin2YTYqti32KjZitmCLlwiLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRpbmc6J9i02LfYqCcsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTon2KfYs9mFINin2YTYtNmH2LHYqScsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6J9in2YTYp9iz2YUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6J9in2YTZhNmC2KgnLFxyXG4gICAgICAgICAgICAgICAgYmlvZ3JhcGh5OifYs9mK2LHYqSDYtNiu2LXZitipJyxcclxuICAgICAgICAgICAgICAgIHBob25lOifZh9in2KrZgScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDon2KfZhNio2LHZitivJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOlwi2YPZhNmF2Ycg2KfZhNiz2LFcIixcclxuICAgICAgICAgICAgICAgIGRheTon2YrZiNmFJyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOifYp9mE2LTZh9ixJyxcclxuICAgICAgICAgICAgICAgIHllYXI6J9in2YTYudin2YUnLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybXBhc3N3b3JkOifYqtin2YPZitivINmD2YTZhdipINin2YTZhdix2YjYsScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcklucHV0OifYqNmF2KfYsNinINiq2YHZg9ixJyxcclxuICAgICAgICAgICAgICAgIFVwbG9hZF9waG90b193aXRoX3lvdXJfcG9zX3RIb3Zlcjon2KrYrdmF2YrZhCDYp9mE2LXZiNix2Kkg2YXYuSDZhdmG2LTZiNix2YMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdF9Bbm9ueW1vdXNseV9ob3Zlcjon2YbYtNixINmF2KzZh9mI2YQnLFxyXG4gICAgICAgICAgICAgICAgc2lnbmluOifYqtiz2KzZitmEINin2YTYr9iu2YjZhCcsXHJcbiAgICAgICAgICAgICAgICBzaWdudXA6J9in2LTYqtix2KfZgycsXHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5SGF2ZUFjY291bnQ6J9mE2K/ZitmDINit2LPYp9ioINio2KfZhNmB2LnZhCcsXHJcbiAgICAgICAgICAgICAgICBZb3Vkb250aGF2ZWFjY291bnRDbGlja2hlcmV0bzon2YTZitizINmE2K/ZitmDINit2LPYp9ioINin2YbZgtixINmH2YbYpycsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25jb2RlOlwi2LHZhdiyINin2YTYqtit2YLZglwiLFxyXG4gICAgICAgICAgICAgICAgc2VuZDpcItil2LHYs9in2YRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbGFuZz17XHJcbiAgICAgICAgICAgICAgICBwb3N0QW5vbnltb3VzbHk6XCJwb3N0IEFub255bW91c2x5XCIsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRwaG90b3dpdGh5b3VycG9zdDpcIlVwbG9hZCBwaG90byB3aXRoIHlvdXIgcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmQ6XCJGb3Jnb3QgUGFzc3dvcmQ/XCIsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmU6XCJjcmVhdGUgYSBwcm9maWxlIGZvbGxvdyBvdGhlciBhY2NvdW50cyB0YWxrIGFib3V0IHlvdXIgb3duIGV4cGVyaWVuY2UgYW5kIG1vcmVcIixcclxuICAgICAgICAgICAgICAgIHRlbGVwaG9uZW9yZW1haWw6XCJ0ZWxlcGhvbmUgb3IgZW1haWxcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDpcImNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOlwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3RW1haWw6XCJwdXQgeW91ciBuZXcgRW1haWwgaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91ckVtYWlsOlwiVXBkYXRlIFlvdXIgRW1haWxcIixcclxuICAgICAgICAgICAgICAgIENvbmZlcm1hdGlvbkNvZGU6XCJDb25mZXJtYXRpb24gQ29kZVwiLFxyXG4gICAgICAgICAgICAgICAgWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZTpcIllvdSBXaWxsIHJlY2l2ZSBjb25mZXJtYXRpb24gQ29kZSBwdXQgaXQgaGVyZSBBbmQgQ2xpY2sgVXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3cGhvbmVudW1iZXJoZXJlOlwicHV0IHlvdXIgbmV3IHBob25lIG51bWJlciBoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGhvbmVOdW1iZXI6XCJVcGRhdGUgWW91ciBQaG9uZU51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgbmV3cGFzc3dvcmRuZWVkdG9iZWF0bGVhc3RsZW5ndGg6XCJuZXcgcGFzc3dvcmQgbmVlZCB0byBiZSBhdCBsZWFzdCA4IGxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgSXRzYWdvb2RpZGVhdG91c2Vhc3Ryb25ncGFzc3dvcmR0aGF0eW91OlwiSXQncyBhIGdvb2QgaWRlYSB0byB1c2UgYSBzdHJvbmcgcGFzc3dvcmQgdGhhdCB5b3UncmUgbm90IHVzaW5nIGVsc2V3aGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ6XCJuZXcgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOicnLFxyXG4gICAgICAgICAgICAgICAgb2xkUGFzc3dvcmQ6XCJvbGQgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQYXNzd29yZDpcIlVwZGF0ZSBZb3VyIFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NvdW50U2V0dGluZzpcIkFjY291bnQgU2V0dGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6XCJiaXJ0aCBkYXlcIixcclxuICAgICAgICAgICAgICAgIHRvZGF5VG9waWM6J3RvZGF5IFRvcGljJyxcclxuICAgICAgICAgICAgICAgIEZyaWVuZHNQb3N0czonZnJpZW5kcyBwdWJsaWNhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dpbmc6J2ZvbGxvd2luZycsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlcnM6J0ZvbGxvd2VycycsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVQcm9maWxlOidVcGRhdGUgUHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBZb3VyUG9zdHM6J1lvdXIgUG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgTGlrZXM6J0xpa2VzJyxcclxuICAgICAgICAgICAgICAgIFBvc3RzOidQb3N0cycsXHJcbiAgICAgICAgICAgICAgICByYWRpb2JveERlbHRlQWNjb3VudDoncmFkaW9ib3hEZWx0ZUFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRlQWNjb3VudEhlYWRlcjonRGVsZXRlQWNjb3VudEhlYWRlcicsXHJcbiAgICAgICAgICAgICAgICBzYXZlY2hhbmdlOidzYXZlY2hhbmdlJyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkOidjaGFuZ2VQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBEZWFjdGl2YXRpbmc6J0RlYWN0aXZhdGluZycsXHJcbiAgICAgICAgICAgICAgICBEZWxldGluZzonRGVsZXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6J3VzZXJuYW1lJyxcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTonZmlyc3RuYW1lJyxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOidsYXN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICBiaW9ncmFwaHk6J2Jpb2dyYXBoeScsXHJcbiAgICAgICAgICAgICAgICBwaG9uZToncGhvbmUnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6J2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOidwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBkYXk6J2RheScsXHJcbiAgICAgICAgICAgICAgICBtb250aDonbW9udGgnLFxyXG4gICAgICAgICAgICAgICAgeWVhcjoneWVhcicsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6J2NvbmZpcm1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcklucHV0OidzYXkgU29tdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3N0X0hvdmVyOidVcGxvYWQgcGhvdG8gd2l0aCB5b3VyIHBvc3QnLFxyXG4gICAgICAgICAgICAgICAgcG9zdF9Bbm9ueW1vdXNseV9ob3ZlcjoncG9zdF9Bbm9ueW1vdXNseScsXHJcbiAgICAgICAgICAgICAgICBzaWduaW46J3NpZ24gaW4nLFxyXG4gICAgICAgICAgICAgICAgc2lnbnVwOidzaWduIHVwJyxcclxuICAgICAgICAgICAgICAgIEFscmVhZHlIYXZlQWNjb3VudDonQWxyZWFkeSBIYXZlIEFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgWW91ZG9udGhhdmVhY2NvdW50Q2xpY2toZXJldG86J1lvdSBkb250IGhhdmUgYWNjb3VudCBDbGljayBoZXJlIHRvJyxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbmNvZGU6XCJ2ZXJpZmljYXRpb24gY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgc2VuZDpcInNlbmRcIlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5pdExhbmd1YWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9Nb2RhbFNpbmdJblNpbmdVcC5tb2R1bGUuc2NzcydcclxuaW1wb3J0ICdyZWFjdC1waG9uZS1pbnB1dC0yL2xpYi9tYXRlcmlhbC5jc3MnXHJcbmltcG9ydCBQb3BVcE1lc3NhZ2UgZnJvbSAnLi4vcG9wVXBNZXNzYWdlL3BvcFVwTWVzc2FnZSdcclxuaW1wb3J0IFNpbmdJbiBmcm9tICcuL3NpbmdJbi9zaW5nSW4nXHJcbmltcG9ydCBTaW5nVXAgZnJvbSAnLi9zaW5nVXAvc2luZ1VwJ1xyXG5pbXBvcnQgVmVyaWZ5QWNjb3VudCBmcm9tICcuLi92ZXJpZnlBY2NvdW50L3ZlcmlmeUFjY291bnQnXHJcbmltcG9ydCBDaGFuZ2VMYW5ndWFnZSBmcm9tICcuLi9jaGFuZ2VMYW5ndWFnZS9jaGFuZ2VMYW5ndWFnZSdcclxuXHJcbmNvbnN0IE1vZGFsU2luZ0luU2luZ1VwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSxzZXRFcnJvck1lc3NhZ2VdPXVzZVN0YXRlKHtzdGF0ZTpmYWxzZSx0ZXh0OlwiXCJ9KS8vIHdoZW4gc3RhdGUgdHJ1ZSBzaG93ICBwb3AgdXAgXHJcbiAgY29uc3QgW3Nob3dTaW5nSW5fT3JfU0hvd1NpbmdVcCwgc2V0U2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwXSA9IHVzZVN0YXRlKHRydWUpLypjaGFuZ2UgYmV0d2VlbiBzaW5nIGluIGFuZCBzaW5nIHVwICovXHJcbiAgY29uc3QgW3ZlcmlmaWVkQWNjb3VudE1vZGFsLHNldHZlcmlmaWVkQWNjb3VudE1vZGFsXT11c2VTdGF0ZShmYWxzZSkvL3doZW4gdHJ5ZSBvcGVuIG1vZGFsIHRvIHB1dCB0aGUgY29kZVxyXG4gIGNvbnN0IFt1c2VySWQsc2V0VXNlcklkXT11c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IGZuc2V0U2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwPSgpPT57XHJcbiAgICBzZXRTaG93U2luZ0luX09yX1NIb3dTaW5nVXAoZT0+IWUpXHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlTW9kYWw9KCk9PntcclxuICAgIHByb3BzLm9wZW5PcmNsb3NlTW9kYWwoKVxyXG4gIH1cclxuICBjb25zdCBjbG9zZVBvcFVwPSgpPT57XHJcbiAgICBzZXRFcnJvck1lc3NhZ2Uoe3N0YXRlOmZhbHNlLHRleHQ6XCJcIn0pXHJcbiAgfVxyXG4gIGNvbnN0IHNldEVycm9yTWVzc2FnZWZuPShlKT0+e1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKHsuLi5lfSlcclxuICB9XHJcbiAgY29uc3Qgb3BlblZlcmlmaWVBY2NvdW50TW9kYWxmbj0odXNlcmlkKT0+e1xyXG4gICAgc2V0VXNlcklkKHVzZXJpZClcclxuICAgIHNldHZlcmlmaWVkQWNjb3VudE1vZGFsKGU9PiFlKVxyXG4gIH1cclxuICAvKioqdGVzdCAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udHJhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS53YXZlQ29udGFpbmVyfT5cclxuICAgICAgICB7LypzaG93U2luZ0luX09yX1NIb3dTaW5nVXAmJjxoMSBjbGFzc05hbWU9e1N0eWxlLmxvZ299Pk5PWlpMQTwvaDE+Ki99XHJcbnsgICAgIC8qPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDMyMFwiPlxyXG4gICAgICAgIDxwYXRoIGZpbGw9XCIjMTg3NmYzXCIgZmlsbC1vcGFjaXR5PVwiMVwiIGQ9XCJNMCwxMjhMNDgsMTE3LjNDOTYsMTA3LDE5Miw4NSwyODgsMTE3LjNDMzg0LDE0OSw0ODAsMjM1LDU3NiwyNjEuM0M2NzIsMjg4LDc2OCwyNTYsODY0LDIyOS4zQzk2MCwyMDMsMTA1NiwxODEsMTE1MiwxNDRDMTI0OCwxMDcsMTM0NCw1MywxMzkyLDI2LjdMMTQ0MCwwTDE0NDAsMzIwTDEzOTIsMzIwQzEzNDQsMzIwLDEyNDgsMzIwLDExNTIsMzIwQzEwNTYsMzIwLDk2MCwzMjAsODY0LDMyMEM3NjgsMzIwLDY3MiwzMjAsNTc2LDMyMEM0ODAsMzIwLDM4NCwzMjAsMjg4LDMyMEMxOTIsMzIwLDk2LDMyMCw0OCwzMjBMMCwzMjBaXCI+PC9wYXRoPlxyXG4gIDwvc3ZnPiovfVxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge2Vycm9yTWVzc2FnZS5zdGF0ZT09dHJ1ZSYmPFBvcFVwTWVzc2FnZSBmbmNsb3NlPXtjbG9zZVBvcFVwfSBvcGVuUG9wVXA9e2Vycm9yTWVzc2FnZX0+PC9Qb3BVcE1lc3NhZ2U+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhbmdlbGFuZ30+PENoYW5nZUxhbmd1YWdlPjwvQ2hhbmdlTGFuZ3VhZ2U+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5mb3JtQ29udGFpbmVyfT5cclxuICAgICAge3ZlcmlmaWVkQWNjb3VudE1vZGFsJiY8VmVyaWZ5QWNjb3VudCBzZXRFcnJvck1lc3NhZ2VQcm9wcz17c2V0RXJyb3JNZXNzYWdlZm59IHVzZXJJZD17dXNlcklkfT48L1ZlcmlmeUFjY291bnQ+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jbG9zZWJ0bn0gb25DbGljaz17KCk9PmNsb3NlTW9kYWwoKX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmZvcm1zQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxTaW5nSW4gb3BlblZlcmlmaWVBY2NvdW50TW9kYWw9e29wZW5WZXJpZmllQWNjb3VudE1vZGFsZm59IHNldEVycm9yTWVzc2FnZVByb3BzPXtzZXRFcnJvck1lc3NhZ2Vmbn1zaG93U2luZ0luX09yX1NIb3dTaW5nVXA9e3Nob3dTaW5nSW5fT3JfU0hvd1NpbmdVcH0gZm5zaG93U2luZ0luT3JTaW5nVXA9e2Zuc2V0U2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwfT48L1NpbmdJbj5cclxuICAgICAgICAgIDxTaW5nVXAgb3BlblZlcmlmaWVBY2NvdW50TW9kYWw9e29wZW5WZXJpZmllQWNjb3VudE1vZGFsZm59IHNldEVycm9yTWVzc2FnZVByb3BzPXtzZXRFcnJvck1lc3NhZ2Vmbn1zaG93U2luZ0luX09yX1NIb3dTaW5nVXA9e3Nob3dTaW5nSW5fT3JfU0hvd1NpbmdVcH0gZm5zaG93U2luZ0luT3JTaW5nVXA9e2Zuc2V0U2hvd1NpbmdJbl9Pcl9TSG93U2luZ1VwfT48L1NpbmdVcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNpbmdJblNpbmdVcFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4uL01vZGFsU2luZ0luU2luZ1VwLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0J1xyXG5pbXBvcnQgQXBpSXNMb2FkaW5nQ29udGV4dCBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2FwaUlzTG9hZGluZ0NvbnRleHQnXHJcbmltcG9ydCBGYWNlYm9va0xvZ0luIGZyb20gJy4uLy4uL2ZhY2Vib29rTG9nSW4vZmFjZWJvb2tMb2dJbidcclxuaW1wb3J0IHtMb2dpbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3Qgc2luZ0luID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSBSZWFjdC51c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dClcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlQ29udGV4dChBcGlJc0xvYWRpbmdDb250ZXh0KVxyXG4gIGNvbnN0IFtsb2dpblN0YXRlLHNldExvZ2luU3RhdGVdPVJlYWN0LnVzZVN0YXRlKHt9KVxyXG5cclxuICAgIGNvbnN0IHNpbmdJbj0oKT0+e1xyXG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICBMb2dpbihsb2dpblN0YXRlKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgaWYocmVzLmRhdGEuc3RhdGU9PWZhbHNlKXtcclxuICAgICAgICAgICAgcHJvcHMuc2V0RXJyb3JNZXNzYWdlUHJvcHMoe3N0YXRlOnRydWUsdGV4dDpyZXMuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgfWVsc2UgaWYocmVzLmRhdGEudmVyaWZpZWQ9PWZhbHNlKXtcclxuICAgICAgICAgICAgcHJvcHMub3BlblZlcmlmaWVBY2NvdW50TW9kYWwocmVzLmRhdGEudXNlcmlkKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3NldFRva2VuXCIse21ldGhvZDpcInBvc3RcIixoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxib2R5OkpTT04uc3RyaW5naWZ5KHt0b2tlbjpyZXMuZGF0YS50b2tlbn0pfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmX3Rva2VuXCIscmVzLmRhdGEucmVmX3Rva2VuKVxyXG4gICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGU9PntcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIHByb3BzLnNldEVycm9yTWVzc2FnZVByb3BzKHtzdGF0ZTp0cnVlLHRleHQ6ZS5tZXNzYWdlfSlcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNldExvZ2luRGF0YT0oZSk9PntcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgICAgICAgICBzZXRMb2dpblN0YXRlKGUgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uZSwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICAvL29uS2V5VXA9eyhlKT0+ZS50YXJnZXQudmFsdWU9ZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW15cXGRdLywnJyl9ICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNpbmdJbn0gc3R5bGU9e3Byb3BzLnNob3dTaW5nSW5fT3JfU0hvd1NpbmdVcCA/IHsgbGVmdDogJzAlJyB9IDogeyBsZWZ0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17U3R5bGUuZm9ybX0gb25TdWJtaXQ9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTt9fSAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnBhZ2VIZWFkZXJ9PjxoMj5Mb2cgaW4gdG8gTk9aWkxBPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZGVzY3JpcHRpb25IZWFkZXJ9PjxoMz57bGFuZ3VhZ2UuY3JlYXRlYXByb2ZpbGVmb2xsb3dvdGhlcmFjY291bnRzdGFsa2Fib3V0eW91cm93bmV4cGVyaWVuY2VhbmRtb3JlfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgcmVhZE9ubHk9e3RydWV9IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fS8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48aW5wdXQgICBvbkNoYW5nZT17KGUpPT5zZXRMb2dpbkRhdGEoZSl9ICBkZWZhdWx0VmFsdWU9e1wiXCJ9ICAgbmFtZT17XCJpZGVudGl0eVwifSAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e1N0eWxlLmlucHV0fSByZXF1aXJlZCAvPjxsYWJlbD48c3BhbiBjbGFzc05hbWU9e1N0eWxlLmxhYmVsc3Bhbn0+e2xhbmd1YWdlLnRlbGVwaG9uZW9yZW1haWx9PC9zcGFuPjwvbGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48aW5wdXQgICBvbkNoYW5nZT17KGUpPT5zZXRMb2dpbkRhdGEoZSl9ICBkZWZhdWx0VmFsdWU9e1wiXCJ9ICAgbmFtZT17XCJwYXNzd29yZFwifSAgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dH0gcmVxdWlyZWQgLz48bGFiZWw+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5sYWJlbHNwYW59PntsYW5ndWFnZS5wYXNzd29yZH08L3NwYW4+PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUuYnRufSBvbkNsaWNrPXsoKT0+c2luZ0luKCl9PntsYW5ndWFnZS5zaWduaW59PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZS5tZXNzYWdlfT57bGFuZ3VhZ2UuWW91ZG9udGhhdmVhY2NvdW50Q2xpY2toZXJldG99IDxzcGFuIGNsYXNzTmFtZT17U3R5bGUuY2xpY2tIZXJlfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5mbnNob3dTaW5nSW5PclNpbmdVcCgpfT57bGFuZ3VhZ2Uuc2lnbnVwfTwvc3Bhbj48YnIgLz4gPExpbmsgaHJlZj1cIi9mb3JnZXRQYXNzd29yZFwiPjxzcGFuIGNsYXNzTmFtZT17U3R5bGUuZm9yZ2V0UGFzc3dvcmR9PntsYW5ndWFnZS5Gb3Jnb3RQYXNzd29yZH08L3NwYW4+PC9MaW5rPjwvcD5cclxuICAgICAgICAgICAgICB7Lyo8RmFjZWJvb2tMb2dJbj48L0ZhY2Vib29rTG9nSW4+Ki99XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2luZ0luXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2xhbmd1YWdlQ29udGV4dCdcclxuaW1wb3J0IFBob25lSW5wdXQgZnJvbSAncmVhY3QtcGhvbmUtaW5wdXQtMidcclxuaW1wb3J0IHsgUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vTW9kYWxTaW5nSW5TaW5nVXAubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdyZWFjdC1yYWluYm93LWNvbXBvbmVudHMnO1xyXG5cclxuXHJcbmNvbnN0IHNpbmdVcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpXHJcbiAgY29uc3QgW2NvbmZpcm1SZWdpc3RlckZvcm0sIHNldENvbmZpcm1SZWdpc3RlckZvcm1dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLy9lbmFibGUgYW5kIGRpc2FibGUgc2luZyB1cCBidXR0b24gaWYgdGhlIGZyb20gaXMgbm90IGNvbXBsZXRlXHJcbiAgY29uc3QgW2Vycm9yRGF0YSwgc2V0RXJyb3JEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHsgdXNlck5hbWU6IHsgc3RhdGU6ICdmYWxzZScsIG1zZzogJycgfSwgcGFzc3dvcmQ6IHsgc3RhdGU6ICdmYWxzZScsIG1zZzogJycgfSAsZW1haWw6e3N0YXRlOidmYWxzZScsbXNnOicnfX0pLy9lcnJvciBtZXNzYWdlc1xyXG4gIGNvbnN0IFtyZWdpc3RlclN0YXRlLCBzZXRyZWdpc3RlclN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgdXNlck5hbWU6IFwiXCIsIHRlbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIGVtYWlsOiBcIlwiLCBiaXJ0aERheTogXCIyMDAwLTAxLTAxVDIzOjAwOjAwLjAwMFpcIiwgZGlhbENvZGU6IFwiXCIgfSkvL3VzZXIgcmVnaXN0ZXIgZGF0YVxyXG4gIGNvbnN0IFtjaGFuZ2VFbWFpbE9yVGVsaW5pdCwgc2V0Q2hhbmdlRW1haWxPclRlbF0gPSBSZWFjdC51c2VTdGF0ZShcImVtYWlsXCIpXHJcbiAgdmFyIHVzZXJOYW1lID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgdmFyIHBhc3N3b3JkID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdXNlck5hbWUuY3VycmVudC52YWx1ZT1cIlwiXHJcbiAgICAgIHBhc3N3b3JkLmN1cnJlbnQudmFsdWU9XCJcIlxyXG4gICAgfSwgMTAwMCk7IFxyXG4gIH0sW10pXHJcbiAgY29uc3Qgc2luZ1VwID0gKCkgPT4ge1xyXG4gICAgaWYgKGNoYW5nZUVtYWlsT3JUZWxpbml0ID09IFwiZW1haWxcIikge1xyXG4gICAgICBkZWxldGUgcmVnaXN0ZXJTdGF0ZVtcInRlbFwiXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHJlZ2lzdGVyU3RhdGVbXCJlbWFpbFwiXVxyXG4gICAgfVxyXG4gICAgUmVnaXN0ZXIocmVnaXN0ZXJTdGF0ZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZihyZXMuZGF0YT09dW5kZWZpbmVkKXtcclxuICAgICAgICBcclxuICAgICAgfWVsc2UgaWYgKHJlcy5kYXRhLnN0YXRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgcHJvcHMuc2V0RXJyb3JNZXNzYWdlUHJvcHMoeyBzdGF0ZTogdHJ1ZSwgdGV4dDogcmVzLmRhdGEubWVzc2FnZSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb3BzLm9wZW5WZXJpZmllQWNjb3VudE1vZGFsKHJlcy5kYXRhLnVzZXJpZClcclxuICAgICAgICBwcm9wcy5mbnNob3dTaW5nSW5PclNpbmdVcCgpXHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBwcm9wcy5zZXRFcnJvck1lc3NhZ2VQcm9wcyh7IHN0YXRlOiB0cnVlLCB0ZXh0OiBlLm1lc3NhZ2UgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICB9XHJcbiAgY29uc3QgZm9ybVZhbGlkYXRpb24gPSAoZSkgPT4ge1xyXG4gICAgbGV0IHRlbD1cIlwiXHJcbiAgICBsZXQgZW1haWw9XCJcIlxyXG4gICAgaWYoZS50YXJnZXQuZm9ybSE9bnVsbCl7XHJcbiAgICAgIGxldCB1c2VyTmFtZSA9IGUudGFyZ2V0LmZvcm1bMF0udmFsdWUgfHwgXCJcIjtcclxuICAgICAgaWYoZS50YXJnZXQuZm9ybVsxXS5uYW1lPT1cInBob25lXCIpe1xyXG4gICAgICAgICB0ZWw9ZS50YXJnZXQuZm9ybVsxXS52YWx1ZTtcclxuICAgICAgICAgZW1haWw9XCJcIlxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0ZWw9XCJcIjtcclxuICAgICAgICBlbWFpbD1lLnRhcmdldC5mb3JtWzFdLnZhbHVlXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBhc3N3b3JkID0gZS50YXJnZXQuZm9ybVsyXS52YWx1ZSB8fCBcIlwiXHJcbiAgICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBlLnRhcmdldC5mb3JtWzNdLnZhbHVlIHx8IFwiXCJcclxuICAgICAgbGV0IGJpcmRoRGF5ID0gZS50YXJnZXQuZm9ybVs0XS52YWx1ZSB8fCBcIlwiXHJcbiAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIFxyXG4gICAge1xyXG4gICAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbiAgICB9XHJcbiAgICAgIGlmKGVtYWlsLmxlbmd0aD4wKXtcclxuICAgICAgICBpZih2YWxpZGF0ZUVtYWlsKGVtYWlsLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgIGUudGFyZ2V0LmZvcm1bMV0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiYSgyMiwgMjQsIDM1LCAwLjEyKSBcIlxyXG4gICAgICAgICAgc2V0RXJyb3JEYXRhKGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5lLCBlbWFpbDogeyBzdGF0ZTogJ2ZhbHNlJywgbXNnOiAnJyB9IH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBlLnRhcmdldC5mb3JtWzFdLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZCBcIlxyXG5cclxuICAgICAgICAgIHNldEVycm9yRGF0YShlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZSwgZW1haWw6IHsgc3RhdGU6ICd0cnVlJywgbXNnOiAnRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyB9IH1cclxuICAgICAgICAgIH0pICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoY29uZmlybVBhc3N3b3JkLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUudGFyZ2V0LmZvcm1bM10uY2xhc3NMaXN0WzFdKVswXS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlLnRhcmdldC5mb3JtWzNdLmNsYXNzTGlzdFsxXSlbMV0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgIHNldEVycm9yRGF0YShlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uZSwgcGFzc3dvcmQ6IHsgc3RhdGU6ICd0cnVlJywgbXNnOiAndGhlIDIgcGFzc3dvcmQgYXJlIG5vdCB0aGUgc2FtZScgfSB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgICBzZXRFcnJvckRhdGEoZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZSwgcGFzc3dvcmQ6IHsgc3RhdGU6ICd0cnVlJywgbXNnOiAneW91ciBicm93c2VyIG11c3QgY29udGFpbiBtb3JlIHRoYW4gOCBsZXR0ZXJzJyB9IH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yRGF0YShlID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5lLCBwYXNzd29yZDogeyBzdGF0ZTogJ2ZhbHNlJywgbXNnOiAneW91ciBicm93c2VyIG11c3QgY29udGFpbiBtb3JlIHRoYW4gOCBsZXR0ZXJzJyB9IH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlLnRhcmdldC5mb3JtWzNdLmNsYXNzTGlzdFsxXSlbMF0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiYSgyMiwgMjQsIDM1LCAwLjEyKVwiXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZS50YXJnZXQuZm9ybVszXS5jbGFzc0xpc3RbMV0pWzFdLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMjIsIDI0LCAzNSwgMC4xMilcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUudGFyZ2V0LmZvcm1bM10uY2xhc3NMaXN0WzFdKVswXS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZ2JhKDIyLCAyNCwgMzUsIDAuMTIpXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUudGFyZ2V0LmZvcm1bM10uY2xhc3NMaXN0WzFdKVsxXS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZ2JhKDIyLCAyNCwgMzUsIDAuMTIpXCJcclxuICAgICAgfVxyXG4gICAgICBpZiAodXNlck5hbWUubGVuZ3RoID4gMCAmJiBwYXNzd29yZC5sZW5ndGggPiAwICYmIGNvbmZpcm1QYXNzd29yZC5sZW5ndGggPiAwICAmJiAodmFsaWRhdGVFbWFpbChlbWFpbCkgfHwgdGVsLmxlbmd0aCA+IDYpKSB7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRDb25maXJtUmVnaXN0ZXJGb3JtKHRydWUpXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRDb25maXJtUmVnaXN0ZXJGb3JtKGZhbHNlKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldENvbmZpcm1SZWdpc3RlckZvcm0oZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKlNldCBQaG9uZSBOdW1iZXIqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyUmVnaXN0ZXJQaG9uZSA9IChkYXRhLCBjb3VudHJ5KSA9PiB7XHJcbiAgICBzZXRyZWdpc3RlclN0YXRlKGUgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5lLCBcImRpYWxDb2RlXCI6IGNvdW50cnkuZGlhbENvZGUsICd0ZWwnOiBkYXRhIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKipTZXQgVXNlciBOYW1lIGFuZCBQYXNzd29yZCoqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgY29uc3QgdXNlck5hbWVfUGFzc3dvcmRfSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgc2V0cmVnaXN0ZXJTdGF0ZShlID0+IHsgcmV0dXJuIHsgLi4uZSwgW25hbWVdOiB2YWx1ZSB9IH0pXHJcbiAgfVxyXG5cclxuICBcclxuICBjb25zdCBjaGFuZ2VFbWFpbE9yVGVsID0gKCkgPT4ge1xyXG5cclxuICAgIHNldENoYW5nZUVtYWlsT3JUZWwoZSA9PiB7XHJcbiAgICAgIGlmKGUgPT0gXCJlbWFpbFwiKXtcclxuICAgICAgICBzZXRyZWdpc3RlclN0YXRlKGU9PntyZXR1cm4gey4uLmUsZW1haWw6XCJcIn19KVxyXG4gICAgICAgIHNldENvbmZpcm1SZWdpc3RlckZvcm0oZmFsc2UpXHJcblxyXG4gICAgICAgIHJldHVybiBcInRlbFwiXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHNldHJlZ2lzdGVyU3RhdGUoZT0+e3JldHVybiB7Li4uZSx0ZWw6XCJcIn19KVxyXG4gICAgICAgIHNldENvbmZpcm1SZWdpc3RlckZvcm0oZmFsc2UpXHJcblxyXG4gICAgICAgIHJldHVybiBcImVtYWlsXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zaW5nVXB9IHN0eWxlPXtwcm9wcy5zaG93U2luZ0luX09yX1NIb3dTaW5nVXAgPyB7IGxlZnQ6ICcwJScgfSA6IHsgbGVmdDogJy0xMDAlJyB9fT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtTdHlsZS5mb3JtfSBvblN1Ym1pdD17ZSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfX0gb25DaGFuZ2U9eyhlKSA9PiB7IGZvcm1WYWxpZGF0aW9uKGUpIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUucGFnZUhlYWRlcn0+PGgyPlNpbmcgdXAgRm9yIE5PWlpMQTwvaDI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5kZXNjcmlwdGlvbkhlYWRlcn0+PGgzPntsYW5ndWFnZS5jcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmV9PC9oMz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGlucHV0IHJlZj17dXNlck5hbWV9IG5hbWU9XCJ1c2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiB1c2VyTmFtZV9QYXNzd29yZF9IYW5kbGVyKGUpfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5sYWJlbHNwYW59PntsYW5ndWFnZS51c2VybmFtZX08L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZXJyb3JEYXRhLnVzZXJOYW1lLnN0YXRlID09IFwidHJ1ZVwiICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lcnJvck1lc3NhZ2V9PjxwPntlcnJvckRhdGEudXNlck5hbWUubXNnfTwvcD48L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS50ZWxPckVtYWlsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxhYmVsRW1haWxPclBhc3N3b3JkfSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VFbWFpbE9yVGVsKCl9PlxyXG4gICAgICAgICAgICAgIDxwPmNoYW5nZSB0byB7Y2hhbmdlRW1haWxPclRlbGluaXR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj57Y2hhbmdlRW1haWxPclRlbGluaXQgPT0gXCJ0ZWxcIiA/IDxkaXYgY2xhc3NOYW1lPXtTdHlsZS50ZWx9PjxQaG9uZUlucHV0IG5hbWU9e1widGVsXCJ9IHNwZWNpYWxMYWJlbD17bGFuZ3VhZ2UucGhvbmV9IGNvdW50cnk9eyd0bid9ICAgaW5wdXRQcm9wcz17eyBuYW1lOiAncGhvbmUnLHJlcXVpcmVkOiB0cnVlLGF1dG9Gb2N1czogdHJ1ZX19IHZhbHVlPXtyZWdpc3RlclN0YXRlLnRlbH0gb25DaGFuZ2U9eyhlLCBjb3VudHJ5KSA9PiBvbkNoYW5nZUhhbmRsZXJSZWdpc3RlclBob25lKGUsIGNvdW50cnkpfSAvPjwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbWFpbH0+PGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiB7IHVzZXJOYW1lX1Bhc3N3b3JkX0hhbmRsZXIoZSkgfX0gY2xhc3NOYW1lPXtgJHtTdHlsZS5pbnB1dH0gYH0gcmVxdWlyZWQgLz48bGFiZWw+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5sYWJlbHNwYW59PntsYW5ndWFnZS5lbWFpbH08L3NwYW4+PC9sYWJlbD48L2Rpdj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZXJyb3JEYXRhLmVtYWlsLnN0YXRlID09IFwidHJ1ZVwiICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lcnJvck1lc3NhZ2V9PjxwPntlcnJvckRhdGEuZW1haWwubXNnfTwvcD48L2Rpdj59XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXtwYXNzd29yZH0gbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiB7IHVzZXJOYW1lX1Bhc3N3b3JkX0hhbmRsZXIoZSkgfX0gY2xhc3NOYW1lPXtgJHtTdHlsZS5Db25maXJtUGFzc3dvcmR9ICR7U3R5bGUuaW5wdXR9IGB9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbD48c3BhbiBjbGFzc05hbWU9e1N0eWxlLmxhYmVsc3Bhbn0+e2xhbmd1YWdlLnBhc3N3b3JkfTwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtlcnJvckRhdGEucGFzc3dvcmQuc3RhdGUgPT0gXCJ0cnVlXCIgJiYgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVycm9yTWVzc2FnZX0+PHA+e2Vycm9yRGF0YS5wYXNzd29yZC5tc2d9PC9wPjwvZGl2Pn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17YCR7U3R5bGUuaW5wdXR9ICR7U3R5bGUuQ29uZmlybVBhc3N3b3JkfWB9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbD48c3BhbiBjbGFzc05hbWU9e1N0eWxlLmxhYmVsc3Bhbn0+e2xhbmd1YWdlLmNvbmZpcm1wYXNzd29yZH08L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPERhdGVQaWNrZXIgdmFsdWU9e3JlZ2lzdGVyU3RhdGUuYmlydGhEYXl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRyZWdpc3RlclN0YXRlKGUgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLmUsIFwiYmlydGhEYXlcIjogdmFsdWUgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgbGFiZWw9XCJiaXJ0aCBEYXlcIlxyXG4gICAgICAgICAgICBmb3JtYXRTdHlsZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgbG9jYWxlPXtsYW5ndWFnZS5hZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjb25maXJtUmVnaXN0ZXJGb3JtID09IHRydWUgJiYgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLmJ0bn0gb25DbGljaz17KCkgPT4gc2luZ1VwKCl9PntsYW5ndWFnZS5zaWdudXB9PC9idXR0b24+fVxyXG5cclxuICAgICAgICB7Y29uZmlybVJlZ2lzdGVyRm9ybSA9PSBmYWxzZSAmJiA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUuYnRufSBkaXNhYmxlZCBzdHlsZT17eyBvcGFjaXR5OiAwLjIsIGN1cnNvcjogJ2RlZmF1bHQnIH19PntsYW5ndWFnZS5zaWdudXB9PC9idXR0b24+fVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGUubWVzc2FnZX0+e2xhbmd1YWdlLkFscmVhZHlIYXZlQWNjb3VudH0gIDxzcGFuIGNsYXNzTmFtZT17U3R5bGUuY2xpY2tIZXJlfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5mbnNob3dTaW5nSW5PclNpbmdVcCgpfT57bGFuZ3VhZ2Uuc2lnbmlufTwvc3Bhbj48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2luZ1VwXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9OYXZCYXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBNb2RhbFNpbmdJblNpbmdVcCBmcm9tICcuLi9tb2RhbFNpbmdJblNpbmdVcC9Nb2RhbFNpbmdJblNpbmdVcCdcclxuaW1wb3J0IFBvcmZpbGVNZW51IGZyb20gJy4uL3Byb2ZpbGVNZW51L3Byb2ZpbGVNZW51J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlYXJjaFVzZXIvc2VhcmNoVXNlcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uJ1xyXG5pbXBvcnQge2dldFVucmVhZFVzZXJzQ2hhdHNOdW1iZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoYXQnXHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHtHZXRPdGhlclVzZXJzRGF0YX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcidcclxuXHJcbmNvbnN0IE5hdkJhciA9ICh7IHRva2VuIH0pID0+IHtcclxuICAgIGNvbnN0IFttb2RhbFNpbmdJblNpbmdVcCwgc2V0TW9kYWxTaW5nSW5TaW5nVXBdID0gdXNlU3RhdGUoZmFsc2UpLy9vcGVuIG1vZGFsXHJcbiAgICBjb25zdCBbaGVpZ2h0QW5kV2lkdGhPZldpbmRvdywgc2V0SGVpZ2h0QW5kV2lkdGhPZldpbmRvd10gPSBSZWFjdC51c2VTdGF0ZSh7IHdpZHRoOiAnJywgaGVpZ2h0OiAnJyB9KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbb3Blbk1lbnVQcm9maWxlU3RhdGUsIHNldE9wZW5NZW51UHJvZmlsZV0gPSB1c2VTdGF0ZShmYWxzZSkvL29uIGhvdmVyIHByb2ZpbGUgcGljIG9wZW4gbWVudVxyXG4gICAgY29uc3QgW2Rpc3lwbGF5U2VhcmNoLHNldERpc3BsYXlTZWFyY2hdPVJlYWN0LnVzZVN0YXRlKHtzdGF0ZTpmYWxzZSx1c2VyTmFtZTpcIlwifSlcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXT0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuICAgIGNvbnN0IFtudW1iZXJPZkNoYXRzTm90UmVhZCxzZXROdW1iZXJPZkNoYXRzTm90UmVhZF09UmVhY3QudXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzb2NrZXQsc2V0U29ja2V0XT1SZWFjdC51c2VDb250ZXh0KHNvY2tldENvbnRleHQpXHJcbiAgICBjb25zdCBbcG9wVXBVc2VyLHNldFBvcFVwVXNlcl09UmVhY3QudXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtwb3BVcE5vdGlmLHNldHBvcFVwTm90aWZdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGFzeW5jICBmdW5jdGlvbiAgY2hhdEhhbmRsZXIoZGF0YSl7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBpZihyb3V0ZXIucGF0aG5hbWUhPVwiL2NoYXRcIil7XHJcbiAgICAgICAgICAgICAgICBHZXRPdGhlclVzZXJzRGF0YShkYXRhLnNlbmRlcklkLHRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBvcFVwVXNlcih7Li4ucmVzdWx0LmRhdGEuZGF0YVswXX0pXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiAgbm90aWZIYW5kbGVyKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLm5vdGlmPT0xKXtcclxuICAgICAgICAgICAgICAgIHNldHBvcFVwTm90aWYoZT0+ZSsxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNvY2tldCE9dW5kZWZpbmVkICYmIHNvY2tldCE9bnVsbCl7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyXCIsY2hhdEhhbmRsZXIpXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiZ2V0Tm90aWZpY2F0aW9uRnJvbVVzZXJUb1VzZXJcIixub3RpZkhhbmRsZXIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0Tm90aWZpY2F0aW9uRnJvbVVzZXJUb1VzZXInLCBub3RpZkhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyBcclxuICAgICAgICBpZih0b2tlbiE9dW5kZWZpbmVkICYmIHRva2VuIT1udWxsICYmIHRva2VuIT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHNldEhlaWdodEFuZFdpZHRoT2ZXaW5kb3coeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pIFxyXG4gICAgICAgICAgICBnZXRVbnJlYWRVc2Vyc0NoYXRzTnVtYmVyKHt9LHRva2VuKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIHNldE51bWJlck9mQ2hhdHNOb3RSZWFkKGRhdGEuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IFtvcGVuT3JDbG9zZU5vdGlmLHNldE9wZW5PckNsb3NlTm90aWZdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qgb3Blbk1lbnVQcm9maWxlID0gKCkgPT4geyBzZXRPcGVuTWVudVByb2ZpbGUodHJ1ZSkgfVxyXG4gICAgY29uc3QgY2xvc2VNZW51UHJvZmlsZSA9ICgpID0+IHsgc2V0T3Blbk1lbnVQcm9maWxlKGZhbHNlKSB9XHJcblxyXG4gICAgY29uc3Qgb3Blbk1lbnVQcm9maWxlb25DbGljayA9ICgpID0+IHsgc2V0T3Blbk1lbnVQcm9maWxlKGUgPT4gIWUpIH1cclxuICAgIFxyXG4gICAgY29uc3QgT3BlbnNlYXJjaFVzZXJzPShlKT0+e1xyXG4gICAgICAgIHNldERpc3BsYXlTZWFyY2goe3N0YXRlOnRydWUsdXNlck5hbWU6XCJcIn0pXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIGNvbnN0IFNlYXJjaFVzZXJGbj0oZSk9PntcclxuICAgICAgICBzZXREaXNwbGF5U2VhcmNoKHtzdGF0ZTp0cnVlLHVzZXJOYW1lOmUudGFyZ2V0LnZhbHVlfSlcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbG9zZVNlYXJjaFVzZXI9KGUpPT57XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERpc3BsYXlTZWFyY2goe3N0YXRlOmZhbHNlLHVzZXJOYW1lOlwiXCJ9KVxyXG5cclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3Blbk9yQ2xvc2VOb3RpZmljYXRpb25zPSgpPT57XHJcbiAgICAgICAgc2V0T3Blbk9yQ2xvc2VOb3RpZihlPT4hZSlcclxuICAgIH1cclxuICAgIGlmIChoZWlnaHRBbmRXaWR0aE9mV2luZG93LndpZHRoID4gaGVpZ2h0QW5kV2lkdGhPZldpbmRvdy5oZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtTdHlsZS5uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGRpdiBjbGFzc05hbWU9e1N0eWxlLkxvZ299PjxoMT5TUEFLU0k8L2gxPjwvZGl2PjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5mbGV4SXRlbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25CbHVyPXsoKT0+Y2xvc2VTZWFyY2hVc2VyKCl9IG9uRm9jdXM9eyhlKT0+T3BlbnNlYXJjaFVzZXJzKGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlzeXBsYXlTZWFyY2guc3RhdGUmJjxTZWFyY2hVc2VyIHRva2VuPXt0b2tlbn0gc2VhcmNoVXNlck5hbWU9e2Rpc3lwbGF5U2VhcmNoLnVzZXJOYW1lfT48L1NlYXJjaFVzZXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhY2NvdW50c1wiIGF1dG9Db21wbGV0ZT1cIm9mZlwiICBvbkNoYW5nZT17KGUpPT5TZWFyY2hVc2VyRm4oZSl9ID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI4IDM4XCIgZmlsbD1cIiMxODc2ZjNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3LjYxOTIgMzIuMzE1NkwyMi4xNjY1IDI1LjAzNzhDMjEuOTIwNCAyNC43MDk0IDIxLjU4NjcgMjQuNTI2OSAyMS4yMzY3IDI0LjUyNjlIMjAuMzQ1MkMyMS44NTQ3IDIxLjk1MDEgMjIuNzUxNyAxOC43MDkgMjIuNzUxNyAxNS4xODMzQzIyLjc1MTcgNi43OTU5OSAxNy42NTk5IDAgMTEuMzc1OCAwQzUuMDkxNzggMCAwIDYuNzk1OTkgMCAxNS4xODMzQzAgMjMuNTcwNiA1LjA5MTc4IDMwLjM2NjYgMTEuMzc1OCAzMC4zNjY2QzE0LjAxNzQgMzAuMzY2NiAxNi40NDU3IDI5LjE2OTUgMTguMzc2MyAyNy4xNTQ3VjI4LjM0NDZDMTguMzc2MyAyOC44MTE4IDE4LjUxMzEgMjkuMjU3MSAxOC43NTkyIDI5LjU4NTVMMjQuMjExOSAzNi44NjMzQzI0LjcyNiAzNy41NDk1IDI1LjU1NzMgMzcuNTQ5NSAyNi4wNjYgMzYuODYzM0wyNy42MTM3IDM0Ljc5NzVDMjguMTI3OCAzNC4xMTEzIDI4LjEyNzggMzMuMDAxOCAyNy42MTkyIDMyLjMxNTZaTTExLjM3NTggMjQuNTI2OUM3LjUwOTE0IDI0LjUyNjkgNC4zNzUzMiAyMC4zNTE1IDQuMzc1MzIgMTUuMTgzM0M0LjM3NTMyIDEwLjAyMjQgNy41MDM2NyA1LjgzOTczIDExLjM3NTggNS44Mzk3M0MxNS4yNDI1IDUuODM5NzMgMTguMzc2MyAxMC4wMTUxIDE4LjM3NjMgMTUuMTgzM0MxOC4zNzYzIDIwLjM0NDIgMTUuMjQ4IDI0LjUyNjkgMTEuMzc1OCAyNC41MjY5WlwiIGZpbGw9XCIjYjBiMGI1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b2tlbiAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYXV0aGVudGljYXRlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXQgcG9wVXBVc2VyPXtwb3BVcFVzZXJ9IG51bWJlck9mQ2hhdHNOb3RSZWFkPXtudW1iZXJPZkNoYXRzTm90UmVhZH0+PC9DaGF0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdGlmaWNhdGlvbn0gb25DbGljaz17KCk9Pm9wZW5PckNsb3NlTm90aWZpY2F0aW9ucygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuT3JDbG9zZU5vdGlmJiY8Tm90aWZpY2F0aW9uIHRva2VuPXt0b2tlbn0+PC9Ob3RpZmljYXRpb24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm51bWJlck9mTm90aWZpY2F0aW9uTm90UmVhZGxvY2FsfT48c3Bhbj57cG9wVXBOb3RpZn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiBmaWxsPVwiIzE4NzZmM1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQzLjc1IDBINi4yNUMyLjgwMjczIDAgMCAyLjgwMjczIDAgNi4yNVYzNC4zNzVDMCAzNy44MjIzIDIuODAyNzMgNDAuNjI1IDYuMjUgNDAuNjI1SDE1LjYyNVY0OC44MjgxQzE1LjYyNSA0OS41MjE1IDE2LjE5MTQgNTAgMTYuNzk2OSA1MEMxNy4wMzEyIDUwIDE3LjI3NTQgNDkuOTMxNiAxNy40OTAyIDQ5Ljc2NTZMMjkuNjg3NSA0MC42MjVINDMuNzVDNDcuMTk3MyA0MC42MjUgNTAgMzcuODIyMyA1MCAzNC4zNzVWNi4yNUM1MCAyLjgwMjczIDQ3LjE5NzMgMCA0My43NSAwWk00NS4zMTI1IDM0LjM3NUM0NS4zMTI1IDM1LjIzNDQgNDQuNjA5NCAzNS45Mzc1IDQzLjc1IDM1LjkzNzVIMjguMTI1TDI2Ljg3NSAzNi44NzVMMjAuMzEyNSA0MS43OTY5VjM1LjkzNzVINi4yNUM1LjM5MDYyIDM1LjkzNzUgNC42ODc1IDM1LjIzNDQgNC42ODc1IDM0LjM3NVY2LjI1QzQuNjg3NSA1LjM5MDYyIDUuMzkwNjIgNC42ODc1IDYuMjUgNC42ODc1SDQzLjc1QzQ0LjYwOTQgNC42ODc1IDQ1LjMxMjUgNS4zOTA2MiA0NS4zMTI1IDYuMjVWMzQuMzc1WlwiIGZpbGw9XCIjMTg3NmYzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5wcm9maWxlfSBvbkNsaWNrPXsoKSA9PiBvcGVuTWVudVByb2ZpbGVvbkNsaWNrKCl9IG9uTW91c2VMZWF2ZT17KCkgPT4gY2xvc2VNZW51UHJvZmlsZSgpfSBvbk1vdXNlRW50ZXI9eygpID0+IG9wZW5NZW51UHJvZmlsZSgpfT57dXNlciAhPSBudWxsICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5uYXZCYXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e3VzZXIuY3VycmVudEltYWdlVXJsICB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+fXtvcGVuTWVudVByb2ZpbGVTdGF0ZSAmJiA8UG9yZmlsZU1lbnU+PC9Qb3JmaWxlTWVudT59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHshdG9rZW4gJiYgPGRpdiBjbGFzc05hbWU9e1N0eWxlLk5vbmF1dGhlbnRpY2F0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NpZ25pblwifT48YnV0dG9uID48cD5Mb2cgSW48L3A+PC9idXR0b24+PC9MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlXHJcbiAgICAgICAgLyptb2JpbGUgKi9cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtTdHlsZS5uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5TZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuZmxleEl0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uQmx1cj17KCk9PmNsb3NlU2VhcmNoVXNlcigpfSBvbkZvY3VzPXsoZSk9Pk9wZW5zZWFyY2hVc2VycyhlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3lwbGF5U2VhcmNoLnN0YXRlJiY8U2VhcmNoVXNlciB0b2tlbj17dG9rZW59IHNlYXJjaFVzZXJOYW1lPXtkaXN5cGxheVNlYXJjaC51c2VyTmFtZX0+PC9TZWFyY2hVc2VyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWNjb3VudHNcIiAgb25DaGFuZ2U9eyhlKT0+U2VhcmNoVXNlckZuKGUpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuc2VhcmNoSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI4IDM4XCIgZmlsbD1cIiMxODc2ZjNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3LjYxOTIgMzIuMzE1NkwyMi4xNjY1IDI1LjAzNzhDMjEuOTIwNCAyNC43MDk0IDIxLjU4NjcgMjQuNTI2OSAyMS4yMzY3IDI0LjUyNjlIMjAuMzQ1MkMyMS44NTQ3IDIxLjk1MDEgMjIuNzUxNyAxOC43MDkgMjIuNzUxNyAxNS4xODMzQzIyLjc1MTcgNi43OTU5OSAxNy42NTk5IDAgMTEuMzc1OCAwQzUuMDkxNzggMCAwIDYuNzk1OTkgMCAxNS4xODMzQzAgMjMuNTcwNiA1LjA5MTc4IDMwLjM2NjYgMTEuMzc1OCAzMC4zNjY2QzE0LjAxNzQgMzAuMzY2NiAxNi40NDU3IDI5LjE2OTUgMTguMzc2MyAyNy4xNTQ3VjI4LjM0NDZDMTguMzc2MyAyOC44MTE4IDE4LjUxMzEgMjkuMjU3MSAxOC43NTkyIDI5LjU4NTVMMjQuMjExOSAzNi44NjMzQzI0LjcyNiAzNy41NDk1IDI1LjU1NzMgMzcuNTQ5NSAyNi4wNjYgMzYuODYzM0wyNy42MTM3IDM0Ljc5NzVDMjguMTI3OCAzNC4xMTEzIDI4LjEyNzggMzMuMDAxOCAyNy42MTkyIDMyLjMxNTZaTTExLjM3NTggMjQuNTI2OUM3LjUwOTE0IDI0LjUyNjkgNC4zNzUzMiAyMC4zNTE1IDQuMzc1MzIgMTUuMTgzM0M0LjM3NTMyIDEwLjAyMjQgNy41MDM2NyA1LjgzOTczIDExLjM3NTggNS44Mzk3M0MxNS4yNDI1IDUuODM5NzMgMTguMzc2MyAxMC4wMTUxIDE4LjM3NjMgMTUuMTgzM0MxOC4zNzYzIDIwLjM0NDIgMTUuMjQ4IDI0LjUyNjkgMTEuMzc1OCAyNC41MjY5WlwiIGZpbGw9XCIjMTg3NmYzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b2tlbiAmJiA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYXV0aGVudGljYXRlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5ub3RpZmljYXRpb259IG9uQ2xpY2s9eygpPT5vcGVuT3JDbG9zZU5vdGlmaWNhdGlvbnMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuT3JDbG9zZU5vdGlmJiY8Tm90aWZpY2F0aW9uIHRva2VuPXt0b2tlbn0+PC9Ob3RpZmljYXRpb24+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjM1XCIgdmlld0JveD1cIjAgMCA1MCA1MFwiIGZpbGw9XCIjMTg3NmYzXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDMuNzUgMEg2LjI1QzIuODAyNzMgMCAwIDIuODAyNzMgMCA2LjI1VjM0LjM3NUMwIDM3LjgyMjMgMi44MDI3MyA0MC42MjUgNi4yNSA0MC42MjVIMTUuNjI1VjQ4LjgyODFDMTUuNjI1IDQ5LjUyMTUgMTYuMTkxNCA1MCAxNi43OTY5IDUwQzE3LjAzMTIgNTAgMTcuMjc1NCA0OS45MzE2IDE3LjQ5MDIgNDkuNzY1NkwyOS42ODc1IDQwLjYyNUg0My43NUM0Ny4xOTczIDQwLjYyNSA1MCAzNy44MjIzIDUwIDM0LjM3NVY2LjI1QzUwIDIuODAyNzMgNDcuMTk3MyAwIDQzLjc1IDBaTTQ1LjMxMjUgMzQuMzc1QzQ1LjMxMjUgMzUuMjM0NCA0NC42MDk0IDM1LjkzNzUgNDMuNzUgMzUuOTM3NUgyOC4xMjVMMjYuODc1IDM2Ljg3NUwyMC4zMTI1IDQxLjc5NjlWMzUuOTM3NUg2LjI1QzUuMzkwNjIgMzUuOTM3NSA0LjY4NzUgMzUuMjM0NCA0LjY4NzUgMzQuMzc1VjYuMjVDNC42ODc1IDUuMzkwNjIgNS4zOTA2MiA0LjY4NzUgNi4yNSA0LjY4NzVINDMuNzVDNDQuNjA5NCA0LjY4NzUgNDUuMzEyNSA1LjM5MDYyIDQ1LjMxMjUgNi4yNVYzNC4zNzVaXCIgZmlsbD1cIiMxODc2ZjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5wcm9maWxlfSBvbkNsaWNrPXsoKSA9PiBvcGVuTWVudVByb2ZpbGVvbkNsaWNrKCl9IG9uTW91c2VMZWF2ZT17KCkgPT4gY2xvc2VNZW51UHJvZmlsZSgpfSBvbk1vdXNlRW50ZXI9eygpID0+IG9wZW5NZW51UHJvZmlsZSgpfT57b3Blbk1lbnVQcm9maWxlU3RhdGUgJiYgPFBvcmZpbGVNZW51PjwvUG9yZmlsZU1lbnU+fSB7dXNlciAhPSBudWxsICYmIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5uYXZCYXJJbWFnZUNvbnRhaW5lcn0+PGltZyBzcmM9e3VzZXIuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHshdG9rZW4gJiYgPGRpdiBjbGFzc05hbWU9e1N0eWxlLk5vbmF1dGhlbnRpY2F0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWduaW5cIn0+PGJ1dHRvbiA+PHA+TG9nIEluPC9wPjwvYnV0dG9uPjwvTGluaz4gXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcclxuXHJcblxyXG5jb25zdCBDaGF0PShwcm9wcyk9PntcclxuICAgIGNvbnN0IFtudW1iZXJPZkNoYXRzTm90UmVhZGxvY2FsLHNldE51bWJlck9mQ2hhdHNOb3RSZWFkXT1SZWFjdC51c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3VzZXJXaG9TZW50WW91SW1hZ2Usc2V0VXNlcldob1NlbnRZb3VJbWFnZV09UmVhY3QudXNlU3RhdGUobnVsbClcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldE51bWJlck9mQ2hhdHNOb3RSZWFkKHByb3BzLm51bWJlck9mQ2hhdHNOb3RSZWFkKVxyXG4gICAgfSxbcHJvcHMubnVtYmVyT2ZDaGF0c05vdFJlYWRdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYocHJvcHMucG9wVXBVc2VyIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJXaG9TZW50WW91SW1hZ2UobnVsbClcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHNldFVzZXJXaG9TZW50WW91SW1hZ2UocHJvcHMucG9wVXBVc2VyLmN1cnJlbnRJbWFnZVVybClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sW3Byb3BzXSlcclxuICAgIHJldHVybig8TGluayBocmVmPVwiL2NoYXRcIj48ZGl2IGNsYXNzTmFtZT17U3R5bGUuY2hhdFN2Z30+XHJcbiAgICAgICAge3VzZXJXaG9TZW50WW91SW1hZ2UhPW51bGwmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zaG93VGVtSW1hZ2VPZlVzZXJXaG9TZW50WW91TWVzc2FnZX0+PGltZyBzcmM9e3VzZXJXaG9TZW50WW91SW1hZ2V9Lz48L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm51bWJlck9mQ2hhdHNOb3RSZWFkbG9jYWx9PjxzcGFuPntudW1iZXJPZkNoYXRzTm90UmVhZGxvY2FsfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkNhcGFfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA0NzkuMDU4IDQ3OS4wNThcIiBmaWxsPVwiIzE4NzZmM1wiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNDc5LjA1OCA0NzkuMDU4XCIgd2lkdGg9XCI1MTJcIj48cGF0aCBkPVwibTQzNC4xNDYgNTkuODgyaC0zODkuMjM0Yy0yNC43NjYgMC00NC45MTIgMjAuMTQ2LTQ0LjkxMiA0NC45MTJ2MjY5LjQ3YzAgMjQuNzY2IDIwLjE0NiA0NC45MTIgNDQuOTEyIDQ0LjkxMmgzODkuMjM0YzI0Ljc2NiAwIDQ0LjkxMi0yMC4xNDYgNDQuOTEyLTQ0LjkxMnYtMjY5LjQ3YzAtMjQuNzY2LTIwLjE0Ni00NC45MTItNDQuOTEyLTQ0LjkxMnptMCAyOS45NDFjMi4wMzQgMCAzLjk2OS40MjIgNS43MzggMS4xNTlsLTIwMC4zNTUgMTczLjY0OS0yMDAuMzU2LTE3My42NDljMS43NjktLjczNiAzLjcwNC0xLjE1OSA1LjczOC0xLjE1OXptMCAyOTkuNDExaC0zODkuMjM0Yy04LjI2IDAtMTQuOTcxLTYuNzEtMTQuOTcxLTE0Ljk3MXYtMjUxLjY0OGwxOTkuNzc4IDE3My4xNDFjMi44MjIgMi40NDEgNi4zMTYgMy42NTUgOS44MSAzLjY1NXM2Ljk4OC0xLjIxMyA5LjgxLTMuNjU1bDE5OS43NzgtMTczLjE0MXYyNTEuNjQ5Yy0uMDAxIDguMjYtNi43MTEgMTQuOTctMTQuOTcxIDE0Ljk3elwiLz48L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOYXZCYXJfY29udGFpbmVyX19QcURKTVwiLFxuXHRcIm5hdlwiOiBcIk5hdkJhcl9uYXZfX3pFenEyXCIsXG5cdFwiTG9nb1wiOiBcIk5hdkJhcl9Mb2dvX18zVEN3eFwiLFxuXHRcIlNlYXJjaFwiOiBcIk5hdkJhcl9TZWFyY2hfXzJEdFREXCIsXG5cdFwiZmxleEl0ZW1zXCI6IFwiTmF2QmFyX2ZsZXhJdGVtc19fMjZXdDZcIixcblx0XCJzZWFyY2hJbWdcIjogXCJOYXZCYXJfc2VhcmNoSW1nX19BQVktN1wiLFxuXHRcIk5vbmF1dGhlbnRpY2F0ZWRcIjogXCJOYXZCYXJfTm9uYXV0aGVudGljYXRlZF9fMmFfMTdcIixcblx0XCJhdXRoZW50aWNhdGVkXCI6IFwiTmF2QmFyX2F1dGhlbnRpY2F0ZWRfXzJNWWQ4XCIsXG5cdFwibm90aWZpY2F0aW9uXCI6IFwiTmF2QmFyX25vdGlmaWNhdGlvbl9fM1hSdUdcIixcblx0XCJ1cGxvYWRcIjogXCJOYXZCYXJfdXBsb2FkX18zMEhPX1wiLFxuXHRcInByb2ZpbGVcIjogXCJOYXZCYXJfcHJvZmlsZV9fM0h2Y2RcIixcblx0XCJuYXZCYXJJbWFnZUNvbnRhaW5lclwiOiBcIk5hdkJhcl9uYXZCYXJJbWFnZUNvbnRhaW5lcl9fM25ReTlcIixcblx0XCJTaWRlTmF2QmFyQ29udGFpbmVyXCI6IFwiTmF2QmFyX1NpZGVOYXZCYXJDb250YWluZXJfXzNZMWc4XCIsXG5cdFwiU2lkZU5hdkJhckljb25NZW51XCI6IFwiTmF2QmFyX1NpZGVOYXZCYXJJY29uTWVudV9fMnQ4anRcIixcblx0XCJpY29uXCI6IFwiTmF2QmFyX2ljb25fXzEzd0kxXCIsXG5cdFwiaWNvbmJhcjFcIjogXCJOYXZCYXJfaWNvbmJhcjFfXzMyVENVXCIsXG5cdFwiaWNvbmJhcjJcIjogXCJOYXZCYXJfaWNvbmJhcjJfXzI4WVdpXCIsXG5cdFwiaWNvbmJhcjNcIjogXCJOYXZCYXJfaWNvbmJhcjNfX1dzVzlxXCIsXG5cdFwib3BlbkNsb3NlXCI6IFwiTmF2QmFyX29wZW5DbG9zZV9fMllpWmRcIixcblx0XCJjaGF0U3ZnXCI6IFwiTmF2QmFyX2NoYXRTdmdfXzJienphXCIsXG5cdFwibnVtYmVyT2ZDaGF0c05vdFJlYWRsb2NhbFwiOiBcIk5hdkJhcl9udW1iZXJPZkNoYXRzTm90UmVhZGxvY2FsX18za1AwLVwiLFxuXHRcIm51bWJlck9mTm90aWZpY2F0aW9uTm90UmVhZGxvY2FsXCI6IFwiTmF2QmFyX251bWJlck9mTm90aWZpY2F0aW9uTm90UmVhZGxvY2FsX18zVlRpTFwiLFxuXHRcInNob3dUZW1JbWFnZU9mVXNlcldob1NlbnRZb3VNZXNzYWdlXCI6IFwiTmF2QmFyX3Nob3dUZW1JbWFnZU9mVXNlcldob1NlbnRZb3VNZXNzYWdlX18yNGg1MlwiLFxuXHRcInNob3dJbWFnZVwiOiBcIk5hdkJhcl9zaG93SW1hZ2VfXzJSQVJ2XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHtnZXRub3RpZmljYXRpb25zfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24nXHJcbmltcG9ydCB7ZGVuaWVkZm9sbG93LGFjY2VwdGZvbGxvd30gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9sbG93aW5nJ1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW25vdGlmaWNhdGlvbnMsc2V0bm90aWZpY2F0aW9uc109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbTG9hZGluZyxzZXRMb2FkaW5nXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRub3RpZmljYXRpb25zKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICBzZXRub3RpZmljYXRpb25zKHJlc3VsdC5kYXRhLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IGRlbmllZGZvbGxvd2ZuPSh0aGVPdGhlclBlcnNvbklkLGlkQ29tcG9uZW50KT0+e1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICBkZW5pZWRmb2xsb3codGhlT3RoZXJQZXJzb25JZCxpZENvbXBvbmVudCxwcm9wcy50b2tlbikudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0bm90aWZpY2F0aW9ucyhlPT57cmV0dXJuIFsuLi5lLmZpbHRlcihlPT4gZS5faWQhPWlkQ29tcG9uZW50KV19KVxyXG5cclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWNjZXB0Zm9sbG93Zm49KHRoZU90aGVyUGVyc29uSWQsaWRDb21wb25lbnQpPT57XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGFjY2VwdGZvbGxvdyh0aGVPdGhlclBlcnNvbklkLGlkQ29tcG9uZW50LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRub3RpZmljYXRpb25zKGU9PntyZXR1cm4gWy4uLmUuZmlsdGVyKGU9PiBlLl9pZCE9aWRDb21wb25lbnQpXX0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaGVhZGVyfT48aDE+Tm90aWZjYXRpb248L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAobm90aWY9PntcclxuICAgICAgICAgICAgICAgIGlmKG5vdGlmLnR5cGU9PVwiZm9sbG93XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdGlmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25vdGlmLmZyb20uY3VycmVudEltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e25vdGlmLmZyb20udXNlck5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPndhbnQgdG8gZm9sbG93IHlvdTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5idG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5kZW5pZWRmb2xsb3dmbihub3RpZi5mcm9tLl9pZCxub3RpZi5faWQpfT57TG9hZGluZz09ZmFsc2U/PHA+cmVqZWN0PC9wPjo8ZGl2IGNsYXNzTmFtZT17U3R5bGUubGRzcmluZ30+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj59PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+YWNjZXB0Zm9sbG93Zm4obm90aWYuZnJvbS5faWQsbm90aWYuX2lkKX0+e0xvYWRpbmc9PWZhbHNlPzxwPmFwcm92ZTwvcD46PGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc3Jpbmd9PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG5vdGlmLnR5cGU9PVwiZm9sbG93IGRpcmVjdGx5XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1N0eWxlLm5vdGlmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnVzZXJJbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25vdGlmLmZyb20uY3VycmVudEltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e25vdGlmLmZyb20udXNlck5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBmb2xsb3dkIHlvdTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90aWZpY2F0aW9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIm5vdGlmaWNhdGlvbl9jb250YWluZXJfX3Q1Q21IXCIsXG5cdFwic2hvd05vdGlmXCI6IFwibm90aWZpY2F0aW9uX3Nob3dOb3RpZl9fMzQzTE5cIixcblx0XCJoZWFkZXJcIjogXCJub3RpZmljYXRpb25faGVhZGVyX19ROUJkSFwiLFxuXHRcIm5vdGlmXCI6IFwibm90aWZpY2F0aW9uX25vdGlmX18xbEVmWVwiLFxuXHRcInVzZXJcIjogXCJub3RpZmljYXRpb25fdXNlcl9fMXFkWXJcIixcblx0XCJ1c2VySW1hZ2VDb250YWluZXJcIjogXCJub3RpZmljYXRpb25fdXNlckltYWdlQ29udGFpbmVyX18xNTdGWlwiLFxuXHRcInRleHRcIjogXCJub3RpZmljYXRpb25fdGV4dF9fMlhDaDBcIixcblx0XCJidG5zXCI6IFwibm90aWZpY2F0aW9uX2J0bnNfXzNjZDB3XCIsXG5cdFwibGRzcmluZ1wiOiBcIm5vdGlmaWNhdGlvbl9sZHNyaW5nX18xT1N5elwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vcG9wVXBNZXNzYWdlLm1vZHVsZS5zY3NzJ1xyXG5jb25zdCBwb3BVcE1lc3NhZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLmZuY2xvc2UoKVxyXG4gICAgICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgIDxEaWFsb2dcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFsZXJ0LWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj57XCJOb3p6bGFcIn08L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLmVycm9yVGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMub3BlblBvcFVwLnRleHR9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiIGF1dG9Gb2N1cz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtTdHlsZXMuZXJyb3JCdG5zfT5BZ3JlZTwvc3Bhbj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvcFVwTWVzc2FnZVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3BVcE1lc3NhZ2VfY29udGFpbmVyX18xWlJZbFwiLFxuXHRcImVycm9ySGVhZGVyXCI6IFwicG9wVXBNZXNzYWdlX2Vycm9ySGVhZGVyX18xbUhHYlwiLFxuXHRcImVycm9yVGV4dFwiOiBcInBvcFVwTWVzc2FnZV9lcnJvclRleHRfXzFaZmdGXCIsXG5cdFwiZXJyb3JCdG5zXCI6IFwicG9wVXBNZXNzYWdlX2Vycm9yQnRuc19fM0RVN29cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL3Byb2ZpbGVNZW51Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7cmVtb3ZlVG9rZW59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IHJlbW92ZUNvb2tpZT0odXNlcmlkKT0+e1xyXG4gICAgZmV0Y2goXCIvYXBpL2xvZ291dFwiLHttZXRob2Q6XCJwb3N0XCIsaGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn19KS50aGVuKCgpPT57XHJcbiAgICAgICAgcmVtb3ZlVG9rZW4odXNlcmlkKS50aGVuKClcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pXHJcbn1cclxuY29uc3QgcHJvZmlsZU1lbnUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaG92ZXJIYW5kbGVyfT5cclxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5saW5rc0NvbnRhaW5lcnN9PjxpbWcgc3JjPVwiL3N2Z2ljb25zL3NldHRpbmdzLnN2Z1wiIC8+PExpbmsgIGhyZWY9XCIvcHJvZmlsZVwiPjxoMj5Qcm9maWxlPC9oMj48L0xpbms+PC9kaXY+Ki99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGlua3NDb250YWluZXJzfT48TGluayAgaHJlZj1cIi9wcm9maWxlXCI+PGgyPlByb2ZpbGU8L2gyPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5saW5rc0NvbnRhaW5lcnN9IG9uQ2xpY2s9eygpPT5yZW1vdmVDb29raWUodXNlci5faWQpfT48aW1nIHNyYz1cIi9zdmdpY29ucy9sb2ctb3V0LnN2Z1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz48TGluayAgaHJlZj1cIi9wcm9maWxlXCI+PGgyPkxvZyBvdXQ8L2gyPjwvTGluaz48L2Rpdj4qL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5saW5rc0NvbnRhaW5lcnN9IG9uQ2xpY2s9eygpPT5yZW1vdmVDb29raWUodXNlci5faWQpfT48TGluayAgaHJlZj1cIi9wcm9maWxlXCI+PGgyPkxvZyBvdXQ8L2gyPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVNZW51XHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwcm9maWxlTWVudV9jb250YWluZXJfX29WS2pJXCIsXG5cdFwic2hvd2ZhZGVkXCI6IFwicHJvZmlsZU1lbnVfc2hvd2ZhZGVkX18xOHZLMlwiLFxuXHRcImhvdmVySGFuZGxlclwiOiBcInByb2ZpbGVNZW51X2hvdmVySGFuZGxlcl9fUW5janhcIixcblx0XCJsaW5rc0NvbnRhaW5lcnNcIjogXCJwcm9maWxlTWVudV9saW5rc0NvbnRhaW5lcnNfXzJsMW9mXCIsXG5cdFwic2V0dGluZ3NcIjogXCJwcm9maWxlTWVudV9zZXR0aW5nc19fdG50MlRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vc2VhcmNoVXNlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHtzZWFyY2hVc2VyTmFtZUFwaX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcidcclxuXHJcblxyXG5jb25zdCBzZWFyY2hVc2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYocHJvcHMuc2VhcmNoVXNlck5hbWUhPXVuZGVmaW5lZCYmIHByb3BzLnNlYXJjaFVzZXJOYW1lLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkocHJvcHMuc2VhcmNoVXNlck5hbWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbcHJvcHMuc2VhcmNoVXNlck5hbWVdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgIHtsaXN0T2ZVc2Vycy5tYXAoZT0+PFVzZXJzIGtleT17ZS5faWR9IHVzZXJEYXRhPXtlfT48L1VzZXJzPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFVzZXJcclxuY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhIGhyZWY9e2AvcHJvZmlsZS8ke3Byb3BzLnVzZXJEYXRhLl9pZH1gfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLmltZ0NvbnRhaW5lcn0+PGltZyBzcmM9e3Byb3BzLnVzZXJEYXRhLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e1N0eWxlLnVzZXJOYW1lfT48cD57cHJvcHMudXNlckRhdGEudXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzZWFyY2hVc2VyX2NvbnRhaW5lcl9fMUdkLWxcIixcblx0XCJ1c2VyQ29udGFpbmVyXCI6IFwic2VhcmNoVXNlcl91c2VyQ29udGFpbmVyX18xVUtsbFwiLFxuXHRcImltZ0NvbnRhaW5lclwiOiBcInNlYXJjaFVzZXJfaW1nQ29udGFpbmVyX18yMmZGN1wiLFxuXHRcInVzZXJOYW1lXCI6IFwic2VhcmNoVXNlcl91c2VyTmFtZV9fMl92UlpcIixcblx0XCJGb2xsb3dBbmRVbmZvbGxvd0NvbnRhaW5lclwiOiBcInNlYXJjaFVzZXJfRm9sbG93QW5kVW5mb2xsb3dDb250YWluZXJfXzJUV2p1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL3ZlcmlmeUFjY291bnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9sYW5ndWFnZUNvbnRleHQnXHJcbmltcG9ydCB7YWN0aXZlQWNjb3VudCxyZVNlbmRWZXJpZmljYXRpb25Db2RlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEFwaUlzTG9hZGluZ0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9hcGlJc0xvYWRpbmdDb250ZXh0J1xyXG5jb25zdCB2ZXJpZnlBY2NvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IFJlYWN0LnVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KVxyXG4gICAgY29uc3QgW2NvZGUsc2V0Q29kZV09UmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlQ29udGV4dChBcGlJc0xvYWRpbmdDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IHJlU2VuZENvZGU9KCk9PntcclxuICAgICAgICByZVNlbmRWZXJpZmljYXRpb25Db2RlKHByb3BzLnVzZXJJZCxjb2RlLnZlcmlmaWNhdGlvbkNvZGUpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHZlcmlmeVVzZXJBY2NvdW50PSgpPT57XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgYWN0aXZlQWNjb3VudChwcm9wcy51c2VySWQsY29kZS52ZXJpZmljYXRpb25Db2RlKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5zdGF0ZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRFcnJvck1lc3NhZ2VQcm9wcyh7IHN0YXRlOiB0cnVlLCB0ZXh0OiByZXN1bHQuZGF0YS5tZXNzYWdlIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3NldFRva2VuXCIse21ldGhvZDpcInBvc3RcIixoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSxib2R5OkpTT04uc3RyaW5naWZ5KHt0b2tlbjpyZXN1bHQuZGF0YS50b2tlbn0pfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmX3Rva2VuXCIscmVzdWx0LmRhdGEucmVmX3Rva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7cGF0aG5hbWU6XCIvXCIscXVlcnk6IHsgcmVmcmVjaDogdHJ1ZSB9fSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29kZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgc2V0Q29kZSh7dmVyaWZpY2F0aW9uQ29kZTplLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Db250YWluZXJWZXJpZmljYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5WZXJpZmljYXRpb25IZWFkZXJ9PjxoMT5TbW91Znk8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5kaXNjcnB0aW9ufT48cD52ZXJpZmljYXRpb24gY29kZSBpcyBzZW50IHRvIHlvdXIgZW1haWwgb3UgdGVsZWZvbmUgdHlwZSBpdCBoZXJlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17U3R5bGUuZm9ybX0gb25TdWJtaXQ9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRDb250YWluZXJ9PjxpbnB1dCBuYW1lPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtsYW5ndWFnZS52ZXJpZmljYXRpb25jb2RlfSBjbGFzc05hbWU9e1N0eWxlLmlucHV0fSBvbkNoYW5nZT17KGUpID0+IGNvZGVIYW5kbGVyKGUpfSByZXF1aXJlZCAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e1N0eWxlLlJlc2VuZGNvZGV9IG9uQ2xpY2s9eygpPT5yZVNlbmRDb2RlKCl9PlJlc2VuZCBjb2RlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT52ZXJpZnlVc2VyQWNjb3VudCgpfSAgY2xhc3NOYW1lPXtTdHlsZS5idG59PntsYW5ndWFnZS5zZW5kfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5QWNjb3VudFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250YWluZXJWZXJpZmljYXRpb25cIjogXCJ2ZXJpZnlBY2NvdW50X0NvbnRhaW5lclZlcmlmaWNhdGlvbl9fMXE4V1RcIixcblx0XCJkaXNjcnB0aW9uXCI6IFwidmVyaWZ5QWNjb3VudF9kaXNjcnB0aW9uX18xYjNsVVwiLFxuXHRcIlZlcmlmaWNhdGlvbkhlYWRlclwiOiBcInZlcmlmeUFjY291bnRfVmVyaWZpY2F0aW9uSGVhZGVyX18xdE15eFwiLFxuXHRcImlucHV0Q29udGFpbmVyXCI6IFwidmVyaWZ5QWNjb3VudF9pbnB1dENvbnRhaW5lcl9fM1dEdkpcIixcblx0XCJSZXNlbmRjb2RlXCI6IFwidmVyaWZ5QWNjb3VudF9SZXNlbmRjb2RlX18zQm54ZVwiLFxuXHRcImJ0blwiOiBcInZlcmlmeUFjY291bnRfYnRuX18zeFJGbFwiLFxuXHRcImlucHV0XCI6IFwidmVyaWZ5QWNjb3VudF9pbnB1dF9fMU1lNFNcIixcblx0XCJsYWJlbHNwYW5cIjogXCJ2ZXJpZnlBY2NvdW50X2xhYmVsc3Bhbl9fM3JPeC1cIlxufTtcbiIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBhcGlJc0xvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChcImVuZ1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpSXNMb2FkaW5nQ29udGV4dCIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFwiZW5nXCIpO1xyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZUNvbnRleHQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgc29ja2V0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtyZWZyZXNoQWNjZXNzVG9rZW4sZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWZyZXNoQWNjZXNzVG9rZW4nXHJcbmNvbnN0IGF4aW9zQXBpSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vYmFzZVVSTDogJ2h0dHA6Ly8xMjcuMC4wLjE6NTAxMC8nLFxyXG4gIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjUwMTAvJyxcclxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxufSlcclxuYXhpb3NBcGlJbnN0YW5jZS5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXHJcbi8vYXhpb3NBcGlJbnN0YW5jZS5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAxMC8nIC8vIHNldCBkZWZhdWx0IHVybFxyXG5heGlvc0FwaUluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICBhc3luYyBjb25maWcgPT4ge1xyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0sXHJcbiAgZXJyb3IgPT4ge1xyXG5cclxuICAgIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG59KTtcclxuYXhpb3NBcGlJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXNwb25zZVxyXG59LCBhc3luYyBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICBjb25zb2xlLmxvZyhlcnJvcilcclxuICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWc7XHJcbiAgaWYoZXJyb3IubWVzc2FnZT09XCJOZXR3b3JrIEVycm9yXCIpe1xyXG4gICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmX3Rva2VuJyk7XHJcbiAgIC8vIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvbG9nb3V0XCIpIC8vIGNoYW5nZSB0b2tlbiBpbiBjb29raWVzIHRvIHRoZSBiZXcgb25lXHJcblxyXG4gICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcclxuICAgIC8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PTQwMSl7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmX3Rva2VuJyk7XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL2xvZ291dFwiKSAvLyBjaGFuZ2UgdG9rZW4gaW4gY29va2llcyB0byB0aGUgYmV3IG9uZVxyXG4gICAgd2luZG93LnJlbG9hZCgpXHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KXtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgJiYgIW9yaWdpbmFsUmVxdWVzdC5fcmV0cnkpIHtcclxuICAgICAgb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGF3YWl0IHJlZnJlc2hBY2Nlc3NUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZl90b2tlblwiKSk7IFxyXG4gICAgICBkZWxldGVSZWZyZWNoVG9rZW5PbGRPbmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZfdG9rZW5cIikpXHJcbiAgICAgIC8vIHNlbmQgdGhlIHJlZiB0b2tlbiBhbmQgZ2V0IG5ldyB0b2tlblxyXG4gICAgICBvcmlnaW5hbFJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgYWNjZXNzX3Rva2VuLmRhdGEudG9rZW47XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvc2V0VG9rZW5cIix7dG9rZW46YWNjZXNzX3Rva2VuLmRhdGEudG9rZW59KSAvLyBjaGFuZ2UgdG9rZW4gaW4gY29va2llcyB0byB0aGUgYmV3IG9uZVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZl90b2tlblwiLGFjY2Vzc190b2tlbi5kYXRhLnJlZl90b2tlbikgLy8gc2F2ZSB0aGUgbmV3IHJlZl90b2tlblxyXG4gICAgICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZShvcmlnaW5hbFJlcXVlc3QpOyAvLyByZXR1cm4gbmV3ICByZXF1ZXN0IHdpdGggdGhlIG5ldyB0b2tlblxyXG4gIH1cclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcbmV4cG9ydCAgZGVmYXVsdCBheGlvc0FwaUluc3RhbmNlOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dClcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICBjb25zdCBsb2NhbGVEb21haW4gPSBnZXREb21haW5Mb2NhbGUoXG4gICAgICBhcyxcbiAgICAgIGN1ckxvY2FsZSxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZXMvY2hhdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFBpY2tlcixFbW9qaSAgfSBmcm9tICdlbW9qaS1tYXJ0J1xyXG5pbXBvcnQgJ2Vtb2ppLW1hcnQvY3NzL2Vtb2ppLW1hcnQuY3NzJ1xyXG5pbXBvcnQge3NlYXJjaFVzZXJOYW1lQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQge3VwZGF0ZUNvbG9yQ2hhdCxhZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdCc7XHJcbmltcG9ydCBzb2NrZXRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvc29ja2V0Q29udGV4dCdcclxuaW1wb3J0IHVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXHJcblxyXG5cclxuY29uc3QgY2hhdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSxzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vtb2ppQ29udGFpbmVySGVpZ2h0LCBzZXRFbW9qaUNvbnRhaW5lckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSg5KS8vcmVzcG9uc2l2ZSBoYW5kbGVyXHJcbiAgICBjb25zdCBbbGlzdE9mVXNlcnMsc2V0TGlzdE9mVXNlcnNdPVJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyVG9DaGF0V2l0aCxzZXRDdXJyZW50VXNlclRvQ2hhdFdpdGhdPVJlYWN0LnVzZVN0YXRlKHtjdXJyZW50SW1hZ2VVcmw6dW5kZWZpbmVkLHVzZXJOYW1lOnVuZGVmaW5lZCxfaWQ6dW5kZWZpbmVkfSlcclxuICAgIGNvbnN0IFttZXNzYWdlLHNldE1lc3NhZ2VdPVJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY3VycmVudENoYXRzLHNldEN1cnJlbnRDaGF0c109UmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBtZXNzYWdlc0NvbXA9UmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXT1SZWFjdC51c2VDb250ZXh0KHVzZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdPVJlYWN0LnVzZUNvbnRleHQoc29ja2V0Q29udGV4dClcclxuICAgIGNvbnN0IFtza2lwLHNldFNraXBdPVJlYWN0LnVzZVN0YXRlKCgpPT4wKVxyXG4gICAgY29uc3QgW2lzV3JpdGluZ1N0YXRlLHNldElzV3JpdGluZ1N0YXRlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjaGF0Q29sb3Isc2V0Q2hhdENvbG9yXT1SZWFjdC51c2VTdGF0ZSh7Y29sb3JvbmU6XCIjMTg3NmYzXCIsY29sb3J0d286XCIjZTRlNmViXCJ9KVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyLl9pZCE9dW5kZWZpbmVkJiYgdXNlci5faWQubGVuZ3RoPjIpXHJcbiAgICAgICAgZ2V0VXNlcldob0NoYXRXaXRoKHt9LHByb3BzLnRva2VuKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlcldob0NoYXRXaXRoPXJlc3VsdC5kYXRhLmRhdGEubWFwKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKGUuZmlyc3RVc2VyLl9pZD09dXNlci5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuc2Vjb3VuZFVzZXIsY29sb3I6ZS5jb2xvcixub3RTZWVuTWVzc2FnZU51bWJlcjplLm5vdFNlZW5NZXNzYWdlTnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoey4uLmUuZmlyc3RVc2VyLGNvbG9yOmUuY29sb3Isbm90U2Vlbk1lc3NhZ2VOdW1iZXI6ZS5ub3RTZWVuTWVzc2FnZU51bWJlcn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChuZXdVc2VyV2hvQ2hhdFdpdGgpLnRoZW4obmV3YXJyYXk9PntcclxuICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhbLi4ubmV3YXJyYXldKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICBcclxuICAgICAgICAgIH0pLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUubWVzc2FnZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uKHtzZWNvbmRVc2VyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2tpcDowfSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhbLi4uZGF0YS5kYXRhLmRhdGEucmV2ZXJzZSgpXSlcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICAgIH0sW2N1cnJlbnRVc2VyVG9DaGF0V2l0aF0pXHJcbiAgICBjb25zdCBhZGRFbW9qaT0oZSk9PntcclxuICAgICAgICBsZXQgc3ltID0gZS51bmlmaWVkLnNwbGl0KCctJylcclxuICAgICAgICBsZXQgY29kZXNBcnJheSA9IFtdXHJcbiAgICAgICAgc3ltLmZvckVhY2goZWwgPT4gY29kZXNBcnJheS5wdXNoKCcweCcgKyBlbCkpXHJcbiAgICAgICAgbGV0IGVtb2ppID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZXNBcnJheSlcclxuICAgICAgICBzZXRNZXNzYWdlKGVsPT57cmV0dXJuIGVsK2Vtb2ppfSlcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGNsb3NlT3JPcGVuRW1vamlQaWNrZXI9KCk9PntcclxuICAgICAgICBzZXRjbG9zZU9yT3BlbkVtb2ppUGlja2VyU3RhdGUoZT0+IWUpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VhcmNoRm9yVXNlcj0oZSk9PntcclxuICAgICAgICAgICAgc2VhcmNoVXNlck5hbWVBcGkoZS50YXJnZXQudmFsdWUscHJvcHMudG9rZW4pLnRoZW4oKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuZGF0YSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0T2ZVc2VycyhlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LmRhdGEuZGF0YV1cclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2V0VXNlcmRhdGFGbj0oY3VycmVudFVzZXJEYXRhKT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyVG9DaGF0V2l0aChjdXJyZW50VXNlckRhdGEpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2U9KCk9PntcclxuICAgICAgICBpZihtZXNzYWdlLmxlbmd0aD4wJiZjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGFkZE1lc3NhZ2Uoe3JlY2VpdmVyOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsbWVzc2FnZTptZXNzYWdlLEZpcnN0VGltZTpjdXJyZW50Q2hhdHMubGVuZ3RofSxwcm9wcy50b2tlbikudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDaGF0cyhlPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W3VzZXIuX2lkXSxtZXNzYWdlOm1lc3NhZ2UsX2lkOnJ9XVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcC5jdXJyZW50LnNjcm9sbFRvcD1tZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxIZWlnaHQrIG1lc3NhZ2VzQ29tcC5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLHtvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHRleHQ6bWVzc2FnZSxzZW5kZXJJZDp1c2VyLl9pZH0pXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXNzYWdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICAgIGlmKGN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiaXNXcml0aW5nXCIse2lzV3JpdGluZzp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJpc1dyaXRpbmdcIix7aXNXcml0aW5nOmZhbHNlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWQsc2VuZGVyaWQ6dXNlci5faWR9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXN5bmMgIGZ1bmN0aW9uICBjaGF0SGFuZGxlcihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vbXNnU291bmQubXAzXCIpXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICBzZXRJc1dyaXRpbmdTdGF0ZShmYWxzZSlcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJ2dVwiLHtzdGF0ZTp0cnVlLG90aGVyVXNlcklkOmN1cnJlbnRVc2VyVG9DaGF0V2l0aC5faWR9KVxyXG5cclxuICAgICAgICAgICAgLyppZih2dT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwidnVcIix7c3RhdGU6dHJ1ZSxvdGhlclVzZXJJZDpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSlcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGxldCBMaXN0T2ZVc2VyID0gYXdhaXQgbGlzdE9mVXNlcnMubWFwKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09ZS5faWQgJiYgY3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCE9ZS5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUubm90U2Vlbk1lc3NhZ2VOdW1iZXI9ZS5ub3RTZWVuTWVzc2FnZU51bWJlcisxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChMaXN0T2ZVc2VyKS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdE9mVXNlcnMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYoZGF0YS5zZW5kZXJJZD09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZCl7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uZSx7dXNlcnM6W2RhdGEuc2VuZGVySWRdLG1lc3NhZ2U6ZGF0YS50ZXh0LF9pZDpyfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXAuY3VycmVudC5zY3JvbGxUb3A9bWVzc2FnZXNDb21wLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KyBtZXNzYWdlc0NvbXAuY3VycmVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNXcml0aW5nKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnVzZXJXaG9SZWNpdmVXcml0aW5nPT11c2VyLl9pZCAmJiBkYXRhLnNlbmRlcmlkPT1jdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkKXtcclxuICAgICAgICAgICAgICAgIHNldElzV3JpdGluZ1N0YXRlKGRhdGEuaXNXcml0aW5nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXR2dT0oZGF0YSk9PntcclxuICAgXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoU3R5bGUueW91ck1lc3NhZ2VWdSkubGVuZ3RoIT0wKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50Q2hhdHMubGVuZ3RoLTE7IGk+MDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yIT1cInJnYigyNCwgMTE4LCAyNDMpXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShTdHlsZS55b3VyTWVzc2FnZVZ1KVtpXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmNvbG9yPVwicmdiKDI0LCAxMTgsIDI0MylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgIHNvY2tldC5vbihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgIHNvY2tldC5vbihcImdldE1lc3NhZ2VGcm9tVXNlclRvVXNlclwiLGNoYXRIYW5kbGVyKVxyXG4gICAgICAgIHNvY2tldC5vbihcInNldHZ1XCIsc2V0dnUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzb2NrZXQhPXVuZGVmaW5lZCAmJiBzb2NrZXQhPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZUZyb21Vc2VyVG9Vc2VyJywgY2hhdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcImlzV3JpdGluZ1N0YXRlXCIsaXNXcml0aW5nKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZihcInNldHZ1XCIsc2V0dnUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHNjcm9sbGZuPShlKT0+e1xyXG4gICAgICAgICAgLy9pZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAoZS50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZS50YXJnZXQub2Zmc2V0SGVpZ2h0KSl7XHJcbiAgICAgICAgICBpZiggZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgc2V0U2tpcChlPT5lKzIwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICBnZXRNZXNzYWdlc09mQ3VycmVudGNvbnZlcnNhdGlvbih7c2Vjb25kVXNlcjpjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkLHNraXA6c2tpcH0scHJvcHMudG9rZW4pLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q2hhdHMoZT0+Wy4uLmRhdGEuZGF0YS5kYXRhLnJldmVyc2UoKSwuLi5lXSlcclxuICAgICAgICAgICBcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9LFtza2lwXSlcclxuICAgICAgY29uc3QgZ2V0TmV3Q29sb3I9KGNvbG9yKT0+e1xyXG4gICAgICAgIHNldENoYXRDb2xvcihlPT57cmV0dXJuIHsuLi5lLGNvbG9yb25lOmNvbG9yfX0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2V0Q29sb3JPZkNoYXRGbj0oY29sb3JPZkNoYXRGcm9tRGF0YUJhc2UpPT57XHJcbiAgICAgICAgc2V0Q2hhdENvbG9yKGU9PntcclxuICAgICAgICAgICAgcmV0dXJuey4uLmUsY29sb3JvbmU6Y29sb3JPZkNoYXRGcm9tRGF0YUJhc2V9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZCYXIgdG9rZW49e3Byb3BzLnRva2VufT48L05hdkJhcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0QW5kUmFuZG9tT25saW5lVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuVXNlckNvbnRhbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Y29udGFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxpc3RDb250YWNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RPZlVzZXJzLm1hcChlPT48VXNlcnMgc2V0Q29sb3JPZkNoYXQ9e3NldENvbG9yT2ZDaGF0Rm59IGdldFVzZXJkYXRhPXtnZXRVc2VyZGF0YUZufSBrZXk9e2UuX2lkfSAgdXNlckRhdGE9e2V9PjwvVXNlcnM+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnNlYXJjaENvbnRhaW5lcn0+PGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Y3NzfT48aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2VhcmNoRm9yVXNlcihlKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZD48L2lucHV0PjxsYWJlbD48c3Bhbj5TZWFyY2ggdXNlcnM8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmhlYWRlck9mQ2hhdHVzZXJOYW1lQW5kTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckltYWdlQ29udGFpbmVyfT48aW1nIHNyYz17Y3VycmVudFVzZXJUb0NoYXRXaXRoLmN1cnJlbnRJbWFnZVVybCB8fCBcIi9hdmF0YXIucG5nXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxoMz57Y3VycmVudFVzZXJUb0NoYXRXaXRoLnVzZXJOYW1lfTwvaDM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcml0aW5nU3RhdGUmJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5pc1dyaXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxkc2VsbGlwc2lzfT48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jaGFuZ2VDb2xvckNvbnRhaW5lcn0+PENvbG9yUGlja2VyIHJlY2VpdmVyPXtjdXJyZW50VXNlclRvQ2hhdFdpdGguX2lkfSB0b2tlbj17cHJvcHMudG9rZW59IGdldE5ld0NvbG9yZm49e2dldE5ld0NvbG9yfSBjaGF0Q29sb3I9e2NoYXRDb2xvcn0+PC9Db2xvclBpY2tlcj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25TY3JvbGw9eyhlKT0+c2Nyb2xsZm4oZSl9IHJlZj17bWVzc2FnZXNDb21wfSBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Q2hhdHMubWFwKGU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGRpdiBrZXk9e2UuX2lkfSBjbGFzc05hbWU9e1N0eWxlLm9uZU1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS51c2Vyc1swXT09Y3VycmVudFVzZXJUb0NoYXRXaXRoLl9pZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1lc3NhZ2VUZXh0fSB0ZXh0LWRhdGE9e2UuZGF0ZSE9dW5kZWZpbmVkP2UuZGF0ZS5zbGljZSgwLDEwKStcIiBcIitlLmRhdGUuc2xpY2UoMTEsMTYpOlwiZmFsc2VcIn0gIHN0eWxlPXt7XCItLWlcIjpcIjAlXCIsZmxvYXQ6XCJsZWZ0XCIsYmFja2dyb3VuZENvbG9yOlwiI2U0ZTZlYlwiLGNvbG9yOlwiYmxhY2tcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlLm1lc3NhZ2VUZXh0fSAke1N0eWxlLnlvdXJNZXNzYWdlVnV9IGB9ICAgdGV4dC1kYXRhPXtlLmRhdGUhPXVuZGVmaW5lZD9lLmRhdGUuc2xpY2UoMCwxMCkrXCIgXCIrZS5kYXRlLnNsaWNlKDExLDE2KTpcImZhbHNlXCJ9ICBzdHlsZT17e1wiLS1pXCI6XCItMTAwJVwiLGZsb2F0OlwicmlnaHRcIixiYWNrZ3JvdW5kQ29sb3I6Y2hhdENvbG9yLmNvbG9yb25lLGNvbG9yOlwid2hpdGVcIn19PjxwPntlLm1lc3NhZ2V9PC9wPjxzcGFuICBzdHlsZT17ZS5zZWVuPT10cnVlP3tjb2xvcjpcIiMxODc2ZjNcIn06e2NvbG9yOlwiYmxhY2tcIn19IGNsYXNzTmFtZT17U3R5bGUuc2Vlbn0gPiYjMTAwMDQ7PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlPT5lLnByZXZlbnREZWZhdWx0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmlucHV0Q29udGFpbmVyfT48ZGl2IGNsYXNzTmFtZT17U3R5bGUuaW5wdXRjc3N9PjxpbnB1dCAgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9Pm1lc3NhZ2VIYW5kbGVyKGUpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPjwvaW5wdXQ+PGxhYmVsPjxzcGFuPk1lc3NhZ2U8L3NwYW4+PC9sYWJlbD48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUub3Blbk9yQ2xvc2VFbW9qaVBpY2tlcn0gb25DbGljaz17KCk9PmNsb3NlT3JPcGVuRW1vamlQaWNrZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5lbW9qaUxvZ299PjxFbW9qaSBlbW9qaT17eyBpZDogJ3NtaWxpbmdfZmFjZV93aXRoXzNfaGVhcnRzJywgc2tpbjogMyB9fSBzaXplPXsxNn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nsb3NlT3JPcGVuRW1vamlQaWNrZXJTdGF0ZSYmPGRpdiBjbGFzc05hbWU9e1N0eWxlLmVtb2ppUGlja2VyQ29udGFpbmVyfT48UGlja2VyIHBlckxpbmU9e0Vtb2ppQ29udGFpbmVySGVpZ2h0fSBvblNlbGVjdD17KGUpPT5hZGRFbW9qaShlKX0gLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtTdHlsZS5idG5zZW5kfSBvbkNsaWNrPXsoKT0+c2VuZE1lc3NhZ2UoKX0+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZS5zZW5kTWVzc2FnZUJ0bn0gPjxTZW50U3ZnPjwvU2VudFN2Zz48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiByZXEuY29va2llcy50b2tlbiA/IHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIH0gfSA6IHsgcHJvcHM6IHsgdG9rZW46IGZhbHNlIH0gfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgU2VudFN2Zz0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PGcgaWQ9XCJMYXllcl85NVwiIGRhdGEtbmFtZT1cIkxheWVyIDk1XCI+PHBhdGggZD1cIk01My4wNiwxMC45NGExLjUsMS41LDAsMCwwLTEuNTMtLjM2bC00MCwxMy4zM2ExLjUxLDEuNTEsMCwwLDAtLjA2LDIuODNsMTguNyw3LjA5LDcuMDksMTguN2ExLjUxLDEuNTEsMCwwLDAsMS40NCwxLDEuNDksMS40OSwwLDAsMCwxLjM5LTFsMTMuMzMtNDBBMS41LDEuNSwwLDAsMCw1My4wNiwxMC45NFpcIi8+PHBhdGggZD1cIk0yMC4yMiwzNS40OGExLjUsMS41LDAsMCwwLTIuMTItMi4xMmwtNC40OCw0LjQ4YTEuNTEsMS41MSwwLDAsMCwwLDIuMTIsMS40OSwxLjQ5LDAsMCwwLDIuMTIsMFpcIi8+PHBhdGggZD1cIk0yMy44OCw0MC4xMmExLjQ5LDEuNDksMCwwLDAtMi4xMiwwTDE2LjA4LDQ1LjhhMS41LDEuNSwwLDAsMCwyLjEyLDIuMTJsNS42OC01LjY4QTEuNDksMS40OSwwLDAsMCwyMy44OCw0MC4xMlpcIi8+PHBhdGggZD1cIk0yOC41Miw0My43OCwyNCw0OC4yNmExLjUsMS41LDAsMCwwLDIuMTIsMi4xMmw0LjQ4LTQuNDhBMS41LDEuNSwwLDAsMCwyOC41Miw0My43OFpcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgIClcclxuICB9XHJcbiAgY29uc3QgVXNlcnM9KHByb3BzKT0+e1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsLHNldE5vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWxdPVJlYWN0LnVzZVN0YXRlKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXROb3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsKHByb3BzLnVzZXJEYXRhLm5vdFNlZW5NZXNzYWdlTnVtYmVyKVxyXG4gICAgICB9LFtwcm9wcy51c2VyRGF0YS5ub3RTZWVuTWVzc2FnZU51bWJlcl0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj48ZGl2IGNsYXNzTmFtZT17U3R5bGUudXNlckNvbnRhaW5lcn0gb25DbGljaz17KCk9Pntwcm9wcy5nZXRVc2VyZGF0YShwcm9wcy51c2VyRGF0YSksc2V0Tm90U2Vlbk1lc3NhZ2VOdW1iZXJsb2NhbCgwKSxwcm9wcy5zZXRDb2xvck9mQ2hhdChwcm9wcy51c2VyRGF0YS5jb2xvcil9fT5cclxuICAgICAgICAgICAgICAgIHtub3RTZWVuTWVzc2FnZU51bWJlcmxvY2FsIT0wJiY8ZGl2IGNsYXNzTmFtZT17U3R5bGUubm90U2Vlbk1lc3NhZ2VOdW1iZX0+PHNwYW4+e25vdFNlZW5NZXNzYWdlTnVtYmVybG9jYWx9PC9zcGFuPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUuaW1nQ29udGFpbmVyfT48aW1nIHNyYz17cHJvcHMudXNlckRhdGEuY3VycmVudEltYWdlVXJsIHx8IFwiL2F2YXRhci5wbmdcIn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17U3R5bGUudXNlck5hbWV9PjxwPntwcm9wcy51c2VyRGF0YS51c2VyTmFtZX08L3A+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb2xvclBpY2tlcj0ocHJvcHMpPT57XHJcbiAgICBjb25zdCBbb3BlbkNvbG9yUGlja2VyLHNldE9wZW5Db2xvclBpY2tlcl09UmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBjaGFuZ2VQcmltYXJ5Q29sb3I9KGNvbG9yKT0+e1xyXG4gICAgICAgIHByb3BzLmdldE5ld0NvbG9yZm4oY29sb3IpXHJcbiAgICAgICAgdXBkYXRlQ29sb3JDaGF0KHtuZXdDb2xvcjpjb2xvcixyZWNlaXZlcjpwcm9wcy5yZWNlaXZlcn0scHJvcHMudG9rZW4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4oPGRpdiBvbkNsaWNrPXsoKT0+c2V0T3BlbkNvbG9yUGlja2VyKGU9PiFlKX0gY2xhc3NOYW1lPXtTdHlsZS5jaGF0Q29sb3J9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOnByb3BzLmNoYXRDb2xvci5jb2xvcm9uZX19PlxyXG4gICAgICAgIHtvcGVuQ29sb3JQaWNrZXImJjxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvclBpY2tlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2Y1MDA1N1wiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZjUwMDU3XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMzZDVhZmVcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzNkNWFmZVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNzZmZjAzXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM3NmZmMDNcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2M2ZmYwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjYzZmZjAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmZjNkMDBcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2ZmM2QwMFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjNjUxZmZmXCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiM2NTFmZmZcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiI2ZmZWEwMFwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZmZlYTAwXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiNmNTAwNTdcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiI2Y1MDA1N1wifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29sb3J9IG9uQ2xpY2s9eygpPT5jaGFuZ2VQcmltYXJ5Q29sb3IoXCIjZmYxNzQ0XCIpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNmZjE3NDRcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbG9yfSBvbkNsaWNrPXsoKT0+Y2hhbmdlUHJpbWFyeUNvbG9yKFwiIzFkZTliNlwiKX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMWRlOWI2XCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb2xvcn0gb25DbGljaz17KCk9PmNoYW5nZVByaW1hcnlDb2xvcihcIiMwM2E5ZjRcIil9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiIzAzYTlmNFwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBheGlvc0FwaUluc3RhbmNlIGZyb20gJy4uL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yJ1xyXG5cclxuY29uc3QgYWRkTWVzc2FnZT1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9jaGF0L2FkZE1lc3NhZ2VcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uPWFzeW5jKGRhdGEsdG9rZW4pPT57XHJcbiAgICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL2NoYXQvZ2V0TWVzc2FnZXNPZkN1cnJlbnRjb252ZXJzYXRpb25cIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IGdldFVzZXJXaG9DaGF0V2l0aD1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9jaGF0L2dldFVzZXJXaG9DaGF0V2l0aFwiLHsuLi5kYXRhfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgZ2V0VW5yZWFkVXNlcnNDaGF0c051bWJlcj1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9jaGF0L2dldFVucmVhZFVzZXJzQ2hhdHNOdW1iZXJcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZUNvbG9yQ2hhdD1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9jaGF0L3VwZGF0ZUNvbG9yQ2hhdFwiLHsuLi5kYXRhfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuZXhwb3J0IHt1cGRhdGVDb2xvckNoYXQsZ2V0VW5yZWFkVXNlcnNDaGF0c051bWJlcixhZGRNZXNzYWdlLGdldE1lc3NhZ2VzT2ZDdXJyZW50Y29udmVyc2F0aW9uLGdldFVzZXJXaG9DaGF0V2l0aH0iLCJpbXBvcnQgYXhpb3NBcGlJbnN0YW5jZSBmcm9tICcuLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvcidcclxuXHJcbmNvbnN0IGdldEZvbGxvd2luZ09mVXNlcj1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9mb2xsb3dpbmcvZ2V0Rm9sbG93aW5nT2ZVc2VyXCIsey4uLmRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxuICB9XHJcbiAgY29uc3QgdW5mb2xsb3dVc2VyQXBpPWFzeW5jKGZvbGxvd2luZ2lkLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9mb2xsb3dpbmcvdW5mb2xsb3dVc2VyXCIse2ZvbGxvd2luZ2lkOmZvbGxvd2luZ2lkfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbiAgfVxyXG4gIGNvbnN0IGZvbGxvd1VzZXJBcGk9YXN5bmModXNlclRvRm9sbG93LHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9mb2xsb3dpbmcvZm9sbG93VXNlclwiLHtmb2xsb3dpbmdpZDp1c2VyVG9Gb2xsb3d9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxuICB9XHJcbiAgY29uc3QgY2hlY2tJZmZvbGxvd0FwaT1hc3luYyh0aGVPdGhlclBlcnNvbklkLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9mb2xsb3dpbmcvY2hlY2tJZmZvbGxvd1wiLHtmb2xsb3dpbmdpZDp0aGVPdGhlclBlcnNvbklkfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZUZvbGxvd1BlbmRpbmc9YXN5bmModGhlT3RoZXJQZXJzb25JZCx0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL3JlbW92ZUZvbGxvd1BlbmRpbmdcIix7Zm9sbG93aW5naWQ6dGhlT3RoZXJQZXJzb25JZH0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG4gIH1cclxuICBjb25zdCBhY2NlcHRmb2xsb3c9YXN5bmModGhlT3RoZXJQZXJzb25JZCxpZE5vdGlmLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9mb2xsb3dpbmcvYWNjZXB0Zm9sbG93XCIse2lkTm90aWY6aWROb3RpZix0aGVPdGhlclBlcnNvbklkOnRoZU90aGVyUGVyc29uSWR9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxuICB9XHJcbiAgY29uc3QgZGVuaWVkZm9sbG93PWFzeW5jKHRoZU90aGVyUGVyc29uSWQsaWROb3RpZix0b2tlbik9PntcclxuICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvZm9sbG93aW5nL2RlbmllZGZvbGxvd1wiLHtpZE5vdGlmOmlkTm90aWYsZm9sbG93aW5naWQ6dGhlT3RoZXJQZXJzb25JZH0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG4gIH1cclxuICBjb25zdCBjb3VudEZvbGxvd2luZ09mVXNlcj1hc3luYyhkYXRhLHRva2VuKT0+e1xyXG4gICAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi9mb2xsb3dpbmcvY291bnRGb2xsb3dpbmdPZlVzZXJcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHtjb3VudEZvbGxvd2luZ09mVXNlcixkZW5pZWRmb2xsb3csYWNjZXB0Zm9sbG93LHJlbW92ZUZvbGxvd1BlbmRpbmcsY2hlY2tJZmZvbGxvd0FwaSxmb2xsb3dVc2VyQXBpLHVuZm9sbG93VXNlckFwaSxnZXRGb2xsb3dpbmdPZlVzZXJ9IiwiaW1wb3J0IGF4aW9zQXBpSW5zdGFuY2UgZnJvbSAnLi4vaW50ZXJjZXB0b3IvaW50ZXJjZXB0b3InXHJcbmNvbnN0IGdldG5vdGlmaWNhdGlvbnMgPSBhc3luYyAoZGF0YSx0b2tlbikgPT4ge1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoJy9ub3RpZmljYXRpb24vZ2V0bm90aWZpY2F0aW9ucycse30seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pXHJcbn1cclxuZXhwb3J0IHtnZXRub3RpZmljYXRpb25zfSIsImltcG9ydCBheGlvc0FwaUluc3RhbmNlIGZyb20gJy4uL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yJ1xyXG4vLyBzZW5kIHJlZiB0b2tlbiBhbmQgZ2V0IG5ldyB0b2tlblxyXG5jb25zdCByZWZyZXNoQWNjZXNzVG9rZW49YXN5bmMgKHRva2VuKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3Rva2VuL2dldFJlZnJlc2hBY2Nlc3NUb2tlblwiLHtyZWZfdG9rZW46dG9rZW59KVxyXG59XHJcbmNvbnN0IGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZT1hc3luYyAoUmVmcmVzaEFjY2Vzc1Rva2VuKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3Rva2VuL2RlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZVwiLHtSZWZyZXNoQWNjZXNzVG9rZW46UmVmcmVzaEFjY2Vzc1Rva2VufSlcclxufVxyXG5leHBvcnQgeyByZWZyZXNoQWNjZXNzVG9rZW4gLGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZX0iLCJpbXBvcnQgYXhpb3NBcGlJbnN0YW5jZSBmcm9tICcuLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvcidcclxuY29uc3QgTG9naW4gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoJy91c2VyL2xvZ2luJyx7Li4uZGF0YX0pXHJcbn1cclxuY29uc3QgTG9naW5GYWNlYm9vayA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdCgnL3VzZXIvbG9naW5mYWNlYm9vaycsey4uLmRhdGF9KVxyXG59XHJcbmNvbnN0IFJlZ2lzdGVyID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KCcvdXNlci9yZWdpc3Rlcicsey4uLmRhdGF9KVxyXG59XHJcbmNvbnN0IEdldFVzZXJEYXRhID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UuZ2V0KCcvdXNlci9HZXRVc2VyRGF0YScseyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pXHJcbn1cclxuY29uc3QgQ2hhbmdlUHJvZmlsZUltYWdlID0gYXN5bmMgKGZpbGUsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2NoYW5nZXByb2ZpbGVpbWFnZVwiLGZpbGUseyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pXHJcbn1cclxuY29uc3QgR2V0T3RoZXJVc2Vyc0RhdGE9YXN5bmMgKGlkLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9nZXRvdGhlclVzZXJzRGF0YS9cIitpZCx7fSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgYWN0aXZlQWNjb3VudD1hc3luYyAodXNlcmlkLHZlcmlmaWNhdGlvbkNvZGUpPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2FjdGl2ZUFjY291bnRcIix7dXNlcmlkLHZlcmlmaWNhdGlvbkNvZGV9KTtcclxufVxyXG5jb25zdCByZVNlbmRWZXJpZmljYXRpb25Db2RlPWFzeW5jICh1c2VyaWQsdmVyaWZpY2F0aW9uQ29kZSk9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvcmVTZW5kVmVyaWZpY2F0aW9uQ29kZVwiLHt1c2VyaWQsdmVyaWZpY2F0aW9uQ29kZX0pO1xyXG59XHJcbmNvbnN0IHJlbW92ZVRva2VuPWFzeW5jICh1c2VyaWQpPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3JlbW92ZVRva2VuXCIse3VzZXJpZH0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZVByb2ZpbGVJbmZvPWFzeW5jIChuZXdVc2VyRGF0YSx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvdXBkYXRlUHJvZmlsZUluZm9cIix7Li4ubmV3VXNlckRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBjaGFuZ2VQYXNzd29yZD1hc3luYyAocGFzc3dvcmRDaGFuZ2UsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2NoYW5nZVBhc3N3b3JkXCIsey4uLnBhc3N3b3JkQ2hhbmdlfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3Qgc2VhcmNoQWNjb3VudFRvRm9yZ2V0UGFzc3dvcmQ9YXN5bmMgKGlkZW50aXR5KT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9zZWFyY2hBY2NvdW50VG9Gb3JnZXRQYXNzd29yZFwiLHsuLi5pZGVudGl0eX0pO1xyXG59XHJcbmNvbnN0IHJlc2V0UGFzc3dvcmRBcGk9YXN5bmMgKGRhdGFSZXNldFBhc3N3b3JkKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9yZXNldFBhc3N3b3JkXCIsey4uLmRhdGFSZXNldFBhc3N3b3JkfSk7XHJcbn1cclxuY29uc3QgU2V0TmV3UGFzc3dvcmRBcGk9YXN5bmMgKG5ld1Bhc3N3b3JkQW5kVG9rZW5BbmRUZWxPckVtYWlsKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9TZXROZXdQYXNzd29yZFwiLHsuLi5uZXdQYXNzd29yZEFuZFRva2VuQW5kVGVsT3JFbWFpbH0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZUVtYWlsU2VuZENvZGU9YXN5bmMgKGVtYWlsLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci91cGRhdGVFbWFpbFNlbmRDb2RlXCIse2VtYWlsOmVtYWlsfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgdXBkYXRlRW1haWxBcGk9YXN5bmMoZW1haWwsY29kZSx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvdXBkYXRlRW1haWxcIix7ZW1haWw6ZW1haWwsY29kZTpjb2RlfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldHJhbmRvbVVzZXJzQXBpPWFzeW5jKHRva2VuLHJhbmRvbXVzZXJzKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9nZXRyYW5kb21Vc2Vyc1wiLHsuLi5yYW5kb211c2Vyc30seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IHNlYXJjaFVzZXJOYW1lQXBpPWFzeW5jKHNlYXJjaFVzZXJOYW1lLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9TZWFyY2hVc2VyQnlVc2VyTmFtZVwiLHtzZWFyY2hVc2VyTmFtZTpzZWFyY2hVc2VyTmFtZX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0UHJpdmFjeT1hc3luYyh0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvZ2V0UHJpdmFjeVwiLHt9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCB1cGRhdGVQcml2YWN5PWFzeW5jKGRhdGEsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3VwZGF0ZVByaXZhY3lcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmV4cG9ydCB7dXBkYXRlUHJpdmFjeSxnZXRQcml2YWN5LHNlYXJjaFVzZXJOYW1lQXBpLGdldHJhbmRvbVVzZXJzQXBpLHVwZGF0ZUVtYWlsQXBpLHVwZGF0ZUVtYWlsU2VuZENvZGUsU2V0TmV3UGFzc3dvcmRBcGkscmVzZXRQYXNzd29yZEFwaSxzZWFyY2hBY2NvdW50VG9Gb3JnZXRQYXNzd29yZCxjaGFuZ2VQYXNzd29yZCAsdXBkYXRlUHJvZmlsZUluZm8sTG9naW4gLHJlbW92ZVRva2VuLCBSZWdpc3RlcixMb2dpbkZhY2Vib29rLEdldFVzZXJEYXRhLENoYW5nZVByb2ZpbGVJbWFnZSxHZXRPdGhlclVzZXJzRGF0YSxyZVNlbmRWZXJpZmljYXRpb25Db2RlLGFjdGl2ZUFjY291bnR9XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNoYXRfY29udGFpbmVyX18zWkhtT1wiLFxuXHRcImNoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJcIjogXCJjaGF0X2NoYXRBbmRSYW5kb21PbmxpbmVVc2VyQ29udGFuZXJfX2JZN3RCXCIsXG5cdFwiVXNlckNvbnRhbmVyXCI6IFwiY2hhdF9Vc2VyQ29udGFuZXJfXzMxZUNnXCIsXG5cdFwibGlzdENvbnRhY3NcIjogXCJjaGF0X2xpc3RDb250YWNzX18xNmlUblwiLFxuXHRcImJvdHRvbVwiOiBcImNoYXRfYm90dG9tX18zQ1Uza1wiLFxuXHRcInNlYXJjaENvbnRhaW5lclwiOiBcImNoYXRfc2VhcmNoQ29udGFpbmVyX18ydzF3Z1wiLFxuXHRcImlucHV0Y3NzXCI6IFwiY2hhdF9pbnB1dGNzc19fM0FqTTRcIixcblx0XCJoZWFkZXJcIjogXCJjaGF0X2hlYWRlcl9fMUVzek5cIixcblx0XCJjaGF0XCI6IFwiY2hhdF9jaGF0X19ONTFNWFwiLFxuXHRcImNoYXRDb250YWluZXJcIjogXCJjaGF0X2NoYXRDb250YWluZXJfXzNCa3lIXCIsXG5cdFwiaGVhZGVyT2ZDaGF0dXNlck5hbWVBbmROYW1lXCI6IFwiY2hhdF9oZWFkZXJPZkNoYXR1c2VyTmFtZUFuZE5hbWVfXzJMcWZEXCIsXG5cdFwidXNlckltYWdlQ29udGFpbmVyXCI6IFwiY2hhdF91c2VySW1hZ2VDb250YWluZXJfXzJ5bURqXCIsXG5cdFwidXNlck5hbWVcIjogXCJjaGF0X3VzZXJOYW1lX18zN1NLNVwiLFxuXHRcIm1lc3NhZ2VzXCI6IFwiY2hhdF9tZXNzYWdlc19fMmtYMjZcIixcblx0XCJvbmVNZXNzYWdlXCI6IFwiY2hhdF9vbmVNZXNzYWdlX18xQTR5VlwiLFxuXHRcIm1lc3NhZ2VUZXh0XCI6IFwiY2hhdF9tZXNzYWdlVGV4dF9fM2NYal9cIixcblx0XCJzZW5kTWVzc2FnZVwiOiBcImNoYXRfc2VuZE1lc3NhZ2VfXzJjLWs2XCIsXG5cdFwiaW5wdXRDb250YWluZXJcIjogXCJjaGF0X2lucHV0Q29udGFpbmVyX191ZWRwMlwiLFxuXHRcImJ0bnNcIjogXCJjaGF0X2J0bnNfXzJ5NlhIXCIsXG5cdFwic2VuZE1lc3NhZ2VCdG5cIjogXCJjaGF0X3NlbmRNZXNzYWdlQnRuX18yMXZKeFwiLFxuXHRcIm9wZW5PckNsb3NlRW1vamlQaWNrZXJcIjogXCJjaGF0X29wZW5PckNsb3NlRW1vamlQaWNrZXJfXzFtMzl0XCIsXG5cdFwiZW1vamlQaWNrZXJDb250YWluZXJcIjogXCJjaGF0X2Vtb2ppUGlja2VyQ29udGFpbmVyX19nbU5aTFwiLFxuXHRcImVtb2ppTG9nb1wiOiBcImNoYXRfZW1vamlMb2dvX180S1NUTFwiLFxuXHRcImJ0bnNlbmRcIjogXCJjaGF0X2J0bnNlbmRfX2ExaUFUXCIsXG5cdFwidXNlckNvbnRhaW5lclwiOiBcImNoYXRfdXNlckNvbnRhaW5lcl9fMTNqTWhcIixcblx0XCJpbWdDb250YWluZXJcIjogXCJjaGF0X2ltZ0NvbnRhaW5lcl9fSXBISFpcIixcblx0XCJGb2xsb3dBbmRVbmZvbGxvd0NvbnRhaW5lclwiOiBcImNoYXRfRm9sbG93QW5kVW5mb2xsb3dDb250YWluZXJfXzNFdzV5XCIsXG5cdFwibm90U2Vlbk1lc3NhZ2VOdW1iZVwiOiBcImNoYXRfbm90U2Vlbk1lc3NhZ2VOdW1iZV9fMlNCdHJcIixcblx0XCJpc1dyaXRpbmdDb250YWluZXJcIjogXCJjaGF0X2lzV3JpdGluZ0NvbnRhaW5lcl9fZTZ5VGJcIixcblx0XCJsZHNlbGxpcHNpc1wiOiBcImNoYXRfbGRzZWxsaXBzaXNfXzExM2RZXCIsXG5cdFwibGRzZWxsaXBzaXMxXCI6IFwiY2hhdF9sZHNlbGxpcHNpczFfXzFvZUtZXCIsXG5cdFwibGRzZWxsaXBzaXMyXCI6IFwiY2hhdF9sZHNlbGxpcHNpczJfX3dpM3BLXCIsXG5cdFwibGRzZWxsaXBzaXMzXCI6IFwiY2hhdF9sZHNlbGxpcHNpczNfX0tXMVNsXCIsXG5cdFwic2VlblwiOiBcImNoYXRfc2Vlbl9fMnNMb2JcIixcblx0XCJTdHlsZVwiOiBcImNoYXRfU3R5bGVfX3EtNHQzXCIsXG5cdFwieW91ck1lc3NhZ2VWdVwiOiBcImNoYXRfeW91ck1lc3NhZ2VWdV9fVHdGUTJcIixcblx0XCJjaGFuZ2VDb2xvckNvbnRhaW5lclwiOiBcImNoYXRfY2hhbmdlQ29sb3JDb250YWluZXJfXzJPb1FUXCIsXG5cdFwiY2hhdENvbG9yXCI6IFwiY2hhdF9jaGF0Q29sb3JfX2E1aHhPXCIsXG5cdFwiY29sb3JQaWNrZXJcIjogXCJjaGF0X2NvbG9yUGlja2VyX18zczFaRVwiLFxuXHRcImNvbG9yXCI6IFwiY2hhdF9jb2xvcl9fM2RlWGZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb2ppLW1hcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmFjZWJvb2stbG9naW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGhvbmUtaW5wdXQtMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yYWluYm93LWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=