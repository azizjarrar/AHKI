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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0zb8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("H/sG");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("guYw");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LzO8");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0zb8");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Q25a");
/* harmony import */ var _context_languageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("z+U2");
/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("W+wH");
/* harmony import */ var _context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("BIE6");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("pI2v");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_11__);




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

  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_objectSpread({}, Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])("eng")));
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
    Object(_services_user__WEBPACK_IMPORTED_MODULE_4__[/* GetUserData */ "c"])(pageProps.token).then(data => {
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

    setLanguage(Object(_components_initLanguage_initLanguage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(localStorage.getItem('language') || "eng"));
    /***********************************************************/

    /********************fetch user data online if there is token************************/

    /***********************************************************/

    if (pageProps.token) {
      Object(_services_user__WEBPACK_IMPORTED_MODULE_4__[/* GetUserData */ "c"])(pageProps.token).then(data => {
        socketRef.current = socket_io_client__WEBPACK_IMPORTED_MODULE_11___default()("http://46.101.169.142:5010");
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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "appWrapper",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_context_languageContext__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Provider, {
        value: languageProvider,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_context_userContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
          value: userProvider,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_context_apiIsLoadingContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Provider, {
            value: loadingProvider,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_context_socketContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Provider, {
              value: socketProvider,
              children: [isLoading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "loading",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5___default.a, {})
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))]
            })
          })
        })
      })
    })
  });
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "BIE6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const apiIsLoadingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("eng");
/* harmony default export */ __webpack_exports__["a"] = (apiIsLoadingContext);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H/sG":
/***/ (function(module, exports) {



/***/ }),

/***/ "KWog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/refreshAccessToken.js
 // send ref token and get new token

const refreshAccessToken = async token => {
  return interceptor.post("/token/getRefreshAccessToken", {
    ref_token: token
  });
};

const deleteRefrechTokenOldOne = async RefreshAccessToken => {
  return interceptor.post("/token/deleteRefrechTokenOldOne", {
    RefreshAccessToken: RefreshAccessToken
  });
};


// CONCATENATED MODULE: ./interceptor/interceptor.js


const axiosApiInstance = external_axios_default.a.create({
  //baseURL: 'http://127.0.0.1:5010/',
  baseURL: 'http://46.101.169.142:5010/',
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
    await external_axios_default.a.post("api/logout"); // change token in cookies to the bew one

    window.reload();
    return;
  }

  if (error.response.status === 404) {
    return;
  }

  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await refreshAccessToken(localStorage.getItem("ref_token"));
    deleteRefrechTokenOldOne(localStorage.getItem("ref_token")); // send the ref token and get new token

    originalRequest.headers.Authorization = 'Bearer ' + access_token.data.token;
    await external_axios_default.a.post("api/setToken", {
      token: access_token.data.token
    }); // change token in cookies to the bew one

    localStorage.setItem("ref_token", access_token.data.ref_token); // save the new ref_token

    return axiosApiInstance(originalRequest); // return new  request with the new token
  }

  return Promise.reject(error);
});
/* harmony default export */ var interceptor = __webpack_exports__["a"] = (axiosApiInstance);

/***/ }),

/***/ "LzO8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return updatePrivacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getPrivacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return searchUserNameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getrandomUsersApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return updateEmailApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return updateEmailSendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SetNewPasswordApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return resetPasswordApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return searchAccountToForgetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return updateProfileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return removeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoginFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetOtherUsersData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return reSendVerificationCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return activeAccount; });
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KWog");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Login = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/user/login', _objectSpread({}, data));
};

const LoginFacebook = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/user/loginfacebook', _objectSpread({}, data));
};

const Register = async data => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/user/register', _objectSpread({}, data));
};

const GetUserData = async token => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/user/GetUserData', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const ChangeProfileImage = async (file, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/changeprofileimage", file, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const GetOtherUsersData = async (id, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/getotherUsersData/" + id, {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const activeAccount = async (userid, verificationCode) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/activeAccount", {
    userid,
    verificationCode
  });
};

const reSendVerificationCode = async (userid, verificationCode) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/reSendVerificationCode", {
    userid,
    verificationCode
  });
};

const removeToken = async userid => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/removeToken", {
    userid
  });
};

const updateProfileInfo = async (newUserData, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updateProfileInfo", _objectSpread({}, newUserData), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const changePassword = async (passwordChange, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/changePassword", _objectSpread({}, passwordChange), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const searchAccountToForgetPassword = async identity => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/searchAccountToForgetPassword", _objectSpread({}, identity));
};

const resetPasswordApi = async dataResetPassword => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/resetPassword", _objectSpread({}, dataResetPassword));
};

const SetNewPasswordApi = async newPasswordAndTokenAndTelOrEmail => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/SetNewPassword", _objectSpread({}, newPasswordAndTokenAndTelOrEmail));
};

const updateEmailSendCode = async (email, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updateEmailSendCode", {
    email: email
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const updateEmailApi = async (email, code, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updateEmail", {
    email: email,
    code: code
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getrandomUsersApi = async (token, randomusers) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/getrandomUsers", _objectSpread({}, randomusers), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const searchUserNameApi = async (searchUserName, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/SearchUserByUserName", {
    searchUserName: searchUserName
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getPrivacy = async token => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/getPrivacy", {}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const updatePrivacy = async (data, token) => {
  return _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/updatePrivacy", _objectSpread({}, data), {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};



/***/ }),

/***/ "Q25a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["a"] = (UserContext);

/***/ }),

/***/ "W+wH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const socket = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["a"] = (socket);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "guYw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (initLanguage);

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "z+U2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LanguageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("eng");
/* harmony default export */ __webpack_exports__["a"] = (LanguageContext);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });