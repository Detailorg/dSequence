(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "2Q8t":
/*!***************************************************************!*\
  !*** ./src/app/pages/auth-module/pages/login/login.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n.logo ion-icon {\n  font-size: 150px;\n}\nion-list {\n  padding-bottom: 0;\n}\n.reset {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFHQTtFQUNJLGlCQUFBO0FBQUo7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGVzIGZvciBhbGwgb2YgdGhlIHVzZXIgcGFnZXM6XG4vLyBMb2dpbiwgU2lnbnVwLCBTdXBwb3J0XG4ubG9nbyB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgfVxufVxuaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLnJlc2V0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuZm9ybSB7XG4gICAgLml0ZW0tYmxvY2suaXRlbS1pbnB1dCAuaXRlbS1pbm5lciB7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "T7fL":
/*!***************************************************************!*\
  !*** ./src/app/pages/auth-module/pages/login/login.module.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "oFlr");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "chqf");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "chqf":
/*!***********************************************************************!*\
  !*** ./src/app/pages/auth-module/pages/login/login-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "oFlr");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "ekm/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth-module/pages/login/login.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"logo\">\n    <ion-icon name=\"person-outline\"></ion-icon>\n  </div>\n\n  <form #loginForm=\"ngForm\" (submit)=\"onLogin(loginForm)\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">User</ion-label>\n        <ion-input [(ngModel)]=\"login.email\" (keyup.enter)=\"onLogin(loginForm)\" name=\"username\" type=\"text\"\n          #username=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text>\n        <p [hidden]=\"username.valid || submitted == false\" color=\"danger\" padding-left>\n          The user is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Passowrd</ion-label>\n        <ion-input [(ngModel)]=\"login.password\" (keyup.enter)=\"onLogin(loginForm)\" name=\"password\" type=\"password\"\n          #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text>\n        <p [hidden]=\"password.valid || submitted == false\" color=\"danger\" padding-left>\n          The password is required\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"full\">\n        <ion-label>Save user and password</ion-label>\n        <ion-checkbox slot=\"start\" color=\"dark\" [(ngModel)]=\"login.saveoptions\" name=\"saveoptions\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">Log In</ion-button>\n      </ion-col>\n      <!-- <ion-col *ngIf=\"asmodal\">\n\t\t\t\t<ion-button (click)=\"logout()\" color=\"light\" expand=\"block\">Log Out</ion-button>\n\t\t\t</ion-col> -->\n    </ion-row>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "oFlr":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth-module/pages/login/login.page.ts ***!
  \*************************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "ekm/");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "2Q8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/core */ "Xavl");





let LoginPage = class LoginPage {
    constructor(core) {
        this.core = core;
        this.login = { email: '', password: '', saveoptions: false, autologin: false };
        this.submitted = false;
        this.working = false;
        const loginuser = localStorage.getItem('loginuser');
        if (loginuser) {
            this.login = JSON.parse(loginuser);
            if (this.login.autologin)
                setTimeout(() => this.onLogin(this.loginForm), 1000);
        }
    }
    onLogin(form) {
        this.submitted = true;
        if (form.valid && !this.working) {
            this.working = true;
            localStorage.setItem('loginuser', JSON.stringify((this.login.saveoptions) ? this.login : { User: '', Password: '', saveoptions: false, autologin: false }));
            this.core.auth.login({ email: this.login.email, password: this.login.password }, () => {
                this.core.navCtrl.navigateRoot('/');
                this.working = false;
            }, err => {
                this.working = false;
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_core__WEBPACK_IMPORTED_MODULE_4__["CoreProvider"] }
];
LoginPage.propDecorators = {
    loginForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['loginForm', { static: false },] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map