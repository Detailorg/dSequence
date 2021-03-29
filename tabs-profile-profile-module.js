(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-profile-profile-module"],{

/***/ "/wzQ":
/*!******************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/profile/profile.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "a1bg");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-routing.module */ "DANH");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "T/Ra");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"] }]),
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfilePageRoutingModule"],
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "DANH":
/*!**************************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/profile/profile-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "a1bg");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "K2w8":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-module/tabs/profile/profile.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Profile\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"editMode\" (click)=\"cancelEdit()\">CANCEL</ion-button>\n      <ion-button *ngIf=\"editMode\" (click)=\"saveEdit()\">SAVE</ion-button>\n      <ion-button *ngIf=\"!editMode\" (click)=\"edit()\">EDIT</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-tree [editMode]=\"editMode\" [(data)]=\"data.Profile.val\"></app-tree>\n\n</ion-content>");

/***/ }),

/***/ "a1bg":
/*!****************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/profile/profile.page.ts ***!
  \****************************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "K2w8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "rxPQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/core */ "Xavl");





let ProfilePage = class ProfilePage {
    constructor(core) {
        this.core = core;
        this.edit = () => this.core.data.edit();
        this.saveEdit = () => this.core.data.saveEdit();
        this.cancelEdit = () => this.core.data.cancelEdit();
    }
    get data() {
        return this.core.data.data;
    }
    get editMode() {
        return this.core.data.editMode;
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_core__WEBPACK_IMPORTED_MODULE_4__["CoreProvider"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "rxPQ":
/*!******************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/profile/profile.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=tabs-profile-profile-module.js.map