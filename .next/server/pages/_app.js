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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
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
        socketRef.current = socket_io_client__WEBPACK_IMPORTED_MODULE_11___default()("http://127.0.0.1:5010");
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
                  lineNumber: 81,
                  columnNumber: 52
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 27
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);
async function getServerSideProps({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbml0TGFuZ3VhZ2UvaW5pdExhbmd1YWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBpSXNMb2FkaW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2xhbmd1YWdlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3NvY2tldENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC91c2VyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3JlZnJlc2hBY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbImluaXRMYW5ndWFnZSIsImUiLCJsYW5nIiwicG9zdEFub255bW91c2x5IiwiVXBsb2FkcGhvdG93aXRoeW91cnBvc3QiLCJGb3Jnb3RQYXNzd29yZCIsImNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZSIsInRlbGVwaG9uZW9yZW1haWwiLCJjYW5jZWwiLCJ1cGRhdGUiLCJwdXR5b3VybmV3RW1haWwiLCJVcGRhdGVZb3VyRW1haWwiLCJDb25mZXJtYXRpb25Db2RlIiwiWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZSIsInB1dHlvdXJuZXdwaG9uZW51bWJlcmhlcmUiLCJVcGRhdGVZb3VyUGhvbmVOdW1iZXIiLCJuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aCIsIkl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdSIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJBY2NvdW50U2V0dGluZyIsIlVwZGF0ZVlvdXJQYXNzd29yZCIsImJpcnRoZGF5IiwidG9waWMiLCJ0b2RheVRvcGljIiwiRnJpZW5kc1Bvc3RzIiwiRm9sbG93aW5nIiwiRm9sbG93ZXJzIiwiVXBkYXRlUHJvZmlsZSIsIllvdXJQb3N0cyIsIkxpa2VzIiwiUG9zdHMiLCJyYWRpb2JveERlbHRlQWNjb3VudCIsIkRlbGV0ZUFjY291bnRIZWFkZXIiLCJzYXZlY2hhbmdlIiwiY2hhbmdlUGFzc3dvcmQiLCJEZWFjdGl2YXRpbmciLCJEZWxldGluZyIsInVzZXJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJiaW9ncmFwaHkiLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXkiLCJtb250aCIsInllYXIiLCJjb25maXJtcGFzc3dvcmQiLCJwbGFjZWhvbGRlcklucHV0IiwiVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3N0X0hvdmVyIiwicG9zdF9Bbm9ueW1vdXNseV9ob3ZlciIsInNpZ25pbiIsInNpZ251cCIsIkFscmVhZHlIYXZlQWNjb3VudCIsIllvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvIiwidmVyaWZpY2F0aW9uY29kZSIsInNlbmQiLCJVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc190SG92ZXIiLCJhcmFiaWMiLCJhcGlJc0xvYWRpbmdDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsInNvY2tldCIsInVuZGVmaW5lZCIsIlVzZXJDb250ZXh0IiwiYXhpb3NBcGlJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImRlZmF1bHRzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9yaWdpbmFsUmVxdWVzdCIsIm1lc3NhZ2UiLCJhbGVydCIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwb3N0Iiwid2luZG93IiwicmVsb2FkIiwiX3JldHJ5IiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwiZ2V0SXRlbSIsImRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInRva2VuIiwic2V0SXRlbSIsInJlZl90b2tlbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsInNldFVzZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaW1hZ2UiLCJ0ZWwiLCJ1c2VyTmFtZSIsImFnZSIsImZvbGxvd2luZyIsImZvbGxvd2VycyIsInVzZXJQcm92aWRlciIsInVzZU1lbW8iLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwibGFuZ3VhZ2VQcm92aWRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvYWRpbmdQcm92aWRlciIsInNldFNvY2tldCIsInNvY2tldFByb3ZpZGVyIiwib25seU9uY2UiLCJzZXRvbmx5T25jZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNvY2tldFJlZiIsInVzZVJlZiIsInF1ZXJ5IiwicmVmcmVjaCIsIkdldFVzZXJEYXRhIiwidGhlbiIsImNhdGNoIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlvIiwib24iLCJkYXRhRnJvbVNvY2tldCIsImVtaXQiLCJ1c2VyaWQiLCJfaWQiLCJzb2NrZXRpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsImNvb2tpZXMiLCJwcm9wcyIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJSZWZyZXNoQWNjZXNzVG9rZW4iLCJMb2dpbiIsIkxvZ2luRmFjZWJvb2siLCJSZWdpc3RlciIsImdldCIsIkNoYW5nZVByb2ZpbGVJbWFnZSIsImZpbGUiLCJHZXRPdGhlclVzZXJzRGF0YSIsImlkIiwiYWN0aXZlQWNjb3VudCIsInZlcmlmaWNhdGlvbkNvZGUiLCJyZVNlbmRWZXJpZmljYXRpb25Db2RlIiwicmVtb3ZlVG9rZW4iLCJ1cGRhdGVQcm9maWxlSW5mbyIsIm5ld1VzZXJEYXRhIiwicGFzc3dvcmRDaGFuZ2UiLCJzZWFyY2hBY2NvdW50VG9Gb3JnZXRQYXNzd29yZCIsImlkZW50aXR5IiwicmVzZXRQYXNzd29yZEFwaSIsImRhdGFSZXNldFBhc3N3b3JkIiwiU2V0TmV3UGFzc3dvcmRBcGkiLCJuZXdQYXNzd29yZEFuZFRva2VuQW5kVGVsT3JFbWFpbCIsInVwZGF0ZUVtYWlsU2VuZENvZGUiLCJ1cGRhdGVFbWFpbEFwaSIsImNvZGUiLCJnZXRyYW5kb21Vc2Vyc0FwaSIsInJhbmRvbXVzZXJzIiwic2VhcmNoVXNlck5hbWVBcGkiLCJzZWFyY2hVc2VyTmFtZSIsImdldFByaXZhY3kiLCJ1cGRhdGVQcml2YWN5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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QUFqRCxHQUE4RDtBQUFFbkYsV0FBTyxFQUFFO0FBQUNDLG1CQUFhLEVBQUUsWUFBWUU7QUFBNUI7QUFBWCxHQUE5RCxDQUFQO0FBQ0QsQ0FGRDs7QUFHQSxNQUFNaUYsaUJBQWlCLEdBQUMsT0FBTUMsY0FBTixFQUFxQmxGLEtBQXJCLEtBQTZCO0FBQ25ELFNBQU9qQyxnRUFBZ0IsQ0FBQ3NCLElBQWpCLENBQXNCLDRCQUF0QixFQUFtRDtBQUFDNkYsa0JBQWMsRUFBQ0E7QUFBaEIsR0FBbkQsRUFBbUY7QUFBRXJGLFdBQU8sRUFBRTtBQUFDQyxtQkFBYSxFQUFFLFlBQVlFO0FBQTVCO0FBQVgsR0FBbkYsQ0FBUDtBQUNELENBRkQ7O0FBS0EsTUFBTW1GLFVBQVUsR0FBQyxNQUFNbkYsS0FBTixJQUFjO0FBQzdCLFNBQU9qQyxnRUFBZ0IsQ0FBQ3NCLElBQWpCLENBQXNCLGtCQUF0QixFQUF5QyxFQUF6QyxFQUE0QztBQUFFUSxXQUFPLEVBQUU7QUFBQ0MsbUJBQWEsRUFBRSxZQUFZRTtBQUE1QjtBQUFYLEdBQTVDLENBQVA7QUFDRCxDQUZEOztBQUdBLE1BQU1vRixhQUFhLEdBQUMsT0FBTXJGLElBQU4sRUFBV0MsS0FBWCxLQUFtQjtBQUNyQyxTQUFPakMsZ0VBQWdCLENBQUNzQixJQUFqQixDQUFzQixxQkFBdEIsb0JBQWdEVSxJQUFoRCxHQUFzRDtBQUFFRixXQUFPLEVBQUU7QUFBQ0MsbUJBQWEsRUFBRSxZQUFZRTtBQUE1QjtBQUFYLEdBQXRELENBQVA7QUFDRCxDQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxyXG5jb25zdCBpbml0TGFuZ3VhZ2U9KGUpPT57XHJcbiAgICB2YXIgbGFuZz17fVxyXG4gICAgc3dpdGNoKGUpIHtcclxuICAgICAgICBjYXNlIFwiZW5nXCI6XHJcbiAgICAgICAgICAgIGxhbmc9e1xyXG4gICAgICAgICAgICAgICAgcG9zdEFub255bW91c2x5OlwicG9zdCBBbm9ueW1vdXNseVwiLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkcGhvdG93aXRoeW91cnBvc3Q6XCJVcGxvYWQgcGhvdG8gd2l0aCB5b3VyIHBvc3RcIixcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkOlwiRm9yZ290IFBhc3N3b3JkP1wiLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlYXByb2ZpbGVmb2xsb3dvdGhlcmFjY291bnRzdGFsa2Fib3V0eW91cm93bmV4cGVyaWVuY2VhbmRtb3JlOlwiY3JlYXRlIGEgcHJvZmlsZSBmb2xsb3cgb3RoZXIgYWNjb3VudHMgdGFsayBhYm91dCB5b3VyIG93biBleHBlcmllbmNlIGFuZCBtb3JlXCIsXHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVvcmVtYWlsOlwidGVsZXBob25lIG9yIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6XCJjYW5jZWxcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTpcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld0VtYWlsOlwicHV0IHlvdXIgbmV3IEVtYWlsIGhlcmVcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJFbWFpbDpcIlVwZGF0ZSBZb3VyIEVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICBDb25mZXJtYXRpb25Db2RlOlwiQ29uZmVybWF0aW9uIENvZGVcIixcclxuICAgICAgICAgICAgICAgIFlvdVdpbGxyZWNpdmVjb25mZXJtYXRpb25Db2RlcHV0aXRoZXJlQW5kQ2xpY2tVcGRhdGU6XCJZb3UgV2lsbCByZWNpdmUgY29uZmVybWF0aW9uIENvZGUgcHV0IGl0IGhlcmUgQW5kIENsaWNrIFVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld3Bob25lbnVtYmVyaGVyZTpcInB1dCB5b3VyIG5ldyBwaG9uZSBudW1iZXIgaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBob25lTnVtYmVyOlwiVXBkYXRlIFlvdXIgUGhvbmVOdW1iZXJcIixcclxuICAgICAgICAgICAgICAgIG5ld3Bhc3N3b3JkbmVlZHRvYmVhdGxlYXN0bGVuZ3RoOlwibmV3IHBhc3N3b3JkIG5lZWQgdG8gYmUgYXQgbGVhc3QgOCBsZW5ndGhcIixcclxuICAgICAgICAgICAgICAgIEl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdTpcIkl0J3MgYSBnb29kIGlkZWEgdG8gdXNlIGEgc3Ryb25nIHBhc3N3b3JkIHRoYXQgeW91J3JlIG5vdCB1c2luZyBlbHNld2hlcmVcIixcclxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkOlwibmV3IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBvbGRQYXNzd29yZDpcIm9sZCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgQWNjb3VudFNldHRpbmc6XCJBY2NvdW50IFNldHRpbmdcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQYXNzd29yZDpcIlVwZGF0ZSBZb3VyIFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTpcImJpcnRoIGRheVwiLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6JycsXHJcbiAgICAgICAgICAgICAgICB0b2RheVRvcGljOid0b2RheSBUb3BpYycsXHJcbiAgICAgICAgICAgICAgICBGcmllbmRzUG9zdHM6J2ZyaWVuZHMgcHVibGljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93aW5nOidmb2xsb3dpbmcnLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJzOidGb2xsb3dlcnMnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvZmlsZTonVXBkYXRlIFByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgWW91clBvc3RzOidZb3VyIFBvc3RzJyxcclxuICAgICAgICAgICAgICAgIExpa2VzOidMaWtlcycsXHJcbiAgICAgICAgICAgICAgICBQb3N0czonUG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9ib3hEZWx0ZUFjY291bnQ6J3JhZGlvYm94RGVsdGVBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgIERlbGV0ZUFjY291bnRIZWFkZXI6J0RlbGV0ZUFjY291bnRIZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWNoYW5nZTonc2F2ZWNoYW5nZScsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXNzd29yZDonY2hhbmdlUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgRGVhY3RpdmF0aW5nOidEZWFjdGl2YXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRpbmc6J0RlbGV0aW5nJyxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOid1c2VybmFtZScsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6J2ZpcnN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTonbGFzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgYmlvZ3JhcGh5OidiaW9ncmFwaHknLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6J3Bob25lJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOidlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDoncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgZGF5OidkYXknLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6J21vbnRoJyxcclxuICAgICAgICAgICAgICAgIHllYXI6J3llYXInLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybXBhc3N3b3JkOidjb25maXJtcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJJbnB1dDonc2F5IHNvbXRoaW5nJyxcclxuICAgICAgICAgICAgICAgIFVwbG9hZF9waG90b193aXRoX3lvdXJfcG9zdF9Ib3ZlcjonVXBsb2FkIHBob3RvIHdpdGggeW91ciBwb3N0JyxcclxuICAgICAgICAgICAgICAgIHBvc3RfQW5vbnltb3VzbHlfaG92ZXI6J3Bvc3RfQW5vbnltb3VzbHknLFxyXG4gICAgICAgICAgICAgICAgc2lnbmluOidzaWduIGluJyxcclxuICAgICAgICAgICAgICAgIHNpZ251cDonc2lnbiB1cCcsXHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5SGF2ZUFjY291bnQ6J0FscmVhZHkgSGF2ZSBBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgIFlvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvOidZb3UgZG9udCBoYXZlIGFjY291bnQgQ2xpY2sgaGVyZSB0bycsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25jb2RlOlwidmVyaWZpY2F0aW9uIGNvZGVcIixcclxuICAgICAgICAgICAgICAgIHNlbmQ6XCJzZW5kXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImZyXCI6XHJcbiAgICAgICAgICAgIGxhbmc9e1xyXG4gICAgICAgICAgICAgICAgcG9zdEFub255bW91c2x5OlwicHVibGllciBkZSBtYW5pw6hyZSBhbm9ueW1lXCIsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRwaG90b3dpdGh5b3VycG9zdDpcIlTDqWzDqWNoYXJnZXIgdW5lIHBob3RvIGF2ZWMgdm90cmUgbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmQ6XCJNb3QgZGUgcGFzc2Ugb3VibGnDqT9cIixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWFwcm9maWxlZm9sbG93b3RoZXJhY2NvdW50c3RhbGthYm91dHlvdXJvd25leHBlcmllbmNlYW5kbW9yZTpcImNyw6llciB1biBwcm9maWwgc3VpdnJlIGQnYXV0cmVzIGNvbXB0ZXMgcGFybGVyIGRlIHZvdHJlIHByb3ByZSBleHDDqXJpZW5jZSBldCBwbHVzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVvcmVtYWlsOlwidMOpbMOpcGhvbmUgb3UgZW1haWxcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDpcIkFubnVsZXJcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTpcIm1ldHRyZSDDoCBqb3VyXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3RW1haWw6XCJtZXR0ZXogdm90cmUgbm91dmVhdSBjb3VycmllbCBpY2lcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJFbWFpbDpcIk1ldHRleiDDoCBqb3VyIHZvdHJlIGUtbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgQ29uZmVybWF0aW9uQ29kZTpcIkNvZGUgZGUgY29uZmVybWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBZb3VXaWxscmVjaXZlY29uZmVybWF0aW9uQ29kZXB1dGl0aGVyZUFuZENsaWNrVXBkYXRlOlwiVm91cyByZWNldnJleiBsZSBjb2RlIGRlIGNvbmZlcm1hdGlvbiwgbWV0dGV6LWxlIGljaSBldCBjbGlxdWV6IHN1ciBNZXR0cmUgw6Agam91clwiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld3Bob25lbnVtYmVyaGVyZTpcIm1ldHRleiB2b3RyZSBub3V2ZWF1IG51bcOpcm8gZGUgdMOpbMOpcGhvbmUgaWNpXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGhvbmVOdW1iZXI6XCJNZXR0ZXogw6Agam91ciB2b3RyZSBudW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdwYXNzd29yZG5lZWR0b2JlYXRsZWFzdGxlbmd0aDpcImxlIG5vdXZlYXUgbW90IGRlIHBhc3NlIGRvaXQgYXZvaXIgdW5lIGxvbmd1ZXVyIGQnYXUgbW9pbnMgOFwiLFxyXG4gICAgICAgICAgICAgICAgSXRzYWdvb2RpZGVhdG91c2Vhc3Ryb25ncGFzc3dvcmR0aGF0eW91OlwiQydlc3QgdW5lIGJvbm5lIGlkw6llIGQndXRpbGlzZXIgdW4gbW90IGRlIHBhc3NlIGZvcnQgcXVlIHZvdXMgbid1dGlsaXNleiBwYXMgYWlsbGV1cnNcIixcclxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkOlwibm91dmVhdSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkOlwiYW5jaWVuIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgQWNjb3VudFNldHRpbmc6XCJQYXJhbcOodHJlIGR1IGNvbXB0ZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBhc3N3b3JkOlwiTWV0dGV6IMOgIGpvdXIgdm90cmUgbW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTpcImRhdGUgZCdhbm5pdmVyc2FpcmV5XCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzonJyxcclxuICAgICAgICAgICAgICAgIHRvZGF5VG9waWM6XCJTdWpldCBkJ2F1am91cmQgJ2h1aVwiLFxyXG4gICAgICAgICAgICAgICAgRnJpZW5kc1Bvc3RzOlwicHVibGljYXRpb24gZCdhbWlzXCIsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dpbmc6J3N1aXZhbnRlJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2VyczonU3VpdmV1cnMnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvZmlsZTonTWV0dHJlIMOgIGpvdXIgbGUgcHJvZmlsJyxcclxuICAgICAgICAgICAgICAgIFlvdXJQb3N0czonVm9zIHB1YmxpY2F0aW9ucycsXHJcbiAgICAgICAgICAgICAgICBMaWtlczpcImonYWltZXNcIixcclxuICAgICAgICAgICAgICAgIFBvc3RzOidkZXMgcG9zdGVzJyxcclxuICAgICAgICAgICAgICAgIHJhZGlvYm94RGVsdGVBY2NvdW50OidTdXBwcmVzc2lvbicsXHJcbiAgICAgICAgICAgICAgICBEZWxldGVBY2NvdW50SGVhZGVyOidTdXBwcmltZXIgbGUgY29tcHRlJyxcclxuICAgICAgICAgICAgICAgIHNhdmVjaGFuZ2U6J3NhdXZlZ2FyZGVyIGxlcyBtb2RpZmljYXRpb25zJyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkOidjaGFuZ2VyIGxlIG1vdCBkZSBwYXNzZScsXHJcbiAgICAgICAgICAgICAgICBEZWFjdGl2YXRpbmc6J0NlY2kgZXN0IHBlcm1hbmVudC5Mb3JzcXVlIHZvdXMgc3VwcHJpbWV6IHZvdHJlIGNvbXB0ZSwgdm91cyBuZSBwb3VycmV6IHBhcyByw6ljdXDDqXJlciBsZSBjb250ZW51IG91IGxlcyBpbmZvcm1hdGlvbnMgcXVlIHZvdXMgYXZleiBwYXJ0YWfDqXMgc3VyIGwgYXBwbGljYXRpb24uJyxcclxuICAgICAgICAgICAgICAgIERlbGV0aW5nOidzdXBwcmltZScsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTpcIk5vbSBkJ3V0aWxpc2F0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6J1Byw6lub20nLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6J25vbSBkZSBmYW1pbGxlJyxcclxuICAgICAgICAgICAgICAgIGJpb2dyYXBoeTonQmlvZ3JhcGhpZScsXHJcbiAgICAgICAgICAgICAgICBwaG9uZTondMOpbMOpcGhvbmUnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6J2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOidtb3QgZGUgcGFzc2UnLFxyXG4gICAgICAgICAgICAgICAgZGF5Oidqb3VyJyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOidtb250aCcsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOid5ZWFyJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1wYXNzd29yZDonQ29uZmlybWV6IGxlIG1vdCBkZSBwYXNzZScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcklucHV0OifDoCBxdW9pIHBlbnNlcy10dScsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRfcGhvdG9fd2l0aF95b3VyX3Bvc190SG92ZXI6J1TDqWzDqWNoYXJnZXIgdW5lIHBob3RvIGF2ZWMgdm90cmUgbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICBwb3N0X0Fub255bW91c2x5X2hvdmVyOidwdWJsaWVyIGRlIG1hbmnDqHJlIGFub255bWUnLFxyXG4gICAgICAgICAgICAgICAgc2lnbmluOlwicydpZGVudGlmaWVyXCIsXHJcbiAgICAgICAgICAgICAgICBzaWdudXA6XCJTJ2luc2NyaXJlXCIsXHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5SGF2ZUFjY291bnQ6J1ZvdXMgYXZleiBkw6lqw6AgdW4gY29tcHRlJyxcclxuICAgICAgICAgICAgICAgIFlvdWRvbnRoYXZlYWNjb3VudENsaWNraGVyZXRvOlwiVm91cyBuJ2F2ZXogcGFzIGRlIGNvbXB0ZSBDbGlxdWV6IGljaSBwb3VyXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25jb2RlOlwiY29kZSBkZSB2w6lyaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBzZW5kOlwiZW52b3llclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImFyYWJpY1wiOlxyXG4gICAgICAgICAgICBsYW5nPXtcclxuICAgICAgICAgICAgICAgIHBvc3RBbm9ueW1vdXNseTpcItmG2LTYsSDZhdis2YfZiNmEXCIsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRwaG90b3dpdGh5b3VycG9zdDpcItiq2K3ZhdmK2YQg2KfZhNi12YjYsdipINmF2Lkg2YXZhti02YjYsdmDXCIsXHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZDpcItmH2YQg2YbYs9mK2Kog2YPZhNmF2Kkg2KfZhNiz2LE/XCIsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmU6XCLYpdmG2LTYp9ihINit2LPYp9ioICDYqtin2KjYuSDYrdiz2KfYqNin2Kog2KPYrtix2Ykg2KrYrdiv2Ksg2LnZhiDYqtis2LHYqNiq2YMg2KfZhNiu2KfYtdipINmI2KfZhNmF2LLZitivXCIsXHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVvcmVtYWlsOlwi2KfZhNmH2KfYqtmBINij2Ygg2KfZhNio2LHZitivINin2YTYpdmE2YPYqtix2YjZhtmKXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6XCLYpdmE2LrYp9ihXCIsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6XCLYqtit2K/ZitirXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3RW1haWw6XCLYtti5INio2LHZitiv2YMg2KfZhNil2YTZg9iq2LHZiNmG2Yog2KfZhNis2K/ZitivINmH2YbYp1wiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91ckVtYWlsOlwi2YLZhSDYqNiq2K3Yr9mK2Ksg2KjYsdmK2K/ZgyDYp9mE2KXZhNmD2KrYsdmI2YbZilwiLFxyXG4gICAgICAgICAgICAgICAgQ29uZmVybWF0aW9uQ29kZTpcItmD2YjYryDYp9mE2KrYo9mD2YrYr1wiLFxyXG4gICAgICAgICAgICAgICAgWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZTpcItiz2YjZgSDYqtiq2YTZgtmJINix2YXYsiDYp9mE2KrYo9mD2YrYryDZiNi22LnZhyDZh9mG2Kcg2YjYp9mG2YLYsSDZgdmI2YIg2KrYrdiv2YrYq1wiLFxyXG4gICAgICAgICAgICAgICAgcHV0eW91cm5ld3Bob25lbnVtYmVyaGVyZTpcIti22Lkg2LHZgtmFINmH2KfYqtmB2YMg2KfZhNis2K/ZitivINmH2YbYp1wiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91clBob25lTnVtYmVyOlwi2YLZhSDYqNiq2K3Yr9mK2Ksg2LHZgtmFINmH2KfYqtmB2YNcIixcclxuICAgICAgICAgICAgICAgIG5ld3Bhc3N3b3JkbmVlZHRvYmVhdGxlYXN0bGVuZ3RoOlwi2YrYrNioINij2YTYpyDZitmC2YQg2LfZiNmEINmD2YTZhdipINin2YTZhdix2YjYsSDYp9mE2KzYr9mK2K/YqSDYudmGIDhcIixcclxuICAgICAgICAgICAgICAgIEl0c2Fnb29kaWRlYXRvdXNlYXN0cm9uZ3Bhc3N3b3JkdGhhdHlvdTpcItmF2YYg2KfZhNis2YrYryDYp9iz2KrYrtiv2KfZhSDZg9mE2YXYqSDZhdix2YjYsSDZgtmI2YrYqSDZhNinINiq2LPYqtiu2K/ZhdmH2Kcg2YHZiiDYo9mKINmF2YPYp9mGINii2K7YsVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ6XCLZg9mE2YXYqSDYp9mE2LPYsSDYp9mE2KzYr9mK2K/YqVwiLFxyXG4gICAgICAgICAgICAgICAgb2xkUGFzc3dvcmQ6XCLZg9mE2YXYqSDYp9mE2YXYsdmI2LEg2KfZhNmC2K/ZitmF2KlcIixcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5Olwi2LnZitivINin2YTZhdmK2YTYp9ivXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NvdW50U2V0dGluZzpcItil2LnYr9in2K/Yp9iqINin2YTYrdiz2KfYqFwiLFxyXG4gICAgICAgICAgICAgICAgdG9waWM6JycsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGFzc3dvcmQ6XCLZgtmFINio2KrYrdiv2YrYqyDZg9mE2YXYqSDYp9mE2YXYsdmI2LEg2KfZhNiu2KfYtdipINio2YNcIixcclxuICAgICAgICAgICAgICAgIGFyYWJpYzpcItmF2YjYttmI2Lkg2KfZhNmK2YjZhVwiLFxyXG4gICAgICAgICAgICAgICAgdG9kYXlUb3BpYzon2YbYtNixINin2YTYo9i12K/Zgtin2KEnLFxyXG4gICAgICAgICAgICAgICAgRnJpZW5kc1Bvc3RzOifYp9mE2KPYtdiv2YLYp9ihJyxcclxuICAgICAgICAgICAgICAgIEZvbGxvd2luZzon2YXYqtin2KjYudmH2YUnLFxyXG4gICAgICAgICAgICAgICAgRm9sbG93ZXJzOifYp9mE2YXYqtin2KjYudmK2YYnLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvZmlsZTon2KrYrdiv2YrYqyDYp9mE2KjZitmG2KfYqicsXHJcbiAgICAgICAgICAgICAgICBZb3VyUG9zdHM6J9mF2YbYtNmI2LHYp9iq2YMnLFxyXG4gICAgICAgICAgICAgICAgTGlrZXM6J9in2LnYrNio2KrYp9mDJyxcclxuICAgICAgICAgICAgICAgIFBvc3RzOifYp9mE2YXYtNin2LHZg9in2KonLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9ib3hEZWx0ZUFjY291bnQ6J9it2LDZgScsXHJcbiAgICAgICAgICAgICAgICBEZWxldGVBY2NvdW50SGVhZGVyOifYrdiw2YEg2KfZhNit2LPYp9ioJyxcclxuICAgICAgICAgICAgICAgIHNhdmVjaGFuZ2U6J9it2YHYuCDYp9mE2KrYutmK2YrYsScsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYXNzd29yZDon2KrYutmK2LEg2YPZhNmF2Kkg2KfZhNiz2LEnLFxyXG4gICAgICAgICAgICAgICAgRGVhY3RpdmF0aW5nOlwi2KfYs9mFINin2YTYtNmH2LHYqdmH2LDYpyDYr9in2KbZhSDYjCDYudmG2K/ZhdinINiq2K3YsNmBINit2LPYp9io2YMg2Iwg2YTZhiDYqtiq2YXZg9mGINmF2YYg2KfYs9iq2LHYr9in2K8g2KfZhNmF2K3YqtmI2Ykg2KPZiCDYp9mE2YXYudmE2YjZhdin2Kog2KfZhNiq2Yog2LTYp9ix2YPYqtmH2Kcg2LnZhNmJINin2YTYqti32KjZitmCLlwiLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRpbmc6J9i02LfYqCcsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTon2KfYs9mFINin2YTYtNmH2LHYqScsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6J9in2YTYp9iz2YUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6J9in2YTZhNmC2KgnLFxyXG4gICAgICAgICAgICAgICAgYmlvZ3JhcGh5OifYs9mK2LHYqSDYtNiu2LXZitipJyxcclxuICAgICAgICAgICAgICAgIHBob25lOifZh9in2KrZgScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDon2KfZhNio2LHZitivJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOlwi2YPZhNmF2Ycg2KfZhNiz2LFcIixcclxuICAgICAgICAgICAgICAgIGRheTon2YrZiNmFJyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOifYp9mE2LTZh9ixJyxcclxuICAgICAgICAgICAgICAgIHllYXI6J9in2YTYudin2YUnLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybXBhc3N3b3JkOifYqtin2YPZitivINmD2YTZhdipINin2YTZhdix2YjYsScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcklucHV0OifYqNmF2KfYsNinINiq2YHZg9ixJyxcclxuICAgICAgICAgICAgICAgIFVwbG9hZF9waG90b193aXRoX3lvdXJfcG9zX3RIb3Zlcjon2KrYrdmF2YrZhCDYp9mE2LXZiNix2Kkg2YXYuSDZhdmG2LTZiNix2YMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdF9Bbm9ueW1vdXNseV9ob3Zlcjon2YbYtNixINmF2KzZh9mI2YQnLFxyXG4gICAgICAgICAgICAgICAgc2lnbmluOifYqtiz2KzZitmEINin2YTYr9iu2YjZhCcsXHJcbiAgICAgICAgICAgICAgICBzaWdudXA6J9in2LTYqtix2KfZgycsXHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5SGF2ZUFjY291bnQ6J9mE2K/ZitmDINit2LPYp9ioINio2KfZhNmB2LnZhCcsXHJcbiAgICAgICAgICAgICAgICBZb3Vkb250aGF2ZWFjY291bnRDbGlja2hlcmV0bzon2YTZitizINmE2K/ZitmDINit2LPYp9ioINin2YbZgtixINmH2YbYpycsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25jb2RlOlwi2LHZhdiyINin2YTYqtit2YLZglwiLFxyXG4gICAgICAgICAgICAgICAgc2VuZDpcItil2LHYs9in2YRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbGFuZz17XHJcbiAgICAgICAgICAgICAgICBwb3N0QW5vbnltb3VzbHk6XCJwb3N0IEFub255bW91c2x5XCIsXHJcbiAgICAgICAgICAgICAgICBVcGxvYWRwaG90b3dpdGh5b3VycG9zdDpcIlVwbG9hZCBwaG90byB3aXRoIHlvdXIgcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmQ6XCJGb3Jnb3QgUGFzc3dvcmQ/XCIsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVhcHJvZmlsZWZvbGxvd290aGVyYWNjb3VudHN0YWxrYWJvdXR5b3Vyb3duZXhwZXJpZW5jZWFuZG1vcmU6XCJjcmVhdGUgYSBwcm9maWxlIGZvbGxvdyBvdGhlciBhY2NvdW50cyB0YWxrIGFib3V0IHlvdXIgb3duIGV4cGVyaWVuY2UgYW5kIG1vcmVcIixcclxuICAgICAgICAgICAgICAgIHRlbGVwaG9uZW9yZW1haWw6XCJ0ZWxlcGhvbmUgb3IgZW1haWxcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDpcImNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOlwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3RW1haWw6XCJwdXQgeW91ciBuZXcgRW1haWwgaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgVXBkYXRlWW91ckVtYWlsOlwiVXBkYXRlIFlvdXIgRW1haWxcIixcclxuICAgICAgICAgICAgICAgIENvbmZlcm1hdGlvbkNvZGU6XCJDb25mZXJtYXRpb24gQ29kZVwiLFxyXG4gICAgICAgICAgICAgICAgWW91V2lsbHJlY2l2ZWNvbmZlcm1hdGlvbkNvZGVwdXRpdGhlcmVBbmRDbGlja1VwZGF0ZTpcIllvdSBXaWxsIHJlY2l2ZSBjb25mZXJtYXRpb24gQ29kZSBwdXQgaXQgaGVyZSBBbmQgQ2xpY2sgVXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBwdXR5b3VybmV3cGhvbmVudW1iZXJoZXJlOlwicHV0IHlvdXIgbmV3IHBob25lIG51bWJlciBoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVZb3VyUGhvbmVOdW1iZXI6XCJVcGRhdGUgWW91ciBQaG9uZU51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgbmV3cGFzc3dvcmRuZWVkdG9iZWF0bGVhc3RsZW5ndGg6XCJuZXcgcGFzc3dvcmQgbmVlZCB0byBiZSBhdCBsZWFzdCA4IGxlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgSXRzYWdvb2RpZGVhdG91c2Vhc3Ryb25ncGFzc3dvcmR0aGF0eW91OlwiSXQncyBhIGdvb2QgaWRlYSB0byB1c2UgYSBzdHJvbmcgcGFzc3dvcmQgdGhhdCB5b3UncmUgbm90IHVzaW5nIGVsc2V3aGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3UGFzc3dvcmQ6XCJuZXcgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOicnLFxyXG4gICAgICAgICAgICAgICAgb2xkUGFzc3dvcmQ6XCJvbGQgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIFVwZGF0ZVlvdXJQYXNzd29yZDpcIlVwZGF0ZSBZb3VyIFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NvdW50U2V0dGluZzpcIkFjY291bnQgU2V0dGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgYmlydGhkYXk6XCJiaXJ0aCBkYXlcIixcclxuICAgICAgICAgICAgICAgIHRvZGF5VG9waWM6J3RvZGF5IFRvcGljJyxcclxuICAgICAgICAgICAgICAgIEZyaWVuZHNQb3N0czonZnJpZW5kcyBwdWJsaWNhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dpbmc6J2ZvbGxvd2luZycsXHJcbiAgICAgICAgICAgICAgICBGb2xsb3dlcnM6J0ZvbGxvd2VycycsXHJcbiAgICAgICAgICAgICAgICBVcGRhdGVQcm9maWxlOidVcGRhdGUgUHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBZb3VyUG9zdHM6J1lvdXIgUG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgTGlrZXM6J0xpa2VzJyxcclxuICAgICAgICAgICAgICAgIFBvc3RzOidQb3N0cycsXHJcbiAgICAgICAgICAgICAgICByYWRpb2JveERlbHRlQWNjb3VudDoncmFkaW9ib3hEZWx0ZUFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgRGVsZXRlQWNjb3VudEhlYWRlcjonRGVsZXRlQWNjb3VudEhlYWRlcicsXHJcbiAgICAgICAgICAgICAgICBzYXZlY2hhbmdlOidzYXZlY2hhbmdlJyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVBhc3N3b3JkOidjaGFuZ2VQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBEZWFjdGl2YXRpbmc6J0RlYWN0aXZhdGluZycsXHJcbiAgICAgICAgICAgICAgICBEZWxldGluZzonRGVsZXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6J3VzZXJuYW1lJyxcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTonZmlyc3RuYW1lJyxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOidsYXN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICBiaW9ncmFwaHk6J2Jpb2dyYXBoeScsXHJcbiAgICAgICAgICAgICAgICBwaG9uZToncGhvbmUnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6J2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOidwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBkYXk6J2RheScsXHJcbiAgICAgICAgICAgICAgICBtb250aDonbW9udGgnLFxyXG4gICAgICAgICAgICAgICAgeWVhcjoneWVhcicsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6J2NvbmZpcm1wYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcklucHV0OidzYXkgU29tdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgVXBsb2FkX3Bob3RvX3dpdGhfeW91cl9wb3N0X0hvdmVyOidVcGxvYWQgcGhvdG8gd2l0aCB5b3VyIHBvc3QnLFxyXG4gICAgICAgICAgICAgICAgcG9zdF9Bbm9ueW1vdXNseV9ob3ZlcjoncG9zdF9Bbm9ueW1vdXNseScsXHJcbiAgICAgICAgICAgICAgICBzaWduaW46J3NpZ24gaW4nLFxyXG4gICAgICAgICAgICAgICAgc2lnbnVwOidzaWduIHVwJyxcclxuICAgICAgICAgICAgICAgIEFscmVhZHlIYXZlQWNjb3VudDonQWxyZWFkeSBIYXZlIEFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgWW91ZG9udGhhdmVhY2NvdW50Q2xpY2toZXJldG86J1lvdSBkb250IGhhdmUgYWNjb3VudCBDbGljayBoZXJlIHRvJyxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbmNvZGU6XCJ2ZXJpZmljYXRpb24gY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgc2VuZDpcInNlbmRcIlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5pdExhbmd1YWdlOyIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBhcGlJc0xvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChcImVuZ1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBpSXNMb2FkaW5nQ29udGV4dCIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0ICBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFwiZW5nXCIpO1xyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZUNvbnRleHQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgc29ja2V0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCAgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtyZWZyZXNoQWNjZXNzVG9rZW4sZGVsZXRlUmVmcmVjaFRva2VuT2xkT25lfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWZyZXNoQWNjZXNzVG9rZW4nXHJcbmNvbnN0IGF4aW9zQXBpSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vYmFzZVVSTDogJ2h0dHA6Ly8xMjcuMC4wLjE6NTAxMC8nLFxyXG4gIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjUwMTAvJyxcclxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxufSlcclxuYXhpb3NBcGlJbnN0YW5jZS5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXHJcbi8vYXhpb3NBcGlJbnN0YW5jZS5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAxMC8nIC8vIHNldCBkZWZhdWx0IHVybFxyXG5heGlvc0FwaUluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICBhc3luYyBjb25maWcgPT4ge1xyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0sXHJcbiAgZXJyb3IgPT4ge1xyXG5cclxuICAgIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG59KTtcclxuYXhpb3NBcGlJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXNwb25zZVxyXG59LCBhc3luYyBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICBjb25zb2xlLmxvZyhlcnJvcilcclxuICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWc7XHJcbiAgaWYoZXJyb3IubWVzc2FnZT09XCJOZXR3b3JrIEVycm9yXCIpe1xyXG4gICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmX3Rva2VuJyk7XHJcbiAgIC8vIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvbG9nb3V0XCIpIC8vIGNoYW5nZSB0b2tlbiBpbiBjb29raWVzIHRvIHRoZSBiZXcgb25lXHJcblxyXG4gICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcclxuICAgIC8vbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PTQwMSl7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmX3Rva2VuJyk7XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL2xvZ291dFwiKSAvLyBjaGFuZ2UgdG9rZW4gaW4gY29va2llcyB0byB0aGUgYmV3IG9uZVxyXG4gICAgd2luZG93LnJlbG9hZCgpXHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KXtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgJiYgIW9yaWdpbmFsUmVxdWVzdC5fcmV0cnkpIHtcclxuICAgICAgb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSA9IHRydWU7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGF3YWl0IHJlZnJlc2hBY2Nlc3NUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZl90b2tlblwiKSk7IFxyXG4gICAgICBkZWxldGVSZWZyZWNoVG9rZW5PbGRPbmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZfdG9rZW5cIikpXHJcbiAgICAgIC8vIHNlbmQgdGhlIHJlZiB0b2tlbiBhbmQgZ2V0IG5ldyB0b2tlblxyXG4gICAgICBvcmlnaW5hbFJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgYWNjZXNzX3Rva2VuLmRhdGEudG9rZW47XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvc2V0VG9rZW5cIix7dG9rZW46YWNjZXNzX3Rva2VuLmRhdGEudG9rZW59KSAvLyBjaGFuZ2UgdG9rZW4gaW4gY29va2llcyB0byB0aGUgYmV3IG9uZVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZl90b2tlblwiLGFjY2Vzc190b2tlbi5kYXRhLnJlZl90b2tlbikgLy8gc2F2ZSB0aGUgbmV3IHJlZl90b2tlblxyXG4gICAgICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZShvcmlnaW5hbFJlcXVlc3QpOyAvLyByZXR1cm4gbmV3ICByZXF1ZXN0IHdpdGggdGhlIG5ldyB0b2tlblxyXG4gIH1cclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcbmV4cG9ydCAgZGVmYXVsdCBheGlvc0FwaUluc3RhbmNlOyIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2NzcydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW5pdExhbmd1YWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaW5pdExhbmd1YWdlL2luaXRMYW5ndWFnZSdcclxuaW1wb3J0IHsgR2V0VXNlckRhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJ1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC91c2VyQ29udGV4dCdcclxuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2xhbmd1YWdlQ29udGV4dCdcclxuaW1wb3J0IFNvY2tldENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zb2NrZXRDb250ZXh0J1xyXG5pbXBvcnQgQXBpSXNMb2FkaW5nQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FwaUlzTG9hZGluZ0NvbnRleHQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKHtpbWFnZTpcIlwiLHRlbDpcIlwiLGJpb2dyYXBoeTpcIlwiLHVzZXJOYW1lOlwiXCIsZmlyc3RuYW1lOlwiXCIsbGFzdG5hbWU6XCJcIixhZ2U6XCJcIixmb2xsb3dpbmc6MCxmb2xsb3dlcnM6MH0pXHJcbiAgY29uc3QgdXNlclByb3ZpZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyB1c2VyLCBzZXRVc2VyIH0sIFt1c2VyLCBzZXRVc2VyXSkpXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gUmVhY3QudXNlU3RhdGUoeyAuLi5pbml0TGFuZ3VhZ2UoXCJlbmdcIikgfSlcclxuICBjb25zdCBsYW5ndWFnZVByb3ZpZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgfSwgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0pKVxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgbG9hZGluZ1Byb3ZpZGVyID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9LCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddKSlcclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBzb2NrZXRQcm92aWRlciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHsgc29ja2V0LCBzZXRTb2NrZXR9LCBbc29ja2V0LCBzZXRTb2NrZXRdKSlcclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29uc3QgW29ubHlPbmNlLHNldG9ubHlPbmNlXT1SZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNvY2tldFJlZiA9IFJlYWN0LnVzZVJlZigpXHJcblxyXG4vKnNvY2tldCBpbyovXHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovIFxyXG4gIGlmKHJvdXRlci5xdWVyeS5yZWZyZWNoPT1cInRydWVcIiAmJiBvbmx5T25jZT09ZmFsc2Upe1xyXG4gICAgc2V0b25seU9uY2UodHJ1ZSlcclxuICAgIEdldFVzZXJEYXRhKHBhZ2VQcm9wcy50b2tlbikudGhlbihkYXRhID0+IHsgXHJcbiAgICAgIFxyXG4gICAgICBzZXRVc2VyKGUgPT4geyByZXR1cm4geyAuLi5lLCAuLi5kYXRhLmRhdGEuZGF0YVswXSx0b2tlbjogcGFnZVByb3BzLnRva2VuIH0gfSlcclxuXHJcbiAgICAgfSkuY2F0Y2goZSA9PiB7IH0pXHJcblxyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8qKioqKioqKioqKioqKioqKmluaXQgVG9rZW4gdG8gdXNlclByb3ZpZGVyKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2V0VXNlcihlID0+IHsgcmV0dXJuIHsgLi4uZSwgdG9rZW46IHBhZ2VQcm9wcy50b2tlbiB9IH0pXHJcbiAgICAvKmdldCBjdXJyZW50IGxhbmcgKi9cclxuICAgIHNldExhbmd1YWdlKGluaXRMYW5ndWFnZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSB8fCBcImVuZ1wiKSlcclxuXHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqZmV0Y2ggdXNlciBkYXRhIG9ubGluZSBpZiB0aGVyZSBpcyB0b2tlbioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIFxyXG4gICAgaWYgKHBhZ2VQcm9wcy50b2tlbikge1xyXG4gICAgICBHZXRVc2VyRGF0YShwYWdlUHJvcHMudG9rZW4pLnRoZW4oZGF0YSA9PiB7IFxyXG4gICAgICAgIHNvY2tldFJlZi5jdXJyZW50ID1pbyhcImh0dHA6Ly8xMjcuMC4wLjE6NTAxMFwiKTtcclxuICAgICAgICBzb2NrZXRSZWYuY3VycmVudC5vbihcImdldFNvY2tldGlkXCIsKGRhdGFGcm9tU29ja2V0KT0+e1xyXG4gICAgICAgIHNvY2tldFJlZi5jdXJyZW50LmVtaXQoXCJzYXZldXNlck9ubGluZVwiLHt1c2VyaWQ6ZGF0YS5kYXRhLmRhdGFbMF0uX2lkLHNvY2tldGlkOmRhdGFGcm9tU29ja2V0fSlcclxuICAgICAgICBzZXRTb2NrZXQoc29ja2V0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRVc2VyKGUgPT4geyBcclxuICAgICAgICByZXR1cm4geyAuLi5lLCAuLi5kYXRhLmRhdGEuZGF0YVswXSB9IFxyXG4gICAgICB9KSBcclxuICAgICAgfSkuY2F0Y2goZSA9PiB7IH0pXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5yZWZyZWNoXSlcclxuXHJcbiAgXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcFdyYXBwZXInPlxyXG4gICAgICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2xhbmd1YWdlUHJvdmlkZXJ9PlxyXG4gICAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyUHJvdmlkZXJ9ID5cclxuICAgICAgICAgICAgPEFwaUlzTG9hZGluZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2xvYWRpbmdQcm92aWRlcn0+XHJcbiAgICAgICAgICAgICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NvY2tldFByb3ZpZGVyfT5cclxuICAgICAgICAgICAgICB7aXNMb2FkaW5nJiY8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48TGluZWFyUHJvZ3Jlc3MgLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgIDwvU29ja2V0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BcGlJc0xvYWRpbmdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L0xhbmd1YWdlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgcmV0dXJuIGF3YWl0IHJlcS5jb29raWVzLnRva2VuID8geyBwcm9wczogeyB0b2tlbjogdHJ1ZSB9IH0gOiB7IHJlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiAnLycsIHBlcm1hbmVudDogZmFsc2UsIH0gfVxyXG59XHJcbiIsImltcG9ydCBheGlvc0FwaUluc3RhbmNlIGZyb20gJy4uL2ludGVyY2VwdG9yL2ludGVyY2VwdG9yJ1xyXG4vLyBzZW5kIHJlZiB0b2tlbiBhbmQgZ2V0IG5ldyB0b2tlblxyXG5jb25zdCByZWZyZXNoQWNjZXNzVG9rZW49YXN5bmMgKHRva2VuKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3Rva2VuL2dldFJlZnJlc2hBY2Nlc3NUb2tlblwiLHtyZWZfdG9rZW46dG9rZW59KVxyXG59XHJcbmNvbnN0IGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZT1hc3luYyAoUmVmcmVzaEFjY2Vzc1Rva2VuKT0+e1xyXG4gICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3Rva2VuL2RlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZVwiLHtSZWZyZXNoQWNjZXNzVG9rZW46UmVmcmVzaEFjY2Vzc1Rva2VufSlcclxufVxyXG5leHBvcnQgeyByZWZyZXNoQWNjZXNzVG9rZW4gLGRlbGV0ZVJlZnJlY2hUb2tlbk9sZE9uZX0iLCJpbXBvcnQgYXhpb3NBcGlJbnN0YW5jZSBmcm9tICcuLi9pbnRlcmNlcHRvci9pbnRlcmNlcHRvcidcclxuY29uc3QgTG9naW4gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoJy91c2VyL2xvZ2luJyx7Li4uZGF0YX0pXHJcbn1cclxuY29uc3QgTG9naW5GYWNlYm9vayA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdCgnL3VzZXIvbG9naW5mYWNlYm9vaycsey4uLmRhdGF9KVxyXG59XHJcbmNvbnN0IFJlZ2lzdGVyID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KCcvdXNlci9yZWdpc3Rlcicsey4uLmRhdGF9KVxyXG59XHJcbmNvbnN0IEdldFVzZXJEYXRhID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UuZ2V0KCcvdXNlci9HZXRVc2VyRGF0YScseyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pXHJcbn1cclxuY29uc3QgQ2hhbmdlUHJvZmlsZUltYWdlID0gYXN5bmMgKGZpbGUsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2NoYW5nZXByb2ZpbGVpbWFnZVwiLGZpbGUseyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pXHJcbn1cclxuY29uc3QgR2V0T3RoZXJVc2Vyc0RhdGE9YXN5bmMgKGlkLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9nZXRvdGhlclVzZXJzRGF0YS9cIitpZCx7fSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgYWN0aXZlQWNjb3VudD1hc3luYyAodXNlcmlkLHZlcmlmaWNhdGlvbkNvZGUpPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2FjdGl2ZUFjY291bnRcIix7dXNlcmlkLHZlcmlmaWNhdGlvbkNvZGV9KTtcclxufVxyXG5jb25zdCByZVNlbmRWZXJpZmljYXRpb25Db2RlPWFzeW5jICh1c2VyaWQsdmVyaWZpY2F0aW9uQ29kZSk9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvcmVTZW5kVmVyaWZpY2F0aW9uQ29kZVwiLHt1c2VyaWQsdmVyaWZpY2F0aW9uQ29kZX0pO1xyXG59XHJcbmNvbnN0IHJlbW92ZVRva2VuPWFzeW5jICh1c2VyaWQpPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3JlbW92ZVRva2VuXCIse3VzZXJpZH0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZVByb2ZpbGVJbmZvPWFzeW5jIChuZXdVc2VyRGF0YSx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvdXBkYXRlUHJvZmlsZUluZm9cIix7Li4ubmV3VXNlckRhdGF9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCBjaGFuZ2VQYXNzd29yZD1hc3luYyAocGFzc3dvcmRDaGFuZ2UsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL2NoYW5nZVBhc3N3b3JkXCIsey4uLnBhc3N3b3JkQ2hhbmdlfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3Qgc2VhcmNoQWNjb3VudFRvRm9yZ2V0UGFzc3dvcmQ9YXN5bmMgKGlkZW50aXR5KT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9zZWFyY2hBY2NvdW50VG9Gb3JnZXRQYXNzd29yZFwiLHsuLi5pZGVudGl0eX0pO1xyXG59XHJcbmNvbnN0IHJlc2V0UGFzc3dvcmRBcGk9YXN5bmMgKGRhdGFSZXNldFBhc3N3b3JkKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9yZXNldFBhc3N3b3JkXCIsey4uLmRhdGFSZXNldFBhc3N3b3JkfSk7XHJcbn1cclxuY29uc3QgU2V0TmV3UGFzc3dvcmRBcGk9YXN5bmMgKG5ld1Bhc3N3b3JkQW5kVG9rZW5BbmRUZWxPckVtYWlsKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9TZXROZXdQYXNzd29yZFwiLHsuLi5uZXdQYXNzd29yZEFuZFRva2VuQW5kVGVsT3JFbWFpbH0pO1xyXG59XHJcbmNvbnN0IHVwZGF0ZUVtYWlsU2VuZENvZGU9YXN5bmMgKGVtYWlsLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci91cGRhdGVFbWFpbFNlbmRDb2RlXCIse2VtYWlsOmVtYWlsfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuY29uc3QgdXBkYXRlRW1haWxBcGk9YXN5bmMoZW1haWwsY29kZSx0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvdXBkYXRlRW1haWxcIix7ZW1haWw6ZW1haWwsY29kZTpjb2RlfSx7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9fSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldHJhbmRvbVVzZXJzQXBpPWFzeW5jKHRva2VuLHJhbmRvbXVzZXJzKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9nZXRyYW5kb21Vc2Vyc1wiLHsuLi5yYW5kb211c2Vyc30seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmNvbnN0IHNlYXJjaFVzZXJOYW1lQXBpPWFzeW5jKHNlYXJjaFVzZXJOYW1lLHRva2VuKT0+e1xyXG4gIHJldHVybiBheGlvc0FwaUluc3RhbmNlLnBvc3QoXCIvdXNlci9TZWFyY2hVc2VyQnlVc2VyTmFtZVwiLHtzZWFyY2hVc2VyTmFtZTpzZWFyY2hVc2VyTmFtZX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0UHJpdmFjeT1hc3luYyh0b2tlbik9PntcclxuICByZXR1cm4gYXhpb3NBcGlJbnN0YW5jZS5wb3N0KFwiL3VzZXIvZ2V0UHJpdmFjeVwiLHt9LHsgaGVhZGVyczoge0F1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH19KTtcclxufVxyXG5jb25zdCB1cGRhdGVQcml2YWN5PWFzeW5jKGRhdGEsdG9rZW4pPT57XHJcbiAgcmV0dXJuIGF4aW9zQXBpSW5zdGFuY2UucG9zdChcIi91c2VyL3VwZGF0ZVByaXZhY3lcIix7Li4uZGF0YX0seyBoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfX0pO1xyXG59XHJcbmV4cG9ydCB7dXBkYXRlUHJpdmFjeSxnZXRQcml2YWN5LHNlYXJjaFVzZXJOYW1lQXBpLGdldHJhbmRvbVVzZXJzQXBpLHVwZGF0ZUVtYWlsQXBpLHVwZGF0ZUVtYWlsU2VuZENvZGUsU2V0TmV3UGFzc3dvcmRBcGkscmVzZXRQYXNzd29yZEFwaSxzZWFyY2hBY2NvdW50VG9Gb3JnZXRQYXNzd29yZCxjaGFuZ2VQYXNzd29yZCAsdXBkYXRlUHJvZmlsZUluZm8sTG9naW4gLHJlbW92ZVRva2VuLCBSZWdpc3RlcixMb2dpbkZhY2Vib29rLEdldFVzZXJEYXRhLENoYW5nZVByb2ZpbGVJbWFnZSxHZXRPdGhlclVzZXJzRGF0YSxyZVNlbmRWZXJpZmljYXRpb25Db2RlLGFjdGl2ZUFjY291bnR9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=