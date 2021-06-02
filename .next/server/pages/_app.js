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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./const.js":
/*!******************!*\
  !*** ./const.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//const ip="http://127.0.0.1:5010";
const ip = "http://46.101.169.142:5010";
/* harmony default export */ __webpack_exports__["default"] = (ip);

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
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./const.js");



const axiosApiInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  //baseURL: 'http://46.101.169.142:5010/',
  baseURL: _const__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default, getInitialProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/initLanguage/initLanguage */ "./components/initLanguage/initLanguage.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user */ "./services/user.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/userContext */ "./context/userContext.js");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/languageContext */ "./context/languageContext.js");
/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/socketContext */ "./context/socketContext.js");
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/apiIsLoadingContext */ "./context/apiIsLoadingContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../const */ "./const.js");


var _jsxFileName = "F:\\AHKI\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function MyApp({
  Component,
  pageProps
}) {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    image: "",
    tel: "",
    biography: "",
    userName: "",
    firstname: "",
    lastname: "",
    age: "",
    following: 0,
    followers: 0
  });
  const userProvider = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => (({
    user,
    setUser
  }), [user, setUser]));
  /********************************************************************/

  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_objectSpread({}, Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_3__["default"])("eng")));
  const languageProvider = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => (({
    language,
    setLanguage
  }), [language, setLanguage]));
  /********************************************************************/

  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const loadingProvider = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => (({
    isLoading,
    setIsLoading
  }), [isLoading, setIsLoading]));
  /********************************************************************/

  const [socket, setSocket] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(undefined);
  const socketProvider = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => (({
    socket,
    setSocket
  }), [socket, setSocket]));
  /*****************************************************************/

  const [onlyOnce, setonlyOnce] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const socketRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  /*socket io*/

  /************************************/

  if (router.query.refrech == "true" && onlyOnce == false) {
    setonlyOnce(true);
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["GetUserData"])(pageProps.token).then(data => {
      setUser(e => {
        return _objectSpread(_objectSpread(_objectSpread({}, e), data.data.data[0]), {}, {
          token: pageProps.token
        });
      });
    }).catch(e => {});
  }

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    /*****************init Token to userProvider******************/
    setUser(e => {
      return _objectSpread(_objectSpread({}, e), {}, {
        token: pageProps.token
      });
    });
    /*get current lang */

    setLanguage(Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_3__["default"])(localStorage.getItem('language') || "eng"));
    /***********************************************************/

    /********************fetch user data online if there is token************************/

    /***********************************************************/

    if (pageProps.token) {
      Object(_services_user__WEBPACK_IMPORTED_MODULE_4__["GetUserData"])(pageProps.token).then(data => {
        socketRef.current = socket_io_client__WEBPACK_IMPORTED_MODULE_11___default()(_const__WEBPACK_IMPORTED_MODULE_12__["default"]);
        socketRef.current.on("getSocketid", dataFromSocket => {
          socketRef.current.emit("saveuserOnline", {
            userid: data.data.data[0]._id,
            socketid: dataFromSocket
          });
          setSocket(socketRef.current);
        });
        setUser(e => {
          return _objectSpread(_objectSpread({}, e), data.data.data[0]);
        });
      }).catch(e => {});
    }
  }, [router.query.refrech]);
  /******************************************************************************************
   *******************************************************************************************
   ******************************************************************************************/

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "appWrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_languageContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: languageProvider,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_userContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
          value: userProvider,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
            value: loadingProvider,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_socketContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
              value: socketProvider,
              children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "loading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 52
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 27
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);
async function getInitialProps({
  req,
  res
}) {
  return (await req.cookies.token) ? {
    props: {
      token: true
    }
  } : {
    redirect: {
      destination: '/',
      permanent: false
    }
  };
}

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

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbml0TGFuZ3VhZ2UvaW5pdExhbmd1YWdlLmpzIiwid2VicGFjazovLy8uL2NvbnN0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBpSXNMb2FkaW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2xhbmd1YWdlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3NvY2tldENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC91c2VyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3JlZnJlc2hBY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbImluaXRMYW5ndWFnZSIsImUiLCJsYW5nIiwicG9zdEFub255bW91c2x5IiwiVXBsb2FkcGhvdG93aXRoeW91cnBvc3QiLCJGb3Jnb3RQYXNzd29yZCIsImNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZSIsInRlbGVwaG9uZW9yZW1haWwiLCJjYW5jZWwiLCJ1cGRhdGUiLCJwdXR5b3VybmV3RW1haWwiLCJVcGRhdGVZb3VyRW1haWwiLCJDb25mZXJtYXRpb25Db2RlIiwiWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZSIsInB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmUiLCJVcGRhdGVZb3VyUGhvbmVOdW1iZXIiLCJuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aCIsIkl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdSIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJBY2NvdW50U2V0dGluZyIsIlVwZGF0ZVlvdXJQYXNzd29yZCIsImJpcnRoZGF5IiwidG9waWMiLCJ0b2RheVRvcGljIiwiRnJpZW5kc1Bvc3RzIiwiRm9sbG93aW5nIiwiRm9sbG93ZXJzIiwiVXBkYXRlUHJvZmlsZSIsIllvdXJQb3N0cyIsIkxpa2VzIiwiUG9zdHMiLCJyYWRpb2JveERlbHRlQWNjb3VudCIsIkRlbGV0ZUFjY291bnRIZWFkZXIiLCJzYXZlY2hhbmdlIiwiY2hhbmdlUGFzc3dvcmQiLCJEZWFjdGl2YXRpbmciLCJEZWxldGluZyIsInVzZXJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJiaW9ncmFwaHkiLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXkiLCJtb250aCIsInllYXIiLCJjb25maXJtcGFzc3dvcmQiLCJwbGFjZWhvbGRlcklucHV0IiwiVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3N0X0hvdmVyIiwicG9zdF9Bbm9ueW1vdXNseV9ob3ZlciIsInNpZ25pbiIsInNpZ251cCIsIkFscmVhZHlIYXZlQWNjb3VudCIsIllvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvIiwidmVyaWZpY2F0aW9uY29kZSIsInNlbmQiLCJVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc190SG92ZXIiLCJhcmFiaWMiLCJpcCIsImFwaUlzTG9hZGluZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0Iiwic29ja2V0IiwidW5kZWZpbmVkIiwiVXNlckNvbnRleHQiLCJheGlvc0FwaUluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwiZGVmYXVsdHMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwib3JpZ2luYWxSZXF1ZXN0IiwibWVzc2FnZSIsImFsZXJ0Iiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInBvc3QiLCJ3aW5kb3ciLCJyZWxvYWQiLCJfcmV0cnkiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoQWNjZXNzVG9rZW4iLCJnZXRJdGVtIiwiZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwidG9rZW4iLCJzZXRJdGVtIiwicmVmX3Rva2VuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VyIiwic2V0VXNlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZSIsInRlbCIsInVzZXJOYW1lIiwiYWdlIiwiZm9sbG93aW5nIiwiZm9sbG93ZXJzIiwidXNlclByb3ZpZGVyIiwidXNlTWVtbyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZVByb3ZpZGVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibG9hZGluZ1Byb3ZpZGVyIiwic2V0U29ja2V0Iiwic29ja2V0UHJvdmlkZXIiLCJvbmx5T25jZSIsInNldG9ubHlPbmNlIiwicm91dGVyIiwidXNlUm91dGVyIiwic29ja2V0UmVmIiwidXNlUmVmIiwicXVlcnkiLCJyZWZyZWNoIiwiR2V0VXNlckRhdGEiLCJ0aGVuIiwiY2F0Y2giLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiaW8iLCJvbiIsImRhdGFGcm9tU29ja2V0IiwiZW1pdCIsInVzZXJpZCIsIl9pZCIsInNvY2tldGlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicmVzIiwiY29va2llcyIsInByb3BzIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsIlJlZnJlc2hBY2Nlc3NUb2tlbiIsIkxvZ2luIiwiTG9naW5GYWNlYm9vayIsIlJlZ2lzdGVyIiwiZ2V0IiwiQ2hhbmdlUHJvZmlsZUltYWdlIiwiZmlsZSIsIkdldE90aGVyVXNlcnNEYXRhIiwiaWQiLCJhY3RpdmVBY2NvdW50IiwidmVyaWZpY2F0aW9uQ29kZSIsInJlU2VuZFZlcmlmaWNhdGlvbkNvZGUiLCJyZW1vdmVUb2tlbiIsInVwZGF0ZVByb2ZpbGVJbmZvIiwibmV3VXNlckRhdGEiLCJwYXNzd29yZENoYW5nZSIsInNlYXJjaEFjY291bnRUb0ZvcmdldFBhc3N3b3JkIiwiaWRlbnRpdHkiLCJyZXNldFBhc3N3b3JkQXBpIiwiZGF0YVJlc2V0UGFzc3dvcmQiLCJTZXROZXdQYXNzd29yZEFwaSIsIm5ld1Bhc3N3b3JkQW5kVG9rZW5BbmRUZWxPckVtYWlsIiwidXBkYXRlRW1haWxTZW5kQ29kZSIsInVwZGF0ZUVtYWlsQXBpIiwiY29kZSIsImdldHJhbmRvbVVzZXJzQXBpIiwicmFuZG9tdXNlcnMiLCJzZWFyY2hVc2VyTmFtZUFwaSIsInNlYXJjaFVzZXJOYW1lIiwiZ2V0UHJpdmFjeSIsInVwZGF0ZVByaXZhY3kiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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QSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXHJcbmNvbnN0IGluaXRMYW5ndWFnZT0oZSk9PntcclxuICAgIHZhciBsYW5nPXt9XHJcbiAgICBzd2l0Y2goZSkge1xyXG4gICAgICAgIGNhc2UgXCJlbmdcIjpcclxuICAgICAgICAgICAgbGFuZz17XHJcbiAgICAgICAgICAgICAgICBwb3N0QW5vbnltb3VzbHk6XCJwb3N0IEFub255bW91c2x5XCIsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRwaG90b3dpdGh5b3VycG9zdDpcIlVwbG9hZCBwaG90byB3aXRoIHlvdXIgcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmQ6XCJGb3Jnb3QgUGFzc3dvcmQ/XCIsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmU6XCJjcmVhdGUgYSBwcm9maWxlIGZvbGxvdyBvdGhlciBhY2NvdW50cyB0YWxrIGFib3V0IHlvdXIgb3duIGV4cGVyaWVuY2UgYW5kIG1vcmVcIixcclxuICAgICAgICAgICAgICAgIHRlbGVwaG9uZW9yZW1haWw6XCJ0ZWxlcGhvbmUgb3IgZW1haWxcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDpcImNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOlwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3RW1haWw6XCJwdXQgeW91ciBuZXcgRW1haWwgaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91ckVtYWlsOlwiVXBkYXRlIFlvdXIgRW1haWxcIixcclxuICAgICAgICAgICAgICAgIENvbmZlcm1hdGlvbkNvZGU6XCJDb25mZXJtYXRpb24gQ29kZVwiLFxyXG4gICAgICAgICAgICAgICAgWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZTpcIllvdSBXaWxsIHJlY2l2ZSBjb25mZXJtYXRpb24gQ29kZSBwdXQgaXQgaGVyZSBBbmQgQ2xpY2sgVXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3cGhvbmVudW1iZXJoZXJlOlwicHV0IHlvdXIgbmV3IHBob25lIG51bWJlciBoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGhvbmVOdW1iZXI6XCJVcGRhdGUgWW91ciBQaG9uZU51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgbmV3cGFzc3dvcmRuZWVkdG9iZWF0bGVhc3RsZW5ndGg6XCJuZXcgcGFzc3dvcmQgbmVlZCB0byBiZSBhdCBsZWFzdCA4IGxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgSXRzYWdvb2RpZGVhdG91c2Vhc3Ryb25ncGFzc3dvcmR0aGF0eW91OlwiSXQncyBhIGdvb2QgaWRlYSB0byB1c2UgYSBzdHJvbmcgcGFzc3dvcmQgdGhhdCB5b3UncmUgbm90IHVzaW5nIGVsc2V3aGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ6XCJuZXcgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkOlwib2xkIFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NvdW50U2V0dGluZzpcIkFjY291bnQgU2V0dGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBhc3N3b3JkOlwiVXBkYXRlIFlvdXIgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5OlwiYmlydGggZGF5XCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzonJyxcclxuICAgICAgICAgICAgICAgIHRvZGF5VG9waWM6J3RvZGF5IFRvcGljJyxcclxuICAgICAgICAgICAgICAgIEZyaWVuZHNQb3N0czonZnJpZW5kcyBwdWJsaWNhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dpbmc6J2ZvbGxvd2luZycsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlcnM6J0ZvbGxvd2VycycsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVQcm9maWxlOidVcGRhdGUgUHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBZb3VyUG9zdHM6J1lvdXIgUG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgTGlrZXM6J0xpa2VzJyxcclxuICAgICAgICAgICAgICAgIFBvc3RzOidQb3N0cycsXHJcbiAgICAgICAgICAgICAgICByYWRpb2JveERlbHRlQWNjb3VudDoncmFkaW9ib3hEZWx0ZUFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRlQWNjb3VudEhlYWRlcjonRGVsZXRlQWNjb3VudEhlYWRlcicsXHJcbiAgICAgICAgICAgICAgICBzYXZlY2hhbmdlOidzYXZlY2hhbmdlJyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkOidjaGFuZ2VQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBEZWFjdGl2YXRpbmc6J0RlYWN0aXZhdGluZycsXHJcbiAgICAgICAgICAgICAgICBEZWxldGluZzonRGVsZXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6J3VzZXJuYW1lJyxcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTonZmlyc3RuYW1lJyxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOidsYXN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICBiaW9ncmFwaHk6J2Jpb2dyYXBoeScsXHJcbiAgICAgICAgICAgICAgICBwaG9uZToncGhvbmUnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6J2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOidwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBkYXk6J2RheScsXHJcbiAgICAgICAgICAgICAgICBtb250aDonbW9udGgnLFxyXG4gICAgICAgICAgICAgICAgeWVhcjoneWVhcicsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6J2NvbmZpcm1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcklucHV0OidzYXkgc29tdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3N0X0hvdmVyOidVcGxvYWQgcGhvdG8gd2l0aCB5b3VyIHBvc3QnLFxyXG4gICAgICAgICAgICAgICAgcG9zdF9Bbm9ueW1vdXNseV9ob3ZlcjoncG9zdF9Bbm9ueW1vdXNseScsXHJcbiAgICAgICAgICAgICAgICBzaWduaW46J3NpZ24gaW4nLFxyXG4gICAgICAgICAgICAgICAgc2lnbnVwOidzaWduIHVwJyxcclxuICAgICAgICAgICAgICAgIEFscmVhZHlIYXZlQWNjb3VudDonQWxyZWFkeSBIYXZlIEFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgWW91ZG9udGhhdmVhY2NvdW50Q2xpY2toZXJldG86J1lvdSBkb250IGhhdmUgYWNjb3VudCBDbGljayBoZXJlIHRvJyxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbmNvZGU6XCJ2ZXJpZmljYXRpb24gY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgc2VuZDpcInNlbmRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZnJcIjpcclxuICAgICAgICAgICAgbGFuZz17XHJcbiAgICAgICAgICAgICAgICBwb3N0QW5vbnltb3VzbHk6XCJwdWJsaWVyIGRlIG1hbmnDqHJlIGFub255bWVcIixcclxuICAgICAgICAgICAgICAgIFVwbG9hZHBob3Rvd2l0aHlvdXJwb3N0OlwiVMOpbMOpY2hhcmdlciB1bmUgcGhvdG8gYXZlYyB2b3RyZSBtZXNzYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZDpcIk1vdCBkZSBwYXNzZSBvdWJsacOpP1wiLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlYXByb2ZpbGVmb2xsb3dvdGhlcmFjY291bnRzdGFsa2Fib3V0eW91cm93bmV4cGVyaWVuY2VhbmRtb3JlOlwiY3LDqWVyIHVuIHByb2ZpbCBzdWl2cmUgZCdhdXRyZXMgY29tcHRlcyBwYXJsZXIgZGUgdm90cmUgcHJvcHJlIGV4cMOpcmllbmNlIGV0IHBsdXNcIixcclxuICAgICAgICAgICAgICAgIHRlbGVwaG9uZW9yZW1haWw6XCJ0w6lsw6lwaG9uZSBvdSBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOlwiQW5udWxlclwiLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOlwibWV0dHJlIMOgIGpvdXJcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdFbWFpbDpcIm1ldHRleiB2b3RyZSBub3V2ZWF1IGNvdXJyaWVsIGljaVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91ckVtYWlsOlwiTWV0dGV6IMOgIGpvdXIgdm90cmUgZS1tYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBDb25mZXJtYXRpb25Db2RlOlwiQ29kZSBkZSBjb25mZXJtYXRpb25cIixcclxuICAgICAgICAgICAgICAgIFlvdVdpbGxyZWNpdmVjb25mZXJtYXRpb25Db2RlcHV0aXRoZXJlQW5kQ2xpY2tVcGRhdGU6XCJWb3VzIHJlY2V2cmV6IGxlIGNvZGUgZGUgY29uZmVybWF0aW9uLCBtZXR0ZXotbGUgaWNpIGV0IGNsaXF1ZXogc3VyIE1ldHRyZSDDoCBqb3VyXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3cGhvbmVudW1iZXJoZXJlOlwibWV0dGV6IHZvdHJlIG5vdXZlYXUgbnVtw6lybyBkZSB0w6lsw6lwaG9uZSBpY2lcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQaG9uZU51bWJlcjpcIk1ldHRleiDDoCBqb3VyIHZvdHJlIG51bcOpcm8gZGUgdMOpbMOpcGhvbmVcIixcclxuICAgICAgICAgICAgICAgIG5ld3Bhc3N3b3JkbmVlZHRvYmVhdGxlYXN0bGVuZ3RoOlwibGUgbm91dmVhdSBtb3QgZGUgcGFzc2UgZG9pdCBhdm9pciB1bmUgbG9uZ3VldXIgZCdhdSBtb2lucyA4XCIsXHJcbiAgICAgICAgICAgICAgICBJdHNhZ29vZGlkZWF0b3VzZWFzdHJvbmdwYXNzd29yZHRoYXR5b3U6XCJDJ2VzdCB1bmUgYm9ubmUgaWTDqWUgZCd1dGlsaXNlciB1biBtb3QgZGUgcGFzc2UgZm9ydCBxdWUgdm91cyBuJ3V0aWxpc2V6IHBhcyBhaWxsZXVyc1wiLFxyXG4gICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ6XCJub3V2ZWF1IG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgb2xkUGFzc3dvcmQ6XCJhbmNpZW4gbW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NvdW50U2V0dGluZzpcIlBhcmFtw6h0cmUgZHUgY29tcHRlXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGFzc3dvcmQ6XCJNZXR0ZXogw6Agam91ciB2b3RyZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5OlwiZGF0ZSBkJ2Fubml2ZXJzYWlyZXlcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOicnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXlUb3BpYzpcIlN1amV0IGQnYXVqb3VyZCAnaHVpXCIsXHJcbiAgICAgICAgICAgICAgICBGcmllbmRzUG9zdHM6XCJwdWJsaWNhdGlvbiBkJ2FtaXNcIixcclxuICAgICAgICAgICAgICAgIEZvbGxvd2luZzonc3VpdmFudGUnLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJzOidTdWl2ZXVycycsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVQcm9maWxlOidNZXR0cmUgw6Agam91ciBsZSBwcm9maWwnLFxyXG4gICAgICAgICAgICAgICAgWW91clBvc3RzOidWb3MgcHVibGljYXRpb25zJyxcclxuICAgICAgICAgICAgICAgIExpa2VzOlwiaidhaW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgUG9zdHM6J2RlcyBwb3N0ZXMnLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9ib3hEZWx0ZUFjY291bnQ6J1N1cHByZXNzaW9uJyxcclxuICAgICAgICAgICAgICAgIERlbGV0ZUFjY291bnRIZWFkZXI6J1N1cHByaW1lciBsZSBjb21wdGUnLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWNoYW5nZTonc2F1dmVnYXJkZXIgbGVzIG1vZGlmaWNhdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGFzc3dvcmQ6J2NoYW5nZXIgbGUgbW90IGRlIHBhc3NlJyxcclxuICAgICAgICAgICAgICAgIERlYWN0aXZhdGluZzonQ2VjaSBlc3QgcGVybWFuZW50LkxvcnNxdWUgdm91cyBzdXBwcmltZXogdm90cmUgY29tcHRlLCB2b3VzIG5lIHBvdXJyZXogcGFzIHLDqWN1cMOpcmVyIGxlIGNvbnRlbnUgb3UgbGVzIGluZm9ybWF0aW9ucyBxdWUgdm91cyBhdmV6IHBhcnRhZ8OpcyBzdXIgbCBhcHBsaWNhdGlvbi4nLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRpbmc6J3N1cHByaW1lJyxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOlwiTm9tIGQndXRpbGlzYXRldXJcIixcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTonUHLDqW5vbScsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTonbm9tIGRlIGZhbWlsbGUnLFxyXG4gICAgICAgICAgICAgICAgYmlvZ3JhcGh5OidCaW9ncmFwaGllJyxcclxuICAgICAgICAgICAgICAgIHBob25lOid0w6lsw6lwaG9uZScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDonZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6J21vdCBkZSBwYXNzZScsXHJcbiAgICAgICAgICAgICAgICBkYXk6J2pvdXInLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6J21vbnRoJyxcclxuICAgICAgICAgICAgICAgIHllYXI6J3llYXInLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybXBhc3N3b3JkOidDb25maXJtZXogbGUgbW90IGRlIHBhc3NlJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVySW5wdXQ6J8OgIHF1b2kgcGVuc2VzLXR1JyxcclxuICAgICAgICAgICAgICAgIFVwbG9hZF9waG90b193aXRoX3lvdXJfcG9zX3RIb3ZlcjonVMOpbMOpY2hhcmdlciB1bmUgcGhvdG8gYXZlYyB2b3RyZSBtZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgIHBvc3RfQW5vbnltb3VzbHlfaG92ZXI6J3B1YmxpZXIgZGUgbWFuacOocmUgYW5vbnltZScsXHJcbiAgICAgICAgICAgICAgICBzaWduaW46XCJzJ2lkZW50aWZpZXJcIixcclxuICAgICAgICAgICAgICAgIHNpZ251cDpcIlMnaW5zY3JpcmVcIixcclxuICAgICAgICAgICAgICAgIEFscmVhZHlIYXZlQWNjb3VudDonVm91cyBhdmV6IGTDqWrDoCB1biBjb21wdGUnLFxyXG4gICAgICAgICAgICAgICAgWW91ZG9udGhhdmVhY2NvdW50Q2xpY2toZXJldG86XCJWb3VzIG4nYXZleiBwYXMgZGUgY29tcHRlIENsaXF1ZXogaWNpIHBvdXJcIixcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbmNvZGU6XCJjb2RlIGRlIHbDqXJpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgIHNlbmQ6XCJlbnZveWVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYXJhYmljXCI6XHJcbiAgICAgICAgICAgIGxhbmc9e1xyXG4gICAgICAgICAgICAgICAgcG9zdEFub255bW91c2x5Olwi2YbYtNixINmF2KzZh9mI2YRcIixcclxuICAgICAgICAgICAgICAgIFVwbG9hZHBob3Rvd2l0aHlvdXJwb3N0Olwi2KrYrdmF2YrZhCDYp9mE2LXZiNix2Kkg2YXYuSDZhdmG2LTZiNix2YNcIixcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkOlwi2YfZhCDZhtiz2YrYqiDZg9mE2YXYqSDYp9mE2LPYsT9cIixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZTpcItil2YbYtNin2KEg2K3Ys9in2KggINiq2KfYqNi5INit2LPYp9io2KfYqiDYo9iu2LHZiSDYqtit2K/YqyDYudmGINiq2KzYsdio2KrZgyDYp9mE2K7Yp9i12Kkg2YjYp9mE2YXYstmK2K9cIixcclxuICAgICAgICAgICAgICAgIHRlbGVwaG9uZW9yZW1haWw6XCLYp9mE2YfYp9iq2YEg2KPZiCDYp9mE2KjYsdmK2K8g2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDpcItil2YTYutin2KFcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTpcItiq2K3Yr9mK2KtcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdFbWFpbDpcIti22Lkg2KjYsdmK2K/ZgyDYp9mE2KXZhNmD2KrYsdmI2YbZiiDYp9mE2KzYr9mK2K8g2YfZhtinXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyRW1haWw6XCLZgtmFINio2KrYrdiv2YrYqyDYqNix2YrYr9mDINin2YTYpdmE2YPYqtix2YjZhtmKXCIsXHJcbiAgICAgICAgICAgICAgICBDb25mZXJtYXRpb25Db2RlOlwi2YPZiNivINin2YTYqtij2YPZitivXCIsXHJcbiAgICAgICAgICAgICAgICBZb3VXaWxscmVjaXZlY29uZmVybWF0aW9uQ29kZXB1dGl0aGVyZUFuZENsaWNrVXBkYXRlOlwi2LPZiNmBINiq2KrZhNmC2Ykg2LHZhdiyINin2YTYqtij2YPZitivINmI2LbYudmHINmH2YbYpyDZiNin2YbZgtixINmB2YjZgiDYqtit2K/ZitirXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3cGhvbmVudW1iZXJoZXJlOlwi2LbYuSDYsdmC2YUg2YfYp9iq2YHZgyDYp9mE2KzYr9mK2K8g2YfZhtinXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGhvbmVOdW1iZXI6XCLZgtmFINio2KrYrdiv2YrYqyDYsdmC2YUg2YfYp9iq2YHZg1wiLFxyXG4gICAgICAgICAgICAgICAgbmV3cGFzc3dvcmRuZWVkdG9iZWF0bGVhc3RsZW5ndGg6XCLZitis2Kgg2KPZhNinINmK2YLZhCDYt9mI2YQg2YPZhNmF2Kkg2KfZhNmF2LHZiNixINin2YTYrNiv2YrYr9ipINi52YYgOFwiLFxyXG4gICAgICAgICAgICAgICAgSXRzYWdvb2RpZGVhdG91c2Vhc3Ryb25ncGFzc3dvcmR0aGF0eW91Olwi2YXZhiDYp9mE2KzZitivINin2LPYqtiu2K/Yp9mFINmD2YTZhdipINmF2LHZiNixINmC2YjZitipINmE2Kcg2KrYs9iq2K7Yr9mF2YfYpyDZgdmKINij2Yog2YXZg9in2YYg2KLYrtixXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdQYXNzd29yZDpcItmD2YTZhdipINin2YTYs9ixINin2YTYrNiv2YrYr9ipXCIsXHJcbiAgICAgICAgICAgICAgICBvbGRQYXNzd29yZDpcItmD2YTZhdipINin2YTZhdix2YjYsSDYp9mE2YLYr9mK2YXYqVwiLFxyXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6XCLYudmK2K8g2KfZhNmF2YrZhNin2K9cIixcclxuICAgICAgICAgICAgICAgIEFjY291bnRTZXR0aW5nOlwi2KXYudiv2KfYr9in2Kog2KfZhNit2LPYp9ioXCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzonJyxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQYXNzd29yZDpcItmC2YUg2KjYqtit2K/ZitirINmD2YTZhdipINin2YTZhdix2YjYsSDYp9mE2K7Yp9i12Kkg2KjZg1wiLFxyXG4gICAgICAgICAgICAgICAgYXJhYmljOlwi2YXZiNi22YjYuSDYp9mE2YrZiNmFXCIsXHJcbiAgICAgICAgICAgICAgICB0b2RheVRvcGljOifZhti02LEg2KfZhNij2LXYr9mC2KfYoScsXHJcbiAgICAgICAgICAgICAgICBGcmllbmRzUG9zdHM6J9in2YTYo9i12K/Zgtin2KEnLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93aW5nOifZhdiq2KfYqNi52YfZhScsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlcnM6J9in2YTZhdiq2KfYqNi52YrZhicsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVQcm9maWxlOifYqtit2K/ZitirINin2YTYqNmK2YbYp9iqJyxcclxuICAgICAgICAgICAgICAgIFlvdXJQb3N0czon2YXZhti02YjYsdin2KrZgycsXHJcbiAgICAgICAgICAgICAgICBMaWtlczon2KfYudis2KjYqtin2YMnLFxyXG4gICAgICAgICAgICAgICAgUG9zdHM6J9in2YTZhdi02KfYsdmD2KfYqicsXHJcbiAgICAgICAgICAgICAgICByYWRpb2JveERlbHRlQWNjb3VudDon2K3YsNmBJyxcclxuICAgICAgICAgICAgICAgIERlbGV0ZUFjY291bnRIZWFkZXI6J9it2LDZgSDYp9mE2K3Ys9in2KgnLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWNoYW5nZTon2K3Zgdi4INin2YTYqti62YrZitixJyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkOifYqti62YrYsSDZg9mE2YXYqSDYp9mE2LPYsScsXHJcbiAgICAgICAgICAgICAgICBEZWFjdGl2YXRpbmc6XCLYp9iz2YUg2KfZhNi02YfYsdip2YfYsNinINiv2KfYptmFINiMINi52YbYr9mF2Kcg2KrYrdiw2YEg2K3Ys9in2KjZgyDYjCDZhNmGINiq2KrZhdmD2YYg2YXZhiDYp9iz2KrYsdiv2KfYryDYp9mE2YXYrdiq2YjZiSDYo9mIINin2YTZhdi52YTZiNmF2KfYqiDYp9mE2KrZiiDYtNin2LHZg9iq2YfYpyDYudmE2Ykg2KfZhNiq2LfYqNmK2YIuXCIsXHJcbiAgICAgICAgICAgICAgICBEZWxldGluZzon2LTYt9ioJyxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOifYp9iz2YUg2KfZhNi02YfYsdipJyxcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTon2KfZhNin2LPZhScsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTon2KfZhNmE2YLYqCcsXHJcbiAgICAgICAgICAgICAgICBiaW9ncmFwaHk6J9iz2YrYsdipINi02K7YtdmK2KknLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6J9mH2KfYqtmBJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOifYp9mE2KjYsdmK2K8nLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6XCLZg9mE2YXZhyDYp9mE2LPYsVwiLFxyXG4gICAgICAgICAgICAgICAgZGF5OifZitmI2YUnLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6J9in2YTYtNmH2LEnLFxyXG4gICAgICAgICAgICAgICAgeWVhcjon2KfZhNi52KfZhScsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6J9iq2KfZg9mK2K8g2YPZhNmF2Kkg2KfZhNmF2LHZiNixJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVySW5wdXQ6J9io2YXYp9iw2Kcg2KrZgdmD2LEnLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3NfdEhvdmVyOifYqtit2YXZitmEINin2YTYtdmI2LHYqSDZhdi5INmF2YbYtNmI2LHZgycsXHJcbiAgICAgICAgICAgICAgICBwb3N0X0Fub255bW91c2x5X2hvdmVyOifZhti02LEg2YXYrNmH2YjZhCcsXHJcbiAgICAgICAgICAgICAgICBzaWduaW46J9iq2LPYrNmK2YQg2KfZhNiv2K7ZiNmEJyxcclxuICAgICAgICAgICAgICAgIHNpZ251cDon2KfYtNiq2LHYp9mDJyxcclxuICAgICAgICAgICAgICAgIEFscmVhZHlIYXZlQWNjb3VudDon2YTYr9mK2YMg2K3Ys9in2Kgg2KjYp9mE2YHYudmEJyxcclxuICAgICAgICAgICAgICAgIFlvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvOifZhNmK2LMg2YTYr9mK2YMg2K3Ys9in2Kgg2KfZhtmC2LEg2YfZhtinJyxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbmNvZGU6XCLYsdmF2LIg2KfZhNiq2K3ZgtmCXCIsXHJcbiAgICAgICAgICAgICAgICBzZW5kOlwi2KXYsdiz2KfZhFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBsYW5nPXtcclxuICAgICAgICAgICAgICAgIHBvc3RBbm9ueW1vdXNseTpcInBvc3QgQW5vbnltb3VzbHlcIixcclxuICAgICAgICAgICAgICAgIFVwbG9hZHBob3Rvd2l0aHlvdXJwb3N0OlwiVXBsb2FkIHBob3RvIHdpdGggeW91ciBwb3N0XCIsXHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZDpcIkZvcmdvdCBQYXNzd29yZD9cIixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZTpcImNyZWF0ZSBhIHByb2ZpbGUgZm9sbG93IG90aGVyIGFjY291bnRzIHRhbGsgYWJvdXQgeW91ciBvd24gZXhwZXJpZW5jZSBhbmQgbW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgdGVsZXBob25lb3JlbWFpbDpcInRlbGVwaG9uZSBvciBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOlwiY2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6XCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdFbWFpbDpcInB1dCB5b3VyIG5ldyBFbWFpbCBoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyRW1haWw6XCJVcGRhdGUgWW91ciBFbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgQ29uZmVybWF0aW9uQ29kZTpcIkNvbmZlcm1hdGlvbiBDb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBZb3VXaWxscmVjaXZlY29uZmVybWF0aW9uQ29kZXB1dGl0aGVyZUFuZENsaWNrVXBkYXRlOlwiWW91IFdpbGwgcmVjaXZlIGNvbmZlcm1hdGlvbiBDb2RlIHB1dCBpdCBoZXJlIEFuZCBDbGljayBVcGRhdGVcIixcclxuICAgICAgICAgICAgICAgIHB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmU6XCJwdXQgeW91ciBuZXcgcGhvbmUgbnVtYmVyIGhlcmVcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQaG9uZU51bWJlcjpcIlVwZGF0ZSBZb3VyIFBob25lTnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aDpcIm5ldyBwYXNzd29yZCBuZWVkIHRvIGJlIGF0IGxlYXN0IDggbGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBJdHNhZ29vZGlkZWF0b3VzZWFzdHJvbmdwYXNzd29yZHRoYXR5b3U6XCJJdCdzIGEgZ29vZCBpZGVhIHRvIHVzZSBhIHN0cm9uZyBwYXNzd29yZCB0aGF0IHlvdSdyZSBub3QgdXNpbmcgZWxzZXdoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdQYXNzd29yZDpcIm5ldyBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6JycsXHJcbiAgICAgICAgICAgICAgICBvbGRQYXNzd29yZDpcIm9sZCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBhc3N3b3JkOlwiVXBkYXRlIFlvdXIgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIEFjY291bnRTZXR0aW5nOlwiQWNjb3VudCBTZXR0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTpcImJpcnRoIGRheVwiLFxyXG4gICAgICAgICAgICAgICAgdG9kYXlUb3BpYzondG9kYXkgVG9waWMnLFxyXG4gICAgICAgICAgICAgICAgRnJpZW5kc1Bvc3RzOidmcmllbmRzIHB1YmxpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2luZzonZm9sbG93aW5nJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VyczonRm9sbG93ZXJzJyxcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVByb2ZpbGU6J1VwZGF0ZSBQcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIFlvdXJQb3N0czonWW91ciBQb3N0cycsXHJcbiAgICAgICAgICAgICAgICBMaWtlczonTGlrZXMnLFxyXG4gICAgICAgICAgICAgICAgUG9zdHM6J1Bvc3RzJyxcclxuICAgICAgICAgICAgICAgIHJhZGlvYm94RGVsdGVBY2NvdW50OidyYWRpb2JveERlbHRlQWNjb3VudCcsXHJcbiAgICAgICAgICAgICAgICBEZWxldGVBY2NvdW50SGVhZGVyOidEZWxldGVBY2NvdW50SGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIHNhdmVjaGFuZ2U6J3NhdmVjaGFuZ2UnLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlUGFzc3dvcmQ6J2NoYW5nZVBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIERlYWN0aXZhdGluZzonRGVhY3RpdmF0aW5nJyxcclxuICAgICAgICAgICAgICAgIERlbGV0aW5nOidEZWxldGluZycsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTondXNlcm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOidmaXJzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6J2xhc3RuYW1lJyxcclxuICAgICAgICAgICAgICAgIGJpb2dyYXBoeTonYmlvZ3JhcGh5JyxcclxuICAgICAgICAgICAgICAgIHBob25lOidwaG9uZScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDonZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6J3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIGRheTonZGF5JyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOidtb250aCcsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOid5ZWFyJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1wYXNzd29yZDonY29uZmlybXBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVySW5wdXQ6J3NheSBTb210aGluZycsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc3RfSG92ZXI6J1VwbG9hZCBwaG90byB3aXRoIHlvdXIgcG9zdCcsXHJcbiAgICAgICAgICAgICAgICBwb3N0X0Fub255bW91c2x5X2hvdmVyOidwb3N0X0Fub255bW91c2x5JyxcclxuICAgICAgICAgICAgICAgIHNpZ25pbjonc2lnbiBpbicsXHJcbiAgICAgICAgICAgICAgICBzaWdudXA6J3NpZ24gdXAnLFxyXG4gICAgICAgICAgICAgICAgQWxyZWFkeUhhdmVBY2NvdW50OidBbHJlYWR5IEhhdmUgQWNjb3VudCcsXHJcbiAgICAgICAgICAgICAgICBZb3Vkb250aGF2ZWFjY291bnRDbGlja2hlcmV0bzonWW91IGRvbnQgaGF2ZSBhY2NvdW50IENsaWNrIGhlcmUgdG8nLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uY29kZTpcInZlcmlmaWNhdGlvbiBjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBzZW5kOlwic2VuZFwiXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxhbmdcclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbml0TGFuZ3VhZ2U7IiwiLy9jb25zdCBpcD1cImh0dHA6Ly8xMjcuMC4wLjE6NTAxMFwiO1xyXG5jb25zdCBpcD1cImh0dHA6Ly80Ni4xMDEuMTY5LjE0Mjo1MDEwXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGlwOyIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBhcGlJc0xvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChcImVuZ1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpSXNMb2FkaW5nQ29udGV4dCIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFwiZW5nXCIpO1xyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZUNvbnRleHQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgc29ja2V0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtyZWZyZXNoQWNjZXNzVG9rZW4sZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWZyZXNoQWNjZXNzVG9rZW4nXHJcbmltcG9ydCBpcCBmcm9tICcuLi9jb25zdCdcclxuY29uc3QgYXhpb3NBcGlJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgLy9iYXNlVVJMOiAnaHR0cDovLzQ2LjEwMS4xNjkuMTQyOjUwMTAvJyxcclxuIGJhc2VVUkw6IGlwLFxyXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG59KVxyXG5heGlvc0FwaUluc3RhbmNlLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWVcclxuLy9heGlvc0FwaUluc3RhbmNlLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo1MDEwLycgLy8gc2V0IGRlZmF1bHQgdXJsXHJcbmF4aW9zQXBpSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gIGFzeW5jIGNvbmZpZyA9PiB7XHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBlcnJvciA9PiB7XHJcblxyXG4gICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbn0pO1xyXG5heGlvc0FwaUluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlXHJcbn0sIGFzeW5jIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGVycm9yLmNvbmZpZztcclxuICBpZihlcnJvci5tZXNzYWdlPT1cIk5ldHdvcmsgRXJyb3JcIil7XHJcbiAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZfdG9rZW4nKTtcclxuICAgLy8gYXdhaXQgYXhpb3MucG9zdChcImFwaS9sb2dvdXRcIikgLy8gY2hhbmdlIHRva2VuIGluIGNvb2tpZXMgdG8gdGhlIGJldyBvbmVcclxuXHJcbiAgICBhbGVydChlcnJvci5tZXNzYWdlKVxyXG4gICAgLy9sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09NDAxKXtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZfdG9rZW4nKTtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvbG9nb3V0XCIpIC8vIGNoYW5nZSB0b2tlbiBpbiBjb29raWVzIHRvIHRoZSBiZXcgb25lXHJcbiAgICB3aW5kb3cucmVsb2FkKClcclxuXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpe1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyAmJiAhb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSkge1xyXG4gICAgICBvcmlnaW5hbFJlcXVlc3QuX3JldHJ5ID0gdHJ1ZTtcclxuICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gYXdhaXQgcmVmcmVzaEFjY2Vzc1Rva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmX3Rva2VuXCIpKTsgXHJcbiAgICAgIGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZl90b2tlblwiKSlcclxuICAgICAgLy8gc2VuZCB0aGUgcmVmIHRva2VuIGFuZCBnZXQgbmV3IHRva2VuXHJcbiAgICAgIG9yaWdpbmFsUmVxdWVzdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyBhY2Nlc3NfdG9rZW4uZGF0YS50b2tlbjtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcImFwaS9zZXRUb2tlblwiLHt0b2tlbjphY2Nlc3NfdG9rZW4uZGF0YS50b2tlbn0pIC8vIGNoYW5nZSB0b2tlbiBpbiBjb29raWVzIHRvIHRoZSBiZXcgb25lXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmX3Rva2VuXCIsYWNjZXNzX3Rva2VuLmRhdGEucmVmX3Rva2VuKSAvLyBzYXZlIHRoZSBuZXcgcmVmX3Rva2VuXHJcbiAgICAgIHJldHVybiBheGlvc0FwaUluc3RhbmNlKG9yaWdpbmFsUmVxdWVzdCk7IC8vIHJldHVybiBuZXcgIHJlcXVlc3Qgd2l0aCB0aGUgbmV3IHRva2VuXHJcbiAgfVxyXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5cclxuZXhwb3J0ICBkZWZhdWx0IGF4aW9zQXBpSW5zdGFuY2U7IiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbml0TGFuZ3VhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9pbml0TGFuZ3VhZ2UvaW5pdExhbmd1YWdlJ1xyXG5pbXBvcnQgeyBHZXRVc2VyRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInXHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3VzZXJDb250ZXh0J1xyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbGFuZ3VhZ2VDb250ZXh0J1xyXG5pbXBvcnQgU29ja2V0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NvY2tldENvbnRleHQnXHJcbmltcG9ydCBBcGlJc0xvYWRpbmdDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXBpSXNMb2FkaW5nQ29udGV4dCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IGlwIGZyb20gJy4uL2NvbnN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKHtpbWFnZTpcIlwiLHRlbDpcIlwiLGJpb2dyYXBoeTpcIlwiLHVzZXJOYW1lOlwiXCIsZmlyc3RuYW1lOlwiXCIsbGFzdG5hbWU6XCJcIixhZ2U6XCJcIixmb2xsb3dpbmc6MCxmb2xsb3dlcnM6MH0pXHJcbiAgY29uc3QgdXNlclByb3ZpZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyB1c2VyLCBzZXRVc2VyIH0sIFt1c2VyLCBzZXRVc2VyXSkpXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlU3RhdGUoeyAuLi5pbml0TGFuZ3VhZ2UoXCJlbmdcIikgfSlcclxuICBjb25zdCBsYW5ndWFnZVByb3ZpZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgfSwgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0pKVxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgbG9hZGluZ1Byb3ZpZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9LCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddKSlcclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBzb2NrZXRQcm92aWRlciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHsgc29ja2V0LCBzZXRTb2NrZXR9LCBbc29ja2V0LCBzZXRTb2NrZXRdKSlcclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3QgW29ubHlPbmNlLHNldG9ubHlPbmNlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNvY2tldFJlZiA9IFJlYWN0LnVzZVJlZigpXHJcblxyXG4vKnNvY2tldCBpbyovXHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovIFxyXG4gIGlmKHJvdXRlci5xdWVyeS5yZWZyZWNoPT1cInRydWVcIiAmJiBvbmx5T25jZT09ZmFsc2Upe1xyXG4gICAgc2V0b25seU9uY2UodHJ1ZSlcclxuICAgIEdldFVzZXJEYXRhKHBhZ2VQcm9wcy50b2tlbikudGhlbihkYXRhID0+IHsgXHJcbiAgICAgIFxyXG4gICAgICBzZXRVc2VyKGUgPT4geyByZXR1cm4geyAuLi5lLCAuLi5kYXRhLmRhdGEuZGF0YVswXSx0b2tlbjogcGFnZVByb3BzLnRva2VuIH0gfSlcclxuXHJcbiAgICAgfSkuY2F0Y2goZSA9PiB7IH0pXHJcblxyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqaW5pdCBUb2tlbiB0byB1c2VyUHJvdmlkZXIqKioqKioqKioqKioqKioqKiovXHJcbiAgICBzZXRVc2VyKGUgPT4geyByZXR1cm4geyAuLi5lLCB0b2tlbjogcGFnZVByb3BzLnRva2VuIH0gfSlcclxuICAgIC8qZ2V0IGN1cnJlbnQgbGFuZyAqL1xyXG4gICAgc2V0TGFuZ3VhZ2UoaW5pdExhbmd1YWdlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpIHx8IFwiZW5nXCIpKVxyXG5cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKipmZXRjaCB1c2VyIGRhdGEgb25saW5lIGlmIHRoZXJlIGlzIHRva2VuKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgXHJcbiAgICBpZiAocGFnZVByb3BzLnRva2VuKSB7XHJcbiAgICAgIEdldFVzZXJEYXRhKHBhZ2VQcm9wcy50b2tlbikudGhlbihkYXRhID0+IHsgXHJcbiAgICAgICAgc29ja2V0UmVmLmN1cnJlbnQgPWlvKGlwKTtcclxuICAgICAgICBzb2NrZXRSZWYuY3VycmVudC5vbihcImdldFNvY2tldGlkXCIsKGRhdGFGcm9tU29ja2V0KT0+e1xyXG4gICAgICAgIHNvY2tldFJlZi5jdXJyZW50LmVtaXQoXCJzYXZldXNlck9ubGluZVwiLHt1c2VyaWQ6ZGF0YS5kYXRhLmRhdGFbMF0uX2lkLHNvY2tldGlkOmRhdGFGcm9tU29ja2V0fSlcclxuICAgICAgICBzZXRTb2NrZXQoc29ja2V0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRVc2VyKGUgPT4geyBcclxuICAgICAgICByZXR1cm4geyAuLi5lLCAuLi5kYXRhLmRhdGEuZGF0YVswXSB9IFxyXG4gICAgICB9KSBcclxuICAgICAgfSkuY2F0Y2goZSA9PiB7IH0pXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5yZWZyZWNoXSlcclxuXHJcbiAgXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcFdyYXBwZXInPlxyXG4gICAgICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2xhbmd1YWdlUHJvdmlkZXJ9PlxyXG4gICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyUHJvdmlkZXJ9ID5cclxuICAgICAgICAgICAgPEFwaUlzTG9hZGluZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2xvYWRpbmdQcm92aWRlcn0+XHJcbiAgICAgICAgICAgICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NvY2tldFByb3ZpZGVyfT5cclxuICAgICAgICAgICAgICB7aXNMb2FkaW5nJiY8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48TGluZWFyUHJvZ3Jlc3MgLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgIDwvU29ja2V0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BcGlJc0xvYWRpbmdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L0xhbmd1YWdlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgcmV0dXJuIGF3YWl0IHJlcS5jb29raWVzLnRva2VuID8geyBwcm9wczogeyB0b2tlbjogdHJ1ZSB9IH0gOiB7IHJlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiAnLycsIHBlcm1hbmVudDogZmFsc2UsIH0gfVxyXG59XHJcbiIsImltcG9ydCBheGlvc0FwaUluc3RhbmNlIGZyb20gJy4uL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yJ1xyXG4vLyBzZW5kIHJlZiB0b2tlbiBhbmQgZ2V0IG5ldyB0b2tlblxyXG5jb25zdCByZWZyZXNoQWNjZXNzVG9rZW49YXN5bmMgKHRva2VuKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3Rva2VuL2dldFJlZnJlc2hBY2Nlc3NUb2tlblwiLHtyZWZfdG9rZW46dG9rZW59KVxyXG59XHJcbmNvbnN0IGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZT1hc3luYyAoUmVmcmVzaEFjY2Vzc1Rva2VuKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3Rva2VuL2RlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZVwiLHtSZWZyZXNoQWNjZXNzVG9rZW46UmVmcmVzaEFjY2Vzc1Rva2VufSlcclxufVxyXG5leHBvcnQgeyByZWZyZXNoQWNjZXNzVG9rZW4gLGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZX0iLCJpbXBvcnQgYXhpb3NBcGlJbnN0YW5jZSBmcm9tICcuLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvcidcclxuY29uc3QgTG9naW4gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoJy91c2VyL2xvZ2luJyx7Li4uZGF0YX0pXHJcbn1cclxuY29uc3QgTG9naW5GYWNlYm9vayA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdCgnL3VzZXIvbG9naW5mYWNlYm9vaycsey4uLmRhdGF9KVxyXG59XHJcbmNvbnN0IFJlZ2lzdGVyID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KCcvdXNlci9yZWdpc3Rlcicsey4uLmRhdGF9KVxyXG59XHJcbmNvbnN0IEdldFVzZXJEYXRhID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UuZ2V0KCcvdXNlci9HZXRVc2VyRGF0YScseyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pXHJcbn1cclxuY29uc3QgQ2hhbmdlUHJvZmlsZUltYWdlID0gYXN5bmMgKGZpbGUsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2NoYW5nZXByb2ZpbGVpbWFnZVwiLGZpbGUseyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pXHJcbn1cclxuY29uc3QgR2V0T3RoZXJVc2Vyc0RhdGE9YXN5bmMgKGlkLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9nZXRvdGhlclVzZXJzRGF0YS9cIitpZCx7fSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgYWN0aXZlQWNjb3VudD1hc3luYyAodXNlcmlkLHZlcmlmaWNhdGlvbkNvZGUpPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2FjdGl2ZUFjY291bnRcIix7dXNlcmlkLHZlcmlmaWNhdGlvbkNvZGV9KTtcclxufVxyXG5jb25zdCByZVNlbmRWZXJpZmljYXRpb25Db2RlPWFzeW5jICh1c2VyaWQsdmVyaWZpY2F0aW9uQ29kZSk9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvcmVTZW5kVmVyaWZpY2F0aW9uQ29kZVwiLHt1c2VyaWQsdmVyaWZpY2F0aW9uQ29kZX0pO1xyXG59XHJcbmNvbnN0IHJlbW92ZVRva2VuPWFzeW5jICh1c2VyaWQpPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3JlbW92ZVRva2VuXCIse3VzZXJpZH0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZVByb2ZpbGVJbmZvPWFzeW5jIChuZXdVc2VyRGF0YSx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvdXBkYXRlUHJvZmlsZUluZm9cIix7Li4ubmV3VXNlckRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBjaGFuZ2VQYXNzd29yZD1hc3luYyAocGFzc3dvcmRDaGFuZ2UsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2NoYW5nZVBhc3N3b3JkXCIsey4uLnBhc3N3b3JkQ2hhbmdlfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3Qgc2VhcmNoQWNjb3VudFRvRm9yZ2V0UGFzc3dvcmQ9YXN5bmMgKGlkZW50aXR5KT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9zZWFyY2hBY2NvdW50VG9Gb3JnZXRQYXNzd29yZFwiLHsuLi5pZGVudGl0eX0pO1xyXG59XHJcbmNvbnN0IHJlc2V0UGFzc3dvcmRBcGk9YXN5bmMgKGRhdGFSZXNldFBhc3N3b3JkKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9yZXNldFBhc3N3b3JkXCIsey4uLmRhdGFSZXNldFBhc3N3b3JkfSk7XHJcbn1cclxuY29uc3QgU2V0TmV3UGFzc3dvcmRBcGk9YXN5bmMgKG5ld1Bhc3N3b3JkQW5kVG9rZW5BbmRUZWxPckVtYWlsKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9TZXROZXdQYXNzd29yZFwiLHsuLi5uZXdQYXNzd29yZEFuZFRva2VuQW5kVGVsT3JFbWFpbH0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZUVtYWlsU2VuZENvZGU9YXN5bmMgKGVtYWlsLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci91cGRhdGVFbWFpbFNlbmRDb2RlXCIse2VtYWlsOmVtYWlsfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgdXBkYXRlRW1haWxBcGk9YXN5bmMoZW1haWwsY29kZSx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvdXBkYXRlRW1haWxcIix7ZW1haWw6ZW1haWwsY29kZTpjb2RlfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldHJhbmRvbVVzZXJzQXBpPWFzeW5jKHRva2VuLHJhbmRvbXVzZXJzKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9nZXRyYW5kb21Vc2Vyc1wiLHsuLi5yYW5kb211c2Vyc30seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IHNlYXJjaFVzZXJOYW1lQXBpPWFzeW5jKHNlYXJjaFVzZXJOYW1lLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9TZWFyY2hVc2VyQnlVc2VyTmFtZVwiLHtzZWFyY2hVc2VyTmFtZTpzZWFyY2hVc2VyTmFtZX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0UHJpdmFjeT1hc3luYyh0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvZ2V0UHJpdmFjeVwiLHt9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCB1cGRhdGVQcml2YWN5PWFzeW5jKGRhdGEsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3VwZGF0ZVByaXZhY3lcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmV4cG9ydCB7dXBkYXRlUHJpdmFjeSxnZXRQcml2YWN5LHNlYXJjaFVzZXJOYW1lQXBpLGdldHJhbmRvbVVzZXJzQXBpLHVwZGF0ZUVtYWlsQXBpLHVwZGF0ZUVtYWlsU2VuZENvZGUsU2V0TmV3UGFzc3dvcmRBcGkscmVzZXRQYXNzd29yZEFwaSxzZWFyY2hBY2NvdW50VG9Gb3JnZXRQYXNzd29yZCxjaGFuZ2VQYXNzd29yZCAsdXBkYXRlUHJvZmlsZUluZm8sTG9naW4gLHJlbW92ZVRva2VuLCBSZWdpc3RlcixMb2dpbkZhY2Vib29rLEdldFVzZXJEYXRhLENoYW5nZVByb2ZpbGVJbWFnZSxHZXRPdGhlclVzZXJzRGF0YSxyZVNlbmRWZXJpZmljYXRpb25Db2RlLGFjdGl2ZUFjY291bnR9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=