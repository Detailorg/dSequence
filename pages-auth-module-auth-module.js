(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-module-auth-module"],{

/***/ "UkHx":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth-module/auth-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("default~pages-login-login-module~pages-register-register-module~tabs-home-home-module~tabs-new-item-~774c0738"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "T7fL")).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | pages-register-register-module */[__webpack_require__.e("default~pages-login-login-module~pages-register-register-module~tabs-home-home-module~tabs-new-item-~774c0738"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "pNIe")).then(m => m.RegisterPageModule)
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "uW9U":
/*!**************************************************!*\
  !*** ./src/app/pages/auth-module/auth.module.ts ***!
  \**************************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "UkHx");



let AuthPageModule = class AuthPageModule {
};
AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthPageRoutingModule"]
        ]
    })
], AuthPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-auth-module-auth-module.js.map