(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-module-main-module"],{

/***/ "PcwZ":
/*!**************************************************!*\
  !*** ./src/app/pages/main-module/main.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Z/iu":
/*!**************************************************!*\
  !*** ./src/app/pages/main-module/main.module.ts ***!
  \**************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "luqR");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "e3/4");







let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "e3/4":
/*!************************************************!*\
  !*** ./src/app/pages/main-module/main.page.ts ***!
  \************************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.page.html */ "qew0");
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page.scss */ "PcwZ");
/* harmony import */ var src_app_services_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/core */ "Xavl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let MainPage = class MainPage {
    constructor(core) {
        this.core = core;
        this.addProduct = () => this.core.data.addItem();
    }
};
MainPage.ctorParameters = () => [
    { type: src_app_services_core__WEBPACK_IMPORTED_MODULE_3__["CoreProvider"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainPage);



/***/ }),

/***/ "luqR":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-module/main-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "e3/4");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"],
        children: [
            { path: 'home', loadChildren: () => Promise.all(/*! import() | tabs-home-home-module */[__webpack_require__.e("default~pages-login-login-module~pages-register-register-module~tabs-home-home-module~tabs-product-d~1d49c10a"), __webpack_require__.e("default~tabs-home-home-module~tabs-product-detail-product-detail-module~tabs-profile-profile-module"), __webpack_require__.e("tabs-home-home-module")]).then(__webpack_require__.bind(null, /*! ./tabs/home/home.module */ "aZiL")).then(m => m.HomePageModule) },
            { path: 'detail/:id', loadChildren: () => Promise.all(/*! import() | tabs-product-detail-product-detail-module */[__webpack_require__.e("default~pages-login-login-module~pages-register-register-module~tabs-home-home-module~tabs-product-d~1d49c10a"), __webpack_require__.e("default~tabs-home-home-module~tabs-product-detail-product-detail-module~tabs-profile-profile-module"), __webpack_require__.e("tabs-product-detail-product-detail-module")]).then(__webpack_require__.bind(null, /*! ./tabs/product-detail/product-detail.module */ "xQCU")).then(m => m.ProductDetailPageModule) },
            { path: 'profile', loadChildren: () => Promise.all(/*! import() | tabs-profile-profile-module */[__webpack_require__.e("default~tabs-home-home-module~tabs-product-detail-product-detail-module~tabs-profile-profile-module"), __webpack_require__.e("tabs-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./tabs/profile/profile.module */ "/wzQ")).then(m => m.ProfilePageModule) },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ],
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "qew0":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-module/main.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"addProduct()\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>New</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=pages-main-module-main-module.js.map