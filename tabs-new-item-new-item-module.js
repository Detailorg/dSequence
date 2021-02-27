(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-new-item-new-item-module"],{

/***/ "6HWY":
/*!******************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/new-item/new-item.page.ts ***!
  \******************************************************************/
/*! exports provided: NewItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPage", function() { return NewItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_item_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-item.page.html */ "Q2VQ");
/* harmony import */ var _new_item_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-item.page.scss */ "bQex");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NewItemPage = class NewItemPage {
    constructor() { }
};
NewItemPage.ctorParameters = () => [];
NewItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-item',
        template: _raw_loader_new_item_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_item_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewItemPage);



/***/ }),

/***/ "Q2VQ":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-module/tabs/new-item/new-item.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 2\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 2</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-construction></app-construction>\n</ion-content>");

/***/ }),

/***/ "XqA8":
/*!****************************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/new-item/new-item-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: NewItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageRoutingModule", function() { return NewItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-item.page */ "6HWY");




const routes = [
    {
        path: '',
        component: _new_item_page__WEBPACK_IMPORTED_MODULE_3__["NewItemPage"],
    }
];
let NewItemPageRoutingModule = class NewItemPageRoutingModule {
};
NewItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NewItemPageRoutingModule);



/***/ }),

/***/ "Y8IS":
/*!********************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/new-item/new-item.module.ts ***!
  \********************************************************************/
/*! exports provided: NewItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageModule", function() { return NewItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-item.page */ "6HWY");
/* harmony import */ var _new_item_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item-routing.module */ "XqA8");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let NewItemPageModule = class NewItemPageModule {
};
NewItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _new_item_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewItemPageRoutingModule"]
        ],
        declarations: [_new_item_page__WEBPACK_IMPORTED_MODULE_5__["NewItemPage"]]
    })
], NewItemPageModule);



/***/ }),

/***/ "bQex":
/*!********************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/new-item/new-item.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctaXRlbS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=tabs-new-item-new-item-module.js.map