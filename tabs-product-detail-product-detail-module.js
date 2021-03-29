(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-product-detail-product-detail-module"],{

/***/ "3cM1":
/*!********************************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/product-detail/product-detail.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Bbz6":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-module/tabs/product-detail/product-detail.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Product detail\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"editMode\" (click)=\"cancelEdit()\">CANCEL</ion-button>\n      <ion-button *ngIf=\"editMode\" (click)=\"saveEdit()\">SAVE</ion-button>\n      <ion-button *ngIf=\"!editMode\" (click)=\"edit()\">EDIT</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"product===null\">\n    <ion-spinner></ion-spinner>\n    Loading...\n  </div>\n\n  <div *ngIf=\"product==false\">\n    Product not found\n    <ion-button [routerLink]=\"'/home'\">Go back</ion-button>\n  </div>\n\n  <ion-slides pager=\"true\" [options]=\"{speed:400}\" *ngIf=\"product\">\n    <!-- diferentes productos (vertical) -->\n    <ng-container *ngFor=\"let slide of product\">\n      <ion-slide *ngIf=\"slide._proto!='META'\">\n        <!-- cards horizontales -->\n        <ion-card style=\"width: 100%;\">\n          <ion-item ion-card-title>\n            <h1>{{slide.title}}</h1>\n            <ion-button *ngIf=\"editMode\" slot=\"end\" color=\"danger\" (click)=\"core.deleteMe(product, data.Products)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-item>\n\n          <app-image *ngIf=\"slide._proto=='ICON'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-image>\n          <app-tree *ngIf=\"slide._proto=='TREE'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-tree>\n          <app-keyval *ngIf=\"slide._proto=='KEYVAL'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-keyval>\n          <app-comments *ngIf=\"slide._proto=='COMMENTS'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-comments>\n          <app-text *ngIf=\"slide._proto=='JSON'\" [editMode]=\"editMode\" [(data)]=\"slide.val\"></app-text>\n        </ion-card>\n      </ion-slide>\n    </ng-container>\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "DPyq":
/*!******************************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/product-detail/product-detail.page.ts ***!
  \******************************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-detail.page.html */ "Bbz6");
/* harmony import */ var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.page.scss */ "3cM1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/core */ "Xavl");






let ProductDetailPage = class ProductDetailPage {
    constructor(core, activatedRoute) {
        this.core = core;
        this.defaultHref = "/home";
        this.idProduct = null;
        this.edit = () => this.core.data.edit();
        this.saveEdit = () => this.core.data.saveEdit();
        this.cancelEdit = () => this.core.data.cancelEdit();
        const id = activatedRoute.snapshot.params.id;
        if (!id) {
            this.core.navCtrl.navigateBack(this.defaultHref);
        }
        else {
            this.idProduct = id;
        }
    }
    get product() {
        if (!this.idProduct == null)
            return null;
        let res = false;
        this.data.Products.forEach(itm => {
            if (itm[0].val.id == this.idProduct)
                res = itm;
        });
        return res;
    }
    get data() {
        return this.core.data.data;
    }
    get editMode() {
        return this.core.data.editMode;
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: src_app_services_core__WEBPACK_IMPORTED_MODULE_5__["CoreProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductDetailPage);



/***/ }),

/***/ "a3AB":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/product-detail/product-detail-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function() { return ProductDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "DPyq");




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"],
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ "xQCU":
/*!********************************************************************************!*\
  !*** ./src/app/pages/main-module/tabs/product-detail/product-detail.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail.page */ "DPyq");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail-routing.module */ "a3AB");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "T/Ra");









let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPageRoutingModule"]
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPage"]]
    })
], ProductDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=tabs-product-detail-product-detail-module.js.map