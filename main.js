(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/arsasm/Documents/Code/Detailorg/dsequence/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "RWVG":
/*!******************************************!*\
  !*** ./src/app/services/data-service.ts ***!
  \******************************************/
/*! exports provided: DataServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceProvider", function() { return DataServiceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DataServiceProvider = class DataServiceProvider {
    constructor() {
        this.core = null;
        this.editMode = false;
        this.editSnapshot = "";
        this.onSaveCreate = true;
        this.data = {
            Products: [],
            Profile: {
                _proto: "TREE",
                title: "Profile",
                val: [
                    { key: 'Hoy', collapsed: true, childs: [] },
                    { key: 'Ultima semana', collapsed: true, childs: [
                            { key: '16/01/21 venta a tienda', collapsed: true, childs: [] },
                            { key: '15/01/21 transporte', collapsed: true, childs: [] },
                            { key: '15/01/21 venta desde almazara', collapsed: true, childs: [] }
                        ] },
                    { key: 'Próximo mes', collapsed: true, childs: [] },
                    { key: 'Próximo año', collapsed: true, childs: [] },
                    { key: 'Posterior', collapsed: true, childs: [] }
                ]
            }
        };
    }
    initCore(core) {
        this.core = core;
        this.core.auth.onUser.subscribe(_ => this.fetchData(), _ => { }); // subscribe to fetch data when user changes
        if (this.core.auth.user)
            this.fetchData(); // fetch data if we already have user on loading
    }
    fetchData() {
        const noData = () => {
            this.addItem();
            this.onSaveCreate = true;
        };
        this.core.http.get(this.core.relayEndpoint + 'records/key/' + this.core.auth.user.id, { headers: {
                Authorization: 'Bearer ' + this.core.auth.token,
                'x-browser-id': this.core.browserId
            } }).subscribe((rec) => {
            this.core.http.get(this.core.relayEndpoint + 'ipfs/get/' + rec.value, { headers: {
                    Authorization: 'Bearer ' + this.core.auth.token,
                    'x-browser-id': this.core.browserId
                } }).subscribe(res => {
                if (res) {
                    this.data = res;
                    this.onSaveCreate = false;
                }
                else
                    noData();
            }, err => {
                noData();
                // TODO: Check if auth error
            });
        }, err => {
            noData();
            // TODO: Check if auth error
        });
        // let data: any = localStorage.getItem('home_data');
        // if (data) this.data = JSON.parse(data);
        // else this.addItem();
    }
    save() {
        const file = new File([new Uint8Array([0xEF, 0xBB, 0xBF]), JSON.stringify(this.data)], this.core.auth.user.id + ".json", { type: "application/json" });
        const formData = new FormData();
        formData.append("file", file);
        this.core.http.post(this.core.relayEndpoint + "ipfs/pin", formData, { headers: {
                Authorization: 'Bearer ' + this.core.auth.token,
                'x-browser-id': this.core.browserId
            } }).subscribe((res) => {
            if (this.onSaveCreate) {
                this.core.http.post(this.core.relayEndpoint + "records", {
                    key: this.core.auth.user.id,
                    value: res.cid,
                    timestamp: Date.now()
                }, { headers: {
                        Authorization: 'Bearer ' + this.core.auth.token,
                        'x-browser-id': this.core.browserId
                    } }).subscribe(res => {
                    this.core.successToast();
                    this.onSaveCreate = false;
                }, _ => this.core.errorToast());
            }
            else {
                this.core.http.put(this.core.relayEndpoint + "records", {
                    key: this.core.auth.user.id,
                    value: res.cid,
                    timestamp: Date.now()
                }, { headers: {
                        Authorization: 'Bearer ' + this.core.auth.token,
                        'x-browser-id': this.core.browserId
                    } }).subscribe(res => {
                    this.core.successToast();
                }, _ => this.core.errorToast());
            }
        }, _ => this.core.errorToast());
    }
    addItem() {
        this.edit();
        const itm = [
            {
                _proto: "META",
                title: "Product MetaData",
                val: { id: Date.now() }
            },
            {
                _proto: "ICON",
                title: "Publicidad producto",
                val: {
                    title: 'El Henazar',
                    desc: 'Aceite de oliva virgen extra',
                    aux: 'Coupage natural',
                    img: "ipfs://QmWTUGBSayVuBvgfkDMKLeSTh19KTpFQedvqd4hU5pN2r9",
                    media: []
                }
            },
            {
                _proto: "TREE",
                title: "Contabilización de recursos",
                val: [
                    { key: '1,5 €', collapsed: true, childs: [
                            { key: 'Herramientas usadas', collapsed: true, childs: [] },
                            { key: 'Implicados', collapsed: true, childs: [
                                    { key: 'Manolo', collapsed: true, childs: [] },
                                    { key: 'Pepe', collapsed: true, childs: [] }
                                ] },
                            { key: 'Acciones', collapsed: true, childs: [] }
                        ] }
                ]
            },
            {
                _proto: "KEYVAL",
                title: "Criterios de calidad",
                val: [
                    { key: "Económico", val: "< 10€ " },
                    { key: "Huella carbono", val: "Sin Transgénicos" },
                    { key: "Tamaño de empresa", val: "pyme o menor" },
                    { key: "Distancia", val: "<100 km" },
                    { key: "Fabricación", val: "Hecho a mano" },
                    { key: "Fecha de Creación", val: "< 1 año" },
                    { key: "Economía circular", val: "-" },
                    { key: "Puntuación", val: "5 estrellas" },
                    { key: "Hecho por", val: "-" },
                ]
            },
            {
                _proto: "COMMENTS",
                title: "Comentarios",
                val: [
                    {
                        key: "Consumidores", collapsed: true, val: [
                            { name: "James", msg: "Long long desc", img: "ipfs://QmWTUGBSayVuBvgfkDMKLeSTh19KTpFQedvqd4hU5pN2r9" },
                            { name: "James", msg: "Long long desc", img: "ipfs://QmWTUGBSayVuBvgfkDMKLeSTh19KTpFQedvqd4hU5pN2r9" }
                        ]
                    },
                    {
                        key: "Expertos", collapsed: true, val: [
                            { name: "James", msg: "Long long desc", img: "ipfs://QmWTUGBSayVuBvgfkDMKLeSTh19KTpFQedvqd4hU5pN2r9" }
                        ]
                    },
                    { key: "Contactos conocidos", collapsed: true, val: [] },
                ]
            },
            {
                _proto: "KEYVAL",
                title: "Optimización",
                val: []
            },
            {
                _proto: "JSON",
                title: "JSON Verificable",
                val: { data: '{"json":"yass"}' }
            },
            {
                _proto: "TREE",
                title: "Histórico",
                val: [
                    { key: 'Hoy', collapsed: true, childs: [] },
                    { key: 'Ultima semana', collapsed: true, childs: [
                            { key: '16/01/21 venta a tienda', collapsed: true, childs: [] },
                            { key: '15/01/21 transporte', collapsed: true, childs: [] },
                            { key: '15/01/21 venta desde almazara', collapsed: true, childs: [] }
                        ] },
                    { key: 'Próximo mes', collapsed: true, childs: [] },
                    { key: 'Próximo año', collapsed: true, childs: [] },
                    { key: 'Posterior', collapsed: true, childs: [] }
                ]
            },
            {
                _proto: "TREE",
                title: "Pasado",
                val: [
                    { key: 'Mañana', collapsed: true, childs: [] },
                    { key: 'Próxima semana', collapsed: false, childs: [
                            { key: '16/01/21 venta a tienda', collapsed: true, childs: [] },
                            { key: '15/01/21 transporte', collapsed: true, childs: [] },
                            { key: '15/01/21 venta desde almazara', collapsed: true, childs: [] }
                        ] },
                    { key: 'Próximo mes', collapsed: true, childs: [] },
                    { key: 'Próximo año', collapsed: true, childs: [] },
                    { key: 'Posterior', collapsed: true, childs: [] }
                ]
            },
            {
                _proto: "TREE",
                title: "Evaluación",
                val: [
                    { key: 'Ranking público', collapsed: false, childs: [{ key: '5 estrellas', collapsed: true, childs: [] },] },
                    { key: 'Ranking personal', collapsed: false, childs: [{ key: '5 estrellas', collapsed: true, childs: [] },] },
                    { key: 'Ranking registro', collapsed: false, childs: [{ key: '5 estrellas', collapsed: true, childs: [] },] }
                ]
            },
            {
                _proto: "TREE",
                title: "Pasado",
                val: [
                    { key: '0º Qué es este producto', collapsed: true, childs: [] },
                    { key: '1º Cómo se contabiliza', collapsed: true, childs: [] },
                    { key: '2º Cuáles son sus criterios', collapsed: true, childs: [] },
                    { key: '3º Quiénes han participado', collapsed: true, childs: [] },
                    { key: '4º Qué se puede hacer desde aquí', collapsed: true, childs: [] },
                    { key: '5º Cómo se verifica', collapsed: true, childs: [] },
                    { key: '6º Cómo interpretar el histórico', collapsed: true, childs: [] },
                    { key: '7º Cómo interpretar lo planteado', collapsed: true, childs: [] },
                    { key: '8º Cómo se evalua', collapsed: true, childs: [] },
                    { key: '9º Cómo funciona la ayuda', collapsed: true, childs: [] },
                ]
            },
        ];
        this.data.Products.push(itm);
        this.core.navCtrl.navigateForward('/detail/' + itm[0].val.id);
    }
    //----
    edit() {
        this.editSnapshot = JSON.stringify(this.data);
        this.editMode = true;
    }
    cancelEdit() {
        this.editMode = false;
        if (this.editSnapshot != JSON.stringify(this.data)) {
            this.data = JSON.parse(this.editSnapshot);
        }
    }
    saveEdit() {
        this.editMode = false;
        this.save();
    }
};
DataServiceProvider.ctorParameters = () => [];
DataServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DataServiceProvider);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/core */ "Xavl");





let AppComponent = class AppComponent {
    constructor(core) {
        this.core = core;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_core__WEBPACK_IMPORTED_MODULE_4__["CoreProvider"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app *ngIf=\"core.auth.user!==null\">\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n<img src=\"/assets/loading.gif\" *ngIf=\"core.auth.user===null\">");

/***/ }),

/***/ "Xavl":
/*!**********************************!*\
  !*** ./src/app/services/core.ts ***!
  \**********************************/
/*! exports provided: CoreProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreProvider", function() { return CoreProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console-service */ "nIbC");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/first */ "XoMe");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-service */ "RWVG");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-service */ "flQF");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










let CoreProvider = class CoreProvider {
    constructor(_loading, http, console, toastCtrl, alertCtrl, modalCtrl, navCtrl, data, auth, platform, appRef, sanitizer) {
        this._loading = _loading;
        this.http = http;
        this.console = console;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.data = data;
        this.auth = auth;
        this.platform = platform;
        this.appRef = appRef;
        this.sanitizer = sanitizer;
        this.relayEndpoint = 'https://ovh225.detailorg.com/';
        this.browserId = '';
        this.global = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        this.stable = false;
        this.appIsStable = this.appRef.isStable.pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_4__["first"])(isStable => {
            if (isStable === true) {
                this.stable = true;
                return true;
            }
            else {
                return false;
            }
        }));
        // resourceURL = (base:string, options:any={}) => {
        //   setTimeout(() => {
        //     this.resourceCache['loading'].ev.next(this.resourceCache['loading'].src);
        //   }, 500);
        //   return this.resourceCache.loading;
        // };
        this.resourceCache = { loading: {
                src: this.cleanURL('/assets/loading.gif'),
                ev: new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]()
            } };
        this.appRef.isStable.subscribe(stable => {
            this.console.debug('App state changed to: ' + (stable ? 'stable' : 'unstable'));
        });
        const browserID = localStorage.getItem('browserId');
        if (browserID) {
            this.browserId = browserID;
            // Temporal workaround
            this.browserId = this.createUUID();
            localStorage.setItem('browserId', this.browserId);
        }
        else {
            this.browserId = this.createUUID();
            localStorage.setItem('browserId', this.browserId);
        }
        this.auth.initCore(this);
        this.data.initCore(this);
    }
    createLoading(text = null, noPresent = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this._loading.create({ message: text });
            if (!noPresent)
                yield loading.present();
            return loading;
        });
    }
    successToast(loading = null, message = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (loading)
                loading.dismiss();
            yield (yield this.toastCtrl.create({
                message: message || 'Se ha completado la acción correctamente',
                duration: 3000,
                color: 'success'
            })).present();
        });
    }
    errorToast(loading = null, message = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (loading)
                loading.dismiss();
            yield (yield this.toastCtrl.create({
                message: message || 'Se ha producido un error, inténtelo de nuevo más tarde',
                duration: 3000,
                color: 'danger'
            })).present();
        });
    }
    getDateFromTimestamp(date) {
        let t = date.split(/[- :]/);
        return new Date(Date.UTC(parseInt(t[0]), parseInt(t[1]) - 1, parseInt(t[2]), parseInt(t[3]), parseInt(t[4]), parseInt(t[5])));
    }
    getIsoTime(date = null) {
        const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        return (new Date(((date) ? date : Date.now()) - tzoffset)).toISOString().slice(0, -1);
    }
    parseIsoTime(input) {
        let d = new Date(input.replace('Z', '') + 'Z');
        d.setHours(d.getHours() + (d.getTimezoneOffset() / 60));
        return d;
    }
    copyToClipboard(e, selector = 'ion-input input') {
        e.target.parentNode.querySelector(selector).select();
        document.execCommand('copy');
    }
    // --
    doReorder(ev, items) {
        items = ev.detail.complete(items);
    }
    deleteMe(needle, haystack) {
        const index = haystack.indexOf(needle);
        if (index > -1)
            haystack.splice(index, 1);
    }
    loadImage(event, val, options = {}) {
        console.warn('loading image');
        const opts = {
            errorValue: options.errorValue || '/assets/404.png'
        };
        const file = event.target.children[0].files[0];
        const formData = new FormData();
        formData.append("file", file);
        this.http.post(this.relayEndpoint + "ipfs/pin", formData, { headers: {
                Authorization: 'Bearer ' + this.auth.token,
                'x-browser-id': this.browserId
            } }).subscribe((res) => {
            val.img = 'ipfs://' + res.cid;
        }, _ => {
            val.img = opts.errorValue;
        });
        // const reader  = new FileReader();
        // reader.onloadend = () => val.img = reader.result;
        // reader.readAsDataURL(file);
    }
    openIonInputFile(fInput) {
        fInput.getInputElement().then(el => el.click());
    }
    createUUID() {
        return '4bf96c8c-45ea-4b31-bb72-9afffbb8b7a4';
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    cleanURL(oldURL) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    }
    resourceURL(base, options = {}) {
        const opts = {
            loadingValue: options.loadingValue || '/assets/loading.gif',
            errorValue: options.errorValue || '/assets/404.png'
        };
        const commitChange = (newVal) => {
            if (this.resourceCache[base].src != newVal) {
                this.resourceCache[base].src = newVal;
                this.resourceCache[base].ev.next(newVal);
            }
        };
        if (!this.resourceCache[base]) {
            this.resourceCache[base] = {
                src: this.cleanURL(opts.loadingValue),
                ev: new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]()
            };
            if (base.startsWith('ipfs://')) {
                const cid = base.replace('ipfs://', '');
                this.http.get(this.relayEndpoint + 'ipfs/get/' + cid, {
                    headers: {
                        Authorization: 'Bearer ' + this.auth.token,
                        'x-browser-id': this.browserId
                    },
                    observe: 'response',
                    responseType: 'blob'
                }).subscribe(resource => {
                    if (resource.ok) {
                        commitChange(this.cleanURL(URL.createObjectURL(resource.body)));
                    }
                    else {
                        commitChange(this.cleanURL(opts.errorValue));
                    }
                }, err => {
                    commitChange(this.cleanURL(opts.errorValue));
                });
            }
            else {
                commitChange(this.cleanURL(base));
            }
        }
        setTimeout(() => {
            this.resourceCache[base].ev.next(this.resourceCache[base].src);
        }, 500);
        return this.resourceCache[base];
    }
};
CoreProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _console_service__WEBPACK_IMPORTED_MODULE_3__["ConsoleServiceProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataServiceProvider"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
];
CoreProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CoreProvider);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_console_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/console-service */ "nIbC");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data-service */ "RWVG");
/* harmony import */ var _services_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/core */ "Xavl");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-service */ "flQF");
/* harmony import */ var _services_auth_service_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-service.guard */ "fxDv");
/* harmony import */ var _utils_IonicGestureConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/IonicGestureConfig */ "qcuu");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HAMMER_GESTURE_CONFIG"], useClass: _utils_IonicGestureConfig__WEBPACK_IMPORTED_MODULE_13__["IonicGestureConfig"] },
            _services_console_service__WEBPACK_IMPORTED_MODULE_8__["ConsoleServiceProvider"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceProvider"],
            _services_auth_service_guard__WEBPACK_IMPORTED_MODULE_12__["AuthServiceGuard"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataServiceProvider"],
            _services_core__WEBPACK_IMPORTED_MODULE_10__["CoreProvider"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "flQF":
/*!******************************************!*\
  !*** ./src/app/services/auth-service.ts ***!
  \******************************************/
/*! exports provided: AuthServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceProvider", function() { return AuthServiceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AuthServiceProvider = class AuthServiceProvider {
    constructor() {
        this.core = null;
        this.user = null;
        this.onUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.token = null;
    }
    initCore(core) {
        this.core = core;
        const token = localStorage.getItem('sessToken');
        if (token)
            this.token = token;
        this.initChecks();
    }
    initChecks() {
        const errSession = () => {
            this.user = false;
            this.token = false;
            this.saveToken();
        };
        if (this.token) {
            this.core.http.get(this.core.relayEndpoint + 'users/me', { headers: {
                    Authorization: 'Bearer ' + this.token,
                    'x-browser-id': this.core.browserId
                } }).subscribe(res => {
                this.saveUser(res);
            }, err => {
                errSession();
            });
        }
        else {
            errSession();
        }
        // TODO: if refresh token try to refresh session
    }
    login(data, cbOk = null, cbKo = null) {
        this.core.http.post(this.core.relayEndpoint + 'users/login', data, { headers: {
                'x-browser-id': this.core.browserId
            } }).subscribe((res) => {
            this.token = res.accessToken;
            this.saveToken();
            this.initChecks();
            if (cbOk)
                cbOk();
        }, err => {
            this.user = false;
            this.token = false;
            this.saveToken();
            if (cbKo)
                cbKo(err);
        });
    }
    logout() {
    }
    saveToken() {
        localStorage.setItem('sessToken', this.token);
    }
    saveUser(user) {
        this.user = user;
        this.onUser.next(this.user);
    }
};
AuthServiceProvider.ctorParameters = () => [];
AuthServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthServiceProvider);



/***/ }),

/***/ "fxDv":
/*!************************************************!*\
  !*** ./src/app/services/auth-service.guard.ts ***!
  \************************************************/
/*! exports provided: AuthServiceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceGuard", function() { return AuthServiceGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "Xavl");




let AuthServiceGuard = class AuthServiceGuard {
    constructor(core, router) {
        this.core = core;
        this.router = router;
    }
    canActivate(next, _state) {
        const res = this.core.auth.user ? true : false;
        if (!res)
            this.router.navigateByUrl('/auth/login');
        return res;
    }
};
AuthServiceGuard.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["CoreProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthServiceGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthServiceGuard);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nIbC":
/*!*********************************************!*\
  !*** ./src/app/services/console-service.ts ***!
  \*********************************************/
/*! exports provided: ConsoleServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleServiceProvider", function() { return ConsoleServiceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");



let ConsoleServiceProvider = class ConsoleServiceProvider {
    constructor() {
        this.previusString = '_DeTailDebug: ';
    }
    debug(msg, ...objects) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            if (objects == null) {
                console.log(this.previusString + msg);
            }
            else {
                console.log(this.previusString + msg, objects);
            }
        }
    }
    log(msg, ...objects) {
        if (objects == null) {
            console.log(this.previusString + msg);
        }
        else {
            console.log(this.previusString + msg, objects);
        }
    }
};
ConsoleServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ConsoleServiceProvider);



/***/ }),

/***/ "qcuu":
/*!*****************************************!*\
  !*** ./src/utils/IonicGestureConfig.ts ***!
  \*****************************************/
/*! exports provided: IonicGestureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicGestureConfig", function() { return IonicGestureConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
let IonicGestureConfig = class IonicGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    buildHammer(element) {
        let mc;
        if (window) {
            mc = new window.Hammer(element);
            for (const eventName in this.overrides) {
                if (eventName) {
                    mc.get(eventName).set(this.overrides[eventName]);
                }
            }
        }
        return mc;
    }
};
IonicGestureConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IonicGestureConfig);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-service.guard */ "fxDv");




const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-module-auth-module */ "pages-auth-module-auth-module").then(__webpack_require__.bind(null, /*! ./pages/auth-module/auth.module */ "uW9U")).then(m => m.AuthPageModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-main-module-main-module */ "pages-main-module-main-module").then(__webpack_require__.bind(null, /*! ./pages/main-module/main.module */ "Z/iu")).then(m => m.MainPageModule),
        canActivate: [_services_auth_service_guard__WEBPACK_IMPORTED_MODULE_3__["AuthServiceGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map