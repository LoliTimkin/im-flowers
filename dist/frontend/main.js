"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/layout/layout.component */ 1184);
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/main/main.component */ 1435);
/* harmony import */ var _core_auth_auth_forward_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth/auth-forward.guard */ 7303);
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/auth.guard */ 137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: "",
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [
            { path: "", component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent },
            { path: "", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/user/user.module */ 6369)).then(m => m.UserModule), canActivate: [_core_auth_auth_forward_guard__WEBPACK_IMPORTED_MODULE_2__.AuthForwardGuard] },
            { path: "", loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/product/product.module */ 1052)).then(m => m.ProductModule) },
            { path: "", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_order_order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/order/order.module */ 4169)).then(m => m.OrderModule) },
            { path: "", loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_views_personal_personal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/personal/personal.module */ 4171)).then(m => m.PersonalModule), canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/layout.component */ 1184);
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layout/footer/footer.component */ 1070);
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layout/header/header.component */ 4162);
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/main/main.component */ 1435);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/auth/auth.interceptor */ 2026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor, multi: true }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
        _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _views_main_main_component__WEBPACK_IMPORTED_MODULE_5__.MainComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule] }); })();


/***/ }),

/***/ 7303:
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-forward.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthForwardGuard": () => (/* binding */ AuthForwardGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8951);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




class AuthForwardGuard {
    constructor(authService, location) {
        this.authService = authService;
        this.location = location;
    }
    canActivate(route, state) {
        if (this.authService.getIsLoggedIn()) {
            this.location.back();
            return false;
        }
        return true;
    }
}
AuthForwardGuard.ɵfac = function AuthForwardGuard_Factory(t) { return new (t || AuthForwardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
AuthForwardGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthForwardGuard, factory: AuthForwardGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 137:
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8951);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);




class AuthGuard {
    constructor(authService, _snackBar) {
        this.authService = authService;
        this._snackBar = _snackBar;
    }
    canActivate(route, state) {
        const isLoggedIn = this.authService.getIsLoggedIn();
        if (!isLoggedIn) {
            this._snackBar.open('Для доступа необходимо авторизоваться');
        }
        return isLoggedIn;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2026:
/*!***********************************************!*\
  !*** ./src/app/core/auth/auth.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8951);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);





class AuthInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        const token = this.authService.getTokens();
        if (token && token.accessToken) {
            const authReq = req.clone({
                headers: req.headers.set('x-access-token', token.accessToken)
            });
            return next.handle(authReq)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
                if (error.status === 401 && !authReq.url.includes("/login") && !authReq.url.includes("/refresh")) {
                    return this.handle401Error(authReq, next);
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
            }));
        }
        return next.handle(req);
    }
    handle401Error(req, next) {
        return this.authService.refresh()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)((result) => {
            let error = '';
            if (result.error !== undefined) {
                error = result.message;
            }
            const refreshResult = result;
            if (!refreshResult.accessToken || !refreshResult.refreshToken || !refreshResult.userId) {
                error = 'ошибка авторизации';
            }
            if (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(error));
            }
            this.authService.setTokens(refreshResult.accessToken, refreshResult.refreshToken);
            const authReq = req.clone({
                headers: req.headers.set('x-access-token', refreshResult.accessToken)
            });
            return next.handle(authReq);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            this.authService.removeTokens();
            this.router.navigate(['/']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 8951:
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
    constructor(http) {
        this.http = http;
        this.accessTokenKey = "accessToken";
        this.refreshTokenKey = "refreshToken";
        this.userIdKey = "userId";
        this.isLogged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.isLogged = false;
        this.isLogged = !!localStorage.getItem(this.accessTokenKey);
    }
    login(email, password, rememberMe) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + 'login', {
            email, password, rememberMe
        });
    }
    signup(email, password, passwordRepeat) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + 'signup', {
            email, password, passwordRepeat
        });
    }
    logout() {
        const tokens = this.getTokens();
        if (tokens && tokens.refreshToken) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + 'logout', {
                refreshToken: tokens.refreshToken
            });
        }
        throw (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => {
            "Can't find token";
        });
    }
    refresh() {
        const tokens = this.getTokens();
        if (tokens && tokens.refreshToken) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + 'refresh', {
                refreshToken: tokens.refreshToken
            });
        }
        throw (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => 'Can not use token');
    }
    getIsLoggedIn() {
        return this.isLogged;
    }
    setTokens(accessToken, refreshToken) {
        localStorage.setItem(this.accessTokenKey, accessToken);
        localStorage.setItem(this.refreshTokenKey, refreshToken);
        this.isLogged = true;
        this.isLogged$.next(true);
    }
    removeTokens() {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
        this.isLogged = false;
        this.isLogged$.next(false);
    }
    getTokens() {
        return {
            accessToken: localStorage.getItem(this.accessTokenKey),
            refreshToken: localStorage.getItem(this.refreshTokenKey),
        };
    }
    get userId() {
        return localStorage.getItem(this.userIdKey);
    }
    set userId(id) {
        if (id) {
            localStorage.setItem(this.userIdKey, id);
        }
        else {
            localStorage.removeItem(this.userIdKey);
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1687:
/*!*****************************************************!*\
  !*** ./src/app/shared/ utils/active-params.util.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveParamsUtil": () => (/* binding */ ActiveParamsUtil)
/* harmony export */ });
class ActiveParamsUtil {
    static processParams(params) {
        const activeParams = { types: [] };
        if (params.hasOwnProperty('types')) {
            activeParams.types = Array.isArray(params['types']) ? params['types'] : [params['types']];
        }
        if (params.hasOwnProperty('heightTo'))
            activeParams.heightTo = params['heightTo'];
        if (params.hasOwnProperty('heightFrom'))
            activeParams.heightFrom = params['heightFrom'];
        if (params.hasOwnProperty('diameterTo'))
            activeParams.diameterTo = params['diameterTo'];
        if (params.hasOwnProperty('diameterFrom'))
            activeParams.diameterFrom = params['diameterFrom'];
        if (params.hasOwnProperty('sort'))
            activeParams.sort = params['sort'];
        if (params.hasOwnProperty('page'))
            activeParams.page = +params['page'];
        return activeParams;
    }
}


/***/ }),

/***/ 7007:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/category-filter/category-filter.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryFilterComponent": () => (/* binding */ CategoryFilterComponent)
/* harmony export */ });
/* harmony import */ var _utils_active_params_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ utils/active-params.util */ 1687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function CategoryFilterComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryFilterComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryFilterComponent_label_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 11)(1, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CategoryFilterComponent_label_7_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const type_r4 = restoredCtx.$implicit; const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.updateFilterParam(type_r4.url, _r5.checked)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.activeParams.types.includes(type_r4.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r4.name);
} }
function CategoryFilterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u043E\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryFilterComponent_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.updateFilterParamFromTo(ctx_r8.type + "From", $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0434\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CategoryFilterComponent_div_8_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.updateFilterParamFromTo(ctx_r10.type + "To", $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0441\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.to);
} }
class CategoryFilterComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categoryWithTypes = null;
        this.type = null;
        this.open = false;
        this.activeParams = { types: [] };
        this.from = null;
        this.to = null;
    }
    get title() {
        if (this.categoryWithTypes) {
            return this.categoryWithTypes.name;
        }
        else if (this.type) {
            if (this.type === 'height') {
                return 'Высота';
            }
            else if (this.type === 'diameter') {
                return 'Диаметр';
            }
        }
        return '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.activeParams = _utils_active_params_util__WEBPACK_IMPORTED_MODULE_0__.ActiveParamsUtil.processParams(params);
            if (this.type) {
                if (this.type === 'height') {
                    this.open = !!(this.activeParams.heightFrom || this.activeParams.heightTo);
                    this.from = this.activeParams.heightFrom ? +this.activeParams.heightFrom : null;
                    this.to = this.activeParams.heightTo ? +this.activeParams.heightTo : null;
                }
                else if (this.type === 'diameter') {
                    this.open = !!(this.activeParams.diameterFrom || this.activeParams.diameterTo);
                    this.from = this.activeParams.diameterFrom ? +this.activeParams.diameterFrom : null;
                    this.to = this.activeParams.diameterTo ? +this.activeParams.diameterTo : null;
                }
            }
            else {
                if (params['types']) {
                    this.activeParams.types = Array.isArray(params['types']) ? params['types'] : [params['types']];
                }
                else {
                    this.activeParams.types = [];
                }
                if (this.categoryWithTypes && this.categoryWithTypes.types && this.categoryWithTypes.types.length > 0
                    && this.categoryWithTypes.types.some(type => this.activeParams.types.find(item => type.url === item))) {
                    this.open = true;
                }
            }
        });
    }
    toogle() {
        this.open = !this.open;
    }
    updateFilterParam(url, checked) {
        if (this.activeParams.types && this.activeParams.types.length > 0) {
            const existingTypeInParams = this.activeParams.types.find(item => item === url);
            if (existingTypeInParams && !checked) {
                this.activeParams.types = this.activeParams.types.filter(item => item !== url);
            }
            else if (!existingTypeInParams && checked) {
                //this.activeParams.types.push(url)
                this.activeParams.types = [...this.activeParams.types, url];
            }
        }
        else if (checked) {
            this.activeParams.types = [url];
        }
        this.activeParams.page = 1;
        this.router.navigate(["/catalog"], {
            queryParams: this.activeParams
        });
    }
    updateFilterParamFromTo(param, value) {
        if (param === 'heightTo' || param === 'diameterTo' || param === 'heightFrom' || param === 'diameterFrom') {
            if (this.activeParams[param] && !value) {
                delete this.activeParams[param];
            }
            else {
                this.activeParams[param] = value;
            }
        }
        this.activeParams.page = 1;
        this.router.navigate(["/catalog"], {
            queryParams: this.activeParams
        });
    }
}
CategoryFilterComponent.ɵfac = function CategoryFilterComponent_Factory(t) { return new (t || CategoryFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
CategoryFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryFilterComponent, selectors: [["category-filter"]], inputs: { categoryWithTypes: "categoryWithTypes", type: "type" }, decls: 9, vars: 7, consts: [[1, "catalog-filter"], [1, "catalog-filter-head", 3, "click"], ["height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [1, "catalog-filter-body"], ["class", "catalog-filter-checkbox", 4, "ngFor", "ngForOf"], ["class", "catalog-filter-from-to", 4, "ngIf"], ["height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.99974 5.99997C10.5831 5.99997 11.1664 6.22497 11.6081 6.66663L17.0414 12.1C17.2831 12.3416 17.2831 12.7416 17.0414 12.9833C16.7997 13.225 16.3997 13.225 16.1581 12.9833L10.7247 7.54997C10.3247 7.14997 9.67474 7.14997 9.27474 7.54997L3.84141 12.9833C3.59974 13.225 3.19974 13.225 2.95807 12.9833C2.71641 12.7416 2.71641 12.3416 2.95807 12.1L8.39141 6.66663C8.83307 6.22497 9.41641 5.99997 9.99974 5.99997Z", "fill", "#2C2C2C"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.0003 14C9.41693 14 8.83359 13.775 8.39193 13.3334L2.95859 7.90003C2.71693 7.65837 2.71693 7.25837 2.95859 7.0167C3.20026 6.77503 3.60026 6.77503 3.84193 7.0167L9.27526 12.45C9.67526 12.85 10.3253 12.85 10.7253 12.45L16.1586 7.0167C16.4003 6.77503 16.8003 6.77503 17.0419 7.0167C17.2836 7.25837 17.2836 7.65837 17.0419 7.90003L11.6086 13.3334C11.1669 13.775 10.5836 14 10.0003 14Z", "fill", "#2C2C2C"], [1, "catalog-filter-checkbox"], ["type", "checkbox", 3, "checked", "change"], ["input", ""], [1, "catalog-filter-from-to"], ["type", "number", "step", "1", "min", "0", 1, "small-input", 3, "ngModel", "ngModelChange"]], template: function CategoryFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryFilterComponent_Template_div_click_1_listener() { return ctx.toogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CategoryFilterComponent__svg_svg_4_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CategoryFilterComponent__svg_svg_5_Template, 2, 0, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CategoryFilterComponent_label_7_Template, 5, 2, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CategoryFilterComponent_div_8_Template, 9, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoryWithTypes == null ? null : ctx.categoryWithTypes.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".catalog-filter[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  margin-bottom: 12px;\n  font-size: 16px;\n  color: #2c2c2c;\n}\n.catalog-filter[_ngcontent-%COMP%]   .catalog-filter-head[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #b6d5b9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 23px;\n  cursor: pointer;\n}\n.catalog-filter.open[_ngcontent-%COMP%]   .catalog-filter-head[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0 0;\n}\n.catalog-filter[_ngcontent-%COMP%]   .catalog-filter-body[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: none;\n  border: 1px solid #b6d5b9;\n  border-radius: 0 0 5px 5px;\n}\n.catalog-filter[_ngcontent-%COMP%]   .catalog-filter-body[_ngcontent-%COMP%]   .catalog-filter-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 19px;\n  line-height: 130%;\n}\n.catalog-filter[_ngcontent-%COMP%]   .catalog-filter-body[_ngcontent-%COMP%]   .catalog-filter-checkbox[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.catalog-filter[_ngcontent-%COMP%]   .catalog-filter-body[_ngcontent-%COMP%]   .catalog-filter-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.catalog-filter[_ngcontent-%COMP%]   .catalog-filter-body[_ngcontent-%COMP%]   .catalog-filter-from-to[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.catalog-filter.open[_ngcontent-%COMP%]   .catalog-filter-body[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWZpbHRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ0pnQjtBREdsQjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLDBCQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFISjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhOO0FBS007RUFDRSxnQkFBQTtBQUhSO0FBTU07RUFDRSxrQkFBQTtBQUpSO0FBU0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVBOO0FBV0U7RUFDRSxjQUFBO0FBVEo7QUFjQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFYRiIsImZpbGUiOiJjYXRlZ29yeS1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmNhdGFsb2ctZmlsdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkZ3JleS10ZXh0LWNvbG9yO1xuXG4gIC5jYXRhbG9nLWZpbHRlci1oZWFkIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2I2ZDViOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEycHggMjNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmLm9wZW4gLmNhdGFsb2ctZmlsdGVyLWhlYWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICB9XG5cbiAgLmNhdGFsb2ctZmlsdGVyLWJvZHkge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmQ1Yjk7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG5cbiAgICAuY2F0YWxvZy1maWx0ZXItY2hlY2tib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTMwJTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAuY2F0YWxvZy1maWx0ZXItZnJvbS10byB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIH1cblxuICAmLm9wZW4gLmNhdGFsb2ctZmlsdGVyLWJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4iLCIkY29udGFpbmVyLXdpZHRoOiAxMjQwcHg7XG4kZ3JlZW4tdGV4dC1jb2xvcjogIzIwMmIyMTtcbiRncmV5LXRleHQtY29sb3I6ICMyYzJjMmM7XG4iXX0= */"] });


/***/ }),

/***/ 9968:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/count-selector/count-selector.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountSelectorComponent": () => (/* binding */ CountSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);



class CountSelectorComponent {
    constructor() {
        this.onCountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.count = 1;
    }
    ngOnInit() {
    }
    countChange() {
        this.onCountChange.emit(this.count);
    }
    decreaseCount() {
        if (this.count > 1) {
            this.count--;
            this.countChange();
        }
    }
    increaseCount() {
        this.count++;
        this.countChange();
    }
}
CountSelectorComponent.ɵfac = function CountSelectorComponent_Factory(t) { return new (t || CountSelectorComponent)(); };
CountSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountSelectorComponent, selectors: [["count-selector"]], inputs: { count: "count" }, outputs: { onCountChange: "onCountChange" }, decls: 8, vars: 1, consts: [[1, "count-selector"], [3, "click"], ["width", "10", "height", "3", "viewBox", "0 0 10 3", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.14019 3V0H0V3H9.14019Z", "fill", "#9AA89B"], ["type", "text", "name", "", "id", "", 1, "small-input", 3, "ngModel", "ngModelChange", "change"], ["width", "13", "height", "12", "viewBox", "0 0 13 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.34934 12V7.20896H12.1406V4.81343H7.34934V0H4.95369V4.81343H0.140625V7.20896H4.95369V12H7.34934Z", "fill", "#9AA89B"]], template: function CountSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountSelectorComponent_Template_div_click_1_listener() { return ctx.decreaseCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CountSelectorComponent_Template_input_ngModelChange_4_listener($event) { return ctx.count = $event; })("change", function CountSelectorComponent_Template_input_change_4_listener() { return ctx.countChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountSelectorComponent_Template_div_click_5_listener() { return ctx.increaseCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.count);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".count-selector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 97px;\n  align-items: center;\n}\n.count-selector[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImNvdW50LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50LXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogOTdweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3284:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCardComponent": () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 5237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _count_selector_count_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../count-selector/count-selector.component */ 9968);






function ProductCardComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function ProductCardComponent_div_0_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_div_0_div_5_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.addToCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_0_div_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_div_0_div_5_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.removeFromCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ProductCardComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductCardComponent_div_0_div_5_button_4_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProductCardComponent_div_0_div_5_button_5_Template, 5, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.product.price, " BYN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.countInCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.countInCart);
} }
function ProductCardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "count-selector", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onCountChange", function ProductCardComponent_div_0_div_6_Template_count_selector_onCountChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.updateCount($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "circle", 21)(5, "circle", 22)(6, "circle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("count", ctx_r3.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/product/" + ctx_r3.product.url);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return []; };
function ProductCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductCardComponent_div_0_div_1_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProductCardComponent_div_0_div_5_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProductCardComponent_div_0_div_6_Template, 9, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-light", ctx_r0.isLight);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.isLight ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, "/product/" + ctx_r0.product.url) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLight);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r0.serverStaticPath + ctx_r0.product.image, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLight);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLight);
} }
class ProductCardComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.serverStaticPath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverStaticPath;
        this.count = 1;
        this.isLight = false;
        this.countInCart = 0;
    }
    ngOnInit() {
        if (this.countInCart && this.countInCart > 0) {
            this.count = this.countInCart;
        }
    }
    addToCart() {
        this.cartService.updateCart(this.product.id, this.count)
            .subscribe((data) => {
            this.countInCart = this.count;
        });
    }
    updateCount(value) {
        if (this.countInCart) {
            this.count = value;
            this.cartService.updateCart(this.product.id, this.count)
                .subscribe((data) => {
                this.countInCart = this.count;
            });
        }
    }
    removeFromCart() {
        this.cartService.updateCart(this.product.id, 0)
            .subscribe((data) => {
            this.countInCart = 0;
            this.count = 1;
        });
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService)); };
ProductCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["product-card"]], inputs: { product: "product", isLight: "isLight", countInCart: "countInCart" }, decls: 1, vars: 1, consts: [["class", "product-card", 3, "routerLink", "is-light", 4, "ngIf"], [1, "product-card", 3, "routerLink"], ["class", "product-card-favorite", 4, "ngIf"], [1, "product-card-image"], [1, "product-card-name"], ["class", "product-card-info", 4, "ngIf"], ["class", "product-card-extra", 4, "ngIf"], [1, "product-card-favorite"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.9997 20.8457C11.7155 20.8457 11.4405 20.8091 11.2113 20.7266C7.70967 19.5257 2.14551 15.2632 2.14551 8.96572C2.14551 5.75739 4.73967 3.15405 7.92967 3.15405C9.47884 3.15405 10.9272 3.75905 11.9997 4.84072C13.0722 3.75905 14.5205 3.15405 16.0697 3.15405C19.2597 3.15405 21.8538 5.76655 21.8538 8.96572C21.8538 15.2724 16.2897 19.5257 12.788 20.7266C12.5588 20.8091 12.2838 20.8457 11.9997 20.8457ZM7.92967 4.52905C5.50051 4.52905 3.52051 6.51822 3.52051 8.96572C3.52051 15.2266 9.54301 18.7099 11.6605 19.4341C11.8255 19.4891 12.183 19.4891 12.348 19.4341C14.4563 18.7099 20.488 15.2357 20.488 8.96572C20.488 6.51822 18.508 4.52905 16.0788 4.52905C14.6855 4.52905 13.393 5.17989 12.5588 6.30739C12.3022 6.65572 11.7155 6.65572 11.4588 6.30739C10.6063 5.17072 9.32301 4.52905 7.92967 4.52905Z", "fill", "#383838"], [1, "product-card-info"], [1, "product-card-price"], [1, "product-card-action"], ["class", "button", 3, "click", 4, "ngIf"], ["class", "button button-transparent button-in-cart", 3, "click", 4, "ngIf"], [1, "button", 3, "click"], [1, "button", "button-transparent", "button-in-cart", 3, "click"], [1, "product-card-extra"], [3, "count", "onCountChange"], [1, "product-card-detail", 3, "routerLink"], ["width", "18", "height", "4", "viewBox", "0 0 18 4", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "2.66699", "cy", "2", "r", "2", "fill", "#9AA89B"], ["cx", "9.33398", "cy", "2", "r", "2", "fill", "#9AA89B"], ["cx", "16", "cy", "2", "r", "2", "fill", "#9AA89B"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProductCardComponent_div_0_Template, 7, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _count_selector_count_selector_component__WEBPACK_IMPORTED_MODULE_2__.CountSelectorComponent], styles: [".product-card[_ngcontent-%COMP%] {\n  width: 291px;\n  height: 498px;\n  box-sizing: border-box;\n  position: relative;\n}\n.product-card.is-light[_ngcontent-%COMP%] {\n  height: auto;\n  cursor: pointer;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-favorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  cursor: pointer;\n  z-index: 2;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-image[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-size: cover;\n  background-position: center;\n  height: 291px;\n  width: 291px;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-name[_ngcontent-%COMP%] {\n  height: 52px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 130%;\n  color: #202b21;\n  margin-top: 15px;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-info[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #C7C7C7;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-info[_ngcontent-%COMP%]   .product-card-price[_ngcontent-%COMP%] {\n  font-family: Montserrat, sans-serif;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 130%;\n  color: #202b21;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-info[_ngcontent-%COMP%]   .product-card-action[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 166px;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-extra[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-extra[_ngcontent-%COMP%]   .product-card-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n}\n.product-card[_ngcontent-%COMP%]   .product-card-extra[_ngcontent-%COMP%]   .product-card-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 16px;\n  color: #9aa89b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDbENlO0VEbUNmLGdCQUFBO0FBSko7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBTEo7QUFPSTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ25EYTtBRDhDbkI7QUFRSTtFQUNFLFlBQUE7QUFOTjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVRKO0FBV0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFUTjtBQVdNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVRSIiwiZmlsZSI6InByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4ucHJvZHVjdC1jYXJkIHtcbiAgd2lkdGg6IDI5MXB4O1xuICBoZWlnaHQ6IDQ5OHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi5pcy1saWdodCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5wcm9kdWN0LWNhcmQtZmF2b3JpdGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAucHJvZHVjdC1jYXJkLWltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyOTFweDtcbiAgICB3aWR0aDogMjkxcHhcbiAgfVxuXG4gIC5wcm9kdWN0LWNhcmQtbmFtZSB7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgIGNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvcjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG5cbiAgLnByb2R1Y3QtY2FyZC1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDN0M3Qzc7XG5cbiAgICAucHJvZHVjdC1jYXJkLXByaWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgY29sb3I6ICRncmVlbi10ZXh0LWNvbG9yO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWNhcmQtYWN0aW9uIC5idXR0b24ge1xuICAgICAgd2lkdGg6IDE2NnB4O1xuICAgIH1cblxuICB9XG5cbiAgLnByb2R1Y3QtY2FyZC1leHRyYSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnByb2R1Y3QtY2FyZC1kZXRhaWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjOWFhODliO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCIkY29udGFpbmVyLXdpZHRoOiAxMjQwcHg7XG4kZ3JlZW4tdGV4dC1jb2xvcjogIzIwMmIyMTtcbiRncmV5LXRleHQtY29sb3I6ICMyYzJjMmM7XG4iXX0= */"] });


/***/ }),

/***/ 3674:
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/password-repeat.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordRepeatDirective": () => (/* binding */ PasswordRepeatDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class PasswordRepeatDirective {
    validate(control) {
        const password = control.get('password');
        const passwordRepeat = control.get('passwordRepeat');
        if (password?.value !== passwordRepeat?.value) {
            passwordRepeat?.setErrors({ passwordRepeat: true });
            return { passwordRepeat: true };
        }
        return null;
    }
}
PasswordRepeatDirective.ɵfac = function PasswordRepeatDirective_Factory(t) { return new (t || PasswordRepeatDirective)(); };
PasswordRepeatDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PasswordRepeatDirective, selectors: [["", "PasswordRepeat", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS, useExisting: PasswordRepeatDirective, multi: true }])] });


/***/ }),

/***/ 1070:
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = function (a0) { return { types: a0 }; };
function FooterComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, category_r1 == null ? null : category_r1.typesUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
} }
class FooterComponent {
    constructor() {
        this.categories = [];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { categories: "categories" }, decls: 71, vars: 1, consts: [[1, "footer"], [1, "container"], ["href", "", 1, "logo"], ["src", "assets/images/green-logo.png", "alt", "\u041B\u043E\u0433\u043E\u0442\u0438\u043F"], [1, "footer-block", "footer-menu"], [1, "footer-head"], [1, "footer-items"], ["routerLink", "/"], [1, "footer-block", "footer-categories"], [4, "ngFor", "ngForOf"], [1, "footer-block", "footer-info"], [1, "footer-social"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.81152 3.74976C5.12988 3.74976 3.75 5.12964 3.75 6.81128V17.1882C3.75 18.8699 5.12988 20.2498 6.81152 20.2498H17.1885C18.8701 20.2498 20.25 18.8699 20.25 17.1882V6.81128C20.25 5.12964 18.8701 3.74976 17.1885 3.74976H6.81152ZM6.81152 5.24976H17.1885C18.0586 5.24976 18.75 5.94116 18.75 6.81128V17.1882C18.75 18.0583 18.0586 18.7498 17.1885 18.7498H6.81152C5.94141 18.7498 5.25 18.0583 5.25 17.1882V6.81128C5.25 5.94116 5.94141 5.24976 6.81152 5.24976ZM11.7891 9.17261C11.2383 9.16675 10.7695 9.17261 10.5059 9.30151C10.3301 9.38647 10.1953 9.57983 10.2773 9.58862C10.3799 9.60327 10.6113 9.65308 10.7344 9.82007C10.8926 10.0339 10.8867 10.5173 10.8867 10.5173C10.8867 10.5173 10.9746 11.8474 10.6729 12.0144C10.4648 12.1287 10.1807 11.8972 9.56543 10.8396C9.25195 10.2947 9.01465 9.69409 9.01465 9.69409C9.01465 9.69409 8.9707 9.58276 8.88867 9.52417C8.78906 9.45093 8.65137 9.42749 8.65137 9.42749L7.18359 9.43628C7.18359 9.43628 6.96387 9.44507 6.88477 9.53882C6.81152 9.62671 6.87891 9.79956 6.87891 9.79956C6.87891 9.79956 8.02734 12.4861 9.32812 13.8396C10.5205 15.0818 11.874 14.9998 11.874 14.9998H12.4893C12.4893 14.9998 12.6738 14.9792 12.7676 14.8796C12.8555 14.7859 12.8525 14.6101 12.8525 14.6101C12.8525 14.6101 12.8408 13.7869 13.2217 13.6638C13.5996 13.5466 14.0801 14.4607 14.5928 14.8123C14.9824 15.0789 15.2783 15.0203 15.2783 15.0203L16.6494 14.9998C16.6494 14.9998 17.3643 14.9558 17.0244 14.3904C16.998 14.3464 16.8281 13.9744 16.0078 13.2126C15.1465 12.4158 15.2607 12.5447 16.2979 11.1648C16.9277 10.324 17.1797 9.81128 17.1006 9.58862C17.0244 9.38062 16.5615 9.43628 16.5615 9.43628L15.0176 9.44507C15.0176 9.44507 14.9033 9.43042 14.8184 9.48022C14.7363 9.53003 14.6836 9.64722 14.6836 9.64722C14.6836 9.64722 14.4375 10.2976 14.1123 10.8513C13.4268 12.0173 13.1484 12.0818 13.0371 12.0085C12.7764 11.8386 12.8408 11.3289 12.8408 10.9685C12.8408 9.83472 13.0137 9.36597 12.5068 9.24292C12.3398 9.2019 12.2168 9.17554 11.7891 9.17261Z", "fill", "#2C2C2C"], ["d", "M12 3.00024C7.03832 3.00024 3 7.03856 3 12.0002C3 16.9619 7.03832 21.0002 12 21.0002C16.9617 21.0002 21 16.9619 21 12.0002C21 7.03856 16.9617 3.00024 12 3.00024ZM12 4.50024C16.151 4.50024 19.5 7.84923 19.5 12.0002C19.5 15.7708 16.7338 18.8712 13.1162 19.4094V14.1873H15.252L15.5874 12.0178H13.1162V10.8328C13.1162 9.93201 13.4121 9.13208 14.2544 9.13208H15.6079V7.2395C15.3702 7.20725 14.867 7.13696 13.916 7.13696C11.93 7.13696 10.7666 8.18545 10.7666 10.575V12.0178H8.72461V14.1873H10.7666V19.3904C7.20664 18.8032 4.5 15.73 4.5 12.0002C4.5 7.84923 7.84898 4.50024 12 4.50024Z", "fill", "#2C2C2C"], ["d", "M8.60156 3.74976C5.93848 3.74976 3.75 5.9353 3.75 8.60132V15.3982C3.75 18.0613 5.93555 20.2498 8.60156 20.2498H15.3984C18.0615 20.2498 20.25 18.0642 20.25 15.3982V8.60132C20.25 5.93823 18.0645 3.74976 15.3984 3.74976H8.60156ZM8.60156 5.24976H15.3984C17.2529 5.24976 18.75 6.74683 18.75 8.60132V15.3982C18.75 17.2527 17.2529 18.7498 15.3984 18.7498H8.60156C6.74707 18.7498 5.25 17.2527 5.25 15.3982V8.60132C5.25 6.74683 6.74707 5.24976 8.60156 5.24976ZM16.4297 6.89038C16.0518 6.89038 15.75 7.19214 15.75 7.57007C15.75 7.948 16.0518 8.24976 16.4297 8.24976C16.8076 8.24976 17.1094 7.948 17.1094 7.57007C17.1094 7.19214 16.8076 6.89038 16.4297 6.89038ZM12 7.49976C9.52441 7.49976 7.5 9.52417 7.5 11.9998C7.5 14.4753 9.52441 16.4998 12 16.4998C14.4756 16.4998 16.5 14.4753 16.5 11.9998C16.5 9.52417 14.4756 7.49976 12 7.49976ZM12 8.99976C13.667 8.99976 15 10.3328 15 11.9998C15 13.6667 13.667 14.9998 12 14.9998C10.333 14.9998 9 13.6667 9 11.9998C9 10.3328 10.333 8.99976 12 8.99976Z", "fill", "#2C2C2C"], [1, "footer-payment"], [1, "payment-item", 2, "background-image", "url('/assets/images/payment/31.png')"], [1, "payment-item", 2, "background-image", "url('/assets/images/payment/32.png')"], [1, "payment-item", 2, "background-image", "url('/assets/images/payment/33.png')"], [1, "payment-item", 2, "background-image", "url('/assets/images/payment/34.png')"], [1, "payment-item", 2, "background-image", "url('/assets/images/payment/35.png')"], [1, "payment-item", 2, "background-image", "url('/assets/images/payment/36.png')"], [1, "footer-block", "footer-contacts"], [1, "footer-contact"], [1, "footer-contact-head"], [1, "footer-contact-content"], ["routerLink", "/catalog", 3, "queryParams"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041C\u0415\u041D\u042E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6)(8, "ul")(9, "li")(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041E\u0442\u0437\u044B\u0432\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8)(25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u041A\u0410\u0422\u0415\u0413\u041E\u0420\u0418\u0418 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 6)(28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FooterComponent_li_29_Template, 3, 4, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10)(31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u041C\u042B \u0412 \u0421\u041E\u0426\u0418\u0410\u041B\u042C\u041D\u042B\u0425 \u0421\u0415\u0422\u042F\u0425 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16)(41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23)(54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24)(57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u0410\u0434\u0440\u0435\u0441 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u0433. \u041C\u0438\u043D\u0441\u043A, \u0443\u043B. \u041A\u0430\u043B\u0438\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E 61, \u043F\u043E\u0434\u044A\u0435\u0437\u0434 1, \u043E\u0444\u0438\u0441 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24)(62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u0422\u0435\u043B\u0435\u0444\u043E\u043D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " + 375 (29) 922-29-99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24)(67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " homedecor@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["footer.footer[_ngcontent-%COMP%] {\n  padding-top: 39px;\n  padding-bottom: 50px;\n  background-color: #648F64;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n  margin-right: 63px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%] {\n  margin-top: 11px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]   .footer-head[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  color: #2c2c2c;\n  margin-bottom: 25px;\n  text-transform: uppercase;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2c2c2c;\n  text-decoration: none;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-menu[_ngcontent-%COMP%] {\n  margin-right: 57px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-categories[_ngcontent-%COMP%] {\n  margin-right: 34px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-info[_ngcontent-%COMP%] {\n  margin-right: 63px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-info[_ngcontent-%COMP%]   .footer-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-info[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 55px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-info[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-info[_ngcontent-%COMP%]   .footer-payment[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 70px);\n  gap: 10px;\n  max-width: 230px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-info[_ngcontent-%COMP%]   .footer-payment[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%] {\n  height: 35px;\n  background-position: top;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-contacts[_ngcontent-%COMP%] {\n  max-width: 253px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-contacts[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 16px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-contacts[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-contacts[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .footer-contact-head[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  color: #2c2c2c;\n  margin-bottom: 6px;\n}\nfooter.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .footer-block.footer-contacts[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .footer-contact-content[_ngcontent-%COMP%] {\n  color: #2c2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBREY7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUlJO0VBQ0Usa0JBQUE7QUFGTjtBQUtJO0VBQ0UsZ0JBQUE7QUFITjtBQUtNO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ3BCVTtFRHFCVixtQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFPUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUxWO0FBT1U7RUFDRSxtQkFBQTtBQUxaO0FBT1k7RUFDRSxnQkFBQTtBQUxkO0FBUVk7RUFDRSxlQUFBO0VBQ0EsY0N2Q0k7RUR3Q0oscUJBQUE7QUFOZDtBQVlNO0VBQ0Usa0JBQUE7QUFWUjtBQWFNO0VBQ0Usa0JBQUE7QUFYUjtBQWNNO0VBQ0Usa0JBQUE7QUFaUjtBQWNRO0VBQ0UsbUJBQUE7QUFaVjtBQWVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFiVjtBQWVVO0VBQ0Usa0JBQUE7QUFiWjtBQWlCUTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWZWO0FBaUJVO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBZlo7QUFvQk07RUFDRSxnQkFBQTtBQWxCUjtBQW9CUTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQWxCVjtBQW9CVTtFQUNFLGdCQUFBO0FBbEJaO0FBcUJVO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbEdNO0VEbUdOLGtCQUFBO0FBbkJaO0FBc0JVO0VBQ0UsY0N2R007QURtRmxCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG5mb290ZXIuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDM5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ4RjY0O1xuXG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGEubG9nbyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDYzcHg7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1ibG9jayB7XG4gICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuXG4gICAgICAuZm9vdGVyLWhlYWQge1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICRncmV5LXRleHQtY29sb3I7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItaXRlbXMge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBjb2xvcjogJGdyZXktdGV4dC1jb2xvcjtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmZvb3Rlci1tZW51IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1N3B4O1xuICAgICAgfVxuXG4gICAgICAmLmZvb3Rlci1jYXRlZ29yaWVzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNHB4O1xuICAgICAgfVxuXG4gICAgICAmLmZvb3Rlci1pbmZvIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2M3B4O1xuXG4gICAgICAgIC5mb290ZXItaGVhZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXItc29jaWFsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTVweDtcblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXItcGF5bWVudCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA3MHB4KTtcbiAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMzBweDtcblxuICAgICAgICAgIC5wYXltZW50LWl0ZW0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmZvb3Rlci1jb250YWN0cyB7XG4gICAgICAgIG1heC13aWR0aDogMjUzcHg7XG5cbiAgICAgICAgLmZvb3Rlci1jb250YWN0IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXItY29udGFjdC1oZWFkIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXktdGV4dC1jb2xvcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9vdGVyLWNvbnRhY3QtY29udGVudCB7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXktdGV4dC1jb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb250YWluZXItd2lkdGg6IDEyNDBweDtcbiRncmVlbi10ZXh0LWNvbG9yOiAjMjAyYjIxO1xuJGdyZXktdGV4dC1jb2xvcjogIzJjMmMyYztcbiJdfQ== */"] });


/***/ }),

/***/ 4162:
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 8951);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 5237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8589);







function HeaderComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 35)(3, "path", 36)(4, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function HeaderComponent_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 39)(3, "path", 40)(4, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
const _c0 = function (a0) { return { types: a0 }; };
function HeaderComponent_li_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, category_r4 == null ? null : category_r4.typesUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r4.name);
} }
class HeaderComponent {
    constructor(authService, _snackBar, cartService, router) {
        this.authService = authService;
        this._snackBar = _snackBar;
        this.cartService = cartService;
        this.router = router;
        this.count = 0;
        this.isLogged = false;
        this.categories = [];
        this.isLogged = this.authService.getIsLoggedIn();
    }
    ngOnInit() {
        this.authService.isLogged$.subscribe((isLoggedIn) => {
            this.isLogged = isLoggedIn;
        });
        this.cartService.getCartCount()
            .subscribe(data => {
            this.count = data.count;
        });
        this.cartService.count$
            .subscribe(count => this.count = count);
    }
    logout() {
        this.authService.logout()
            .subscribe({
            next: () => {
                this.doLogout();
            },
            error: () => {
                this.doLogout();
            }
        });
    }
    doLogout() {
        this.authService.removeTokens();
        this.authService.userId = null;
        this._snackBar.open('Вы успешно вышли из системы');
        this.router.navigate(['/']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { categories: "categories" }, decls: 55, vars: 4, consts: [[1, "header"], [1, "container"], ["href", "#", 1, "logo"], ["src", "assets/images/logo.png", "alt", ""], [1, "header-content"], [1, "header-top"], [1, "header-top-menu"], ["routerLink", "/"], ["routerLink", "/catalog"], [1, "header-top-phone"], ["href", "tel:+375299182888"], [1, "header-top-actions"], ["routerLink", "/login", 4, "ngIf"], [3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", ""], ["routerLink", "/profile"], [3, "click"], ["routerLink", "/favorite"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.9997 20.846C11.7155 20.846 11.4405 20.8093 11.2113 20.7268C7.70967 19.526 2.14551 15.2635 2.14551 8.96596C2.14551 5.75763 4.73967 3.1543 7.92967 3.1543C9.47884 3.1543 10.9272 3.7593 11.9997 4.84096C13.0722 3.7593 14.5205 3.1543 16.0697 3.1543C19.2597 3.1543 21.8538 5.7668 21.8538 8.96596C21.8538 15.2726 16.2897 19.526 12.788 20.7268C12.5588 20.8093 12.2838 20.846 11.9997 20.846ZM7.92967 4.5293C5.50051 4.5293 3.52051 6.51846 3.52051 8.96596C3.52051 15.2268 9.54301 18.7101 11.6605 19.4343C11.8255 19.4893 12.183 19.4893 12.348 19.4343C14.4563 18.7101 20.488 15.236 20.488 8.96596C20.488 6.51846 18.508 4.5293 16.0788 4.5293C14.6855 4.5293 13.393 5.18013 12.5588 6.30763C12.3022 6.65596 11.7155 6.65596 11.4588 6.30763C10.6063 5.17096 9.32301 4.5293 7.92967 4.5293Z", "fill", "#202B21"], ["routerLink", "/cart"], ["d", "M6.32507 7.31686C6.16673 7.31686 6.00007 7.2502 5.8834 7.13353C5.64173 6.89186 5.64173 6.49186 5.8834 6.2502L8.9084 3.2252C9.15007 2.98353 9.55007 2.98353 9.79173 3.2252C10.0334 3.46686 10.0334 3.86686 9.79173 4.10853L6.76673 7.13353C6.64173 7.2502 6.4834 7.31686 6.32507 7.31686Z", "fill", "#202B21"], ["d", "M17.6753 7.31686C17.5169 7.31686 17.3586 7.25853 17.2336 7.13353L14.2086 4.10853C13.9669 3.86686 13.9669 3.46686 14.2086 3.2252C14.4503 2.98353 14.8503 2.98353 15.0919 3.2252L18.1169 6.2502C18.3586 6.49186 18.3586 6.89186 18.1169 7.13353C18.0003 7.2502 17.8336 7.31686 17.6753 7.31686Z", "fill", "#202B21"], ["d", "M18.842 10.8333C18.7837 10.8333 18.7253 10.8333 18.667 10.8333H18.4753H5.33366C4.75033 10.8417 4.08366 10.8417 3.60033 10.3583C3.21699 9.98333 3.04199 9.4 3.04199 8.54167C3.04199 6.25 4.71699 6.25 5.51699 6.25H18.4837C19.2837 6.25 20.9587 6.25 20.9587 8.54167C20.9587 9.40833 20.7837 9.98333 20.4003 10.3583C19.967 10.7917 19.3837 10.8333 18.842 10.8333ZM5.51699 9.58333H18.6753C19.0503 9.59167 19.4003 9.59167 19.517 9.475C19.5753 9.41667 19.7003 9.21667 19.7003 8.54167C19.7003 7.6 19.467 7.5 18.4753 7.5H5.51699C4.52533 7.5 4.29199 7.6 4.29199 8.54167C4.29199 9.21667 4.42533 9.41667 4.47533 9.475C4.59199 9.58333 4.95033 9.58333 5.31699 9.58333H5.51699Z", "fill", "#202B21"], ["d", "M10.1338 17.2498C9.79212 17.2498 9.50879 16.9665 9.50879 16.6248V13.6665C9.50879 13.3248 9.79212 13.0415 10.1338 13.0415C10.4755 13.0415 10.7588 13.3248 10.7588 13.6665V16.6248C10.7588 16.9748 10.4755 17.2498 10.1338 17.2498Z", "fill", "#202B21"], ["d", "M13.9668 17.2498C13.6251 17.2498 13.3418 16.9665 13.3418 16.6248V13.6665C13.3418 13.3248 13.6251 13.0415 13.9668 13.0415C14.3085 13.0415 14.5918 13.3248 14.5918 13.6665V16.6248C14.5918 16.9748 14.3085 17.2498 13.9668 17.2498Z", "fill", "#202B21"], ["d", "M14.4083 20.9581H9.38329C6.39996 20.9581 5.73329 19.1831 5.47496 17.6415L4.29996 10.4331C4.24162 10.0915 4.47496 9.7748 4.81662 9.71646C5.15829 9.65813 5.47496 9.89146 5.53329 10.2331L6.70829 17.4331C6.94996 18.9081 7.44996 19.7081 9.38329 19.7081H14.4083C16.55 19.7081 16.7916 18.9581 17.0666 17.5081L18.4666 10.2165C18.5333 9.87479 18.8583 9.6498 19.2 9.7248C19.5416 9.79146 19.7583 10.1165 19.6916 10.4581L18.2916 17.7498C17.9666 19.4415 17.425 20.9581 14.4083 20.9581Z", "fill", "#202B21"], [1, "header-bottom"], [1, "header-bottom-menu"], [4, "ngFor", "ngForOf"], [1, "header-bottom-search"], ["type", "text", "placeholder", "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0438\u0441\u043A\u0430\u0442\u044C"], ["routerLink", "/login"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.5293 7.24498C8.82638 3.79498 10.5993 2.38623 14.4805 2.38623H14.6051C18.8889 2.38623 20.6043 4.10165 20.6043 8.3854V14.6337C20.6043 18.9175 18.8889 20.6329 14.6051 20.6329H14.4805C10.628 20.6329 8.85513 19.2433 8.53888 15.8508", "stroke", "#202B21", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.91699 11.5H14.2603", "stroke", "#202B21", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.123 8.28955L15.3335 11.5L12.123 14.7104", "stroke", "#202B21", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [3, "matMenuTriggerFor"], ["d", "M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z", "stroke", "#202B21", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z", "stroke", "#202B21", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "#202B21", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/catalog", 3, "queryParams"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "nav")(8, "ul")(9, "li")(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li")(16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u041E\u0442\u0437\u044B\u0432\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li")(19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " + 375 (29) 918-28-88 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HeaderComponent_a_25_Template, 5, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, HeaderComponent_a_26_Template, 5, 1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-menu", null, 14)(29, "button", 15)(30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 15)(33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_33_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0412\u044B\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 22)(41, "path", 23)(42, "path", 24)(43, "path", 25)(44, "path", 26)(45, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 28)(49, "div", 29)(50, "nav")(51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, HeaderComponent_li_52_Template, 3, 4, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger], styles: ["header.header[_ngcontent-%COMP%] {\n  padding: 30px 0 49px 0;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  padding-top: 32px;\n  padding-bottom: 25px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #C5C5C5;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-menu[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-right: 193px;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  list-style: none;\n  border-bottom: 1px solid transparent;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-bottom-color: #202b21;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #202b21;\n  cursor: pointer;\n  text-decoration: none;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #202b21;\n  text-decoration: none;\n  margin-right: 59px;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  position: relative;\n  cursor: pointer;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin-right: 18px;\n}\nheader.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-top-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  top: 10px;\n  right: -18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-size: 9px;\n  color: #202b21;\n  border-radius: 50%;\n  background: #B6D5B9;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%] {\n  padding-top: 32px;\n  display: flex;\n  align-items: center;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-menu[_ngcontent-%COMP%] {\n  margin-left: 26px;\n  margin-right: 97px;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  list-style: none;\n  border-bottom: 1px solid transparent;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-bottom-color: #202b21;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #202b21;\n  text-decoration: none;\n  cursor: pointer;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-search[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #202b21;\n  border-radius: 30px;\n  padding: 10px 10px 10px 43px;\n  font-size: 16px;\n  color: #202b21;\n  width: 215px;\n  height: 41px;\n  box-sizing: border-box;\n  outline: none;\n}\nheader.header[_ngcontent-%COMP%]   .header-bottom[_ngcontent-%COMP%]   .header-bottom-search[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url('search-normal.png');\n  background-size: cover;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 15px;\n  top: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBREo7QUFHRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFEUjtBQUdRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBRFY7QUFHVTtFQUNFLDRCQ2hDTztBRCtCbkI7QUFJVTtFQUNFLGVBQUE7RUFDQSxjQ3JDTztFRHNDUCxlQUFBO0VBQ0EscUJBQUE7QUFGWjtBQVFJO0VBQ0UsZUFBQTtFQUNBLGNDL0NhO0VEZ0RiLHFCQUFBO0VBQ0Esa0JBQUE7QUFOTjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUE47QUFTTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUFI7QUFTUTtFQUNFLGtCQUFBO0FBUFY7QUFVUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQzdFUztFRDhFVCxrQkFBQTtFQUNBLG1CQUFBO0FBUlY7QUFnQkU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWRKO0FBZ0JJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQWROO0FBZU07RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFiUjtBQWVRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBYlY7QUFlVTtFQUNFLDRCQzFHTztBRDZGbkI7QUFnQlU7RUFDRSxlQUFBO0VBQ0EsY0MvR087RURnSFAscUJBQUE7RUFDQSxlQUFBO0FBZFo7QUFvQkk7RUFDRSxrQkFBQTtBQWxCTjtBQW9CTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxjQy9IVztFRGdJWCxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQWxCUjtBQXFCTTtFQUNFLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBbkJSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG5oZWFkZXIuaGVhZGVyIHtcbiAgcGFkZGluZzogMzBweCAwIDQ5cHggMDtcblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuaGVhZGVyLXRvcCB7XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzVDNUM1O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgLmhlYWRlci10b3AtbWVudSB7XG4gICAgICBtYXJnaW4tbGVmdDogMjZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTkzcHg7XG5cbiAgICAgIG5hdiB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlci10b3AtcGhvbmUgYSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDU5cHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci10b3AtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgYSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIHJpZ2h0OiAtMThweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgY29sb3I6ICRncmVlbi10ZXh0LWNvbG9yO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjZENUI5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgfVxuXG4gIC5oZWFkZXItYm90dG9tIHtcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuaGVhZGVyLWJvdHRvbS1tZW51IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA5N3B4O1xuICAgICAgbmF2IHVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyLWJvdHRvbS1zZWFyY2gge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmVlbi10ZXh0LWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA0M3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvcjtcbiAgICAgICAgd2lkdGg6IDIxNXB4O1xuICAgICAgICBoZWlnaHQ6IDQxcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9zZWFyY2gtbm9ybWFsLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICB0b3A6IDExcHg7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbiIsIiRjb250YWluZXItd2lkdGg6IDEyNDBweDtcbiRncmVlbi10ZXh0LWNvbG9yOiAjMjAyYjIxO1xuJGdyZXktdGV4dC1jb2xvcjogIzJjMmMyYztcbiJdfQ== */"] });


/***/ }),

/***/ 1184:
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/category.service */ 7408);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 1070);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 4162);





class LayoutComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
    }
    ngOnInit() {
        this.categoryService.getCategoriesWithTypes()
            .subscribe((categories) => {
            this.categories = categories.map(item => {
                return Object.assign({ itemUrl: item.types.map(item => item.url) }, item);
            });
        });
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 2, consts: [[3, "categories"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header", 0)(1, "router-outlet")(2, "app-footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("categories", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("categories", ctx.categories);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent], encapsulation: 2 });


/***/ }),

/***/ 5237:
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CartService {
    constructor(http) {
        this.http = http;
        this.count = 0;
        this.count$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    getCart() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "cart", { withCredentials: true });
    }
    getCartCount() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "cart/count", { withCredentials: true })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
            this.count = data.count;
            this.count$.next(this.count);
        }));
    }
    updateCart(productId, quantity) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "cart", { productId, quantity }, { withCredentials: true })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
            this.count = 0;
            data.items.forEach(item => {
                this.count += item.quantity;
            });
            this.count$.next(this.count);
        }));
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7408:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "categories");
    }
    getCategoriesWithTypes() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "types")
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((items) => {
            const array = [];
            items.forEach((item) => {
                const foundItem = array.find(arrayItem => arrayItem.url === item.category.url);
                if (foundItem) {
                    foundItem.types.push({
                        id: item.id,
                        name: item.name,
                        url: item.url
                    });
                }
                else {
                    array.push({
                        id: item.category.id,
                        name: item.category.name,
                        url: item.category.url,
                        types: [
                            {
                                id: item.id,
                                name: item.name,
                                url: item.url
                            }
                        ]
                    });
                }
            });
            return array;
        }));
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 773:
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ProductService {
    constructor(http) {
        this.http = http;
    }
    getBestProducts() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "products/best");
    }
    getProducts(params) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "products", {
            params: params
        });
    }
    getProduct(url) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "products/" + url);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_password_repeat_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/password-repeat.directive */ 3674);
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-card/product-card.component */ 3284);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_category_filter_category_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/category-filter/category-filter.component */ 7007);
/* harmony import */ var _components_count_selector_count_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/count-selector/count-selector.component */ 9968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_password_repeat_directive__WEBPACK_IMPORTED_MODULE_0__.PasswordRepeatDirective,
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__.ProductCardComponent,
        _components_category_filter_category_filter_component__WEBPACK_IMPORTED_MODULE_2__.CategoryFilterComponent,
        _components_count_selector_count_selector_component__WEBPACK_IMPORTED_MODULE_3__.CountSelectorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule], exports: [_directives_password_repeat_directive__WEBPACK_IMPORTED_MODULE_0__.PasswordRepeatDirective,
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__.ProductCardComponent,
        _components_category_filter_category_filter_component__WEBPACK_IMPORTED_MODULE_2__.CategoryFilterComponent,
        _components_count_selector_count_selector_component__WEBPACK_IMPORTED_MODULE_3__.CountSelectorComponent] }); })();


/***/ }),

/***/ 1435:
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/product.service */ 773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/product-card/product-card.component */ 3284);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






function MainComponent_46_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "product-card", 49);
} if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r4);
} }
function MainComponent_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MainComponent_46_ng_template_0_Template, 1, 1, "ng-template", 48);
} }
function MainComponent_83_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const review_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-image: url('assets/images/reviews/", review_r7.image, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", review_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", review_r7.text, " ");
} }
function MainComponent_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MainComponent_83_ng_template_0_Template, 7, 5, "ng-template", 48);
} }
class MainComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: false
        };
        this.customOptionsReviews = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            margin: 26,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                }
            },
            nav: false
        };
        this.reviews = [
            {
                name: "Ирина",
                image: "review1.png",
                text: "В ассортименте я встретила все комнатные растения, которые меня интересовали. Цены - лучшие в городе. Доставка - очень быстрая и с заботой о растениях. "
            },
            {
                name: "Анастасия",
                image: "review2.png",
                text: "Спасибо огромное! Цветок арека невероятно красив - просто бомба! От него все в восторге! Спасибо за сервис - все удобно сделано, доставили быстро. И милая открыточка приятным бонусом."
            },
            {
                name: "Илья",
                image: "review3.png",
                text: "Магазин супер! Второй раз заказываю курьером, доставлено в лучшем виде. Ваш ассортимент комнатных растений впечатляет! Спасибо вам за хорошую работу!"
            },
            {
                name: "Аделина",
                image: "review4.jpg",
                text: "Хочу поблагодарить всю команду за помощь в подборе подарка для моей мамы! Все просто в восторге от мини-сада! А самое главное, что за ним удобно ухаживать, ведь в комплекте мне дали целую инструкцию."
            },
            {
                name: "Яника",
                image: "review5.jpg",
                text: "Спасибо большое за мою обновлённую коллекцию суккулентов! Сервис просто на 5+: быстро, удобно, недорого. Что ещё нужно клиенту для счастья?"
            },
            {
                name: "Марина",
                image: "review6.jpg",
                text: "Для меня всегда важным аспектом было наличие не только физического магазина, но и онлайн-маркета, ведь не всегда есть возможность прийти на место. Ещё нигде не встречала такого огромного ассортимента!"
            }
        ];
    }
    ngOnInit() {
        this.productService.getBestProducts()
            .subscribe((data) => {
            this.products = data;
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 93, vars: 4, consts: [[1, "main"], [1, "container"], [1, "main-title"], [1, "main-text"], [1, "offers"], [1, "offer", "offer-insta"], [1, "offer-title"], [1, "offer-content"], [1, "offer-image"], ["src", "/assets/images/page/offer1.png", "alt", "flower"], [1, "offer-inner-content"], [1, "offer-text"], [1, "offer-button"], ["href", "#", 1, "button"], [1, "offer", "offer-collection"], ["src", "/assets/images/page/offer2.png", "alt", "flower"], ["routerLink", "/catalog", 1, "button"], [1, "best-products"], [1, "carousel-header"], [1, "carousel-title"], [1, "carousel-arrows"], [1, "move-backward", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.5561 15C10.4013 15 10.2465 14.9435 10.1243 14.8224L4.8127 9.55746C3.94915 8.70151 3.94915 7.29647 4.8127 6.44052L10.1243 1.17563C10.3606 0.941456 10.7516 0.941456 10.9879 1.17563C11.2241 1.40981 11.2241 1.7974 10.9879 2.03158L5.67624 7.29647C5.2852 7.68407 5.2852 8.31392 5.67624 8.70151L10.9879 13.9664C11.2241 14.2006 11.2241 14.5882 10.9879 14.8224C10.8657 14.9354 10.7109 15 10.5561 15Z", "fill", "#202B21"], [1, "move-forward", 3, "click"], ["d", "M5.44392 1C5.59871 1 5.75349 1.05652 5.87569 1.17765L11.1873 6.44254C12.0508 7.29849 12.0508 8.70353 11.1873 9.55948L5.87569 14.8244C5.63944 15.0585 5.2484 15.0585 5.01215 14.8244C4.7759 14.5902 4.7759 14.2026 5.01215 13.9684L10.3238 8.70353C10.7148 8.31593 10.7148 7.68608 10.3238 7.29849L5.01215 2.0336C4.7759 1.79942 4.7759 1.41182 5.01215 1.17765C5.13435 1.0646 5.28914 1 5.44392 1Z", "fill", "#202B21"], [1, "carousel-items"], [3, "options"], ["owlCar", ""], [4, "ngFor", "ngForOf"], [1, "info"], [1, "info-title"], [1, "info-item", "info-delivery"], [1, "info-image"], ["src", "/assets/images/page/delivery-circle.png", "alt", "delivery"], [1, "info-text"], [1, "info-text-main"], [1, "info-text-extra"], [1, "info-item", "info-payment"], ["src", "/assets/images/page/payment-circle.png", "alt", "payment"], [1, "reviews"], [1, "reviews-title"], [1, "reviews-carousel"], ["owlCarRev", ""], [1, "reviews-arrows"], ["d", "M10.5551 15C10.4003 15 10.2455 14.9435 10.1233 14.8224L4.81172 9.55746C3.94818 8.70151 3.94818 7.29647 4.81172 6.44052L10.1233 1.17563C10.3596 0.941456 10.7506 0.941456 10.9869 1.17563C11.2231 1.40981 11.2231 1.7974 10.9869 2.03158L5.67526 7.29647C5.28423 7.68407 5.28423 8.31392 5.67526 8.70151L10.9869 13.9664C11.2231 14.2006 11.2231 14.5882 10.9869 14.8224C10.8647 14.9354 10.7099 15 10.5551 15Z", "fill", "#202B21"], [1, "map"], ["src", "https://yandex.ru/map-widget/v1/?um=constructor%3Ad2e14dc889a0db591058e3b2e75be736835192bd9ade01c1c39cb0f5a6f6b5b0&source=constructor", "width", "100%", "height", "500", "frameborder", "0"], ["carouselSlide", ""], [3, "product"], [1, "review-item"], [1, "review-item-head"], [1, "review-item-image"], [1, "review-item-name"], [1, "review-item-text"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u0421\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u0441\u0430\u0434 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u0432 \u0432\u0430\u0448\u0435\u043C \u0434\u043E\u043C\u0435 \u0438 \u043E\u0444\u0438\u0441\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u0415\u0441\u043B\u0438 \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435 \u0432\u044B \u0441\u043A\u0443\u0447\u0430\u0435\u0442\u0435 \u043F\u043E \u043F\u0440\u0438\u0440\u043E\u0434\u0435, \u043D\u0438\u0447\u0442\u043E \u043D\u0435 \u043C\u0435\u0448\u0430\u0435\u0442 \u0432\u0430\u043C \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0432 \u043E\u0430\u0437\u0438\u0441 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u0438\u043B\u0438 \u043E\u0444\u0438\u0441. \u0418 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u0430\u043C \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section", 4)(9, "div", 1)(10, "div", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u041F\u043E\u043B\u0443\u0447\u0438 \u0441\u043A\u0438\u0434\u043A\u0443 10% \u0432 \u043D\u0430\u0448\u0435\u043C \u0438\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C\u0435!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " \u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C \u043D\u0430 \u043D\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u0432 direct \u201C\u0445\u043E\u0447\u0443 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u0430\u0448\u043F\u043E \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 7)(26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12)(29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "section", 17)(32, "div", 1)(33, "div", 18)(34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " \u041B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u0435\u0441\u044F\u0446\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20)(37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_div_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.prev()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_div_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.next()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 26)(44, "owl-carousel-o", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, MainComponent_46_Template, 1, 0, null, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "section", 30)(48, "div", 1)(49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 32)(52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 35)(55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "1. \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C (\u043F\u043E \u0433. \u041C\u0438\u043D\u0441\u043A\u0443) - 10 BYN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u041D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u0441\u043B\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 35)(60, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "2. \u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437 - 0 BYN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u041F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432: \u0433. \u041C\u0438\u043D\u0441\u043A, \u0443\u043B. \u041A\u0430\u043B\u0438\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E 61, \u043F\u043E\u0434\u044A\u0435\u0437\u0434 1, \u043E\u0444\u0438\u0441 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 38)(65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 35)(68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "1. \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 35)(71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "2. \u0411\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 35)(74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "3. \u041E\u043F\u043B\u0430\u0442\u0430 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "section", 40)(77, "div", 1)(78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " \u041E\u0442\u0437\u044B\u0432\u044B \u043E Home decor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 42)(81, "owl-carousel-o", 27, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, MainComponent_83_Template, 1, 0, null, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 44)(85, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_a_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](82); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.prev()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_a_click_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](82); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.next()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "iframe", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptionsReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__.ProductCardComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".main[_ngcontent-%COMP%] {\n  background-image: url('main.png');\n  background-repeat: no-repeat;\n  background-position-x: calc(50% + 210px);\n  padding-top: 58px;\n  padding-bottom: 231px;\n}\n.main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 60px;\n  line-height: 130%;\n  color: #2A592E;\n  margin-bottom: 67px;\n}\n.main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  line-height: 140%;\n  color: #202b21;\n  max-width: 528px;\n}\n.offers[_ngcontent-%COMP%] {\n  background-color: #A4CBA3;\n  padding: 80px 0;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 250px;\n  padding: 35px 35px 0 35px;\n  border-radius: 5px;\n  background: #FFF;\n  box-sizing: border-box;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]   .offer-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 130%;\n  color: #202b21;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 130%;\n  color: #202b21;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-insta[_ngcontent-%COMP%]   .offer-image[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-insta[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  max-width: 234px;\n  margin-left: 58px;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-insta[_ngcontent-%COMP%]   .offer-button[_ngcontent-%COMP%] {\n  margin-left: 168px;\n  margin-top: 22px;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-insta[_ngcontent-%COMP%]   .offer-button[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 228px;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-collection[_ngcontent-%COMP%]   .offer-title[_ngcontent-%COMP%] {\n  max-width: 362px;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-collection[_ngcontent-%COMP%]   .offer-image[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-left: 81px;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-collection[_ngcontent-%COMP%]   .offer-button[_ngcontent-%COMP%] {\n  margin-left: 44px;\n  margin-top: 75px;\n}\n.offers[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .offer.offer-collection[_ngcontent-%COMP%]   .offer-button[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 177px;\n}\n.best-products[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  padding-bottom: 130px;\n}\n.info[_ngcontent-%COMP%] {\n  background-color: #A4CBA3;\n  background-image: url('info-bg.png');\n  background-repeat: no-repeat;\n  background-position-x: calc(50% + 340px);\n  padding: 80px 0;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 32px;\n  font-style: normal;\n  color: #202b21;\n  margin-bottom: 5px;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  color: #000000;\n  max-width: 442px;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-image[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .info-text-extra[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: italic;\n  font-weight: 300;\n  line-height: 130%;\n  margin-top: 8px;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-item.info-delivery[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]:last-child {\n  margin-top: 16px;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-item.info-payment[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .info-item.info-payment[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.reviews[_ngcontent-%COMP%] {\n  margin-top: 130px;\n  margin-bottom: 130px;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-weight: 400;\n  font-size: 32px;\n  font-style: normal;\n  color: #202b21;\n  text-align: center;\n  margin-bottom: 50px;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%] {\n  width: 396px;\n  height: 267px;\n  padding: 30px;\n  border-radius: 10px;\n  border: 2px solid #2A592E;\n  box-sizing: border-box;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-item-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-item-head[_ngcontent-%COMP%]   .review-item-image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  margin-right: 26px;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-item-head[_ngcontent-%COMP%]   .review-item-name[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 130%;\n  color: #202b21;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-item-text[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 140%;\n  color: #2c2c2c;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .reviews-arrows[_ngcontent-%COMP%] {\n  display: flex;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .reviews-arrows[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  top: calc(50% - 5px);\n  display: flex;\n  position: absolute;\n  cursor: pointer;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .reviews-arrows[_ngcontent-%COMP%]   a.move-backward[_ngcontent-%COMP%] {\n  left: -41px;\n}\n.reviews[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .reviews-carousel[_ngcontent-%COMP%]   .reviews-arrows[_ngcontent-%COMP%]   a.move-forward[_ngcontent-%COMP%] {\n  right: -41px;\n}\n.map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUhGO0FBTUk7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSk47QUFPSTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0N4QmE7RUR5QmIsZ0JBQUE7QUFMTjtBQVVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBUEY7QUFRRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQU5KO0FBUUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTk47QUFRTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDaERXO0FEMENuQjtBQVNNO0VBQ0UsYUFBQTtBQVBSO0FBU1E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3pEUztBRGtEbkI7QUFZUTtFQUNFLGdCQUFBO0FBVlY7QUFhUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVhWO0FBY1E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBWlY7QUFhVTtFQUNFLFlBQUE7QUFYWjtBQWtCUTtFQUNFLGdCQUFBO0FBaEJWO0FBbUJRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQWpCVjtBQW9CUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFsQlY7QUFtQlU7RUFDRSxZQUFBO0FBakJaO0FBeUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQXRCRjtBQTBCQTtFQUNFLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQXZCRjtBQTJCSTtFRXJIRiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0ROaUI7RUR5SGIsa0JBQUE7QUFyQk47QUF1Qkk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXJCTjtBQXVCTTtFQUNFLG1CQUFBO0FBckJSO0FBd0JNO0VBQ0UsZUFBQTtBQXRCUjtBQXlCUTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXZCVjtBQTJCUTtFQUNFLGdCQUFBO0FBekJWO0FBNkJRO0VBQ0UsbUJBQUE7QUEzQlY7QUE0QlU7RUFDRSxnQkFBQTtBQTFCWjtBQWtDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUEvQkY7QUFtQ0k7RUVyS0YsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNETmlCO0VEeUtiLGtCQUFBO0VBQ0EsbUJBQUE7QUE3Qk47QUFnQ0k7RUFDRSxrQkFBQTtBQTlCTjtBQWdDTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQTlCUjtBQStCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTdCVjtBQThCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUE1Qlo7QUE4QlU7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0N2TU87QUQyS25CO0FBZ0NRO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NoTlE7QURrTGxCO0FBaUNNO0VBRUUsYUFBQTtBQWhDUjtBQWlDUTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9CVjtBQWdDVTtFQUNFLFdBQUE7QUE5Qlo7QUFnQ1U7RUFDRSxZQUFBO0FBOUJaO0FBd0NBO0VBQ0Usc0JBQUE7QUFyQ0YiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW5zXCI7XG5cblxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhZ2UvbWFpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYyg1MCUgKyAyMTBweCk7XG4gIHBhZGRpbmctdG9wOiA1OHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjMxcHg7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgLm1haW4tdGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgY29sb3I6ICMyQTU5MkU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2N3B4O1xuICAgIH1cblxuICAgIC5tYWluLXRleHQge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gICAgICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICBtYXgtd2lkdGg6IDUyOHB4O1xuICAgIH1cbiAgfVxufVxuXG4ub2ZmZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E0Q0JBMztcbiAgcGFkZGluZzogODBweCAwO1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5vZmZlciB7XG4gICAgICB3aWR0aDogNjAwcHg7XG4gICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgcGFkZGluZzogMzVweCAzNXB4IDAgMzVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAub2ZmZXItdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5vZmZlci1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAub2ZmZXItdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLm9mZmVyLWluc3RhIHtcbiAgICAgICAgLm9mZmVyLWltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmVyLXRleHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMzRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlci1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNjhweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDIyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLm9mZmVyLWNvbGxlY3Rpb24ge1xuXG4gICAgICAgIC5vZmZlci10aXRsZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzNjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlci1pbWFnZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogODFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZlci1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTc3cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5iZXN0LXByb2R1Y3RzIHtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XG5cbn1cblxuLmluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTRDQkEzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhZ2UvaW5mby1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYyg1MCUgKyAzNDBweCk7XG4gIHBhZGRpbmc6IDgwcHggMDtcblxuICAuY29udGFpbmVyIHtcblxuICAgIC5pbmZvLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGhlYWQtbG9yYS0zMjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmluZm8taXRlbSB7XG4gICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBtYXgtd2lkdGg6IDQ0MnB4O1xuXG4gICAgICAuaW5mby1pbWFnZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIC5pbmZvLXRleHQtbWFpbiB7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8tdGV4dC1leHRyYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5pbmZvLWRlbGl2ZXJ5IHtcbiAgICAgICAgLmluZm8tdGV4dDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmluZm8tcGF5bWVudCB7XG4gICAgICAgIC5pbmZvLXRleHQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5yZXZpZXdzIHtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xuXG4gIC5jb250YWluZXIge1xuXG4gICAgLnJldmlld3MtdGl0bGUge1xuICAgICAgQGluY2x1ZGUgaGVhZC1sb3JhLTMyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG5cbiAgICAucmV2aWV3cy1jYXJvdXNlbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5yZXZpZXctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAzOTZweDtcbiAgICAgICAgaGVpZ2h0OiAyNjdweDtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzJBNTkyRTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLnJldmlldy1pdGVtLWhlYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAucmV2aWV3LWl0ZW0taW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmV2aWV3LWl0ZW0tbmFtZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICAgICAgICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJldmlldy1pdGVtLXRleHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICAgICAgICAgIGNvbG9yOiAkZ3JleS10ZXh0LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucmV2aWV3cy1hcnJvd3Mge1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGEge1xuICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSA1cHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAmLm1vdmUtYmFja3dhcmQge1xuICAgICAgICAgICAgbGVmdDogLTQxcHhcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5tb3ZlLWZvcndhcmQge1xuICAgICAgICAgICAgcmlnaHQ6IC00MXB4XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG4ubWFwIGlmcmFtZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4iLCIkY29udGFpbmVyLXdpZHRoOiAxMjQwcHg7XG4kZ3JlZW4tdGV4dC1jb2xvcjogIzIwMmIyMTtcbiRncmV5LXRleHQtY29sb3I6ICMyYzJjMmM7XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxvcmEtMzIge1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogJGdyZWVuLXRleHQtY29sb3Jcbn1cblxuQG1peGluIGhlYWQtbG9yYS0zNiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwXG59XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: "http://localhost:3000/api/",
    serverStaticPath: "http://localhost:3000/images/products/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map