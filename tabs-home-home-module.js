(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-home-home-module"],{

/***/ "4q+p":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-module/tabs/home/home.page.ts ***!
  \**********************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "E3uH");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "WQ0x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/core */ "Xavl");





let HomePage = class HomePage {
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
HomePage.ctorParameters = () => [
    { type: src_app_services_core__WEBPACK_IMPORTED_MODULE_4__["CoreProvider"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "E3uH":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-module/tabs/home/home.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"editMode\" (click)=\"cancelEdit()\">CANCEL</ion-button>\n      <ion-button *ngIf=\"editMode\" (click)=\"saveEdit()\">SAVE</ion-button>\n      <ion-button *ngIf=\"!editMode\" (click)=\"edit()\">EDIT</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-slides pager=\"true\" [options]=\"{speed:400}\" *ngFor=\"let product of data.Products\">\n    <!-- diferentes productos (vertical) -->\n    <ng-container *ngFor=\"let slide of product\">\n      <ion-slide *ngIf=\"slide._proto=='ICON'\" [routerLink]=\"['/detail', product[0].val.id]\">\n        <!-- cards horizontales -->\n        <ion-card style=\"width: 100%;\">\n          <ion-item ion-card-title>\n            <h1>{{slide.title}}</h1>\n            <!-- <ion-button *ngIf=\"editMode\" slot=\"end\" color=\"danger\" (click)=\"core.deleteMe(product, data.Products)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button> -->\n          </ion-item>\n\n          <app-image *ngIf=\"slide._proto=='ICON'\" [editMode]=\"false\" [(data)]=\"slide.val\"></app-image>\n          <app-tree *ngIf=\"slide._proto=='TREE'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-tree>\n          <app-keyval *ngIf=\"slide._proto=='KEYVAL'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-keyval>\n          <app-comments *ngIf=\"slide._proto=='COMMENTS'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-comments>\n          <app-text *ngIf=\"slide._proto=='JSON'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-text>\n        </ion-card>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "WQ0x":
/*!************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/home/home.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "aZiL":
/*!************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/home/home.module.ts ***!
  \************************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "4q+p");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "rVaU");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "T/Ra");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "rVaU":
/*!********************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/home/home-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "4q+p");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-home-home-module.js.map